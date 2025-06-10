import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>{siteConfig.contact.address}</p>
              <p className="mt-2">
                Email: <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">{siteConfig.contact.email}</a>
              </p>
              <p className="mt-1">
                Phone: <a href={`tel:${siteConfig.contact.phone}`} className="hover:underline">{siteConfig.contact.phone}</a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <nav className="flex flex-col space-y-2">
              {siteConfig.navigation.footer.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}