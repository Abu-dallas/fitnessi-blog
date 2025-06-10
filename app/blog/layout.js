import "../globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";

export const metadata = {
  title: "Fitnessi - Santé, Fitness et Bien-être au Quotidien",
  description:
    "Découvrez Fitnessi : votre source d'inspiration pour adopter un mode de vie sain. Conseils sur le fitness, la nutrition et le bien-être chaque jour.",
};

export default function BlogLayout({ children }) {
  return (
    <div>
      <HeaderWrapper />
      {children}
    </div>
  );
}
