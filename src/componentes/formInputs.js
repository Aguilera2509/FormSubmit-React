import { useState } from "react";

const refData = {
    Name : "",
    Email : "",
    Asunt : "",
    Comment : ""
};

export const FormInputs = ({FORM_SUBMIT}) =>{

    const [data, setData] = useState(refData);

    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        FORM_SUBMIT(data);
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
                    <button className="btn btn-primary" type="submit">Submit</button>
                    <button className="btn btn-primary margin-bottom" type="reset" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
        </>
    );
};