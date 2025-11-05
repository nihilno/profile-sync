import "@/app/globals.css";
import { inter } from "@/lib/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import Providers from "./providers";
import SineWaveCanvas from "@/components/global/SinewaveCanvas";

export const metadata: Metadata = {
  title: "Profile Sync",
  description: "Job application tracking system for job hunters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterMultiSessionSingleSignOutUrl="/" afterSignOutUrl="/">
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} min-h-dvh antialiased`}>
          <Providers>
            <SineWaveCanvas />
            <div className="relative z-10">{children}</div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
