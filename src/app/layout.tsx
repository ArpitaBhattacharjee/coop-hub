import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Community Co-op Hub",
  description: "Events and volunteer sign-up for our neighbourhood co-op.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <header>
          <nav aria-label="Main">
            <Link href="/" className="brand">Co-op Hub</Link>
            <Link href="/events">Events</Link>
            <Link href="/volunteer">Volunteer</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
        <footer>
          <p>© 2026 Community Co-op Hub</p>
        </footer>
      </body>
    </html>
  );
}