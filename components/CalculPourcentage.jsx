"use client";
import { useState, useEffect } from "react";

export default function PercentageCalculatorSEO() {
  const [calcType, setCalcType] = useState("percentOfValue");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState("");

  // Calcul en temps réel
  useEffect(() => {
    if (!value1 || (calcType !== "percentOfValue" && !value2)) {
      setResult("");
      return;
    }

    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    let res;
    switch (calcType) {
      case "percentOfValue":
        res = (num1 * num2) / 100;
        setResult(`${num2}% de ${num1} = ${res}`);
        break;
      case "whatPercent":
        res = (num1 / num2) * 100;
        setResult(`${num1} représente ${res.toFixed(2)}% de ${num2}`);
        break;
      case "percentChange":
        res = ((num2 - num1) / num1) * 100;
        const type = res >= 0 ? "augmentation" : "diminution";
        setResult(
          `Le changement de ${num1} à ${num2} est de ${Math.abs(
            res.toFixed(2)
          )}% (${type})`
        );
        break;
      default:
        setResult("");
    }
  }, [value1, value2, calcType]);

  const resetFields = () => {
    setValue1("");
    setValue2("");
    setResult("");
  };

  return (
    <main className="flex items-center justify-center flex-col p-4">
      <article className=" rounded-xl border border-slate-200 p-8 lg:w-[70%]  w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Calculateur de pourcentage avancé
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Calculez des pourcentages rapidement et avec précision en ligne.
          Choisissez un type de calcul et saisissez vos valeurs.
        </p>

        <section className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Sélectionnez le type de calcul
          </label>
          <select
            value={calcType}
            onChange={(e) => setCalcType(e.target.value)}
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="percentOfValue">X % d’une valeur</option>
            <option value="whatPercent">
              Quel % représente un nombre par rapport à un autre
            </option>
            <option value="percentChange">
              Augmentation/Diminution en pourcentage
            </option>
          </select>
        </section>

        <section className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              {calcType === "percentOfValue"
                ? "Valeur"
                : calcType === "whatPercent"
                ? "Valeur partielle"
                : "Valeur initiale"}
            </label>
            <input
              type="number"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              placeholder="Entrez la première valeur"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {(calcType === "percentOfValue" ||
            calcType === "whatPercent" ||
            calcType === "percentChange") && (
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                {calcType === "percentOfValue"
                  ? "Pourcentage"
                  : calcType === "whatPercent"
                  ? "Valeur totale"
                  : "Nouvelle valeur"}
              </label>
              <input
                type="number"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                placeholder="Entrez la deuxième valeur"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          )}
        </section>

        <section className="flex justify-between gap-4 mt-6">
          <button
            onClick={resetFields}
            className="w-full bg-gray-800 text-gray-100 font-bold py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Réinitialiser
          </button>
        </section>
        {result && (
          <p className="text-center text-xl mt-4 font-semibold text-slate-700">
            Vérifiez le résultat ci-dessous :
          </p>
        )}
      </article>
      {result && (
        <section className="mt-6 w-full lg:w-[70%] py-12 bg-indigo-100 text-black text-4xl p-4 rounded-lg text-center font-bold">
          {result}
        </section>
      )}
    </main>
  );
}
