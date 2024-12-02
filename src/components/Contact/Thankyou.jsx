import React from 'react';

const ThankYouPage = () => {
  return (
    <>
    <div className="h-64 bg-cover bg-center"style={{ backgroundImage: "url('/Image.jpg')" }} >
  </div>

    <div className="bg-[#FFEED0] min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-[#1E1E1E]">Thank You for Contacting Us</h1>
        <p className="text-lg text-gray-700">
          Thank you for reaching out to Alwafa. We have received your message and our team will get back to you as soon as possible. 
          Your inquiries are important to us, and we are committed to providing you with the best support and information regarding 
          our Takaful insurance solutions.
        </p>
        <p className="text-lg text-gray-700">
          If your matter is urgent, feel free to call us directly at <strong>[Phone Number]</strong>. We look forward to assisting you!
        </p>
        <button
          onClick={() => (window.location.href = '/')}
          className="bg-[#501720] text-white px-6 py-2 rounded-lg hover:bg-maroon-dark"
        >
          GO BACK HOME
        </button>
      </div>
    </div>
    </>
  );
};

export default ThankYouPage;