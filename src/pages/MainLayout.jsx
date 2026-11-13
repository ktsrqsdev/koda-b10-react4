import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-stone-50 text-stone-800">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-12">
                <Outlet />
            </main>
            <footer className="border-t border-stone-200 py-6 text-center text-sm text-stone-500">
                © 2026 My Web App
            </footer>
        </div>
    );
}
