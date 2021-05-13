# Demo repository for ReactSummit Remote 2021 edition

## React Summit talk resources

- Talk video: https://youtu.be/pER_Ak1yUaA
- Slides: https://docs.google.com/presentation/d/1eI0GCCttGnme7_soky9rxXc79RRK_5M1_17m7c8lAO4/edit?usp=sharing

## Questions

- Ping me [on Twitter](https://twitter.com/juristr) (@juristr).
- Check out the [nx.dev](https://nx.dev) docs

## Repo setup

This project was generated using [Nx](https://nx.dev).

> Nx is a set of Extensible Dev Tools for Monorepos

### Structure

There are 2 apps:

- courses - which is a plain React application
- public - which is a [Next.js](https://nextjs.org/) application

Both of them share code from the libraries living in the Nx workspace's `libs` folder

- `admin/coupons`
- `admin/sales`
- `core`
- `courseitem`

### Run locally

Clone the repo and install dependencies using `yarn` (or `npm`).

All the commands have the syntax `yarn nx run <project-name>:<target>`. You can check the `workspace.json` for the project names and according targets to execute. Some also have short hands, like serve and build, e.g. `yarn nx serve <project-name>`

Run the apps with

- `yarn nx serve courses` to launch the React app
- `yarn nx serve public` to launch the Next.js app

Run the tests with

- `yarn nx run <lib-or-app-name>:test` - the lib or app-name can be seen from the `workspace.json` configuration. Example: `courses`, `public`, `admin-coupons`, `courseitem`,...
- `yarn nx affected:test` to run just the touched apps and libs in a branch compared to the `main` branch
  - add `--parallel` to parallelize the test run
  - add `--all` to execute all tests regardless of the touched apps and libs
- `yarn nx e2e courses-e2e` to run the e2e tests for the courses app and similarly for the Next.js app

To build the app run

- `yarn nx build courses --configuration=production`
- `yarn nx run public:export` to export the Next.js app (will automatically build the app first)

Use `yarn nx dep-graph` to launch the dependency graph visualization.

## ☁ Nx Cloud and Distributed Caching

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
