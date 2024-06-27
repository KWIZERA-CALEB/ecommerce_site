import { useState } from 'react'
import {Input} from "@nextui-org/react";
import {DateInput} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Link} from 'react-router-dom'

const Register = () => {
    const [loading, setLoading] = useState(false)

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
        <div className="mb-[10px]">
            <h1 className="font-bold text-[25px] text-slate-900 select-none">LUXURY DAIRY</h1>
        </div>
        
        <div className="w-[500px] h-[500px] bg-white shadow-md p-[30px] rounded-[20px]">
            <p className="text-center select-none mb-[30px]">Register</p>
            <div className="w-full">
                <form action="">
                    <div className="mb-[20px]">
                        <Input type="email" label="Email" />
                    </div>
                    <div className="mb-[20px]">
                        <Input type="text" label="Username" />
                    </div>
                    <div className="mb-[20px]">
                        <Input type="password" label="Password" />
                    </div>
                    <div className="mb-[20px]">
                        <DateInput label={"Birth date"} />
                    </div>
                    <div className="mb-[20px]">
                        {
                            loading ? 
                            <Button className="bg-slate-800 w-full pt-[25px] pb-[25px] text-white" isLoading>Register</Button>
                            :
                            <Button className="bg-slate-800 w-full pt-[25px] pb-[25px] text-white">Register</Button>
                        }
                    </div>
                    <div className="border-b"></div>
                    <div className="mt-[10px]">
                        <p className="text-[16px] text-center select-none text-slate-500">Not a new user? <Link className="text-slate-800" to={'/login'}>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Register
