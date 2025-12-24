"use client";

import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Seminar Nasional Teknologi",
    date: "25 Januari 2025",
    location: "Aula Kampus",
    description: "Seminar membahas perkembangan teknologi terbaru."
  },
  {
    id: 2,
    title: "Workshop UI/UX Design",
    date: "2 Februari 2025",
    location: "Lab Multimedia",
    description: "Workshop desain UI/UX untuk pemula."
  },
  {
    id: 3,
    title: "Lomba Inovasi Mahasiswa",
    date: "10 Februari 2025",
    location: "Gedung Serbaguna",
    description: "Ajang kompetisi ide dan inovasi mahasiswa."
  }
];

export default function EventPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white py-12 text-center">
        <h1 className="text-3xl font-bold">Daftar Event Kampus UNUHA</h1>
        <p className="mt-2">Temukan event menarik yang sedang dan akan berlangsung</p>
      </header>

      {/* Event List */}
      <section className="px-8 py-16 grid md:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-sm text-gray-500 mb-1">📅 {event.date}</p>
            <p className="text-sm text-gray-500 mb-3">📍 {event.location}</p>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <Link
              href={`/event/${event.id}`}
              className="inline-block text-green-600 font-semibold hover:underline"
            >
              Lihat Detail →
            </Link>
          </div>
        ))}
      </section>

      {/* Back Button */}
      <div className="text-center pb-10">
        <Link href="/" className="text-green-600 font-semibold hover:underline">
          ← Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
