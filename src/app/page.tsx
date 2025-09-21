import React from "react";
import "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Website portfolio for me - I am nexon.codes by code name and Nexon by tech business name or personal nickname"
        />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
    </>
  );
}
