"use client";
import { useEffect, useState } from "react";

type EventItem = {
  id: number;
  title: string;
  event_date: string;
  location: string | null;
  description: string | null;
};

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/events")
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else setEvents(d);
      })
      .catch(() => setError("Could not load events"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main id="main">
      <h1>Upcoming events</h1>
      {loading && <p>Loading events...</p>}
      {error && <p role="alert">{error}</p>}
      <ul className="cards">
        {events.map((e) => (
          <li key={e.id} className="card">
            <h2>{e.title}</h2>
            <p>
              <time dateTime={e.event_date}>{e.event_date}</time>
              {e.location ? ` · ${e.location}` : ""}
            </p>
            <p>{e.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}