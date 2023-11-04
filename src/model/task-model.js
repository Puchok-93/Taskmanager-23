import { generateTask } from "../mock/task.js";

export default class TaskModel {
    #tasks = Array.from({length: 12}, generateTask);

    get tasks() {
        return this.#tasks;
    }
}