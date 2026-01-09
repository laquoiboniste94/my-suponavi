import Sheet from "../_components/Sheet/sheet";

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children}: Props) {
    return <Sheet pageTitle="Leagues" pageSub="主要リーグ紹介">{children}</Sheet>;
}