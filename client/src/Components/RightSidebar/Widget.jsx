import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/blacklogo.svg'

const Widget = () =>{
    return(
        <div className='widget'>
            <h4>The Overflow blog</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                <img src={pen} alt='pen' width='18'/>
                <p>Observability is key to the future of software (and your Devops career)</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt='pen' width='18'/>
                <p>Podcast 374: How valuable is your screen name?</p>
            </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                <img src={comment} alt='comment' width='18'/>
                <p>Review queue workflows - Final release....</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt='comment' width='18'/>
                <p>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p>
            </div>
            <div className='right-sidebar-div-3'>
                <img src={blacklogo} alt='blacklogo' width='18'/>
                <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
            </div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <p>38</p>
                <p>Why was this spam flag declined, yet the<br/> question marked as spam?</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>20</p>
                <p> What is the best course of action when a<br/> user has high enough rep to...</p>
            </div>
            <div className='right-sidebar-div-3'>
                <p>14</p>
                <p>Is a link to the "How to ask" help page a<br/>useful comment?</p>
            </div>
            </div>
        </div>
    )
}

export default Widget