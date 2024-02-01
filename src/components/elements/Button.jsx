import React from 'react'

export const Button = (props) => {
    return (
        <div>
            <button
            type={props.type ? props.type : 'button'}
            className={`${props.className? props.className : 'bg-gray-400'} hover:bg-gray-600 font-semibold py-1 px-2 rounded`}
            onClick={props.onClick}
            >
                {props.text}
            </button>
        </div>
    )
}
