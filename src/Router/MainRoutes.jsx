import { Routes,Route } from "react-router-dom";
import Home from '../Pages/Home'
import Historical from '../Pages/Historical'
import FantacyNovel from '../Pages/FantasyNovel'
import ScienceFiction from '../Pages/ScienceFiction'
import Mystery from '../Pages/Mystery'
import Horror from '../Pages/Horror'
import Cart from '../Pages/Cart'

import SinglePage from "../Components/SinglePage";
import First from '../Pages/First'
import Checkout from "../Pages/Checkout";


const MainRoutes =()=>{

    return(
        <>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/historical' element={<Historical/>}/>
            <Route path='/fantacy' element={<FantacyNovel/>}/>
            <Route path='/science' element={<ScienceFiction/>}/>
            <Route path='/mystery' element={<Mystery/>}/>
            <Route path='/horror' element={<Horror/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product/:id' element={<SinglePage/>}/>
           
            <Route path="/" element={<First/>}/> 
            <Route path="/checkout" element={<Checkout/>}/> 
           
          
        </Routes>
        </>
    )
}
export default MainRoutes