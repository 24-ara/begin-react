import { FC, ReactNode } from "react";
import Head from "next/head";
import { Header } from "src/components/organisms/Header";
import { Footer } from "src/components/organisms/Footer";

type Props = {
  title: string;
  children: ReactNode;
};

export const Template: FC<Props> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
