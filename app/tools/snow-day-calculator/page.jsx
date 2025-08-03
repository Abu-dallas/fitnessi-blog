import dynamic from "next/dynamic";
import Image from "next/image";
import Script from "next/script";

const SnowDayCalculatorForm = dynamic(
  () => import("@/components/SnowDayCalculator"),
  { ssr: true }
);

export const metadata = {
  title: "Snow Day Calculator: Predict School Closures Near You (2025 Updated)",
  description:
    "An advance tool to calculate the chance of school closures due to snow in your city. simple snow day calculator 2025",
};

function SnowDay() {
  return (
    <div className="my-12">
      <Script
        id="snow-day-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Snow Day Calculator",
            url: "https://fitnessi.top/tools/snow-day-calculator",
            applicationCategory: "WeatherApplication",
            operatingSystem: "All",
            description:
              "Check snow day chances with real-time weather data by entering your city.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            creator: {
              "@type": "Organization",
              name: "BLOGGER GB (GARBA YAKUBU)",
            },
          }),
        }}
      />
      <div className="w-full items-center justify-center lg:flex">
        <div className="py-12 lg:max-w-lg px-4 ">
          <p className="text-4xl font-bold text-black text-center lg:max-w-lg">
            How Possible it is to Have a Snow Day Tomorrow?
          </p>
          <p className="text-slate-700 text-md mt-3">
            An advance snow day calculator created by Fitnessi will provide an
            accurate data form weather source and predict the likely occurance
            of snow in your city.
          </p>
        </div>
      </div>

      <SnowDayCalculatorForm />

      <div className="w-full items-center justify-center lg:flex">
        <div className="w-full lg:max-w-lg py-6  px-4">
          <p className="text-2xl font-bold text-black text-center">
            How to use Snow day calculator
          </p>
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="flex flex-col mt-12 items-center justify-center">
              <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                1
              </span>
              <p className="text-slate-800 mt-4 font-semibold text-xl">
                Enter city or ZIP code
              </p>
              <p className="text-slate-700 text-md mt-3">
                Enter the city or Zip code you wanted to check its weather,
                select your school Level and school policy.
              </p>
              <Image
                src="/tools/weather1.png"
                alt="snow day calculator for checking weather"
                width={2000}
                height={2000}
                className="w-full h-[300px] mt-4 lg:max-w-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="flex flex-col mt-12 items-center justify-center">
              <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                2
              </span>
              <p className="text-slate-800 mt-4 font-semibold text-xl">
                Click calculate chance
              </p>
              <p className="text-slate-700 text-md mt-3">
                After you put all the necessary information you click the
                "calculate chance" button to get the necessary data.
              </p>
              <Image
                src="/tools/weather4.png"
                alt="calculator for checking weather"
                width={2000}
                height={2000}
                className="w-full h-[150px] mt-4 lg:max-w-lg"
              />
            </div>
            <div className="flex flex-col gap-6 items-center justify-center">
              <div className="flex flex-col mt-12 items-center justify-center">
                <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                  3
                </span>
                <p className="text-slate-800 mt-4 font-semibold text-xl">
                  Likely occurance of snow
                </p>
                <p className="text-slate-700 text-md mt-3">
                  An accurate data about the provided information in the fist
                  step will be display to you, explaining the possibility of
                  snow in the given area.
                </p>
                <Image
                  src="/tools/weather2.png"
                  alt="snow day calculator for checking weather"
                  width={2000}
                  height={2000}
                  className="w-full h-[150px] mt-4 lg:max-w-lg"
                />
              </div>
              <div className="flex flex-col gap-6 items-center justify-center">
                <div className="flex flex-col mt-12 items-center justify-center">
                  <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                    4
                  </span>
                  <p className="text-slate-800 mt-4 font-semibold text-xl">
                    Advance weather data
                  </p>
                  <p className="text-slate-700 text-md mt-3">
                    Our tool will also provide an accurate live data about your
                    city, different data such as degree of celsius, humidity,
                    cloud coverage and other related data will help you to
                    understand your weather condition.
                  </p>
                  <Image
                    src="/tools/weather3.png"
                    alt="advance weather data on snow day"
                    width={2000}
                    height={2000}
                    className="w-full h-[400px] mt-4 lg:max-w-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SnowDay;
