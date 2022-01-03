import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom'
import SwiperBanner from '../components/SwiperBanner'
import Home from '../pages/Home'

const router=()=>{
    

    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </div>
    )
}

export default router