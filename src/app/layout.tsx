import type { Metadata } from "next";
import { notoSansSC } from "@/lib/fonts";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "扶摇计划 — 五大名校校友会联合发起的华人职场领导力加速器",
  description:
    "扶摇计划由北大、复旦、南大、南开、武大五大校友会联合发起，硅谷资深高管担任导师，一对一助你突破华人职场天花板。",
  openGraph: {
    title: "扶摇计划 — 华人职场领导力加速器 / Fuyao Program",
    description:
      "五大名校校友会联合发起，硅谷导师一对一，助你突破华人职场天花板。Co-launched by five top alumni associations.",
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["zh_TW", "en_US"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={notoSansSC.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
