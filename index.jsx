import ReactDOM from 'react-dom';
import {useCallback, useEffect, useState,useLayoutEffect} from 'react'
import Meun from './components/Meun/index.jsx';
import Loading from './components/Loading/index.jsx';
import MyRouter from './router/index.jsx';
import {Link, BrowserRouter as Router} from 'react-router-dom'



function App(){
    

    useEffect(()=>{
        // window.addEventListener('resize',changeHtmlSize())
        //加载
        if (document.readyState!='complete') {
            console.log("还在加载，显示加载动画");
        }
    
        


        //自适应代码
        const changeHtmlSize=()=>{
            console.log("改变");
            document.documentElement.style.fontSize=document.documentElement.clientWidth*25/1920+'px'
        }
        window.addEventListener('resize', changeHtmlSize);
        changeHtmlSize();
        return () => window.removeEventListener('resize', changeHtmlSize);
    },[])

    return(
        <div>
            <Meun></Meun>
            <Loading isLoading={true}></Loading>
            <MyRouter></MyRouter>
            {/* <img src="./image/banner-img.png" alt="" /> */}
        </div>
    )

}

ReactDOM.render(
    <Router>
      <App/>
    </Router>
    ,
    document.getElementById('app')
)