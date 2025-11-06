'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What are the dimensions of a 20-foot container?",
    answer: "A standard 20-foot container has external dimensions of 20ft long x 8ft wide x 8.5ft high (6.1m x 2.4m x 2.6m). Internal dimensions are approximately 19.4ft x 7.7ft x 7.9ft, providing about 1,172 cubic feet of storage space."
  },
  {
    question: "What are the dimensions of a 40-foot container?",
    answer: "A standard 40-foot container measures 40ft long x 8ft wide x 8.5ft high (12.2m x 2.4m x 2.6m) externally. Internal dimensions are approximately 39.5ft x 7.7ft x 7.9ft, offering about 2,390 cubic feet of storage space."
  },
  {
    question: "How much weight can each container hold?",
    answer: "A 20-foot container can typically hold up to 28,000 kg (61,729 lbs) of cargo, while a 40-foot container can hold up to 26,000 kg (57,320 lbs). The maximum gross weight (container + cargo) is 30,480 kg for 20ft and 32,500 kg for 40ft containers."
  },
  {
    question: "Which container size should I choose?",
    answer: "Choose a 20-foot container for smaller shipments, easier transportation to remote areas, or when you have weight restrictions. A 40-foot container is more cost-effective for larger shipments and offers better value per cubic foot, but requires more space for loading and unloading."
  },
  {
    question: "What's the difference between standard and high cube containers?",
    answer: "High cube containers are 1 foot taller than standard containers (9.5ft vs 8.5ft). Both 20ft and 40ft containers are available in high cube versions, providing about 344 cubic feet extra space for 20ft HC and 700 cubic feet for 40ft HC containers."
  },
  {
    question: "Can I stack containers?",
    answer: "Yes, shipping containers are designed to be stacked. They can typically be stacked 7-9 units high when fully loaded on ships. For ground storage, 20ft containers can usually be stacked 5-6 high, while 40ft containers are often limited to 3-4 high depending on ground conditions and local regulations."
  },
  {
    question: "Are containers weatherproof?",
    answer: "Yes, shipping containers are designed to be weatherproof and watertight. They're made from corten steel and feature rubber seals on doors to protect contents from rain, wind, and sea spray during ocean transport. However, it's important to check seals regularly to maintain weatherproofing."
  },
  {
    question: "How much does it cost to ship a 20ft vs 40ft container?",
    answer: "A 40-foot container typically costs 1.5 to 2 times more than a 20-foot container, not double. This makes 40ft containers more economical per cubic foot. Exact pricing varies based on route, season, carrier, and current market conditions."
  }
];

export default function ContainerFAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Container FAQ
          </h1>
          <p className="text-lg text-slate-600">
            Everything you need to know about 20-foot and 40-foot shipping containers
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-slate-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-blue-600 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-slate-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Still have questions? Contact us for more information about container specifications and shipping options.
          </p>
        </div>
      </div>
    </div>
  );
}