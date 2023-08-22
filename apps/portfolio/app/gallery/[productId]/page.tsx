import H4 from "kd-ui/ui/typography/h4";
import Product from "../_lib/product";
import Image from "next/image";
import { LinkButton, buttonVariants } from "kd-ui/ui/button";
import ReactMarkdown from "react-markdown";
import { mdxComponents } from "../../_lib/mdx-components";
import Link from "next/link";
import ProductIds from "../_lib/productIds";

export default async function Page({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const {
    product: { asset, description, title },
  } = await Product({ productId });

  return (
    <div className="pt-6 w-10/12 inline-flex place-self-center">
      <div className="flex flex-col">
        <H4 kaisei>{title}</H4>
        <div className="py-6 flex flex-col items-center space-y-4">
          <Image
            src={asset.url}
            height={asset.height}
            width={asset.width}
            alt={description || "alt here"}
          />
          <ReactMarkdown components={mdxComponents}>
            {description}
          </ReactMarkdown>
        </div>
        <div className="place-self-end">
            <LinkButton href="mailto:dubagunta.saikrishna+orders@outlook.com">Request for print</LinkButton>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const productIds = await ProductIds()

  return productIds.map((productId: string) => ({ productId }))
}