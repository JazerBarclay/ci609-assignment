# CI609 Assignment - Zap App

## Project Description
A research team studying threats to Pangolins in the wild commissions you to develop a mobile-optimised progressive web application to record Pangolin sightings and mortalities.

Pangolins are the world’s most trafficked mammal and are threatened solely by human impacts. In addition to tracking and poaching, many pangolins in Africa face the risk of being killed on roads and by electric fences. The app should enable game rangers and local communities across Southern Africa to log pangolin sightings and mortalities, enabling the research team to study these threats.

This app should allow users to take a picture or select one from the gallery and select whether they have seen the Pangolin alive or dead. If dead, users should select the type of mortality (fence death: electrocution; fence death: caught on non-electrified fence; road death; other). Users also should have an option to add additional notes, such as fence or road type. The app should automatically pick up the user's location and submit it together with the recorded information. 

As user may be in remote areas with no signal when they encounter pangolins, the app should provide key functionality offline. It should be able to store information locally and upload that information later when they have an internet connection. 

A client-server solution involving a REST API is preferred to allow other organisations to develop their own client applications against the system.

Related links:
* https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
* https://developers.google.com/web/fundamentals/media/capturing-images
* https://developer.mozilla.org/en-US/docs/Web/API/Navigator/Online_and_offline_events

## Key notes:
* Mobile optimised
* Progressive web app (PWA)
* Record/log pangolin sightings and mortalities (all sightings dead or alive)
* Allow users to take a picture or select one from the gallery
* Select whether they have seen the Pangolin alive or dead
* Users should select the type of mortality
* Options: fence death: electrocution; fence death: caught on non-electrified fence; road death; other
* Option to add additional notes, such as fence or road type
* Automatically pick up the user's location and submit it together with the recorded information
* App should provide key functionality offline
* Store information locally and upload that information later when they have an internet connection

## Plan
* Use [react](https://reactjs.org/) for PWA
* Use express for API as remote store
* Use sql for database storage on server
* Needs access to location (gps), camera (photo), gallery (images), gyroscope (direction), exif data (metadata) and local storage (offline mode).

1. Start by creating a simple web app using react to interact with the user
2. Add minimal functionality to track all points of interest interacting with device such as camera, gps, gyroscope, local storage, etc..
3. Plan design for storage to the API and database layout
4. 