import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router'
import { Link } from "react-router";
import { Eye, EyeOff } from 'lucide-react';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import GoogleLogin from '../components/GoogleLogin';
import toast from 'react-hot-toast';
import FormSkeleton from '../components/skeleton/FormSkeleton';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const { signInUser, errorMessage, setErrorMessage, loading } = use(AuthContext)
    const handleLogin = (event) => {
        const form = event.target
        event.preventDefault()
        signInUser(form.email.value, form.password.value, false)
            .then(() => {
                toast.success('Logged in successfully')
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch((error) => {
                toast.error('Login failed!')
                setErrorMessage(error.message)
            })
    }
    const handleGoogleLogin = () => {
        signInUser('', '', true).then(
            () => {
                toast.success('Logged in with Google Successfully')
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch((error) => {
                toast.error('Google login failed!')
                setErrorMessage(error.message)
            })
    }
    return (
        loading ? <FormSkeleton /> :
            <div className="flex flex-col gap-4 md:justify-center justify-start my-10 md:my-0 items-center min-h-screen">
                <h1 className="text-5xl font-bold title-font">Login</h1>
                <GoogleLogin name='google-button' onClickAction={handleGoogleLogin}></GoogleLogin>
                <p className='title-font'>Or,</p>
                <div className="flex flex-col bg-base-200 glass w-[92vw] md:w-[400px] p-4 md:p-8 rounded-xl">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" required className="input w-full border-0 rounded-lg" placeholder="" onChange={(e) => setEmail(e.target.value)} onBlur={(e) => setEmail(e.target.value)} />
                        <label className="label">Password</label>
                        <div className="relative">
                            <input name='password' type={showPassword ? "text" : "password"} className="input w-full border-0 rounded-lg" placeholder="" />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        <Link state={email} to='/forgot-password'><p className="link link-hover">Forgot password?</p></Link>
                        <button type='submit' className="btn btn-neutral text-white bg-none mt-3 rounded-lg shadow-none">Login</button>
                        <p className='text-red-400'>{errorMessage ? errorMessage : ''}</p>
                        <p>Don't have an account? <Link className='font-bold' to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
    );
};

export default Login;