import s from "./style.module.scss";
import image from 'assets/images/logo.png';

export function Logo({ title, subtitle, onClick }) {
  return (
    <>
      <div className={s.container} onClick={onClick}>
        <img 
          className={s.container__img} 
          src={image} 
          alt="logo" 
        />
        <h1 className={s.container__title}>{title}</h1>
      </div>
      <p className={s.subtitle}>{subtitle}</p>
    </>
  );
}
