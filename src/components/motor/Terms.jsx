import React from 'react';

const Terms = () => {
    const terms = [
      {
        title: 'Disclosure',
        description: 'All relevant facts must be disclosed.'
      },
      {
        title: 'Assignment of Certificate',
        description: 'Transfer to a Master Certificate Holder is the norm.'
      },
      {
        title: 'Profit Sharing',
        description: 'Profits will be shared between participants.'
      },
      {
        title: 'Cooling-Off Period',
        description: 'Members have a 7-day cooling off period.'
      },
      {
        title: 'Claims Settlement Process',
        description: 'Prompt settlement upon complete documentation.'
      },
      {
        title: 'Claims Notification',
        description: 'Notification required within specified period.'
      }
    ];
  
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Important Terms & Conditions
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Understand the key obligations and responsibilities
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {terms.map((term, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-2">{term.title}</h3>
                <p className="text-gray-600 text-sm">{term.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="bg-red-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-800">
              GENERATE A QUOTE
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Terms;