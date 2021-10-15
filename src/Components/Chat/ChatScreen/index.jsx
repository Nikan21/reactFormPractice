import React from 'react'

export default function Screen(props) {
    return (
        <article>
            <ul>
                {props.chatMessages.map((msg) =>{
                    return <li key = {msg}>{msg}</li>
                })}
            </ul>
        </article>
    )
}
