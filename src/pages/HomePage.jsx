import { Link } from "react-router";

export default function HomePage() {
    return (
        <section className="py-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Selamat datang di My Web App</h1>
            <p className="mt-4 max-w-xl text-lg text-stone-600">
                Project latihan ReactJS dengan React Router DOM dan Tailwind CSS. Jelajahi halaman About atau kirim
                pesan lewat halaman Contact Us.
            </p>
            <div className="mt-8 flex gap-3">
                <Link
                    to="/about"
                    className="rounded-md bg-indigo-600 px-5 py-2.5 font-medium text-white hover:bg-indigo-700"
                >
                    Tentang kami
                </Link>
                <Link
                    to="/contact"
                    className="rounded-md border border-stone-300 px-5 py-2.5 font-medium hover:bg-stone-100"
                >
                    Kirim pesan
                </Link>
            </div>
        </section>
    );
}
