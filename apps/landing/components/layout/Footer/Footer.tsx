import { Separator } from "@allo/ui";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              all<span className="text-primary">O</span>{" "}
              <span className="text-sm font-normal text-muted-foreground">
                eats
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Premium food delivery from the best restaurants in your city.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/restaurants"
                  className="transition-colors hover:text-foreground"
                >
                  Restaurants
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurants?cuisine=pizza"
                  className="transition-colors hover:text-foreground"
                >
                  Pizza
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurants?cuisine=sushi"
                  className="transition-colors hover:text-foreground"
                >
                  Sushi
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurants?cuisine=burgers"
                  className="transition-colors hover:text-foreground"
                >
                  Burgers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="transition-colors hover:text-foreground cursor-pointer">
                  About Us
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-foreground cursor-pointer">
                  Careers
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-foreground cursor-pointer">
                  Blog
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="transition-colors hover:text-foreground cursor-pointer">
                  Help Center
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-foreground cursor-pointer">
                  Contact
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-foreground cursor-pointer">
                  Terms
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} allO Eats. All rights reserved. This
          is a demo application.
        </p>
      </div>
    </footer>
  );
}
