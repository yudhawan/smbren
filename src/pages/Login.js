import { useState } from "react";
import {login} from '../features/authSlice'
import {useDispatch,useSelector} from 'react-redux'
import Warn from '../components/Warn';
function Login() {
    const [warn,setwarn]=useState(true)
    const dispatch = useDispatch()
    const {message,loading,error} = useSelector(state=>state.auth)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validation,setvalidation] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        if(email.length===0 || password.length===0){
            setvalidation('Please fill all the fields')
        }
        else{
            dispatch(login({email:email,password:password,role:'perencanaan'}))
        }
    }
    const handlewarn = ()=> setwarn(!warn)
  return (
    <>{warn?<Warn handlewarn={handlewarn}/>:
    <div className='w-full h-screen flex flex-col space-y-4 justify-center items-center -mt-32'>
        <div className="flex flex-col justify-center">
            <p className="text-yellow-500 font-bold text-6xl">Perencanaan</p>
            {/* <p className="text-blue-300">Interconnection Drive System</p> */}
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col rounded-lg border border-slate-400 w-80 h-auto space-y-1 p-2'>
            <p className='text-sm text-gray-400'>Login!</p>
            <div className='py-1 px-2 border-gray-400 border rounded-md w-full'>
                <input type='text' className='outline-none w-full bg-transparent' placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='py-1 px-2 border-gray-400 border rounded-md w-full'>
                <input type='password' className='outline-none w-full bg-transparent' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            {validation&&<p className='text-red-500 text-sm'>{validation}</p>}
            {message&&<p className='text-red-500 text-sm'>{message}</p>}
            {error&&<p className='text-red-500 text-sm'>{error}</p>}
            <button className='bg-yellow-500 text-white py-1 px-2 rounded-lg w-fit' onClick={handleSubmit}>{loading?<>Loading</>:<>Login</>}</button>
        </form>
    </div>}
    </>
  )
}

export default Login