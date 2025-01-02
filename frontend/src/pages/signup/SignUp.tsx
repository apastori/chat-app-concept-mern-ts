import React, { useState } from 'react'
import { GenderCheckbox } from './GenderCheckBox'
import { Link } from 'react-router-dom'
import { IUserSignUpForm } from '../../types/IUserSignUpForm'
import { Gender } from '../../types/Gender'
import { useSignup } from '../../hooks/useSignup'

export const SignUp = () => {

    const [formData, setFormData]: [IUserSignUpForm, React.Dispatch<React.SetStateAction<IUserSignUpForm>>] = useState<IUserSignUpForm>({
		firstName: "",
        lastName: "",
		userName: "",
		password: "",
		confirmPassword: "",
		gender: "",
	})

    const { loading, signup }: {
        loading: boolean,
        signup: (params: IUserSignUpForm) => Promise<void>
    } = useSignup() 

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        await signup(formData)
    }

    const handleChange = (nameInput: string, e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        setFormData((prevData: IUserSignUpForm) => ({
          ...prevData,
          [nameInput]: value,
        }))
    }

    const handleCheckboxChange = (gender: Gender): void => {
		setFormData({ ...formData, gender })
	}

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up<span className='text-blue-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-white'>First Name</span>
                        </label>
                        <input 
                            type='text' 
                            placeholder='John Doe' 
                            className='w-full input input-bordered  h-10'
                            value={formData.firstName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                handleChange("firstName", e)
                            }}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-white'>Last Name</span>
                        </label>
                        <input 
                            type='text' 
                            placeholder='John Doe' 
                            className='w-full input input-bordered  h-10'
                            value={formData.lastName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                handleChange("lastName", e)
                            }}
                        />
                    </div>

                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text text-white'>Username</span>
                        </label>
                        <input 
                            type='text' 
                            placeholder='johndoe' 
                            className='w-full input input-bordered h-10' 
                            value={formData.userName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                handleChange("userName", e)
                            }}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-white'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={formData.password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                handleChange("password", e)
                            }}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-white'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10'
                            value={formData.confirmPassword}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                handleChange("confirmPassword", e)
                            }}
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={formData.gender} />

                    <Link 
                        to={"/login"}
                        className='text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'
                    >
                        Already have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
