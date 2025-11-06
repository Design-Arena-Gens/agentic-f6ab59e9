import Image from "next/image";
import Link from "next/link";

const Hero = () => (
  <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-smooth">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-slate-900/20" />
      <Image
        src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1920&q=80"
        alt="Geely vehicles at showroom"
        fill
        className="object-cover object-center opacity-70"
        priority
      />
    </div>
    <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-2xl space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm uppercase tracking-[0.2em] text-primary-light/90 backdrop-blur">
          Geely An Giang
        </span>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Nguyễn Phước Thành
        </h1>
        <p className="text-lg text-slate-200 md:text-xl">
          Chuyên viên kinh doanh xe Geely An Giang, đồng hành cùng anh/chị lựa
          chọn mẫu xe phù hợp nhất với nhu cầu, phong cách và ngân sách. Cam kết
          tư vấn minh bạch, tận tâm và hỗ trợ trọn đời hành trình sở hữu xe Geely.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://zalo.me/84939681703"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-primary/20 transition hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Liên hệ qua Zalo
          </Link>
          <Link
            href="tel:0939681703"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Gọi ngay
          </Link>
        </div>
      </div>
      <div className="w-full max-w-sm rounded-3xl bg-white/10 p-6 backdrop-blur-lg">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
          Thông tin liên hệ
        </p>
        <ul className="mt-4 space-y-4 text-base text-slate-100">
          <li>
            <span className="font-semibold text-white">Điện thoại:</span>{" "}
            0939&nbsp;681&nbsp;703 (Zalo)
          </li>
          <li>
            <span className="font-semibold text-white">Email:</span>{" "}
            phuocthanh120696@gmail.com
          </li>
          <li>
            <span className="font-semibold text-white">Showroom:</span> Geely An
            Giang
          </li>
          <li>
            <span className="font-semibold text-white">Địa chỉ:</span> 10/18 Trần
            Hưng Đạo, Mỹ Thới, An Giang
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Hero;
