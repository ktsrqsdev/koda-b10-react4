import { Link } from "react-router";

export default function AboutPage() {
    return (
        <section>
            <h1 className="text-3xl font-bold">About</h1>
            <p className="mt-4 max-w-2xl text-stone-600">
                Aplikasi ini dibuat sebagai minitask ReactJS di Koda Tech Academy. Tujuannya latihan routing antar
                halaman, styling dengan Tailwind CSS, dan menyimpan data di local storage.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {["React Router DOM", "Tailwind CSS", "Local Storage"].map(item => (
                    <li key={item} className="rounded-lg border border-stone-200 bg-white p-4 font-medium">
                        {item}
                    </li>
                ))}
            </ul>
            <Link to="/contact" className="mt-8 inline-block font-medium text-indigo-700 hover:underline">
                Hubungi kami
            </Link>
        </section>
    );
}
