import Content from "./content.mdx";

export default function Resume() {
  return (<>
    <main className="pt-6 flex flex-col items-center gap-4">
        <article className="prose prose-sm dark:prose-invert w-full max-w-2xl">
            <Content />
        </article>
    </main>
  </>
  );
}
