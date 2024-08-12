import type { MDXComponents } from "mdx/types";
import H1 from "kd-ui/ui/typography/h1";
import Small from "kd-ui/ui/typography/small";
import H2 from "kd-ui/ui/typography/h2";
import H3 from "kd-ui/ui/typography/h3";
import H4 from "kd-ui/ui/typography/h4";
import Blockquote from "kd-ui/ui/typography/blockquote";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import Image from "next/image";
import P from "kd-ui/ui/typography/p";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => H1({ children, kaisei: true }),
  p: ({ children }) => <P className="dark:text-neutral-100 text-neutral-950">{children}</P>,
  h2: ({children}) => H2({ children, kaisei: true, className: "prose-heading" }),
  blockquote: ({ children }) => Blockquote({ children, className: "mx-4 dark:bg-gray-700 bg-gray-300 p-4" }) as any,
  h3: ({ children }) => H3({ children, kaisei: true, className: "pt-1" }),
  h4: H4,
  img: (
    image: DetailedHTMLProps<
      ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >
  ) => {
    return (
      <div className="flex items-center aspect-video flex-col w-full space-y-4 py-3">
        <Image
          src={image.src || ""}
          width={768}
          height={432}
          alt={image.alt || ""}
        />
        <Small variant="light">{image.title}</Small>
      </div>
    );
  },
};
