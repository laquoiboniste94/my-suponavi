"use client";

import styles from '../ContactForm/contactform.module.css';
import { createContactData } from '@/app/_actions/contact';
import { useActionState } from 'react';

const initialState = {
    status: "",
    message: ""
};

export default function ContactForm(){

    const [state, formAction] = useActionState(createContactData, initialState);
    console.log(state);
    if( state.status === "success"){
        return (
            <p className={styles.success}>
                メンバー会員登録いただきありがとうございます。
                <br />
                追ってご登録メールアドレスに返信させていただきます。
            </p>
        );
    }
    return (
        <form className={styles.form} action={formAction}>
            <div className={styles.horizontal}>
                <div className={styles.item}>
                    <label className={styles.label} htmlFor='lastname'>
                        姓

                    </label>
                    <input className={styles.textfield} type='text'
                            id='lastname' name='lastname'/>
                </div>
                <div className={styles.item}>
                    <label className={styles.label} htmlFor='firstname'>
                        名

                    </label>
                    <input className={styles.textfield} type='text'
                            id='firstname' name='firstname'/>
                </div>
            </div>
            <div className={styles.item}>
                <label className={styles.label} htmlFor='memberid'>
                    メンバーＩＤ

                </label>
                <input className={styles.textfield} type='text'
                            id='memberid' name='memberid'/>
            </div>
            <div className={styles.item}>
                <label className={styles.label} htmlFor='password'>
                    パスワード

                </label>
                <input className={styles.textfield} type='text'
                            id='password' name='password'/>
            </div>
            <div className={styles.item}>
                <label className={styles.label} htmlFor='email'>
                    メールアドレス

                </label>
                <input className={styles.textfield} type='text'
                            id='email' name='email'/>
            </div>
            <div className={styles.item}>
                <label className={styles.label} htmlFor='profile'>
                    自己ＰＲ文

                </label>
                <textarea className={styles.textarea} 
                            id='profile' name='profile'/>
            </div>
            <div className={styles.actions}>
                {state.status === "error" && (
                    <p className={styles.error}>
                        {state.message}
                    </p>
                )}
                <input type='submit' value="送信する" className={styles.button}/>
            </div>
        </form>
    );
}