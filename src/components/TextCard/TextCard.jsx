import style from './style.module.scss';
import { Trash } from 'react-bootstrap-icons';

export const TextCard = ({ title, subtitle, content, onClick, onClickBin, id }) => {

    return (
        <article 
            onClick={onClick}
            className={style.container}
        >
            <div className={style.container__row}>
                <h2 className={style.container__row__title}>{title}</h2>
                <Trash 
                    onClick={(event) => {
                        event.stopPropagation();
                        onClickBin(id);
                    }}
                    size={20} 
                    className={style.container__row__icon}
                />
            </div>
            <time className={style.container__time}>{subtitle}</time>
            <p className={style.container__content}>{content}</p>
        </article>
    );
};