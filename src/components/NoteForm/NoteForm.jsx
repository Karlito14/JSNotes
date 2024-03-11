import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import style from './style.module.scss';
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import { ValidityForm } from './validityForm';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const NoteForm = ({isEditable = true, title, onClickSubmit, onClickEdit, onClickTrash, methodId, note}) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [formValues, setFormValues] = useState({title: note?.title ?? '', content: note?.content ?? ''});
    const navigate = useNavigate();

    const controlForm = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value});
        console.log(formValues);
        const form = document.querySelector('#form');
        const title = form.querySelector('#title');
        const content = form.querySelector('#content');

        let formOk = true;

        try {
            ValidityForm.checkInputText(title);
            ValidityForm.displayError(title, '');
        } catch (error) {
            ValidityForm.displayError(title, error.message);
            formOk = false;
        }

        try {
            ValidityForm.checkTextArea(content);
            ValidityForm.displayError(content, '');
        } catch (error) {
            ValidityForm.displayError(content, error.message);
            formOk = false;
        }

        const date = new Date().toLocaleDateString();

        if(formOk) {
            setIsDisabled(false);
            return {
                title: title.value.trim(),
                content: content.value.trim(),
                created_at: date,
            };
        } else {
            setIsDisabled(true);
        }
    };

    const actionIcons = (
        <div className={style.divIcons}>
            {onClickEdit && <PencilFill onClick={onClickEdit} className={style.divIcons__icon} />}
            {onClickTrash && <TrashFill onClick={() => onClickTrash(methodId)} className={style.divIcons__icon} />}
        </div>
    );

    const titleInput = (
        <div className={style.divForm}>
            <label htmlFor='title' className={style.divForm__labelTitle}>Titre</label>
            <input 
                autoComplete='off' 
                autoFocus 
                id='title' 
                name='title' 
                type='text' 
                className={style.divForm__inputTitle}
                onChange={(event) => controlForm(event)}
                value={formValues.title}
            />
        </div>
    );

    const contentInput = (
        <div className={style.divForm}>
            <label htmlFor='content' className={style.divForm__labelContent}>Contenu</label>
            <textarea 
                name="content" 
                id="content" 
                className={style.divForm__textarea} 
                rows='5'
                onChange={(event) => controlForm(event)}
                value={formValues.content}
            ></textarea>
        </div>
    );

    const submitForm = () => {
        onClickSubmit(formValues);
        navigate('/'); 
    };

    const submitButton = (
        <div className={style.divButton}>
            <ButtonPrimary text={'Enregistrer'} onClick={submitForm} isDisabled={isDisabled} />
        </div>
    );
    
    return (
        <section className={style.section}>
            <div className={style.section__container}>
                <h2 className={style.section__container__title}>{title}</h2>
                {actionIcons}
            </div>
            <form id='form' className={style.section__form}>
                {isEditable && titleInput}
                {isEditable ? contentInput : <p>{note.content}</p>}
                {isEditable && submitButton}
            </form>   
        </section>
    );
};