// src/feature/auth/components/AuthLayout.tsx
export function AuthLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="min-h-[80vh] bg-tet-bg flex flex-col items-center justify-center p-4 md:p-10">
      <div className="bg-white w-full max-w-[450px] p-6 md:p-10 rounded-2xl shadow-xl border border-tet-secondary/30 transition-all">
        <h1 className="text-3xl md:text-4xl font-serif text-tet-primary text-center mb-6 md:mb-8 italic">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}
