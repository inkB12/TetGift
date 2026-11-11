import { motion } from "framer-motion";
import { Search, Settings2, CreditCard, Home } from "lucide-react";

export default function OrderProcess() {
  const steps = [
    {
      title: "Chọn Quà",
      desc: "Khám phá bộ sưu tập đa dạng hoặc tạo hộp quà tùy chỉnh theo ý thích.",
      icon: <Search size={28} />,
    },
    {
      title: "Tùy Chỉnh",
      desc: "Thêm thiệp chúc, chọn mẫu hộp quà và các dịch vụ bổ sung.",
      icon: <Settings2 size={28} />,
    },
    {
      title: "Thanh Toán",
      desc: "Đặt hàng nhanh chóng với nhiều phương thức thanh toán an toàn.",
      icon: <CreditCard size={28} />,
    },
    {
      title: "Nhận Quà",
      desc: "Giao hàng tận nơi, đảm bảo chất lượng và đúng thời gian.",
      icon: <Home size={28} />,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Tiêu đề Banner */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-tet-primary mb-4 font-bold"
          >
            Quy Trình Đặt Quà
          </motion.h2>
          <p className="text-gray-500 italic text-lg max-w-2xl mx-auto leading-relaxed">
            Chỉ với 4 bước đơn giản, bạn đã có món quà Tết hoàn hảo.
          </p>
          <div className="w-24 h-1 bg-tet-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Khu vực các bước quy trình */}
        <div className="relative">
          {/* Đường kẻ nối ngang (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-tet-secondary/40 -translate-y-[100px] hidden lg:block z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group"
              >
                {/* Số thứ tự và Icon */}
                <div className="relative mb-8">
                  {/* Vòng tròn số thứ tự */}
                  <div className="w-16 h-16 bg-tet-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-xl border-4 border-white relative z-20 group-hover:bg-tet-accent transition-colors duration-300">
                    {index + 1}
                  </div>

                  {/* Card Icon chứa mô tả bước */}
                  <div className="mt-6 w-full bg-[#FBF5E8]/50 p-6 rounded-2xl border border-tet-secondary/20 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-2 flex flex-col items-center">
                    <div className="text-tet-accent mb-4 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-tet-primary mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed italic">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
