import React from 'react'

const list = [
    {
        name: "Grievence Desk",
    },
    {
        name: "Application"
    },
    {
        name: "Nocs"
    },
    {
        name: "Extensions"
    }
]

const Sidebar = () => {
    return (
        <div className='flex flex-col mt-10 space-y-4 p-4'>
            {
                list.map((item, index) => {
                    return (

                        <div key={index}
                        className='bg-white rounded p-3'
                        >{item.name}</div>
                    )
                })
            }
        </div>
    )
}

export default Sidebar