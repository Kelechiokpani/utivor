import { Metadata } from 'next';
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import Layout from "../../../../layout/layout";


interface AppLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'KreativeRock Digital',
    description: 'KreativeRock - Drive Business Engagement Better with Technology.',
    robots: { index: false, follow: false },
    viewport: { initialScale: 1, width: 'device-width' },
    openGraph: {
        type: 'website',
        title: 'KreativeRock Digital',
        url: 'https://sakai.primereact.org/',
        description: 'KreativeRock - Drive Business Engagement Better with Technology.',
        images: ['https://www.primefaces.org/static/social/sakai-react.png'],
    },
    icons: {
        icon: '/favicon.ico'
    }
};

export default function AppLayout({ children }: AppLayoutProps) {
    return <Layout>{children}</Layout>;
}
