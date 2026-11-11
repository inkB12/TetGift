import { LoginForm } from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      {/* Card trắng bo góc theo ảnh */}
      <div className="bg-white w-full max-w-[480px] p-8 md:p-12 rounded-2xl shadow-xl border border-tet-secondary/30">
        <h1 className="text-4xl font-serif text-tet-primary text-center mb-10">
          Đăng Nhập
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
