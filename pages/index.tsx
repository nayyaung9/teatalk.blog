import Layout from '../components/layout/Layout'
import Hero from '../components/hero/Hero'
import NewsLetter from '../components/newsletter/NewsLetter';
import TestimonialList from '../components/testimonials/Testimonials';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TestimonialList />
      <NewsLetter />
    </Layout>
  )
}
