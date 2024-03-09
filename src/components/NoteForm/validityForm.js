export class ValidityForm {

    static displayError(input, message) {
        let errorSpan = document.querySelector(`#error-${input.id}`);

        if(!errorSpan) {
            errorSpan = document.createElement('span');
            errorSpan.setAttribute('id', `error-${input.id}`);
            errorSpan.style.color = '#dc3545';
            errorSpan.style.marginTop = '10px';
        }

        if(message) {
            errorSpan.textContent = message;
            input.after(errorSpan);
        } else {
            errorSpan.remove();
        }  
    }
    
    static checkInputText(input) {
        const value = input.value.trim();
        if(value === '') {
            throw new Error('Le titre ne peut etre vide');
        } else if (value.length < 3) {
            throw new Error('Le contenu doit faire plus de 3 caractères');
        } else if(!value.startsWith('Array') && !value.startsWith('String')) {
            throw new Error('Veuillez indiquer au début du titre Array ou String selon la méthode')
        }
    }

    static checkTextArea(input) {
        const value = input.value.trim();
        if(value === '') {
            throw new Error('Le contenu ne peut etre vide');
        } else if (value.length < 3) {
            throw new Error('Le contenu doit faire plus de 3 caractères');
        }
    }
}