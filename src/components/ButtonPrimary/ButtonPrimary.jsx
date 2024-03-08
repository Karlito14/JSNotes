import style from './style.module.scss';

export const ButtonPrimary = ({ text, onClick }) => {
    return (
        <button onClick={onClick} type='button' className={style.btn}>{text}</button>
    )
}