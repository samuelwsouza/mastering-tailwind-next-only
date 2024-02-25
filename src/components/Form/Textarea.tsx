import { ComponentProps } from "react";

export type TextareaProps = ComponentProps<"textarea">;

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
      className="min-h-[120px] resize-y w-full rounded-lg outline-none border border-zinc-300 px-3 py-2 shadow-sm focus:border-violet-300 focus:ring-4 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-violet-500 dark:focus:ring-violet-500/20 dark:placeholder-zinc-400 dark:text-zinc-100"
      {...props}
    />
  );
}
