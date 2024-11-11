import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "kd-ui/ui/table";
import Muted from "kd-ui/ui/typography/muted";
import Image from "next/image";

export default async function Medias(
  props: {
    params: Promise<{ segment: string }>;
  }
) {
  const params = await props.params;

  const {
    segment
  } = params;

  const res = await fetch(`http://localhost:3001/api/${segment}`, {
    cache: 'no-cache',
    method: "POST",
    body: JSON.stringify({
      limit: 25,
      offset: 1,
      active: true,
    }),
  });

  const { data: records }: { data: [] } = await res.json();

  if (records.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 h-96">
        <Image
          className="brightness-110"
          src="/images/null.png"
          width={150}
          height={150}
          alt="no data, null, nothing to show"
        />
        <Muted>Nothing to show here</Muted>
      </div>
    );
  }

  return (
    <Table>
      <TableCaption>
        <Muted>Things you uploaded</Muted>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Published</TableHead>
          <TableHead>Tags</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Something Random</TableCell>
          <TableCell>That day</TableCell>
          <TableCell>Yes</TableCell>
          <TableCell>Those Tags</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
