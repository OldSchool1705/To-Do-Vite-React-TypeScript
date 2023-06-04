import React from "react";
import { useToDoStore } from "../../data/stores/useToDoStore";
import { InputPlus } from "../components/inputPlus/index";
import styles from "./index.module.scss";
import { InputTask } from "../components/inputTask";

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((stage) => [
    stage.tasks,
    stage.createTask,
    stage.updateTask,
    stage.removeTask,
  ]);

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do</h1>
      <section className={styles.articleSection}>
        <InputPlus
          onAdd={(title) => {
            if (title) {
              createTask(title);
            }
          }}
        />
      </section>
      <section className={styles.articleSection}>
        {!tasks.length && (
          <p className={styles.acticleText}>There is no one task.</p>
        )}
        {tasks.map((task) => (
          <InputTask
            key={task.id}
            id={task.id}
            title={task.title}
            onDone={removeTask}
            onEdited={updateTask}
            onRemoved={removeTask}
          />
        ))}
      </section>
    </article>
  );
};
