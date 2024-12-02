import React, { useState } from 'react';

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState('General FAQ');
  const [expanded, setExpanded] = useState(null);

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
      'What is Takaful Insurance?',
      'How Do I File a Claim?',
      'What Are the Investment Options?',
      'What Are the Coverage Options for Family Takaful?',
      'Can I Customize My Policy with Additional Riders?',
    ],
    'Computer Takaful': [
      'What is Alwafa Computer All Risk?',
      'What types of electronic equipment are covered?',
      'How is the Takaful contribution calculated?',
      'What does All Risk coverage means?',
      'What are the exclusions under this policy',
    ],
    'Family Takaful': [
      'What is Family Takaful?',
      'What Are the Coverage Options for Family Takaful?',
      'What sre the covers/benefits provided to the member?',
      'How much contribution does a member has to pay?',
      'What are the fees and charges i have to pay?',
      'Can a member opt out of the ceritificate?',
      'What does a member need to do if there are changes to their contact details?',
    ],
    'Money Takaful': [
      'What is the Alwafa Money Takaful scheme about?',
      'What does this scheme cover?',
      'How long does the coverage last?',
      'How much is the contribution i need to pay?',
      'What fees and charges apply to this policy?',
      'How is the surplus distributed?',
    ],
    'Private Car Takaful': [
      'What is the Alwafa Comprehensive Private Car Takaful?',
      'What types of Coverage are included in this Takaful Policy?' ,
      'Are there any exclusions i should be aware of?',
      'What does a member need to do if there are changes in their contact details?',
      'Where can i get further information?',
    ],
    'Education Takaful': [
        'What is Alwafa Endowment Plan?',
        'How does the contribution work?',
        'Are they any Special Takaful Clause?',
        'What happens in the event of the loss of life or total permanent disability?',
        'What are the term options for the Alwafa Endowment Plan?',
        'Can a member opt out of the Certificate?',
        'What does a member need to do f there are changes to their contact details?',
    ],
    'Travel Takaful': [
        'What is ALWAFA Travel Takaful Policy?',
        'What benefits are covered under this policy?',
    ],
    'Fidelity Takaful': [
        'What is the Alwafa Fidelity Guarantee Takaful?',
        'What type of losses does this Takaful cover?',
        'Are there any fees or charges involved?',
        'How is the contribution determined?',
        'Where can i get further information?',
    ],
    'Marine Takaful': [
        'What is Alwafa Marine Cargo Takaful?',
        'What types of coverage are availble under this scheme?',
        'How do i determine my contribution amount?',
        'What are the key terms i should be aware of?',
    ],
    'Motor Takaful':[
        'What is Alwafa Endowment Plan?',
        'How does contribution work?',
        'Are there any Special Takaful Clause?',
        'What happens in the event of loss of life or total permanent disability?',
        'What are the term options for the Alwafa Endowment Plan?',
        'Can a member opt out of the Ceritificate?',
        'What does a member need to do if there are changes to their contact details?',
    ],
    'Credit Takaful': [
       'What is Alwafa Endowment Plan?',
        'How does contribution work?',
        'Are there any Special Takaful Clause?',
        'What happens in the event of loss of life or total permanent disability?',
        'What are the term options for the Alwafa Endowment Plan?',
        'Can a member opt out of the Ceritificate?',
        'What does a member need to do if there are changes to their contact details?', 
    ]
    
  };

  return (
    <>
   
    <div className="min-h-screen bg-[#FFEED0] p-8">
      <h1 className="text-center text-3xl font-semibold text-gray-800 mb-10">
        Frequently Asked Questions
      </h1>
      <div className="flex space-x-8">
      
        <div className="w-1/4 p-12px gap-12 bg-white shadow-lg rounded-lg p-4">
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category}
                className={`p-2 cursor-pointer rounded-lg ${
                  activeCategory === category ? 'bg-gray-200' : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

      
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">{activeCategory}</h2>
          <div className="space-y-4">
            {faqs[activeCategory]?.map((faq, index) => (
              <div key={index}>
                <button
                  className="w-full text-left py-2 px-4 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onClick={() =>
                    setExpanded(expanded === index ? null : index)
                  }
                >
                  {faq}
                </button>
                {expanded === index && (
                  <div className="mt-2 px-4 py-2 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque ac ligula nec dui ultrices interdum.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Faq;