export const refData = {
    Name : "",
    Email : "",
    Asunt : "",
    Comment : ""
};

export const FORM_SUBMIT = (data) =>{
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
        alert(message);
    })
    .catch(err =>{
        alert("Ha ocurrido un error, intente de nuevo");
    });
};