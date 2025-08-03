import "../globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";

export const metadata = {
  title: "Online tools for your work",
  description:
    "Discover a professional and advance tools that can help you and facilitate your work, such as calculators, coverters, generators and other online tools.",
};

export default function ToolsLayout({ children }) {
  return (
    <div>
      <HeaderWrapper />
      {children}
    </div>
  );
}
