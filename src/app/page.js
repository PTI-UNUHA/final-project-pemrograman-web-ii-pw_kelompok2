"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-green-600">Event Kampus UNUHA</h1>
        <div className="space-x-6">
          <Link href="#" className="text-gray-700 hover:text-green-600">Home</Link>
          <Link href="/event" className="text-gray-700 hover:text-green-600">Event</Link>
          <Link href="/about" className="text-gray-700 hover:text-green-600">Tentang</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Informasi Event Kampus</h2>
        <p className="max-w-2xl text-lg mb-8">
          Temukan berbagai seminar, lomba, workshop, dan kegiatan kampus lainnya dalam satu platform.
        </p>
        <Link
          href="/event"
          className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100"
        >
          Lihat Event
        </Link>
      </section>

      {/* Highlight Section */}
      <section className="px-8 py-16">
        <h3 className="text-2xl font-bold text-center mb-10">Kenapa Event Kampus?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h4 className="font-semibold text-lg mb-2">Terpusat</h4>
            <p className="text-gray-600">Semua informasi event kampus ada dalam satu aplikasi.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h4 className="font-semibold text-lg mb-2">Up to Date</h4>
            <p className="text-gray-600">Informasi event selalu diperbarui secara real-time.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h4 className="font-semibold text-lg mb-2">Mudah Diakses</h4>
            <p className="text-gray-600">Dapat diakses kapan saja melalui perangkat apa pun.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 border-t">
        <p className="text-gray-600 text-sm">© 2025 Sistem Informasi Event Kampus</p>
      </footer>
    </main>
  );
}
