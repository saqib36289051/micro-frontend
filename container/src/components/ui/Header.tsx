import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div
            className='w-full bg-green-200 p-4 shadow'
        >
            <h2 className='text-2xl text-green-800'>
                Header
            </h2>
        </div>
    )
}

export default Header