import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import style from "@/styles/admin.module.css";


const Page = () => {
  return (
    <div className={style.admin}>
    <div className="container mt-5">
      <div className="row">
        <ContactForm />
      </div>
    </div>
    </div>
  );
};

export default Page;
