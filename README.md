# Exploring Micro FEs

To run locally

```
cd ./todo-components
npm i && npm build && npm preview
```

Next change into the **host-vite-app** directory.

```
npm i
npm start
```

You'll notice a TODO list rendered in the vite host which is served by the todo-components microservice.


I'm still working on trying to get an example of a Create-react-app working as a host.

This library looks promising [CRACO](https://craco.js.org/) to overrided Webpack config in CRAs, or maybe [this one](https://github.com/SurjitSahoo/mf-cra) to module federation in a CRA.

Tip in CRA host app:
> To statically import federated components, webpack needs a top level promise, so that it can pause the execution there and load the remote components before it can be rendered. To achieve this, rename src/index.js to src/bootstrap.js, and create a new file src/index.js and import bootstrap.js file in it with JavaScript's import function. This function returns a promise. e.g. import('bootstrap.js')