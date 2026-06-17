"use client";
import { useState } from "react";
import Link from "next/link";

const C = {
  bg: "#060C18",
  deep: "#0D1B2E",
  card: "#0F2033",
  cardAlt: "#122640",
  border: "#1A3050",
  azure: "#1D6FD4",
  verdigris: "#0AAF7A",
  amber: "#D97B2E",
  text: "#E8EDF5",
  sub: "#8AA0BC",
  ghost: "#4A6080",
};

const INDUSTRIES = [
  "Real Estate",
  "Construction & Contracting",
  "Healthcare & Medical",
  "Legal & Professional Services",
  "Retail & E-commerce",
  "Restaurants & Food Service",
  "Fitness & Wellness",
  "Marketing & Creative Agency",
  "Technology & SaaS",
  "Manufacturing",
  "Home Services",
  "Finance & Accounting",
  "Education & Tutoring",
  "Other",
];

const TEAM_SIZES = [
  "Just me (solo)",
  "2–5 people",
  "6–15 people",
  "16–50 people",
  "51–200 people",
  "200+ people",
];

const PRODUCTS = [
  { id: "atrium", label: "Atrium", sub: "AI Marketing Team — $99/mo", color: C.azure },
  { id: "kova", label: "Kova", sub: "CRM + ERP — $99/mo", color: C.verdigris },
  { id: "both", label: "Both", sub: "Full Platform — $198/mo", color: C.amber },
];

const PERKS = [
  { icon: "🔒", title: "Price locked forever", desc: "Beta members keep $99/mo pricing even after we raise rates." },
  { icon: "⚡", title: "Live same day", desc: "No implementation call. No onboarding fee. You're in the product the minute you sign up." },
  { icon: "🎯", title: "Founding member access", desc: "Direct line to the product team. Your feedback shapes the roadmap." },
  { icon: "🤝", title: "White-glove setup", desc: "We personally configure your AI agents and CRM for your specific business in week one." },
];

export default function BetaPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    industry: "",
    teamSize: "",
    product: "both",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const betaCount = 847;
  const spotsLeft = 3000 - betaCount;

  function validate() {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.company.trim()) e.company = "Required";
    if (!form.industry) e.industry = "Select your industry";
    if (!form.teamSize) e.teamSize = "Select your team size";
    return e;
  }

  function handleChange(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    background: C.cardAlt,
    border: `1px solid ${errors[field] ? "#F87171" : C.border}`,
    borderRadius: 8,
    padding: "12px 16px",
    color: C.text,
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  });

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Inter', system-ui, sans-serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input::placeholder, select option[value=""] { color: #4A6080; }
        select { appearance: none; }
        input:focus, select:focus, textarea:focus { border-color: #1D6FD4 !important; outline: none; }
      `}</style>

      {/* Nav */}
      <nav style={{ padding: "20px 48px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 30, height: 30, borderRadius: 7, background: `linear-gradient(135deg, ${C.azure}, ${C.verdigris})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#fff" }} />
          </div>
          <span style={{ fontFamily: "Syne, system-ui", fontSize: 19, fontWeight: 800, color: C.text }}>atrovia</span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.amber }} />
          <span style={{ fontSize: 13, color: C.amber, fontWeight: 700 }}>{spotsLeft.toLocaleString()} of 3,000 beta spots remaining</span>
        </div>
      </nav>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* LEFT — pitch */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${C.verdigris}16`, border: `1px solid ${C.verdigris}44`, borderRadius: 99, padding: "6px 16px", marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.verdigris }} />
              <span style={{ fontSize: 12, color: C.verdigris, fontWeight: 700, letterSpacing: "0.06em" }}>BETA — LIMITED ACCESS</span>
            </div>

            <h1 style={{ fontFamily: "Syne, system-ui", fontSize: 46, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 22 }}>
              Be one of the first<br />
              <span style={{ background: `linear-gradient(120deg, ${C.azure}, ${C.verdigris})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                3,000 businesses<br />inside Atrovia.
              </span>
            </h1>

            <p style={{ fontSize: 16, color: C.sub, lineHeight: 1.75, marginBottom: 40 }}>
              Beta members lock in $99/mo for Atrium or Kova — forever. That&apos;s the AI marketing department and the CRM + ERP your business has been priced out of, at a fraction of what you&apos;d pay anywhere else.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
              {PERKS.map((p, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 22, lineHeight: 1, flexShrink: 0 }}>{p.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 2 }}>{p.title}</div>
                    <div style={{ fontSize: 13, color: C.sub, lineHeight: 1.6 }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 11, color: C.ghost, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Beta pricing — locked forever</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {PRODUCTS.map(p => (
                  <div key={p.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 7, height: 7, borderRadius: "50%", background: p.color }} />
                      <span style={{ fontSize: 14, color: C.text, fontWeight: 600 }}>{p.label}</span>
                      <span style={{ fontSize: 11, color: C.ghost }}>{p.sub.split("—")[0].trim()}</span>
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 800, color: p.color }}>{p.sub.split("—")[1].trim()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div>
            {submitted ? (
              <div style={{ background: C.card, border: `1px solid ${C.verdigris}55`, borderRadius: 20, padding: 48, textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>🎉</div>
                <h2 style={{ fontFamily: "Syne, system-ui", fontSize: 28, fontWeight: 800, marginBottom: 14 }}>You&apos;re on the list!</h2>
                <p style={{ fontSize: 15, color: C.sub, lineHeight: 1.7, marginBottom: 28 }}>
                  We&apos;ll send your access details to <strong style={{ color: C.text }}>{form.email}</strong> within 24 hours. Your $99/mo price is locked starting today.
                </p>
                <div style={{ background: `${C.verdigris}12`, border: `1px solid ${C.verdigris}33`, borderRadius: 12, padding: "16px 20px", marginBottom: 28 }}>
                  <div style={{ fontSize: 12, color: C.verdigris, fontWeight: 700, letterSpacing: "0.06em", marginBottom: 6 }}>YOUR SELECTION</div>
                  <div style={{ fontSize: 15, color: C.text, fontWeight: 700 }}>
                    {PRODUCTS.find(p => p.id === form.product)?.label} — {PRODUCTS.find(p => p.id === form.product)?.sub}
                  </div>
                </div>
                <Link href="/" style={{ color: C.azure, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>← Back to homepage</Link>
              </div>
            ) : (
              <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 20, padding: 40 }}>
                <h2 style={{ fontFamily: "Syne, system-ui", fontSize: 22, fontWeight: 800, marginBottom: 6 }}>Claim your spot</h2>
                <p style={{ fontSize: 13, color: C.ghost, marginBottom: 28 }}>Takes 60 seconds. No credit card required to join.</p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>

                  {/* Product selector */}
                  <div>
                    <label style={{ fontSize: 12, color: C.sub, fontWeight: 600, display: "block", marginBottom: 10, letterSpacing: "0.04em" }}>I WANT TO JOIN WITH</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                      {PRODUCTS.map(p => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => handleChange("product", p.id)}
                          style={{
                            background: form.product === p.id ? `${p.color}22` : C.cardAlt,
                            border: `1px solid ${form.product === p.id ? p.color : C.border}`,
                            borderRadius: 10, padding: "12px 8px", cursor: "pointer",
                            textAlign: "center", transition: "all 0.2s",
                          }}>
                          <div style={{ fontSize: 14, fontWeight: 700, color: form.product === p.id ? p.color : C.text }}>{p.label}</div>
                          <div style={{ fontSize: 10, color: C.ghost, marginTop: 2 }}>{p.sub.split("—")[1].trim()}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name row */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={{ fontSize: 12, color: C.sub, fontWeight: 600, display: "block", marginBottom: 6 }}>FIRST NAME</label>
                      <input
                        style={inputStyle("firstName")}
                        placeholder="Michael"
                        value={form.firstName}
                        onChange={e => handleChange("firstName", e.target.value)}
                      />
                      {errors.firstName && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.firstName}</div>}
                    </div>
                    <div>
                      <label style={{ fontSize: 12, color: C.sub, fontWeight: 600, display: "block", marginBottom: 6 }}>LAST NAME</label>
                      <input
                        style={inputStyle("lastName")}
                        placeholder="Carter"
                        value={form.lastName}
                        onChange={e => handleChange("lastName", e.target.value)}
                      />
                      {errors.lastName && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.lastName}</div>}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ fontSize: 12, color: C.sub, fontWeight: 600, display: "block", marginBottom: 6 }}>WORK EMAIL</label>
                    <input
                      type="email"
                      style={inputStyle("email")}
                      placeholder="you@yourcompany.com"
                      value={form.email}
                      onChange={e => handleChange("email", e.target.value)}
                    />
                    {errors.email && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.email}</div>}
                  </div>

                  {/* Company */}
                  <div>
                    <label style={{ fontSize: 12, color: C.sub, fontWeight: 600, display: "block", marginBottom: 6 }}>BUSINESS NAME</label>
                    <input
                      style={inputStyle("company")}
                      placeholder="Acme Inc."
                      value={form.company}
                      onChange={e => handleChange("company", e.target.value)}
                    />
                    {errors.company && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.company}</div>}
                  </div>

                  {/* Industry */}
                  <div>
                    <label style={{ fontSize: 12, color: C.sub, fontWeight: 600, display: "block", marginBottom: 6 }}>INDUSTRY</label>
                    <div style={{ position: "relative" }}>
                      <select
                        style={{ ...inputStyle("industry"), paddingRight: 36 }}
                        value={form.industry}
                        onChange={e => handleChange("industry", e.target.value)}
                      >
                        <option value="">Select your industry…</option>
                        {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                      <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: C.ghost, fontSize: 10, pointerEvents: "none" }}>▾</span>
                    </div>
                    {errors.industry && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.industry}</div>}
                  </div>

                  {/* Team size */}
                  <div>
                    <label style={{ fontSize: 12, color: C.sub, fontWeight: 600, display: "block", marginBottom: 6 }}>TEAM SIZE</label>
                    <div style={{ position: "relative" }}>
                      <select
                        style={{ ...inputStyle("teamSize"), paddingRight: 36 }}
                        value={form.teamSize}
                        onChange={e => handleChange("teamSize", e.target.value)}
                      >
                        <option value="">Select team size…</option>
                        {TEAM_SIZES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: C.ghost, fontSize: 10, pointerEvents: "none" }}>▾</span>
                    </div>
                    {errors.teamSize && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.teamSize}</div>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      background: loading ? "#13427F" : `linear-gradient(135deg, ${C.azure}, #0A5EC0)`,
                      border: "none", borderRadius: 10, padding: "15px",
                      color: "#fff", fontSize: 15, fontWeight: 700,
                      cursor: loading ? "not-allowed" : "pointer",
                      transition: "all 0.2s", marginTop: 4,
                    }}
                  >
                    {loading ? "Reserving your spot…" : "Claim My Beta Spot →"}
                  </button>

                  <p style={{ fontSize: 11, color: C.ghost, textAlign: "center", lineHeight: 1.6 }}>
                    No credit card required. No spam. Unsubscribe anytime.<br />
                    Your $99/mo price is locked the moment you sign up.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
