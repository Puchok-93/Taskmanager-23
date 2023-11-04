import { createElement } from "../render";
import { humanizeTaskDueDate, isTaskExpire, isTaskRepeating} from "../utils";

const createTaskTemplate = (task) => {

    // Деструктурируем получаемый объект
    const {color, description, dueDate, repeating, isArchive, isFavorite} = task;

    // Если передаваемая дата не null, преобразуем дату в человекопонятный формат
    const humanizeDate = dueDate != null ? humanizeTaskDueDate(dueDate) : '';

    // Если задача просрочена, добавляем класс deadline
    const deadlineClass = isTaskExpire(dueDate) ? 'card--deadline' : '';

    // 
    const repeatClass = isTaskRepeating(repeating) ? 'card--repeat' : '';

    // Если задача в архиве, добавляем класс кнопке 
    const isArchiveClass = isArchive ? 'card__btn--archive card__btn--disabled' : 'card__btn--archive';

     // Если задача в избранном добавляем класс кнопке 
    const isFavoriteClass = isFavorite ? 'card__btn--favorites card__btn--disabled' : 'card__btn--favorites';

    return (
        `<article class="card card--${color} ${deadlineClass} ${repeatClass}">
            <div class="card__form">
                <div class="card__inner">
                    <div class="card__control">
                        <button type="button" class="card__btn card__btn--edit">
                            edit
                        </button>
                        <button type="button" class="card__btn ${isArchiveClass}">
                            archive
                        </button>
                        <button type="button" class="card__btn ${isFavoriteClass}">
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
                            ${description}
                        </p>
                    </div>

                    <div class="card__settings">
                        <div class="card__details">
                            <div class="card__dates">
                            <div class="card__date-deadline">
                                <p class="card__input-deadline-wrap">
                                <span class="card__date">${humanizeDate}</span>
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>`
    )
};

export default class Task {
    #element = null;
    #task = null;

    constructor(task) {
        this.#task = task;
    };

    get template() {
        return createTaskTemplate(this.#task);
    }

    get element() {
        if(!this.#element) {
            this.#element = createElement(this.template);
        }

        return this.#element;
    }

    removeElement() {
        this.#element = null;
    }
}
