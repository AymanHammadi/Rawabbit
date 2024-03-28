import Request from "@/components/forms/Request";
import React from "react";

const Page = async () => {

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">
        اطلب إضافة موقع أو تطبيق إلى منصة روابط
      </h1>

      <div className="mt-9">
        <Request mongoUserId="12" />
      </div>
    </div>
  );
};

export default Page;
