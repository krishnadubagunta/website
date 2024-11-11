"use client";;
import { use } from "react";
import medias from "db/models/medias";
import socials from "db/models/socials";
import { Button, SignOutButton } from "kd-ui/ui/button";
import { Card, CardContent } from "kd-ui/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "kd-ui/ui/tabs";
import P from "kd-ui/ui/typography/p";
import { PlusSquare } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContentLayout(
  props: {
      medias: React.ReactNode;
      socials: React.ReactNode;
      params: Promise<{ segment: string }>;
    }
) {
  const params = use(props.params);

  const {
    segment
  } = params;

  const {
    medias,
    socials
  } = props;

  const router = useRouter();
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-end">
        <SignOutButton />
      </div>
      <div className="w-full mt-4">
        <Tabs
          value={segment}
          onValueChange={(value) => router.push(`/${value}`)}
        >
          <div className="flex justify-between">
            <TabsList className="grid w-4/12 grid-cols-2 transition-transform">
              <TabsTrigger value={"medias"}>Media</TabsTrigger>
              <TabsTrigger value={"socials"}>Socials</TabsTrigger>
            </TabsList>
            <Button onClick={() => router.push("/new/media")}>
                <div className="flex justify-center items-center">
                    <PlusSquare size={15} />
                    &nbsp;
                    <P>Create Media</P>
                </div>
            </Button>
          </div>
          <TabsContent value="medias">
            <Card>
              <CardContent className="p-4">
                { medias }
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="socials">
            <Card>
              <CardContent className="p-4">
                { socials }
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
