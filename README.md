This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

Make sure yo have an up to date version of node and mpn installed.

The best way to run the project is to use yarn
```
>npm i -g yarn
```
and then from the repository folder:
```
>yarn
>yarn start
```

this will start the development server in:

http://localhost:3000/

## Description

this is a very simple web page that uses `react` + `redux`, combined with other
dependecies like `redux-thunk` to load a list of notifications from the api created
in the other repository:

https://github.com/josep-almolda/assesment

notifications can be retrieved by specific user, or you can get all of them selecting `All`

## Improvements and decisions

The project has been coded maintaining a good code structure, as a good template for future
expansion if that was the case, but because the time constraints there are a number of things
that could be added
- Tests with `jest`, or another framework
- Support for types using `Flow` or implementing `PropTypes` in the components
- React Router to navigate between different screens (there's only one screen in the project)
- I added support for the different http verbs for completeness, but only `GET` is used in the project
- I am using `redux-thunk` because I think the action creators are a very good way to call asynchronous
actions, especially when combined with the `async` and `await` keywords, but other frameworks like `saga`
could be used that give more features to the API communication
- the API url is set by default to 'https://localhost:44309/api/', but an environment variable `API_BASE_URL`
can be used to override that value
- If this was a bigger project, I'd recommend using `styled-components` combined with the `reacstrap` components
already used in the project to create a library of reusable components through all the app
