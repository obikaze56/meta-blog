import { DateFormatter } from "@/components/util/DateFormatter";
import { BlogPostListingHeader } from "./BlogPostListingHeader";
import { BlogPostListingBody } from "./BlogPostListingBody";

export const BlogPostListing = ({ articles = [], handlePlusPage }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col w-full h-auto justify-center items-center p-4 md:px-20 md:py-4 gap-8">
        <BlogPostListingHeader articles={articles} />
        <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 h-auto gap-2 md:gap-5 m-auto">
          {articles.map((article) => {
            const formattedDate = <DateFormatter article={article} />;

            return (
              <BlogPostListingBody
                key={article.id}
                imgUrl={article.cover_image}
                badge={article.tag_list[0]}
                title={article.description}
                userName={article.user.name}
                userImg={article.user.profile_image_90}
                date={formattedDate}
              />
            );
          })}
        </div>
        <button
          onClick={handlePlusPage}
          className="flex justify-center items-center w-[123px] h-[48px] border border-[rgba(105,106,117,0.3)] rounded-md px-5 py-3 text-base font-medium text-[var(--secondary-500)]"
        >
          Load More
        </button>
      </div>
    </div>
  );
};
