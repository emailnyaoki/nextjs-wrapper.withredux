## Oddle Front End Challenge 
by Oki Nandoko Rakhim




## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## THE APP ON AWS

Open

https://d3lpvx9c5mb27y.cloudfront.net/

## THE APP

![ezgif com-gif-maker](https://user-images.githubusercontent.com/5979589/112435264-16518d00-8d77-11eb-9084-59675a908563.gif)

Type any username inside the search bar. As you type, the app will only continue to search if there is minimum 3 characters.
As the list of users are displaying, the app is updating their followers and following number async'ly. 

Click on any user to bring you to user detail page. The page will display the profile, along with its JSON and its followers, followings, and repos.
You can click on any follower and following user. Click on repo data, will bring yo to his/her github.

![image](https://user-images.githubusercontent.com/5979589/112437529-a09af080-8d79-11eb-8a05-f5adadcfdffe.png)

Pretty JSON

![image](https://user-images.githubusercontent.com/5979589/112437758-dcce5100-8d79-11eb-9398-e4e1ead63820.png)

Theming


## PAGESPEED INSIGHT

Mobile and Desktop

![image](https://user-images.githubusercontent.com/5979589/112432081-f029ee00-8d72-11eb-9c00-2e5c9807e3a1.png)



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
9. Support theming. There's swicth to change between two modes.
10. CSS-in-JS is supported by Material-UI
11. Responsive

![image](https://user-images.githubusercontent.com/5979589/112423088-96222c00-8d64-11eb-959a-8f52a3d00992.png)


12. The application supports IE10
13. Bundled with WebPack
14. The application is deployed on AWS

FUNCTIONAL REQUIREMENTS
1. There is a search bar to let the user search by username (login name) - DONE
2. While searching, the application shows an animated loading indicator made by CSS (using gif image is not allowed) - DONE
3. After the search is completed, the application shows the list of users along with their avatar and their username on the same page -DONE
4. If the results are not complete in one page, the pagination is shown on the screen - DONE
5. When a list item is clicked, the application is navigated to a new page that display the parsed JSON payload of that user - DONE
6. The new page also has to display the list of the user's repositories, followers and following - DONE
7. The search input does the searching as you type -DONE



