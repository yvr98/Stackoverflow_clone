import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import QuestionCard from "@/components/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";

const questions = [
  {
    id: "1",
    title:
      "Title 1 goes here dmsadadk kdkkdksmwd maskmkfmak mfkamskfmak mfakmsfkamf akfmasfma kafmskfmakf makfmksamf",
    tags: [
      { id: "1", name: "java" },
      { id: "2", name: "nextjs" },
    ],
    author: { id: "1", name: "jack", picture: "url_to_picture" },
    upvotes: 19,
    views: 100,
    answers: [{ answer: "Sample answer" }],
    createdAt: new Date("2023-09-01T12:00:00.000Z"),
  },
  {
    id: "2",
    title: "Title 2 goes here",
    tags: [
      { id: "1", name: "java" },
      { id: "2", name: "nextjs" },
    ],
    author: { id: "2", name: "jack aaa", picture: "url_to_picture" },
    upvotes: 29,
    views: 102,
    answers: [{ answer: "Sample answer" }],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900 ">
            Ask a question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex  justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
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
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question.id}
              id={question.id}
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
            title="There's no question to show"
            description=" Be the first to post a question.Ask a question!"
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
