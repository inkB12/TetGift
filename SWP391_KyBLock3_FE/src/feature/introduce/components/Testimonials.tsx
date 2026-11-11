import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const feedbacks = [
    {
      name: "Anh Minh Tuấn",
      role: "Giám Đốc Kinh Doanh",
      content:
        "Quà Tết từ Happybox thật sự rất chất lượng và sang trọng. Đối tác của tôi rất hài lòng khi nhận được. Chắc chắn sẽ đặt tiếp năm sau!",
      rating: 5,
    },
    {
      name: "Chị Hương Lan",
      role: "Chủ Doanh Nghiệp",
      content:
        "Dịch vụ giao hàng nhanh chóng, đóng gói đẹp mắt. Nhân viên tư vấn nhiệt tình giúp tôi chọn được món quà ý nghĩa cho gia đình. Rất hài lòng!",
      rating: 5,
    },
    {
      name: "Anh Đức Anh",
      role: "Kỹ Sư IT",
      content:
        "Lần đầu đặt quà online mà không lo lắng gì. Sản phẩm đúng như mô tả, giá cả hợp lý. Sẽ giới thiệu cho bạn bè và người thân!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Họa tiết trang trí chìm */}
      <div className="absolute top-10 left-10 opacity-[0.05] pointer-events-none scale-150">
        🏮
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Tiêu đề Banner */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-tet-primary mb-4 font-bold"
          >
            Khách Hàng Nói Gì?
          </motion.h2>
          <p className="text-gray-500 italic text-lg max-w-2xl mx-auto leading-relaxed">
            Hàng nghìn khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng
            tôi.
          </p>
          <div className="w-24 h-1 bg-tet-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Lưới các thẻ Feedback */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {feedbacks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#FBF5E8]/40 p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl border border-tet-secondary/20 transition-all duration-500 relative group"
            >
              {/* Icon dấu ngoặc kép trang trí */}
              <div className="absolute top-6 right-8 text-tet-secondary/30 group-hover:text-tet-accent/20 transition-colors">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Xếp hạng sao */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              {/* Nội dung phản hồi */}
              <p className="text-gray-700 leading-relaxed italic mb-8 relative z-10">
                "{item.content}"
              </p>

              {/* Thông tin khách hàng */}
              <div className="flex items-center gap-4 border-t border-tet-secondary/20 pt-6">
                <div className="w-12 h-12 bg-tet-primary rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-tet-primary text-lg">
                    {item.name}
                  </h4>
                  <p className="text-xs text-tet-accent uppercase tracking-widest font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
