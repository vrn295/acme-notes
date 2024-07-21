import Button from "../common/Button";
import styles from "./about.module.scss";

export const About = () => {
  return (
    <section className={styles.about}>
      <h2>
        <span>Crafting</span> Notes,
        <br /> Creating Connections
      </h2>
      <div className={styles.about_content}>
        <p>{`Acme Note empowers users to capture thoughts effortlessly, organize them intuitively, and share them effortlessly. Whether you're a student jotting down lecture notes, a professional managing tasks, or a creative mind sketching ideas, Acme Note adapts to your workflow with ease.`}</p>
        <Button size="small">{`Let's Talk`}</Button>
      </div>
    </section>
  );
};
