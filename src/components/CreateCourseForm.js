"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { createChaptersSchema } from "@/validators/course";
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import "../styles/fonts.module.css";
import Link from "next/link";
import style from "@/styles/buttons/CC_buttons.css";
import { X } from "lucide-react";
import { Plus } from "lucide-react";

const CreateCourseForm =  ({ session }) => {
  const { mutate: createChapters, isLoading } = useMutation({
    mutationFn: async ({ title, units }) => {
      try {
        const response = await fetch("/api/course/createChapters", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, units }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error creating chapters:", error.message);
        throw error;
      }
    },
  });
  
  const form = useForm({
    resolver: zodResolver(createChaptersSchema),
    defaultValues: {
      title: "",
      units: ["", "", ""],
    },
  });

  const [generatedHref, setGeneratedHref] = useState("");
  const linkButtonRef = useRef();

  useEffect(() => {
    if (generatedHref) {
      linkButtonRef.current.click();
    }
  }, [generatedHref]);

  const checkCreditsAndSubmit = (data) => {
    // Check if the user has enough credits
    if (session.user.credits < 1) {
      alert(
        "Your credits are low. You need a minimum of 1 credit to continue. Kindly buy more credits."
      );
      return; // Prevent form submission
    }

    // Proceed with submission if credits are sufficient
    onSubmit(data);
  };

  async function onSubmit(data) {
    if (data.units.some((unit) => unit === "")) {
      alert("Please fill all the units");
      return;
    }
    setGeneratedHref("#");
    createChapters(data, {
      onSuccess: async ({ course_id }) => {
        // Generate the href based on the course_id
        const href = `/create/${course_id}`;
        // setGeneratedHref(href);

        try {
          // Make an API call to update the user's credits
          const updateResponse = await fetch("/api/credits/updateCredits", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: session.user.id,  
              userRole: session.user.role,
              courseId: course_id,
              actionPerformed: data.title,
              credsToUpdate: -1, // Deduct 1 credit
            }),
          });

          if (!updateResponse.ok) {
            throw new Error(`Credit update failed. Status: ${updateResponse.status}`);
          }
          const updateData = await updateResponse.json();
          if (updateData.success) {
            console.log(`Course created successfully! Your remaining credits: ${updateData.updatedCredits}`);
            session.user.credits = updateData.updatedCredits
            window.location.href=`${href}`
          } else {
            console.error("Failed to update credits:", updateData.error);
          }
        } catch (error) {
          console.error("Error updating credits:", error.message);
        }
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }

  return (
    <div className="card container w-100 p-3 mt-3 text-muted col-form-label "
    style={{ fontFamily: "kufi", background: '#0d1117', borderRadius: '12px', }}
    >
      <form onSubmit={form.handleSubmit(checkCreditsAndSubmit)}>
        <div className="form-group row align-items-center">
          <label className=" col-form-label col-md-1 text-white font-monospace text-white font-monospace fs-4 mb-4  ">
            <label htmlFor="title border-white " style={{ fontFamily: "quando" }}>Title: </label>
          </label>{" "}
          <div className="col-md-11">
            <input
              type="text"
              className="form-control mb-4 focus-ring focus-ring-light border-0"
              style={{fontSize: "20px"}}
              id="title"
              placeholder="Enter the main topic of your course (e.g: 'Java')"
              {...form.register("title")}
            />
          </div>
        </div>

        {form.watch("units").map((_, index) => (
          <div className="form-group row align-items-center " key={index}>
            <label
              htmlFor={`units.${index}`}
              className="col-form-label col-md-1 text-white  mb-3"
              style={{ fontFamily: "quando" }}
            >
              Unit {index + 1}
            </label>
            <div className="col-md-11">
              <input
                key={index}
                type="text"
                className="form-control mb-3 focus-ring focus-ring-light border-0"
                style={{fontSize: "18px"}}
                id="units"
                placeholder="Now enter the subtopic of your course (e.g: 'OOP')"
                {...form.register(`units.${index}`)}
              />
            </div>
          </div>
        ))}
    
        {/* BUTTONS */}
        <div
          className="container d-flex gap-2 col-form-label justify-content-center"
          style={{ fontFamily: "kufi"}}
        >
          {" "}
          <button
            type="button"
            className="addbutton"
            onClick={() => {
              form.setValue("units", [...form.watch("units"), ""]);
            }}
          >
            <span className="button__text">Add</span>
            <span className="button__icon">
              <Plus />
            </span>
          </button>
          <button
            type="button"
            className="delbutton"
            onClick={() => {
              form.setValue("units", form.watch("units").slice(0, -1));
            }}
          >
            <span className="button__text">Delete</span>
            <span className="button__icon">
              <X />
            </span>
          </button>
          <hr className="flex-grow-1 bg-secondary" style={{ height: "4px", border: "none" }} />
          <button
            disabled={isLoading}
            type="submit"
            className="genButton"
            style={{ fontFamily: "kufi", fontSize:"20px", fontWeight: "bold" }}
          >
            Generate
          </button>
        </div>
      </form>
      <Link
        href={generatedHref}
        ref={linkButtonRef}
        style={{ display: "none" }}
      >
        Hidden Link
      </Link>
    </div>
  );
};
export default CreateCourseForm;