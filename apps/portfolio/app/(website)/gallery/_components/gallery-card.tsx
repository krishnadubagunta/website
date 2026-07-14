import Link from "next/link";
import Image from "next/image";

interface GalleryPhoto {
  sys: { id: string };
  title: string;
  description?: string;
  asset: { url: string; height: number; width: number };
}

export default function GalleryCard({ photo }: { photo: GalleryPhoto }) {
  return (
    <Link href={`/gallery/${photo.sys.id}`} className="group block">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={photo.asset.url}
          alt={photo.description || photo.title}
          fill
          sizes="(min-width: 768px) 33vw, 50vw"
          className="object-cover transition-opacity group-hover:opacity-90"
        />
      </div>
    </Link>
  );
}
