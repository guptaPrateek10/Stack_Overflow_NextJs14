import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const hotQuestions = [
  {
    _id: "1",
    title:
      "What are the key differences between Agile and Waterfall methodologies?",
  },
  {
    _id: "2",
    title:
      "How can you optimize database performance in a large-scale application?",
  },
  {
    _id: "3",
    title:
      "What are the benefits of using TypeScript over JavaScript in modern web development?",
  },
  {
    _id: "4",
    title: "How do you handle concurrency in a multi-threaded application?",
  },
  {
    _id: "5",
    title:
      "What are some best practices for implementing responsive web design?",
  },
];
const popularTags = [
  { _id: "1", name: "JavaScript", numberOfQuestions: 1200 },
  { _id: "2", name: "React", numberOfQuestions: 950 },
  { _id: "3", name: "Node.js", numberOfQuestions: 800 },
  { _id: "4", name: "CSS", numberOfQuestions: 700 },
  { _id: "5", name: "HTML", numberOfQuestions: 600 },
  { _id: "6", name: "Python", numberOfQuestions: 1100 },
  { _id: "7", name: "Django", numberOfQuestions: 500 },
  { _id: "8", name: "SQL", numberOfQuestions: 750 },
  { _id: "9", name: "Java", numberOfQuestions: 900 },
  { _id: "10", name: "C++", numberOfQuestions: 650 },
];
const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.numberOfQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
