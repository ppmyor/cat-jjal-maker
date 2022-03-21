import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import MainCard from "./components/MainCard";
import Favorites from "./components/Favorites";
import "./App.css";

const jsonLocalStorage = {
    setItem: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },
};

const fetchCat = async (text) => {
    const OPEN_API_DOMAIN = "https://cataas.com";
    const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
    const responseJson = await response.json();
    return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};

const App = () => {
    const DEFAULT_CAT = "https://www.nyan.cat/cats/original.gif";
    const [counter, setCounter] = React.useState(() => {
        return jsonLocalStorage.getItem("counter");
    });
    const [mainCat, setMainCat] = React.useState(DEFAULT_CAT);
    const [favorites, setFavorites] = React.useState(() => {
        return jsonLocalStorage.getItem("favorites") || [];
    });
    const alreadyFavorite = favorites.includes(mainCat);
    const defaultCatState = mainCat === DEFAULT_CAT ? true : false;

    async function updateMainCat(value) {
        const newCat = await fetchCat(value);
        setMainCat(newCat);
        setCounter((prev) => {
            const nextCounter = prev + 1;
            jsonLocalStorage.setItem("counter", nextCounter);
            return nextCounter;
        });
    }

    function handleHeartClick() {
        if (alreadyFavorite) {
            const removeMainCat = favorites.filter((favorite) => favorite !== mainCat);
            setFavorites(removeMainCat);
            jsonLocalStorage.setItem("favorites", removeMainCat);
            console.log(favorites);
            return;
        }
        const nextFavorites = [...favorites, mainCat];
        setFavorites(nextFavorites);
        jsonLocalStorage.setItem("favorites", nextFavorites);
    }

    function handleRemoveCat(event) {
        const target = event.target.parentElement;
        console.log(target);
        const removeMainCat = favorites.filter((favorite) => favorite !== target);
        setFavorites(removeMainCat);
        jsonLocalStorage.setItem("favorites", removeMainCat);
    }

    const counterTitle = counter === null ? "" : counter + "번째 ";

    return (
        <div className="main">
            <header>
                <Title>{counterTitle}고양이 가라사대</Title>
                <Form updateMainCat={updateMainCat} />
            </header>
            <MainCard
                img={mainCat}
                onHeartClick={handleHeartClick}
                alreadyFavorite={alreadyFavorite}
                defaultCatState={defaultCatState}
            />
            <footer>
                <Favorites favorites={favorites} onRemoveCat={handleRemoveCat} />
            </footer>
        </div>
    );
};

export default App;
