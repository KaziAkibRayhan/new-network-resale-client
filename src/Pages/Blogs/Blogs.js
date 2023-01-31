import React from "react";

const Blogs = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          Blogs
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Some common questions and their answers...
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What are the different ways to manage a state in a React
              application?
            </summary>
            <div className="px-4 pb-4">
              <p>
                <span className="font-bold">
                  React state management is a process for managing the data that
                  React components need in order to render themselves. This data
                  is typically stored in the component's state object. When the
                  state object changes, the component will re-render itself.
                </span>
                There are several other ways to manage state in React, including
                the use of: Hooks, React Context API, Apollo Link State
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How does prototypical inheritance work?
            </summary>
            <div className="px-4 pb-4">
              <p>
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object. getPrototypeOf and Object.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is a unit test? Why should we write unit tests?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Unit testing is a method of testing that tests the individual
                software unit in the process of isolation. Check the output of a
                function for any given input. It means verifying that the
                component renders for any specific accessory to react
                components.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
            React vs. Angular vs. Vue?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
              A simple difference between these three is that React is a UI library, and Vue is a progressive framework. However, Angular is a full-fledged front-end framework. As per StackOverflow Survey 2022, React is the favorite framework of 40.14% of developers, Angular with 22.96%, and Vue with 18.97% of developers.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
