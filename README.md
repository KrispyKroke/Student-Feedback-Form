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

## Support Page

Nearly identical to the two previous pages, but for support.

<img width="772" alt="Screen Shot 2022-03-20 at 2 43 33 PM" src="https://user-images.githubusercontent.com/91631646/159183005-f8261d25-2278-449e-85dc-cdcc42cc108e.png">

## Comments

Although the field is optional, you can enter any additional comments here.

<img width="699" alt="Screen Shot 2022-03-20 at 2 43 44 PM" src="https://user-images.githubusercontent.com/91631646/159183608-6fd087b4-c7c5-4962-bb98-5e08b38059c2.png">

## Review

Here you can see all of your feedback and submit it if it looks good.

<img width="773" alt="Screen Shot 2022-03-20 at 2 43 52 PM" src="https://user-images.githubusercontent.com/91631646/159183690-c12906c9-e261-4f4c-8574-26e147ac34a3.png">

## Thank You Page

After you confirm your feedback, the app thanks you and allows you to submit new feedback.

<img width="638" alt="Screen Shot 2022-03-20 at 2 44 02 PM" src="https://user-images.githubusercontent.com/91631646/159183855-37f131ce-be52-4e90-b9a0-eaddf8703002.png">

## Admin View

If you have the right credentials (password is 'KrispyKroke'), you can see a table of all feedback submitted and stored in your database.  It should be noted that navigating to the /admin route manually through the url will show this table as well.

<img width="942" alt="Screen Shot 2022-03-20 at 3 07 24 PM" src="https://user-images.githubusercontent.com/91631646/159183955-77ae0525-544d-43fe-b8b8-e5f42a6972b4.png">

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Installation

1. Fork the repository and clone it to your machine.
2. Create a database in Postico called `prime_feedback`.
3. Insert the queries from the data.sql file and run them to populate the database.
4. Open up your terminal, navigate to the project folder, and run an `npm install`.
5. Start your server with `npm run server`.
6. Start up your client with `npm run client`.
7. Navigate to localhost:3000 if you have not automatically.

## Usage

1. When you boot up the app, click begin to start the form.
2. Enter a number between 1 and 5 for the first 3 forms.  
3. You can also go back to previous forms if you wish.  Otherwise, just click the 'Next' button to navigate through the forms.
4. On the comments form, you may leave a comment if you wish.  You may also leave it blank.
5. After you move past the comments form, you will be able to review your feedback.
6. After submitting the feedback to your database, you can leave new feedback by clicking the appropriate button.
7. Lastly, on the landing page, you can navigate to the admin view if you enter the password 'KrispyKroke' in the input box at the bottom left of the screen.
8. On this page, you will be able to view all feedback stored in your database, with the option to delete feedback if you wish.

## Built With

- React
- Redux
- SQL
- Express
- Javascript
- CSS

## Support

If you have suggestions or issues, feel free to contact me at jared.kroke@gmail.com.
