import ContactForm from "../components/ContactForm";

const inputClass =
    "mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200";

export default function ContactUsPage() {
    const { form, messages, handleChange, handleSubmit } = ContactForm();

    return (
        <section>
            <h1 className="text-3xl font-bold">Contact Us</h1>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-lg border border-stone-200 bg-white p-6">
                <label className="block text-sm font-medium">
                    Nama
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                    />
                </label>
                <label className="block text-sm font-medium">
                    Email
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                    />
                </label>
                <label className="block text-sm font-medium">
                    Pesan
                    <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        required
                        className={inputClass}
                    />
                </label>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-5 py-2.5 font-medium text-white hover:bg-indigo-700"
                >
                    Kirim pesan
                </button>
            </form>

            <h2 className="mt-10 text-xl font-semibold">Pesan terkirim ({messages.length})</h2>
            {messages.length === 0 ? (
                <p className="mt-3 text-stone-500">Belum ada pesan. Isi form di atas untuk mengirim pesan pertama.</p>
            ) : (
                <ul className="mt-4 space-y-3">
                    {messages.map(m => (
                        <li key={m.id} className="rounded-lg border border-stone-200 bg-white p-4">
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <span className="font-semibold">{m.name}</span>
                                <span className="text-xs text-stone-500">{m.sentAt}</span>
                            </div>
                            <p className="text-sm text-indigo-700">{m.email}</p>
                            <p className="mt-2 whitespace-pre-wrap text-stone-700">{m.message}</p>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
