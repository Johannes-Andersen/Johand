[![CodeQL](https://github.com/Johannes-Andersen/Johand/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Johannes-Andersen/Johand/actions/workflows/codeql-analysis.yml)
[![Test](https://github.com/Johannes-Andersen/Johand/actions/workflows/test.yml/badge.svg)](https://github.com/Johannes-Andersen/Johand/actions/workflows/test.yml)

# Johand.dev

This is the source code for my personal website, [johand.dev](https://johand.dev).

## Installation

Make sure you got `node 19` and `npm 8` or higher installed.
You can use [n](https://github.com/tj/n) to manage your Node versions:

```bash
  n 19
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

Finally to format the code, you can run the following:

```bash
  npm run format
```

## Run Locally

Make sure that you have read the section about installation above.

In the root of the repo, you can spin up the website by running:

```bash
  npm run dev
```

## Deployment

To deploy an app, just merge your changes into the `main` branch. The site will then be built, uploaded and deployed.

## Tech Stack

Currently this is the allowed Tech Stack. Please ask me before adding something new to the project.

**Client:** TypeScript, React, Next.JS

**Styling:** Tailwind, CSS modules

**Testing:** Playwright

**Linting/Formatting:** Eslint, prettier

**Hosting provider:** Google Cloud

## Contributing

Contributions are always welcome!

Just make sure to write appropriate tests and lint the code.
