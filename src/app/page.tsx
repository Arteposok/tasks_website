import styles from "./page.module.css";
import { Tasks } from "./Tasks";

export default async function Home() {
  let req=await fetch("http://localhost:3000/api/tasks");
  let {tasks} = await req.json();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Tasks.</h1>
        <Tasks tasks={tasks} />
      </main>
    </div>
  );
}
