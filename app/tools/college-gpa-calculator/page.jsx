import dynamic from "next/dynamic";
import Image from "next/image";

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
          College GPA Calculator
        </h1>
        <p className="text-lg text-slate-500 max-w-xl mb-6">
          Quickly and accurately calculate your college GPA with our simple,
          reliable, and easy-to-use tool. Whether you’re planning your next
          semester, tracking your academic performance, or setting GPA goals for
          scholarships and graduation, this calculator helps you stay on top of
          your studies with confidence.
        </p>

        <CollegeCPACalculatorClient />
      </div>
      <div className="w-full items-center justify-center lg:flex">
        <div className="w-full lg:max-w-lg py-6 mt-12 px-4">
          <p className="text-2xl font-bold text-black text-center">
            How to Use the College GPA Calculator
          </p>
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="flex flex-col mt-12 items-center justify-center">
              <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                1
              </span>
              <p className="text-slate-800 mt-4 font-semibold text-xl">
                Enter Course Name
              </p>
              <p className="text-slate-700 text-md mt-3">
                Begin by typing the exact name of the course you are currently
                taking or have completed in college or university. This could be
                anything from “Introduction to Psychology” to “Advanced Calculus
                II.” If you’re calculating your GPA for multiple courses in a
                semester, simply click the <strong>Add Course</strong> button
                after each entry. This ensures that all of your courses—whether
                they’re major-specific classes, general education requirements,
                electives, or lab sessions—are included in your{" "}
                <em>college GPA calculator</em> results. The more accurately you
                list your courses, the more precise your GPA calculation will
                be, whether you’re using a <em>semester GPA calculator</em>,{" "}
                <em>cumulative GPA calculator</em>, or{" "}
                <em>university GPA calculator</em>. For example, if you have a
                mix of lecture-based and lab-based courses, entering them
                separately helps the calculator reflect the true impact each has
                on your academic performance.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="flex flex-col mt-12 items-center justify-center">
              <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                2
              </span>
              <p className="text-slate-800 mt-4 font-semibold text-xl">
                Enter Credit or Unit Hours
              </p>
              <p className="text-slate-700 text-md mt-3">
                For each course you enter, include the number of credit hours
                (also called “units”) that the course carries. Credit hours
                represent the weight or importance of that course in your
                overall GPA score. For example, a 4-credit course in Organic
                Chemistry will have a much greater effect on your GPA than a
                1-credit Physical Education class. If your college uses quarter
                hours instead of semester hours, you can still input those
                values; the <strong>GPA score calculator</strong> will adjust
                the results accordingly. Always double-check your syllabus or
                course registration details to make sure you’re entering the
                correct credit hours, as even small mistakes can alter your
                weighted or unweighted GPA outcome.
              </p>
            </div>
            <div className="flex flex-col gap-6 items-center justify-center">
              <div className="flex flex-col mt-12 items-center justify-center">
                <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                  3
                </span>
                <p className="text-slate-800 mt-4 font-semibold text-xl">
                  Enter Your Grade
                </p>
                <p className="text-slate-700 text-md mt-3">
                  Next, input the grade you have earned—or expect to earn—for
                  each course. You can enter letter grades like A, B+, C-, or
                  numeric grades such as 4.0, 3.7, 2.0, depending on your
                  institution’s grading system. The{" "}
                  <em>college GPA calculator</em> will automatically translate
                  these into grade point values based on the standard U.S.
                  grading scale. For example, an A typically equals 4.0 points,
                  while a B might equal 3.0. If you’re unsure about how your
                  school converts grades to points, you can usually find this
                  information on your school’s academic website or student
                  handbook. Whether you’re using a{" "}
                  <em>university GPA calculator</em>,{" "}
                  <em>semester GPA calculator</em>, or{" "}
                  <em>academic GPA calculator</em>, entering accurate grades
                  ensures you’ll receive a precise calculation for better
                  academic planning.
                </p>
              </div>
              <div className="flex flex-col gap-6 items-center justify-center">
                <div className="flex flex-col mt-12 items-center justify-center">
                  <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                    4
                  </span>
                  <p className="text-slate-800 mt-4 font-semibold text-xl">
                    View Your Result
                  </p>
                  <p className="text-slate-700 text-md mt-3">
                    Once you’ve entered all your courses, credit hours, and
                    grades, the <strong>college GPA calculator</strong> will
                    instantly generate your GPA score. Your result will appear
                    directly below the <strong>Add Course</strong> button,
                    allowing you to review your academic standing in real time.
                    You can use this result to track your progress toward
                    graduation, maintain eligibility for scholarships, or
                    qualify for honors such as Dean’s List. Additionally, you
                    can calculate “what-if” scenarios—such as what GPA you need
                    next semester to reach your target cumulative GPA—making
                    this <em>GPA calculation tool</em> essential for academic
                    goal setting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:max-w-lg py-6 mt-12 px-4">
        <iframe
          className="w-full"
          height="315"
          src="https://www.youtube.com/embed/yep0d_U1Dgo"
          title="Fast and Easy Way to Calculate Your GPA in 60 Seconds"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-10 px-4 w-[70%] max-sm:w-full">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">
            College GPA Calculator – Your Complete Guide
          </h2>
          <p className="text-slate-600 text-md leading-relaxed">
            The College GPA Calculator is more than just a quick math
            utility—it’s a reliable and detailed tool designed to help students
            manage, track, and improve their academic performance over time.
            Whether your goal is to keep your scholarship, qualify for a
            competitive internship, prepare for graduate school, or simply
            maintain a personal academic standard, having accurate GPA results
            is essential. With this calculator, all you need to do is enter the
            courses you’ve taken, the credit hours assigned to each, and your
            grades. Within seconds, you can see your semester GPA or your
            overall cumulative GPA, giving you a clear understanding of where
            you stand academically. This insight allows you to plan ahead,
            decide where to focus your efforts, and take proactive steps to
            improve or maintain your performance.
          </p>
          <p className="text-slate-600 text-md leading-relaxed mt-3">
            This GPA calculator can be used for both semester-based tracking and
            calculating your cumulative GPA across multiple terms. It works with
            weighted grading systems, such as those used for honors or advanced
            placement courses, as well as standard unweighted scales. Whether
            you are calculating grades for challenging advanced classes,
            elective courses, or general education requirements, the tool
            ensures you get an accurate and fair result every time. You can also
            use it to explore “what-if” scenarios—for example, checking how your
            GPA might change if you earn certain grades in upcoming courses.
            From your first semester in college to your final term, this
            calculator is a dependable companion that helps you stay informed,
            set realistic academic goals, and make smarter decisions about your
            education.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-3">
            Why Use a College GPA Calculator?
          </h3>
          <ul className="list-disc list-inside text-slate-600 text-md space-y-1">
            <li>
              Track your academic performance across semesters using a reliable{" "}
              <em>GPA calculator tool</em>.
            </li>
            <li>
              Set realistic GPA targets for scholarships, internships, graduate
              school admissions, or honor societies.
            </li>
            <li>
              Identify subjects that require extra focus to improve your{" "}
              <em>cumulative GPA</em>.
            </li>
            <li>
              Plan your course load strategically without risking your GPA
              score.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-3">
            How the GPA Calculation Works
          </h3>
          <p className="text-slate-600 text-md leading-relaxed">
            The <strong>college GPA calculator</strong> uses a simple
            formula—credit hours multiplied by grade point value equals quality
            points. After adding all quality points, divide by the total credit
            hours to get your GPA score. This method is consistent with how most{" "}
            <em>university GPA calculators</em> and academic institutions
            determine GPAs, ensuring accuracy whether you’re calculating a
            semester GPA or a long-term cumulative GPA.
          </p>
        </section>
        <Image
          src="/tools/gpa.png"
          alt="advance gpa calculator for universities and colleges"
          width={2000}
          height={2000}
          className="w-full h-[280px] mt-4 lg:max-w-lg"
        />

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-3">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-slate-700">
                1. Is this calculator accurate?
              </h4>
              <p className="text-slate-600 text-md">
                Yes. Our <strong>college GPA calculator</strong> uses the same
                formula trusted by U.S. colleges and universities. The results
                are as accurate as your input data, making it a dependable{" "}
                <em>academic GPA calculator</em> for students.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-700">
                2. Can it be used for high school GPA?
              </h4>
              <p className="text-slate-600 text-md">
                Absolutely. While designed for college students, this{" "}
                <em>GPA score calculator</em> works for high school GPAs too, as
                long as your school uses a similar credit and grading system.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-700">
                3. Does it support weighted GPAs?
              </h4>
              <p className="text-slate-600 text-md">
                Yes. Our <em>weighted GPA calculator</em> lets you input higher
                grade values for honors, AP, or IB courses, making it ideal for
                advanced academic programs.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-700">
                4. Will my data be saved?
              </h4>
              <p className="text-slate-600 text-md">
                Yes. All data is saved locally in your browser, so your{" "}
                <strong>college GPA calculator</strong> entries remain available
                when you return.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
