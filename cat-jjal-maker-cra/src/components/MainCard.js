import styles from "./MainCard.module.css";

const MainCard = ({ img, onHeartClick, alreadyFavorite, defaultCatState }) => {
    const heartIcon = alreadyFavorite ? "đ" : "đ¤";
    return (
        <div className={styles.maincard}>
            <img src={img} alt="ęł ěě´" />
            {defaultCatState ? null : <button onClick={onHeartClick}>{heartIcon}</button>}
        </div>
    );
};

export default MainCard;
