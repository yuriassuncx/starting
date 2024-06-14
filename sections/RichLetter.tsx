const fontStyles = `
  .cormorant-garamond-light {
      font-family: "Cormorant Garamond", serif;
      font-weight: 300;
      font-style: normal;
    }
    
    .cormorant-garamond-medium-italic {
      font-family: "Cormorant Garamond", serif;
      font-weight: 500;
      font-style: italic;
    }
`;

export interface Props {
  /** @format rich-text */
  title?: string;
  /** @format rich-text */
  paragraph?: string;
}

export default function Why({ title, paragraph }: Props) {
  return (
    <div className="flex justify-center items-center min-h-screen w-100 min-h-[900px] relative z-10">
      <div className="text-white p-8 max-w-2xl">
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,500&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
        {title && (
          <div
            className="text-5xl md:text-7xl lg:text-[7rem] cormorant-garamond-medium-italic text-primary mb-6"
            dangerouslySetInnerHTML={{ "__html": title }}
          >
          </div>
        )}
        <div className="md:text-lg">
          <div
            className="mb-4"
            dangerouslySetInnerHTML={{ "__html": paragraph }}
          >
          </div>
        </div>

        <div className="flex justify-between items-center w-100 mt-8">
          <a href="https://deco.cx" target="_blank">
            <svg
              class="h-5 lg:h-10"
              viewBox="0 0 72 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M71.3485 9.03704L68.3856 12.6667C68.9782 13.7778 69.6448 14.8148 70.3115 15.7778C70.7559 16.3704 70.9041 17.1852 70.6819 17.9259V18C70.3856 19.037 69.4967 19.8519 68.3856 19.9259C67.7189 20 67.0522 20 66.3856 20C65.7189 20 65.0522 20 64.3856 19.9259C63.7189 19.8519 63.2004 19.5556 62.7559 19.1111C62.3115 19.5556 61.793 19.8519 61.1263 19.9259C60.5337 20 59.793 20 59.1263 20C58.3856 20 57.7189 20 57.1263 19.9259C56.7559 19.8519 56.4596 19.7778 56.1633 19.6296C55.3485 19.8519 54.4596 19.9259 53.5708 19.9259C51.6448 19.9259 50.3115 19.4074 49.2745 18.7407C48.3856 19.4815 47.2745 19.9259 46.0152 19.9259C44.4596 19.9259 43.4967 19.2593 42.9041 18.7407C41.5708 19.4815 39.9411 19.9259 38.3115 19.9259C36.6819 19.9259 35.2004 19.4815 34.0893 18.7407C33.867 18.8889 33.6448 19.037 33.4226 19.1111C32.3115 19.6296 30.83 19.9259 29.4226 19.9259C27.1263 19.9259 25.6448 19.1852 24.6819 18.3704C24.5337 18.5185 24.3115 18.6667 24.0893 18.8148C22.0893 19.8519 19.9411 19.9259 19.0522 19.9259C15.793 19.9259 14.1633 18.5185 13.2744 17.3333C13.2004 17.2593 13.1263 17.1852 13.1263 17.037C11.6448 18.8148 9.71889 19.9259 6.90408 19.9259C4.38556 19.9259 2.38556 18.963 1.20038 17.3333C-0.0588841 15.4815 -0.207032 12.963 0.755931 10.2963C2.08926 6.81481 5.27445 4.59259 9.1263 4.59259C9.1263 4.59259 9.20038 4.59259 9.27445 4.59259C9.27445 4.51852 9.27445 4.37037 9.27445 4.2963C9.20038 3.11111 10.0152 2 11.2004 1.55556L14.6819 0.222222C15.0522 0.074074 15.4226 0 15.793 0C16.9041 0 17.9411 0.592592 18.4596 1.62963L19.9411 4.66667C20.3856 4.59259 20.83 4.59259 21.2745 4.59259C23.3485 4.59259 25.1263 5.33333 26.2374 6.66667C27.9411 5.33333 30.0893 4.59259 32.4596 4.59259C33.7189 4.59259 34.83 4.81481 35.793 5.25926C35.9411 5.33333 36.1633 5.48148 36.3115 5.62963C37.6448 4.96296 39.1263 4.59259 40.6819 4.59259C43.1263 4.59259 45.2004 5.55555 46.3856 7.25926C46.9782 8.14815 47.3485 9.11111 47.4967 10.2222C48.9782 6.81481 52.4596 4.59259 56.4596 4.59259C57.3485 4.59259 58.3115 4.74074 59.0522 4.96296C59.2004 4.88889 59.3485 4.88889 59.5708 4.88889C60.1633 4.74074 60.7559 4.74074 61.3485 4.74074C61.9411 4.74074 62.6078 4.74074 63.2004 4.81481C63.7189 4.88889 64.1633 5.03704 64.5337 5.33333C64.9041 5.03704 65.3485 4.81481 65.8671 4.81481C66.4596 4.74074 67.1263 4.74074 67.793 4.74074C68.4596 4.74074 69.0522 4.74074 69.6448 4.88889C70.6078 5.03704 71.3485 5.62963 71.7189 6.51852C72.0893 7.33333 71.9411 8.2963 71.3485 9.03704Z"
                fill="#02F67C"
              />
              <path
                d="M65.2744 12.2963C66.1633 14.1482 67.2003 15.7778 68.1633 17.1852V17.2593C66.9781 17.3333 65.7929 17.3333 64.6818 17.2593C64.1633 16.5185 63.6448 15.4074 63.2003 14.2963L60.904 17.2593C59.7929 17.3333 58.4596 17.3333 57.4226 17.2593L61.7189 12.0741C60.9781 10.7408 60.2374 9.33334 59.7929 7.33334C60.83 7.25927 61.867 7.25927 62.9041 7.33334C63.2003 8.29631 63.4966 9.33334 63.867 10.2963L66.1633 7.33334C67.2003 7.1852 68.3855 7.1852 69.3485 7.33334L65.2744 12.2963ZM17.1263 6.07408C17.4226 6.14816 17.6448 6.00001 17.4966 5.70371L16.0892 2.81483C16.0152 2.5926 15.7189 2.5926 15.5707 2.66668L12.0152 4.00001C11.7189 4.07408 11.7189 4.37038 12.0152 4.44446L13.1263 4.74075C12.2374 6.66668 11.2003 9.62964 10.3115 11.4815C9.3485 13.5556 8.82998 14.963 7.20035 14.963C5.57072 14.963 5.27442 13.7037 6.01516 11.8519C6.82998 9.70371 8.16331 9.11112 9.71887 9.55557C10.1633 8.96297 10.4596 8.07408 10.6078 7.25927C10.1633 7.11112 9.64479 7.11112 9.20035 7.11112C6.68183 7.11112 4.23739 8.37038 3.27442 11.1111C1.86702 14.5926 3.0522 17.3333 6.90405 17.3333C9.71887 17.3333 11.2744 16.0741 13.1263 12.1482C14.1633 10 14.9781 7.85186 16.0152 5.77779L17.1263 6.07408ZM24.5337 10.8889C23.867 12.6667 21.7189 13.4074 17.6448 13.3333C17.6448 14.5185 18.4596 15.037 19.9411 15.037C20.9781 15.037 22.0892 14.8148 22.83 14.3704C23.0522 15.1111 23.0522 15.7778 22.9041 16.4445C21.6448 17.1111 20.1633 17.2593 19.0522 17.2593C14.83 17.2593 14.2374 14.0741 15.1263 11.6296C15.9411 9.25927 18.1633 7.11112 21.2003 7.11112C24.0892 7.1852 25.2744 9.03705 24.5337 10.8889ZM20.7559 9.25927C19.5707 9.25927 18.6818 10 18.1633 11.2593C20.6818 11.2593 21.5707 10.8889 21.7929 10.2963C21.9411 9.85186 21.7929 9.25927 20.7559 9.25927ZM32.3115 9.55557C32.83 9.55557 33.3485 9.62964 33.6448 9.85186C34.1633 9.11112 34.5337 8.37038 34.5337 7.62964C34.0892 7.40742 33.2744 7.25927 32.3115 7.25927C29.0522 7.25927 26.4596 9.1852 25.4966 11.8519C24.6078 14.3704 25.2744 17.4815 29.4226 17.4815C30.5337 17.4815 31.6448 17.2593 32.3855 16.8889C32.6078 16.1482 32.6818 15.4074 32.4596 14.6667C31.9411 14.8889 31.2003 15.1111 30.3855 15.1111C28.3115 15.1111 28.0892 13.5556 28.5337 12.2222C29.0522 10.6667 30.3115 9.55557 32.3115 9.55557ZM46.7559 13.9259C45.4966 13.9259 44.83 14.7408 44.5337 15.4815C44.2374 16.3704 44.6078 17.4074 46.0152 17.4074C47.2003 17.4074 47.9411 16.6667 48.2374 15.9259C48.5337 14.963 48.2374 13.9259 46.7559 13.9259ZM44.6078 13.037C43.5707 15.7778 41.1263 17.3333 38.3115 17.3333C34.5337 17.3333 33.4226 14.3704 34.3855 11.5556C35.2744 9.03705 37.5707 7.1852 40.6078 7.1852C44.4596 7.1852 45.6448 10.0741 44.6078 13.037ZM40.2374 9.48149C38.83 9.48149 37.867 10.7408 37.4966 12C36.9781 13.5556 37.2744 15.1111 38.83 15.1111C40.1633 15.1111 41.1263 13.9259 41.5707 12.6667C42.0152 11.1111 41.867 9.48149 40.2374 9.48149ZM54.5337 14.963C52.4596 14.963 52.2374 13.4074 52.6818 12.0741C53.2003 10.6667 54.4596 9.55557 56.4596 9.55557C56.9781 9.55557 57.4966 9.62964 57.7929 9.85186C58.3115 9.11112 58.6818 8.37038 58.6818 7.62964C58.2374 7.40742 57.4226 7.25927 56.4596 7.25927C53.2003 7.25927 50.6078 9.1852 49.6448 11.8519C48.7559 14.3704 49.4226 17.4815 53.5707 17.4815C54.6818 17.4815 55.7929 17.2593 56.5337 16.8889C56.7559 16.1482 56.83 15.4074 56.6078 14.6667C56.0892 14.7408 55.3485 14.963 54.5337 14.963Z"
                fill="#113032"
              />
            </svg>
          </a>
          <h1 className="text-white py-2 px-4 rounded text-2xl lg:text-5xl cormorant-garamond-light">
            Get site done.
          </h1>
        </div>
      </div>
    </div>
  );
}
