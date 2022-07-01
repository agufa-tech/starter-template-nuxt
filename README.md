# Nuxt Starter Template

Opinionated nuxt 3 starter template with needed libraries, mainly for static sites, however, only a little modification is needed to be SSR ready

This template is based on [nuxt3-awesome-starter](https://github.com/viandwi24/nuxt3-awesome-starter)

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Features

* 💨 [@nuxtjs/tailwindcss](https://tailwindcss.com/) - A utility-first CSS framework
* 🤹 [unplugin-icons](https://github.com/antfu/unplugin-icons) - Use icons from any iconsets  
  🤹 [@iconify/json](https://icones.js.org/) - Multiple Iconsets  
  🤹 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - On-demand components auto importing for Vue
* 🍍 [@pinia/nuxt](https://github.com/vuejs/pinia) - Using Pinia with Nuxt.js 3  
  🍍 [pinia](https://pinia.vuejs.org/) - The Vue Store for state management and more  
  🍍 [pinia-plugin-persistedstate](https://github.com/prazdevs/pinia-plugin-persistedstate) - Persist Pinia state
* 🌍 [@intlify/nuxt3](https://github.com/intlify/nuxt3) - Nuxt 3 Module for vue-i18n-next
* 🛠️ [@vueuse/nuxt3](https://vueuse.org/nuxt/readme.html#vueuse-nuxt) - This is an add-on of VueUse, which provides better Nuxt integration auto-import capabilities.
* ⌛ [@nuxtjs/eslint-config-typescript](https://typescript.nuxtjs.org/guide/lint/) - Lint for typescript/javascript
* 🪀 [.env setup for dotenv](https://github.com/motdotla/dotenv) - Environment setup: dev, dev:build, stage:dev, stage, build.  Nuxt built-in already
* 🪅 [pug](https://pugjs.org/api/getting-started.html) - Write simpler html
* 🎈 [husky](https://typicode.github.io/husky/#/) - Lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks.  
  🎈 [commitlint](https://commitlint.js.org/) - Helps your team adhering to a commit convention.  Lint commit message 
  🎈 [lint-staged](https://github.com/okonet/lint-staged) - Run linters against staged git files  
  🎈 [release-please](https://github.com/googleapis/release-please) - Automates CHANGELOG generation, the creation of GitHub releases, and version bumps

## ToDo

* unplugin-icons auto-import: awaiting [this feature to be released](https://github.com/antfu/unplugin-icons/pull/63)
* PWA: waiting for official stable release
* i18n: waiting for nuxt3 integration [official i18n nuxt module](https://github.com/nuxt-community/i18n-module)

## Setup

### clone project
```bash
git clone https://github.com/agufa-tech/starter-template-nuxt.git
```

Make sure to install the dependencies:

```bash

# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

## Production

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Other Resource
* 😃 [Emojis](https://emojipedia.org/) - Emoji list
* Add husky git hook command example: 
```bash
# yarn
npx husky add .husky/post-merge 'yarn'

# npm
npx husky add .husky/post-merge 'npm install'

# pnpm
pnpm exec husky add .husky/post-merge 'pnpm install'
```
* leave two spaces after one line for a new line break in README.md for Github bullet point line format:  
  a  
  b