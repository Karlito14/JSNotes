import { useState } from 'react';
import style from './style.module.scss';
import { Trash } from 'react-bootstrap-icons';

export const TextCard = ({ title, subtitle, content, onClick, onClickBin }) => {
    const [cardHovered, setCardHovered] = useState(false);
    const [iconHovered, setIconHovered] = useState(false);

    function getColorTitle() {
        return cardHovered ? '#fce100' : 'black';
    }

    function boxShadowArticle() {
        return cardHovered ? '0px 0px 10px rgba(0, 0, 0, 0.5)' : '0px 0px 10px rgba(0, 0, 0, 0.2)';
    }

    function displayIcon() {
        return cardHovered ? '1': '0';
    }

    function getColorIcon() {
        return iconHovered ? '#ff7373': '#b8b8b8';
    }

    return (
        <article 
            onClick={onClick}
            style={{boxShadow : boxShadowArticle()}}
            className={style.container}
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
        >
            <div className={style.container__row}>
                <h2 className={style.container__row__title} style={{color : getColorTitle()}}>{title}</h2>
                <Trash 
                    onClick={(event) => {
                        event.stopPropagation();
                        onClickBin();
                    }}
                    size={20} 
                    className={style.container__row__icon} 
                    style={{opacity: displayIcon(), color: getColorIcon()}} 
                    onMouseEnter={() => setIconHovered(true)}
                    onMouseLeave={() => setIconHovered(false)}
                />
            </div>
            <time className={style.container__time}>{subtitle}</time>
            <p className={style.container__content}>{content}</p>
        </article>
    );
};