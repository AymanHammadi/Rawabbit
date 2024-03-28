import Link from "next/link";
import React from "react";
// import RenderCategory from "../shared/RenderCategory";
import Metric from "../shared/Metric";
import { formatAndDivideNumber, getTimestamp } from "@/lib/utils";
import { Button } from "../ui/button";
import Image from "next/image";
// import { SignedIn }
// import EditDeleteAction from "../shared/EditDeleteAction";

interface LinkProps {
  _id: string;
  title: string;
  categories: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  imgUrl: string;
  alt: string;
  href?: string;
  upvotes: string[];
  views: number;
  createdAt: Date;
  iosApp?: string;
  androidApp?: string;
  website?: string;
  answers?: string;
}

const ContentCard = ({
  _id,
  title,
  categories,
  author,
  upvotes,
  imgUrl,
  alt,
  href,
  views,
  createdAt,
  iosApp,
  androidApp,
  website,
}: LinkProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div className="">
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/categories/${_id}`} className="flex items-center">
            <Image
              src={imgUrl}
              width={50}
              height={50}
              alt={alt}
              className={`object-contain ${href ? "rounded-full" : ""}`}
            />
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
        {/* <SignedIn>
          {showActionButtons && (
            // <EditDeleteAction type="Link" itemId={JSON.stringify(_id)} />
          )}
        </SignedIn> */}
      </div>
      {/* <div className="mt-3.5 flex flex-wrap gap-2">
        {categoriess.map((category) => (
          <RenderCategory key={category._id} _id={category._id} name={category.name} />
        ))}
      </div> */}
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatAndDivideNumber(views)}
          title=" مشاهدة"
          textStyles="small-medium text-dark400_light800"
        />
        <div className="flex items-center max-sm:flex-wrap max-sm:justify-start">
          <div className="flex-between mt-6 w-full flex-wrap gap-1">
            {website && (
              <div>
                <Link href={`${website}`}>
                  <Button className="btn-link">
                    <span className="ml-2">الموقع</span>
                    <Image
                      src="/assets/icons/arrow-up-right-from-square.svg"
                      alt="ios"
                      width={16}
                      height={16}
                    />
                  </Button>
                </Link>
              </div>
            )}
            {iosApp && (
              <div>
                <Link href={`${iosApp}`}>
                  <Button className="btn-link">
                    <span className="ml-2">تطبيق ios</span>
                    <Image
                      src="/assets/icons/app-store-ios.svg"
                      alt="ios"
                      width={16}
                      height={16}
                    />
                  </Button>
                </Link>
              </div>
            )}
            {androidApp && (
              <div>
                <Link href={`${androidApp}`}>
                  <Button className="btn-link">
                    <span className="ml-2">تطبيق android</span>
                    <Image
                      src="/assets/icons/google-play.svg"
                      alt="ios"
                      width={16}
                      height={16}
                    />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
