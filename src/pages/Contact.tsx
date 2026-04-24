import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // simulation envoi
    alert("Message envoyé ✔");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="max-w-xl mx-auto grid gap-6">
      <h1 className="text-2xl font-semibold">Contact</h1>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 border rounded-2xl p-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          className="border rounded-xl px-3 py-2"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border rounded-xl px-3 py-2"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="border rounded-xl px-3 py-2 min-h-[120px]"
          required
        />

        <button
          type="submit"
          className="bg-black text-white rounded-xl py-2 hover:opacity-80"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
