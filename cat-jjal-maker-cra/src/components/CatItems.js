import styles from "./CatItem.module.css";

function CatItem({ img, onRemoveCat }) {
    return (
        <li className={styles.catItem}>
            <img src={img} />
            <button onClick={onRemoveCat}>✕</button>
        </li>
    );
}

export default CatItem;
