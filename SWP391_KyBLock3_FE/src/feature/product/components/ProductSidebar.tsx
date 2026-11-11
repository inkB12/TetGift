import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


export default function ProductSidebar() {
  return (
    <aside className="space-y-10 pr-6">
      {/* Danh mục */}
      <div className="space-y-4">
        <h4 className="font-serif font-bold text-tet-primary border-b pb-2">
          Danh mục
        </h4>
        {[
          "Bánh kẹo",
          "Trái cây",
          "Rượu & Đồ uống",
          "Hộp quà cao cấp",
          "Đặc sản vùng miền",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Checkbox
                id={item}
                className="border-tet-primary data-[state=checked]:bg-tet-primary"
              />
              <label
                htmlFor={item}
                className="text-sm text-gray-600 group-hover:text-tet-primary transition-colors cursor-pointer"
              >
                {item}
              </label>
            </div>
            <span className="text-xs text-gray-400 font-medium">(24)</span>
          </div>
        ))}
      </div>

      {/* Khoảng giá */}
      <div className="space-y-6">
        <h4 className="font-serif font-bold text-tet-primary border-b pb-2">
          Khoảng giá
        </h4>
        <Slider
          defaultValue={[0, 5000000]}
          max={5000000}
          step={100000}
          className="text-tet-primary"
        />
        <div className="flex justify-between text-xs font-bold text-gray-500">
          <span>0đ</span>
          <span>5.000.000đ</span>
        </div>
      </div>

      {/* Đánh giá & Ngày giao */}
      <div className="space-y-4">
        <h4 className="font-serif font-bold text-tet-primary border-b pb-2">
          Ngày giao hàng
        </h4>
        <RadioGroup defaultValue="soon">
          {["Giao ngay hôm nay", "Giao trong 2-3 ngày", "Giao trước Tết"].map(
            (opt, i) => (
              <div key={i} className="flex items-center gap-3 py-1">
                <RadioGroupItem
                  value={`opt-${i}`}
                  id={`opt-${i}`}
                  className="border-tet-primary text-tet-primary"
                />
                <label
                  htmlFor={`opt-${i}`}
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  {opt}
                </label>
              </div>
            ),
          )}
        </RadioGroup>
      </div>

      <button className="w-full bg-tet-primary text-white py-3 rounded-xl font-bold hover:bg-tet-accent shadow-md transition-all">
        Áp dụng bộ lọc
      </button>
    </aside>
  );
}
