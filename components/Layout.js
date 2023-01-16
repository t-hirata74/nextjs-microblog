import Head from "next/head";

const name = 'next test'

function Layout({children}) {
  return (
    <div>
      <Head>
        <link rel="icon" hred="/favicon.ico"></link>
      </Head>
      <header> 
        <img src="/images/profile.png"></img>
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;