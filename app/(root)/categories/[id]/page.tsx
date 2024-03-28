import ContentCard from "@/components/cards/ContentCard";
import NoResult from "@/components/shared/NoResult";
import Pagination from "@/components/shared/Pagination";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { getContentsByCategoryId } from "@/lib/actions/category.actions";
import { URLProps } from "@/types";

const Page = async ({ params, searchParams }: URLProps) => {
  const result = await getContentsByCategoryId({
    categoryId: params.id,
    page: searchParams.page ? +searchParams.page : 1,
    searchQuery: searchParams.q,
  });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">{result.categoryTitle}</h1>

      <div className="mt-11 w-full">
        <LocalSearchbar
          route={`/categories/${params.id}`}
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search category Contents"
          otherClasses="flex-1"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.contents.length > 0 ? (
          result.contents.map((content: any) => (
            <ContentCard
              imgUrl={content.imgUrl}
              alt={content.alt}
              key={content._id}
              _id={content._id}
              title={content.title}
              categories={content.categories}
              author={content.author}
              upvotes={content.upvotes}
              views={content.views}
              answers={content.answers}
              createdAt={content.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no tag content saved to show"
            description="Be the first to break the silence! 🚀 Ask a content and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-content"
            linkTitle="Ask a content"
          />
        )}
      </div>

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        />
      </div>
    </>
  );
};

export default Page;
