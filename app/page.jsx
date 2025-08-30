import Image from "next/image";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
export const metadata = {
  title: "Fitness | Outils Gratuits, Calculateurs & Guides Experts",
  description:
    "Découvrez une large gamme d’outils en ligne gratuits, de calculateurs et de guides fitness experts. Que vous suiviez vos entraînements, calculiez vos macros ou résolviez des tâches quotidiennes, Fitness vous aide à rester productif et en bonne santé.",
  keywords: [
    "outils fitness",
    "calculateurs en ligne",
    "planificateur d'entraînement",
    "calculateur de macros",
    "calculateur IMC",
    "guides santé",
    "outils quotidiens",
    "outils gratuits en ligne",
    "ressources fitness",
    "outils perte de poids",
  ],
  openGraph: {
    title: "Fitness | Outils Gratuits, Calculateurs & Guides Experts",
    description:
      "Découvrez les meilleurs outils en ligne gratuits et ressources fitness pour améliorer votre santé, suivre vos progrès et rester motivé. Tout en un seul endroit — Fitness.",
    url: "https://fitnessi.top", // remplacez par votre domaine réel
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
          Site d'Outils en Ligne Fitnessi
        </h1>
        <div className="w-full lg:w-[70%]">
          <p className="px-4">
            Bienvenue sur Fitnessi – votre plateforme tout-en-un d’outils en
            ligne. Fitnessi est votre destination idéale pour des outils en
            ligne intelligents et faciles à utiliser, conçus pour rendre les
            tâches quotidiennes plus rapides et simples. Des calculateurs
            pratiques aux convertisseurs précis, en passant par des utilitaires
            spécialisés qui vous font gagner du temps, notre plateforme propose
            une large gamme de solutions réunies en un seul endroit. Que vous
            ayez besoin de calculer, convertir ou trouver rapidement des
            réponses, Fitnessi vous fournit des résultats fiables
            instantanément, directement dans votre navigateur. Pas de
            téléchargements, pas de complications – simplement des outils
            rapides, précis et faciles à utiliser à portée de main. Nous avons
            créé Fitnessi dans un seul but : vous aider à travailler plus
            intelligemment, pas plus dur. Nos outils sont optimisés pour la
            rapidité, la précision et la simplicité, afin que vous puissiez vous
            concentrer sur l’essentiel. Que vous soyez étudiant, professionnel
            ou utilisateur occasionnel, vous trouverez l’outil adapté à vos
            besoins – tous disponibles gratuitement et accessibles depuis
            n’importe quel appareil. Chez Fitnessi, nous croyons en une
            technologie au service de l’utilisateur, transformant les tâches
            complexes en simples clics.
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
