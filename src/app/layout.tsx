import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { SidebarProvider, SidebarTrigger } from "@/components/shadcn/sidebar";
import { AppSidebar } from "@/components/shadcn/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EJ-AJ",
  description: "To jest inteligencja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  min-h-screen bg-gradient-to-b from-[#005e9e] to-[#9ab4cf] text-white`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full p-2">
            <SidebarTrigger />

            {children}
          </main>
        </SidebarProvider>
        <Footer />
      </body>
    </html>
  );
}
