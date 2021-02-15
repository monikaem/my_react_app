import React from 'react';
import Button from '@material-ui/core/Button'


const FormPage = () => {
    return (
        <div>
            <Button>hej</Button>
           <label className="mdc-text-field mdc-text-field--filled">
            <span className="mdc-text-field__ripple"></span>
            <span className="mdc-floating-label" id="my-label-id">Hint text</span>
            <input className="mdc-text-field__input" type="text" aria-labelledby="my-label-id"/>
                <span className="mdc-line-ripple"></span>
            </label>
        </div>
    )
}

export default FormPage;