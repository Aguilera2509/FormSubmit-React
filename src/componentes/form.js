import { FormInputs } from "./formInputs";
import './formInputs.css';

export const Form = () =>{

    const FORM_SUBMIT = (data) =>{
        fetch('https://formsubmit.co/ajax/ja846699@gmail.com',{
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res =>{ return res.json() })
        .then(json =>{ console.log(json) })
        .catch(err =>{
            console.log(err);
        });
    };

    return(
        <>
            <FormInputs FORM_SUBMIT={FORM_SUBMIT}/>
        </>
    );
};