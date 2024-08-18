import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import initStar from '../assets/init-star.png'

function LoginPage({ loginToggle } ) {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameInput = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        loginToggle();
    }

    return (
        <div className="flex w-screen h-svh justify-center items-center">
            <section className="rounded-md bg-black/70 p-2 inline-block2 min-h-[620px] min-w-[450px]">
                <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <div className="mb-2">
                            <img src={initStar} className='h-[56px] w-[56px]' />
                        </div>
                        <h2 className="text-2xl font-bold leading-tight text-black">Admin Login</h2>
                        <p className="mt-2text-sm text-gray-600 ">
                            Login to access Admin Dashboard{' '}
                        </p>
                        <form action="#" method="POST" className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Username{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex text-black h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onInput={handleUsernameInput}
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Password{' '}
                                        </label>
                                        <a href="#" title="" className="text-sm font-semibold text-black hover:underline">
                                            {' '}
                                            Forgot password?{' '}
                                        </a>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 text-black w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onInput={handlePasswordInput}
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        onClick={handleLogin}
                                    >
                                        Continue to Dashboard <ArrowRight className="ml-2" size={16} />
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoginPage