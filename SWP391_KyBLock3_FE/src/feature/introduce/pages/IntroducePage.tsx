import { motion, useScroll, useSpring } from "framer-motion";
import IntroHero from "../components/IntroHero";
import StorySection from "../components/StorySection";
import WhyChooseUs from "../components/WhyChooseUs";
import OrderProcess from "../components/OrderProcess";
import QualitySection from "../components/QualitySection";
import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FaqSection";

// Thành phần bao bọc hiệu ứng hiện dần cho từng Section
const ScrollReveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function IntroducePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative bg-[#FBF5E8]">
      {/* 1. Thanh tiến trình cuộn trang cao cấp */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-tet-accent z-[150] origin-left"
        style={{ scaleX }}
      />

      {/* 2. Banner 1: Hero - Luôn hiện ngay lập tức */}
      <section id="intro-hero">
        <IntroHero />
      </section>

      {/* 3. Các Banner tiếp theo với hiệu ứng hiện dần khi cuộn tới */}
      <div className="flex flex-col">
        {/* Banner 2: Câu chuyện Happybox */}
        <ScrollReveal>
          <StorySection />
        </ScrollReveal>

        {/* Banner 3: Tại sao chọn chúng tôi (Timeline Giá trị) */}
        <ScrollReveal>
          <WhyChooseUs />
        </ScrollReveal>

        {/* Banner 4: Quy trình đặt quà (Timeline 4 bước) */}
        <ScrollReveal>
          <OrderProcess />
        </ScrollReveal>

        {/* Banner 5: Đóng gói & Chất lượng (Grid ảnh) */}
        <ScrollReveal>
          <QualitySection />
        </ScrollReveal>

        {/* Banner 6: Khách hàng nói gì (Feedback) */}
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        {/* Banner 7: Câu hỏi thường gặp (FAQ Accordion) */}
        <ScrollReveal>
          <FaqSection />
        </ScrollReveal>
      </div>
    </div>
  );
}
