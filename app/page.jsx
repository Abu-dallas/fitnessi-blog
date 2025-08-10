import Image from "next/image";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";

export const metadata = {
  title: "Fitness | Free Tools, Calculators & Expert Guides",
  description:
    "Explore a wide range of free online tools, calculators, and expert fitness guides. Whether you're tracking workouts, calculating macros, or solving everyday tasks, Fitness helps you stay productive and healthy.",
  keywords: [
    "fitness tools",
    "online calculators",
    "workout planner",
    "macro calculator",
    "BMI calculator",
    "health guides",
    "daily tools",
    "free online tools",
    "fitness resources",
    "weight loss tools",
  ],
  openGraph: {
    title: "Fitness | Free Tools, Calculators & Expert Guides",
    description:
      "Discover top free online tools and fitness resources to improve your health, track progress, and stay motivated. All in one place — Fitness.",
    url: "https://fitnessi.top", // replace with your actual domain
    siteName: "Fitness",
    type: "website",
  },
};

function HomePage() {
  return (
    <div>
      <HeaderWrapper />
      <div className="w-full flex items-center justify-center mt-18 flex-col">
        <h1 className="text-slates-800 font-bold text-xl px-4 py-6">
          Fitnessi Online Tools Website
        </h1>
        <div className="w-full lg:w-[70%]">
          <p className="px-4">
            Welcome to Fitnessi – Your All-in-One Online Tool Hub Fitnessi is
            your go-to destination for smart, easy-to-use online tools designed
            to make everyday tasks faster and simpler. From handy calculators
            and accurate converters to specialized utilities that save you time,
            our platform offers a wide variety of solutions in one place.
            Whether you need to calculate, convert, or find quick answers,
            Fitnessi delivers reliable results instantly, right in your browser.
            No downloads, no hassle – just quick, accurate, and user-friendly
            tools at your fingertips. Empowering Your Productivity Anytime,
            Anywhere We built Fitnessi with one goal: to help you work smarter,
            not harder. Our tools are optimized for speed, accuracy, and
            simplicity, so you can focus on what matters most. Whether you’re a
            student, professional, or casual user, you’ll find the right tool
            for your needs – all available for free and accessible on any
            device. At Fitnessi, we believe in making technology work for you,
            turning complex tasks into simple clicks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

{
  /*const posts = [
  {
    title: "banc de musculation",
    body: "Le banc de musculation est sans doute l’un des équipements les plus emblématiques et indispensables dans l’univers du fitness et de la musculation. Sa popularité s'explique par sa grande polyvalence : il s’adapte à tous les niveaux, du débutant qui découvre les bases de l'entraînement en résistance, jusqu’au pratiquant confirmé qui cherche à développer sa force, sa masse musculaire ou à améliorer sa définition.",
    slug: "banc-de-musculation",
    data: "19-juin-2025",
    tags: ["fitness", "banc"],
    image: "/fit/dumbellpress.jpg",
  },
  {
    title: "Bracelet Ultrason Perte de Poids",
    body: "Le bracelet ultrason pour la perte de poids est un accessoire de bien-être qui se porte généralement au poignet, comme une montre ou un bijou discret. Conçu pour aider à maigrir de manière naturelle et non invasive, il repose sur l'utilisation de vibrations ultrasoniques. Ces ultrasons de basse fréquence sont censés stimuler la circulation sanguine, accélérer le métabolisme et favoriser l'élimination des toxines et des graisses stockées dans le corps.",
    slug: "bracelet-ultrason-perte-de-poids-avis",
    data: "19-juin-2025",
    tags: ["fitness", "health"],
    image: "/fit/ultrasound3.jpg",
  },
  {
    title: " Catégorie Poids Boxe",
    body: " En boxe, le respect des catégories de poids est un principe fondamental. Il ne s’agit pas seulement d’une règle technique, mais d’un élément clé pour garantir la sécurité, l’équité et l’intégrité du sport. Un écart de poids significatif entre deux boxeurs peut entraîner un déséquilibre majeur dans le combat, augmentant considérablement le risque de blessure pour le plus léger.",
    slug: "categorie-poids-boxe",
    data: "19-juin-2025",
    tags: ["barbell", "dumbbell"],
    image: "/fit/boxing1.jpg",
  },
  {
    title: "Collagène et prise de poids",
    body: "Le collagène est devenu l’un des compléments alimentaires les plus populaires de la dernière décennie, notamment grâce à l’essor de la nutrition santé, du bien-être et de la cosmétique anti-âge. On le retrouve aujourd’hui dans une multitude de produits : crèmes pour la peau, poudres protéinées, gélules, boissons fonctionnelles, et même barres énergétiques.",
    slug: "collagene-et-prise-de-poids",
    data: "19-juin-2025",
    tags: ["collagene", "health"],
    image: "/fit/collagenbg.jpg",
  },
  {
    title: "Fleurs de Bach et Perte de Poids",
    body: " Si vous avez déjà essayé plusieurs régimes sans succès durable, que vous avez alterné entre périodes de contrôle alimentaire strict et phases de rechute, il est peut-être temps de vous pencher sur une dimension souvent négligée dans la perte de poids :",
    slug: "fleurs-de-bach-et-perte-de-poids",
    data: "19-juin-2025",
    tags: ["fleurs", "batch", "poid"],
    image: "/fit/bachflower.jpg",
  },
  {
    title: "Machine de Musculation",
    body: " Les machines de musculation occupent aujourd'hui une place essentielle dans l’univers du fitness, aussi bien dans les salles de sport professionnelles que dans les espaces d'entraînement à domicile. Leur popularité s'explique par leur accessibilité",
    slug: "machine-de-musculation",
    data: "15-juin-2025",
    tags: ["musculation", "poids", "machine"],
    image: "/fit/benchpress.jpg",
  },
]; const Colors = [
  "bg-red-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-slate-200",
  "bg-indigo-200",
];
*/
}
