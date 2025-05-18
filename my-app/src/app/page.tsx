import styles from "./page.module.css";
export const metadata = {
  title: "Home Page",
};


export default function Home() {
  return (
    <div>
      <h1 className={styles.title}> Hello Worled</h1>
      
    </div>
  );
}
