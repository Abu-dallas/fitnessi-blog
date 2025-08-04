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
    "Use our Advance Snow Day Calculator to check if your school might close due to snow. Enter your city, temperature, and snowfall level for an instant prediction.",
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
          <h1 className="text-4xl font-bold text-black text-center lg:max-w-lg">
            How Possible it is to Have a Snow Day Tomorrow?
          </h1>
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
      <div className="w-full items-center justify-center lg:flex flex-col">
        <div className="mt-10 bg-white rounded-xl lg:max-w-lg px-4 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            What Is a Snow Day Calculator and How Does It Work?
          </h2>
          <p className="text-gray-700">
            A <strong>snow day calculator</strong> is an online tool that helps
            students, parents, and teachers predict the likelihood of school
            closures due to snow and severe weather. By analyzing local weather
            forecasts including snowfall amount, temperature, wind chill, and
            road conditions these calculators provide an estimate of whether
            schools may be closed or delayed.
          </p>
          <p className="text-gray-700">
            Many people wonder each winter:{" "}
            <em>"Will school close today because of snow?"</em> With a snow day
            predictor, you can get a quick and educated guess based on real-time
            weather data. Just enter your <strong>city name</strong>,{" "}
            <strong>temperature</strong>, and <strong>snowfall level</strong>,
            and the calculator will show your chances of a snow day.
          </p>
          <p className="text-gray-700">
            Our tool is designed to work with cities across the U.S. and Canada.
            Whether you’re in <strong>Chicago</strong>,{" "}
            <strong>New York</strong>, or a small town, you can easily{" "}
            <strong>check snow day by city</strong> and see if it's likely that
            schools will shut down.
          </p>
          <p className="text-gray-700">
            These tools are not official school notices, but they offer a fun
            and useful way to prepare. Students can get excited (or
            disappointed), while parents can plan their day better.
          </p>
          <p className="text-gray-700">
            Try our free <strong>school cancellation calculator</strong> above
            to see your snow day chances for 2025. Stay safe, stay warm—and
            maybe enjoy a day off!
          </p>
        </div>
        <div className="mt-10 p-6 bg-white  lg:max-w-lg px-4 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            ❄️ Frequently Asked Questions (FAQ)
          </h2>

          <div>
            <h3 className="font-bold text-lg text-gray-800">
              ❓ What is a snow day calculator?
            </h3>
            <p className="text-gray-700">
              A <strong>snow day calculator</strong> is a tool that estimates
              the chances of school being canceled due to snow or extreme winter
              weather. It uses local weather data like snowfall, temperature,
              and wind chill to make predictions.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800">
              ❓ How accurate is the snow day calculator?
            </h3>
            <p className="text-gray-700">
              While the calculator uses real weather forecasts and historical
              trends, it's not 100% accurate. It's meant to provide a{" "}
              <strong>fun and helpful estimate</strong>, not an official school
              decision.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800">
              ❓ How do I use this tool?
            </h3>
            <p className="text-gray-700">
              Simply enter your <strong>city or ZIP code</strong>, current or
              forecasted <strong>snowfall amount</strong>,{" "}
              <strong>temperature</strong>, and other weather details. The
              calculator will show your chances of a snow day.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800">
              ❓ Does this work in Canada too?
            </h3>
            <p className="text-gray-700">
              Yes! Our snow day calculator works for both the{" "}
              <strong>U.S. and Canada</strong>. Just enter your local city or
              region and weather data.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800">
              ❓ Is this calculator free to use?
            </h3>
            <p className="text-gray-700">
              Yes, this tool is <strong>completely free</strong> and can be used
              as many times as you'd like during the winter season.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800">
              ❓ What factors affect snow day predictions?
            </h3>
            Key factors include:
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong>Snowfall amount</strong>
              </li>
              <li>
                <strong>Temperature and wind chill</strong>
              </li>
              <li>
                <strong>Time of the storm (overnight or during commute)</strong>
              </li>
              <li>
                <strong>Road conditions</strong>
              </li>
              <li>
                <strong>Local school district tendencies</strong>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800">
              ❓ Will I be notified if school is canceled?
            </h3>
            <p className="text-gray-700">
              No, this tool does <strong>not send alerts</strong>. Always check
              your official{" "}
              <strong>
                school district’s website, email, or news channels
              </strong>{" "}
              for final closure announcements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SnowDay;
