export const queryKeys = {
  categories: {
    all: ["categories"] as const,
  },
  restaurants: {
    all: ["restaurants"] as const,
    list: (params: Record<string, unknown>) =>
      ["restaurants", "list", params] as const,
    detail: (slug: string) => ["restaurants", "detail", slug] as const,
  },
  promotions: {
    all: ["promotions"] as const,
  },
  orders: {
    detail: (id: string) => ["orders", id] as const,
  },
};
