import { createElement } from "../render";

const createLoadMoreBtnTemplate = () => `<button class="load-more" type="button">load more</button>`;

export default class LoadMoreButton {
    #element = null;

    get template() {
        return createLoadMoreBtnTemplate();
    }

    get element() {
        if(!this.#element) {
            this.#element = createElement(this.template);
        }

        return this.#element
    }

    removeElement() {
        this.#element = null;
    }
}