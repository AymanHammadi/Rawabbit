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
    <div className="flex h-full w-full flex-col text-center">
      <h1 className="h1-bold mx-8 text-5xl max-sm:text-4xl	leading-loose		primary-text-gradient">
        اكتشف عالمك الرقمي الجديد!
      </h1>
      <p className="text-2xl text-dark500_light700 max-sm:text-lg my-3.5 leading-10	">
        منصة شاملة تجمع كل ما تحتاجه من مواقع وتطبيقات في مكان واحد.
      </p>
      <br></br>
      <div className="flex items-center flex-col">
        <Select>
          <SelectTrigger className="no-focus w-40	 paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border">
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
          <Button className="btn-main-action min-h-[56px] w-40 group/item">
            تصفح الآن
            <FaAngleLeft className="group-hover/item:-translate-x-1 btn-transition" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
