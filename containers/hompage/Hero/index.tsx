import Image from 'next/image';
import classes from './Hero.module.css';

const Hero: React.FC = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/chris.png"
                    alt="An image showing Chris"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I&apos;m Chris</h1>
            <p>
                I blog about web development - especially frontend frameworks
                like React or NextJS.
            </p>
        </section>
    );
};

export default Hero;
