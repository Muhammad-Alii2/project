import CreateCourseForm from "@/components/CreateCourseForm";
import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth";
import style from "@/styles/coursepage.module.css";
import React from "react";

const page = async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return (
    <div className={style.coursepage}>
      <div className="container mt-5 mb-5 ">
        <div className="mb-4" style={{ fontFamily: "stencil", color: "" }}>
          <h1 className="text-uppercase fw-bold" style={{color: "#ffffff"}}>Create <span style={{color: "#f09042"}}>Course</span></h1>
          <h5 className="text-capitalize" style={{color: "#ffffff"}}>Through AI</h5>
        </div>
        <div
          className=" fs-4 container text-white w-100 p-3 "
          style={{ fontFamily: "kufi", background: '#0d1117', borderRadius: '12px', }}
        >
          {" "}
          {/* to make the background transperant use bg-transparent */}
          Enter in a course title, or what you want to learn about. Then enter a
          list of units, which are the specifics you want to learn. and our AI
          will generate a course for you!
        </div>
        <CreateCourseForm session={session} />
      </div>
    </div>
  );
};
export default page;
