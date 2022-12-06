import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence initial={false} exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/detail' element={<Detail />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;