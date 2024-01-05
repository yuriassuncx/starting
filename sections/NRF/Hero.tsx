import { HeroEditorTabbed } from "deco-sites/starting/islands/NRF/HeroEditorTabbed.tsx";
interface CTA {
  href: string;
  text: string;
  variant: "Normal" | "Reverse";
}
export interface Props {
  /**
   * @format html
   */
  title: string;
  cta?: CTA[];
  alert?: {
    image?: string;
    text?: string;
    href?: string;
  }
}

export default function Hero({ title, cta, alert }: Props) {
  return (
    <div id="hero" class="relative bg-black min-h-screen space-y-10">
      <div class="max-w-fit mx-auto flex flex-col items-center gap-8">
        {
          alert?.text && (
            <div class="rounded-[56px] border border-white/15 bg-white/5 py-2 px-4">
              {alert.text}
            </div>
          )
        }
        <div
          class="mt-48 inline-block text-[48px] lg:text-[104px] text-left leading-[100%] font-medium text-white"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        ></div>
        {cta &&
          cta?.map((item) => (
            <a
              href={item?.href}
              target={item?.href.startsWith("http") ? "_blank" : "_self"}
              class={`border-none rounded-full text-[28px] py-3 px-8 transition-colors duration-200 cursor-pointer ${
                item?.variant === "Reverse"
                  ? "border bg-[#113032] text-[#FFF]"
                  : "border bg-[#02F67C] text-[#113032]"
              }`}
            >
              {item?.text}
            </a>
          ))}
      </div>
      <div class="mx-auto flex flex-col items-center">
        <HeroEditorTabbed />
      </div>
      <div class="ellipse-1" />
      <div class="ellipse-2" />
    </div>
  );
}
