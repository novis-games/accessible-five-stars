import "./css/starability-slot.min.css";

var outputValues = []; 
function createRating(objects, starNumber, document, div) {
    if (document) {
        for (i=0; i < objects.length; i++ ) {
            const obj = objects[i]; 
            const form = document.createElement("form");
            form.id = "accessible-form-" + i;
            const fieldset = document.createElement("fieldset");
            fieldset.id = obj.ref + "-rating";
            fieldset.className="starability-slot"
            const legend = document.createElement("legend");
            legend.style.width = "max-content";
            legend.textContent = "Punteggio " + obj.ref + " (votate: " + obj.value + " su " + starNumber + " stelle):"

            const radioNoRate = document.createElement("input");
            radioNoRate.type = "radio";
            radioNoRate.id = "no-rate" + obj.ref;
            radioNoRate.className = "input-no-rate";
            radioNoRate.name = "rating";
            radioNoRate.value = "0"
            radioNoRate.checked = "true";
            radioNoRate.ariaLabel = "Non votato";

            fieldset.appendChild(legend)
            fieldset.appendChild(radioNoRate);



            for (cont = 1; cont < starNumber + 1; cont++) {
                const radio = document.createElement("input");
                radio.type = "radio";
                radio.id = obj.ref + "-rate" + cont;
                radio.name = "rating";
                radio.value = cont;
                radio.addEventListener("click", function(){
                var json = {}; 
                delete json[obj.objName];
                json[obj.objName] = radio.value; 
                for (ix = 0; ix < outputValues.length; ix++)
                {
                    var jsonTemp = outputValues[ix]; 
                    if (jsonTemp && jsonTemp[obj.objName])
                    {
                        outputValues.splice(ix, 1); 
                    }
                }
                outputValues.push(json); 
                legend.textContent = "Punteggio " + obj.ref + " (votate: " + radio.value + " su " + starNumber + " stelle):" }, false);
                if (objects[i].value == cont) { radio.checked = "true" };

                const label = document.createElement("label");
                label.htmlFor = radio.id;
                label.title = cont + " stelle";
                label.innerText = label.title;
                fieldset.appendChild(radio)
                fieldset.appendChild(label);

            }
            form.appendChild(fieldset);
            div.appendChild(form);
        }
    }
};



exports.createRating = createRating;
exports.outputValues = outputValues;
