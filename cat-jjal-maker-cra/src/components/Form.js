import React from "react";
import styles from "./Form.module.css";

const Form = ({ updateMainCat }) => {
    const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
    const [value, setValue] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");

    function handleInputChange(e) {
        const userValue = e.target.value;
        setErrorMessage("");
        if (includesHangul(userValue)) {
            setErrorMessage("한글은 입력할 수 없습니다.");
        }
        setValue(userValue.toUpperCase());
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrorMessage("");

        if (value === "") {
            setErrorMessage("빈 값으로 만들 수 없습니다.");
            return;
        }
        if (includesHangul(value)) {
            setErrorMessage("한글로 만들 수 없습니다.");
            return;
        }
        updateMainCat(value);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="name"
                placeholder="영어 대사를 입력해주세요."
                value={value}
                onChange={handleInputChange}
            />
            <button type="submit">생성 ✨</button>
            <p>{errorMessage}</p>
        </form>
    );
};

export default Form;
