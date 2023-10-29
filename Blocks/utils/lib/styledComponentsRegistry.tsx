'use client';
import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import theme from "./theme";
import {ServerStyleSheet, StyleSheetManager, ThemeProvider} from "styled-components";
import {useRouter} from "next/navigation";


export default function StyledComponentsRegistry({children,}: { children: React.ReactNode; }) {
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
	
	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		styledComponentsStyleSheet.instance.clearTag();
		return styles;
	});
	
	if (typeof window !== 'undefined') return <>{children}</>;
	
	return (
		<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</StyleSheetManager>
	);
}
