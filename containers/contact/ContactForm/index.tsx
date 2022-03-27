import dynamic from 'next/dynamic';
import { FormEvent, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import classes from './ContactForm.module.css';

const Modal = dynamic(() => import('components/Modal'), { ssr: false });

const ContactForm: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setOpenModal(true);
    };

    const submitSuccess = () => {
        emailRef.current!.value = '';
        messageRef.current!.value = '';

        toast('Successfully 😊😊😊');
        setOpenModal(false);
    };

    return (
        <>
            <section className={classes.contact}>
                <h1>How can I help you?</h1>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            ref={emailRef}
                            autoComplete="new-password"
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            required
                            ref={messageRef}
                        />
                    </div>

                    <div className={classes.actions}>
                        <button>Send Message</button>
                    </div>
                </form>
            </section>
            <Modal
                show={openModal}
                title="Confirm"
                onClose={() => setOpenModal(false)}
                onOk={submitSuccess}
            >
                {'Are you sure, bro?'}
            </Modal>
        </>
    );
};

export default ContactForm;
