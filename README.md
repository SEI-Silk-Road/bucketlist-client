# Bucket List: Keep track of your life's dreams

This application allows the user create a list of the things they have always wants to do and cross them off as they achieve their goals. We wanted to create this application because it was both something we want to use ourselves and because it was something relatively simple that would allow us to create an immersive, seamless user experience.

## Important Links

- [Deployed API](https://gentle-journey-02010.herokuapp.com/)
- [Deployed Client](www.link.com)******

## Planning Story

After talking over our project options as a group, SilkRoad decided to build a bucket list application, both because we thought we would love to use one ourselves, and becasue we thought that the straightforward nature of the app would allow us to flex our UI and styling muscles, making something polished and professional. On this team, Aidan Kenney was the Project and Back-end Lead, Huy Ngyuen was Front-end Lead, and Bryan Braunstein was the Quality Assurance Lead. We started the planning process by looking over CodePens and websites of todo-lists together and talking about what we liked and did not. From there, we broke down how this data would need to be stored in the server and what React components would be involved on the front-end. For almost every line of code in this project, we were mob programming as a team, switching off drivers and navigators as we screen shared over Zoom. Although we made quick progress through the Back-end setup and CRUD features on the Front-end, we had big challenges making an update function that would render immediately in the list without a page refresh. To do this, we ended up switching our code from using Hooks back to React's traditional state/lifecycle method and calling componentDidUpdate to make another GET request to the server. What might have been our biggest challenge came up on our last working day -- Huy created a pagination feature that seemed perfect, until we eventually realized that list items beyond the 1st page would not update their style to cross out the way they would on the first page. After digging deeper, we realized that clicks on the second or third pages were in fact only updating the items from the first page! For a few hours we thought we have broken our application and determiend to revert to an app without pagination, when a few well-placed console logs revealed that Huy's pagination feature had one missing piece -- the index of items on each new page was starting from 0 instead of the item's rightful index in the list array. Huy quickly pieced together an equation that cleanly solved the problem -- add the number of items on the page, multiplied by the page number minus one to the index value, and voila! After hours of frustration and speculation about where we went wrong, we ended the project on a high note.

### User Stories

User Stories:
As an unregistered user, I would like to sign up with email and password.
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.
As a signed in user, I would like to create a bucket list item with a title and description.
As a signed in user, I would like to update my bucket list item's title and description.
As a signed in user, I would like to delete my bucket list item.
As a signed in user, I would like to see all my bucket list items but not other users'.
As a signed in user, I would like to cross off items to complete them.

REACH GOALS
As a signed in user, I would like to log locations see a map of where I have had some of these experiences.
As a signed in user, I'd like to see my "memories", or completed list items, all in one page, with a story or image I've uploaded to go with it.
As a signed in user, I'd like to be able to share some of my list with other site members, and comment on their lists as well.

Integrate with a third-party location-based API to:
  allow users to search for a location or venue to add to their bucket list items.
  autofill an input field.
  drop pins on a map.
Add social features to your site, such as following other users.
Allow users to make certain list items public, but default to private.
Allow users to upload an image when they complete an item.

### Technologies Used

- React.js
- Javascript
- Axios
- HTML/CSS
- Bootstrap

### Unsolved Problems

- While our app is now functioning almost exactly as we want it to, we did come short of some of our lofty reach goals. We were hoping to integrate with a maps API so users could document where they plan to or did reach any of their life goals, but this proved to be something we could not incorporate without compromising the more essential features of our app. We would still like to find a way to add a feature to pin location for list items, and ideally make this application a social site where users can see, comment on, and get inspiration from the bucket lists of others.

## Images

---

#### Wireframe:
![wireframe](https://imgur.com/a/hE7w9S7)
