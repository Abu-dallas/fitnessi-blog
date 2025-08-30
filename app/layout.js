import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Fitnessi - Votre guide fitness et fournisseur d'outils en ligne",
  description:
    "Découvrez des outils en ligne professionnels et avancés pour vous faciliter la vie, tels que des calculateurs, convertisseurs, générateurs et bien d'autres outils utiles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
