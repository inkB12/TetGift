import { motion } from "framer-motion";
import { ShieldCheck, Package, Truck, Headset } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Chất Lượng Đảm Bảo",
      desc: "Sản phẩm được kiểm tra kỹ lưỡng, nguồn gốc rõ ràng từ các nhà cung cấp uy tín.",
      icon: <ShieldCheck size={32} />,
      color: "bg-orange-100",
    },
    {
      title: "Đóng Gói Sang Trọng",
      desc: "Hộp quà được thiết kế tinh tế, thể hiện sự trân trọng và đẳng cấp của người tặng.",
      icon: <Package size={32} />,
      color: "bg-red-100",
    },
    {
      title: "Giao Hàng Nhanh Chóng",
      desc: "Vận chuyển toàn quốc, đảm bảo giao hàng đúng hẹn trước dịp Tết Nguyên Đán.",
      icon: <Truck size={32} />,
      color: "bg-amber-100",
    },
    {
      title: "Hỗ Trợ Tận Tâm",
      desc: "Đội ngũ tư vấn chuyên nghiệp, sẵn sàng hỗ trợ 24/7 để bạn chọn được món quà ưng ý.",
      icon: <Headset size={32} />,
      color: "bg-stone-100",
    },
  ];

  return (
    <section className="py-24 bg-[#FBF5E8] relative overflow-hidden">
      {/* Họa tiết trang trí chìm */}
      <div className="absolute inset-0 bg-cloud-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Tiêu đề Banner */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-tet-primary mb-4 font-bold"
          >
            Tại Sao Chọn Chúng Tôi?
          </motion.h2>
          <p className="text-gray-500 italic text-lg">
            Cam kết mang đến trải nghiệm mua sắm quà Tết tuyệt vời nhất.
          </p>
          <div className="w-24 h-1 bg-tet-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Khu vực Timeline & Nội dung */}
        <div className="relative">
          {/* Đường kẻ lượn sóng nối các giai đoạn (Chỉ hiện trên Desktop) */}
          <svg
            className="absolute top-12 left-0 w-full h-24 z-0 opacity-20 hidden lg:block"
            viewBox="0 0 1200 100"
            fill="none"
          >
            <path
              d="M0,50 C150,120 450,-20 600,50 C750,120 1050,-20 1200,50"
              stroke="#5A1107"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </svg>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon bọc trong vòng tròn có số thứ tự */}
                <div className="relative mb-8">
                  <div
                    className={`w-24 h-24 ${item.color} rounded-full flex items-center justify-center text-tet-primary shadow-xl border-4 border-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    {item.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 bg-tet-secondary text-tet-primary w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-[#FBF5E8] shadow-md">
                    {index + 1}
                  </span>
                </div>

                <div className="space-y-4 px-4">
                  <h3 className="text-2xl font-serif text-tet-primary font-bold group-hover:text-tet-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base italic">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
