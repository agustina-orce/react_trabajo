import "./Button.css";

function Button({text, onClick, disabled}){
    return(
        <button disabled={disabled} onClick={onClick} className="button is-primary is-large">{text}</button>
    )
}

export default Button;