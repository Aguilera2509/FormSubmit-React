import circles from "../loader/circles.svg";

export const Loader = () =>{
    return(
        <div className="control-center">
            <img src={circles} alt="Cargando..." />
        </div>
    );
};