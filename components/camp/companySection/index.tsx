import Logo, { ILogo } from "./logo.tsx";
import Image, { IImage } from "deco-sites/starting/components/ui/Image.tsx";

export interface Props {
  logo: ILogo;
  logoImage?: IImage;
  /**
   * @format textarea
   */
  text: string;
}

export default function CompanySection(props: Props) {
  return (
    <section class="px-10 py-[76px] flex items-center flex-col">
      <div>
        {props.logo
          ? <Logo id={props.logo} />
          : <Image image={props.logoImage} />}
      </div>

      <div
        class="font-regular text-[32px] text-dark-green text-center max-w-[757px]"
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
    </section>
  );
}
