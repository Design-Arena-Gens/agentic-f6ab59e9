import Link from "next/link";

const Footer = () => (
  <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-4 rounded-3xl bg-slate-900 px-8 py-6 text-sm text-slate-300 lg:flex-row lg:items-center lg:justify-between">
    <p>
      © {new Date().getFullYear()} Nguyễn Phước Thành · Chuyên viên kinh doanh xe
      Geely An Giang.
    </p>
    <div className="flex flex-wrap gap-4 text-slate-200">
      <Link href="tel:0939681703" className="hover:text-primary-light">
        0939&nbsp;681&nbsp;703
      </Link>
      <Link href="mailto:phuocthanh120696@gmail.com" className="hover:text-primary-light">
        phuocthanh120696@gmail.com
      </Link>
      <span>10/18 Trần Hưng Đạo, Mỹ Thới, An Giang</span>
    </div>
  </footer>
);

export default Footer;
