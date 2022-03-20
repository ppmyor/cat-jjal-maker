import styles from "./MainCard.module.css";

const MainCard = ({ img, onHeartClick, alreadyFavorite }) => {
    const heartIcon = alreadyFavorite ? "💖" : "🤍";
    return (
        <div className={styles.maincard}>
            <img src={img} alt="고양이" />
            <button onClick={onHeartClick}>{heartIcon}</button>
        </div>
    );
};

export default MainCard;
