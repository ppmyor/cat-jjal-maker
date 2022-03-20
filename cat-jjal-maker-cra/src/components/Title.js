import styles from "./Title.module.css";

const Title = (props) => <h1 className={styles.title}>{props.children}</h1>;

export default Title;
