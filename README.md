## Project setup

### Project prerequisites

1. The **Arigem Logistics** web-app runs on React and Next.js version v12.0.0, and react version v18.0.0, To check the Next.js version installed in your machine run `npx next --version`, or run `npm view react version` to check the react version installed on your machine.

2. You’ll need Node.js version 10.13 or later.

3. To check the details of the other dependencies in this project, check the `package.json` file in the root of the project.

[`Herelies the figma link`](https://www.figma.com/file/Ky2dUVZyTgya1upgjPJj8I/ARIGEM-LANDING-PAGE?node-id=303%3A3886).

### How to setup
1. Git clone this project
3. Run `yarn` to install all packages in the `package.json` file.
4. Finally run `yarn run dev` on your terminal to start the development server.

## Project structure

```javascript
.next/
.swc/
node_modules/
src/
    |-commons/
    |-modules/
    |-pages/
    |- api/
        |- hello.js
        |- _app.tsx
        |- _document.tsx
        |- index.tsx
    |-utils/
public/
    |- favicons
    |-image assets
styles/
    |- _variables.scss
    |- _mixins.scss
    |- global.scss
    |- Home.module.scss
.eslintrc.js
eslintrc.json
.gitignore
package.json
README.md
```

## Packages import

Packages imported in every javascript file follow this order;

```javascript
1 . Next.js imports
2 . Third-party package imports
2 . Lib imports ('lib/*')
3 . Pages imports ('pages/*')
4 . Component imports ('components/*')
5 . Constants imports ('components/constants/*')
6 . Global Style imports ('styles/*')
7 . Styled Modules imports ('styles/modules/*')
8 . Relative files ('../../')
```

Here are a few examples

```javascript
// Next.js imports imports
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Third party package imports
import GhostContentAPI from '@tryghost/content-api';

// lib imports
import { getPosts } from 'lib/posts';

// pages imports
import Team from 'pages/team';
```