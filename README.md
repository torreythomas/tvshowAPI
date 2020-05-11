# TV API

## Description

The TV API was created to be provide the TV-show project's front-end with dynamic information. The API was built with CRUD functionalities, allowing user's to have the ability to manipulate the data and interact with it.

The TV API allows access to multiple properties of each show and their summaries to give users information on these shows rendered in the front-end.

## Example 
![Screen Shot 2020-05-11 at 1 33 04 PM](https://user-images.githubusercontent.com/62629275/81592447-fba73d00-938b-11ea-8fc7-fd5fdba11c79.png)

## Route Documentation

### Show Routes

* Index: Access to all shows can be acheived using the 'get' method.
    * / - returns all specified shows.

* Create: New shows can be created with the 'post' method.
    * / - returns a brand new show with the information specified in the body of the request.

* Show: Single shows can be returned when searched by a specified show name using the 'get' method.
    * /shows:name - returns a show by a specified name.


* Update: shows can be updated using the 'put' method by entering a new name.
    * /shows:name - returns a show by a specified name.

* Destroy: shows can be 'destroyed' using the 'delete' method by name.
    * /shows:name - returns a show by a specified name.


### Summary Routes

* Index: Access to all summaries can be acheived using the 'get' method.
    * / - returns all specified summaries.

* Create: New summaries can be created with the 'post' method.
    * / - returns a brand new summary with the information specified in the body of the request.

* summary: Single summaries can be returned when searched by a specified summary name using the 'get' method.
    * /summaries:name - returns a summary by a specified name.


* Update: summaries can be updated using the 'put' method by entering a new name.
    * /summaries:name - returns a summary by a specified name.

* Destroy: summaries can be 'destroyed' using the 'delete' method by name.
    * /summaries:name - returns a summary by a specified name.


## Build and Deployment Tools

* [Node.js](https://nodejs.org/en/)
* [Mongoose](https://mongoosejs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongo Atlas](https://www.mongodb.com/cloud/atlas)
* [Express](https://expressjs.com/)
* [Heroku](https://heroku.com)



## Installation Instructions

* Fork the repository
* Clone the forked repo to your local repo
* Utilize npm install to download dependencies
* Open the cloned down repo in a text editor
* Have Fun. 


## Version
 
Version 1.0.0

## Creator Information

* Torrey Thomas 
* [LinkedIn](https://www.linkedin.com/in/torreyct/)
* [Github](https://github.com/torreythomas)