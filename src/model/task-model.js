import { generateTask } from "../mock/task.js";

export default class TaskModel {
    tasks = Array.from({length: 3}, generateTask);

    getTasks = () => this.tasks;
}