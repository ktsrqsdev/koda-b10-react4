import { useState } from "react";

const STORAGE_KEY = "contact-messages";
const emptyForm = { name: "", email: "", message: "" };

function loadMessages() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
    } catch {
        return [];
    }
}

export default function ContactForm() {
    const [form, setForm] = useState(emptyForm);
    const [messages, setMessages] = useState(loadMessages);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const newMessage = {
            id: Date.now(),
            ...form,
            sentAt: new Date().toLocaleString("id-ID"),
        };
        const updated = [newMessage, ...messages];
        setMessages(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        setForm(emptyForm);
    };

    return { form, messages, handleChange, handleSubmit };
}
