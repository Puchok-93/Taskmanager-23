import { createElement } from "../render";

const createBoardTemplate = () => `<section class="board container"></div>`;

export default class BoardTask {
    #element = null;

    get template() {
        return createBoardTemplate();
    }

    get element() {
        if(!this.#element) {
            this.#element = createElement(this.template)
        }

        return this.#element
    }

    removeElement() {
        this.#element = null;
    }
}