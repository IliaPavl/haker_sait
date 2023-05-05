import React from 'react';
import { publicRoutes } from './Routs';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
        </Routes>
    );
};

export default AppRouter;