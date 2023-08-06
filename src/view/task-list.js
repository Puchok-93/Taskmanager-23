import { createElement } from "../render";

const taskList = () => `<div class="board__tasks"></div>`;

export default class TaskList {
    getTemplate() {
        return taskList();
    }

    getElement() {
        if(!this.element) {
            this.element = createElement(this.getTemplate());
        }

        return this.element 
    }

    removeElement() {
        this.element = null
    }
}