import H4 from "kd-ui/ui/typography/h4";
import Product from "../_lib/product";
import Image from "next/image";
import { LinkButton } from "kd-ui/ui/button";
import ProductIds from "../_lib/productIds";
import { Metadata } from "next";
import TypographySmall from "kd-ui/ui/typography/small";

export async function generateMetadata(props: { params: Promise<{ productId: string }> }): Promise<Metadata | undefined> {
  const params = await props.params;

  const {
    productId
  } = params;

  const {
    product: { asset, description, title },
  } = await Product({ productId });
  return {
    metadataBase: new URL(`https://krishnadubagunta.com`),
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: 'https://krishnadubagunta.com',
      url: `https://krishnadubagunta.com/gallery/${productId}`,
      images: [
        {
          url: asset.url || '',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [asset.url || ''],
    },
  };
}

export default async function Page(
  props: {
    params: Promise<{ productId: string }>;
  }
) {
  const params = await props.params;

  const {
    productId
  } = params;

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
          {description}
        </div>
        <div className="place-self-end flex flex-col space-y-2">
            <LinkButton href="https://kridworks.etsy.com">Request for print</LinkButton>
            <TypographySmall>Send a chat, if you couldn&apos;t find what you&apos;re looking for</TypographySmall>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const productIds = await ProductIds()

  return productIds.map((productId: string) => ({ productId }))
}