import Sheet from "../_components/Sheet/sheet";

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props){
    return (
        <>
            <Sheet pageTitle="Subscription" pageSub="会員メンバー登録">
                {children}
            </Sheet>
        </>
    );
}