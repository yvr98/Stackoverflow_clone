import React from "react";
import Link from "next/link";
import Image from "next/image";
import RenderTag from "./RenderTag";

const question = [
  {
    id: 1,
    title: "Question 1 of test",
  },
  {
    id: 2,
    title: "Question 2 of test",
  },
  {
    id: 3,
    title: "Question 3 of test",
  },
  {
    id: 4,
    title: "Question 4 of test",
  },
  {
    id: 5,
    title: "Question 5 of test",
  },
];

const tags = [
  {
    id: 1,
    name: "javascript",
    totalQuestions: 5,
  },
  {
    id: 2,
    name: "react",
    totalQuestions: 6,
  },
  {
    id: 3,
    name: "redux",
    totalQuestions: 8,
  },
  {
    id: 4,
    name: "next.js",
    totalQuestions: 2,
  },
  {
    id: 5,
    name: "html",
    totalQuestions: 9,
  },
];
const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden max-sm:hidden lg:w-[266px]">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {question.map((question) => (
            <Link
              key={question.id}
              href={`/questions/${question.id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                alt={"chevron right"}
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
          {tags.map((tag) => (
            <RenderTag
              key={tag.id}
              id={tag.id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
