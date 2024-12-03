import React, { useState } from 'react';
import Nav from './nav';
import Image from '../assets/covered.jpeg';
import Footer from './Footer';

const Faq = () => {
  const background = Image
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [activeCategory, setActiveCategory] = useState(null); // To track the active sidebar category

  const categories = [
    'General FAQ',
    'Computer Takaful',
    'Family Takaful',
    'Money Takaful',
    'Private Car Takaful',
    'Education Takaful',
    'Travel Takaful',
    'Fidelity Takaful',
    'Marine Takaful',
    'Motor Takaful',
    'Credit Takaful',
  ];

  const faqs = {
    'General FAQ': [
      { question: 'What is Takaful Insurance?', answer: 'Takaful is a Shariah-compliant insurance system...' },
      { question: 'How Do I File a Claim?', answer: 'To file a claim, you need to submit...' },
      { question: 'What Are the Investment Options?', answer: 'Investment options include equity...' },
      { question: 'What Are the Coverage Options for Family Takaful?', answer: 'Family Takaful offers coverage for...' },
      { question: 'Can I Customize My Policy with Additional Riders?', answer: 'Yes, additional riders can be added...' },
    ],
    'Computer Takaful': [
      { question: 'What is Alwafa Computer All Risk?', answer: 'This policy covers comprehensive...' },
      { question: 'What types of electronic equipment are covered?', answer: 'Covered equipment includes...' },
      { question: 'How is the Takaful contribution calculated?', answer: 'Contributions are based on...' },
      { question: 'What does All Risk coverage mean?', answer: 'All Risk means coverage against...' },
      { question: 'What are the exclusions under this policy?', answer: 'Exclusions include intentional damage...' },
    ],
    'Family Takaful': [
      { question: 'What is Family Takaful?', answer: 'Family Takaful is a long-term plan...' },
      { question: 'What Are the Coverage Options for Family Takaful?', answer: 'Options include...' },
      { question: 'What are the covers/benefits provided to the member?', answer: 'Members receive benefits such as...' },
      { question: 'How much contribution does a member have to pay?', answer: 'Contributions depend on age...' },
      { question: 'What are the fees and charges I have to pay?', answer: 'Fees include...' },
    ],
    'Money Takaful': [
      { question: 'What is the Alwafa Money Takaful scheme about?', answer: 'This scheme offers protection for...' },
      { question: 'What does this scheme cover?', answer: 'Coverage includes theft...' },
      { question: 'How long does the coverage last?', answer: 'Coverage lasts for one year...' },
      { question: 'How much is the contribution I need to pay?', answer: 'Contributions depend on...' },
      { question: 'What fees and charges apply to this policy?', answer: 'Fees include...' },
    ],
    'Private Car Takaful': [
      { question: 'What is the Alwafa Comprehensive Private Car Takaful?', answer: 'This plan covers accidents...' },
      { question: 'What types of Coverage are included in this Takaful Policy?', answer: 'Coverage includes theft...' },
      { question: 'Are there any exclusions I should be aware of?', answer: 'Exclusions include...' },
      { question: 'What does a member need to do if there are changes in their contact details?', answer: 'Members should inform...' },
    ],
    'Education Takaful': [
      { question: 'What is Alwafa Endowment Plan?', answer: 'This plan supports long-term savings...' },
      { question: 'How does the contribution work?', answer: 'Contributions are calculated...' },
      { question: 'What happens in the event of loss of life or total permanent disability?', answer: 'In such events...' },
    ],
    'Travel Takaful': [
      { question: 'What is ALWAFA Travel Takaful Policy?', answer: 'This policy provides coverage for...' },
      { question: 'What benefits are covered under this policy?', answer: 'Benefits include medical...' },
    ],
    'Fidelity Takaful': [
      { question: 'What is the Alwafa Fidelity Guarantee Takaful?', answer: 'This plan covers losses...' },
      { question: 'What type of losses does this Takaful cover?', answer: 'Covered losses include...' },
      { question: 'Are there any fees or charges involved?', answer: 'Fees depend on...' },
    ],
    'Marine Takaful': [
      { question: 'What is Alwafa Marine Cargo Takaful?', answer: 'This policy covers marine shipments...' },
      { question: 'What types of coverage are available under this scheme?', answer: 'Coverage includes...' },
    ],
    'Motor Takaful': [
      { question: 'What is Alwafa Endowment Plan?', answer: 'This plan provides comprehensive...' },
      { question: 'How does the contribution work?', answer: 'Contributions are based on...' },
    ],
    'Credit Takaful': [
      { question: 'What is Alwafa Endowment Plan?', answer: 'This plan helps manage credit risks...' },
      { question: 'How does the contribution work?', answer: 'Contributions depend on...' },
    ],
  };

  const toggleQuestion = (category, index) => {
    setExpandedQuestions((prevState) => ({
      ...prevState,
      [category]: prevState[category] === index ? null : index,
    }));
  };

  const handleSidebarClick = (category) => {
    setActiveCategory(category);
    const element = document.getElementById(category.replace(/\s+/g, '-').toLowerCase());
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Nav />
      <div
        className="lg:h-80 h-[50vh] bg-cover bg-center "
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="lg:h-80 h-[50vh] flex items-center justify-center bg-[#50172080]">
          <h1 className="font-Matter font-[600] text-white lg:text-[64px] text-[40px] ">Frequently Asked Questions</h1>
        </div>
      </div>
      <div className="min-h-screen bg-[#FFEED0] p-8">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-12">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 border-2 border-[#501720] shadow-lg rounded-lg p-4 sticky top-8 h-max">
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => handleSidebarClick(category)}
                    className={`block w-full text-[#501720] p-2 text-left rounded-lg font-semibold ${
                      activeCategory === category ? 'bg-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Content */}
          <div className="flex-1 shadow-lg rounded-lg p-6">
            {categories.map((category) => (
              <div key={category} id={category.replace(/\s+/g, '-').toLowerCase()} className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">{category}</h2>
                <div className="space-y-6">
                  {faqs[category]?.map((faq, index) => (
                    <div key={index}>
                      <button
                        className="w-full flex justify-between items-center text-left py-2 px-4 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                        onClick={() => toggleQuestion(category, index)}
                      >
                        <span>{faq.question}</span>
                        <span className="text-gray-500">{expandedQuestions[category] === index ? '−' : '+'}</span>
                      </button>
                      {expandedQuestions[category] === index && (
                        <div className="mt-2 px-4 py-2 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-700">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
