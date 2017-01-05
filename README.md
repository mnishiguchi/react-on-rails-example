# React-on-rails example app

In this repo, I will figure out how react-on-rails works.
This app is based on  [shakacode/react-webpack-rails-tutorial](https://github.com/shakacode/react-webpack-rails-tutorial)
---

## Environment / gems

- Ruby 2.3.1
- Rails 5.0.0
- [React on Rails](shakacode/react_on_rails)
- etc

---

## Models

![](erd/erd.jpg)

---

## Get started

```bash
bundle install
npm install
rake db:setup
rake db:seed
foreman start -f Procfile.dev
```

Starting [react on rails](https://github.com/shakacode/react_on_rails#getting-started)

---

## react-on-rails resources

- [https://shakacode.gitbooks.io/react-on-rails/content/](https://shakacode.gitbooks.io/react-on-rails/content/)
- [https://github.com/shakacode/react_on_rails#getting-started](https://github.com/shakacode/react_on_rails#getting-started)
- [https://github.com/shakacode/react-webpack-rails-tutorial](https://github.com/shakacode/react-webpack-rails-tutorial)

---

## Setting up React router

For handling revisits to react-routed routes correctly, we need to make Rails
ignore those routes using wildcard.

`config/routes.rb`

```rb
# React Router needs a wildcard
get "contact(/*all)",  to: "react_pages#index"
get "about(/*all)",    to: "react_pages#index"
get "comments(/*all)", to: "react_pages#index"
```

`client/app/bundles/comments/routes/routes.jsx`

Specify our desired routes in react's routes file.

```js
...
export default (
  <Route path="/" component={Layout}>
    <IndexRoute
      component={HomeContainer}
    />
    <Route
      path="contact"
      component={ContactContainer}
    />
    <Route
      path="about"
      component={AboutContainer}
    />
    <Route
      path="comments"
      component={RouterCommentsContainer}
    />
    ...
  </Route>
);
```

`client/app/bundles/main/components/NavigationBar/NavigationBar.jsx`

Then we may want to update the navigation bar.

```js
  ...
  return (
    <nav className="navbar navbar-inverse" role="navigation">
      <div className="container">
        ...
        <div className="collapse navbar-collapse" id="site-navigation">
          <ul className="nav navbar-nav">
            <li>
              <IndexLink to="/" activeClassName="active">
                IndexLink
              </IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/comments" activeClassName="active">
                Comments
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
```

---

## Some useful techniques

#### React wild card Redirecting

```js
import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

// ...

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomeContainer} />
    <Route path="/about" component={AboutContainer} />

    <Redirect from="*" to="/" />
  </Route>
)

export default routes
```
