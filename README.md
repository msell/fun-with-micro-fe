
First off we need to make changes to webpack config and don't really want to deal with ejecting CRA.

This library looks promising [CRACO](https://craco.js.org/) to overrided Webpack config in CRAs, but I ended up trying [this simple approach](https://github.com/SurjitSahoo/mf-cra) to module federation in a CRA.

Tip in CRA host app:
> To statically import federated components, webpack needs a top level promise, so that it can pause the execution there and load the remote components before it can be rendered. To achieve this, rename src/index.js to src/bootstrap.js, and create a new file src/index.js and import bootstrap.js file in it with JavaScript's import function. This function returns a promise. e.g. import('bootstrap.js')