import Link from "next/link";

const Header = () => (
  <header className="sticky top-6 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/40 bg-white/90 px-6 py-3 backdrop-blur shadow-smooth">
    <Link href="#" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-700">
      Geely An Giang
    </Link>
    <nav className="hidden items-center gap-4 text-sm font-medium text-slate-600 md:flex">
      <Link href="#gioi-thieu" className="transition hover:text-primary">
        Giới thiệu
      </Link>
      <Link href="#san-pham" className="transition hover:text-primary">
        Sản phẩm
      </Link>
      <Link href="#lien-he" className="transition hover:text-primary">
        Liên hệ
      </Link>
    </nav>
    <Link
      href="https://zalo.me/84939681703"
      target="_blank"
      className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-light"
    >
      Liên hệ Zalo
    </Link>
  </header>
);

export default Header;
