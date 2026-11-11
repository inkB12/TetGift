# 🎁 TetGift — Nền tảng quà tặng Tết trực tuyến

> **Môn học:** SWP391 – KyBlock3  
> **Mã lớp:** DTV214  
> **Nhóm:** KyBlock3

TetGift là hệ thống thương mại điện tử chuyên về quà tặng dịp Tết, hỗ trợ đặt hàng trực tuyến, báo giá tuỳ chỉnh (custom quotation), thanh toán VnPay, chat AI với Gemini, và bản đồ định vị cửa hàng.

---

## 🏗️ Kiến trúc tổng thể

```
SWP/
├── DTV214-SWP391_KyBLock3_BE/   # Backend – ASP.NET Core 8
│   ├── TetGift/                  # API Layer (Controllers, Middleware)
│   ├── TetGift.BLL/              # Business Logic Layer (Services, DTOs, Hubs)
│   └── TetGift.DAL/              # Data Access Layer (EF Core, Entities, Repositories)
│
└── SWP391_KyBLock3_FE/          # Frontend – React 19 + TypeScript + Vite
    └── src/                      # Source code ứng dụng
```

---

## 🖥️ Backend – `DTV214-SWP391_KyBLock3_BE`

### Tech Stack

| Công nghệ | Phiên bản | Vai trò |
|-----------|-----------|---------|
| ASP.NET Core | 8.0 | Web API framework |
| Entity Framework Core | 8.0 | ORM – PostgreSQL |
| Supabase (PostgreSQL) | — | Database |
| Redis | — | Caching |
| SignalR | — | Real-time chat |
| Resend | — | Gửi email |
| VnPay | Sandbox | Thanh toán |
| Cloudinary | — | Upload media |
| Gemini API | gemini-2.5-flash | AI Chat |
| Swagger (Swashbuckle) | 6.6.2 | API docs |

---

### 📁 Cấu trúc thư mục Backend

#### `TetGift/` — API Layer

```
TetGift/
├── Controllers/              # API Endpoints
│   ├── AuthController.cs             # Đăng ký, đăng nhập, OTP, JWT
│   ├── ProductsController.cs         # Danh sách sản phẩm
│   ├── ProductDetailsController.cs   # Chi tiết & cấu hình sản phẩm
│   ├── ProductCategoriesController.cs
│   ├── ProductConfigsController.cs
│   ├── CartController.cs             # Giỏ hàng
│   ├── OrderController.cs            # Đặt hàng
│   ├── PaymentController.cs          # Thanh toán VnPay + IPN callback
│   ├── QuotationsController.cs       # Báo giá tuỳ chỉnh (khách)
│   ├── StaffQuotationsController.cs  # Xử lý báo giá (nhân viên)
│   ├── AdminQuotationsController.cs  # Quản lý báo giá (admin)
│   ├── AdminAccountsController.cs    # Quản lý tài khoản (admin)
│   ├── ProfileController.cs          # Hồ sơ người dùng
│   ├── AccountAddressesController.cs # Địa chỉ giao hàng
│   ├── AccountPromotionsController.cs
│   ├── PromotionsController.cs       # Mã khuyến mãi
│   ├── BlogsController.cs            # Blog / tin tức
│   ├── FeedbackController.cs         # Đánh giá sản phẩm
│   ├── ChatController.cs             # Chat thời gian thực (SignalR)
│   ├── AIChatController.cs           # Chat AI (Gemini)
│   ├── InventoryController.cs        # Quản lý kho hàng
│   ├── DashboardController.cs        # Dashboard tổng quan
│   ├── DashboardComparisonController.cs
│   ├── DashboardRankingController.cs
│   ├── StatisticsController.cs       # Thống kê doanh thu
│   ├── MediaController.cs            # Upload ảnh (Cloudinary)
│   ├── StoreLocationsController.cs   # Bản đồ cửa hàng
│   ├── DirectionsController.cs       # Chỉ đường
│   ├── ContactsController.cs         # Liên hệ
│   └── ConfigDetailsController.cs    # Cấu hình hệ thống
│
├── BackgroundJobs/           # Hangfire / hosted services
├── EmailTemplates/           # HTML templates email (Razor-like)
├── Filters/                  # Action filters (validation, auth)
├── Middlewares/              # Custom middleware (error handling, ...)
├── Properties/               # launchSettings.json
├── appsettings.json          # Cấu hình (placeholder, không có secret)
└── appsettings.Development.json  # ⛔ Gitignored – chứa secret local
```

#### `TetGift.BLL/` — Business Logic Layer

```
TetGift.BLL/
├── Services/                 # Toàn bộ business logic
│   ├── AuthService.cs                # Xác thực, JWT, OTP
│   ├── AccountService.cs             # Tài khoản người dùng
│   ├── ProductService.cs             # Sản phẩm
│   ├── ProductDetailService.cs       # Chi tiết sản phẩm
│   ├── ProductConfigService.cs
│   ├── ProductCategoryService.cs
│   ├── CartService.cs                # Giỏ hàng
│   ├── OrderService.cs               # Đơn hàng
│   ├── OrderFromQuotationService.cs  # Đơn từ báo giá
│   ├── PaymentService.cs             # VnPay integration
│   ├── QuotationService.cs           # Báo giá tuỳ chỉnh
│   ├── PromotionService.cs           # Khuyến mãi
│   ├── BlogService.cs                # Blog
│   ├── FeedbackService.cs            # Đánh giá
│   ├── ChatService.cs                # Chat real-time
│   ├── GeminiChatService.cs          # AI Chat (Gemini API)
│   ├── InventoryService.cs           # Kho hàng
│   ├── DashboardService.cs           # Dashboard
│   ├── StatisticService.cs           # Thống kê
│   ├── MediaService.cs               # Cloudinary upload
│   ├── StoreLocationService.cs       # Cửa hàng
│   ├── DirectionsService.cs          # Chỉ đường
│   ├── InvoiceService.cs             # Xuất hoá đơn
│   ├── CacheService.cs               # Redis cache
│   ├── ResendEmailSender.cs          # Gửi email (Resend)
│   └── JwtTokenGenerator.cs          # Sinh JWT
│
├── Dtos/                     # Data Transfer Objects
├── Hubs/                     # SignalR Hubs (Chat real-time)
├── Interfaces/               # Service interfaces
└── Settings/                 # Strongly-typed config classes
```

#### `TetGift.DAL/` — Data Access Layer

```
TetGift.DAL/
├── Entities/                 # EF Core entities
│   ├── Account.cs            # Người dùng
│   ├── Product.cs            # Sản phẩm
│   ├── ProductDetail.cs      # Biến thể sản phẩm
│   ├── ProductConfig.cs      # Tuỳ chọn cấu hình
│   ├── ProductCategory.cs    # Danh mục
│   ├── Cart.cs / CartDetail.cs
│   ├── Order.cs / OrderDetail.cs
│   ├── Payment.cs
│   ├── Quotation.cs          # Báo giá
│   ├── QuotationItem.cs
│   ├── QuotationFee.cs
│   ├── QuotationMessage.cs
│   ├── Promotion.cs
│   ├── Blog.cs
│   ├── Feedback.cs
│   ├── Conversation.cs       # Cuộc hội thoại chat
│   ├── Message.cs            # Tin nhắn chat
│   ├── StoreLocation.cs      # Vị trí cửa hàng
│   ├── Stock.cs              # Tồn kho
│   ├── StockMovement.cs      # Lịch sử nhập/xuất kho
│   ├── Wallet.cs             # Ví điện tử
│   └── WalletTransaction.cs
│
├── Context/                  # DbContext (EF Core)
├── Interfaces/               # Repository interfaces
├── Repositories/             # Triển khai repository pattern
├── UnitOfWork/               # Unit of Work pattern
└── Migrations/               # EF Core migrations
```

---

### ⚙️ Chạy Backend

```bash
cd DTV214-SWP391_KyBLock3_BE

# Copy secret vào file Development (hỏi team lead lấy giá trị thật)
cp TetGift/appsettings.json TetGift/appsettings.Development.json
# Sửa appsettings.Development.json với connection string và API key thật

# Restore & chạy
dotnet restore
dotnet run --project TetGift
```

> API mặc định chạy tại `https://localhost:5001` · Swagger UI: `https://localhost:5001/swagger`

---

## 🌐 Frontend – `SWP391_KyBLock3_FE`

### Tech Stack

| Công nghệ | Phiên bản | Vai trò |
|-----------|-----------|---------|
| React | 19 | UI framework |
| TypeScript | 5.9 | Type safety |
| Vite | 7 | Build tool |
| Tailwind CSS | 4 | Styling |
| React Router DOM | 7 | Routing |
| Redux Toolkit | — | State management |
| Axios | — | HTTP client |
| SignalR Client | — | Real-time chat |
| Recharts | — | Biểu đồ dashboard |
| React Leaflet | — | Bản đồ |
| Radix UI | — | Headless UI components |
| Framer Motion | — | Animation |
| Lucide React | — | Icon |

---

### 📁 Cấu trúc thư mục Frontend

```
SWP391_KyBLock3_FE/src/
├── api/                      # Axios instances & API calls
│
├── components/               # Shared UI components
│   ├── ui/                   # Base components (Button, Input, Dialog, ...)
│   └── common/               # Layout, Header, Footer, ...
│
├── feature/                  # Feature modules (theo domain)
│   ├── auth/                 # Đăng nhập, đăng ký, OTP
│   ├── homepage/             # Trang chủ
│   ├── product/              # Danh sách & chi tiết sản phẩm
│   ├── cart/                 # Giỏ hàng
│   ├── checkout/             # Thanh toán
│   ├── order/                # Lịch sử đơn hàng
│   ├── quotation/            # Báo giá tuỳ chỉnh
│   ├── account/              # Hồ sơ, địa chỉ
│   ├── blog/                 # Blog / tin tức
│   ├── chat/                 # Chat real-time + AI
│   ├── contact/              # Liên hệ
│   ├── introduce/            # Giới thiệu
│   ├── admin/                # Admin dashboard
│   └── staff/                # Giao diện nhân viên
│
├── layouts/                  # Layout chính (MainLayout, AdminLayout, ...)
├── routes/                   # Cấu hình React Router
├── lib/                      # Utilities, helpers
└── assets/                   # Hình ảnh, fonts
```

---

### ⚙️ Chạy Frontend

```bash
cd SWP391_KyBLock3_FE

npm install
npm run dev
```

> Ứng dụng chạy tại `http://localhost:5173`

---

## 🚀 Tính năng chính

| Tính năng | Mô tả |
|-----------|-------|
| 🛍️ Mua sắm | Duyệt sản phẩm, thêm giỏ hàng, đặt hàng |
| 💳 Thanh toán | Tích hợp VnPay (sandbox) |
| 📋 Báo giá tuỳ chỉnh | Khách gửi yêu cầu → nhân viên xử lý → tạo đơn |
| 💬 Chat real-time | Hỗ trợ khách hàng qua SignalR |
| 🤖 AI Chat | Tư vấn sản phẩm với Gemini AI |
| 📊 Dashboard | Thống kê doanh thu, ranking, biểu đồ so sánh |
| 🗺️ Bản đồ | Tìm cửa hàng gần nhất (React Leaflet) |
| 📧 Email | Xác nhận đơn hàng, OTP qua Resend |
| 🖼️ Media | Upload ảnh sản phẩm qua Cloudinary |
| 🏪 Kho hàng | Quản lý tồn kho, lịch sử nhập/xuất |
| 🎉 Khuyến mãi | Mã giảm giá, chương trình ưu đãi |

---

## 🔐 Quản lý Secret (quan trọng!)

> **Không bao giờ commit file chứa secret lên Git!**

| File | Mục đích | Git status |
|------|----------|------------|
| `appsettings.json` | Template (chỉ placeholder) | ✅ Được commit |
| `appsettings.Development.json` | Secret local dev | ⛔ Gitignored |
| `appsettings.Production.json` | Secret production | ⛔ Gitignored |

Liên hệ team lead để lấy file `appsettings.Development.json` với giá trị thật.

---

## 👥 Team

| Vai trò | Thành viên |
|---------|-----------|
| Backend Dev | — |
| Frontend Dev | — |
| Database | — |
| Team Lead | — |

---

*Dự án phát triển trong khuôn khổ môn SWP391 – FPT University*
