// src/feature/products/components/ProductReviews.tsx
import { Star } from "lucide-react";

export default function ProductReviews() {
  return (
    <section className="py-20 border-t border-gray-100 mt-20">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Điểm số trung bình */}
        <div className="w-full lg:w-1/3 space-y-6">
          <h3 className="text-2xl font-serif font-bold text-tet-primary">
            Đánh giá
          </h3>
          <div className="flex items-center gap-6">
            <span className="text-7xl font-black text-tet-primary">
              4.5<span className="text-2xl text-gray-300">/5</span>
            </span>
            <div className="flex gap-1 text-yellow-500">
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star size={24} />
            </div>
          </div>
          {/* Progress Bar Ratings */}
          <div className="space-y-3">
            {[5, 4, 3, 2].map((num) => (
              <div key={num} className="flex items-center gap-4">
                <span className="text-xs font-bold text-gray-400 w-4">
                  {num}
                </span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-tet-primary rounded-full"
                    style={{ width: `${num * 15}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bình luận khách hàng */}
        <div className="flex-1 space-y-8">
          <h3 className="text-2xl font-serif font-bold text-tet-primary">
            Bình luận
          </h3>
          <div className="bg-gray-50 p-8 rounded-[2rem] space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=user1" alt="avatar" />
              </div>
              <div>
                <p className="text-sm font-bold text-tet-primary">
                  Linh Nguyễn
                </p>
                <div className="flex gap-0.5 text-yellow-500 scale-75 origin-left">
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 italic">
              "Hộp quà rất đẹp, đóng gói chắc chắn và sang trọng. Rất hài lòng
              với dịch vụ giao hàng nhanh của shop!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
