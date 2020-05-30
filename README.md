My [personal website](https://wwww.tim-phillips.com).

This site is built with [gatsby](https://www.gatsbyjs.org/) using [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) as a starting point.

![Build & Deploy](https://github.com/timphillips/tim-phillips.com/workflows/Build%20&%20Deploy/badge.svg)

## Development

- Run `yarn` to bootstrap the project.
- Run `yarn develop` to start a hot-reloading development environment accessible by default at http://localhost:8000.

## Deployment

- Run `yarn build`.
- Copy the `public` folder to the web server.

This project also includes a [GitHub action](https://github.com/timphillips/tim-phillips.com/blob/master/.github/workflows/buildDeploy.yml) that automatically builds and deploys the project to [tim-phillips.com](https://www.tim-phillips.com) whenever the `master` branch is updated.
