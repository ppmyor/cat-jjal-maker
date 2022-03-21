import CatItem from "./CatItems";
import styles from "./Favorites.module.css";

function Favorites({ favorites }) {
    if (favorites.length === 0) {
        return <span>사진 위 하트를 눌러 고양이 사진을 저장해봐요!</span>;
    }

    return (
        <ul className={styles.favorites}>
            {favorites.map((cat) => (
                <CatItem img={cat} key={cat} />
            ))}
        </ul>
    );
}

export default Favorites;
