This is an Oddle Front End Challenge

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## THE APP
![image](https://user-images.githubusercontent.com/5979589/112422039-d7b1d780-8d62-11eb-9240-bc47a751cfb9.png)
![image](https://user-images.githubusercontent.com/5979589/112422065-e1d3d600-8d62-11eb-8f6a-eef270d8d813.png)
![image](https://user-images.githubusercontent.com/5979589/112422170-0cbe2a00-8d63-11eb-8e88-c6020e39118a.png)
![image](https://user-images.githubusercontent.com/5979589/112422235-21022700-8d63-11eb-95dd-3ad06c8d22c5.png)



## Behind The Scenes
NON FUNCTIONAL REQUIREMENTS
1. Built with NextJs (webpack included by default) and Material-UI (CSS in JS included)
2. Using Redux for State Management (redux-toolkit). Using createAsyncThunk as async reducer to get API.
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
13. The application supports IE10

FUNCTIONAL REQUIREMENTS
1. There is a search bar to let the user search by username (login name) - DONE
2. While searching, the application shows an animated loading indicator made by CSS (using gif image is not allowed) - DONE
3. After the search is completed, the application shows the list of users along with their avatar and their username on the same page -DONE
4. If the results are not complete in one page, the pagination is shown on the screen - DONE
5. When a list item is clicked, the application is navigated to a new page that display the parsed JSON payload of that user - DONE
6. The new page also has to display the list of the user's repositories, followers and following - DONE
7. The search input does the searching as you type -DONE



More coming up...
