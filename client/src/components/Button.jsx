import "../App.css";

export default function Button({text, className}){
    return (
        <button className={`big-button ${className}`}>{text}</button>
    )
}