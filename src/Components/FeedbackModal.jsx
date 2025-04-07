import React, { useState } from "react";

const FeedbackModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    from: "",
    batch: "",
    review: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50">
      <div
        className="bg-white p-6 rounded-lg shadow-2xl w-[90%] max-w-md relative transform transition-all scale-95 hover:scale-100"
        style={{
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          border: "3px solid transparent",
          background: "linear-gradient(white, white) padding-box, linear-gradient(45deg, #421042, #313168) border-box",
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 text-xl hover:text-red-500 transition-transform transform hover:scale-125"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Form / Success Message */}
        {!submitted ? (
          <>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center drop-shadow-lg">
               Submit Your Review 
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-inner"
                required
              />
              <input
                type="text"
                name="from"
                placeholder="From (City/Country)"
                value={formData.from}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-inner"
                required
              />
              <input
                type="text"
                name="batch"
                placeholder="Batch (Year)"
                value={formData.batch}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-inner"
                required
              />
              <textarea
                name="review"
                placeholder="Your Review"
                value={formData.review}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 h-24 resize-none shadow-inner"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-900 text-white py-3 rounded-lg hover:shadow-xl hover:scale-105 transition-transform"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <p className="text-green-600 font-semibold text-center text-xl drop-shadow-lg">✅ Review Sent Successfully!</p>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;
