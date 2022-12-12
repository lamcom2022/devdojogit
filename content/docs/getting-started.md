---
title: Getting started
category: User guide
position: 1
items-must:
  - Node
  - npm
  - VS.Code or any IDE of your choice
items-optional:
  - Docker desktop
  - Docker compose
  - Go
link: https://codesandbox.io/embed/nuxt-content-l164h?hidenavigation=1&theme=dark
---

# Introduction

![background](https://images.unsplash.com/photo-1631152186151-a0f9dde3a1e3)

Swara Nritya is an open source, professional publishing website built on a modern Jamstack technology stack — Vue.js, Nuxt.js, TailwindCss and Nuxt-content for documentation.

# Installation

Learn how to get Swara Nritya up and running in your local development environment and production nginx server or docker container or embedded golang binary or in the cloud i.e. AWS S3 or EC2 instance.

## Pre-requisites

### Mandatory

<list :items="items-must"></list>

### Optional

<list :items="items-optional"></list>

## Development Environment Setup

### Clone the repository

```
git clone https://github.com/senthilsweb/swarna-nritya-ui-corp-website
```

### Install dependencies

```
npm i
```

### Run in development mode

<code-group>
  
  <code-block label="NPM" active>

```bash
npm run dev
```

  </code-block>
<code-block label="Yarn">

```bash
yarn dev
```

  </code-block>
  
</code-group>

## Build for production

### Build

```
npm run generate
```

### Run in production mode

```
npm run start
```

## Deployment

> It is assumed that you would like to deploy your website in [surge](https/surge.sh), a Static web publishing for Front-End Developers

### subdomain configuration

cd into '/static' folder and edit the `CNAME` file by replacing `senthilsweb` with your choice of the subdomain.

```
senthilsweb.surge.sh
```

### Deploy to [surge.sh] (https://www.surge.sh)

- Change directory to `dist`
- Run the below command.

```
surge
```

<alert>

It will ask for your email to sign-up for the first time and then it will ask for your confirmation to override the default `subdomain` name.

</alert>
