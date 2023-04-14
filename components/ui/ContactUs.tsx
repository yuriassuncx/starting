import { useState } from "preact/hooks";

export interface listItem {
  title?: string;
  description?: string;
}

export interface Benefits {
  /** @description a short main title text*/
  mainTitle?: string;
  /** @description a short subtitle text*/
  description?: string;
  /** @description add a item to information list in contact page*/
  listItems: listItem[];
}

export interface Props {
  /** @description settings of benefits section in page*/
  infor?: Benefits;

  formInfor: {
    formTitle?: string;
    BusinessCTAName?: string;
    DevCTAName?: string;
    PlaceholderfieldName?: string;
    PlaceholderfieldEmail?: string;
    PlaceholderfieldPosition?: string;
    PlaceholderfieldSocial?: string;
    PlaceholderFieldExtra?: string;
    submiteName?: string;
      /** @description set the post url to action submit form business*/
    urlToActionBusiness:string;
      /** @description set the post url to action submit form developers*/
    urlToActionDev:string
  };
}

export default function ContactUs({ infor, formInfor }: Props) {

  const [active, setActive] = useState({
    btn1On: true,
    btn2On: false,
    selectedUrlToAction: "/",
  });
  return (
    <div class="flex flex-col font-sans p-6 pt-[103px] pb-10 xl:p-40 gap-y-10 overflow-x-hidden xl:(flex-row gap-x-[120px])">
      <div class="w-full text-left xl:w-1/2 ">
        <h1 class="text-dark-green text-5xl leading-[53px]">
          {infor?.mainTitle}
        </h1>
        <h2 class="font-normal text-3xl text-dark-green opacity-50 pt-4 leading-9">
          {infor?.description}
        </h2>
        <ol
          start={1}
          type="1"
          class="flex flex-col gap-4 text-dark-green pt-10"
        >
          {infor?.listItems?.map((item, index) => {
            return (
              <li class=" w-full flex justify-items-start items-baseline gap-3">
                <span class="rounded-1/2 w-8 h-8 leading-8 text-center bg-primary">
                  {index + 1}
                </span>
                <div class="w-[90%] flex flex-col">
                  <h3 class="text-[20px] font-medium">
                    {item?.title}
                  </h3>
                  <p class="text-[16px]">
                    {item?.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <div class="w-full xl:w-1/2 relative max-w-[443px]">

        <form
          class="flex flex-col justify-center items-center bg-white border-1 border-dark-green rounded-2xl p-4 md:p-8 gap-6 placeholder-[#161A16] "
          action={active.selectedUrlToAction}
        >
          <span class="text-[20px]">
            {formInfor?.formTitle || "Ready to delight your customers?"}
          </span>

          <div
            id="switcehr-page"
            class={"w-full h-[62px] flex p-2 gap-2 bg-[#CDE5D9] rounded-full border-2 border-white border-opacity-5 text-[3.7vw] md:text-[15px]"}
          >
            <span id="bg-switcher" class={`${(active.btn2On
                ? "translate-x-[103%] md:translate-x-[106%] xl:translate-x-[105%]"
                : "")} w-[42%] md:w-[39%] h-[42px] absolute bg-dark-green rounded-full transition-all duration-1000 ease-out`}></span>
            <button
              class={(active.btn1On
                ? "text-[#f3fff9ca]"
                : "text-dark-green") +
                " " +
                "w-[50%] max-w-[175px] flex justify-center items-center rounded-full p-[9px] lg:p-[11px] transition-all duration-500 border-none z-10 outline-none hover:outline-none"}
              onClick={() =>
                setActive({
                  btn1On: true,
                  btn2On: false,
                  selectedUrlToAction: formInfor?.urlToActionBusiness,
                })}
            >
              {formInfor?.BusinessCTAName}
            </button>

            <button
              class={(active.btn2On
                ? "text-white"
                : "text-dark-green") +
                " " +
                "w-[50%] max-w-[175px] flex justify-center items-center rounded-full p-[9px] lg:p-[11px] transition-all duration-500 border-none z-10 outline-none hover:outline-none"}
              onClick={() =>
                setActive({
                  btn1On: false,
                  btn2On: true,
                  selectedUrlToAction: formInfor?.urlToActionDev,
                })}
            >
              {formInfor?.DevCTAName}
            </button>
          </div>

          <input
            class="w-full h-[51px] border-1 border-dark-green p-4"
            type="text"
            placeholder={formInfor?.PlaceholderfieldName || "Name"}
            required
          />
          <input
            class="w-full h-[51px] border-1 border-dark-green p-4"
            type="email"
            placeholder={formInfor?.PlaceholderfieldEmail || "Work e-mail"}
            required
          />
          <input
            class="w-full h-[51px] border-1 border-dark-green p-4"
            type="text"
            placeholder={formInfor?.PlaceholderfieldPosition || "Position"}
            required
          />
          <input
            class="w-full h-[51px] border-1 border-dark-green p-4"
            type="text"
            placeholder={formInfor?.PlaceholderfieldSocial || "Linkdin"}
            required
          />
          <input
            class="w-full h-[51px] border-1 border-dark-green p-4"
            type="text"
            placeholder={formInfor?.PlaceholderFieldExtra ||
              "Anything you would like to add? (optional)"}
          />
          <input
            class="w-full h-[51px] bg-dark-green text-white rounded-[4px] cursor-pointer"
            type="submit"
            value={formInfor?.submiteName || "Schedule a demo"}
          />
        </form>
      </div>
    </div>
  );
}
