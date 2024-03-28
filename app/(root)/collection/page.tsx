import ContentCard from "@/components/cards/ContentCard";
import Filters from "@/components/shared/Filters";
import NoResult from "@/components/shared/NoResult";
// import Pagination from "@/components/shared/Pagination";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { CollectionFilters } from "@/constants/filters";
// import { getSavedCollections } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
// import { auth } 
export default async function Home({ searchParams }: SearchParamsProps) {
interface Tag {
  _id: string;
  name: string;
}

interface Author {
  _id: string;
  name: string;
  picture: string;
}

interface Content {
  _id: string;
  title: string;
  tags: Tag[];
  author: Author;
  imgUrl: string;
  alt: string;
  href: string;
  upvotes: string[];
  views: number;
  createdAt: Date;
  website: string;
  iosApp: string;
  androidApp: string;
  description: string;
}

const data: Content[] = [  ];
  for (let i = 2; i <= 10; i++) {
    data.push({
      _id: `${i}`,
      title: `عنوان المحتوى ${i}`,
      tags: [{ _id: `${i}`, name: `تصنيف ${i}` }],
      author: {
        _id: "456",
        name: `المؤلف ${i}`,
        picture: "/public/assets/images/logo.png.svg",
      },
      imgUrl: `/assets/images/logo.png`,
      alt: `الصورة ${i}`,
      href: `/link/${i}`,
      upvotes: [`user${i}`],
      views: 1000 + i * 100,
      createdAt: new Date(),
      website: `https://example${i}.com`,
      iosApp: `https://example${i}.com/ios`,
      androidApp: `https://example${i}.com/android`,
      description: `وصف المحتوى ${i}`,
    });
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
        {data.length > 0 ? (
          data.map((link: any) => (
            <ContentCard
              key={link._id}
              _id={link._id}
              title={link.title}
              categories={link.categories}
              author={link.author}
              imgUrl={link.imgUrl}
              alt={link.alt}
              upvotes={link.upvotes}
              views={link.views}
              createdAt={link.createdAt}
              website="https://example.com"
              iosApp="https://example.com/ios"
              androidApp="https://example.com/android"
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
        <ContentCard
          _id="1"
          title="وزارة الهجرة التركية"
          categories={[{ _id: "1", name: "حكومي" }]}
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
