import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Components
import NotFound from '@/components/common/not-found/not-found.jsx';

// Views
const views = {
    Initial: lazy(() => import("@/views/initial.view.jsx"))
};

const LoaderElement = () => {
    return (
        <main className="flex justify-center mt-[250px]">
            <h1 className='text-2xl'>Loading...</h1>
        </main>
    );
};

export function RoutesApp() {
    return (
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<LoaderElement />}>
                            <views.Initial />
                        </Suspense>
                    }
                />

                <Route
                    path="*"
                    element={
                        <Suspense fallback={<LoaderElement />}>
                            <NotFound />
                        </Suspense>
                    }
                />
            </Routes>
        </HashRouter>
    );
}