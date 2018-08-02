# OpenIdea-frontend
Full stack web app made by Niksseif 
Front end link https://github.com/niksseif/OpenIdea-frontend
# Description 
People have lots of ideas all the time and maybe they write them in their diary, on a piece of paper, a notebook, their notes app, all of the above or like most people they forget to note it anywhere and find it hard to recollect or find it when the time comes to act on it or share it with someone. What good is an idea if you can’t share it or do something with it. I want to create an online place for people to document, share and collaborate on ideas openly.
# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
# Prerequisites
brew install postgresql
brew install node
brew install heroku

# Installing
git clone https://github.com/niksseif/OpenIdea
npm i
createdb openIdea_dv
knex migrate:latest
knex seed:run
heroku local
open http://localhost:3000

# Built With
React for the front-end https://github.com/niksseif/OpenIdea-frontend.
React_Bootstrap - The frontend framework used.
npm - Dependency Management
Knex - Used to generate database and backend structure.
Postgress - Used for the data base

# License
This project is licensed under the MIT License - see the LICENSE.md file for details

