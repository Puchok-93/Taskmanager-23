import { createElement } from "../render";

const taskTemplate = () => `
    <article class="card">
        <div class="card__form">
        <div class="card__inner">
            <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
                edit
            </button>
            <button type="button" class="card__btn card__btn--archive">
                archive
            </button>
            <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
            >
                favorites
            </button>
            </div>

            <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
            </svg>
            </div>

            <div class="card__textarea-wrap">
            <p class="card__text">
                Example task which marked as favorite.
            </p>
            </div>

            <div class="card__settings">
            <div class="card__details">
                <div class="card__dates">
                <div class="card__date-deadline">
                    <p class="card__input-deadline-wrap">
                    <span class="card__date">23 September</span>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </article>
`;

export default class Task {
    getTemplate() {
        return taskTemplate();
    }

    getElement() {
        if(!this.element) {
            this.element = createElement(this.getTemplate());
        }

        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}