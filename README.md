# Generation Challenge

This project uses to place Generation stores in Mexico City and create a list of favorites Stores. It is built with React and Google Maps API.

### Features
- The student is able to see a map of Mexico City
- The student is able to see the stores (represented as markers) on the map. The location data was given with address (e.g: BOULEVARD MANUEL AVILA CAMACHO NO. 491 COL. PERIODISTAS C.P.11220"), so they needed to be converted into coords (latitude and longitude) by the use of Google Maps Geocoding API.
Note: Not all the addresses could have been converted automatically, for a later phase the rest of address will be added to the map. Also, the Google Maps Geocoding API, had a limited query per time, so the addresses data has been converted into coords by chunks.
- The student is able to click on a store's marker. And this will be added to a list of 'My Favorite Stores'. This list of favorites store can be shown or hidden by clicking on the button "Show/Hide Favorite Stores".
- The design is responsive, and adaptable to the screen of the device used.


#### Run the project

```
> git clone git@github.com:josepotal/generation-challenge.git
> cd generation-challenge
> yarn
> npm start
```

#### Screenshots
- Initial visualization

![generation-home](https://user-images.githubusercontent.com/9560093/32592277-a77c095a-c4e8-11e7-904f-e9baaaa7d295.png)

- Info window on hover

![generation-info-window](https://user-images.githubusercontent.com/9560093/32592282-ab1bf4c6-c4e8-11e7-9b36-2aeb41e2f148.png)

- Favorites list

![generation-fav-list](https://user-images.githubusercontent.com/9560093/32592280-a9ee786c-c4e8-11e7-9067-ca614c28a397.png)

- Mobile device visualization

![generation-xs](https://user-images.githubusercontent.com/9560093/32592278-a7990712-c4e8-11e7-8fa9-ecfa73803693.png)
