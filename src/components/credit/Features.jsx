import React from "react";
import disc1 from "../../assets/disc1.png";
import Receipt from "../../assets/Receipt.png"; 
import Period from "../../assets/period.png";
import Claim from "../../assets/claim.png";
import Process from "../../assets/Process.png";

const Features = () => {
  const features = [
    {
      image: Period,
      title: "Disclosure",
      description: "You must accurately disclose all material facts, including your age, occupation, and health condition. Failure to do so may result in the Takaful Operator denying claims that rely on this information.",
    },
    {
      image: disc1,
      title: "Assignment of Certificate",
      description: "As the Individual Certificate is issued, no assignments of Certificate shall be allowed.",
    },
    {
      image: disc1,
      title: "Profit Sharing",
      description: "Any investment profit from the Participant Risk Fund (PRF) will be shared with participants after deducting 20% for Alwafa Takaful. The company may reduce this percentage at its discretion.",
    },
    {
      image: Receipt,
      title: "Receipts",
      description: "It is important for you to receive receipts and keep them as proof of payment of Takaful Instalments",
    },
    {
      image: Period,
      title: "Cooling-Off Period",
      description: "Members have a 7-day cooling-off period after receiving their certificates to cancel and receive a refund, minus any medical expenses incurred by the company.",
    },
    {
      image: Process,
      title: "Claims Settlement Process",
      description: "Alwafa Takaful shall respond promptly, issue a settlement offer and issue a settlement cheque within a reasonable time upon receipt of executed discharge",
    },
    {
      image: Claim,
      title: "Claims Notification",
      description: "You are required to notify Alwafa Takaful of any claim or any event that maylead to a claim and such claim must be substantiated.",
    },
  ];

  return (
    <div className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center px-20 ">
        <p className="text-sm text-[#684B06] mb-2">Coverage & Benefits</p>
        <h2 className="text-3xl font-bold mb-4 text-[#212121] ">Important Terms & Conditions</h2>
        <p className="text-[#212121] mb-6">
        Understanding the key terms and conditions of the Alwafa Credit Plan is essential for your protection and peace of mind. Here are the crucial points to consider.        </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border-[1px] border-black p-6 rounded-lg shadow">
              <img
                src={feature.image}
                alt={feature.title}
                className="mb-4 w-12 h-16 object-contain"
              />
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
          <div className="bg-[#501720] font-Matter text-white p-6 rounded-lg shadow">
            <h1 className="font-[600] text-[40px] ">Ready to Get Started?</h1>
            <button className="bg-white rounded-full text-[#501720] p-[8px_15px] ">GENERATE A QUOTE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
