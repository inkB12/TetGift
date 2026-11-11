// src/feature/blog/components/Newsletter.tsx
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="bg-tet-primary py-16 md:py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center text-[#FBF5E8]">
        {/* Tiêu đề & Mô tả */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
            Đăng ký nhận thông báo
          </h2>
          <p className="text-sm md:text-base opacity-80 max-w-lg mx-auto italic">
            Nhận những ý tưởng quà tặng mới nhất và các bài viết hay về truyền
            thống Tết Việt.
          </p>

          {/* Form đăng ký */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-10 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="w-full px-6 py-3.5 rounded-full bg-white text-tet-primary text-sm focus:outline-none focus:ring-2 focus:ring-tet-secondary placeholder:text-gray-400"
            />
            <button className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-white text-tet-primary font-bold text-sm hover:bg-tet-secondary transition-all shadow-lg shrink-0">
              Đăng ký
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
