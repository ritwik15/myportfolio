import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaCheckCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("7gelbx73KoR8D4Ech");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);
    setErrorMessage("");

    // Prepare template parameters with standard variable names
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_message: formData.message,
    };

    emailjs
      .send(
        "service_zo4nn7g",
        "template_k152grf",
        templateParams
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setSuccess(true);
          setError(false);
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
          
          // Clear success message after 5 seconds
          setTimeout(() => setSuccess(false), 5000);
        },
        (err) => {
          console.error("Email send error:", err);
          console.error("Error details:", JSON.stringify(err, null, 2));
          setError(true);
          setSuccess(false);
          setLoading(false);
          setErrorMessage(
            "Failed to send message. Make sure your EmailJS template variables match: user_name, user_email, user_message"
          );
        }
      );
  };

  return (
    <section id="contact" className="w-full py-20 px-4 sm:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg">
            Have questions? I'd love to hear from you. Send me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {[
            { icon: FaEnvelope, label: "Email", value: "ritwik15@gmail.com" },
            { icon: FaPhone, label: "Phone", value: "+91 79787 38964" },
            { icon: FaMapMarkerAlt, label: "Location", value: "Hyderabad, India" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-800/50 border border-purple-500/20 rounded-xl text-center hover:border-purple-500/50 transition"
            >
              <item.icon className="text-3xl text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-300 mb-1">{item.label}</h3>
              <p className="text-gray-400">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative bg-gray-900 rounded-2xl p-10 sm:p-12">
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3 text-green-300"
              >
                <FaCheckCircle className="text-xl flex-shrink-0" />
                <p>Message sent successfully! I'll get back to you soon.</p>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300"
              >
                <p className="font-semibold">Failed to Send</p>
                <p className="text-sm mt-1">{errorMessage}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg hover:shadow-purple-500/50"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          I typically respond within 24 hours. Looking forward to connecting with you!
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
