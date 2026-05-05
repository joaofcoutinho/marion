import Navbar           from '@/components/Navbar'
import HeroSection      from '@/components/HeroSection'
import BadgesStrip      from '@/components/BadgesStrip'
import AboutSection     from '@/components/AboutSection'
import ProductsSection  from '@/components/ProductsSection'
import FeaturesSection  from '@/components/FeaturesSection'
import StoresSection    from '@/components/StoresSection'
import CtaBanner        from '@/components/CtaBanner'
import Footer           from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BadgesStrip />
        <AboutSection />
        <ProductsSection />
        <FeaturesSection />
        <StoresSection />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
