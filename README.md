# Message-BoardMessageboard
============

A simple message board application that allows users to post and view messages. The messages are fetched from an API and displayed in text balloons. The user's name is stored locally in the browser using local storage.

Built With
----------

-   JavaScript
-   HTML
-   CSS
-   NES.css (for styling)
-   Fetch API (for fetching and posting messages)
-   Local Storage (for storing user's name)

Functionality
-------------

-   User can enter their name and message and post it by clicking on the "Send Message" button.
-   User can view all messages by clicking on the "Load Messages" button.
-   If the user's name is not stored in local storage, a dialog will appear to prompt for the user's name.
-   The messages are fetched from the API and displayed in text balloons.

Usage
-----

1.  Clone the repository: `git clone https://github.com/<repository-url>.git`
2.  Open `index.html` in a web browser.
3.  Enter the user's name if prompted.
4.  Enter the message and click on the "Send Message" button to post the message.
5.  Click on the "Load Messages" button to view all messages.

API
---

The API used in this project is hosted on `https://messages-fa82.onrender.com/api/messages` and has the following endpoints:

-   `GET /api/messages` - Retrieves all messages
-   `POST /api/messages/create` - Creates a new message. The request body should contain a JSON object with two properties `name` and `content`.





https://user-images.githubusercontent.com/111490358/216100107-17e907e0-a216-48d3-ba92-5c105728c29a.mp4


