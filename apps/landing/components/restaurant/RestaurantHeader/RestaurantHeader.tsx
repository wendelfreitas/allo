"use client";

import Image from "next/image";
import { Badge } from "@allo/ui";
import { Clock, Bike, MapPin } from "lucide-react";
import { StarRating } from "../../shared/StarRating/StarRating";
import { PriceDisplay } from "../../shared/PriceDisplay/PriceDisplay";
import type { RestaurantWithMenu } from "../../../app/api/_data/types";

interface RestaurantHeaderProps {
  restaurant: RestaurantWithMenu;
}

export function RestaurantHeader({ restaurant }: RestaurantHeaderProps) {
  return (
    <div>
      <div className="relative h-48 overflow-hidden sm:h-64 lg:h-80">
        <Image
          src={restaurant.coverImageUrl}
          alt={restaurant.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-16 relative z-10">
          <div className="flex items-end gap-4">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-4 border-background shadow-lg sm:h-28 sm:w-28">
              <Image
                src={restaurant.imageUrl}
                alt={restaurant.name}
                width={112}
                height={112}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pb-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  {restaurant.name}
                </h1>
                {!restaurant.isOpen && (
                  <Badge variant="destructive">Closed</Badge>
                )}
              </div>
              <StarRating
                rating={restaurant.rating}
                reviewCount={restaurant.reviewCount}
              />
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            {restaurant.description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {restaurant.deliveryTime}
            </span>
            <span className="flex items-center gap-1">
              <Bike size={14} />
              Delivery{" "}
              <PriceDisplay cents={restaurant.deliveryFee} />
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {restaurant.address}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {restaurant.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
