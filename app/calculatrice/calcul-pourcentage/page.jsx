import PercentageCalculatorSEO from "@/components/CalculPourcentage";
import HeaderWrapper from "@/components/HeaderWrapper";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Calcul Pourcentage en Ligne - Outil Gratuit et Instantané (2025)",
  description:
    "Utilisez notre outil de calcul pourcentage en ligne pour trouver facilement des réductions, des augmentations ou des proportions en quelques secondes.",
  keywords: [
    "calcul pourcentage",
    "calculatrice pourcentage",
    "réduction pourcentage",
    "augmentation pourcentage",
    "outil pourcentage en ligne",
    "proportion pourcentage",
    "pourcentage gratuit",
    "calcul pourcentage rapide",
  ],
  openGraph: {
    title: "Calcul Pourcentage en Ligne",
    description:
      "Outil gratuit pour calculer rapidement des pourcentages : réductions, augmentations et proportions.",
    url: "https://fitnessi.top/calculatrice/calcul-pourcentage",
    type: "website",
    locale: "fr_FR",
  },
};

function CalculPage() {
  return (
    <div>
      <HeaderWrapper />
      <div className="w-full flex items-center justify-center">
        <div className="lg:w-[70%] w-full max-md:mt-16 px-4 text-lg">
          <div className="text-slate-500 mt-4 bg-slate-100 p-2 rounded-lg">
            <p className="text-sm italic max-sm:text-xs">30-août-2025</p>
            <p className="text-sm italic max-sm:text-xs">by GARBA YAKUBU</p>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold my-6">
            Calcul pourcentage en ligne – Outil gratuit et rapide
          </h1>
          <p className="text-slate-600 mb-6">
            Notre outil <strong>calcul pourcentage</strong> vous permet de
            résoudre rapidement tous vos besoins liés aux pourcentages :
            calculer une réduction pendant vos achats, vérifier une augmentation
            de prix, estimer un taux d’intérêt ou encore comprendre une
            proportion dans un exercice scolaire. Simple et intuitif, il est
            utile aussi bien pour les étudiants, les professionnels que pour
            toute personne qui souhaite gagner du temps dans ses calculs
            quotidiens.
          </p>
        </div>
      </div>
      <PercentageCalculatorSEO />
      <div className="flex items-center flex-col justify-center px-4">
        <div className="flex flex-col w-full lg:w-[70%] py-6">
          <h2 className="text-xl font-bold mb-3">Table des matières</h2>
          <ul className="flex flex-col list-disc list-inside">
            <li>
              <a className="text-blue-500" href="#percentage">
                Qu’est-ce qu’un pourcentage ?
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#comment">
                Le calcul pourcentage : comment ça marche ?
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#steps">
                Steps
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#calculer">
                Comment calculer un pourcentage ?
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#formules">
                Formules essentielles du calcul de pourcentage
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#exemples">
                Exemples pratiques de calcul de pourcentage
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#appli">
                Applications courantes du calcul de pourcentage
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#dans">
                Dans la vie quotidienne
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="#faq">
                FAQ sur le calcul de pourcentage
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6 w-full mt-6 lg:w-[70%] text-lg text-slate-700">
          <h2 id="percentage" className="text-2xl font-bold">
            Qu’est-ce qu’un pourcentage ?
          </h2>
          <p>
            Un <strong>pourcentage</strong> est une manière simple et
            universelle d’exprimer une proportion ou une fraction sur une base
            de 100. Le mot vient du latin <em>per centum</em>, qui signifie «
            par cent ». Ainsi, dire qu’une valeur correspond à 40 % revient à
            indiquer qu’elle représente 40 parties sur un total de 100. Cette
            méthode de représentation permet de normaliser les valeurs et de
            faciliter les comparaisons, car tout est ramené à une même échelle.
          </p>

          <p>
            Le pourcentage est particulièrement utile dans la vie quotidienne,
            car il permet de comprendre rapidement la part ou l’importance d’un
            élément par rapport à un tout. Par exemple, si une classe compte 20
            filles et 30 garçons, les filles représentent 40 % de la classe et
            les garçons 60 %. Ce mode de calcul rend l’information claire,
            visuelle et facile à interpréter.
          </p>

          <p>
            On retrouve l’usage du pourcentage dans de nombreux domaines : en
            mathématiques, en économie, en finance, en statistiques ou encore
            dans l’éducation. Il permet de mesurer une évolution (par exemple,
            une hausse de 10 % des prix), d’analyser des données (taux de
            réussite, taux de chômage) ou de communiquer de manière simple sur
            des résultats. C’est un langage universel des nombres qui rend les
            comparaisons plus accessibles.
          </p>

          <p>
            Un <strong>pourcentage (%)</strong> est une manière d’exprimer une
            proportion sur une base de 100. C’est une notion très simple mais
            omniprésente dans notre vie quotidienne. Par exemple, lorsqu’un
            magasin propose une réduction de <strong>-30 %</strong> sur un
            produit, cela signifie que vous payez seulement 70 € au lieu de 100
            €. De la même façon, votre téléphone indique son niveau de batterie
            en pourcentage, ce qui vous permet de savoir qu’il reste 50 %
            d’autonomie, c’est-à-dire la moitié de sa capacité totale.
          </p>

          <p>
            Les pourcentages sont aussi utilisés dans l’éducation et le sport.
            Quand un étudiant réussit <strong>80 %</strong> d’un examen, cela
            signifie qu’il a répondu correctement à 80 questions sur 100. Dans
            le domaine sportif, un joueur de basket peut avoir un taux de
            réussite de 60 % aux tirs, ce qui veut dire qu’il marque 6 fois sur
            10. Ces représentations simples permettent de comparer facilement
            des performances et de suivre des évolutions de manière claire et
            rapide.
          </p>

          <p>
            En économie et en finance, le <strong>calcul pourcentage</strong>
            devient encore plus crucial. On l’utilise pour mesurer la croissance
            d’une entreprise, calculer des <strong>
              intérêts bancaires
            </strong>{" "}
            sur un prêt, analyser les marges bénéficiaires d’un commerce ou
            encore suivre l’inflation. Grâce au pourcentage, il est possible de
            ramener toutes ces données à une base commune et de les comparer
            efficacement. En d’autres termes, comprendre et savoir utiliser les
            pourcentages est indispensable aussi bien pour vos finances
            personnelles que pour prendre des décisions éclairées dans le monde
            professionnel.
          </p>

          <h2 id="comment" className="text-2xl font-bold">
            Le calcul pourcentage : comment ça marche ?
          </h2>

          <p>
            Le <strong>calcul pourcentage</strong> repose sur une règle de base
            : pour trouver un pourcentage, il suffit de multiplier une valeur
            par le pourcentage souhaité, puis de diviser le résultat par 100.
            Par exemple, pour calculer 20 % de 150, on fait : (150 × 20) ÷ 100 =
            30. Ce résultat représente la partie proportionnelle par rapport au
            total. Cette formule simple permet de résoudre rapidement de
            nombreux problèmes du quotidien.
          </p>

          <p>
            Dans la vie courante, on utilise le calcul pourcentage pour
            déterminer une réduction (par exemple : une remise de 30 % sur un
            vêtement), pour ajouter une taxe (TVA à 19,6 % en France), ou encore
            pour mesurer une évolution (augmentation de salaire de 5 %). Chaque
            situation repose sur la même formule de base, ce qui rend l’outil
            extrêmement pratique et polyvalent. Grâce à lui, il devient facile
            de comparer des prix, d’analyser des résultats ou de planifier un
            budget.
          </p>

          <p>
            Le calcul pourcentage peut aussi servir dans des cas plus complexes,
            comme la comparaison entre deux valeurs. Par exemple, si un produit
            passe de 80 € à 100 €, on calcule l’augmentation en pourcentage avec
            la formule : ((100 - 80) ÷ 80) × 100 = 25 %. Cette méthode est très
            utilisée dans les statistiques, la finance et le marketing. Elle
            permet de comprendre rapidement l’importance d’une variation et d’en
            mesurer l’impact réel.
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div id="steps">
              <h2 className="text-xl font-bold mb-3">
                Étape 1 : Choisir le type de pourcentage et saisir vos valeurs
              </h2>
              <p className="text-slate-600 mb-4">
                Pour commencer, sélectionnez le type de calcul que vous
                souhaitez réaliser (par exemple : calculer une réduction,
                trouver un pourcentage d’un nombre, ou estimer une
                augmentation). Ensuite, saisissez simplement vos valeurs dans
                les champs correspondants. L’interface est intuitive, il vous
                suffit de remplir les cases nécessaires pour obtenir un résultat
                précis.
              </p>
              <Image
                src="/calcul1.png"
                alt="Choisir le type de calcul pourcentage et saisir les valeurs"
                width={600}
                height={350}
                className="rounded-xl my-4 w-full lg:w-[70%]"
              />
            </div>

            {/* Step 2 */}
            <div>
              <h2 className="text-xl font-bold mb-3">
                Étape 2 : Vérifier le résultat affiché sous le bouton
                Réinitialiser
              </h2>
              <p className="text-slate-600 mb-4">
                Une fois vos données saisies, le calcul se fait automatiquement.
                Le résultat apparaît instantanément juste en dessous du bouton{" "}
                <strong>Réinitialiser</strong>. Vous obtenez ainsi immédiatement
                le pourcentage exact correspondant à votre situation, sans
                action supplémentaire. Pour effectuer un nouveau calcul, il vous
                suffit d’appuyer sur <strong>Réinitialiser</strong> afin de
                vider les champs et recommencer avec d’autres valeurs.
              </p>

              <Image
                src="/calcul2.png"
                alt="Vérifier le résultat du calcul pourcentage"
                width={600}
                height={350}
                className="rounded-xl my-4 w-full lg:w-[70%]"
              />
            </div>
          </div>

          <div>
            <h2 id="calculer" className="text-2xl font-bold my-3">
              Comment calculer un pourcentage ?
            </h2>

            <p>
              Le <strong>calcul pourcentage</strong> repose sur une formule très
              simple qui permet de trouver quelle part représente une valeur par
              rapport à un total. La formule générale est :
            </p>

            <div className="bg-gray-100 p-4 my-4 rounded-lg text-center font-mono text-lg">
              Pourcentage = (Valeur partielle ÷ Valeur totale) × 100
            </div>

            <p>
              Exemple : vous avez <strong>50 pommes</strong> et vous en mangez
              <strong> 10</strong>. Le calcul est donc :
            </p>

            <div className="bg-gray-50 my-4 p-4 rounded-lg font-mono">
              (10 ÷ 50) × 100 = 20 %
            </div>

            <p>
              Cela signifie que 10 pommes représentent{" "}
              <strong>20 % du total</strong>.
            </p>

            <h3 id="formules" className="text-xl font-semibold my-6">
              Formules essentielles du calcul de pourcentage
            </h3>

            <table className="table-auto border-collapse border mb-4 border-gray-300 w-full text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 p-2">Type de calcul</th>
                  <th className="border border-gray-300 p-2">Formule</th>
                  <th className="border border-gray-300 p-2">Exemple</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Pourcentage d’un nombre
                  </td>
                  <td className="border border-gray-300 p-2">
                    (nombre × %) ÷ 100
                  </td>
                  <td className="border border-gray-300 p-2">200 × 15% = 30</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Pourcentage d’une valeur
                  </td>
                  <td className="border border-gray-300 p-2">
                    (part ÷ total) × 100
                  </td>
                  <td className="border border-gray-300 p-2">
                    (20 ÷ 80) × 100 = 25%
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Augmentation en %
                  </td>
                  <td className="border border-gray-300 p-2">
                    valeur + (valeur × % ÷ 100)
                  </td>
                  <td className="border border-gray-300 p-2">
                    2000 € + 10% = 2200 €
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Réduction en %</td>
                  <td className="border border-gray-300 p-2">
                    valeur − (valeur × % ÷ 100)
                  </td>
                  <td className="border border-gray-300 p-2">
                    150 € − 20% = 120 €
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Taux de variation
                  </td>
                  <td className="border border-gray-300 p-2">
                    ((final − initial) ÷ initial) × 100
                  </td>
                  <td className="border border-gray-300 p-2">
                    (120 − 100) ÷ 100 × 100 = 20%
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 id="exemples" className="text-xl font-semibold">
              Exemples pratiques de calcul de pourcentage
            </h3>

            <p>
              <strong>Exemple 1 : calculer une réduction</strong>
              <br />
              Un produit coûte 150 € avec une remise de 20 %.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg font-mono">
              150 × 20% = 30 ⇒ 150 − 30 = 120 €
            </div>
            <p>
              Le prix final est de <strong>120 €</strong>.
            </p>

            <p>
              <strong>Exemple 2 : augmentation de salaire</strong>
              <br />
              Un salaire de 2 000 € augmente de 5 %.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg font-mono">
              2000 + (2000 × 0,05) = 2100 €
            </div>
            <p>
              Le nouveau salaire est de <strong>2 100 €</strong>.
            </p>

            <p>
              <strong>Exemple 3 : calculer une proportion</strong>
              <br />
              Un élève obtient 45 bonnes réponses sur 60 questions.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg font-mono">
              (45 ÷ 60) × 100 = 75 %
            </div>
            <p>
              Sa note correspond à <strong>75 %</strong>.
            </p>
          </div>

          <div>
            <h2 id="appli" className="font-bold my-6 text-2xl">
              Applications courantes du calcul de pourcentage
            </h2>

            <h3> En commerce et finance</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                Calcul des remises et promotions : savoir exactement combien
                vous économisez pendant les soldes ou avec un code promo.
              </li>
              <li>
                Détermination de la TVA et des impôts : comprendre quelle part
                de vos achats ou de vos revenus est prélevée par l’État.
              </li>
              <li>
                Marge bénéficiaire et taux de rentabilité : mesurer la
                performance d’une entreprise ou d’un projet en pourcentage.
              </li>
              <li>
                Calcul des intérêts bancaires : estimer le coût réel d’un
                emprunt ou le rendement potentiel d’un placement d’épargne.
              </li>
            </ul>

            <h3 id="dans" className="mt-4 text-lg font-semibold">
              Dans la vie quotidienne
            </h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                Recettes de cuisine : ajuster facilement les proportions
                d’ingrédients lorsqu’on double ou réduit une recette.
              </li>
              <li>
                Résultats scolaires et examens : convertir une note brute (ex.
                17/20) en pourcentage pour mieux comparer les performances.
              </li>
              <li>
                Statistiques sportives : analyser les performances d’une équipe
                ou d’un joueur à travers des taux de réussite, de possession ou
                de tirs cadrés.
              </li>
              <li>
                Budgets personnels et économies : suivre vos dépenses, estimer
                vos économies mensuelles ou calculer le pourcentage d’argent
                consacré à chaque poste.
              </li>
            </ul>
            <iframe
              className="w-full my-6"
              height="315"
              src="https://www.youtube.com/embed/_TcFaeFb6sI"
              title="Comment calculer un pourcentage facilement"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2 id="faq" className="font-bold my-6 text-2xl">
              FAQ sur le calcul de pourcentage
            </h2>

            <h3 className="font-bold text-xl mt-4">
              Comment calculer rapidement 20% d’un nombre ?
            </h3>
            <p>
              Il suffit de multiplier le nombre par <code>0,20</code>. Exemple :{" "}
              <code>80 × 0,20 = 16</code>.
            </p>

            <h3 className="font-bold text-xl mt-4">
              Comment calculer une réduction en pourcentage ?
            </h3>
            <p>
              Formule : <code>Réduction = (Prix × % de remise) ÷ 100</code>.
              Exemple :{" "}
              <code>250 € avec -30% → 250 − (250 × 0,30) = 175 €</code>.
            </p>

            <h3 className="font-bold text-xl mt-4">
              Comment calculer une augmentation en pourcentage ?
            </h3>
            <p>
              Formule : <code>Augmentation = Valeur + (Valeur × % ÷ 100)</code>.
              Exemple : <code>1000 € + 15% = 1150 €</code>.
            </p>

            <h3 className="font-bold text-xl mt-4">
              Quelle est la différence entre fraction, ratio et pourcentage ?
            </h3>
            <ul>
              <li>Fraction : 1/4</li>
              <li>Ratio : 1:4</li>
              <li>Pourcentage : 25%</li>
            </ul>
            <p>
              Les trois représentent la même idée sous des formes différentes.
            </p>

            <h3 className="font-bold text-xl mt-4">
              Peut-on utiliser Excel pour calculer un pourcentage ?
            </h3>
            <p>Oui . En Excel, utilisez la formule :</p>
            <pre>=part/total*100</pre>
            <p>
              Exemple : <code>=45/60*100</code> donne <strong>75%</strong>.
            </p>

            <h3 className="font-bold text-xl mt-4">
              Comment transformer une note en pourcentage ?
            </h3>
            <p>
              Pour transformer une note en pourcentage, il faut diviser la note
              obtenue par la note maximale puis multiplier par 100. Exemple :
              une note de <code>18/20</code> correspond à{" "}
              <code>(18 ÷ 20) × 100 = 90%</code>.
            </p>

            <h3 className="font-bold text-xl mt-4">
              Comment calculer le pourcentage d’augmentation d’un prix ?
            </h3>
            <p>
              La formule est :{" "}
              <code>((nouveau prix − ancien prix) ÷ ancien prix) × 100</code>.
              Exemple : si un produit passe de <code>50 € à 60 €</code>, alors
              <code>((60 − 50) ÷ 50) × 100 = 20%</code>. Le prix a donc augmenté
              de 20%.
            </p>

            <h3 className="font-bold text-xl mt-4">
              Comment calculer un pourcentage de marge bénéficiaire ?
            </h3>
            <p>
              La marge bénéficiaire est calculée avec la formule :{" "}
              <code>((prix de vente − coût) ÷ prix de vente) × 100</code>.
              Exemple : si un produit est vendu <code>200 €</code> et a coûté{" "}
              <code>120 €</code> à produire, la marge est{" "}
              <code>((200 − 120) ÷ 200) × 100 = 40%</code>.
            </p>

            <h3 className="font-bold text-xl mt-4">
              Comment calculer un pourcentage d’évolution négative (baisse) ?
            </h3>
            <p>
              Pour une baisse, on applique la même formule que pour une
              augmentation :{" "}
              <code>
                ((valeur finale − valeur initiale) ÷ valeur initiale) × 100
              </code>
              . Exemple : si un salaire passe de <code>2000 €</code> à{" "}
              <code>1800 €</code>, le calcul est{" "}
              <code>((1800 − 2000) ÷ 2000) × 100 = -10%</code>. Cela signifie
              une diminution de 10%.
            </p>
          </div>
        </div>
      </div>

      <Script
        id="schema-calcul-pourcentage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Calcul Pourcentage",
            url: "https://fitnessi.top/calculatrice/calcul-pourcentage",
            applicationCategory: "CalculatorApplication",
            operatingSystem: "All",
            description:
              "Outil gratuit de calcul pourcentage en ligne pour obtenir instantanément réductions, augmentations et proportions.",
            keywords: [
              "calcul pourcentage",
              "calculateur pourcentage",
              "outil de calcul en ligne",
            ],
          }),
        }}
      />
    </div>
  );
}

export default CalculPage;
