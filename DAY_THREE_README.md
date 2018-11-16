## Day III

### Focus (Day III)

- Be able to explain and implement a React Higher Order Component to conditionally render protected content to the screen.

### Daily Setup (Day III)

- To start off today, your application should still be structured like yesterday, but now it should have a working search bar, comment input, and like icon.
- Those aren't necessary, however, for what you will be doing today. You can still work on today's part of this project even if you aren't completely done with yesterday's portion.

### Description (Day III)

- Today you will be building a "Higher Order Component" (HOC)
- The HOC will not let users see the posts until they have logged in. (Our login system for this will be faked using LocalStorage).
- The job of the HOC will be to render a login page if the user is not logged in, then render the posts after the user is logged in.

#### Tasks (Day III)

[ x ] - Create a `<PostsPage />` component in your `components/PostsContainer` directory.

[ x ] - You'll have to move a lot of what is rendered in `app.js` to this new component
[ x ] - In app.js, render the `PostsPage` component.
[ x ] - Make sure the app working as it was before since it has been re-factored now.
[ x ] - This is to ensure that we clean up our App component a little bit before we re-factor it to be wrapped up in an HOC

[ x ] - Building the High Order Component

[ x ] - Create a directory called `Authentication`
[ x ] - Inside that directory create a component called `<Authenticate />`. This is where all of the magic sis going to happen.
[ x ] - This component should be able to take in a component as an argument, and it will return a `class` component.
[ x ] - Inside of `<Authenticate />'s` render method, you'll want to return the Component that gets passed into it.
[ x ] - Be sure to export out this component.
[ x ] - Head over to App.js and `import` in our new `Authenticate` Higher Order Component and pass in `App`.
[ x ] - If this worked right then everything should render as it used to.
[ x ] - Authenticate will look a lot like this when you're done setting it up.

```js
const Authenticate = App =>
  class extends React.Component {
    render() {
      return <App />;
    }
  };
```

[ x ] - Build out the LoginPage component. You can design it how you like

[ x ] - In your `components` directory, create a directory called `Login` and add a new file called `Login.js`.
[ x ] - There should be a `username` input, a `password` input, and a `Login` button.
[ x ] - The component should invoke the `login` function in `app.js` when a user logs in.
[ x ] - This login function should set a `username` on `localStorage`. You'll need to check local storage to see if a user is logged in.
[ x ] - Be sure to force the page to reload when a user logs in so that our component un-mounts and mounts again.

[ x ] - Extending the functionality of the HOC to conditionally render the `LoginPage` or the `App`

[ x ] - Inside of `Authenticate` we need to add a constructor to hold our state data.
[ x ] - On state we need a user `loggedIn` boolean flag.
[ x ] - On `componentDidMount` we need to check `localStorage` to see if a user is logged in.
[ x ] - Inside of the render function we will check `if a user is logged in`
[ x ] - If a user is logged in we will return the `<App />`, else we will return the `<LoginPage>`

#### Stretch Problems (Day III)

[ x ] - Now that you have a user set in `localStorage`, go ahead and use that `username` when a user posts a comment to make it so the logged in user is the one commenting on the posts.
[ x ] - Styled-Components

[ x ] - Watch this video about [styled-components](https://youtu.be/bIK2NwoK9xk) in its entirety.

- Head over to the [Styled-Components docs](https://www.styled-components.com/) and learn about the library.
- Once you feel like you've got a good grasp of this concept, go ahead and start converting your components into styled-components.
- Try and make this thing as beautiful as possible

- Deploy your Instagram clone to netlify and share it in the #show-it-off channel.
