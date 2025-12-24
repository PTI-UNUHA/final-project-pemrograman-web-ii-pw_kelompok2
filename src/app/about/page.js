"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Tentang Aplikasi
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          Sistem Informasi Event Kampus adalah aplikasi berbasis web yang
          dikembangkan untuk membantu mahasiswa memperoleh informasi mengenai
          berbagai kegiatan kampus seperti seminar, workshop, lomba, dan acara
          akademik lainnya secara terpusat.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Aplikasi ini dibuat sebagai bagian dari tugas Final Project mata kuliah
          pengembangan web frontend dengan menggunakan framework Next.js.
          Informasi event ditampilkan secara dinamis sehingga pengguna dapat
          melihat daftar event dan detail setiap event dengan mudah.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Dengan adanya aplikasi ini, diharapkan mahasiswa tidak lagi kesulitan
          dalam mencari informasi event kampus yang sebelumnya tersebar di
          berbagai media.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-3">Teknologi yang Digunakan</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Next.js (App Router)</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
