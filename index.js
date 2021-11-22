

function createTable(objects, starNumber, ref)
{
    var i = 1; 
for (obj in objects)
{
    const form = document.createElement("form"); 
    form.id = "accessible-form-" + i;
    const fieldset = document.createElement("div");
    fieldset.id=ref+"rating"; 
    const legend = document.createElement("legend"); 
    legend.style.width = "max-content"; 
    legend.textContent = "Punteggio " +ref+ " (votate:"+obj+" su " + starNumber + " stelle):"
    const radioNoRate = document.createElement("input"); 
    radioNoRate.type= "radio"; 
    radioNoRate.id="no-rate"+ref; 
    radioNoRate.className = "input-no-rate"; 
    radioNoRate.name="rating"; 
    radioNoRate.value="0"
    radioNoRate.checked = "true"; 
    radioNoRate.ariaLabel = "Non votato"; 

    fieldset.appendChild(radioNoRate); 


    for (cont = 1; cont < starNumber +1; cont++ )
    {
        const radio = document.createElement("input"); 
        radio.type= "radio"; 
        radio.id=ref+"-rate"+cont; 
        radio.className = "input-no-rate"; 
        radio.name="rating"; 
        radio.value=cont; 
        radio.onclick=function () {objects[i]=cont;}; 
        if (objects[i]==cont)
        {radio.checked="true"}; 

        const label = document.createElement("label"); 
        label.htmlFor=radio.id; 
        label.title = cont + "stelle"; 
        label.innerText= label.title; 
        fieldset.appendChild(radio)
        fieldset.appendChild(label); 
      
    }
    form.appendChild(fieldset); 
    document.appendChild(form); 
    i++; 
}
}; 

/*<form>
<fieldset id="accessibility-rating" class="starability-slot">
  <legend width="max-content">
    Punteggio accessibilità (votate:
    {{ review.accessibilityRating }} stelle):
  </legend>
  <input
    type="radio"
    id="no-rate-accessibility"
    class="input-no-rate"
    name="rating"
    value="0"
    checked
    aria-label="Non votato"
  />
  <input
    type="radio"
    @click="review.accessibilityRating = 1"
    :checked="review.accessibilityRating == 1"
    id="second-rate1"
    name="rating"
    value="1"
  />
  <label for="accessibility-rate1" title="1 stella">1 stella</label>
  <input
    type="radio"
    @click="review.accessibilityRating = 2"
    :checked="review.accessibilityRating == 2"
    id="accessibility-rate2"
    name="rating"
    value="2"
  />
  <label for="accessibility-rate2" title="2 stelle">2 stelle</label>
  <input
    type="radio"
    @click="review.accessibilityRating = 3"
    :checked="review.accessibilityRating == 3"
    id="accessibility-rate3"
    name="rating"
    value="3"
  />
  <label for="accessibility-rate3" title="3 stelle">3 stelle</label>
  <input
    type="radio"
    @click="review.accessibilityRating = 4"
    :checked="review.accessibilityRating == 4"
    id="accessibility-rate4"
    name="rating"
    value="4"
  />
  <label for="accessibility-rate4" title="4 stelle">4 stelle</label>
  <input
    type="radio"
    @click="review.accessibilityRating = 5"
    :checked="review.accessibilityRating == 5"
    id="accessibility-rate5"
    name="rating"
    value="5"
  />
  <label for="accessibility-rate5" title="5 stelle">5 stelle</label>
</fieldset>
</form> */



