# Feedback Form

## Description

For this project, I developed an application which collects feedback from a user through a number of forms, displays this feedback, and submits it to a database.

I split up the assignment over several components.  Each component handled a single page of the application.  I also included an admin page which could be accessed via a passphrase on the home page.  The admin page displays all feedback stored in the database in a table.

I used several reducers to store temporary data globally, and had to set up a POST, GET, and DELETE route for the submission and deletion of data and its display on the admin page.

Lastly, I made ample use of routes and the useHistory hook to navigate to different pages.

## Screenshots

## Landing Page

This is what you will see when you first boot up the app.

<img width="949" alt="Screen Shot 2022-03-20 at 2 41 56 PM" src="https://user-images.githubusercontent.com/91631646/159179985-2150388b-b19d-4d77-b66f-a54a3fa8f8cf.png">

## Feeling Page

On this page you will enter a number between 1 and 5 to describe how you are feeling.  It is important to note that you are required to enter a number, but there is no input validation to contrain you between 1 and 5.

<img width="677" alt="Screen Shot 2022-03-20 at 2 42 17 PM" src="https://user-images.githubusercontent.com/91631646/159180025-bbb58609-e55b-4d5f-b39d-d79c92ad0c6d.png">

## Understanding Page

Same as the previous page, but for comprehension of content.  You can also go back to change your previous answer.

<img width="713" alt="Screen Shot 2022-03-20 at 2 42 26 PM" src="https://user-images.githubusercontent.com/91631646/159181480-4fd0eb75-ba54-459c-bfa2-7bb9c584d648.png">
