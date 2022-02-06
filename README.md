# Feedback Form

## Description

For this project, I developed an application which collects feedback from a user through a number of forms, displays this feedback, and submits it to a database.

I split up the assignment over several components.  Each component handled a single page of the application.  I also included an admin page which could be accessed via a passphrase on the home page.  The admin page displays all feedback stored in the database in a table.

I used several reducers to store temporary data globally, and had to set up a POST, GET, and DELETE route for the submission and deletion of data and its display on the admin page.

Lastly, I made ample use of routes and the useHistory hook to navigate to different pages.


