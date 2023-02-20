import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { GiHamburgerMenu } from 'react-icons/gi';
import {BiLogOut} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {BsFillMoonStarsFill,BsFillSunFill} from 'react-icons/bs';
import { useTheme } from 'next-themes';

const Navbar = () => {
    const router=useRouter();


    //logo path and default image path
    const [logoUrl, setLogoUrl] = useState('logo.svg');
    const [defaultImg, setDefaultImg] = useState('default.jpg');
    useEffect(() => {

        if (
            router.asPath == "/login/forgetPassword"
        ) {
            setLogoUrl("../logo.svg");
            setDefaultImg('../default.jpg');
        } else {
            setLogoUrl("logo.svg");
            setDefaultImg('default.jpg');
        }

    }, [router.asPath])
    //handle side navbar
    const [sideNav, setSideNav] = useState(false);
    const handleSideNav = () => {
        setSideNav((prev) => !prev);
    };
    //! to avoide hydration mismatch when initialize the theme
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => {
        setMounted(true);
    }, [])
    //! *********************************************

  return (
    <>

        <div
         className='fixed z-50 w-full bg-textColor2 dark:bg-textColor h-20 pl-4 md:pl-8 flex justify-between items-center border-b-2 border-gray-400'>

            {/* //todo when the user is not logged in */}
            {/* <div className='hidden md:flex space-x-3'>
                <button className='w-[120px]' onClick={()=>{router.push('/signup')}}>اشترك الآن</button>
                <button className='w-[120px]' onClick={()=>{router.push('/login')}}>تسجيل الدخول</button>
            </div> */}
            {/* //todo ***************************** */}

            {/* //! when the user is logged in */}
            <div className='hidden md:flex space-x-3 lg:space-x-5 items-center'>
                <img src={defaultImg} className='rounded-full w-14 h-14 shadow-md shadow-gray-400 cursor-pointer' onClick={()=>{router.push('/profile')}}/>

                {
                    (mounted && theme == 'light') && (
                        <BsFillMoonStarsFill className='w-10 h-10 rounded-full p-2 shadow-md shadow-gray-400 cursor-pointer hover:scale-[1.1] hover:text-effectColor' onClick={() => setTheme("dark")}/>
                    )
     
                }

                {

                    (mounted && theme == 'dark') && (
                        <BsFillSunFill className='w-10 h-10 rounded-full p-2 shadow-md shadow-gray-400 cursor-pointer hover:scale-[1.1] hover:text-effectColor' onClick={() => setTheme("light")}/>
                    )

                }
               
            
                <BiLogOut className='w-10 h-10 rounded-full pl-1 pr-2 shadow-md shadow-gray-400 cursor-pointer hover:scale-[1.1] hover:text-effectColor' onClick={()=>{router.push('/')}}/>
                
                
            </div>
            {/* //! ************************** */}


            <div className='hidden md:flex justify-between font-bold text-sm lg:text-base space-x-3 lg:space-x-5'>

                {/* //! when the user logged in */}
                <Link href="/dashboard" className='hover:text-effectColor'>إحصائياتي</Link> 
                <Link href="/shippingAndPayment" className='hover:text-effectColor'>الدفع والشحن</Link>
                {/* //! *********************** */}

                <Link href='/' className='hover:text-effectColor'>الوكلاء</Link>

                <Link href='/' className='hover:text-effectColor'>التجار والمحال</Link>

                <Link href='/' className='hover:text-effectColor'>الرئيسية</Link>

            </div>

            <GiHamburgerMenu className='md:hidden text-effectColor w-10 h-10 cursor-pointer hover:scale-[1.1]' onClick={handleSideNav}/>

            <img src={logoUrl} className='w-32 md:w-40 h-20'/>

        </div>

        {/* //todo side Navbar */}
        <div className={sideNav?'md:hidden fixed z-50 w-full h-full bg-black/60':''}>

            <div className={sideNav?'fixed top-0 right-0 z-50 w-[85%] h-full bg-textColor2 dark:bg-textColor px-5 pb-10 flex flex-col overflow-y-auto ease-linear duration-300':'fixed top-0 -right-full z-50 w-[85%] h-full bg-textColor2 dark:bg-textColor px-5 pb-10 flex flex-col overflow-y-auto ease-linear duration-100'}>

                <div className='flex justify-between items-center min-h-[128px]'>
                    <AiOutlineClose className='shadow-md shadow-gray-400 rounded-full w-10 h-10 cursor-pointer hover:scale-[1.1] hover:text-effectColor p-1 ml-4' onClick={handleSideNav}/>
                    <img src={logoUrl} className='w-36 h-32'/>
                </div>


                <div className='flex flex-col space-y-7 items-center min-h-fit'>

                    {/* //! when the user is logged in */}
                    <img src={defaultImg} className='rounded-full w-20 h-20 shadow-md shadow-gray-400 cursor-pointer' onClick={() => { router.push("/profile"); handleSideNav(); }}/>
                    {/* //! ******************* */}

                    <Link href="/" className='hover:text-effectColor' 
                    onClick={handleSideNav}>الرئيسية</Link>
                    

                    <Link href='/' className='hover:text-effectColor' onClick={handleSideNav}>التجار والمحال</Link>

                    <Link href='/' className='hover:text-effectColor' onClick={handleSideNav}> الوكلاء</Link>

                    {/* //! when the user logged in */}

                    <Link href='/shippingAndPayment' className='hover:text-effectColor' onClick={handleSideNav}>الدفع و الشحن</Link>

                    <Link href='/dashboard' className='hover:text-effectColor' onClick={handleSideNav}>إحصائياتي</Link>

                    {
                        (mounted && theme == 'light') && (
                            <BsFillMoonStarsFill className='w-12 h-12 rounded-full p-2 shadow-md shadow-gray-400 cursor-pointer hover:scale-[1.1] hover:text-effectColor' onClick={()=>{setTheme('dark');handleSideNav();}}/>
                        )
                    }

                    {
                        (mounted && theme == 'dark') && (
                            <BsFillSunFill className='w-12 h-12 rounded-full p-2 shadow-md shadow-gray-400 cursor-pointer hover:scale-[1.1] hover:text-effectColor' onClick={()=>{setTheme('light');handleSideNav();}}/>
                        )
                    }

                   
                    <BiLogOut className='w-12 h-12 rounded-full pr-2 pl-1 shadow-md shadow-gray-400 cursor-pointer hover:scale-[1.1] hover:text-effectColor' onClick={() => { router.push("/"); handleSideNav(); }}/>

                    {/* //! *********************** */}

                    {/* //todo when the user is not logged in */}
                    {/* <button className='w-[100px] text-xs' onClick={() => { router.push("/login"); handleSideNav(); }}>تسجيل الدخول</button>
                    <button className='w-[100px] text-xs' onClick={() => { router.push("/signup"); handleSideNav(); }}>اشترك الآن</button> */}
                    {/* //todo ************************ */}
                    
                </div>


            </div>

        </div>

    </>
  )
}

export default Navbar