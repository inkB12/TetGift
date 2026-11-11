import { motion } from "framer-motion";
import { MapPin, Edit3, Trash2, Plus, CheckCircle2 } from "lucide-react";

export default function AccountAddresses() {
  const addresses = [
    {
      id: 1,
      name: "Nguyễn Thị Mai",
      phone: "0987654321",
      address: "123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
      note: "Gần chợ Bến Thành",
      isDefault: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6"
    >
      {/* Tiêu đề trang */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-2xl font-serif font-bold text-tet-primary">
            Địa chỉ
          </h3>
          <p className="text-sm text-gray-400 italic">
            Theo dõi và quản lý các đơn hàng của bạn
          </p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-tet-accent font-bold text-sm hover:underline">
          Quản lý tất cả
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* 1. DANH SÁCH ĐỊA CHỈ HIỆN CÓ */}
        {addresses.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-gray-100 relative group transition-all hover:shadow-lg"
          >
            {/* Tag Mặc định */}
            {item.isDefault && (
              <div className="absolute top-6 right-6 md:right-8 bg-green-50 text-green-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 border border-green-100">
                <CheckCircle2 size={12} /> Mặc định
              </div>
            )}

            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="p-4 bg-[#FBF5E8] text-tet-primary rounded-2xl shrink-0 h-fit">
                <MapPin size={24} />
              </div>

              <div className="space-y-4 flex-1">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-tet-primary">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">
                    {item.phone}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                    {item.address}
                  </p>
                  <p className="text-xs text-gray-400 italic">
                    Lưu ý: {item.note}
                  </p>
                </div>

                {/* Các nút hành động */}
                <div className="flex items-center gap-6 pt-2 border-t border-gray-50">
                  <button className="flex items-center gap-2 text-xs font-bold text-tet-primary hover:text-tet-accent transition-colors">
                    <Edit3 size={16} /> Chỉnh sửa
                  </button>
                  <button className="flex items-center gap-2 text-xs font-bold text-red-500 hover:text-red-700 transition-colors">
                    <Trash2 size={16} /> Xóa
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* 2. NÚT THÊM ĐỊA CHỈ MỚI */}
        <motion.button
          whileHover={{ scale: 1.01, backgroundColor: "#FBF5E8" }}
          whileTap={{ scale: 0.99 }}
          className="w-full py-10 md:py-14 border-2 border-dashed border-gray-200 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 text-gray-400 hover:border-tet-secondary hover:text-tet-primary transition-all group"
        >
          <div className="p-4 bg-gray-50 rounded-full group-hover:bg-white transition-colors shadow-sm">
            <Plus size={32} />
          </div>
          <span className="font-bold text-sm tracking-widest uppercase">
            Thêm địa chỉ mới
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}
