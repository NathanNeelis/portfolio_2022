import Head from 'next/head'

export default function HeadWrapper() {
    return (
        <Head>
            <title>Nathan Neelis</title>
            <meta name="description" content="Portfolio website UX & Frontend developer Nathan Neelis" />
            <link rel="icon" href="/favicon.png" />

            {/* CSS FONTS */}
            {/* <!-- VARIALBE FONT  --> */}
            <link href="https://unpkg.com/splitting/dist/splitting.css" />
            {/* <script src="https://unpkg.com/splitting/dist/splitting.min.js"></script> */}
        </Head>
    );
};