
## 
by Oki Nandoko Rakhim




## THE APP ON LOCAL

On the directory

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## THE APP ON AWS

Open

https://d3lpvx9c5mb27y.cloudfront.net/

I deployed the app using AWS Amplify CLI. 

## THE APP


Type any username inside the search bar. As you type, the app will only continue to search if there is minimum 3 characters.
As the list of users are displaying, the app is updating their followers and following number async'ly. 

Click on any user to bring you to user detail page. The page will display the profile, its JSON, its followers, followings, and repos.
You can click on any follower and following user. Click on repo data, will bring yo to his/her github.


## Behind The Scenes
NON FUNCTIONAL REQUIREMENTS
1. Built with NextJs (Webpack included by default) and Material-UI (CSS in JS included)
2. Using Redux for State Management (redux-toolkit). Using createAsyncThunk as async reducer to get API.
3. SSR, using wrapper.withredux at _app.js

![image](https://user-images.githubusercontent.com/5979589/112420717-42154880-8d60-11eb-92d7-2424c2674daf.png)

4. Some custom components (with data) are dinamically imported. This is one way of some to code splitting.
5. CSS : using modified Progress component from Material-UI
6. Transition Effect: using Transition form Material-UI
7. All pages' URL is reusable. For user detail page, I use dynamic page of NextJs.
8. SEO opitimized. View page resource of each page, there are title and meta tag.
   -- It is actually not that simple. There are numerous non-technical factors like content, word count, heading, speed, links, sitemap etc.
9. Support theming. There's swicth to change between two modes.
10. CSS-in-JS is supported by Material-UI
11. Responsive

