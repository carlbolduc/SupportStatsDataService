## Description

REST service to store and retrieve stats about my support team performance. A stat can represent the minimum and maximum number of cases opened for a given day:

- totally;
- for a specific support expert;
- for a specific account.

## Requirements

This REST service requires the following [Node.js](http://nodejs.org/) dependencies:

- [express](http://expressjs.com/)
- [mongoose](http://mongoosejs.com/)
- [EJS](http://embeddedjs.com/)

Before running the service, install the dependencies with the following command:

    npm install

Beside [Node.js](http://nodejs.org/) dependencies, a [mongoDB](http://www.mongodb.org/) server is also required to store the data.