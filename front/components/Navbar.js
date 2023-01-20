import React from 'react'
import {BsCart}  from "react-icons/bs"
import {BsFillPersonPlusFill}  from "react-icons/bs"
import Link from 'next/link'
import {GiHamburgerMenu} from "react-icons/gi"
import {ImCross}  from "react-icons/im"
import { useAppContext } from "../context/appContext"
import { useRouter } from 'next/router'
import Logo from "../utils/img/Logo.png"
import Image from "next/image"

const Navbar = () => {
    let router=useRouter()
    let {user}=useAppContext()
    let [ham,setHam]=React.useState(true)

    function loginHandler(){
        if(user===null){
           router.push("/Register")
        }
        else{
            router.push("/user")
        }
    }


  return (
    <div>
   {/* Big Screen Nav Start*/}
    <div className='nav-main'>
        <div className='nav-headers'>
             {/* <h3 className='mt-[15px]'>AL-Kabeer Estate</h3> */}
             {/* <Image src={Logo} height={60} width={60} alt="Image"/> */}
        </div>

    <div className='big-screen-nav'>
       <nav>
        <ul>
            <li> <Link href="/" className='label fancy-link text-[#475569]' >Home</Link></li>
            <li> <Link href="#"  className='label fancy-link'>About</Link></li>
            <li> <Link href="#"  className='label fancy-link'>Property</Link></li>
        </ul>
       </nav>
    </div> 
          

         <div className='nav-end'>
            <div className='nav-flex gap-[30px]' onClick={loginHandler} style={{cursor:"pointer"}}>
                 <BsFillPersonPlusFill className='nav-icon text-white' style={{color:"white"}} />
            </div>
        </div> 

        <div>
            <GiHamburgerMenu className='ham text-white' onClick={()=>setHam(false)}/>
        </div>
 
    {/* End of the big screen nav */}
    </div>
    {/* small screen nav starts */}
      <div className={`small-screen-main ${!ham?"small-screen-nav-active":""}`}>
         <div className='small-nav-front'>
            <h3 className='label' style={{color:"black"}}>comfy Sloth</h3>
            <ImCross className='cross' onClick={()=>setHam(true)}/>
         </div>

         <div className='small-screen-nav-center div-center-80'>
            <li> <Link className='label fancy-link' style={{marginBottom:"30px",color:"black"}} href="/" onClick={()=>setHam(true)} >Home</Link></li>
            <li> <Link href="#"  className='label fancy-link' style={{marginBottom:"30px",color:"black"}} onClick={()=>setHam(true)}>About</Link></li>
            <li> <Link href="#"   className='label fancy-link'  style={{marginBottom:"30px",listStyle:"none",textDecoration:"none",color:"black"}} onClick={()=>setHam(true)}>Property</Link></li>    
            <div className='nav-flex gap-[30px]' onClick={loginHandler} style={{cursor:"pointer"}}>
                 <BsFillPersonPlusFill className='nav-icon ' onClick={()=>setHam(true)} style={{color:"black"}} />
            </div> 
         </div>

         <div className='small-nav-end'>
        </div> 


    </div> 
    {/* small screen nav  ends*/}

    </div>
  )
}

export default Navbar