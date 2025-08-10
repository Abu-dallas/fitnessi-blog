import dynamic from "next/dynamic";

// Dynamically import the client component with SSR disabled
export const metadata = {
  title: "College GPA Calculator – Calculate & Track Your GPA Instantly (2025)",
  description:
    "Use our free College GPA Calculator to quickly calculate your college grade point average. Supports weighted & unweighted GPA, semester GPA, cumulative GPA, and more.",
};

const CollegeCPACalculatorClient = dynamic(
  () => import("@/components/CollageGPAcalculator"),
  { ssr: true }
);

export default function CollegeCPACalculatorServer() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[70%] max-sm:w-full mt-12 max-sm:mt-20 p-2">
        <h1 className="text-3xl md:text-3xl font-bold text-slate-800 mb-4">
          College CPA Calculator
        </h1>
        <p className="text-lg text-slate-500 max-w-xl mb-6">
          Easily calculate your college GPA with our accurate and user-friendly
          college GPA calculator. Perfect for tracking academic performance and
          planning your next semester.
        </p>
        <CollegeCPACalculatorClient />
      </div>
      <div className="w-full items-center justify-center lg:flex">
        <div className="w-full lg:max-w-lg py-6 mt-12  px-4">
          <p className="text-2xl font-bold text-black text-center">
            How to use GPA calculator
          </p>
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="flex flex-col mt-12 items-center justify-center">
              <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                1
              </span>
              <p className="text-slate-800 mt-4 font-semibold text-xl">
                Enter Name of course
              </p>
              <p className="text-slate-700 text-md mt-3">
                Enter the name of course you are offering in the collage, click
                add course button to add another.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="flex flex-col mt-12 items-center justify-center">
              <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                2
              </span>
              <p className="text-slate-800 mt-4 font-semibold text-xl">
                Enter Unit size
              </p>
              <p className="text-slate-700 text-md mt-3">
                Enter the respective unit size of the course you added in the
                calculator.
              </p>
            </div>
            <div className="flex flex-col gap-6 items-center justify-center">
              <div className="flex flex-col mt-12 items-center justify-center">
                <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                  3
                </span>
                <p className="text-slate-800 mt-4 font-semibold text-xl">
                  Enter the Grade.
                </p>
                <p className="text-slate-700 text-md mt-3">
                  Enter the grade you scored or you are expcting to score in
                  each course eg. A,B,C etc.
                </p>
              </div>
              <div className="flex flex-col gap-6 items-center justify-center">
                <div className="flex flex-col mt-12 items-center justify-center">
                  <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                    4
                  </span>
                  <p className="text-slate-800 mt-4 font-semibold text-xl">
                    Result
                  </p>
                  <p className="text-slate-700 text-md mt-3">
                    The result of the provided data will be automatically
                    displayed below the add course button.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 px-4 w-[70%] max-sm:w-full">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">
            College GPA Calculator – Your Ultimate Guide
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our <strong>College GPA Calculator</strong> is designed to help you
            quickly and accurately determine your Grade Point Average (GPA) for
            your college courses. Whether you’re aiming to keep a scholarship,
            meet graduation requirements, or just track your academic progress,
            this tool offers a fast and reliable way to calculate your GPA.
            Simply input your courses, credit hours, and grades to get your
            results instantly.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            This GPA calculator supports both letter grades (A, B+, C, etc.) and
            numeric grade points, making it flexible for different grading
            systems. It works for semester GPA, cumulative GPA, or even a target
            GPA calculation. Whether you’re a freshman starting your academic
            journey or a senior preparing for graduation, this{" "}
            <em>college GPA calculator</em> and its variations (such as semester
            GPA calculator, cumulative GPA calculator, or weighted GPA
            calculator) will be your go-to academic companion.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-3">
            Why Use a College GPA Calculator?
          </h3>
          <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
            <li>Track your academic performance in real time.</li>
            <li>
              Set GPA goals for scholarships, internships, or grad school.
            </li>
            <li>Identify courses that may need more focus and improvement.</li>
            <li>Plan your semesters to maintain or improve your GPA.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-3">
            How This Calculator Works
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            The calculator multiplies each course's credit hours by the grade
            points associated with your grade, then sums these values to get
            total quality points. It then divides the total quality points by
            the total credit hours attempted to give you your GPA. For example,
            a 3-credit course with an “A” (4.0 points) gives you 12 quality
            points. The process repeats for all your courses to calculate your
            overall GPA.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-3">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-slate-700">
                1. Is this calculator accurate?
              </h4>
              <p className="text-slate-600 text-sm">
                Yes. It follows the standard GPA calculation formula used by
                most U.S. colleges and universities. However, always confirm
                with your school’s official policies.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-700">
                2. Can I use it for high school GPA?
              </h4>
              <p className="text-slate-600 text-sm">
                Yes. While designed for college, it can also work for high
                school GPA if your school uses the same credit and grade system.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-700">
                3. Does it support weighted GPAs?
              </h4>
              <p className="text-slate-600 text-sm">
                It supports weighted calculations if you input the correct grade
                points (e.g., honors or AP classes may use a 5.0 scale).
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-700">
                4. Will my data be saved?
              </h4>
              <p className="text-slate-600 text-sm">
                Yes. Your data is saved in your browser using localStorage, so
                you can revisit and see your past entries.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
