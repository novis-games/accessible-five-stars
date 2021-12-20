# accessible-five-stars
A five star component accessible via screen readers


# installation 

npm i accessible-five-stars

# add css (starability-slot)

- vue/cordova 
   index.html : 
    ```javascript
      require('../node_modules/accessible-five-stars/css/starability-slot.min.css'); 
     ```


# importing package: 

- import (Vue.js) : 
 ```javascript
import starRating from "accessible-five-stars" /**/;
```

- import (basic html/js project with node_modules folder): 
 ```html
    <script type='application/javascript' src='node_modules/three/build/three.js'></script>
 ```


# usage: 

- creating star radio buttons: 
```javascript
  mounted() {
    starRating.createRating(
      [
        {
          ref: "x", /*PREFIX FOR IDS*/
          value: this.object.x /*INITIAL VALUE*/,
          objName: "object.x" /*PARENT OBJECT NAME TO BE UPDATED*/,
        },
        {
          ref: "y",
          value: this.object.y,
          objName: "object.y",
        },
        {
          ref: "z",
          value: this.object.z,
          objName: "object.z",
        },
      ],
      5,
      document, /*PARENT DOCUMENT OBJECT*/
      document.getElementById("accessible-div") /*PARENT DIV TO BE INJECTED WITH ELEMENTS*/
    );
  },
```



- updating value content (manual re-bind to call whenever you want): 
```javascript
     try {
          var outputValues = starRating.outputValues;
          for (ix = 0; ix < outputValues.length; ix++) {
            var jsonVal = outputValues[ix];
            if (jsonVal["object.x"]) {
              this.object.x =
                jsonVal["object.x"];
            }
            if (jsonVal["object.y"]) {
              this.object.y =
                jsonVal["object.y"];
            }

            if (jsonVal["object.x"]) {
              this.object.z =
                jsonVal["object.z"];
            }
          }
        } catch (error) {}

```

