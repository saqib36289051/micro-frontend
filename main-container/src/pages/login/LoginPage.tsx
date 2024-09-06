import React from 'react'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Button } from '../../components/ui/button'
import { useNavigate } from 'react-router-dom'
import { post } from '../../store/post'
import { useAppDispatch } from '../../hooks/useReduxHooks'
import { get } from '../../store/get'


const LoginPage = () => {
    const router = useNavigate()
    const dispatch = useAppDispatch()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleLogin = async () => {
        if (email && password) {
            await post('/Auth/SignIn', {
                email,
                password
            }).then(async (res) => {
                if (res) {
                    localStorage.setItem('user', JSON.stringify(res))
                    dispatch({
                        type: "setting/setUser",
                        payload: res
                    })

                    await get('/Auth').then((response) => {
                        if (response) {
                            dispatch({
                                type: "setting/setUser",
                                payload: response
                            })
                            router('/grievence');
                        }
                    })
                }
            })
        }
    }
    return (

        <div className='flex min-h-screen flex-col items-center justify-center bg-gray-50'>
            <div className=" shadow p-8 sm:w-1/4 bg-white rounded-lg">
                <div className='flex flex-col items-center mb-6'>
                    <h1 className='text-3xl font-bold text-gray-900'>Login</h1>
                </div>
                <div className='mb-4'>
                    <Label htmlFor="email" className='block text-sm font-medium'>Email</Label>
                    <Input placeholder='Email' className='mt-1' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mb-4'>
                    <Label className='block text-sm font-medium'>Password</Label>
                    <Input placeholder='Password' type='password' className='mt-1' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='flex w-full mb-2'>
                    <Button
                        type='submit'
                        onClick={() => handleLogin()}
                        className='w-full'
                    >Login</Button>
                </div>

            </div>
        </div>

    )
}

export default LoginPage