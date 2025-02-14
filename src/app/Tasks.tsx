"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Task } from "./Task";
export const Tasks = ({ tasks }: { tasks: Array<string> }) => {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState<Array<string>>([]);
  useEffect(() => {
    setTaskList(Array.isArray(tasks) ? tasks : []);
  }, [tasks]);
  async function addTask() {
    if (!newTask.trim()) return;
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ action: "add", body: newTask }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((x) => setTaskList(x));
    setNewTask("");
  }
  async function deleteTask(task: string) {
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ action: "del", body: task }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((x) => setTaskList(x));
    setNewTask("");
  }
  return (
    <>
      <div className={styles.add_task_bar}>
        <input
          className={styles.input}
          placeholder="enter a new task"
          value={newTask}
          onChange={(x) => setNewTask(x.currentTarget.value)}
        />
        <button className={styles.button_primary} onClick={addTask}>
          add
        </button>
      </div>
      <div className={styles.tasks}>
        {taskList.map((task, key) => (
          <Task
            body={task}
            key={key}
            del={(task) => {
              deleteTask(task);
            }}
          />
        ))}
      </div>
    </>
  );
};
