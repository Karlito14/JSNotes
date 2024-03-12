import style from './style.module.scss';
import { Search } from 'react-bootstrap-icons';

export const SearchBar = ({placeholder, onTextChange}) => {
    return (
        <div className={style.container}>
            <Search size={25} className={style.container__icon} />
            <input 
                className={style.container__input} 
                placeholder={placeholder} 
                type='text' 
                onChange={(event) => {onTextChange(event.target.value);}} 
            />   
        </div>
    );
};