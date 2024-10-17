# BNCS Portal

Eviden’s Broadcast Network Control System (BNCS) is a proven solution enabling streamlined control and monitoring of broadcast equipment within a broadcast environment. It provides a centralized interface to control and gain access to purchased Drivers, Cores and Automatics; which are used to communicate between the individual hardware’s APIs and the BNCS.  


## Table of Contents
- [Table of Contents](#table-of-contents)
- [Project Overview](#project-overview)
  - [Log in](#log-in)
  - [Home page](#home-page)
  - [Dashboard](#dashboard)
  - [Submit A Ticket](#submit-a-ticket)
- [Configuration](#configuration)

## Project Overview
The BNCS portal is currently can be accessed by the [BNCS](https://www.bncs.media/) website. In this POC stage, a test user is created in order to view the drivers that are associated with this profile.

### Log in
In order to be able to access the BNCS portal, the user will need to log in using their login credentials. The login authentication and authorisation is handled by [Auth0](https://auth0.com/docs/get-started/auth0-overview) 

### Home page
When logged in, the user will land on the BNCS homepage. The user can be redirected to either the Dashboard page through the Dashboard tab, the Jira page through the Submit A Ticket page or log out using the Log out tab.

### Dashboard
Here, the user can view the drivers or cores that are assigned to their profile by clicking on the Drivers or Cores tabs respectively.

### Submit A Ticket
Users will be required to log in to access the Jira page. Here, users can request access for specific drivers/cores. 

## Configuration

### Step 1. Set up the environment

Use the Deploy Button below. It will let you deploy the starter using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-sanity-example) as well as connect it to your Sanity Content Lake using [the Sanity Vercel Integration][integration].

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

### Step 2. Set up the project locally

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) that was created for you on your GitHub account. Once cloned, run the following command from the project's root directory:

```bash
npx vercel link
```

Download the environment variables needed to connect Next.js and the Studio to your Sanity project:

```bash
npx vercel env pull
```

This will create a git-ignored `.env` file with environment variables that will be used for local development.

### Step 3. Run Next.js locally in development mode

```bash
npm install && npm run dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

Your blog should be up and running on [http://localhost:3000][localhost-3000]! You can create and edit content on [http://localhost:3000/studio][localhost-3000-studio].

### Step 4. Deploy to production

To deploy your changes to production you use `git`:

```bash
git add .
git commit
git push
```

Alternatively, you can deploy without a `git` hosting provider using the Vercel CLI:

```bash
npx vercel --prod
```
