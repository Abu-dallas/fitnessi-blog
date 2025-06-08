"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function BlogPost({ post }) {
  const [Open, setOpen] = useState(false);
  return (
    <div className="w-full md:flex md:flex-col items-center justify-center">
      <Navbar setOpen={setOpen} />
      <Sidebar setOpen={setOpen} Open={Open} />
      <div className="w-full px-4 mt-18 md:w-[70%]">
        <h1 className="py-6 text-3xl text-black font-bold">{post.title}</h1>
        <div className="pb-4">
          <Image
            src={post.image}
            alt="images"
            width={2000}
            height={2000}
            className="w-full md:w-full h-[500px] rounded-lg"
          />
          <span className="flex w-full divide-x divide-slate-400 items-center my-4  justify-center ">
            <Link href="#" className=" px-3 py-0 text-cyan-700 font-semibold">
              keyword
            </Link>
            <Link href="#" className=" px-3 py-0 text-cyan-700 font-semibold">
              Takeaway
            </Link>
            <Link href="#" className=" px-3 py-0 text-cyan-700 font-semibold">
              FAQ
            </Link>
            <Link href="#" className="px-4 text-cyan-700 font-semibold">
              Summary
            </Link>
          </span>
        </div>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default BlogPost;
