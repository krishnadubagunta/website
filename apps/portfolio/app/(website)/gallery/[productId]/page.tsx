import H4 from "kd-ui/ui/typography/h4";
import Product from "../_lib/product";
import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "kd-ui/ui/button";
import ProductIds from "../_lib/productIds";
import { Metadata } from "next";
import TypographySmall from "kd-ui/ui/typography/small";
import TypographyP from "kd-ui/ui/typography/p";

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
    <div className="flex flex-col items-center py-6">
      <div className="container max-w-4xl">
        <Link
          href="/gallery"
          className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← gallery
        </Link>
      </div>

      <div className="mt-6 flex w-full justify-center">
        <Image
          src={asset.url}
          height={asset.height}
          width={asset.width}
          alt={description || title}
          priority
          className="max-h-[80vh] w-auto max-w-full object-contain"
        />
      </div>

      <div className="container flex max-w-2xl flex-col items-center gap-4 pt-8 text-center">
        <H4 kaisei>{title}</H4>
        {description ? (
          <TypographyP serif className="text-foreground/80">
            {description}
          </TypographyP>
        ) : null}
        <div className="flex flex-col items-center gap-2 pt-2">
          <LinkButton href="https://kridworks.etsy.com">Request for print</LinkButton>
          <TypographySmall className="text-muted-foreground">
            Send a chat, if you couldn&apos;t find what you&apos;re looking for
          </TypographySmall>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const productIds = await ProductIds()

  return productIds.map((productId: string) => ({ productId }))
}
