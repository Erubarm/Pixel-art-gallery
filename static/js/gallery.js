document.addEventListener("DOMContentLoaded", function () {
  fetch("/gallery")
    .then((response) => response.json())
    .then((data) => {
      const galleryList = document.getElementById("gallery-list");
      data.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.setAttribute("data-id", item.id);
        listItem.innerHTML = `
                      <img src="${item.image}" alt="${item.name}">
                      <div class="overlay">
                          <span class="text">${item.name}</span>
                          <button class="heart">❤️</button>
                      </div>
                  `;
        listItem.addEventListener("click", function () {
          window.location.href = `gallery-item.html?id=${item.id}`;
        });
        galleryList.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Ошибка:", error));
});
