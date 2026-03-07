// Task05: Todo List + delete the items

const list = document.getElementById("list");
const btnAdd = document.getElementById("add-btn");
const input = document.getElementById("item-input");

// Default message
list.innerHTML = "You dont have any item yet !";

function addItem() {
  const value = input.value;

  if (value !== "") {
    if (list.innerHTML === "You dont have any item yet !") {
      list.innerHTML = "";
    }

    const li = document.createElement("li");

    li.innerHTML = `
      <div><i class="ri-check-line"></i> ${value}</div>
      <button class="delet-btn">
        <i class="ri-delete-bin-7-line"></i>
      </button>
    `;

    list.appendChild(li);

    const deletBtn = li.querySelector(".delet-btn");

    deletBtn.addEventListener("click", () => {
      li.remove();
    });
  }
}

btnAdd.addEventListener("click", addItem);
