import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-2 text-6xl font-bold text-primary">404</h1>
      <p className="mb-8 text-lg text-text-secondary">
        抱歉，你访问的页面不存在
      </p>
      <Link
        href="/"
        className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        返回首页
      </Link>
    </div>
  );
}
