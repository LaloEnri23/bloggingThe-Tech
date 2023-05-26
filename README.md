# bloggingThe-Tech

A CMS-style blog site where developers can publish their blog posts and comment on other developers' posts. This application follows the MVC paradigm and utilizes Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Description

Writing about tech is an essential part of the development process. This CMS-style blog site enables developers to share their thoughts, opinions, and articles with others in the tech community. The application allows users to create an account, log in, create and publish blog posts, comment on posts by other developers, and manage their own posts.

## User Story

```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

- The homepage displays existing blog posts (if any) along with navigation links for the homepage and the dashboard, as well as an option to log in.
- Clicking on the homepage link takes the user to the homepage.
- Clicking on any other navigation links prompts the user to sign up or sign in.
- Signing up requires providing a username and password.
- Clicking on the sign-up button saves the user credentials and logs the user into the site.
- Returning to the site and choosing to sign in prompts the user to enter their username and password.
- Once signed in, the user sees navigation links for the homepage, the dashboard, and the option to log out.
- Clicking on the homepage link in the navigation takes the user to the homepage, displaying existing blog posts with their titles and creation dates.
- Clicking on an existing blog post displays the post's title, contents, creator's username, and creation date, along with the option to leave a comment.
- Entering a comment and submitting it saves the comment, updates the post to display the comment, the comment creator's username, and the date created.
- Clicking on the dashboard link in the navigation takes the user to their dashboard, showing their existing blog posts and the option to add a new blog post.
- Clicking on the button to add a new blog post prompts the user to enter a title and contents for the post.
- Clicking on the button to create a new blog post saves the post's title and contents, and redirects the user to the updated dashboard with the new blog post.
- Clicking on one of the user's existing posts in the dashboard allows them to delete or update the post, and redirects them to the updated dashboard.
- Clicking on the logout option in the navigation signs the user out of the site.
If the user is idle on the site for a set time, they can still view comments but need to log in again before adding, updating, or deleting comments.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run the following command to install the required dependencies:
```
npm install
```

## Usage

1. Set up the database by running the provided SQL scripts.
2. Configure the application by updating the configuration files with your database credentials and any other necessary settings.
3. Run the following command to start the application:
```
npm start
```

4. Open your web browser and visit http://localhost:3000 to access the CMS-style blog site.


## Technologies

- Handlebars.js - Templating language
- Sequelize - Object-Relational Mapping (ORM)
- Express.js - Web application framework
- express-session - Session middleware for authentication

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or enhancement.
- Make your changes and commit them.
- Push your changes to your forked repository.
- Submit a pull request describing your changes.

## License
This project is licensed under the MIT License.