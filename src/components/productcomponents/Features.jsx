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
      description: "All material facts (age, occupation, health condition) must be disclosed accurately. Alwafa Takaful reserves the right to reject claims due to non-disclosure of relevant information.",
    },
    {
      image: disc1,
      title: "Assignment of Certificate",
      description: "Since the Individual Takaful Certificate is issued under the Scheme, where the Master Certificate Holder is the owner, assignments of Individual Takaful Policies are not allowed under the Master Certificate.",
    },
    {
      image: disc1,
      title: "Profit Sharing",
      description: "Any profit arising from the Group Family Takaful Fund (GFTF) will be shared with participants, with Alwafa Takaful deducting up to 20% for profit sharing. The remaining balance will be paid to participants.",
    },
    {
      image: Receipt,
      title: "Receipts",
      description: "It is important for you to receive receipts and keep them as proof of payment of Takaful Contributions.",
    },
    {
      image: Period,
      title: "Cooling-Off Period",
      description: "Members have a 7-day cooling-off period after receiving their certificates to cancel and receive a refund, minus any medical expenses incurred by the company.",
    },
    {
      image: Process,
      title: "Claims Settlement Process",
      description: "Alwafa Takaful will respond promptly, provide a settlement offer, and issue a settlement cheque within a reasonable time once the executed discharge voucher has been received.",
    },
    {
      image: Claim,
      title: "Claims Notification",
      description: "You are required to notify Alwafa Takaful of any claim or any event that may lead to a claim and such claim must be substantiated.",
    },
  ];

  return (
    <div className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center px-20 ">
        <p className="text-sm text-[#684B06] mb-2">Coverage & Benefits</p>
        <h2 className="text-3xl font-bold mb-4 text-[#212121] ">Important Terms & Conditions</h2>
        <p className="text-[#212121] mb-6">
        Understand the key obligations and responsibilities that come with the Alwafa Group Family Takaful Plan. Ensure full compliance with disclosure requirements and familiarize yourself with the plan’s coverage limits, profit-sharing details, and cooling-off period to make the most of your Takaful protection.              </p>
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
