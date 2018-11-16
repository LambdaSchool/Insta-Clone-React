# React-Insta-Clone

## Introduction

- The purpose of this project is to continue building on your knowledge of React that you have gained thus far.

  - Here, you'll be implementing a lot of the same concepts that you have been in previous projects, in a very similar fashion.
  - The main difference this time around is that you'll be using the `create-react-app (CRA)` utility to generate your React project for you.
  - Don't worry about all of the extra files that you may not understand which will be present inside your React application that you will build with CRA.
  - The overall structure of the project remains exactly the same as what you worked with in Todo-React.

- This project will be worked on throughout the entire week.

  - Each day as you learn new things, you will use that knowledge to build and enhance this project a little more.
  - You will use the same repo throughout the whole week, adding more code, and changing things here and there as you learn new principles and techniques.
  - It will be important to communicate any problems you're having to your Project Manager so that we can make sure to get you un-stuck along the way as soon as possible.
  - The goal is to finish each day's objectives, and have a working project to start with on the next day.
  - If you don't get the daily objectives, don't panic, some days will be easier for you than others and some days will be harder.
  - The hope is that by the end of the week, you'll have seen a react application come to life, and you'll start to see how react works at a higher level.

- For this project, you'll be building a simple Instagram clone using React.
- There is a file provided called `dummy-data.js` that contains some mock data. Each object in the mock data represents a faux Instagram post.
- Your React application will receive faux post data and render each as a separate Instagram post.

## Day I

### Focus (Day I)

- Demonstrate the the ability to use create-react-app to boilerplate a react application
- Describe and be able to use PropTypes to 'type check' specific data being passed down to a child component
- Demonstrate the ability to use defaultProps in a React component

### Project Setup

- If you so choose you may install `create-react-app` globally by running `yarn global add create-react-app`.
  - If you have CRA installed then run `create-react-app instagram` to create your starter application with the name `instagram`.
  - If you don't have CRA installed then run `npx create-react-app instagram` to create your starter application with the name `instagram`.
- Create a `components` directory inside the `src` directory, and then create a sub-directory called `SearchBar`, another one called `PostContainer`, and lastly one called `CommentSection`, all inside the `src` directory. Each of these directories should contain the component file as well as the CSS for their respective components. You'll also want to put any other components that coincide with your respective container components inside of these directories.

### Tasks (Day I)

[ x ] - There are three major container components that you'll need to implement for this project: the Search Bar, the Post Container, and the Comment Section.
[ x ] - At the end of Day I there will be a single instance of the Search Bar being rendered at the top of the page, as well as a Post Container and a Comment Section for every piece of mock data in the `dummy-data.js` file.
[ x ] - The root App component of your application should import the dummy data from the `dummy-data.js` file with `import dummyData from './dummy-data';` and iterate over said data, passing each individual object as a prop to an instance of `PostContainer`.
[ x ] - Each `PostContainer` component will then pass the array of comments on each post object as a prop to an instance of the `CommentSection` component.
[ x ] - The `CommentSection` component will receive the array of comments as props and render a `Comment` component with the username of the poster as well as the post's text. Additionally, there should be an input box that allows users to submit a new comment for any post. We'll work on posting new comments tomorrow.
[ x ] - Be sure to check the `Types` of the data you are passing around as props in the components that will be using props to present data as DOM elements. This should be linked to your `Comment` component that `Comment Section` will render and potentially to your `Post` component that `Post Container` will render.
[  ] - You are free to leverage the Bootstrap library for this project for the purposes of theming and styling. I recommend the awesome [reactstrap](https://reactstrap.github.io/) library, which is a library of Bootstrap components that have been implemented using React, so they're really easy to just drop straight into React projects.
[ x ] - In addition to Bootstrap for theming, you'll want to add your own styles via CSS. To keep things organized, have the CSS file that corresponds with a component live in the same directory as the component file.

---

Your search bar header should look something like this:
[ x ] ![search bar](/assets/ig_search_bar.png)

---

Your post container should look something like this:
[ x ] ![insta post](/assets/ig_post.png)

### Stretch Problems (Day I)

[ x ] - Implement the ability to comment on a post with the `Add a comment...` input.
[ x ] - Use the [moment.js](https://momentjs.com/) library dynamically format the timestamp into a human-readable format like how it is being displayed in the screenshot.
