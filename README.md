# Sanity.io/NextJS Boilerplate
This is a stater project for Sanity.io/NextJS projects. Run `git clone git@github.com:wearetilt/boilerplates.git your-project-name` to clone this starter to a new project then follow the setup steps below.

- [Requirements](#requirements)
- [Global Setup](#global-setup)
- [Project Setup](#project-setup)
  - [Sanity Setup](#sanity-setup)
  - [Next Setup](#next-setup)
- [Usage](#usage)
  - [Global SCSS](#global-scss)
  - [SCSS Modules](#scss-modules)
  - [Components](#components)
  - [Storybook](#storybook)
  - [Accessibility](#accessibility)
  - [Unit Testing](#unit-testing)
- [Deployment](#deployment)
  - [Sanity Deployment](#sanity-deployment)
  - [Next Deployment](#next-deployment)

## Requirements
- NodeJS (version 14.17.6)
- Yarn
- Sanity CLI
- Bit

## Global Setup
This project requires certain packages to be installed globally before setting up. These steps are only required the first time using these packages. Once installed globally these steps can be skipped for future projects.
- [Install Yarn globally](https://wearetilt.atlassian.net/wiki/spaces/WATP/pages/90767385/How+to+-+Install+NVM+Node+and+NPM#Yarn-Setup)
- To install Sanity CLI run: `npm install -g @sanity/cli`
- [Install Bit globally](https://wearetilt.atlassian.net/wiki/spaces/WATP/pages/93323269/How+to+-+Set+up+Bit)

## Project Setup
This project is setup as a monorepo as while the Sanity dashboard and NextJS frontend are linked they operate technically as distinctly separate and independent apps.

### Sanity Setup
cd into the studio directory

1. Ensure that Yarn is installed globally, run `yarn` or `yarn install` to install the project dependencies.
2. Run `sanity init` to initiate a new Santiy project.
3. When prompted with `The current folder contains a configured Sanity studio. Would you like to reconfigure it?` hit enter to accept.
4. Follow the steps to either create a new project or choose and existing one:
    - If creating a new project enter a project name & accept the default dataset configuration.
5. Run `yarn start` or `sanity start` to start a local server.

#### You will need to generate a read token in order to consume the data on the frontend
1. Login to the [Sanity console](https://www.sanity.io/manage)
2. Select the project you created above
3. Navigate to the API section of the project
4. In the Tokens section click `Add API Token`
5. Enter a descriptive name, e.g. NextJS Read Token
6. Allow Viewer (read only) priviledges and save
7. The token will only be visible once so **ensure you save it somewhere you can access later**

#### Using multiple datasets for different environments
- When switching between datasets for different environments it is better to use environment variables rather than editing `sanity.json` directly
- Run `cp .env.template .env` to copy the template to a new `.env` file.
- Update the `SANITY_STUDIO_API_DATASET` variable

#### Building the studio
- Run `yarn build` or `sanity build`

#### Updating the studio
- Run `sanity upgrade`

For documentation on Sanity CMS visit https://www.sanity.io/docs.

### Next Setup
cd into the web directory

1. Ensure that Yarn is installed globally, run `yarn` or `yarn install` to install the project dependencies.
2. Run `cp .env.template .env.development` to copy the template to a new `.env` file.
3. Update the `NEXT_PUBLIC_SANITY_ID`, `NEXT_PUBLIC_SANITY_DATASET` & `NEXT_PUBLIC_SANITY_TOKEN` to the ones created during the Sanity setup.
4. Ensure Bit is installed globally, run `bit init` to initiate a new Bit workspace (this is for the component library).
5. Run `yarn dev` to start a local server.

For documentation on NextJS visit https://nextjs.org/docs.

## Usage

### Global SCSS
This project uses limited global styles which can be found in the `web/src/_global` directory. These include;
- A `base.scss` file to normalize browser styles. **This should NOT be edited.**
- Some global grid styles to help with layouts.
- A `theme.scss` file for global theme styles such as base typography styles.
- A `_variables.scss` for global mixins and variables that need to be available to all modules.

### SCSS Modules
This project uses CSS modules in combination with scss. All classes in CSS modules are name-spaced to the module and, therefore, avoid unintentionaly conflicting CSS.

#### Class naming conventions
CamelCase naming is preferred, though not enforced. For example, you may wish to use camelCase naming alongside a [BEM methodology](https://en.bem.info/methodology/css/);
```scss
/* Component */
.componentName {}

/* Component modifier */
.componentName--modifierName {}

/* Component descendant */
.componentName__descendant {}

/* Component descendant modifier */
.componentName__descendant--modifierName {}
```

Or simply use camelCase on it's own;
```scss
/* Component */
.componentName {}

/* Component modifier */
.componentNameModifier {}

/* Component descendant */
.componentNameDescendant {}
```

It is expected, however, that a project will be consitent in it's namming convention, i.e. the same naming convention throughout.

#### Applying classnames in JSX
The CSS in a CSS module is no different than normal CSS, but the extension of the file is different to mark that the file will be processed. A CSS module must be imported and declared as a JavaScript object. A CSS class from that object is then referenced in the JSX className attribute which renders into HTML with dynamic CSS class names.

E.g.
```js
import React from 'react'
import styles from "./ComponentName.module.scss"

const ComponentName = ({ children }) => {
  return (
    <section className={styles.className}>{children}</section>
  )
}

export default ComponentName
```

### Components
This project is already configured to use our Reusable Component Library hosted by Bit.dev.

#### What is Bit
Bit.dev is a tool for isolating components and packaging them up into standalone reusable units. We use Bit in our NextJS projects for installing common components with basic functionality and minimally styled. These barebones components can then be extended to fit the needs of the project.

#### Installing Components
- View [add storybook link once setup] to browse available components.
- Follow component documentation to install into the project.
- The component will be installed directly into the `components` directory and can be used as you would any other component.

For documentation on Bit visit https://bit.dev/docs.

### Storybook
This project comes with Storybook already setup. 

#### What is Storybook?
Storybook is a development tool that is used as a playground for UI components. It allows developers to create and test components in isolation and can be used to create a design system for use by designers.

A story captures the rendered state of a UI component. It’s a function that returns a component’s state given a set of arguments.

#### Where to put stories?
A component’s stories are defined in a story file using the `stories.js` prefix and lives inside the component folder. The story file is for development only, and it won't be included in your production bundle.

#### Start a Storybook server
- cd into the web directory
- Run `yarn storybook`

For documentation on Storybook visit https://storybook.js.org/docs.

### Accessibility
At Tilt we strive to build accessible and inclusive experiences. As such we follow the WCAG on accessibility standards and aim to meet high level AA standards as a minimum.

In future we will integrate automated accessibility testing, however, accessibility should be a primary concern throughout the build.

For more information on these standards visit https://www.w3.org/TR/WCAG21/.

### Unit Testing
This is not yet implemented but will be in future.

## Deployment

### Sanity Deployment
To add once Confluence documentation on CI integration written.

### Next Deployment
This project is setup for deployment to Netlify with configuration in `netlify.toml`.

#### Deploy via the GUI (Recommended)
[A step-by-step guide to deploying using the Netlify GUI](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)

#### Deploy via the CLI
- Ensure you have the Netlify CLI package installed: run `npm install netlify-cli -g`
- Login in to obtain an authentication token: run `netlify login`
- This will open the browser to complete authentication
- Connect the repo for continuous integration: run `netlify init` and follow setup instructions
- Deploy to Netlify: run `netlify deploy`