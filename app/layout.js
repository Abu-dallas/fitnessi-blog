import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Fitnessi blog | home page",
  description:
    "discover an exceptional guides for weight loss, healthy diet and much more.",
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
