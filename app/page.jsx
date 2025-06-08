"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [Open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <Navbar setOpen={setOpen} />
      <Sidebar setOpen={setOpen} Open={Open} />
      <div>
        <div className="w-full flex items-center justify-center mt-12">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 px-2 max-sm:my-12 lg:w-[70%]">
            {Carditems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-4 bg-slate-50 rounded-lg gap-2"
              >
                <div className="flex-1 flex py-4 justify-center flex-col gap-3">
                  <span className="font-bold text-sm text-slate-500">
                    {item.date.toLocaleString("en-US", {
                      day: "numeric",
                      weekday: "long",
                      year: "numeric",
                    })}
                  </span>
                  <h1 className="text-slate-800 font-bold text-xl">
                    {item.title}
                  </h1>
                  <p className="text-slate-700 text-sm line-clamp-2">
                    {item.content}
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
                <div></div>
                <div className="py-4">
                  <Image
                    src={item.image}
                    alt="images"
                    width={2000}
                    height={2000}
                    className="w-[170px] h-[180px] max-sm:w-[140px] max-sm:h-[150px] rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Carditems = [
  {
    title: "Health diet food",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed nulla quaerat sit maxime libero nobis eveniet ipsa, tempore consectetur tempora doloribus enim quas natus fugit repellat? Quisquam odio itaque magnam aliquam vitae illum laudantium culpa, aut ab deserunt fuga id numquam nemo repellat, quam, consectetur eveniet deleniti maxime? Praesentium dolorem, voluptates voluptatem enim doloribus repudiandae? Quaerat distinctio rem in ab incidunt aut sequi quidem veritatis eius magni, perferendis cumque tempora, harum commodi tenetur velit libero. Recusandae fugit, sequi omnis exercitationem similique nihil, modi atque provident in vero molestias cumque sunt rem dolores quos aliquam quia vitae est totam tenetur corrupti corporis! Beatae, ipsam accusantium eveniet obcaecati rem a? Aut obcaecati voluptatem maiores modi doloremque maxime ad, fugit provident eligendi. Exercitationem temporibus aliquid fugit aspernatur eveniet iusto quae et labore quaerat minus numquam quam, itaque earum vero repellendus. Quisquam perferendis cupiditate officiis dolor atque beatae a quia alias blanditiis amet. Dicta in consequuntur beatae nobis magnam error, dolor eveniet deleniti, ullam ea neque nisi quis illo, dignissimos nam a harum? Assumenda natus nobis in! Ea aperiam ducimus a magnam ullam accusamus quia, repellendus corrupti exercitationem reiciendis aliquid saepe? Quod blanditiis veritatis est ex modi, libero beatae. Repudiandae consectetur neque ipsum!",
    date: new Date(Date.now()),
    tags: ["heath", "fitness"],
    image: "/food1.jpg",
  },
  {
    title: "Balance diet",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed nulla quaerat sit maxime libero nobis eveniet ipsa, tempore consectetur tempora doloribus enim quas natus fugit repellat? Quisquam odio itaque magnam aliquam vitae illum laudantium culpa, aut ab deserunt fuga id numquam nemo repellat, quam, consectetur eveniet deleniti maxime? Praesentium dolorem, voluptates voluptatem enim doloribus repudiandae? Quaerat distinctio rem in ab incidunt aut sequi quidem veritatis eius magni, perferendis cumque tempora, harum commodi tenetur velit libero. Recusandae fugit, sequi omnis exercitationem similique nihil, modi atque provident in vero molestias cumque sunt rem dolores quos aliquam quia vitae est totam tenetur corrupti corporis! Beatae, ipsam accusantium eveniet obcaecati rem a? Aut obcaecati voluptatem maiores modi doloremque maxime ad, fugit provident eligendi. Exercitationem temporibus aliquid fugit aspernatur eveniet iusto quae et labore quaerat minus numquam quam, itaque earum vero repellendus. Quisquam perferendis cupiditate officiis dolor atque beatae a quia alias blanditiis amet. Dicta in consequuntur beatae nobis magnam error, dolor eveniet deleniti, ullam ea neque nisi quis illo, dignissimos nam a harum? Assumenda natus nobis in! Ea aperiam ducimus a magnam ullam accusamus quia, repellendus corrupti exercitationem reiciendis aliquid saepe? Quod blanditiis veritatis est ex modi, libero beatae. Repudiandae consectetur neque ipsum!",
    date: new Date(Date.now()),
    tags: ["food", "vegetables"],
    image: "/food2.jpg",
  },
  {
    title: "Exercise routine",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed nulla quaerat sit maxime libero nobis eveniet ipsa, tempore consectetur tempora doloribus enim quas natus fugit repellat? Quisquam odio itaque magnam aliquam vitae illum laudantium culpa, aut ab deserunt fuga id numquam nemo repellat, quam, consectetur eveniet deleniti maxime? Praesentium dolorem, voluptates voluptatem enim doloribus repudiandae? Quaerat distinctio rem in ab incidunt aut sequi quidem veritatis eius magni, perferendis cumque tempora, harum commodi tenetur velit libero. Recusandae fugit, sequi omnis exercitationem similique nihil, modi atque provident in vero molestias cumque sunt rem dolores quos aliquam quia vitae est totam tenetur corrupti corporis! Beatae, ipsam accusantium eveniet obcaecati rem a? Aut obcaecati voluptatem maiores modi doloremque maxime ad, fugit provident eligendi. Exercitationem temporibus aliquid fugit aspernatur eveniet iusto quae et labore quaerat minus numquam quam, itaque earum vero repellendus. Quisquam perferendis cupiditate officiis dolor atque beatae a quia alias blanditiis amet. Dicta in consequuntur beatae nobis magnam error, dolor eveniet deleniti, ullam ea neque nisi quis illo, dignissimos nam a harum? Assumenda natus nobis in! Ea aperiam ducimus a magnam ullam accusamus quia, repellendus corrupti exercitationem reiciendis aliquid saepe? Quod blanditiis veritatis est ex modi, libero beatae. Repudiandae consectetur neque ipsum!",
    date: new Date(Date.now()),
    tags: ["exercise", "fitness"],
    image: "/food3.jpg",
  },
  {
    title: "Gas controller",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed nulla quaerat sit maxime libero nobis eveniet ipsa, tempore consectetur tempora doloribus enim quas natus fugit repellat? Quisquam odio itaque magnam aliquam vitae illum laudantium culpa, aut ab deserunt fuga id numquam nemo repellat, quam, consectetur eveniet deleniti maxime? Praesentium dolorem, voluptates voluptatem enim doloribus repudiandae? Quaerat distinctio rem in ab incidunt aut sequi quidem veritatis eius magni, perferendis cumque tempora, harum commodi tenetur velit libero. Recusandae fugit, sequi omnis exercitationem similique nihil, modi atque provident in vero molestias cumque sunt rem dolores quos aliquam quia vitae est totam tenetur corrupti corporis! Beatae, ipsam accusantium eveniet obcaecati rem a? Aut obcaecati voluptatem maiores modi doloremque maxime ad, fugit provident eligendi. Exercitationem temporibus aliquid fugit aspernatur eveniet iusto quae et labore quaerat minus numquam quam, itaque earum vero repellendus. Quisquam perferendis cupiditate officiis dolor atque beatae a quia alias blanditiis amet. Dicta in consequuntur beatae nobis magnam error, dolor eveniet deleniti, ullam ea neque nisi quis illo, dignissimos nam a harum? Assumenda natus nobis in! Ea aperiam ducimus a magnam ullam accusamus quia, repellendus corrupti exercitationem reiciendis aliquid saepe? Quod blanditiis veritatis est ex modi, libero beatae. Repudiandae consectetur neque ipsum!",
    date: new Date(Date.now()),
    tags: ["heath", "fitness"],
    image: "/glr3.jpg",
  },
];

const Colors = [
  "bg-red-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-slate-200",
  "bg-indigo-200",
];
