import "../App.css";

export default function Button({text, className}){
    return (
        <button className={`bg-[#007fb5] text-[white] shadow-[2.5px_2.5px_2.5px_black] w-[100px] m-[5px] p-5 rounded-[5px] ${className}`}>{text}</button>
    )
}