import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom'
import SwiperBanner from '../components/SwiperBanner'
import Home from '../pages/Home'
import About from '../pages/About'

const router=()=>{
    

    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
        </div>
    )
}

export default router