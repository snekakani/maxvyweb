import SectionTitle from '../../common/SectionTitle';
import Testimonials from '../../common/Testimonials';
import { testimonials } from '../../../data/company';

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionTitle
          eyebrow="Testimonials"
          title="What our customers say"
          description="Leading semiconductor companies trust MAXVY to deliver IP and engineering that ships."
        />
        <div className="mt-14">
          <Testimonials items={testimonials} />
        </div>
      </div>
    </section>
  );
}
