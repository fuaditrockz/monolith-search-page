# monolith-search-page (POKEMON EDITION)

## Getting Started

Because this project was built using a repo monolithic approach, then the front-end (client) and back-end (server) project management are in the same folder. These can be run simultaneously or separately, depending on your preferences.

**Clone The Project**
```shell
git clone git@github.com:fuaditrockz/monolith-search-page.git
```

**Running The Server**
```shell
cd monolith-search-page
npm run server
```

**Running The Client**
```shell
cd monolith-search-page
npm run client
```

## Client
On the client side we used [React](https://reactjs.org/) as a front-end framework, and build with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) as a boilerplate. So you can edit it as a regular react project.

Inside `/src`, we have some folders that handled variety of the task for this project;

### assets
Stores everything related to static assets, such as images, fonts etc.

### components
Following [Brad Frost methodology](https://atomicdesign.bradfrost.com/), the components are divided into sections in order to make it easier to group than the components themselves;

**atoms**
The smallest possible component separation that will be used over and over again.

**molecules**
A combination of atomic components. But it's still small.

**organisms**
A combination of atom and molecules components. And have many codes inside this. They handled all of the container codes of the screen.

### constants
Stores all of the reusable variable over this project.

### containers
Stores all of the wrapper of the AMO(Atoms, Molecules, Organisms) components. It acts as the screen which will be called later in `App.js`.

### context
We use [Context API by React](https://reactjs.org/docs/context.html) as a state management here. So this folder will stores all of the state and state management of all of the components in this project. So, for sure you will rarely see functions inside AMO components, because almost everything is already placed in the context.