'use client'

import{useRouter} from "next/navigation"
import {useState} from "react"
import{Eye,EyeOff,User,Mail,Lock,ArrowLeft,Check,Key} from "lucide-react";

export default function Homepage() {
    const[showpassword,setshowpassword] = useState(false) ;
    const [showConfirmPassword,setshowConfirmPassword] = useState(false) ;
    const [acceptedTerms,setAcceptedTerms] = useState(false) ;
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    }) ;

    const router = useRouter() ;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name,value } = e.target
        setFormData({...formData,[name]:value}) ;
    };

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();

        if (!acceptedTerms) {
            alert("You Must accept the terms and conditions to register.");
            return;
        }

        if(!formData.password || !formData.confirmPassword || formData.password !== formData.confirmPassword) {
            alert("Password do not match");
            return;
        }

        console.log("Form submitted:",formData) ;
        router.push("/auth/login") ;
    };

    const getPasswordStrength = (password: string) => {
        if(password.length >= 12) return {text: "strong",color:"text-green-600"};
        if(password.length >= 8) return {text:"medium",color:"text-yellow-600"};
        if(password.length <= 6) return {text:"weak",color:"text-red-600"};
        return{text:"",color:""};
    };

    const passwordStrength = getPasswordStrength(formData.password)
    const isFormvalid = acceptedTerms && formData.password && formData.confirmPassword && formData.password === formData.confirmPassword;

    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flek items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white/80 backdrop-blur-sm rounded-3x1 shadow-x1 border border-blue-100 p-8 relative overflow-hidden">
                    <div className="absolut inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-3xl"/>
                    <div className="relative z-10">
                        <a href="/auth/login" className="flex items-center gap-2 text-grey-600 hover:text-blue-800 mb-6">
                            <ArrowLeft className="w-4 h-4"/>
                            Back to login
                        </a>
                        <div className="text-center mb-6">
                            <div className="'w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/5 to-blue-600/100 rounded-full flex items-center bm-4 shadow-lg">
                                <User className="w-15 h-8 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
                            <p className="text-grey-600">join us today ! it takes only a few steps.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}