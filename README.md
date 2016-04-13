# Project Description

An app that will display questions from a JSON state object and let you answer 1 by 1 and show the results at the end.

# What You Will Learn

* How to work with and set states
* How to map through state objects
* How to use conditionals to output correct groups

# Installing and Running

Before running the following commands, make sure you have navigated into the project root directory first:

    $ cd react-quick-quiz-app

Install the `npm` modules:

    $ npm install

Run on a local server with `webpack-dev-server`:

    $ webpack-dev-server --port 8080     # feel free to modify

*The above command is the recommended way to run the application locally, since the repo does not contain the actual `public/js/main.js` file.*

That being said, you can run it using npm's `http-server`, but make sure that:

* you have actually transpiled the `public/js/main.js` file and have it written into the directory (instead of the files temporarily stored on the `webpack-dev-server`):

    ```
    $ webpack
    ```

* and that the server is run from the root directory, not the `public` directory (by default):

    ```
    $ npm install http-server        # if it isn't installed yet
                                     # (add -g parameter for global installation)

    $ http-server . -p 8080          # feel free to modify options as appropriate
    ```

In either cases, your application will now then be available at <http://localhost:8080/public>.
