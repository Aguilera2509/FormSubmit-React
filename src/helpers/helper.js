export const refData = {
    Name : "",
    Email : "",
    Asunt : "",
    Comment : ""
};

export const FORM_SUBMIT = (data, setLoad, setData) =>{
    fetch('https://formsubmit.co/ajax/ja846699@gmail.com',{
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res =>{ return res.json() })
    .then(json =>{
        let { message } = json; 
        setLoad(false);
        setData(refData);
        alert(message);
        document.getElementById("disabled").disabled = false;
    })
    .catch(err =>{
        alert("Ha ocurrido un error, intente de nuevo");
    });
};