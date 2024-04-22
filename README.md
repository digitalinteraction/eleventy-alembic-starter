---
permalink: /template/
layout: page.njk
---

# Eleventy Alembic Starter

This repo is a started project to quickly get an [Eleventy](https://11ty.dev) project set up with [Alembic](https://alembic.openlab.dev).
Eleventy is a great static site builder for Node.js.
Alembic is a design toolkit for [Open Lab](https://openlab.ncl.ac.uk) to build modern responsive websites.

## Features

- A basic home page with a hero at the top of it
- An extra page re-using the same HTML template
- Primary & secondary navigation from a data file
- Integrated with [Open Lab Alembic](https://alembic.openlab.dev) (with labcoat)
- Configured markdown for a more pleasant experience
- Static assets that are copied into the site
- An example GitHub CI/CD to build & deploy the site
- Optional formatting with [prettier](https://prettier.io)
- Pulls in a font from [fonts.openlab.dev](https://fonts.openlab.dev)

## Project structure

```
.
├── .github
│   └── workflows
|       └── pages.yml   - A GitHub actions workflow that builds & deploys the site to GitHub pages
│
├── _data               - Contains global data used throughout the website
│   ├── navigation.json - The primary and secondary (footer) links
│   └── site.json       - Meta-information about the site
│
├── _includes           - Templates to use for rendering
│   ├── home.njk        - A layout for the homepage with a hero and content
│   ├── html.njk        - A generic layout for HTML pages
│   └── page.njk        - A layout that you can apply to a markdown file
│
├── assets              - A folder of static assets that are copied in
│   ├── hero.jpg        - The hero image on the home page
│   └── style.css       - Rough CSS styles to get you started
│
├── node_modules        - Node.js modules, installed with npm
├── _site_              - Where the site is built into
│
├── .gitignore          - Files to ignore from git source control
├── README.md           - The file you're reading right now
├── eleventy.config.js  - The Eleventy configuration
├── index.md            - The home page markdown source
├── package-lock.json   - Node.js lock file
└── package.json        - Node.js package info & dependencies
```

## Get started

Use the template on [GitHub](https://github.com/digitalinteraction/eleventy-alembic-starter) to start hacking away.
First, clone your new repository locally and install the NPM dependencies.
Then you can run the `start` and `build` scripts to start editing the webiste.

```sh
# cd to/this/folder

npm install

# Run the development script
# -> Runs a local web server on http://localhost:8080
# -> Hot-reloads on changes
# -> Stop with ^C (control-then-C)
npm run start

# Run the production build
# -> Builds into the _site directory
npm run build
```
