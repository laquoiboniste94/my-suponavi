import Sheet from "../_components/Sheet/sheet";

type Props = {
    children: React.ReactNode;
};

export default function NewsLayout({ children}: Props) {
    return <Sheet pageTitle="News" pageSub="ニュース一覧">{children}</Sheet>;
}