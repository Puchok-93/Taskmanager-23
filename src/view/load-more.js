import { createElement } from "../render";

const loadMoreBtnTemplate = () => `<button class="load-more" type="button">load more</button>`;

export default class LoadMoreButton {
    getTemplate() {
        return loadMoreBtnTemplate();
    }

    getElement() {
        if(!this.element) {
            this.element = createElement(this.getTemplate());
        }

        return this.element
    }

    removeElement() {
        this.element = null;
    }
}