"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", form);
      alert("Form submitted successfully ✅");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      
      {/* Card */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20 w-full max-w-md text-white">
        
        <h1 className="text-2xl font-semibold text-center mb-4">
          Contact Me
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-2 rounded-lg bg-transparent border border-white/30 focus:outline-none focus:border-white"
          />
          {errors.name && (
            <p className="text-red-400 text-sm">{errors.name}</p>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-2 rounded-lg bg-transparent border border-white/30 focus:outline-none focus:border-white"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="p-2 rounded-lg bg-transparent border border-white/30 focus:outline-none focus:border-white"
          ></textarea>
          {errors.message && (
            <p className="text-red-400 text-sm">{errors.message}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="mt-2 bg-white text-black font-semibold py-2 rounded-full hover:scale-105 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}