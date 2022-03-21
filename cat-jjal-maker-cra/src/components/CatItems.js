import styles from "./CatItem.module.css";

function CatItem({ img, onRemoveCat }) {
    function handleCopyUrl(event) {
        const selectedImageSrc = event.target.previousElementSibling.previousElementSibling.src;
        navigator.clipboard.writeText(selectedImageSrc);
    }

    return (
        <li className={styles.catItem}>
            <img src={img} />
            <button onClick={onRemoveCat} className={styles.deleteBtn}>
                ✕
            </button>
            <button onClick={handleCopyUrl} className={styles.copyBtn}>
                Copy URL💫
            </button>
        </li>
    );
}

export default CatItem;
