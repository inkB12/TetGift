// src/feature/products/components/ProductInfo.tsx
import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function ProductInfo() {
  const [selectedSize, setSelectedSize] = useState("Vừa");

  return (
    <section className="flex flex-col lg:flex-row gap-12 lg:gap-20">
      {/* GALLERY ẢNH */}
      <div className="w-full lg:w-1/2 space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="aspect-square rounded-[2.5rem] overflow-hidden border-8 border-white shadow-xl bg-white"
        >
          <img
            src="https://res.cloudinary.com/dratbz8bh/image/upload/v1769521637/IN-VO-HOP-QUA-TET_z1cmai.jpg"
            className="w-full h-full object-cover"
            alt="Main"
          />
        </motion.div>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-tet-primary transition-all shadow-sm"
            >
              <img
                src="https://res.cloudinary.com/dratbz8bh/image/upload/v1769313271/1714504461883_xqmhva.png"
                className="w-full h-full object-cover"
                alt={`Thumb ${i}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* THÔNG TIN CHI TIẾT */}
      <div className="w-full lg:w-1/2 space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-tet-primary">
              Quà tết niên
            </h1>
            <button className="p-3 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors">
              <Heart size={24} />
            </button>
          </div>
          <p className="text-3xl font-black text-tet-accent">1,250,000đ</p>
        </div>

        {/* Lựa chọn Kích cỡ */}
        <div className="space-y-4">
          <p className="text-sm font-bold text-tet-primary uppercase tracking-widest">
            Kích cỡ:
          </p>
          <div className="flex gap-4">
            {["To", "Vừa", "Nhỏ"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${selectedSize === size ? "bg-tet-primary text-white shadow-lg" : "bg-white text-gray-400 border border-gray-100 hover:border-tet-primary"}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Nút Thêm vào giỏ */}
        <button className="w-full bg-[#4a0d06] text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:brightness-125 transition-all shadow-xl">
          <ShoppingCart size={24} /> Thêm vào giỏ hàng
        </button>

        {/* Thông tin thêm & Tags */}
        <div className="pt-8 border-t border-gray-100 space-y-6">
          <p className="text-sm text-gray-500 italic leading-relaxed">
            Món quà mang đậm nét truyền thống nhưng không kém phần hiện đại, là
            lời chúc bình an và thịnh vượng.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {["Hiện đại", "Yêu thích", "Thân thiện", "Bán chạy"].map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-2 text-xs font-bold text-tet-primary"
              >
                <span className="w-2 h-2 bg-tet-secondary rounded-full"></span>{" "}
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
