import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Buynow from './Buynow'
function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Cart" element={<Cart/>}></Route>
                <Route path="/Buynow" element={<Buynow/>}></Route>
            </Routes>
        </div>
    )
}

export default Router