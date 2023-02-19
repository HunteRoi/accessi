import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return <div style={{ padding: '1rem' }}>
        <Outlet />
    </div>;
};

export default Layout;