import { useState } from "react";
import { FORM_SUBMIT, refData } from "../helpers/helper";
import { Loader } from "./loader";

export const FormInputs = () =>{

    const [data, setData] = useState(refData);
    const [load, setLoad] = useState(false);

    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(data.Name))){
            alert("El Nombre introducido NO es valido");
            document.getElementById('inputName').classList.add("err");
            return;
        }else{
            document.getElementById('inputName').classList.remove("err");
        }

        if(!(/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(data.Email))){
            alert("La dirreccion de correo introducida NO es valida ");
            document.getElementById('inputEmail').classList.add("err");
            return;
        }else{
            document.getElementById('inputEmail').classList.remove("err");
        }

        if(!(/^[\w'\-,.][^?÷?¿/\\+=@#$%ˆ*(){}|~<>;:[\]]{2,}$/.test(data.Asunt))){
            alert("No debe introducir caracteres especiales en Asunt");
            document.getElementById('inputAsunt').classList.add("err");
            return;
        }else{
            document.getElementById('inputAsunt').classList.remove("err");
        }

        if(!(/^[\w'\-,.][^÷ˆ]{2,300}$/.test(data.Comment))){
            alert("El mensaje NO debe pasar de 300 letras(contandose los espacios)");
            document.getElementById('inputComment').classList.add("err");
            return;
        }else{
            document.getElementById('inputComment').classList.remove("err");
        }

        document.getElementById("disabled").disabled = true;
        setLoad(true);
        FORM_SUBMIT(data, setLoad, setData);
    };

    const handleReset = () =>{
        setData(refData);
    };

    return(
        <>
        <div className="control-wh-form">
        <h3 className="control-center bold">Bienvenido, identificate, has tu comentario y envialo</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label bold">Name</label>
                    <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputName"
                        autoComplete="off" 
                        name="Name"
                        value={data.Name}
                        onChange={handleChange} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label bold">Email Address</label>
                    <div className="col-sm-10">
                        <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail"
                        autoComplete="off"
                        name="Email"
                        value={data.Email}
                        onChange={handleChange} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputAsunt" className="col-sm-2 col-form-label bold">Asunt</label>
                    <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputAsunt"
                        autoComplete="off"
                        name="Asunt"
                        value={data.Asunt}
                        onChange={handleChange} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputComment" className="col-sm-2 col-form-label bold">Comment</label>
                    <div className="col-sm-10">
                        <textarea 
                        className="form-control" 
                        id="inputComment" 
                        rows="3"
                        name="Comment"
                        value={data.Comment}
                        onChange={handleChange}></textarea>
                    </div>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" id="disabled" type="submit">Submit</button>
                    <button className="btn btn-primary margin-bottom" type="reset" onClick={handleReset}>Reset</button>
                </div>
            </form>
            {load && <Loader />}
        </div>
        </>
    );
};