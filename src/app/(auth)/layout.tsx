import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold">{siteConfig.name}</h2>
            </Link>
            {children}
          </div>
        </div>
      </div>
      <footer className="py-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}