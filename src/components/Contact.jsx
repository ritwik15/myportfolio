import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_ndticne",     // replace with your EmailJS service ID
      "template_k152grf",    // replace with your EmailJS template ID
      formData,
      "7gelbx73KoR8D4Ech"      // replace with your EmailJS public key
    )
    .then(() => {
      setSuccess(true);
      setError(false);
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      console.error("Email send error:", err);
      setError(true);
      setSuccess(false);
    });
  };

  return (
    <section id="contact" className="w-full py-16 px-4 sm:px-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Let’s connect! Drop me a message.</p>

        {success && <p className="text-green-500 mb-4">Message sent successfully!</p>}
        {error && <p className="text-red-500 mb-4">Failed to send. Please try again later.</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
