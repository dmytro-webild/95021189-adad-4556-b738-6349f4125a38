"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Collection",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Lumina Gems"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Timeless Elegance, Crafted for You"
      description="Discover our collection of handcrafted jewelry, blending traditional artistry with modern luxury. Each piece is a testament to timeless beauty and precision."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-seller-recommending-gold-products-customer_651396-1491.jpg",
          imageAlt: "elegant jewelry boutique store interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509235.jpg",
          imageAlt: "diamond ring close up macro",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-scene-from-ordinary-mall-america_23-2151564183.jpg",
          imageAlt: "gold bracelet luxury accessories",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/european-woman-with-bright-make-up-elegant-outfit-preparing-birthday-party_291650-580.jpg",
          imageAlt: "European woman with bright make up in elegant outfit preparing for birthday party",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-relaxing-with-diary_23-2150522498.jpg",
          imageAlt: "Front view woman relaxing with diary",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-object_1122-1944.jpg",
          imageAlt: "earrings jewelry luxury style",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/various-plants-berries-ice-blocks-balls_23-2148216350.jpg",
          imageAlt: "jewelry design workshop craft",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hand-with-long-black-nails_23-2147680269.jpg",
          imageAlt: "elegant jewelry collection showcase",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/shops-with-glass-counters-blurry_1203-824.jpg",
          imageAlt: "Shops with glass counters blurry",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/arab-man-wear-black-jeans-jacket-eyeglasses-cafe-drink-coffee-bar-with-book-stylish-fashionable-arabian-model-guy_627829-982.jpg",
          imageAlt: "Arab man wear on black jeans jacket and eyeglasses in cafe drink coffee at bar with book",
        },
      ]}
      buttons={[
        {
          text: "Shop Collection",
          href: "#products",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/jewelry-store-employee-helps-customer-choose-gift-male-customer-choosing-jewelry-store_166373-8868.jpg",
          alt: "jewelry store employee helps a customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509244.jpg",
          alt: "Beautiful engagement ring",
        },
        {
          src: "http://img.b2bpic.net/free-photo/still-life-object_1122-1918.jpg",
          alt: "still life & object",
        },
        {
          src: "http://img.b2bpic.net/free-photo/wedding-rings-wedding-celebrations-accessories-decorations_78826-2240.jpg",
          alt: "Wedding rings",
        },
        {
          src: "http://img.b2bpic.net/free-photo/shiny-gemstone-ring-platinum-luxury-elegance-captured-generated-by-ai_188544-9991.jpg",
          alt: "Shiny gemstone ring",
        },
      ]}
      avatarText="Trusted by 5,000+ happy clients"
      marqueeItems={[
        {
          type: "text",
          text: "Conflict-Free Diamonds",
        },
        {
          type: "text",
          text: "Ethically Sourced Gold",
        },
        {
          type: "text",
          text: "Handcrafted Excellence",
        },
        {
          type: "text",
          text: "Timeless Designs",
        },
        {
          type: "text",
          text: "Premium Craftsmanship",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="A Legacy of Craftsmanship"
      description={[
        "For over three decades, Lumina Gems has been defining elegance through meticulously handcrafted jewelry. Our journey began with a passion for rare stones and fine metals.",
        "Every design is created in our local workshop, ensuring the highest standards of quality and detail. We believe that jewelry is more than an accessory—it's a story to be cherished.",
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Classic Gold Ring",
          price: "$890",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-ring-with-purple-gemstone_1203-1533.jpg",
        },
        {
          id: "2",
          name: "Diamond Pendant",
          price: "$1,250",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-female-wearing-beautiful-silver-necklace-with-diamond-pendant_181624-21106.jpg",
        },
        {
          id: "3",
          name: "Ethereal Earrings",
          price: "$640",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-woman-tropical-luxury-villa-wearing-white-stylish-blazer-jewellery-tropical-leaves_343596-1959.jpg",
        },
        {
          id: "4",
          name: "Ruby Halo Ring",
          price: "$1,750",
          imageSrc: "http://img.b2bpic.net/free-photo/necklace-with-green-emerald-stones_114579-13071.jpg",
        },
        {
          id: "5",
          name: "Gold Bangle",
          price: "$980",
          imageSrc: "http://img.b2bpic.net/free-photo/close-shot-womans-hands-with-ring-bracelet-jewerly_343596-1626.jpg",
        },
        {
          id: "6",
          name: "Diamond Bracelet",
          price: "$2,100",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-bride-tries-her-dress_8353-9256.jpg",
        },
      ]}
      title="Curated Collections"
      description="Explore our hand-selected pieces, each designed to capture light and celebrate life's most precious moments."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "30+",
          title: "Years of Excellence",
          description: "Serving our local community with pride.",
          imageSrc: "http://img.b2bpic.net/free-photo/blurred-corridor_1203-1418.jpg",
        },
        {
          id: "m2",
          value: "500+",
          title: "Unique Designs",
          description: "Each piece uniquely envisioned and hand-crafted.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509243.jpg",
        },
        {
          id: "m3",
          value: "100%",
          title: "Conflict-Free",
          description: "Sourced with ethical integrity in mind.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-love-paying-with-credit-card-jewelry-stor_7502-7614.jpg",
        },
      ]}
      title="Craftsmanship in Numbers"
      description="Our commitment to excellence translates into enduring beauty and customer trust."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          handle: "@sarahm",
          testimonial: "The ring is even more stunning in person. Incredible quality.",
          imageSrc: "http://img.b2bpic.net/free-photo/lady-with-naked-shoulders-holds-her-head-down-posing_8353-398.jpg",
        },
        {
          id: "2",
          name: "David Chen",
          handle: "@dchen",
          testimonial: "Excellent service and truly custom designs. Highly recommend.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-wearing-chain-necklace_23-2149490498.jpg",
        },
        {
          id: "3",
          name: "Emily Watson",
          handle: "@ewatson",
          testimonial: "I love the unique style and attention to detail at Lumina.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-beauty-ethnicity-facial-expressions-concept-attractive-african-american-female-model-rests-coffee-shop-with-friend-lover_273609-3170.jpg",
        },
        {
          id: "4",
          name: "Mark Johnson",
          handle: "@mjohn",
          testimonial: "My wife was absolutely thrilled with the anniversary gift.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-taking-break-after-shopping_23-2148660685.jpg",
        },
        {
          id: "5",
          name: "Elena Rodriguez",
          handle: "@elena",
          testimonial: "Beautiful store, wonderful people, and timeless jewelry.",
          imageSrc: "http://img.b2bpic.net/free-photo/blonde-curly-young-woman-smiles-sincerely-outdoors-happy-charming-girl-white-blouse-pearl-necklace-poses-city-center_197531-29988.jpg",
        },
      ]}
      title="What Our Clients Say"
      description="Reflections from those who cherish our unique creations."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you offer custom designs?",
          content: "Yes, we specialize in custom bespoke jewelry tailored to your specific vision and budget.",
        },
        {
          id: "f2",
          title: "How do I clean my jewelry?",
          content: "We recommend using a soft microfiber cloth for daily cleaning. Avoid harsh chemicals.",
        },
        {
          id: "f3",
          title: "What is your return policy?",
          content: "We accept returns on non-custom items within 30 days in original condition.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Common inquiries about our jewelry, care, and services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-static",
      }}
      text="Ready to find your next heirloom? Visit our boutique in downtown or contact us for a private consultation."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/close-up-consultant-hands-presenting-necklace-store_651396-1499.jpg"
      logoText="Lumina Gems"
      columns={[
        {
          title: "Collection",
          items: [
            {
              label: "Rings",
              href: "#",
            },
            {
              label: "Necklaces",
              href: "#",
            },
            {
              label: "Bracelets",
              href: "#",
            },
          ],
        },
        {
          title: "About",
          items: [
            {
              label: "Our Story",
              href: "#",
            },
            {
              label: "Services",
              href: "#",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
