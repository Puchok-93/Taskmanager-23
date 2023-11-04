import {createElement} from '../render.js';

const createSortingTemplate = () => `        
<div class="board__sort-list">
    <a href="#" class="board__sort-item">SORT BY DEFAULT</a>
    <a href="#" class="board__sort-item">SORT BY DATE up</a>
    <a href="#" class="board__sort-item">SORT BY DATE down</a>
</div>`;

export default class Sorting {
    #element = null;
    
    get template() {
        return createSortingTemplate()
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