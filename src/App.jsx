import { Routes, Route } from 'react-router-dom';
import SkipToContent from './components/SkipToContent';
import WaterDrops from './components/WaterDrops';
import ScrollProgress from './components/ScrollProgress';
import Nav from './components/Nav';
import StickyCTA from './components/StickyCTA';
import ExitIntent from './components/ExitIntent';
import CookieConsent from './components/CookieConsent';
import BackToTop from './components/BackToTop';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Guarantee from './components/Guarantee';
import Features from './components/Features';
import AppPreview from './components/AppPreview';
import HowItWorks from './components/HowItWorks';
import WhyFitFlow from './components/WhyFitFlow';
import ComparisonTable from './components/ComparisonTable';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import VideoTestimonial from './components/VideoTestimonial';
import CoachCredentials from './components/CoachCredentials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

function LandingPage() {
  return (
    <>
      <SkipToContent />
      <ScrollProgress />
      <WaterDrops />
      <Nav />
      <StickyCTA />
      <ExitIntent />
      <CookieConsent />
      <BackToTop />
      <Hero />
      <TrustBar />
      <Guarantee />
      <Features />
      <AppPreview />
      <HowItWorks />
      <WhyFitFlow />
      <ComparisonTable />
      <Results />
      <Testimonials />
      <VideoTestimonial />
      <CoachCredentials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
