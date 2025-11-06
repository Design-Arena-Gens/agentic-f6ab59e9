import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Nguyễn Phước Thành | Chuyên viên kinh doanh xe Geely An Giang",
  description:
    "Tư vấn chọn mua xe Geely tại An Giang cùng chuyên viên kinh doanh Nguyễn Phước Thành. Hỗ trợ Coolray, Monjaro, EX5 và dịch vụ chăm sóc khách hàng tận tâm.",
  metadataBase: new URL("https://agentic-f6ab59e9.vercel.app"),
  openGraph: {
    title: "Nguyễn Phước Thành - Geely An Giang",
    description:
      "Chuyên viên kinh doanh xe Geely An Giang, tư vấn xe Coolray, Monjaro, EX5. Liên hệ ngay để nhận báo giá tốt nhất.",
    url: "https://agentic-f6ab59e9.vercel.app",
    siteName: "Geely An Giang - Nguyễn Phước Thành",
    locale: "vi_VN",
    type: "website",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="vi">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
