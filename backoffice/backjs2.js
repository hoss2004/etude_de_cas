const form = document.getElementById("form");
const titre = document.getElementById("title");
const destination = document.getElementById("des");

const prix = document.getElementById("price");
const title_error = document.getElementById("title_error");
const des_error = document.getElementById("des_error");
const depart_error = document.getElementById("departure_error");
const return_error = document.getElementById("return_error");
const price_error = document.getElementById("price_error");
document.addEventListener("DOMContentLoaded", function () {
  titre.addEventListener("keyup", function (e) {
    if (titre.value.length < 3) {
      e.preventDefault();
      title_error.innerHTML = "The title must contain at least 3 characters.";
      title_error.style.color = "red";
    } else {
      title_error.innerHTML = "correct.";
      title_error.style.color = "green";
    }
  });

  destination.addEventListener("keyup", function (e) {
    let destination_test = /^[A-Za-z\s]{3,}$/;
    if (!destination_test.test(destination.value)) {
      e.preventDefault();
      des_error.innerHTML =
        "The destination must contain only letters and at least 3 characters.";
      des_error.style.color = "red";
    } else {
      des_error.innerHTML = "correct";
      des_error.style.color = "green";
    }
  });
  form.addEventListener("keyup", function (e) {
    const date_de_depart = new Date(document.getElementById("departure").value);
    const date_de_retour = new Date(document.getElementById("return").value);
    if (date_de_depart && date_de_retour) {
      if (date_de_depart >= date_de_retour) {
        e.preventDefault();
        depart_error = this.innerHTML = "Please select valid dates.";
        return_error = this.innerHTML = "Please select valid dates.";
        depart_error.style.color = "red";
        return_error.style.color = "red";
      }
    } else {
      depart_error = this.innerHTML = "correct";
      return_error = this.innerHTML = "correct";
      depart_error.style.color = "green";
      return_error.style.color = "green";
    }
  });
  prix.addEventListener("keyup", function (e) {
    if (isNaN(parsefloat(prix.value)) || prix.value <= 0) {
      e.preventDefault();
      price_error.innerHTML = "The price must be a positive number.";
      price_error.style.color = "red";
    } else {
      price_error.innerHTML = "correct";
      price_error.style.color = "green";
    }
  });
});
