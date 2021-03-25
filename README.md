This is an Oddle Front End Challenge

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Behind The Scenes
NON FUNCTIONAL REQUIREMENTS
1. Built with NextJs (webpack included by default) and Material-UI (CSS in JS included)
2. Using Redux for State Management (redux-toolkit). Using creatAsyncThunk as async reducer to get API.
3. SSR, using wrapper.withredux at _app.js

![image](https://user-images.githubusercontent.com/5979589/112420717-42154880-8d60-11eb-92d7-2424c2674daf.png)

5. Some custom components (with data) are dinamically imported. This is one way of some to code splitting.
6. CSS : using modified Progress component from Material-UI
7. Transition Effect: using Transition form Material-UI
8. All pages' URL is reusable. For user detail page, I use dynamic page of NextJs.
9. SEO opitimized. View page resource of each page, there are title and meta tag.
10. Support theming. There's swicth to change between two modes.
11. CSS-in-JS is supported by Material-UI
12. Responsive
13. 


More coming up...
