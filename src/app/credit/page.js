import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth";
import CreditsUsage from "@/components/Credits/CreditsUsage"
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
  <CreditsUsage session={session}/>
</div>
    );
};
export default page;