import "./globals.css";
import Header from "./_components/Header/header";
import Footer from "./_components/Footer/footer";
import Hero from "./_components/Hero/hero";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <Hero pageTitle="Number Web" pageSub="海外サッカー最新ニュース">{children}</Hero>
        <Footer />
      </body>
    </html>
  );
}
