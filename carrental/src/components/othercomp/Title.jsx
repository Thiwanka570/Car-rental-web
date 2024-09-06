import React, { useState } from 'react'
import '../othercomp/Title.css'

function Title({ head, semi, dark }) {

    const [isDark, setIsDark] = useState(dark);

    return (
        <div>
            {
                isDark ? (
                    <div className='text-center'>
                        <p className='headTitleDark'>{head}</p>

                    </div>
                ) : (
                    <div className='text-center light-mode'>
                        <p className='headTitle'>{head}</p>
                    </div>
                )
            }

        </div>
    )
}

export default Title   