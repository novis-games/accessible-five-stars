# accessible-five-stars
A five star component accessible via screen readers


# installation 

npm i accessible-five-stars

# add css (starability-slot)

- vue/cordova - index.html : require('../node_modules/accessible-five-stars/css/starability-slot.min.css'); 


# importing package: 

- import (Vue) : import starRating from "accessible-five-stars";


# usage: 

- creating star radio buttons: 

  mounted() {
    starRating.createRating(
      [
        {
          ref: "globale", /*PREFIX FOR IDS*/
          value: this.review.globalRating /*INITIAL VALUE*/,
          objName: "review.globalRating" /*PARENT OBJECT NAME TO BE UPDATED*/,
        },
        {
          ref: "accessibilità",
          value: this.review.accessibilityRating,
          objName: "review.accessibilityRating",
        },
        {
          ref: "gameplay",
          value: this.review.gameplayRating,
          objName: "review.gameplayRating",
        },
      ],
      5,
      document, /*PARENT DOCUMENT OBJECT*/
      document.getElementById("accessible-div") /*PARENT DIV TO BE INJECTED WITH ELEMENTS*/
    );
  },

