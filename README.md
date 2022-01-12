[![CodeQL](https://github.com/Johannes-Andersen/Johand/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Johannes-Andersen/Johand/actions/workflows/codeql-analysis.yml)
[![Test](https://github.com/Johannes-Andersen/Johand/actions/workflows/test.yml/badge.svg)](https://github.com/Johannes-Andersen/Johand/actions/workflows/test.yml)

# Johand.dev - Monorepo

Although my source code is in a single repository,
it contains multiple individually deployable micro-frontends.

To help me manage all the micro-frontends in the repo, I use a tool called [Turborepo](https://turborepo.org/).

With this arrangement, we're following the Google style of code organization.
The advantages of organizing in this way are well-documented [here](https://danluu.com/monorepo/).

All the infrastructure is managed in a different private Infrastructure repo using Terraform.

## Apps and Packages

Micro-apps:

- [WIP] `home`: a [Next.js](https://nextjs.org) app
  - The home page is the main landing page for the site showing the about me section.
- [WIP] `blog`: a [Next.js](https://nextjs.org) app
  - This is the user facing blog. It's located on the /blog path.
- [WIP] `admin`: a [Next.js](https://nextjs.org) app
  - The admin app is responsible for managing and publishing blog posts. It's located on the /admin path.

Tooling:

- `ui`: a React component library applications. Used for shared components
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `config`: Contains `eslint` and `stylelint` configurations

Miscellaneous:

- `e2e`: End-to-end tests
  - Cypress is used for this. It runs against the local server for each micro-frontend.
- `.github/workflows/`: GitHub Actions workflow files
  - These are used to automate the CI/CD pipeline

## Installation

Make sure you got `Node 16` and `npm 7` or higher installed.
You can use [n](https://github.com/tj/n) to manage your Node versions:

```bash
  n 16
```

After getting the correct `n` version installed, you should run the following command in the **root of the repo**.

```bash
  npm install
```

You should not have to run `npm install` in any of the individual as they should all be manages by Turborepo.

## Running Tests

To run all the tests, run the following command in the root of the repo:

```bash
  npm run test
```

To lint the code, you can run the following:

```bash
  npm run lint
```

Tip: You can run `npm run format` to automatically format the code

If you want to only run a specific project test you can run:

```bash
  npx turbo run test --scope=home
```

## Running E2E tests

To run all the tests in development mode, you can run the following command:

```bash
  npm run e2e:dev
```

This will spin up the apps in development mode and run the tests locally.

To run it in CI mode, you need to start the apps first, then run the following command:

```bash
  npm run e2e
```

## Run Locally

Make sure that you have read the section about installation above.

In the root of the repo, you can spin up the entire platform by running:

```bash
  npm run dev
```

If you want to only run a specific project you can run:

```bash
  npx turbo run dev --scope=home
```

If you got any npm issues, try cleaning out the repo:

```bash
  npm run clean && npm install
```

## Deployment

We currently do not have a deployment process.
We will update this section when the CI/CD pipeline is done.

<!--
```bash
  npm run deploy
```
 -->

## Tech Stack

Currently this is the allowed Tech Stack. Please ask me before adding something new to the project.

**Client:** TypeScript, React, Next.JS

**Styling:** Chakra UI, CSS modules

**Testing:** Cypress, Jest, React-Testing-Library

**Linting/Formatting:** Eslint, Stylelint, prettier

**Hosting provider:** Google Cloud

## Contributing

Contributions are always welcome!

Just make sure to write appropriate tests and lint the code.

## FAQ

### Why a monorepo and micro-applications? Isn't it a bit overkill?

Simple answer, yes.

### Why did I choose this approach?

Because I wanted to learn about how to deploy micro-applications from a monorepo using Turborepo and Next.js.

### Would I recommend this approach for such a small project?

No.
