import { createElement } from "../render";

const createTaskList = () => `<div class="board__tasks"></div>`;

export default class TaskList {
    #element = null;
    
    get template() {
        return createTaskList();
    }

    get element() {
        if(!this.#element) {
            this.#element = createElement(this.template);
        }

        return this.#element 
    }

    removeElement() {
        this.#element = null
    }
}