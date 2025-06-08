"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

function About() {
  const [Open, setOpen] = useState(false);
  return (
    <div>
      <Navbar setOpen={setOpen} />
      <Sidebar setOpen={setOpen} Open={Open} />
    </div>
  );
}

export default About;
