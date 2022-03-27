import { ReactNode } from 'react';
import MainNavigation from './MainNavigation';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <MainNavigation />
            <main>{children}</main>
        </>
    );
};

export default Layout;
