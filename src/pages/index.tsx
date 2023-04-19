// components
import { ContactSection, ExampleSection } from '@/components/Sections';
import { GoToTop } from '@/components/GoToTop';
import { Hero } from '@/components/Hero';

const HomePage = () => (
  <>
    <Hero
      strap="Profesjonalne video"
      title="Montaż filmów na najwyższym poziomie"
      primary_cta={{ name: 'Learn more', uri: '/o-nas' }}
      img="/img/hero.png"
      subtitle="Oferujemy profesjonalne usługi montażu filmów dla klientów biznesowych oraz prywatnych."
    />
    <ExampleSection />
    <ContactSection />
    <GoToTop />
  </>
);

export default HomePage;
HomePage.Layout = 'Main';
