import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Dojofans';
	const description = "Hey 👋 Welcome to Dojofans";

	return {
		title,
		description,
		canonical: `https://dojofans.com${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'Dojofans',
			url: `https://dojofans.com/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://nuro.dev/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@workdojos',
			site: '@workdojos',
		},
		...props,
	};
}
