export interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const mockBlogs: BlogPost[] = [
  {
    id: 1,
    title: "10 Món Quà Tết Ý Nghĩa Cho Gia Đình Việt Nam",
    description:
      "Tết Nguyên Đán là dịp lễ quan trọng nhất trong năm của người Việt. Đây không chỉ là thời gian sum họp gia đình mà còn là cơ hội để thể hiện tình cảm, lòng biết ơn qua những món quà ý nghĩa.",
    author: "Minh Anh",
    date: "15 Tháng 12, 2023",
    readTime: "8 phút đọc",
    category: "Gift Guides",
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1769521637/IN-VO-HOP-QUA-TET_z1cmai.jpg",
    content:
      "Giới thiệu về văn hóa tặng quà Tết... Bánh chưng, bánh tét - biểu tượng của sự sum vầy... Hoa mai, hoa đào mang lại may mắn... Trà cao cấp thể hiện sự tôn trọng...",
  },
  {
    id: 2,
    title: "5 Phong tục Tết không thể thiếu trong gia đình Việt",
    description:
      "Khám phá những truyền thống quan trọng nhất của Tết Nguyên Đán và cách thực hiện chúng để giữ gìn nét đẹp văn hóa dân tộc.",
    author: "Hoàng Nam",
    date: "12 Tháng 12, 2023",
    readTime: "5 phút đọc",
    category: "Truyền thống",
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1769521485/chup-anh-gia-dinh-4-nguoi-3_orhvcx.png",
    content: "Phong tục cúng ông Táo, dọn dẹp nhà cửa, gói bánh chưng...",
  },
  {
    id: 3,
    title: "Cách chọn quà Tết cho đối tác kinh doanh",
    description:
      "Hướng dẫn chi tiết để lựa chọn món quà Tết phù hợp, thể hiện sự tôn trọng và củng cố mối quan hệ hợp tác bền vững.",
    author: "Lê Hải",
    date: "10 Tháng 12, 2023",
    readTime: "7 phút đọc",
    category: "Quà tặng doanh nghiệp",
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1769521491/Gia-Dinh-Doan-Vien-T_v0n9to.png",
    content: "Lưu ý về sở thích đối tác, văn hóa quà tặng công ty...",
  },
  {
    id: 4,
    title: "Nghệ thuật gói quà Tết đẹp mắt và tinh tế",
    description:
      "Học cách gói quà Tết một cách tinh tế và ý nghĩa với những mẹo hay từ chuyên gia thiết kế bao bì.",
    author: "Thanh Thảo",
    date: "8 Tháng 12, 2023",
    readTime: "4 phút đọc",
    category: "Bao bì",
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1769313271/1714504461883_xqmhva.png",
    content: "Cách sử dụng giấy mỹ thuật, thắt nơ lụa và phụ kiện trang trí...",
  },
  {
    id: 5,
    title: "Top 8 món quà Tết truyền thống được yêu thích",
    description:
      "Danh sách những món quà Tết kinh điển mà mọi gia đình Việt đều trân trọng và ý nghĩa trong dịp đầu xuân.",
    author: "Trần Bình",
    date: "6 Tháng 12, 2023",
    readTime: "6 phút đọc",
    category: "Gift Guides",
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1769521637/IN-VO-HOP-QUA-TET_z1cmai.jpg",
    content: "Giỏ quà hạt dinh dưỡng, trà thượng hạng, rượu vang...",
  },
  {
    id: 6,
    title: "Cách mua quà Tết tiết kiệm mà vẫn ý nghĩa",
    description:
      "Bí quyết chọn quà Tết chất lượng với ngân sách hợp lý, không làm giảm giá trị món quà dành cho người nhận.",
    author: "Ngọc Mai",
    date: "4 Tháng 12, 2023",
    readTime: "5 phút đọc",
    category: "Khuyến mãi",
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1769521637/IN-VO-HOP-QUA-TET_z1cmai.jpg",
    content: "Lên kế hoạch sớm, tận dụng các đợt giảm giá, tự tay chuẩn bị...",
  },
  {
    id: 7,
    title: "Ý nghĩa của việc tặng quà trong dịp Tết",
    description:
      "Tìm hiểu sâu sắc về văn hóa tặng quà Tết và cách thể hiện lòng biết ơn qua món quà chân thành.",
    author: "Sơn Tùng",
    date: "2 Tháng 12, 2023",
    readTime: "8 phút đọc",
    category: "Truyền thống",
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1769521485/chup-anh-gia-dinh-4-nguoi-3_orhvcx.png",
    content: "Gắn kết tình thân, tri ân đối tác, mong cầu bình an...",
  },
];