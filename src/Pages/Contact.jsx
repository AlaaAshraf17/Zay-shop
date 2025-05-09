import React from "react";
const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-32">
      <h2 className="text-2xl font-semibold text-green-400 mb-4">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-700">Your Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button className="w-full bg-green-400 text-white py-2 rounded-md hover:bg-green-500">
          Send
        </button>
      </form>
    </div>
  );
};
export default ContactUs;