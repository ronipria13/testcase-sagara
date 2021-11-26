import React from 'react'

const Loading = ({title = "Loading . . ."}) => {
    return (
        <h1 className="container text-center mt-5 text-2xl font-semibold">{title} </h1>
    )
}

export default Loading
