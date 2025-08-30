"use client";
import React, { useMemo, useState } from "react";

export default function IMCcalcul() {
  const [unit, setUnit] = useState("metric");

  // Metric fields
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");

  // Imperial fields
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weightLb, setWeightLb] = useState("");

  const heightMeters = useMemo(() => {
    if (unit === "metric") {
      const cm = parseFloat(heightCm);
      return isFinite(cm) && cm > 0 ? cm / 100 : NaN;
    } else {
      const ft = parseFloat(heightFt) || 0;
      const inch = parseFloat(heightIn) || 0;
      const totalIn = ft * 12 + inch;
      return totalIn > 0 ? totalIn * 0.0254 : NaN; // inches to meters
    }
  }, [unit, heightCm, heightFt, heightIn]);

  const weightKgValue = useMemo(() => {
    if (unit === "metric") {
      const kg = parseFloat(weightKg);
      return isFinite(kg) && kg > 0 ? kg : NaN;
    } else {
      const lb = parseFloat(weightLb);
      return isFinite(lb) && lb > 0 ? lb * 0.45359237 : NaN; // lb to kg
    }
  }, [unit, weightKg, weightLb]);

  const bmi = useMemo(() => {
    if (!isFinite(heightMeters) || !isFinite(weightKgValue)) return NaN;
    const val = weightKgValue / (heightMeters * heightMeters);
    return val;
  }, [heightMeters, weightKgValue]);

  function fmt(n, digits = 1) {
    return isFinite(n) ? n.toFixed(digits) : "—";
  }

  function category(b) {
    if (!isFinite(b)) return "—";
    if (b < 18.5) return "Underweight";
    if (b < 25) return "Healthy";
    if (b < 30) return "Overweight";
    return "Obesity";
  }

  const cat = category(bmi);

  // Healthy BMI range (WHO): 18.5–24.9
  const healthyMinKg = isFinite(heightMeters)
    ? 18.5 * heightMeters * heightMeters
    : NaN;
  const healthyMaxKg = isFinite(heightMeters)
    ? 24.9 * heightMeters * heightMeters
    : NaN;

  const healthyMin =
    unit === "metric"
      ? healthyMinKg
      : isFinite(healthyMinKg)
      ? healthyMinKg / 0.45359237
      : NaN;

  const healthyMax =
    unit === "metric"
      ? healthyMaxKg
      : isFinite(healthyMaxKg)
      ? healthyMaxKg / 0.45359237
      : NaN;

  const weightUnit = unit === "metric" ? "kg" : "lb";

  // Gauge mapping: clamp BMI to 12–40 then map to 0–100%
  const gaugePercent = useMemo(() => {
    if (!isFinite(bmi)) return 0;
    const clamped = Math.min(40, Math.max(12, bmi));
    const pct = ((clamped - 12) / (40 - 12)) * 100;
    return pct;
  }, [bmi]);

  const catStyles = {
    Underweight: "bg-amber-400 text-amber-950",
    Healthy: "bg-emerald-500 text-white",
    Overweight: "bg-orange-500 text-white",
    Obesity: "bg-rose-600 text-white",
    "—": "bg-slate-200 text-slate-700",
  };

  function resetAll() {
    setHeightCm("");
    setWeightKg("");
    setHeightFt("");
    setHeightIn("");
    setWeightLb("");
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <div className="rounded-2xl shadow-2xl bg-white/5 backdrop-blur border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-8 sm:px-10 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              BMI / IMC Calculator
            </h1>
            <p className="mt-2 text-white/80">
              Check your Body Mass Index with metric or imperial units.
            </p>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Inputs */}
            <section className="lg:col-span-3 space-y-6">
              {/* Unit Toggle */}
              <div className="flex items-center gap-2 bg-white/5 rounded-xl p-1 border border-white/10 w-fit">
                <button
                  type="button"
                  onClick={() => setUnit("metric")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    unit === "metric"
                      ? "bg-white text-slate-900"
                      : "text-white/80 hover:text-white"
                  }`}
                  aria-pressed={unit === "metric"}
                >
                  Metric (kg, cm)
                </button>
                <button
                  type="button"
                  onClick={() => setUnit("imperial")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    unit === "imperial"
                      ? "bg-white text-slate-900"
                      : "text-white/80 hover:text-white"
                  }`}
                  aria-pressed={unit === "imperial"}
                >
                  Imperial (lb, ft/in)
                </button>
              </div>

              {unit === "metric" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="heightCm"
                      className="block text-sm mb-2 text-white/80"
                    >
                      Height
                    </label>
                    <div className="relative">
                      <input
                        id="heightCm"
                        inputMode="decimal"
                        type="number"
                        min={0}
                        step="0.1"
                        value={heightCm}
                        onChange={(e) => setHeightCm(e.target.value)}
                        placeholder="e.g., 175"
                        className="w-full rounded-xl border border-white/15 bg-white/10 backdrop-blur px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-4 focus:ring-indigo-500/30 focus:border-white/40"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-white/60">
                        cm
                      </span>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="weightKg"
                      className="block text-sm mb-2 text-white/80"
                    >
                      Weight
                    </label>
                    <div className="relative">
                      <input
                        id="weightKg"
                        inputMode="decimal"
                        type="number"
                        min={0}
                        step="0.1"
                        value={weightKg}
                        onChange={(e) => setWeightKg(e.target.value)}
                        placeholder="e.g., 70"
                        className="w-full rounded-xl border border-white/15 bg-white/10 backdrop-blur px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-4 focus:ring-indigo-500/30 focus:border-white/40"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-white/60">
                        kg
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                  <div className="col-span-1 sm:col-span-2">
                    <label
                      htmlFor="heightFt"
                      className="block text-sm mb-2 text-white/80"
                    >
                      Height (feet)
                    </label>
                    <div className="relative">
                      <input
                        id="heightFt"
                        inputMode="numeric"
                        type="number"
                        min={0}
                        step="1"
                        value={heightFt}
                        onChange={(e) => setHeightFt(e.target.value)}
                        placeholder="e.g., 5"
                        className="w-full rounded-xl border border-white/15 bg-white/10 backdrop-blur px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-4 focus:ring-indigo-500/30 focus:border-white/40"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-white/60">
                        ft
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1 sm:col-span-2">
                    <label
                      htmlFor="heightIn"
                      className="block text-sm mb-2 text-white/80"
                    >
                      Height (inches)
                    </label>
                    <div className="relative">
                      <input
                        id="heightIn"
                        inputMode="decimal"
                        type="number"
                        min={0}
                        step="0.1"
                        value={heightIn}
                        onChange={(e) => setHeightIn(e.target.value)}
                        placeholder="e.g., 8"
                        className="w-full rounded-xl border border-white/15 bg-white/10 backdrop-blur px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-4 focus:ring-indigo-500/30 focus:border-white/40"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-white/60">
                        in
                      </span>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="weightLb"
                      className="block text-sm mb-2 text-white/80"
                    >
                      Weight
                    </label>
                    <div className="relative">
                      <input
                        id="weightLb"
                        inputMode="decimal"
                        type="number"
                        min={0}
                        step="0.1"
                        value={weightLb}
                        onChange={(e) => setWeightLb(e.target.value)}
                        placeholder="e.g., 154"
                        className="w-full rounded-xl border border-white/15 bg-white/10 backdrop-blur px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-4 focus:ring-indigo-500/30 focus:border-white/40"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-white/60">
                        lb
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl bg-white text-slate-900 font-medium shadow hover:shadow-md transition border border-white/20"
                  onClick={() => resetAll()}
                >
                  Reset
                </button>
                <div className="text-sm text-white/60 self-center">
                  Results update automatically as you type.
                </div>
              </div>

              {/* Tips */}
              <p className="text-sm text-white/70 leading-relaxed">
                BMI (IMC) is a general screening tool. It doesn’t directly
                measure body fat and may be less accurate for athletes,
                children, pregnant people, or those with high muscle mass.
              </p>
            </section>

            {/* Results */}
            <aside className="lg:col-span-2">
              <div className="rounded-2xl bg-white/10 border border-white/15 p-5 sm:p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Your Results</h2>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${catStyles[cat]}`}
                  >
                    {cat}
                  </span>
                </div>

                <div>
                  <div className="text-5xl font-extrabold tracking-tight">
                    {fmt(bmi, 1)}
                  </div>
                  <div className="text-sm text-white/60 mt-1">BMI</div>
                </div>

                {/* Gauge */}
                <div>
                  <div className="flex justify-between text-[11px] text-white/60 mb-2">
                    <span>12</span>
                    <span>18.5</span>
                    <span>25</span>
                    <span>30</span>
                    <span>40</span>
                  </div>
                  <div className="relative h-3 rounded-full bg-gradient-to-r from-amber-400 via-emerald-500 via-50% to-rose-600">
                    <div
                      className="absolute -top-1.5 h-6 w-6 rounded-full bg-white shadow border border-white/40 transition-[left] duration-300"
                      style={{ left: `calc(${gaugePercent}% - 12px)` }}
                      aria-hidden
                    />
                  </div>
                </div>

                {/* Healthy weight range */}
                <div className="rounded-xl bg-black/20 border border-white/10 p-4">
                  <div className="text-sm text-white/70">
                    Healthy weight range for your height
                  </div>
                  <div className="text-lg font-semibold mt-1">
                    {fmt(healthyMin, 1)} – {fmt(healthyMax, 1)} {weightUnit}
                  </div>
                </div>

                {/* Helpful note */}
                <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
                  <li>Underweight: &lt; 18.5</li>
                  <li>Healthy: 18.5 – 24.9</li>
                  <li>Overweight: 25 – 29.9</li>
                  <li>Obesity: ≥ 30</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
