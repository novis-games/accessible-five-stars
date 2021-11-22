
function createRating(objects, starNumber, ref, document) {
    if (document) {
        htmlOut = document.createElement("div");
        console.log("HTML OUT")

        var i = 1;
        for (obj in objects) {
            const form = document.createElement("form");
            form.id = "accessible-form-" + i;
            const fieldset = document.createElement("fieldset");
            fieldset.id = ref + "rating";
            const legend = document.createElement("legend");
            legend.style.width = "max-content";
            legend.textContent = "Punteggio " + ref + " (votate:" + obj + " su " + starNumber + " stelle):"
            const radioNoRate = document.createElement("input");
            radioNoRate.type = "radio";
            radioNoRate.id = "no-rate" + ref;
            radioNoRate.className = "input-no-rate";
            radioNoRate.name = "rating";
            radioNoRate.value = "0"
            radioNoRate.checked = "true";
            radioNoRate.ariaLabel = "Non votato";

            fieldset.appendChild(radioNoRate);


            for (cont = 1; cont < starNumber + 1; cont++) {
                const radio = document.createElement("input");
                radio.type = "radio";
                radio.id = ref + "-rate" + cont;
                radio.className = "input-no-rate";
                radio.name = "rating";
                radio.value = cont;
                radio.onclick = function () { objects[i] = cont; };
                if (objects[i] == cont) { radio.checked = "true" };

                const label = document.createElement("label");
                label.htmlFor = radio.id;
                label.title = cont + "stelle";
                label.innerText = label.title;
                fieldset.appendChild(radio)
                fieldset.appendChild(label);

            }
            form.appendChild(fieldset);
            htmlOut.appendChild(form);
            i++;
        }
    }
};

exports.createRating = createRating;
