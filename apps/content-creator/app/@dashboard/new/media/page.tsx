"use client";
import { Button } from "kd-ui/ui/button";
import H3 from "kd-ui/ui/typography/h3";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

export default function MediaCreate() {
  const { register, reset, handleSubmit,  } = useForm();

  async function onSubmit(formData: any) {
    console.warn("Requesting ... ")
    const res = await fetch("http://localhost:3001/api/medias/create", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const json = await res.json();
    console.log("Response received", json)
    if (res.status == 200) {
      reset();
      redirect("/medias");
    }
  }

  return (
    <div className="pt-6 w-10/12 place-self-center">
      <H3>Create new media</H3>
      <div className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 w-11/12">
            <div className="col-span-2">
                <input
                    name="photo"
                    onChange={(e) => {
                        console.log(e)
                    }}
                    type="file"
                    accept="image/*"
                />
            </div>
            <div className="col-span-2 flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label className="text-neutral-400 text-sm" htmlFor="name">
                  Name
                </label>
                <input
                  className="p-3 rounded border-neutral-300 border bg-transparent focus:outline-none"
                  {...register("name", {
                    required: "enter a name",
                  })}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-neutral-400 text-sm" htmlFor="name">
                  Short title
                </label>
                <input
                  className="p-3 rounded border-neutral-300 border bg-transparent focus:outline-none"
                  {...register("shortTitle", {
                    required: "enter a short title",
                  })}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  className="text-neutral-400 text-sm"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="p-3 rounded border-neutral-300 border bg-transparent focus:outline-none h-20 min-h-[150px]"
                  {...register("description", {
                    required: "enter a description",
                    max: 500,
                  })}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-neutral-400 text-sm" htmlFor="name">
                  Tags
                </label>
                <input
                  className="p-3 rounded border-neutral-300 border bg-transparent focus:outline-none"
                  {...register("tags", {
                    required: "enter a CSV of tags",
                  })}
                />
              </div>
              <Button className="w-32 place-self-end" type="submit">Submit</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
