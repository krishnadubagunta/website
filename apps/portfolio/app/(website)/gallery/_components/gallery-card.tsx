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
    <Link href={`/gallery/${photo.sys.id}`} className="group mb-4 block break-inside-avoid sm:mb-6">
      <Image
        src={photo.asset.url}
        alt={photo.description || photo.title}
        height={photo.asset.height}
        width={photo.asset.width}
        sizes="(min-width: 768px) 33vw, 50vw"
        className="w-full object-cover transition-opacity group-hover:opacity-90"
      />
      <div className="flex flex-col gap-1 pt-3">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-muted-foreground">
          {photo.title}
        </span>
        {photo.description ? (
          <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
            {photo.description}
          </span>
        ) : null}
      </div>
    </Link>
  );
}
