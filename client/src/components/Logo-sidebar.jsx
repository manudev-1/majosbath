import "../App.css";
import  logo  from '../assets/logo.svg'
import githubLogo from '../assets/github-mark-white.svg'

export default function Button(){
    return (
        <div className="bg-[#007fb5] w-1/5 h-screen flex flex-col items-center text-[white] ml-0 mr-auto;">
        <img src={logo} alt="logo" className="h-[30vh] w-[30%] pt-10"/>
        <h1 className="kadwa-bold text-5xl pb-4">Majo's Bath</h1>
        <p className="kadwa-regular text-xl">Review dei cessi del Majorana</p>
        <div className="align-bottom items-center flex flex-col pt-96">
            <p className="kadwa-regular text-center">Created by Emanuele Barone & Alessandro Porpiglia</p>
            <p className="pt-3">
                <a href="https://github.com/manudev-1/majosbath"><img src={githubLogo} className="size-10"></img></a>
            </p>
        </div>
       </div>
    )
}