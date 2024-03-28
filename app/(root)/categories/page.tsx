import Filters from "@/components/shared/Filters";
import NoResult from "@/components/shared/NoResult";
// import Pagination from "@/components/shared/Pagination";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { CategoryFilters } from "@/constants/filters";
// import { getAllcategorys } from "@/lib/actions/category.actions";
import { SearchParamsProps } from "@/types";
import Link from "next/link";
interface Category {
  _id: string,
  name: string;
  description: string;
  country: string;
  createdOn: Date;
  contents: string[]; 
}

const Page = async ({ searchParams }: SearchParamsProps) => {
  // const result = await getAllcategories({
  //   searchQuery: searchParams.q,
  //   filter: searchParams.filter,
  //   page: searchParams.page ? +searchParams.page : 1,
  // });
const result: Category[] = [
  {
    _id: "1",
    name: "أخبار",
    description: "محتوى يتعلق بآخر الأخبار والأحداث",
    country: "مصر",
    createdOn: new Date("2024-03-29"),
    contents: [
      "موقع الأخبار 1",
      "موقع الأخبار 2",
      "موقع الأخبار 3",
      "تطبيق الأخبار 1",
      "تطبيق الأخبار 2",
      // Add more content names as needed
    ],
  },
  {
    _id: "2",
    name: "رياضة",
    description: "محتوى يتعلق بالأحداث الرياضية والمباريات",
    country: "السعودية",
    createdOn: new Date("2024-03-28"),
    contents: [
      "موقع الرياضة 1",
      "موقع الرياضة 2",
      "تطبيق الرياضة 1",
      // Add more content names as needed
    ],
  },
  {
    _id: "3",
    name: "تكنولوجيا",
    description: "محتوى يتعلق بأحدث التقنيات والأجهزة",
    country: "الإمارات",
    createdOn: new Date("2024-03-27"),
    contents: [
      "موقع التكنولوجيا 1",
      "موقع التكنولوجيا 2",
      "تطبيق التكنولوجيا 1",
      "تطبيق التكنولوجيا 2",
      // Add more content names as needed
    ],
  },
  {
    _id: "1",
    name: "أخبار",
    description: "محتوى يتعلق بآخر الأخبار والأحداث",
    country: "مصر",
    createdOn: new Date("2024-03-29"),
    contents: [
      "موقع الأخبار 1",
      "موقع الأخبار 2",
      "موقع الأخبار 3",
      "تطبيق الأخبار 1",
      "تطبيق الأخبار 2",
      // Add more content names as needed
    ],
  },
  {
    _id: "2",
    name: "رياضة",
    description: "محتوى يتعلق بالأحداث الرياضية والمباريات",
    country: "السعودية",
    createdOn: new Date("2024-03-28"),
    contents: [
      "موقع الرياضة 1",
      "موقع الرياضة 2",
      "تطبيق الرياضة 1",
      // Add more content names as needed
    ],
  },
  {
    _id: "3",
    name: "تكنولوجيا",
    description: "محتوى يتعلق بأحدث التقنيات والأجهزة",
    country: "الإمارات",
    createdOn: new Date("2024-03-27"),
    contents: [
      "موقع التكنولوجيا 1",
      "موقع التكنولوجيا 2",
      "تطبيق التكنولوجيا 1",
      "تطبيق التكنولوجيا 2",
      // Add more content names as needed
    ],
  },
  {
    _id: "1",
    name: "أخبار",
    description: "محتوى يتعلق بآخر الأخبار والأحداث",
    country: "مصر",
    createdOn: new Date("2024-03-29"),
    contents: [
      "موقع الأخبار 1",
      "موقع الأخبار 2",
      "موقع الأخبار 3",
      "تطبيق الأخبار 1",
      "تطبيق الأخبار 2",
      // Add more content names as needed
    ],
  },
  {
    _id: "2",
    name: "رياضة",
    description: "محتوى يتعلق بالأحداث الرياضية والمباريات",
    country: "السعودية",
    createdOn: new Date("2024-03-28"),
    contents: [
      "موقع الرياضة 1",
      "موقع الرياضة 2",
      "تطبيق الرياضة 1",
      // Add more content names as needed
    ],
  },
  {
    _id: "3",
    name: "تكنولوجيا",
    description: "محتوى يتعلق بأحدث التقنيات والأجهزة",
    country: "الإمارات",
    createdOn: new Date("2024-03-27"),
    contents: [
      "موقع التكنولوجيا 1",
      "موقع التكنولوجيا 2",
      "تطبيق التكنولوجيا 1",
      "تطبيق التكنولوجيا 2",
      // Add more content names as needed
    ],
  },
  {
    _id: "1",
    name: "أخبار",
    description: "محتوى يتعلق بآخر الأخبار والأحداث",
    country: "مصر",
    createdOn: new Date("2024-03-29"),
    contents: [
      "موقع الأخبار 1",
      "موقع الأخبار 2",
      "موقع الأخبار 3",
      "تطبيق الأخبار 1",
      "تطبيق الأخبار 2",
      // Add more content names as needed
    ],
  },
  {
    _id: "2",
    name: "رياضة",
    description: "محتوى يتعلق بالأحداث الرياضية والمباريات",
    country: "السعودية",
    createdOn: new Date("2024-03-28"),
    contents: [
      "موقع الرياضة 1",
      "موقع الرياضة 2",
      "تطبيق الرياضة 1",
      // Add more content names as needed
    ],
  },
  {
    _id: "3",
    name: "تكنولوجيا",
    description: "محتوى يتعلق بأحدث التقنيات والأجهزة",
    country: "الإمارات",
    createdOn: new Date("2024-03-27"),
    contents: [
      "موقع التكنولوجيا 1",
      "موقع التكنولوجيا 2",
      "تطبيق التكنولوجيا 1",
      "تطبيق التكنولوجيا 2",
      // Add more content names as needed
    ],
  },
];


  return (
    <>
      <h1 className="h1-bold text-dark100_light900">جميع الفئات</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/categories"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="ابحث عن فئة"
          otherClasses="flex-1"
        />

        <Filters
          filters={CategoryFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.length > 0 ? (
          result.map((category) => (
            <Link
              href={`/categorys/${category._id}`}
              key={category._id}
              className="shadow-light100_darknone"
            >
              <article className="background-light900_dark200 light-border flex w-full flex-col rounded-2xl border px-8 py-10 sm:w-[260px] card-link">
                <div className="background-light800_dark400 w-fit rounded-sm px-5 py-1.5">
                  <p className="paragraph-semibold text-dark300_light900">
                    {category.name}
                  </p>
                </div>

                <p className="small-medium text-dark400_light500 mt-3.5">
                  <span className="body-semibold primary-text-gradient mr-2.5">
                    {category.contents.length}+
                  </span>{" "}
                  عدد المحتوى
                </p>
              </article>
            </Link>
          ))
        ) : (
          <NoResult
            title="للأسف لا يوجد شيء!"
            description="يبدو أنه لم يتم العثور على فئات."
            link="/reqest-add"
            linkTitle="يمكنك طلب إضافة محتوى من هنا"
          />
        )}
      </section>

      <div className="mt-10">
        {/* <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        /> */}
      </div>
    </>
  );
};

export default Page;
