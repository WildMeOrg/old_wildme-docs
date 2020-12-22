# Wild Me Docs

The Wild Me Docs are built in React using Docusaurus. But you don't need to know anything about React, Javascript, HTML or CSS to contribute to the documentation. Editing documentation and creating new documents only requires a basic knowledge of [Markdown](https://guides.github.com/features/mastering-markdown/).

For more information on how to contribute, take a look at [the guide](https://docs.wildme.org/docs/technical_how_to_edit).

## Development server

```console
npm install
npm start
```

## Build

```console
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
