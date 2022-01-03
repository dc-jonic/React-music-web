import './index.scss'
import Icon from '../../assest/icon'
import {Link, BrowserRouter as Router, NavLink} from 'react-router-dom'
import {useState} from 'react'




function Meun() {
    //改变菜单
    const MeunChange=(index)=>{
        console.log(index);
        setMeunIndex(index)
    }
    //meunIndex
    const [meunIndex,setMeunIndex]=useState(0)

    return (
        <div className="allMeun">
            <div className="part-logo">
                <img src="../image/logo.png" alt="" />
            </div>
            <div className="part-meunList">
                <NavLink to="/" className='meun'><div onClick={()=>MeunChange(0)}>Home</div></NavLink>
                <NavLink to="/about" className='meun'><div onClick={()=>MeunChange(1)}>About Us</div></NavLink>
                <NavLink to="/concert" className='meun'><div onClick={()=>MeunChange(1)}>Concert</div></NavLink>
                <NavLink to="/album" className='meun'><div onClick={()=>MeunChange(1)}>Album</div></NavLink>
                <NavLink to="/pages" className='meun'><div onClick={()=>MeunChange(1)}>Pages</div></NavLink>
                <NavLink to="/news" className='meun'><div onClick={()=>MeunChange(1)}>News</div></NavLink>
                <NavLink to="/contact" className='meun other'><div onClick={()=>MeunChange(1)}>Contact</div></NavLink>
                
                <div className="search">
                    {/* <img src="" alt="" /> */}
                    <Icon className="icon-sousuo"></Icon>
                </div>
            </div>
        </div>
    )
}

export default Meun