import Link from 'next/link';
import classes from './MainNavigation.module.css';

const MainNavigation: React.FC = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <a className={classes.logo}>Chris&apos; Next Blog</a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/post">Post</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
