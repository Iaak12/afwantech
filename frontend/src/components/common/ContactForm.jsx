import { useState } from "react";
import API_BASE_URL from "../../config/api";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        alert("Message Sent Successfully 🚀");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-10">
      <h3 className="text-2xl font-bold text-[#123447] mb-6">
        Send Us a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div className="relative">
          <FaUser className="absolute top-4 left-4 text-gray-400" />
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1d2951] transition"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1d2951] transition"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <FaPhone className="absolute top-4 left-4 text-gray-400" />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1d2951] transition"
          />
        </div>

        {/* Message */}
        <div className="relative">
          <FaCommentDots className="absolute top-4 left-4 text-gray-400" />
          <textarea
            name="message"
            rows="4"
            placeholder="Write Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1d2951] transition resize-none"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full font-semibold py-3 rounded-lg transition duration-300 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500 text-black'}`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

