import { cacheLife } from "next/cache";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps, ReactNode } from "react";
import { getArticleSource } from "@/lib/articles";
import { slugify } from "@/lib/utils";

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  return "";
}

const components = {
  h2: (props: ComponentProps<"h2">) => <h2 id={slugify(textOf(props.children))} {...props} />,
  h3: (props: ComponentProps<"h3">) => <h3 id={slugify(textOf(props.children))} {...props} />,
};

/**
 * MDX makale gövdesi. Derleme sonucu önbelleğe alınır; böylece sayfa
 * build sırasında tamamen statik olarak üretilebilir.
 */
export async function ArticleBody({ slug }: { slug: string }) {
  "use cache";
  cacheLife("days");
  return <MDXRemote source={getArticleSource(slug)} components={components} />;
}
