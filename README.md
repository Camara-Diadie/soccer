# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# soccer

API Soccer
API à utiliser : https://rapidapi.com/api-sports/api/api-football?endpoint=apiendpoint_5ae0a365-b017-47ae-a512-cd575bac5f72
Il faut renseigner une clé API gratuite pour l'utiliser, pour ça il suffit de se créer une compte sur RapidAPI.
Je veux générer une liste des meilleurs buteurs par league.
Commençons par générer la liste des meilleurs buteurs de ligue 1
Tout d'abord, l'ID de la ligue 1 sur l'API est le « 4 »
league_id = 4
Etapes :

- Créer un service qui va fetch les data depuis l'API, afin de récupérer les données liées à chaque buteur
- Créer les composants :
  - App : déclencher le service qui va fetch les data
  - List: qui a prendre en props le tableau de joueurs récupéré
  - Player: qui va gérer l'affichage des données de chaque jour via les
  - Ce qui donne, en gros : App > List({ players }) > Player({ playerDetails })
- Pour le design, partir sur quelque chose de simple, dans la même idée que la TodoList dans un premier temps.
  Si tu as le temps, on pourra mettre en place un formulaire qui mettre à jour le league_id et on pourra donc changer les buteurs de ligue 1 par ceux de BPL, Liga etc.
- une branche fetch data
- une branche catch-data in app
- une branche create creat-list
- une branche creat-details-player
