import HeaderWrapper from "@/components/HeaderWrapper";
import IMCcalcul from "@/components/IMCcalcul";
import Image from "next/image";
import Script from "next/script";

// app/calcul-imc/metadata.js
export const metadata = {
  title:
    "Calcul IMC - Outil gratuit pour calculer votre Indice de Masse Corporelle (2025)",
  description:
    "Découvrez votre IMC (Indice de Masse Corporelle) avec notre calculateur interactif. Évaluez rapidement votre poids et obtenez des conseils santé. Année  2025",
  keywords: [
    "calcul imc",
    "imc calcul",
    "calculateur IMC",
    "outil IMC gratuit",
    "poids santé",
    "indice de masse corporelle",
    "IMC homme",
    "IMC femme",
    "IMC enfants",
  ],
  authors: [{ name: "Garba Yakubu" }],
  creator: "Garba Yakubu",
  publisher: "Garba Yakubu",
  openGraph: {
    title: "Calcul IMC Gratuit - Découvrez votre indice de masse corporelle",
    description:
      "Calculez votre IMC facilement avec notre outil en ligne interactif. Année 2025",
    type: "website",
    url: "https://fitnessi.top/calculatrice/calcul-imc",
    siteName: "Calculateur IMC",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

function IMCpage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <HeaderWrapper />
      <div className="max-w-3xl mx-auto px-6 prose prose-lg text-lg max-md:pt-24 mt-6 text-slate-100">
        <h1 className="text-3xl font-bold mb-4">
          Calcul IMC : votre outil pour évaluer rapidement l’Indice de Masse
          Corporelle
        </h1>

        <p className="text-slate-200">
          Notre <strong>calculateur IMC</strong> vous permet de connaître en
          quelques secondes votre <em>Indice de Masse Corporelle</em>. Entrez
          simplement votre taille et votre poids, et l’<em>IMC calcul</em>{" "}
          affichera automatiquement votre résultat ainsi que la catégorie
          correspondante (maigreur, poids normal, surpoids ou obésité). Cet
          outil pratique est conçu pour vous donner une estimation fiable de
          votre état corporel, afin de mieux suivre votre santé au quotidien.
        </p>
      </div>
      <IMCcalcul />
      <section className="max-w-3xl mx-auto p-6 prose prose-lg text-lg text-slate-100">
        <div className="flex flex-col w-full lg:w-[70%] py-6">
          <h2 className="text-xl font-bold mb-3">Table des matières</h2>
          <ul className="flex flex-col list-disc list-inside">
            <li>
              <a className="text-blue-500" href="#imc">
                Qu’est-ce que l’IMC&nbsp;?
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#imccal">
                Pourquoi utiliser un calculateur IMC&nbsp;?
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#comment">
                Comment fonctionne notre outil IMC calcul&nbsp;?
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#utiliser">
                Comment utiliser notre calculateur IMC en 2 étapes simples
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#interpre">
                Interprétation des résultats IMC
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#limi">
                Limites du calcul IMC
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#video">
                Vidéo explicative : Comment calculer l’IMC
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#faq">
                FAQ sur le Calcul de l’IMC
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#Conclusion">
                Conclusion
              </a>
            </li>
          </ul>
        </div>
        <h2 id="imc" className="text-2xl font-semibold mt-6 mb-2">
          Qu’est-ce que l’IMC&nbsp;?
        </h2>
        <p>
          L’<strong>IMC</strong> (Indice de Masse Corporelle) est un indicateur
          reconnu mondialement pour évaluer la corpulence d’un individu. Il
          repose sur une formule mathématique simple qui compare le poids en
          kilogrammes à la taille en mètres carrés. Grâce à ce calcul, on
          obtient une valeur chiffrée permettant de déterminer si une personne
          est en situation de
          <em>maigreur</em>, de <em>poids normal</em>, de <em>surpoids</em> ou
          d’<em>obésité</em>.
        </p>

        <p className="font-mono bg-slate-900 p-3 rounded my-4">
          IMC = Poids (kg) ÷ [Taille (m)]²
        </p>

        <p>
          Le <strong>calcul IMC</strong> est utilisé aussi bien par les
          particuliers que par les professionnels de santé pour effectuer une
          première évaluation rapide de la santé pondérale. On parle aussi de{" "}
          <em>IMC calcul en ligne</em> ou de <em>calculateur IMC</em> lorsqu’il
          est présenté sous forme d’outil numérique interactif, comme celui
          proposé sur cette page.
        </p>

        <p>
          Même s’il constitue une méthode simple et pratique, il est important
          de rappeler que l’IMC reste un indicateur général. Il ne prend pas en
          compte la répartition de la masse musculaire, de la masse grasse ou
          d’autres facteurs comme l’âge, le sexe ou l’activité physique.
          Cependant, il reste une référence fiable pour avoir une première
          estimation de son état de santé en fonction de son poids et de sa
          taille.
        </p>

        <h2 id="imccal" className="text-2xl font-semibold mt-6 mb-2">
          Pourquoi utiliser un calculateur IMC&nbsp;?
        </h2>
        <p>
          L’<strong>IMC calcul</strong> est bien plus qu’une simple formule.
          Grâce à un
          <em>calculateur IMC en ligne</em>, vous obtenez en quelques secondes
          une estimation fiable de votre état de santé lié au poids. Cet outil
          est utilisé aussi bien par les particuliers que par les professionnels
          de santé pour effectuer un premier repérage rapide.
        </p>
        <ul className="list-disc pl-6 mt-3">
          <li>
            <strong>Évaluer rapidement votre situation pondérale&nbsp;:</strong>{" "}
            en indiquant seulement votre poids et votre taille, le{" "}
            <em>calcul IMC</em> fournit une valeur simple à interpréter.
          </li>
          <li>
            <strong>Identifier votre catégorie de poids&nbsp;:</strong> le
            résultat permet de savoir si vous êtes en insuffisance pondérale,
            poids normal, surpoids ou obésité, selon les normes définies par
            l’Organisation Mondiale de la Santé (OMS).
          </li>
          <li>
            <strong>Suivre votre évolution dans le temps&nbsp;:</strong> répéter
            l’IMC calcul à différents moments de votre vie permet de constater
            l’évolution de votre poids par rapport à votre taille et d’anticiper
            d’éventuels risques pour la santé.
          </li>
          <li>
            <strong>Un outil simple et universel&nbsp;:</strong> le calculateur
            IMC ne nécessite aucune connaissance médicale, il s’adresse à tout
            le monde et peut être utilisé à titre préventif.
          </li>
        </ul>
        <p className="mt-3">
          En résumé, utiliser un <strong>calculateur IMC</strong> est un moyen
          accessible, rapide et efficace pour mieux comprendre votre état de
          santé et agir si nécessaire.
        </p>

        <h2 id="comment" className="text-2xl font-semibold mt-6 mb-2">
          Comment fonctionne notre outil IMC calcul&nbsp;?
        </h2>
        <p>
          Notre outil <strong>calcul IMC</strong> a été conçu pour être simple,
          rapide et accessible à tous. Il utilise une formule scientifique
          standardisée afin de fournir une estimation fiable de votre indice de
          masse corporelle en fonction des informations que vous saisissez.
        </p>
        <p className="mt-3">
          Pour obtenir votre résultat, il vous suffit de renseigner vos données
          personnelles dans les champs prévus à cet effet&nbsp;:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>
            <strong>Poids</strong> — en kilogrammes (kg) si vous utilisez le
            système métrique, ou en livres (lbs) si vous préférez le système
            impérial.
          </li>
          <li>
            <strong>Taille</strong> — saisissez votre taille en centimètres ou
            en mètres, ou bien en pieds/pouces selon vos habitudes.
          </li>
          <li>
            <strong>Unité de mesure</strong> — une option vous permet de
            basculer facilement entre <em>système métrique</em> et{" "}
            <em>système impérial</em>, pour plus de flexibilité.
          </li>
        </ul>
        <p className="mt-3">
          Une fois vos données entrées, le calculateur applique la formule
          <em>IMC = poids ÷ (taille × taille)</em> et vous affiche
          instantanément votre résultat. Celui-ci est accompagné d’une
          interprétation claire&nbsp;: insuffisance pondérale, poids normal,
          surpoids ou obésité.
        </p>
        <p className="mt-3">
          Grâce à cette approche, notre <strong>IMC calcul en ligne</strong>{" "}
          vous offre une évaluation immédiate de votre état corporel, vous
          permettant de mieux comprendre votre situation et de suivre votre
          santé au fil du temps.
        </p>

        <p>
          Après avoir entré vos informations, l’algorithme calcule
          instantanément votre <strong>Indice de Masse Corporelle</strong>
          et affiche votre catégorie (insuffisance pondérale, poids normal,
          surpoids, obésité). Une barre visuelle vous aide à situer votre
          résultat par rapport aux normes reconnues par l’Organisation Mondiale
          de la Santé (OMS).
        </p>
        <div className="mt-8">
          <h2 id="utiliser" className="text-2xl font-semibold mb-4">
            Comment utiliser notre calculateur IMC en 2 étapes simples
          </h2>

          <div className="mb-6">
            <p className="mb-3">
              <strong>
                Étape 1 : Remplir toutes les informations nécessaires
              </strong>
              <br />
              Pour obtenir un calcul précis, il est important d’entrer vos
              données personnelles : votre poids (en kg ou lbs), votre taille
              (en cm/m ou pieds/pouces), votre âge et votre sexe. Ces
              informations permettent à l’outil d’effectuer le calcul exact de
              votre IMC et de déterminer correctement votre catégorie de poids.
            </p>
            <Image
              src="/imc1.png"
              alt="Saisie des données pour le calcul IMC"
              width={600}
              height={350}
              className="rounded shadow-md"
            />
          </div>

          <div className="mb-6">
            <p className="mb-3">
              <strong>Étape 2 : Résultat affiché automatiquement</strong>
              <br />
              Dès que vous avez saisi toutes vos données, le calculateur affiche
              instantanément votre IMC exact selon la formule standard{" "}
              <em>(IMC = Poids ÷ Taille²)</em>. Vous verrez également votre
              catégorie de poids (insuffisance pondérale, poids normal, surpoids
              ou obésité), la plage de poids santé adaptée à votre taille, et un
              indicateur visuel pour mieux comprendre votre situation.
            </p>
            <Image
              src="/imc2.png"
              alt="Résultat du calcul IMC"
              width={600}
              height={350}
              className="rounded shadow-md"
            />
          </div>

          <p>
            Grâce à ces deux étapes simples et visuelles, notre calculateur IMC
            vous permet d’obtenir rapidement une estimation fiable de votre état
            corporel et de suivre votre santé de manière pratique et intuitive.
          </p>
        </div>

        <h2 id="interpre" className="text-2xl font-semibold mt-6 mb-2">
          Interprétation des résultats IMC
        </h2>
        <p>
          L’Indice de Masse Corporelle (IMC) est un indicateur reconnu par
          l’Organisation mondiale de la santé (OMS) pour évaluer la corpulence
          d’un individu adulte. Voici comment interpréter vos résultats&nbsp;:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Moins de 18,5&nbsp;:</span>
            correspond à une <strong>insuffisance pondérale</strong>. Cela peut
            indiquer une alimentation insuffisante ou certains problèmes de
            santé. Il est recommandé de consulter un professionnel si cet état
            persiste.
          </li>
          <li>
            <span className="font-semibold">18,5 à 24,9&nbsp;:</span>
            considéré comme un <strong>poids normal</strong>. Ce résultat montre
            un équilibre entre taille et poids, généralement associé à un risque
            plus faible de maladies liées au poids.
          </li>
          <li>
            <span className="font-semibold">25 à 29,9&nbsp;:</span>
            correspond à une situation de <strong>surpoids</strong>. À ce stade,
            il peut être conseillé d’adopter une alimentation plus équilibrée et
            d’augmenter l’activité physique afin de limiter les risques
            cardiovasculaires ou métaboliques.
          </li>
          <li>
            <span className="font-semibold">30 et plus&nbsp;:</span>
            ce seuil définit l’<strong>obésité</strong>. Elle peut entraîner des
            complications de santé comme le diabète de type 2, l’hypertension ou
            des problèmes articulaires. Un suivi médical et des changements de
            mode de vie sont généralement nécessaires.
          </li>
        </ul>
        <p className="mt-4">
          Il est important de noter que l’IMC n’est qu’un indicateur
          global&nbsp;: il ne prend pas en compte la masse musculaire, la
          répartition des graisses ou d’autres paramètres individuels. Pour une
          analyse complète, il est recommandé de consulter un médecin ou un
          nutritionniste.
        </p>

        <h2 id="limi" className="text-2xl font-semibold mt-6 mb-2">
          Limites du calcul IMC
        </h2>
        <p className="mb-3">
          Bien que le <strong>calcul IMC</strong> soit un indicateur simple et
          pratique pour évaluer rapidement la corpulence, il présente certaines
          limites importantes. En effet, l’IMC ne prend pas en compte :
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>
            La <strong>répartition de la masse corporelle</strong> : deux
            personnes avec le même IMC peuvent avoir des compositions
            corporelles très différentes (muscles vs graisses).
          </li>
          <li>
            La <strong>masse musculaire</strong> : un athlète très musclé peut
            avoir un IMC élevé tout en étant en excellente santé.
          </li>
          <li>
            L’<strong>âge</strong> : les besoins et la composition corporelle
            évoluent avec le temps, ce qui peut fausser l’interprétation.
          </li>
          <li>
            Le <strong>sexe</strong> : hommes et femmes ont des proportions de
            masse musculaire et graisseuse différentes.
          </li>
          <li>
            La <strong>morphologie</strong> et la structure osseuse, qui
            influencent la corpulence et la silhouette.
          </li>
        </ul>
        <p>
          Pour ces raisons, le calcul IMC doit être utilisé comme un{" "}
          <strong>repère général</strong> et non comme un diagnostic médical. Il
          est recommandé de compléter l’évaluation avec d’autres mesures de
          santé, comme le tour de taille, le pourcentage de masse grasse, ou des
          analyses médicales spécialisées.
        </p>
        <p>
          En résumé, l’IMC est un outil pratique pour avoir une idée générale de
          votre état corporel, mais il doit toujours être interprété dans un
          contexte plus large et personnalisé.
        </p>

        <h2 id="Conclusion" className="text-2xl font-semibold mt-6 mb-2">
          Conclusion
        </h2>
        <p className="mb-4">
          Utiliser un <strong>IMC calcul</strong> est un excellent point de
          départ pour évaluer votre état de santé et mieux comprendre la
          relation entre votre poids et votre taille. Cet indicateur simple
          permet d’obtenir rapidement une idée de votre position dans les
          différentes catégories de poids, qu’il s’agisse d’insuffisance
          pondérale, de poids normal, de surpoids ou d’obésité.
        </p>
        <p className="mb-4">
          Toutefois, il est important de garder à l’esprit que l’IMC reste un
          outil général et ne prend pas en compte certains facteurs essentiels
          comme la masse musculaire, la répartition des graisses, l’âge ou
          encore le sexe. C’est pourquoi l’IMC doit toujours être considéré
          comme une <em>première indication</em> et non comme un diagnostic
          médical définitif.
        </p>
        <p className="mb-4">
          Pour une analyse complète et personnalisée de votre santé, il est
          vivement recommandé de consulter un professionnel de santé (médecin,
          nutritionniste ou diététicien). En complément, adopter une
          alimentation équilibrée, pratiquer une activité physique régulière et
          maintenir un mode de vie sain restent les meilleures stratégies pour
          préserver votre bien-être.
        </p>
        <p>
          Essayez dès maintenant notre calculateur IMC en ligne, découvrez votre
          résultat et prenez le premier pas vers une meilleure compréhension de
          votre santé&nbsp;!
        </p>

        <div className="mt-8">
          <h2 id="video" className="text-2xl font-semibold mb-4">
            Vidéo explicative : Comment calculer l’IMC
          </h2>

          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded shadow-md"
              src="https://www.youtube.com/embed/7xNk0kxRXxw"
              title="Explication du calcul IMC"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="mt-3">
            Regardez cette vidéo pour comprendre comment utiliser un calculateur
            IMC et interpréter vos résultats. La démonstration vous guide étape
            par étape pour obtenir votre indice de masse corporelle et connaître
            votre catégorie de poids.
          </p>
        </div>

        <h2 id="faq" className="text-2xl font-semibold mt-10 mb-4">
          FAQ sur le Calcul de l’IMC
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium">Qu’est-ce que l’IMC&nbsp;?</h3>
            <p>
              L’Indice de Masse Corporelle (IMC) est une formule simple qui
              compare votre poids à votre taille. Il permet de déterminer si
              vous êtes dans une catégorie de poids santé, en surpoids, en
              insuffisance pondérale ou en obésité.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Comment calculer l’IMC&nbsp;?
            </h3>
            <p>
              L’IMC se calcule avec la formule&nbsp;:{" "}
              <strong>IMC = Poids (kg) ÷ [Taille (m)]²</strong>. Par exemple,
              une personne de 70 kg mesurant 1,75 m aura un IMC de 22,86 (70 ÷
              1,75²).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Un IMC normal correspond à quelle valeur&nbsp;?
            </h3>
            <p>
              Selon l’Organisation mondiale de la santé (OMS), un IMC normal se
              situe entre <strong>18,5 et 24,9</strong>. En dessous de 18,5, on
              parle d’insuffisance pondérale. Au-dessus de 25, il s’agit de
              surpoids, et à partir de 30, d’obésité.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              L’IMC est-il fiable pour tout le monde&nbsp;?
            </h3>
            <p>
              Non, l’IMC ne prend pas en compte la masse musculaire, l’âge, le
              sexe ou la répartition des graisses. Par exemple, un athlète très
              musclé peut avoir un IMC élevé sans être en mauvaise santé.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Pourquoi utiliser un calculateur IMC en ligne&nbsp;?
            </h3>
            <p>
              Un calculateur IMC en ligne permet d’obtenir rapidement et
              gratuitement une estimation de votre état de santé. C’est un outil
              pratique pour suivre votre évolution et mieux comprendre votre
              corps, mais il ne remplace pas l’avis d’un professionnel de santé.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              L’IMC peut-il déterminer mon poids idéal&nbsp;?
            </h3>
            <p>
              L’IMC ne définit pas un poids exact à atteindre, mais il donne une
              plage considérée comme « saine » selon votre taille. Par exemple,
              une personne de 1,70 m aura un poids santé situé entre environ 53
              kg et 72 kg.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Peut-on utiliser l’IMC pour les enfants et adolescents&nbsp;?
            </h3>
            <p>
              Chez les enfants et adolescents, l’IMC doit être interprété
              différemment. On utilise des courbes de croissance adaptées à
              l’âge et au sexe, car leur corps est en développement. L’avis d’un
              pédiatre est recommandé.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Quel est le lien entre IMC et risques pour la santé&nbsp;?
            </h3>
            <p>
              Un IMC trop élevé (surpoids ou obésité) est associé à un risque
              accru de maladies cardiovasculaires, diabète de type 2,
              hypertension et certains cancers. À l’inverse, un IMC trop bas
              peut refléter une dénutrition ou une fragilité osseuse.
            </p>
          </div>
        </div>
      </section>
      <Script
        id="schema-calcul-imc"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Calculateur IMC",
            url: "https://fitnessi.top/calculatrice/calcul-pourcentage",
            applicationCategory: "HealthApplication",
            operatingSystem: "All",
            description:
              "Outil gratuit de calcul IMC (Indice de Masse Corporelle) en ligne pour obtenir instantanément votre poids idéal, votre catégorie de corpulence et mieux comprendre votre santé.",
            keywords: [
              "calcul imc",
              "imc calcul",
              "calculateur IMC",
              "outil IMC gratuit",
              "indice de masse corporelle",
              "poids santé",
              "IMC homme",
              "IMC femme",
            ],
          }),
        }}
      />
    </div>
  );
}

export default IMCpage;
