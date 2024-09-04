import React from 'react'
import '../othercomp/Title.css'

function Title({ head, semi }) {
    return (
        <div>
            <div className='text-center'>
                <p className='headTitle'>{head}</p>
                {/* <p className='semiTitle'>{semi}</p> */}
            </div>
        </div>
    )
}

export default Title   