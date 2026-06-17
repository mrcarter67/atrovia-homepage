import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atrovia — The CRM small businesses deserve",
  description: "Atrovia gives any business the operations platform and AI marketing department that mid-to-large companies pay tens of thousands for — at a fraction of the cost.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
