import { Logo } from 'components/Logo';
import style from './style.module.scss';
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={style.header}>
            <div className={style.header__logo}>
                <Logo 
                    onClick={() => navigate('/')}
                    title={'JS Notes'} 
                    subtitle={'Enregistre tes méthodes JS'} 
                />
            </div>
            <div >
                <ButtonPrimary 
                    text={'Ajoute une méthode +'}
                    onClick={() => navigate('/note/new')}
                />
            </div>
        </header>
    )
};