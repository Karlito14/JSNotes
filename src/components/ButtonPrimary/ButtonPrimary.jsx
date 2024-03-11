import style from './style.module.scss';

export const ButtonPrimary = ({ text, onClick, isDisabled }) => {
    return (
        <button onClick={onClick} type='button' disabled={isDisabled} className={style.btn}>{text}</button>
    );
};