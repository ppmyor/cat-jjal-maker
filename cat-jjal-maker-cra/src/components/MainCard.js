import styles from "./MainCard.module.css";

const MainCard = ({ img, onHeartClick, alreadyFavorite, defaultCatState }) => {
    const heartIcon = alreadyFavorite ? "💖" : "🤍";
    return (
        <div className={styles.maincard}>
            <img src={img} alt="고양이" />
            {defaultCatState ? null : <button onClick={onHeartClick}>{heartIcon}</button>}
        </div>
    );
};

export default MainCard;
