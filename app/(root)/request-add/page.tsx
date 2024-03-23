import Request from "@/components/forms/Request";
// import { getUserById } from "@/lib/actions/user.action";
// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  // const { userId } = auth();

  // if (!userId) redirect("/sign-in");

  // const mongoUser = await getUserById({ userId });

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">
        اطلب إضافة موقع أو طبيق إلى منصة روابط
      </h1>

      <div className="mt-9">
        <Request mongoUserId="12" />
      </div>
    </div>
  );
};

export default Page;
