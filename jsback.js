function validerFormulaire() {
  let titre = document.getElementById("title").value;
  let destination = document.getElementById("des").value;
  let date_de_depart = new Date(document.getElementById("departure").value);
  let date_de_retour = new Date(document.getElementById("return").value);
  let prix = parseFloat(document.getElementById("price").value);

  if (titre.length < 3) {
    alert("the title must contain at least 3 characters.");
    return false;
  }
  for (let i = 0; i < destination.length; i++) {
    if (
      !(destination[i] <= "z" && destination[i] >= "a") ||
      (destination[i] >= "A" && destination[i] <= "Z") ||
      destination[i] == " "
    ) {
      alert("destination must contain only letters and spaces");
      return false;
    }
  }
  if (destination.length < 3) {
    alert("destination must contain at least 3 characters");
    return false;
  }
  if (date_de_retour <= date_de_depart) {
    alert("The return date must be later than the departure date.");
    return false;
  }
  
  if (isNaN(prix) || prix <= 0) {
    alert("price should be a positif number");
    return false;
  }
  alert("the form is valid");
  return true;
}

