import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomePageFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const result = {
  questions: [
    {
      _id: "1",
      title: "How do I manage state in a React application?",
      tags: [
        { _id: "1", name: "React" },
        { _id: "2", name: "JavaScript" },
        { _id: "3", name: "State Management" },
      ],
      author: {
        _id: "1",
        name: "John Doe",
        picture: "https://example.com/johndoe.jpg",
        clerkId: "clerk1",
      },
      upvotes: ["user1", "user2", "user3"],
      views: 150,
      answers: [
        {
          /* answer object */
        },
        {
          /* answer object */
        },
        {
          /* answer object */
        },
      ],
      createdAt: new Date("2023-05-01T10:00:00Z"),
    },
    {
      _id: "2",
      title: "What are the best practices for writing secure API endpoints?",
      tags: [
        { _id: "4", name: "API" },
        { _id: "5", name: "Security" },
        { _id: "6", name: "Best Practices" },
      ],
      author: {
        _id: "2",
        name: "Jane Smith",
        picture: "https://example.com/janesmith.jpg",
        clerkId: "clerk2",
      },
      upvotes: ["user4", "user5", "user6"],
      views: 200,
      answers: [
        {
          /* answer object */
        },
        {
          /* answer object */
        },
        {
          /* answer object */
        },
        {
          /* answer object */
        },
        {
          /* answer object */
        },
      ],
      createdAt: new Date("2023-05-01T10:00:00Z"),
    },
    {
      _id: "3",
      title: "How to optimize SQL queries for performance?",
      tags: [
        { _id: "7", name: "SQL" },
        { _id: "8", name: "Performance" },
        { _id: "9", name: "Optimization" },
      ],
      author: {
        _id: "3",
        name: "Alice Johnson",
        picture: "https://example.com/alicejohnson.jpg",
        clerkId: "clerk3",
      },
      upvotes: ["user7", "user8"],
      views: 100,
      answers: [
        {
          /* answer object */
        },
        {
          /* answer object */
        },
      ],
      createdAt: new Date("2023-05-01T10:00:00Z"),
    },
    {
      _id: "4",
      title: "What is the difference between async and defer in JavaScript?",
      tags: [
        { _id: "10", name: "JavaScript" },
        { _id: "11", name: "HTML" },
        { _id: "12", name: "Performance" },
      ],
      author: {
        _id: "4",
        name: "Bob Brown",
        picture: "https://example.com/bobbrown.jpg",
        clerkId: "clerk4",
      },
      upvotes: ["user9", "user10"],
      views: 120,
      answers: [
        {
          /* answer object */
        },
        {
          /* answer object */
        },
        {
          /* answer object */
        },
        {
          /* answer object */
        },
      ],
      createdAt: new Date("2023-05-07T08:45:00Z"),
    },
    {
      _id: "5",
      title: "How do I set up a CI/CD pipeline using GitHub Actions?",
      tags: [
        { _id: "13", name: "CI/CD" },
        { _id: "14", name: "GitHub" },
        { _id: "15", name: "DevOps" },
      ],
      author: {
        _id: "5",
        name: "Charlie Davis",
        picture: "https://example.com/charliedavis.jpg",
        clerkId: "clerk5",
      },
      upvotes: ["user11", "user12", "user13"],
      views: 250,
      answers: [
        {
          /* answer object */
        },
        {
          /* answer object */
        },
        {
          /* answer object */
        },
        {
          /* answer object */
        },
        {
          /* answer object */
        },
        {
          /* answer object */
        },
      ],
      createdAt: new Date("2023-05-09T11:30:00Z"),
    },
  ],
};

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
