'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Erreur lors de l\'envoi');
      }

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  const inputClasses =
    'w-full p-[14px_20px] font-lato text-[16px] text-white bg-black/40 border-2 border-white/10 rounded-[12px] outline-none transition-all duration-300 focus:border-aqua focus:bg-aqua/5 placeholder-gray-500';

  return (
    <form className="bg-[#0a0a0a]/80 border-2 border-white/5 rounded-[32px] backdrop-blur-xl w-full" style={{ padding: 'clamp(15px, 2vw, 25px)' }} onSubmit={handleSubmit}>
      <div className="mb-8">
        <label htmlFor="contact-name" className="block font-lato text-[13px] text-cyan-200 uppercase tracking-[2px] mb-3">
          Nom
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="Votre nom"
          value={form.name}
          onChange={handleChange}
          required
          className={`${inputClasses} h-[60px]`}
        />
      </div>

      <div className="mb-8">
        <label htmlFor="contact-email" className="block font-lato text-[13px] text-cyan-200 uppercase tracking-[2px] mb-3">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="votre@email.com"
          value={form.email}
          onChange={handleChange}
          required
          className={`${inputClasses} h-[60px]`}
        />
      </div>

      <div className="mb-8">
        <label htmlFor="contact-subject" className="block font-lato text-[13px] text-cyan-200 uppercase tracking-[2px] mb-3">
          Sujet
        </label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          placeholder="Sujet de votre message"
          value={form.subject}
          onChange={handleChange}
          required
          className={`${inputClasses} h-[60px]`}
        />
      </div>

      <div className="mb-10">
        <label htmlFor="contact-message" className="block font-lato text-[13px] text-cyan-200 uppercase tracking-[2px] mb-3">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={8}
          placeholder="Votre message..."
          value={form.message}
          onChange={handleChange}
          required
          className={`${inputClasses} resize-y min-h-[220px]`}
        />
      </div>

      <button
        type="submit"
        className="w-full p-[16px] flex items-center justify-center min-h-[60px] font-righteous text-[18px] tracking-[2px] text-black bg-aqua border-2 border-aqua rounded-full hover:bg-tomato hover:border-tomato hover:text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? (
          <span className="w-[26px] h-[26px] border-4 border-black/20 border-t-black rounded-full animate-spin" />
        ) : (
          'Envoyer'
        )}
      </button>

      {status === 'success' && (
        <p className="mt-4 p-3 rounded-[10px] font-lato text-sm flex items-center gap-2 text-[#00ffb3] bg-[#00ffb3]/10 border border-[#00ffb3]/20">
          <i className="fa-solid fa-circle-check" /> Message envoyé avec succès !
        </p>
      )}

      {status === 'error' && (
        <p className="mt-4 p-3 rounded-[10px] font-lato text-sm flex items-center gap-2 text-tomato bg-tomato/10 border border-tomato/20">
          <i className="fa-solid fa-circle-xmark" /> {errorMsg || 'Une erreur est survenue.'}
        </p>
      )}
    </form>
  );
}
