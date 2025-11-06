import Image from "next/image";

type Car = {
  name: string;
  description: string;
  specs: string[];
  image: string;
};

const cars: Car[] = [
  {
    name: "Geely Coolray",
    description:
      "SUV đô thị năng động với thiết kế trẻ trung, động cơ 1.5L Turbo mạnh mẽ và công nghệ an toàn hiện đại.",
    specs: ["Động cơ 1.5L Turbo 177 mã lực", "Hệ thống hỗ trợ đỗ xe tự động", "Màn hình giải trí 12.3 inch"],
    image:
      "https://images.unsplash.com/photo-1617813482807-90f20ae956da?auto=format&fit=crop&w=1080&q=80",
  },
  {
    name: "Geely Monjaro",
    description:
      "SUV cỡ lớn sang trọng, không gian rộng rãi chuẩn doanh nhân với khoang nội thất cao cấp và tiện nghi.",
    specs: ["Động cơ 2.0L Turbo 238 mã lực", "Công nghệ an toàn L2 ADAS", "Âm thanh Bose 12 loa"],
    image:
      "https://images.unsplash.com/photo-1544639637-62e4fd47a03a?auto=format&fit=crop&w=1080&q=80",
  },
  {
    name: "Geely EX5 (EV)",
    description:
      "Dòng xe điện thông minh, vận hành êm ái, tiết kiệm với phạm vi hoạt động lên đến 450 km mỗi lần sạc.",
    specs: ["Pin Lithium 70 kWh", "Tích hợp Geely Smart Ecosystem", "Sạc nhanh 30 phút đạt 80%"],
    image:
      "https://images.unsplash.com/photo-1620899563820-6c5c8a604afc?auto=format&fit=crop&w=1080&q=80",
  },
];

const FeaturedCars = () => (
  <section
    id="san-pham"
    className="mx-auto max-w-6xl space-y-10 rounded-3xl bg-slate-900/90 p-8 text-white shadow-smooth lg:p-12"
  >
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h2 className="text-3xl font-semibold md:text-4xl">Sản phẩm nổi bật</h2>
        <p className="mt-2 max-w-xl text-base text-slate-300">
          Những mẫu xe Geely bán chạy nhất tại Việt Nam với thiết kế hiện đại, vận
          hành bền bỉ và công nghệ tiên tiến. Thành luôn sẵn xe để lái thử và tư
          vấn chi tiết từng phiên bản.
        </p>
      </div>
    </div>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <article
          key={car.name}
          className="group flex flex-col overflow-hidden rounded-3xl bg-white/10 backdrop-blur"
        >
          <div className="relative h-56">
            <Image
              src={car.image}
              alt={car.name}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4 p-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">{car.name}</h3>
              <p className="text-sm text-slate-200">{car.description}</p>
            </div>
            <ul className="space-y-2 text-sm text-slate-200">
              {car.specs.map((spec) => (
                <li
                  key={spec}
                  className="flex items-start gap-2 rounded-xl bg-white/5 px-3 py-2 text-left"
                >
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-primary-light" aria-hidden />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default FeaturedCars;
