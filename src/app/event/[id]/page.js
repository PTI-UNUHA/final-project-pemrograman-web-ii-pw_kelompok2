"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const events = [
  {
    id: "1",
    title: "Seminar Nasional Teknologi",
    date: "25 Januari 2025",
    time: "09.00 – 12.00 WIB",
    location: "Aula Kampus",
    description:
      "Seminar nasional yang membahas perkembangan teknologi terbaru di bidang software, AI, dan industri digital."
  },
  {
    id: "2",
    title: "Workshop UI/UX Design",
    date: "2 Februari 2025",
    time: "13.00 – 16.00 WIB",
    location: "Lab Multimedia",
    description:
      "Workshop praktis mengenai dasar-dasar UI/UX Design menggunakan tools desain modern."
  },
  {
    id: "3",
    title: "Lomba Inovasi Mahasiswa",
    date: "10 Februari 2025",
    time: "08.00 – Selesai",
    location: "Gedung Serbaguna",
    description:
      "Kompetisi inovasi untuk mahasiswa dalam mengembangkan ide kreatif dan solutif."
  }
];

export default function EventDetailPage() {
  const params = useParams();
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Event tidak ditemukan</h1>
        <Link href="/event" className="text-green-600 hover:underline">
          Kembali ke Daftar Event
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-green-600 mb-4">{event.title}</h1>

        <div className="text-gray-600 space-y-2 mb-6">
          <p>📅 <strong>Tanggal:</strong> {event.date}</p>
          <p>⏰ <strong>Waktu:</strong> {event.time}</p>
          <p>📍 <strong>Lokasi:</strong> {event.location}</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">{event.description}</p>

        <Link
          href="/event"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Kembali ke Daftar Event
        </Link>
      </div>
    </main>
  );
}
