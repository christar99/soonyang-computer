import type { AppProps } from 'next/app';
import { Provider } from 'jotai';
import Head from 'next/head';
import Layout from 'components/common/Layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider>
			<Layout>
				<Head>
					<title>SOONYANG COMPUTER</title>
					<link rel="icon shortut" href="soonyang_favicon2.ico" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta property="og:title" content="SOONYANG COMPUTER" />
					<meta property="og:type" content="website" />
					{/* <meta property="og:url" content="/img/runeterra.jpg" /> */}
				</Head>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
