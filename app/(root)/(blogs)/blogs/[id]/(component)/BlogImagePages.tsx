import { Fragment } from "react";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const knnImagePages = [
  { src: "/blogs/blog-1/image_1.png", width: 1175, height: 985 },
  { src: "/blogs/blog-1/image_2.png", width: 1450, height: 2048 },
  { src: "/blogs/blog-1/image_3.png", width: 1450, height: 2048 },
  { src: "/blogs/blog-1/image_4.png", width: 1450, height: 2048 },
  { src: "/blogs/blog-1/image_5.png", width: 1450, height: 2048 },
];

type BlogImagePagesProps = {
  title: string;
};

export function BlogImagePages({ title }: BlogImagePagesProps) {
  return (
    <Card>
      <div className="mx-auto flex w-full max-w-[760px] flex-col items-center gap-2 px-2 sm:px-4">
        {knnImagePages.map((page, index) => (
          <Fragment key={page.src}>
            <Image
              src={page.src}
              alt={`${title} image page ${index + 1}`}
              width={page.width}
              height={page.height}
              priority={index === 0}
              sizes="(min-width: 1024px) 760px, calc(100vw - 48px)"
              className="h-auto w-full bg-white"
            />
            {index !== knnImagePages.length - 1 && <Separator />}
          </Fragment>
        ))}
      </div>
    </Card>
  );
}
