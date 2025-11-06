'use client';

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  message: "",
};

const ContactSection = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <section
      id="lien-he"
      className="mx-auto max-w-5xl space-y-8 rounded-3xl bg-white p-8 shadow-smooth lg:p-12"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Tư vấn & Liên hệ
          </h2>
          <p className="mt-2 max-w-xl text-base text-slate-600">
            Điền thông tin dưới đây hoặc liên hệ trực tiếp qua Zalo/Điện thoại.
            Thành sẽ phản hồi trong vòng 30 phút giờ làm việc.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 px-5 py-4 text-sm text-slate-600">
          <p>
            <span className="font-semibold text-slate-900">Điện thoại:</span>{" "}
            0939&nbsp;681&nbsp;703 (Zalo)
          </p>
          <p>
            <span className="font-semibold text-slate-900">Email:</span>{" "}
            phuocthanh120696@gmail.com
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-inner lg:grid-cols-2 lg:p-8"
      >
        <div className="space-y-2">
          <label className="block text-sm font-semibold uppercase tracking-wide text-slate-500">
            Họ và tên
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Nguyễn Văn A"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold uppercase tracking-wide text-slate-500">
            Số điện thoại
          </label>
          <input
            type="tel"
            name="phone"
            required
            pattern="^(\\+?84|0)\\d{9,10}$"
            value={form.phone}
            onChange={handleChange}
            placeholder="0939 681 703"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="lg:col-span-2">
          <label className="block text-sm font-semibold uppercase tracking-wide text-slate-500">
            Lời nhắn
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Anh/chị cần tư vấn mẫu xe, chương trình ưu đãi hay lái thử?"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex flex-col gap-3 lg:col-span-2 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-slate-500">
            Thanh toán, đăng ký và giao xe tận nơi trong tỉnh An Giang. Liên hệ
            để nhận báo giá độc quyền từ showroom.
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Gửi yêu cầu tư vấn
          </button>
        </div>
        {submitted && (
          <p className="lg:col-span-2 rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">
            Cảm ơn anh/chị! Thành đã nhận được thông tin và sẽ liên hệ sớm nhất.
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactSection;
