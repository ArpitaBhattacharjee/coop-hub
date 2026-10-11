import Link from "next/link";

export default function Home() {
  return (
    <main id="main">
      <h1>Welcome to Community Co-op Hub</h1>
      <p>
        A neighbourhood co-op where everyone has a say. Join our events and
        volunteer with us.
      </p>
      <p>
        <Link href="/events" className="button">See events</Link>{" "}
        <Link href="/volunteer" className="button">Volunteer</Link>
      </p>
    </main>
  );
}