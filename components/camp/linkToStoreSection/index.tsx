export interface Props {
  /**
   * @format textarea
   */
  title: string;
}

export default function LinkToStoreSection(props: Props) {
  return (
    <section class="flex flex-col justify-center bg-contact-us-bg-gradient py-[12px] md:py-[32px]">
      <div
        class="font-inter font-regular text-[32px] text-dark-green px-10 py-16 text-center md:text-5xl md:leading-[53px]"
        dangerouslySetInnerHTML={{ __html: props.title }}
      />
    </section>
  );
}
