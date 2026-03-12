import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="antialiased"
    >
      <body className="bg-black text-white">
        <ThemeProvider>
          <div className="relative min-h-screen w-full">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

