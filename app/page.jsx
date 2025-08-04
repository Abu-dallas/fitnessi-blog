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
        <p className="text-slates-800 font-semibold text-xl px-4 py-6">
          Lisez nos articles sur la santé, le fitness et le bien-être pour
          rester en forme chaque jour.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 px-2 max-sm:my-12 lg:w-[70%]">
          {posts.map((item, index) => (
            <Link
              href={`/blog/${item.slug}`}
              key={index}
              className="flex items-center justify-between hover:bg-cyan-100 px-4 bg-slate-50 rounded-lg gap-2"
            >
              <div className="flex-1 flex py-4 justify-center flex-col gap-3">
                <span className="font-bold text-sm text-slate-500">
                  {item.date}
                </span>
                <h1 className="text-slate-800 font-bold text-xl">
                  {item.title}
                </h1>
                <p className="text-slate-700 text-sm line-clamp-2">
                  {item.body}
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
              <div className="py-4">
                <Image
                  src={item.image}
                  alt="images"
                  width={2000}
                  height={2000}
                  className="w-[170px] h-[180px] max-sm:w-[140px] max-sm:h-[150px] rounded-lg"
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-14">
          <Link
            className="text-sm px-2.5 py-1 rounded font-semibold text-white bg-blue-400"
            href="/blog"
          >
            See all
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

const posts = [
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
];

const Colors = [
  "bg-red-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-slate-200",
  "bg-indigo-200",
];
