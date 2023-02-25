This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `pages/index.js`. The page
auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This
endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are
treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead
of React pages.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

# Create App

```bash
cd next-bmw-app
yarn create next-app .
code .
```

## Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init
command to generate both `tailwind.config.js` and `postcss.config.js`.

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Add to file `_document.js`

```bash
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

## Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```bash
** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each Tailwind’s layers to your `globals.css`
file.

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## React Icons

`yarn add react-icons`

## Add HeadlessUI and Use the `@headlessui/tailwindcss` plugin

`https://headlessui.com/react/tabs`

```bash
yarn add @headlessui/react
yarn add @headlessui/tailwindcss
yarn add className
yarn add classnames
```

```bash
import { Tab } from '@headlessui/react'

function MyTabs() {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}
```

## Vertical Tabs

```bash
<Tab.Group vertical>
      <Tab.List className="flex-col"></Tab.List>
</Tab.Group>
```

## Swiper
`yarn add swiper`


## Install Mongoose
`yarn add mongoose`

## Install Scrollbar
`yarn add tailwind-scrollbar-hide`

## Add to file `tailwind.config.js`
```bash
plugins: [
    require('tailwind-scrollbar-hide')
  ],
```
## Install `use-local-storage-state`
`yarn add use-local-storage-state`

## Install Stripe
`yarn add stripe`
`https://stripe.com/docs/checkout/quickstart`


## For production Image Optimization with Next.js, the optional 'sharp' package is strongly recommended. Run `yarn add sharp`

`yarn add sharp`

# Deploy app to Github Pages with CICD

```bash
git init
git add .
git commit -m "FirstDeploy"
git branch -M main
git remote add origin https://github.com/Eugene-Pavlovskiy/next-bmw-app.git
git push -u origin main
```

## Deploy

`yarn run build`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.
