import styles from './page.module.css';
import Sheet from './_components/Sheet/sheet';
import Mainpage from './_components/MainpageLayout/mainpagelauout';

export default function Home() {
    return (
        <Sheet pageTitle="Top Page" pageSub="新着ニュース">
            <Mainpage />
        </Sheet>
    );
}