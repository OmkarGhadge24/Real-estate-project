import Navbar from '../components/Navbar'
import { useState } from 'react';
import { IoCheckmark } from "react-icons/io5";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="px-6 flex flex-col gap-2 bg-[#F9F9F9]">
      <Navbar />
      
      <div className="flex flex-col items-center mt-12 gap-4 mb-16">
        <h1 className="text-5xl font-bold text-[#2C308F]">Get in Touch</h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl">
          Have questions about our properties? We'd love to hear from you. 
          Contact us today and let's find your dream home together.
        </p>
      </div>

      <div className="flex gap-12 px-12 pb-20">
        <div className="w-1/2">
          <h2 className="text-4xl font-bold text-[#2C308F] mb-8">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2C308F] transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2C308F] transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2C308F] transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2C308F] transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#2C308F] text-[#F9F9F9] px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#1f2461] transition-colors duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-1/2 bg-[#EAEAF4] p-12 rounded-3xl flex flex-col justify-center gap-8">
          <h2 className="text-4xl font-bold text-[#2C308F]">Why Choose Us?</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-2xl text-[#2C308F]"><IoCheckmark /></div>
              <div>
                <h3 className="text-xl font-bold text-[#2C308F] mb-2">Expert Team</h3>
                <p className="text-gray-700">Experienced professionals dedicated to finding you the perfect property.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl text-[#2C308F]"><IoCheckmark /></div>
              <div>
                <h3 className="text-xl font-bold text-[#2C308F] mb-2">Quick Response</h3>
                <p className="text-gray-700">We respond to inquiries promptly to keep your property search moving.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl text-[#2C308F]"><IoCheckmark /></div>
              <div>
                <h3 className="text-xl font-bold text-[#2C308F] mb-2">Best Prices</h3>
                <p className="text-gray-700">Access to exclusive deals and competitive pricing on all properties.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl text-[#2C308F]"><IoCheckmark /></div>
              <div>
                <h3 className="text-xl font-bold text-[#2C308F] mb-2">24/7 Support</h3>
                <p className="text-gray-700">Always available to answer your questions and provide assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage