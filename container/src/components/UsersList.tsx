import React from 'react'
import { DataListType } from '../types/Types'
import { useStore } from '../store/store'

const UsersList = () => {
    const { data, setData } = useStore()
    const [name, setName] = React.useState('')
    const [age, setAge] = React.useState(0)
    const [role, setRole] = React.useState<"ADMIN" | "USER">('USER')
    const handleClick = () => {
        setData([...data, { name, age, role }])
        setName('')
        setAge(0)
        setRole('USER')
    }
    return (
        <div>
            <p className='text-2xl'>Users List</p>
            {
                data.map((item: DataListType, index) => {
                    return (
                        <div className='px-4 py-2 bg-gray-200 m-2 rounded flex justify-around' key={index}>
                            <p>
                                {item.name}
                            </p>
                            <p>
                                {item.age}
                            </p>
                            <p>
                                {item.role}
                            </p>
                        </div>
                    )
                })
            }
            <div className='p-2 bg-green-100 m-2 rounded flex justify-around'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className='px-2 rounded' />
                <input type="text" value={age} onChange={(e) => setAge(Number(e.target.value))} placeholder="Age" className='px-2 rounded' />
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as "ADMIN" | "USER")}
                    className='px-2 rounded'
                >
                    <option value="ADMIN">ADMIN</option>
                    <option value="USER">USER</option>
                </select>
                <button className='p-2 px-4 rounded bg-green-700 text-white' onClick={handleClick}>Add</button>
            </div>
        </div>
    )
}

export default UsersList

