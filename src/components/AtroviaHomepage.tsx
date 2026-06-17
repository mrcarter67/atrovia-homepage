"use client";
import { useState, useEffect } from "react";

const C = {
  bg: "#060C18",
  deep: "#0D1B2E",
  card: "#0F2033",
  cardAlt: "#122640",
  border: "#1A3050",
  azure: "#1D6FD4",
  azureDim: "#13427F",
  verdigris: "#0AAF7A",
  verdDim: "#076B4B",
  amber: "#D97B2E",
  text: "#E8EDF5",
  sub: "#8AA0BC",
  ghost: "#4A6080",
};

const NAV_PRODUCTS = [
  { name: "Atrium", tag: "Marketing", color: C.azure, desc: "8 AI specialists running your marketing", href: "#atrium" },
  { name: "Kova", tag: "CRM + ERP", color: C.verdigris, desc: "The operations platform that replaces 5 tools", href: "#kova" },
];

const ATRIUM_AGENTS = [
  { name: "Maven", role: "Strategist", color: "#1D6FD4" },
  { name: "Iris", role: "Brand Voice", color: "#7C3AED" },
  { name: "Dash", role: "Analytics", color: "#0891B2" },
  { name: "Echo", role: "Outreach", color: "#0AAF7A" },
  { name: "Poppy", role: "Content", color: "#D946EF" },
  { name: "Sage", role: "Local SEO", color: "#16A34A" },
  { name: "Stella", role: "Reputation", color: "#EA580C" },
  { name: "Atlas", role: "Intelligence", color: "#D97B2E" },
];

const KOVA_MODULES = [
  { label: "CRM", items: ["Contacts & Pipeline", "Quote Builder", "Invoice Automation"] },
  { label: "ERP", items: ["Job Costing", "Cash Flow AI", "Multi-Entity P&L"] },
  { label: "Real Estate", items: ["Skip Trace", "MAO Calculator", "Buyer Marketplace"] },
];

const COST_COMPARISON = [
  { tool: "HubSpot Marketing Hub Pro", category: "Marketing automation", theirPrice: 890, atroviaEquiv: "Atrium — full AI marketing team", atroviaPrice: 99 },
  { tool: "Salesforce Sales Cloud", category: "CRM (per user)", theirPrice: 165, atroviaEquiv: "Kova — CRM included free with platform", atroviaPrice: 99 },
  { tool: "NetSuite ERP", category: "Full ERP", theirPrice: 2500, atroviaEquiv: "Kova CRM + ERP bundle (Scale tier)", atroviaPrice: 750 },
  { tool: "Combined stack", category: "What most businesses run", theirPrice: 3555, atroviaEquiv: "Atrium + Kova, one login, AI native", atroviaPrice: 198 },
];

const TESTIMONIAL_STATS = [
  { num: "8", label: "AI specialists included", sub: "Not a chatbot — a team" },
  { num: "12", label: "industries supported", sub: "Built for your vertical" },
  { num: "$0", label: "implementation fee", sub: "Live the day you sign up" },
  { num: "94%", label: "cost reduction vs HubSpot+Salesforce", sub: "Same outcomes, less spend" },
];

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return scrolled;
}

function NavBar() {
  const scrolled = useScrolled();
  const [openProducts, setOpenProducts] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? `${C.bg}F2` : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "none",
      padding: "16px 48px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      transition: "all 0.3s ease",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
          <div style={{ width: 30, height: 30, borderRadius: 7, background: `linear-gradient(135deg, ${C.azure}, ${C.verdigris})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#fff" }} />
          </div>
          <span style={{ fontFamily: "Syne, system-ui", fontSize: 19, fontWeight: 800, color: C.text }}>atrovia</span>
        </div>

        <div style={{ display: "flex", gap: 28, alignItems: "center" }}
          onMouseEnter={() => setOpenProducts(true)}
          onMouseLeave={() => setOpenProducts(false)}>
          <div style={{ position: "relative", padding: "8px 0" }}>
            <span style={{ fontSize: 14, color: C.sub, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
              Products <span style={{ fontSize: 9, opacity: 0.6 }}>▾</span>
            </span>
            {openProducts && (
              <div style={{
                position: "absolute", top: "100%", left: -10, marginTop: 8,
                background: C.card, border: `1px solid ${C.border}`, borderRadius: 12,
                padding: 8, width: 280, boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}>
                {NAV_PRODUCTS.map(p => (
                  <a key={p.name} href={p.href} style={{ display: "flex", gap: 12, padding: "10px 12px", borderRadius: 8, textDecoration: "none", alignItems: "flex-start" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color, marginTop: 5, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{p.name} <span style={{ fontSize: 10, color: p.color, fontWeight: 600 }}>· {p.tag}</span></div>
                      <div style={{ fontSize: 11, color: C.ghost, marginTop: 1 }}>{p.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
          {["Pricing", "Industries", "Why Atrovia"].map(l => (
            <span key={l} style={{ fontSize: 14, color: C.sub, cursor: "pointer" }}>{l}</span>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontSize: 14, color: C.sub, cursor: "pointer" }}>Log in</span>
        <a href="/beta" style={{
          background: `linear-gradient(135deg, ${C.azure}, #0A5EC0)`,
          border: "none", borderRadius: 8, padding: "10px 20px",
          color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none",
        }}>Start Free — $99/mo</a>
      </div>
    </nav>
  );
}

function AgentStrip() {
  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
      {ATRIUM_AGENTS.map((a, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: 7,
          background: `${a.color}14`, border: `1px solid ${a.color}33`,
          borderRadius: 99, padding: "6px 14px 6px 8px",
        }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: a.color }} />
          <span style={{ fontSize: 12, color: C.text, fontWeight: 600 }}>{a.name}</span>
          <span style={{ fontSize: 10, color: C.ghost }}>{a.role}</span>
        </div>
      ))}
    </div>
  );
}

export default function AtroviaHomepage() {
  const [betaCount] = useState(847);

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Inter', system-ui, sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 2px; }
        .hov:hover { transform: translateY(-3px); transition: transform 0.25s ease; }
      `}</style>

      <NavBar />

      {/* ════════════ HERO ════════════ */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "140px 48px 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "8%", left: "0%", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${C.azure}1a 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "0%", right: "0%", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${C.verdigris}14 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(${C.border}77 1px, transparent 1px)`, backgroundSize: "44px 44px", opacity: 0.35, pointerEvents: "none" }} />

        <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${C.amber}16`, border: `1px solid ${C.amber}44`, borderRadius: 99, padding: "6px 16px", marginBottom: 32 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.amber }} />
            <span style={{ fontSize: 12, color: C.amber, fontWeight: 700, letterSpacing: "0.06em" }}>
              BETA OPEN — {betaCount.toLocaleString()} / 3,000 AT $99/MO
            </span>
          </div>

          <h1 style={{ fontFamily: "Syne, system-ui", fontSize: 64, fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 28 }}>
            The CRM small businesses<br />deserve.{" "}
            <span style={{ background: `linear-gradient(120deg, ${C.azure}, ${C.verdigris})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              The marketing team<br />enterprises pay for.
            </span>
          </h1>

          <p style={{ fontSize: 19, color: C.sub, lineHeight: 1.7, maxWidth: 640, margin: "0 auto 40px" }}>
            Atrovia gives any business the operations platform and AI marketing department that mid-to-large companies pay tens of thousands for — at a fraction of the cost.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
            <a href="#atrium" style={{
              display: "flex", alignItems: "center", gap: 8,
              background: `linear-gradient(135deg, ${C.azure}, #0A5EC0)`,
              borderRadius: 10, padding: "15px 28px", color: "#fff",
              fontSize: 15, fontWeight: 700, textDecoration: "none",
            }}>Explore Atrium →</a>
            <a href="#kova" style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "transparent", border: `1px solid ${C.verdigris}66`,
              borderRadius: 10, padding: "15px 28px", color: C.verdigris,
              fontSize: 15, fontWeight: 700, textDecoration: "none",
            }}>Explore Kova →</a>
          </div>

          <div style={{ fontSize: 11, color: C.ghost, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>
            Eight specialists. One subscription.
          </div>
          <AgentStrip />
        </div>
      </section>

      {/* ════════════ STATS BAR ════════════ */}
      <section style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: C.deep, padding: "44px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {TESTIMONIAL_STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Syne, system-ui", fontSize: 38, fontWeight: 800, color: i === 3 ? C.verdigris : C.text }}>{s.num}</div>
              <div style={{ fontSize: 13, color: C.text, fontWeight: 600, marginTop: 4 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: C.ghost, marginTop: 2 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ ATRIUM PRODUCT SECTION ════════════ */}
      <section id="atrium" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 70, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, color: C.azure, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>ATRIUM · MARKETING</div>
            <h2 style={{ fontFamily: "Syne, system-ui", fontSize: 42, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 22, lineHeight: 1.1 }}>
              An agency&apos;s worth of<br />specialists. For $99.
            </h2>
            <p style={{ fontSize: 16, color: C.sub, lineHeight: 1.75, marginBottom: 28 }}>
              Most small businesses can&apos;t afford a marketing department. Atrium gives you eight — strategist, brand voice, analyst, outreach, content, SEO, reputation, and intelligence — working continuously, remembering every interaction, and getting sharper the longer you use them.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {[
                "Brand voice trained on your actual business, not a template",
                "Local SEO and review management that runs without you",
                "Weekly intelligence briefing written specifically for your numbers",
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: C.azure, fontSize: 15, marginTop: 1 }}>✦</span>
                  <span style={{ fontSize: 14, color: C.sub }}>{t}</span>
                </div>
              ))}
            </div>
            <a href="/beta" style={{ color: C.azure, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>See Atrium in action →</a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {ATRIUM_AGENTS.map((a, i) => (
              <div key={i} className="hov" style={{
                background: C.card, border: `1px solid ${a.color}33`, borderRadius: 14,
                padding: 20,
              }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: `${a.color}22`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: a.color }} />
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{a.name}</div>
                <div style={{ fontSize: 11, color: a.color, fontWeight: 600, marginTop: 2 }}>{a.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ KOVA PRODUCT SECTION ════════════ */}
      <section id="kova" style={{ background: C.deep, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 70, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, order: 1 }}>
            {KOVA_MODULES.map((m, i) => (
              <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 3, background: C.verdigris }} />
                <div style={{ fontFamily: "Syne, system-ui", fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 12 }}>{m.label}</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {m.items.map((it, j) => (
                    <span key={j} style={{ fontSize: 12, color: C.sub, background: C.cardAlt, border: `1px solid ${C.border}`, borderRadius: 99, padding: "5px 12px" }}>{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ order: 2 }}>
            <div style={{ fontSize: 11, color: C.verdigris, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>KOVA · CRM + ERP</div>
            <h2 style={{ fontFamily: "Syne, system-ui", fontSize: 42, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 22, lineHeight: 1.1 }}>
              Run the whole business.<br />Not five different logins.
            </h2>
            <p style={{ fontSize: 16, color: C.sub, lineHeight: 1.75, marginBottom: 28 }}>
              Kova replaces your CRM, your quoting software, your invoicing tool, and — when you&apos;re ready — your accounting system. One database. One source of truth. Built specifically for the way small and growing businesses actually operate.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {[
                "Quote to signature to invoice, fully automated end to end",
                "Real Estate vertical with skip tracing and AI comps built in",
                "ERP module launches 30 days after your account activates",
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: C.verdigris, fontSize: 15, marginTop: 1 }}>✦</span>
                  <span style={{ fontSize: 14, color: C.sub }}>{t}</span>
                </div>
              ))}
            </div>
            <a href="/beta" style={{ color: C.verdigris, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>See Kova in action →</a>
          </div>
        </div>
      </section>

      {/* ════════════ COST COMPARISON ════════════ */}
      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, color: C.amber, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>THE MATH</div>
            <h2 style={{ fontFamily: "Syne, system-ui", fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 18 }}>
              Enterprise results.<br />Small business price.
            </h2>
            <p style={{ fontSize: 16, color: C.sub, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              The tools mid-market and enterprise companies use to run marketing and operations cost thousands a month. Here&apos;s what the same capability costs on Atrovia.
            </p>
          </div>

          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.3fr 1fr 2fr 1fr", padding: "16px 28px", background: C.deep, borderBottom: `1px solid ${C.border}` }}>
              {["Tool", "What It Does", "Their Price", "Atrovia Equivalent", "Our Price"].map(h => (
                <div key={h} style={{ fontSize: 10, color: C.ghost, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</div>
              ))}
            </div>
            {COST_COMPARISON.map((row, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "2fr 1.3fr 1fr 2fr 1fr",
                padding: "20px 28px", alignItems: "center",
                borderBottom: i < COST_COMPARISON.length - 1 ? `1px solid ${C.border}` : "none",
                background: i === COST_COMPARISON.length - 1 ? `${C.amber}0c` : "transparent",
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{row.tool}</div>
                <div style={{ fontSize: 12, color: C.ghost }}>{row.category}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#F87171" }}>${row.theirPrice.toLocaleString()}<span style={{ fontSize: 11, color: C.ghost, fontWeight: 400 }}>/mo</span></div>
                <div style={{ fontSize: 13, color: C.sub }}>{row.atroviaEquiv}</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: C.verdigris }}>${row.atroviaPrice}<span style={{ fontSize: 11, color: C.ghost, fontWeight: 400 }}>/mo</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PRICING PREVIEW ════════════ */}
      <section style={{ background: C.deep, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: C.ghost, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>PRICING</div>
          <h2 style={{ fontFamily: "Syne, system-ui", fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
            $99 a month.<br />Locked forever if you&apos;re early.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, maxWidth: 900, margin: "0 auto" }}>
            {[
              { name: "Atrium", price: 99, color: C.azure, desc: "All 8 marketing agents" },
              { name: "Kova", price: 99, color: C.verdigris, desc: "Full CRM + Real Estate module" },
              { name: "Both", price: 198, color: C.amber, desc: "Complete platform, one bill", popular: true },
            ].map((p, i) => (
              <div key={i} style={{
                background: C.card, border: `1px solid ${p.popular ? p.color : C.border}66`,
                borderRadius: 16, padding: 32, position: "relative",
                transform: p.popular ? "scale(1.04)" : "none",
              }}>
                {p.popular && <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", background: p.color, color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 12px", borderRadius: 99, letterSpacing: "0.05em" }}>BEST VALUE</div>}
                <div style={{ fontFamily: "Syne, system-ui", fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 8 }}>{p.name}</div>
                <div style={{ fontFamily: "Syne, system-ui", fontSize: 38, fontWeight: 800, color: p.color, marginBottom: 8 }}>${p.price}<span style={{ fontSize: 13, color: C.ghost, fontWeight: 400 }}>/mo</span></div>
                <div style={{ fontSize: 13, color: C.sub }}>{p.desc}</div>
              </div>
            ))}
          </div>

          <a href="/beta" style={{
            display: "inline-block", marginTop: 44,
            background: `linear-gradient(135deg, ${C.azure}, #0A5EC0)`,
            borderRadius: 10, padding: "16px 36px",
            color: "#fff", fontSize: 15, fontWeight: 700, textDecoration: "none",
          }}>See Full Pricing &amp; Join Beta →</a>
        </div>
      </section>

      {/* ════════════ FINAL CTA ════════════ */}
      <section style={{ padding: "130px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 400, borderRadius: "50%", background: `radial-gradient(ellipse, ${C.azure}14 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Syne, system-ui", fontSize: 52, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 22, lineHeight: 1.08 }}>
            Stop paying enterprise<br />
            <span style={{ background: `linear-gradient(120deg, ${C.azure}, ${C.verdigris})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              prices for small business tools.
            </span>
          </h2>
          <p style={{ fontSize: 17, color: C.sub, marginBottom: 36, lineHeight: 1.7 }}>
            Join the {betaCount.toLocaleString()} businesses already inside the beta. $99/month, locked forever, full platform from day one.
          </p>
          <a href="/beta" style={{
            display: "inline-block",
            background: `linear-gradient(135deg, ${C.azure}, #0A5EC0)`,
            borderRadius: 12, padding: "18px 40px",
            color: "#fff", fontSize: 16, fontWeight: 700, textDecoration: "none",
          }}>Claim Your Spot →</a>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer style={{ background: C.deep, borderTop: `1px solid ${C.border}`, padding: "60px 48px 40px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, marginBottom: 50 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 30, height: 30, borderRadius: 7, background: `linear-gradient(135deg, ${C.azure}, ${C.verdigris})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#fff" }} />
                </div>
                <span style={{ fontFamily: "Syne, system-ui", fontSize: 19, fontWeight: 800, color: C.text }}>atrovia</span>
              </div>
              <p style={{ fontSize: 13, color: C.ghost, lineHeight: 1.7, maxWidth: 280 }}>
                The CRM small businesses deserve. The marketing team enterprises pay for. One platform, fraction of the cost.
              </p>
            </div>
            {[
              { title: "Products", links: ["Atrium", "Kova", "Real Estate Module", "Pricing"] },
              { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
              { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Security"] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize: 11, color: C.text, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>{col.title}</div>
                {col.links.map(l => <div key={l} style={{ fontSize: 13, color: C.ghost, marginBottom: 10 }}>{l}</div>)}
              </div>
            ))}
          </div>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
            <span style={{ fontSize: 12, color: C.ghost }}>© 2026 Atrovia LLC. All rights reserved.</span>
            <span style={{ fontSize: 12, color: C.ghost }}>San Jose, CA · atrovia.co</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
