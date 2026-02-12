import { categories } from "../../data/categories.js";

function cardTemplate(category) {
  return `
    <a
      class="category-card"
      href="${category.href}"
      style="background-image: url('${category.image}')"
    >
      <span>${category.title}</span>
    </a>
  `;
}

export function initCategoryGrid(container) {
  container.innerHTML = categories.map(cardTemplate).join("");
}
