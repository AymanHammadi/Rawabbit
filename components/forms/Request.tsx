"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { WebsiteAppSchema } from "@/lib/validations";
// import { Badge } from "../ui/badge";
import { Textarea } from "../ui/textarea";

interface Props {
  type?: string;
  mongoUserId: string;
  requestDetails?: string;
}

const Request = ({ type, mongoUserId, requestDetails }: Props) => {
  // const { mode } = useTheme();
  // const editorRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const router = useRouter();
  // const pathname = usePathname();

  const parsedRequestDetails =
    requestDetails && JSON.parse(requestDetails || "");

  // 1. Define your form.
  const form = useForm<z.infer<typeof WebsiteAppSchema>>({
    resolver: zodResolver(WebsiteAppSchema),
    defaultValues: {
      title: parsedRequestDetails?.title || "",
      category: parsedRequestDetails?.category || "",
      country: parsedRequestDetails?.country || "",
      website: parsedRequestDetails?.website || "",
      iosApp: parsedRequestDetails?.iosApp || "",
      androidApp: parsedRequestDetails?.androidApp || "",
      description: parsedRequestDetails?.description || "",
    },
  });


  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof WebsiteAppSchema>) {

    try {
      console.log(JSON.stringify(values));
     
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                اسم الموقع أو التطبيق{" "}
                <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                الفئة
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border">
                    <SelectValue placeholder="اختر فئة" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border">
                  <SelectItem value="1">خدمات حكومية</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                الدولة
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border">
                    <SelectValue placeholder="اختر دولة" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border">
                  <SelectItem value="3">مصر</SelectItem>
                  <SelectItem value="2">السعودية</SelectItem>
                  <SelectItem value="1">تركيا</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                رابط الموقع الإلكتروني{" "}
                <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="iosApp"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                رابط تطبيق الايفون <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="androidApp"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                رابط تطبيق الاندرويد
                <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                هل تود اخبارنا بشيء آخر؟
              </FormLabel>
              <FormControl className="mt-3.5">
                <Textarea
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="primary-gradient w-fit !text-light-900"
          disabled={isSubmitting}
        >
          إرسال الطلب
        </Button>
      </form>
    </Form>
  );
};

export default Request;
