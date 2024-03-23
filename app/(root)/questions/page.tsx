import QuestionCard from "@/components/cards/QuestionCard";
import PageFilter from "@/components/shared/PageFilter";
import Filters from "@/components/shared/Filters";
import NoResult from "@/components/shared/NoResult";
// import Pagination from "@/components/shared/Pagination";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { PageFilters } from "@/constants/filters";
// import {
//   getQuestions,
//   getRecommendedQuestions,
// } from "@/lib/actions/question.action";
import { SearchParamsProps } from "@/types";
import Link from "next/link";

import type { Metadata } from "next";
// import { auth } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: " روابط | الأسئلة ",
};

export default async function Home({ searchParams }: SearchParamsProps) {
  // const { userId } = auth();

  let result;
  // Sample data representing questions
const sampleQuestions = [
  {
    _id: "1",
    title: "كيفية اختبار مكون React؟",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Testing" },
    ],
    author: {
      _id: "1",
      name: "جون دو",
      picture: "/public/assets/images/logo.png",
      clerkId: "clerk123",
    },
    upvotes: ["user1", "user2"],
    views: 50,
    answers: [{}, {}, {}], // Example empty answers
    createdAt: new Date("2024-03-22T12:00:00Z"),
  },
  {
    _id: "2",
    title: "ما هي أفضل الممارسات لـ Next.js SEO؟",
    tags: [
      { _id: "3", name: "Next.js" },
      { _id: "4", name: "SEO" },
    ],
    author: {
      _id: "2",
      name: "جين سميث",
      picture: "/public/assets/images/logo.png",
      clerkId: "clerk456",
    },
    upvotes: ["user3", "user4", "user5"],
    views: 70,
    answers: [{}, {}, {}, {}, {}], // Example empty answers
    createdAt: new Date("2024-03-21T10:30:00Z"),
  },
  // Add more sample questions as needed
];

  // if (searchParams?.filter === "recommended") {
  //   if (userId) {
  //     result = await getRecommendedQuestions({
  //       userId,
  //       searchQuery: searchParams.q,
  //       page: searchParams.page ? +searchParams.page : 1,
  //     });
  //   } else {
  //     result = {
  //       questions: [],
  //       isNext: false,
  //     };
  //   }
  // } else {
  //   result = await getQuestions({
  //     searchQuery: searchParams.q,
  //     filter: searchParams.filter,
  //     page: searchParams.page ? +searchParams.page : 1,
  //   });
  // }

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">جميع الأسئلة</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            اسأل سؤال
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="ابحث عن سؤال"
          otherClasses="flex-1"
        />

        <Filters
          filters={PageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <PageFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {sampleQuestions.length > 0 ? (
          sampleQuestions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="لا يوجد سؤال لإظهاره"
            description="💡!كن أول من كسر حاجز الصمت ! 🚀 اطرح سؤالاً وابدأ المناقشة. يمكن أن يكون سؤالك هو الشيء التالي الذي يتعلم منه الآخرون. شارك"
            link="/ask-question"
            linkTitle="اسأل سؤالًا"
          />
        )}
      </div>
      ;
      <div className="mt-10">
        <NoResult
          title="لا يوجد سؤال لإظهاره"
          description="💡!كن أول من كسر حاجز الصمت ! 🚀 اطرح سؤالاً وابدأ المناقشة. يمكن أن يكون سؤالك هو الشيء التالي الذي يتعلم منه الآخرون. شارك"
          link="/ask-question"
          linkTitle="اسأل سؤالًا"
        />
        {/* <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        /> */}
      </div>
    </>
  );
}
