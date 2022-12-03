// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<{
		styles: JSX.Element;
		html: string;
		head?: JSX.Element[];
	}> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		// console.log(originalRenderPage);

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(
							<>
								<App {...props} />
							</>
						)
				});

			const initialProps = await Document.getInitialProps(ctx);

         // @ts-ignore
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/assets/svg-logo.svg" type="image/jpg" sizes="16x16" />
                    <title> Tippers 🎲🃏</title>
                    <meta
                        name="description"
                        content="Tippers is a gaming platform on the Polygon blockchain."
                    />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:title"
                        content="Tippers 🎲🃏"
                    />
                    <meta property="og:image" content="/assets/svg-logo.svg" />
                    <meta
                        property="og:description"
                        content="Tippers is a gaming platform on the Polygon blockchain."
                    />
                    <meta
                        name="twitter:title"
                        content="Tippers is a gaming platform on the Polygon blockchain."
                    />
                    <meta
                        name="twitter:description"
                        content="Tippers is a gaming platform on the Polygon blockchain.."
                    />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}