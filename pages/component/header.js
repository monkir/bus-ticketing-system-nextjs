import Head from "next/head";

export default function MyHeader(props) {
  
    return(
        <>
        <Head>
            <title>{props.title}</title>
            <link rel="icon" type="image/x-icon" href="/bus-ticket-logo.png"></link>
        </Head>
        </>
    )
}