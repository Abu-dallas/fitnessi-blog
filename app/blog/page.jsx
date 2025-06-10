import posts from "@/database/db.json";
import Image from "next/image";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";

export const metadata = {
  title: "Articles - Fitnessi",
  description:
    "Lisez nos articles sur la santé, le fitness et le bien-être pour rester en forme chaque jour.",
};

function Blogs() {
  return (
    <div>
      <HeaderWrapper />
      <div className="w-full flex items-center justify-center mt-18 flex-col">
        <p className="text-slates-800 font-semibold text-xl px-4 py-6">
          Lisez nos articles sur la santé, le fitness et le bien-être pour
          rester en forme chaque jour.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 px-2 max-sm:my-12 lg:w-[70%]">
          {posts.map((item, index) => (
            <Link
              href={`/blog/${item.slug}`}
              key={index}
              className="flex items-center justify-between hover:bg-cyan-100 px-4 bg-slate-50 rounded-lg gap-2"
            >
              <div className="flex-1 flex py-4 justify-center flex-col gap-3">
                <span className="font-bold text-sm text-slate-500">
                  {item.date}
                </span>
                <h1 className="text-slate-800 font-bold text-xl">
                  {item.title}
                </h1>
                <p className="text-slate-700 text-sm line-clamp-2">
                  {item.body}
                </p>
                <div className="flex gap-3">
                  {item.tags.map((chip, index) => (
                    <span
                      className={`text-sm px-1.5 py-0.5 rounded font-semibold text-slate-700 ${
                        Colors[index % Colors.length]
                      }`}
                      key={index}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div className="py-4">
                <Image
                  src={item.image}
                  alt="images"
                  width={2000}
                  height={2000}
                  className="w-[170px] h-[180px] max-sm:w-[140px] max-sm:h-[150px] rounded-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;

const Colors = [
  "bg-red-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-slate-200",
  "bg-indigo-200",
];
