import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"; // npx shadcn-ui@latest add sheet
import { X, ShoppingBag } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Dữ liệu mẫu cho giỏ hàng
  const cartItems = [
    {
      id: 1,
      name: "Linen Hardcover Journal",
      price: 240000,
      qty: 1,
      img: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Linen Hardcover Journal",
      price: 240000,
      qty: 1,
      img: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      name: "Linen Hardcover Journal",
      price: 240000,
      qty: 1,
      img: "https://via.placeholder.com/80",
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md bg-white border-l border-gray-100 p-0 flex flex-col">
        {/* 1. HEADER */}
        <SheetHeader className="p-6 border-b border-gray-50 flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-tet-primary" size={24} />
            <SheetTitle className="text-xl font-serif font-bold text-tet-primary">
              Giỏ hàng
            </SheetTitle>
          </div>
        </SheetHeader>

        {/* 2. DANH SÁCH SẢN PHẨM */}
        <ScrollArea className="flex-1 px-6">
          <div className="py-6 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-100">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-tet-primary leading-snug">
                      {item.name}
                    </h4>
                    <button className="text-gray-300 hover:text-red-500 transition-colors">
                      <X size={16} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 font-medium">
                    {item.price.toLocaleString()} VND
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* 3. FOOTER & TỔNG TIỀN */}
        <SheetFooter className="p-8 bg-gray-50/50 border-t border-gray-100 flex-col gap-6">
          <div className="space-y-3 w-full">
            <div className="flex justify-between text-sm font-medium text-gray-500">
              <span>Tổng:</span>
              <span>{subtotal.toLocaleString()} vnd</span>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500">
              <span>Phí Ship:</span>
              <span>XXX.XXX vnd</span>
            </div>
            <Separator className="bg-gray-200" />
            <div className="flex justify-between text-lg font-black text-tet-primary uppercase tracking-wider">
              <span>Tổng cộng:</span>
              <span className="text-tet-accent">XXX.XXX vnd</span>
            </div>
          </div>

          <Button className="w-full bg-[#4a0d06] hover:bg-tet-accent text-white py-7 rounded-2xl font-bold text-base shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
            Thanh toán
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
