"use client";
import { useState } from "react";
import Book from "../Book";

export default function FAQ() {
  const faqs = [
    {
      question: "1. Is this course beginner-friendly?",
      answer: "Yes, this course is designed to be beginner-friendly. We start with the fundamentals and gradually progress to advanced topics. Our comprehensive curriculum ensures that even if you're new to development, you'll be able to follow along and build a strong foundation."
    },
    {
      question: "2. Is this a placement-guaranteed course?",
      answer: "While we don't guarantee placements, we provide extensive career support including resume reviews, mock interviews, and access to our hiring network. Many of our students have successfully landed roles at top companies, and we're committed to helping you achieve your career goals."
    },
    {
      question: "3. How is this different from YouTube or other bootcamps?",
      answer: "Unlike free YouTube content, our bootcamp offers structured learning with hands-on projects, personalized mentorship, live doubt-solving sessions, and a strong community. We focus on practical, industry-relevant skills and provide continuous support throughout your learning journey."
    },
    {
      question: "4. How much time do I need to commit?",
      answer: "We recommend dedicating 10-15 hours per week to get the most out of the course. However, the program is designed to be flexible, allowing you to learn at your own pace. The more time you invest, the faster you'll progress and master the concepts."
    },
    {
      question: "5. Can this help with GSoC, internships, or high-paying roles?",
      answer: "Absolutely! Our curriculum is designed to prepare you for competitive opportunities like GSoC, internships, and high-paying developer roles. We've had 27 students from Cohort 3 selected for GSoC, and many alumni have secured positions at leading tech companies with impressive salary packages."
    }
  ];
  return (
    <>
      <div className="h-fit w-full flex justify-center items-start">
        <div className="w-7xl p-5">
          <h1 className="font-bold text-[40px] text-left">
            Discover Other Courses
          </h1>
          <h1 className="text-[24px] font-medium my-5">
            Our most comprehensive and impactful learning experiences.
          </h1>

          <div className="books flex justify-start items-center scale-90 origin-left w-full">
            <Book title="Web Dev + Devops<br/>Bootcamp" />
            <Book title="Web3 Bootcamp" className="mx-5" />
            <Book title="AI and ML Bootcamp" className="mx-5" />
            <Book title="Cohort 3" className="mx-5" />
            <svg
              width="60"
              height="60"
              viewBox="0 0 47 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-5"
            >
              <rect
                x="0.5"
                y="0.5"
                width="46"
                height="48"
                rx="23"
                stroke="black"
              />
              <path
                d="M28.8608 33.3153L27.3267 31.7898L32.6534 26.4716H10V24.2557H32.6534L27.3267 18.929L28.8608 17.4119L36.8125 25.3636L28.8608 33.3153Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
      <hr />
      <div className="h-fit w-full flex justify-center items-start mt-10">
        <div className="w-7xl p-5">
          <h1 className="font-bold text-[40px] text-left">
            Frequently Asked Questions
          </h1>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <hr />
      
    </>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <h1 className="text-[24px] font-medium my-5">{question}</h1>
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 15L12 9L6 15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        {isOpen && (
          <div className="w-full text-[18px] font-normal mb-5 text-gray-700">
            {answer}
          </div>
        )}
        <hr className="my-2" />
      </div>
    </>
  );
}
