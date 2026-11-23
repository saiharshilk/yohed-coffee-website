/**
 * Prefix a path from /public with the deploy base path.
 *   asset("/images/hero-pour.jpg") -> "/yohed-coffee-website/images/hero-pour.jpg" in production
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${clean}`;
}
