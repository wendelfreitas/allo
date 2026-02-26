'use client';

import { Button } from '@allo/ui';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useCartStore } from '../../../store/cart';
import { MobileNav } from '../MobileNav/MobileNav';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const itemCount = useCartStore((s) => s.getItemCount());
  const openCart = useCartStore((s) => s.openCart);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-foreground"
          >
            all<span className="text-primary">O</span>{' '}
            <span className="text-sm font-normal text-muted-foreground">
              eats
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/restaurants"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Restaurants
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/restaurants">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search size={18} />
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={openCart}
          >
            <ShoppingBag size={18} />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {itemCount > 99 ? '99+' : itemCount}
              </span>
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </nav>

      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
    </header>
  );
}
