import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import SEO from '../common/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found — MAXVY Technologies" description="The page you are looking for does not exist." />
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-navy-900 pt-20">
        <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-70" />
        <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-30" />
        <div className="container-page relative text-center">
          <p className="font-heading text-[10rem] font-bold leading-none text-primary-500 lg:text-[14rem]">
            404
          </p>
          <h1 className="mt-2 text-2xl font-bold text-white lg:text-3xl">
            This page took a different route.
          </h1>
          <p className="mx-auto mt-3 max-w-md text-navy-200">
            The page you are looking for may have moved. Let's get you back on track.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn-primary">
              <Home className="h-4 w-4" /> Back to home
            </Link>
            <Link to="/products" className="btn-outline-light">
              View products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
