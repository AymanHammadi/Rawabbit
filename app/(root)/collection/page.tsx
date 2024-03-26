import { options } from "@/app/api/auth/[...nextauth]/options";
import LinkCard from "@/components/cards/LinkCard";
import Filters from "@/components/shared/Filters";
import NoResult from "@/components/shared/NoResult";
// import Pagination from "@/components/shared/Pagination";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { CollectionFilters } from "@/constants/filters";
// import { getSavedCollections } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// import { auth } 
export default async function Home({ searchParams }: SearchParamsProps) {
  // const { userId } = auth(); 
  // if (!userId) return null;

  // const result = await getSavedCollections({
  //   clerkId: userId,
  //   searchQuery: searchParams.q,
  //   filter: searchParams.filter,
  //   page: searchParams.page ? +searchParams.page : 1,
  // });
  const fakeLinks: any[] = [];
  
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/collection");
  }

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">المفضلة</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="ابحث داخل محفوضاتك"
          otherClasses="flex-1"
        />

        <Filters
          filters={CollectionFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {fakeLinks.length > 0 ? (
          fakeLinks.map((link: any) => (
            <LinkCard
              key={link._id}
              _id={link._id}
              title={link.title}
              tags={link.tags}
              author={link.author}
              imgUrl={link.imgUrl}
              alt={link.alt}
              upvotes={link.upvotes}
              views={link.views}
              createdAt={link.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="لا يوجد شيء لعرضه!"
            description="يبدو أنك لم تقم بحفظ محتوى! ابدأ التصفح واختر ما يعجبك.. يمكنك النقر على زر نجمة في يسار العنوان. جميع المفضلة ستكون في هذه الصفحة 💡"
            link="/categories"
            linkTitle="تصفح الآن !"
          />
        )}
        <q>هذا مثال لمحتوى المفضلة سيتم حذفة بعد الانتهاء من التطوير</q>
        <LinkCard
          _id="1"
          title="وزارة الهجرة التركية"
          tags={[{ _id: "1", name: "حكومي" }]}
          author={{
            _id: "123",
            name: "محمد علي",
            picture: "/public/assets/icons/google-play.svg",
          }}
          imgUrl="/assets/images/example.image.png"
          alt="وزارة الداخلية"
          href="/link/1"
          upvotes={["user1", "user2", "user3"]}
          views={1000}
          createdAt={new Date()}
          website="https://example.com"
          iosApp="https://example.com/ios"
          androidApp="https://example.com/android"
        />
      </div>

      <div className="mt-10">
        {/* <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        /> */}
      </div>
    </>
  );
}
