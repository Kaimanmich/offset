import { lazy, Suspense, useCallback, useRef } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router';
import { CustomCursor, Noise, PageTransition } from 'ui-kit';
import { CookieBanner } from './components/CookieBanner.jsx';
import { Footer } from './components/Footer.jsx';
import { Navigation } from './components/Navigation.jsx';
import { PromoPopup } from './components/PromoPopup.jsx';
import { TransitionPanel } from './components/TransitionPanel.jsx';
import Home from './pages/Home.jsx';

const pages = {
  services: () => import('./pages/Services.jsx'),
  projects: () => import('./pages/Projects.jsx'),
  contact: () => import('./pages/Contact.jsx'),
  concept: () => import('./pages/Concept.jsx'),
  privacy: () => import('./pages/Privacy.jsx'),
  cookies: () => import('./pages/Cookies.jsx'),
  terms: () => import('./pages/Terms.jsx'),
  notFound: () => import('./pages/NotFound.jsx'),
};
const Services = lazy(pages.services);
const Projects = lazy(pages.projects);
const Contact = lazy(pages.contact);
const Concept = lazy(pages.concept);
const Privacy = lazy(pages.privacy);
const Cookies = lazy(pages.cookies);
const Terms = lazy(pages.terms);
const NotFound = lazy(pages.notFound);

// Warm the other routes once the first page is idle so transitions never wait on a chunk.
if (typeof window !== 'undefined') {
  const warm = () => [pages.services, pages.projects, pages.concept, pages.contact].forEach((load) => load());
  if ('requestIdleCallback' in window) window.requestIdleCallback(warm, { timeout: 4000 });
  else setTimeout(warm, 2500);
}

function Shell() {
  const location = useLocation();
  const mainRef = useRef(null);

  // After the outgoing page is covered: jump to top and hand focus to the new page.
  const onExitComplete = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    mainRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Naar de inhoud
      </a>
      <Navigation />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <PageTransition routeKey={location.pathname} panel={<TransitionPanel />} onExitComplete={onExitComplete}>
          <Suspense fallback={<div style={{ minHeight: '100svh' }} />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/diensten" element={<Services />} />
              <Route path="/projecten" element={<Projects />} />
              <Route path="/werk/:slug" element={<Concept />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/voorwaarden" element={<Terms />} />
              <Route path="/services" element={<Navigate to="/diensten" replace />} />
              <Route path="/projects" element={<Navigate to="/projecten" replace />} />
              <Route path="/werk" element={<Navigate to="/projecten" replace />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </PageTransition>
      </main>
      <CookieBanner />
      <PromoPopup />
      <CustomCursor />
      <div className="grain-frame" aria-hidden="true">
        <div className="grain">
          <Noise opacity={0.06} style={{ mixBlendMode: 'normal' }} />
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Shell />
    </BrowserRouter>
  );
}
