import styles from 'app/contact/page.module.css';
import ContactForm from '../_components/ContactForm/contactform';

export default function Page(){
    return (
        <div>
            <p>
                メンバー会員申し込みはこちらから
                <br />
                メンバー限定記事には会員登録が必要となります。
            </p>
            <ContactForm />
        </div>
    );
}