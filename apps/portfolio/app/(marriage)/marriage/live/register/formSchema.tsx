"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "kd-ui/ui/form";
import { Button } from "kd-ui/ui/button";
import { Input } from "kd-ui/ui/input";
import { useRouter } from "next/navigation";
import TypographySmall from "kd-ui/ui/typography/small";

const formSchema = z.object({
  liveLink: z.string().min(2, {
    message: "Must be at least 2 characters",
  }),
});

export function RegisterLinkForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      liveLink: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/marriage/live/registerApi`,
      {
        body: JSON.stringify(values),
        method: "POST",
      }
    );
    const res = await data.json();
    if (res.success) {
        router.push("/marriage/live")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="liveLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="https://www.youtube....." {...field} />
              </FormControl>
              <FormDescription>
                <TypographySmall>This is the live link for Chidrupi & Krishna&apos;s Wedding</TypographySmall>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
