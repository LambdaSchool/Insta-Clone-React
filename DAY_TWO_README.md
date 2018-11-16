## Day II

### Focus (Day II)

- Understand the concept of React component lifecycles, along with the major lifecycle methods such as `render`, `componentDidMount`.

### Daily Setup (Day II)

- At this point you should have a working app with a component tree that is setup kind of like this (note that this is not a design spec!):

<img src='/assets/InstaClone-componentStructure.jpg' width='235' />

[ x ] - Your data should be imported to `app.js`, and then passed as props to each `PostContainer`.
[ x ] - Each `PostContainer` should then be passing data to a `CommentSection` via props as well.
[ x ] - The props being passed to each component should be typed checked using `propTypes` and `defaultProps`.
[ x ] - The comment section should add a comment to the post

### Description (Day II)

- For this part of the project you are going to use React's lifecycle methods to get data and to render the components. Then you will use functions passed as props to build out the functionality more.
- As data comes into the component, you will set it to the component's state, then pass it down to the child components.
- Add the functionality to add a comment to any of the posts. Since there is no login page or anything of that sort, hard code a static username.
- Implement the ability to like a post by clicking on a heart icon and having the number of likes increment accordingly.
- Get the Search Bar to filter posts by the post's username. When you submit a search term should filter out posts by users whose usernames do not match the search term.

#### Tasks (Day II)

- Use lifecycle methods
  [ x ] - In `app.js` use `componentDidMount()` to set your data to the component's state. Use the state object to pass data to your `PostContainer` component.
- Adding comments
  [ x ] - Lets divide up the data that we've been working with this far by separating the comments array onto a new component's state. Pass down the comments through each post to the CommentSection component. Be sure that you set the incoming `comments` props data on the state of the CommentSection component.
  - Create a function in `CommentSection.js` called `addNewComment` that takes in an event and an index number. The function will add the comment that is on the event object to the post that is at that index number.
  - Pass the `addNewComment` function down the component tree to where ever you have your 'Add a comment...' input.
  - The 'Add a comment...' input should be wrapped in a `<form></form>` element. Using that form's `onSubmit` event handler, invoke the `addNewComment` function and pass it the required arguments it needs to add a new comment.
  - Update your state with the new comment (This should trigger your component tree to "re-render" with your new comment on that post).
- Liking posts
  - This will be set up a lot like the 'Add a comment...' input. Pass a function down to where your heart icon is, and use `onClick` event handler to increment that post's likes.
- Search
  - Set up the search bar will like the comment input and the like button. In your function, filter out any post whose username doesn't match the search term passed in, then update the state with the resulting data.

#### Stretch Problems (Day II)

- Persist your data using `localStorage`. If done correctly, you will be able to refresh your page and still see your new comments.
- Add the ability to delete a comment from your data. If your data is in `localhost`, make sure to delete it from there as well.
- Implement a third-party library that does "fuzzy" searches into your search bar functionality (ie - search terms that aren't exact, like "phils" or "coffeephilz", would still return the username "philzcoffe").
