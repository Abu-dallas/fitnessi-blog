import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Fitnessi - is an online tools provider and fitness guider",
  description:
    "Discover a professional and advance tools that can help you and facilitate your work, such as calculators, coverters, generators and other online tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
