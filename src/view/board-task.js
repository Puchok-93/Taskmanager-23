import { createElement } from "../render";

const boardTask = () => `<section class="board container"></div>`;

export default class BoardTask {
    getTemplate() {
        return boardTask();
    }

    getElement() {
        if(!this.element) {
            this.element = createElement(this.getTemplate())
        }

        return this.element
    }

    removeElement() {
        this.element = null;
    }
}