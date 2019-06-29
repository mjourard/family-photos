# Family Photos

A quick project intended for displaying family photos in a photo album-like UI

It was a good excuse to try making something in react :)

## Intended Future Developments

### Filtering 

Display a graph of all people found in the photo album. Selecting a person in that graph would then only show photos which contain that person. Multiple people can be selected at once, such that if person A and person B are selected, only photos containing person A and person B in them will be shown.

### ML Facial Recognition

A tagging system that would display people's faces to "tag" them as. Should be then be able to feed the tagged data into a model which would then auto tag future photos of those people.

### API Backend

Setup an easy backend in go for it to load from instead of hardcoding the data into the repo

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.