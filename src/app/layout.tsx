import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amit Sahu - Web Designer & Fullstack Developer",
  description: "Passionate about visual design and technology. I specialize in fullstack development and UI/UX design, building elegant and professional user interfaces and websites.",
  keywords: ["web developer", "fullstack developer", "UI/UX designer", "Next.js", "React", "Python", "Django"],
  authors: [{ name: "Amit Sahu" }],
  openGraph: {
    title: "Amit Sahu - Web Designer & Fullstack Developer",
    description: "Passionate about visual design and technology. I specialize in fullstack development and UI/UX design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Sahu - Web Designer & Fullstack Developer",
    description: "Passionate about visual design and technology. I specialize in fullstack development and UI/UX design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
