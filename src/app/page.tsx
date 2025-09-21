import React from "react";
import Image from "next/image";
import NexonDp from "../../public/images/nexon-dp.jpeg";
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
      </Head>
      <main>
        <section className="intro_section">
          <div className="profile">
            <Image
              src={NexonDp}
              alt="nexon-profile-pic"
              className="profile-image"
            />
            <div>
              <h1 className="name">Nexon</h1>
              <p className="role">Web Engineer</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
