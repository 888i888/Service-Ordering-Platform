//menu
function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

//review
document.querySelectorAll(".delete-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const review = this.parentElement;
    review.remove();
  });
});

//Add review
document.getElementById("reviewForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const reviewText = document.getElementById("reviewText").value;
  const reviewName = document.getElementById("reviewName").value;

  const newReview = document.createElement("div");
  newReview.classList.add("review");
  newReview.innerHTML = `"${reviewText}" - ${reviewName} <button class="delete-btn">Delete</button>`;
  document.querySelector("#reviews").appendChild(newReview);

  newReview.querySelector(".delete-btn").addEventListener("click", function () {
    const review = this.parentElement;
    review.remove();
  });

  document.getElementById("reviewForm").reset();
});

document
  .getElementById("addServiceForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const newService = document.getElementById("newService").value;
    const userName = document.getElementById("userName").value;
    const userContact = document.getElementById("userContact").value;

    const serviceList = document.getElementById("serviceList");

    const newServiceElement = document.createElement("div");
    newServiceElement.classList.add("service");

    newServiceElement.innerHTML = `
        <button class="serv">${newService}</button>
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Contact:</strong> ${userContact}</p>
        <button class="delete-btn">Delete</button>
    `;

    serviceList.appendChild(newServiceElement);
    document.getElementById("newService").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("userContact").value = "";

    newServiceElement
      .querySelector(".delete-btn")
      .addEventListener("click", function () {
        newServiceElement.remove();
      });
  });

