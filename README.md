# Sanity.io/NextJS Boilerplate
This is a stater project for Sanity.io/NextJS projects.

- [Requirements](#requirments)
- [Setup](#setup)
  - [Sanity Setup](#sanity-setup)
  - [Next Setup](#next-setup)
- [Usage](#usage)
  - [Global CSS](#global-css)
  - [CSS Modules](#css-modules)
  - [Components](#components)
  - [Storybook](#storybook)
  - [Accessibility](#accessibility)
  - [Unit Testing](#unit-testing)
- [Deployment]

## Requirements
- NodeJS (version 14.17.6)
- Yarn
- Sanity CLI

## Setup
This project is setup as a monorepo as while the Sanity dashboard and NextJS frontend are linked they operate technically as distinctly separate and independent apps.

### Sanity Setup
cd into the studio directory

1. Ensure that Yarn is installed, run `yarn` or `yarn install` to install the project dependencies.
2. Run `sanity init` to initiate a new Santiy project.
3. When prompted with `The current folder contains a configured Sanity studio. Would you like to reconfigure it?` hit enter to accept.
4. Run `yarn start` or `sanity start` to start a local server

**You will need to generate a read token in order to consume the data on the frontend**
1. Login to the [Sanity console](https://www.sanity.io/manage)
2. Select the project you created above
3. Navigate to the API section of the project
4. In the Tokens section click `Add API Token`
5. Enter a descriptive name, e.g. NextJS Read Token
6. Allow Viewer (read only) priviledges and save
7. The token will only be visible once so ensure you save it somewhere you can access later

**Using multiple datasets for different environments**
- When switching between datasets for different environments it is better to use environment variables rather than editing `sanity.json` directly
- Run `cp .env.template .env` to copy the template to a new `.env` file.
- Update the `SANITY_STUDIO_API_DATASET` variable

**Building the studio**
- Run `yarn build` or `sanity build`

**Updating the studio**
- Run `sanity upgrade`

For documentation on Sanity CMS visit https://www.sanity.io/docs.

### Next Setup
cd into the web directory

1. Ensure that Yarn is installed, run `yarn` or `yarn install` to install the project dependencies.
2. Run `cp .env.template .env.development` to copy the template to a new `.env` file.
3. Update the `NEXT_PUBLIC_SANITY_ID`, `NEXT_PUBLIC_SANITY_DATASET` & `NEXT_PUBLIC_SANITY_TOKEN` to the ones created during the Sanity setup
4. Run `yarn dev` to start a local server

For documentation on NextJS visit https://nextjs.org/docs.

## Usage

### Global CSS
This project uses limited global styles which can be found in the `web/src/_global` directory. These include a `base.scss` file to normalize browser styles.

### CSS Modules

### Components

### Storybook
This project comes with storybook already setup. 

**What is Storybook?**
Storybook is a development tool that is used as a playground for UI components. It allows developers to create and test components in isolation and can be used to create a design system for use by designers.

A story captures the rendered state of a UI component. It’s a function that returns a component’s state given a set of arguments.

**Where to put stories?**
A component’s stories are defined in a story file using the `stories.js` prefix and lives inside the component folder. The story file is for development only, and it won't be included in your production bundle.

**Start a Storybook server**
- cd into the web directory
- Run `yarn storybook`

### Accessibility

### Unit Testing

[ ] To do - this will be implemented in future

### Deployment