import Link from "next/link";
import QuivoLogo from "@/components/quivo-logo";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen mb-10">
      <div className="w-full flex justify-center">
        <div className="max-w-[1376px] w-full flex flex-col items-center text-center px-4 gap-[31px] mt-[91px] mb-[54px]">
          {/* Logo */}
          <QuivoLogo size="home" />

          {/* Subtitle */}
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[804px] leading-[41px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[1376px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/docs/guides"
              className="flex flex-col max-h-[285px] border rounded-none border-zinc-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 rounded-lg overflow-hidden"
            >
              <div className="">
                <img
                  src="/images/homepage/card1.svg"
                  alt="Overview"
                  className="m-0 w-full"
                />
              </div>

              {/* Text area */}
              <div className="p-[20px] gap[9px]">
                <p className="mt-0 text-base font-bold dark:text-zinc-100">
                  Overview
                </p>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Explore and understand the available tools to enhance your
                  responses
                </p>
              </div>
            </Link>

            <Link
              href="/docs/guides/send-inventory"
              className="flex flex-col max-h-[285px] border rounded-none border-zinc-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 rounded-lg overflow-hidden"
            >
              {/* Image (light/dark swap) */}
              <div className="relative w-full ">
                <img
                  src="/images/homepage/card2.svg"
                  alt="Quickstart"
                  className="m-0 w-full"
                />
              </div>

              {/* Text area */}
              <div className="p-[20px] gap[9px]">
                <h3 className="mt-0 text-base font-bold dark:text-zinc-100">
                  Quickstart
                </h3>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Explore and understand the available tools to enhance your
                  responses
                </p>
              </div>
            </Link>

            <Link
              href="/docs/api-reference/introduction"
              className="flex flex-col max-h-[285px] border rounded-none border-zinc-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 rounded-lg overflow-hidden"
            >
              {/* Image (light/dark swap) */}
              <div className="relative w-full">
                <img
                  src="/images/homepage/card3.svg"
                  alt="API Reference"
                  className="m-0 w-full"
                />
              </div>

              {/* Text area */}
              <div className="p-[20px] gap[9px]">
                <h3 className="mt-0 text-base font-bold dark:text-zinc-100">
                  API Reference
                </h3>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Explore and understand the available tools to enhance your
                  responses
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
