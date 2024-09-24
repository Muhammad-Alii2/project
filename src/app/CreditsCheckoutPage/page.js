import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth";
import CreditsCheckoutPage from "@/components/Credits/CreditsCheckoutPage"
import style from "@/styles/credits.module.css";
import React from "react";

const page = async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return (
    <div className={style.creditpage}>
      <div
        className="container text-white w-100 p-3 mt-2"
        style={{ fontFamily: "stencil", background: '#0d1117', borderRadius: '12px', textAlign:'center', fontSize:'40px' }}
      >
        {" "}
        Credits <span style={{color:'#f09042'}}>CheckOut</span>
      </div>
      <CreditsCheckoutPage session={session} />
    </div>
  );
};
export default page;