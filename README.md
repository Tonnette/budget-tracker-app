# budget-tracker-app

In this app the user is able to add expenses and deposits to their budget with or without an internet connection. When entering transactions offline, they can populate the total when brought back online.

Offline Functionality:

  * Enter deposits offline

  * Enter expenses offline

When brought back online:

  * Offline entries are added to the tracker.


  # This App is a Progressive Web App
A progressive web app (PWA) is a website that looks and behaves as if it is a mobile app. PWAs are built to take advantage of native mobile device features, without requiring the end user to visit an app store, make a purchase and download software locally. 

To do this I:

  * Created an app manifest.

  * installed a service worker.

  * Cached the files and enabled functionality of the app online and offline.

  * Made this app so that the user can download it.


  # Tech/framework used
This particular app was built using Mongo database with a Mongoose schema with handling routes via Express. It was deployed via Heroku.

The front end was built using html, CSS, JavaScript, and the Bootstrap framework.

The code has been minified/compressed using:
[JSCompress](https://jscompress.com/)

I created a manifest.webmanifest and this App utilizes Service Worker and Cache APIs to cache assets and API responses to ensure it will work without an internet connection.


# Screen Shots
![ScreenShot](https://github.com/Tonnette/budget-tracker-app/blob/master/screenshots/Budget.png)

![ScreenShot](https://github.com/Tonnette/budget-tracker-app/blob/master/screenshots/PWA.png)

# Deployed App
https://ton-budget-app.herokuapp.com/

# github repo
https://github.com/Tonnette/budget-tracker-app

## User Story
AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling 

## Business Context

Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

# contributors
Tonnette Stanford

# Author
Tonnette Stanford

# Licence
There is no licence and this website is open source.