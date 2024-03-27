import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = async () => {
  return (
    <div className="w-full h-full max-sm:h-40 flex p-2 rounded justify-between relative bor">
      <div className="pr-3 pt-3 mr-10 flex flex-col h-full w-full text-center">
        <h1 className="h1-bold mx-8 text-5xl max-sm:text-4xl	leading-loose		primary-text-gradient">
          اكتشف عالمك الرقمي الجديد!
        </h1>
        <p className="text-2xl text-dark500_light700 max-sm:text-lg my-3.5 leading-10	">
          منصة شاملة تجمع كل ما تحتاجه من مواقع وتطبيقات في مكان واحد.
        </p>
        <br></br>
        <Select>
          <SelectTrigger className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border">
            <SelectValue placeholder=" اختر دولة" />
          </SelectTrigger>

          <SelectContent className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border">
            <SelectItem value="egypt">مصر</SelectItem>
            <SelectItem value="ksa">السعودية</SelectItem>
            <SelectItem value="algiria">الجزائر</SelectItem>
            <SelectItem value="bahrin">البحرين</SelectItem>
            <SelectItem value="qatar">قطر</SelectItem>
            <SelectItem value="turkey">تركيا</SelectItem>
            <SelectItem value="oman">عمان</SelectItem>
            <SelectItem value="urdun">الأردن</SelectItem>
          </SelectContent>
        </Select>
        <br></br>
        <Link href={"/categories"}>
          <Button className="btn-main-action">
            تصفح الآن
            <FaAngleLeft className="hover:left-3" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
