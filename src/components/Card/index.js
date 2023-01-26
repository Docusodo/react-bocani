import React from "react";
import styles from "./Card.module.scss";

function Card( {title , url , price, onClickFavorite,onClickAdd}) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onClickAdd({title , url , price});
        setIsAdded(!isAdded);
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src="/img/Heart-unchecked.svg" alt="Like button" />
            </div>
            <img width={133} height={112} src={url} alt="galosiNr1" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Pret:</span>
                    <b>{price} lei</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus}   src={isAdded ? "/img/Btn-checked.svg" : "/img/Btn-plus.svg" } alt="Plus" />
            </div>
        </div>
    );
}

export default Card;