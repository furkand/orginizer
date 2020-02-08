import {collatedTasks} from "../constansts/index"
export const collatedTasksExists= selectedProject => {
    collatedTasks.find(task=> task.key === selectedProject)
}