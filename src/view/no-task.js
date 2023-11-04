import { createElement } from "../render";


const createNoTaskTemplate = () => `<p class="board__no-tasks">Click «ADD NEW TASK» in menu to create your first task</p>`;

export default class NoTask {
    #element = null;

    get template() {
        return createNoTaskTemplate();
    }

    get element() {
        if(!this.#element) {
            this.#element = createElement(this.template);
        }

        return this.#element
    }
}