import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import style from './style.module.scss';
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import { useState } from 'react';

export const NoteForm = ({title, onClickSubmit, onClickEdit, onClickTrash}) => {
    const [formValues, setFormValues] = useState({title: '', content: ''});

    function updateFormValues(event) {
        setFormValues({...formValues, [event.target.name] : event.target.value})
    }

    const actionIcons = (
        <div className={style.divIcons}>
            {onClickEdit && <PencilFill onClick={onClickEdit} className={style.divIcons__icon} />}
            {onClickTrash && <TrashFill onClick={onClickTrash} className={style.divIcons__icon} />}
        </div>
    );

    const titleInput = (
        <div className={style.divForm}>
            <label htmlFor='title' className={style.divForm__labelTitle}>Titre</label>
            <input 
                onInput={updateFormValues}
                autoComplete='off' 
                autoFocus 
                id='title' 
                name='title' 
                type='text' 
                className={style.divForm__inputTitle}
            />
        </div>
    );

    const contentInput = (
        <div className={style.divForm}>
            <label htmlFor='content' className={style.divForm__labelContent}>Contenu</label>
            <textarea 
                onInput={updateFormValues}
                name="content" 
                id="content" 
                className={style.divForm__textarea} 
                rows='5'
            ></textarea>
        </div>
    );

    const sendObject = () => {
        const form = document.querySelector('#form')
        const formData = new FormData(form);

        const date = new Date()
        const day = date.getDate()
        let month = date.getMonth();
        month = month.length === 1 ? '0' + month : month;
        const year = date.getFullYear(); 

        return {
            title: formData.get('title'),
            content: formData.get('content'),
            created_at: `${day}/${month}/${year}`,
        }
   }

    const submitButton = (
        <div className={style.divButton}>
            <ButtonPrimary text={'Enregistrer'} onClick={() => {
                const method = sendObject();
                onClickSubmit(method);
            }} />
        </div>
    );
    
    return (
        <section className={style.section}>
            <div className={style.section__container}>
                <h2 className={style.section__container__title}>{title}</h2>
                {actionIcons}
            </div>
            <form id='form' className={style.section__form}>
                {titleInput}
                {contentInput}
                {onClickSubmit && submitButton}
            </form>   
        </section>
    )
}