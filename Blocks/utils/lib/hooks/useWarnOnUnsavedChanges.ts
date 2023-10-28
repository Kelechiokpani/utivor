import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Router from "next/router"
function useWarnOnUnsavedChanges(isDirty: boolean) {
    const router = useRouter();

    useEffect(() => {
        function handleBeforeUnload(event: BeforeUnloadEvent) {
            if (isDirty) {
                event.returnValue = 'You have unsaved changes. Do you really want to leave?';
            }
        }

        function handleRouteChange(url: string) {
            if (isDirty && !window.confirm('You have unsaved changes. Do you really want to leave?')) {
                Router.events.emit('routeChangeError');
                throw 'routeChange aborted.';
            }
        }

        window.addEventListener('beforeunload', handleBeforeUnload);
        Router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            Router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [isDirty, router]);
}

export default useWarnOnUnsavedChanges;
