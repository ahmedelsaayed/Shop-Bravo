import React, { useState } from 'react'
import './Navbar.css'
import { BsCartFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import {Link} from 'react-router-dom'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import '../navbar/jquery-3.7.1.min.js'
export const Navbar = ({cartitems , darkk,dark ,favoritelist}) => {
    // down pages
    let [down , setdown] = useState(false)
    function downn(){
        setdown(!down)
    }
     // down menu
     let [downnn ,setdownn] = useState(false)
     function Close(){
        $('.nav-middle').addClass('nav-middle-up')
        $('.nav-middle').removeClass('nav-middle-down')

    }
     function dow(){
        if(downnn==false){
            setdownn(true)
            $('.nav-middle').removeClass('nav-middle-up')
            $('.nav-middle').addClass('nav-middle-down')
        }
        else{
            $('.nav-middle').addClass('nav-middle-up')
            $('.nav-middle').removeClass('nav-middle-down')
            setdownn(false)
        }
     }
    return (
        <nav>
            <h1 className='nav-left'>Bravo <span>Shop</span></h1>
            <ul className='nav-middle'>
                <li onClick={Close} ><Link  to="/">Home</Link></li>
                <li  onClick={Close}><Link to="/Shop">Shop</Link></li>
                <li  onClick={Close}><Link to="/Shopdatils">About</Link></li>
                <li onClick={downn} className='pag'><Link>Pages <BsChevronDown /> </Link>
                {
                    down &&    
                    <ul className='pages'>
                    <li  onClick={Close} className='border'><Link className='wh' to="/Cart">Cart</Link></li>
                    <li  onClick={Close} className='border'><Link className='wh' to="/Check">Check Out</Link></li>
                    <li  onClick={Close}><Link className='wh' to="/favorite">Favorite list </Link></li>
                 </ul>
                }
                </li>
                <li onClick={Close}><Link to="/Contact">Contact</Link></li>
            </ul>
            <div className='nav-right'>
                <Link to='/Cart'>
                <div>
                   <AiFillHeart className='nav-icon'/>
                    <span>{favoritelist.length}</span>
                
                </div>
                </Link> 
                <Link to='/favorite'>
                <div>
                    <BsCartFill className='nav-icon'/>
                    <span className='cart'>{cartitems.length}</span>
                </div>
                </Link>
                {dark ? <FaSun onClick={darkk} className='sun'/> :<FaMoon onClick={darkk} className='moon'/>  }
                <AiOutlineMenu onClick={dow}  className='menu'/>
            </div>
        </nav>
    )
}
