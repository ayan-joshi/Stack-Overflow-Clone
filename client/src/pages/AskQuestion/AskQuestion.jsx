import React from 'react'
import './AskQuestion.css'
import {useNavigate} from 'react-router-dom'
const AskQuestion = () =>{
    const user = null;
    const navigate = useNavigate()
    const redirect = () =>{
        alert("login or signup to ask a question")
        navigate.push('/Auth')
    }
    return(
        <>
        {
             user === null ?
             redirect():
             <div>

             </div>
        }
       
        </>
    )
}

export default AskQuestion