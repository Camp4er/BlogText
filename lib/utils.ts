import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
  //twMergwe = tailwind-merge is a utility function to efficiently merge Tailwind CSS classes in JS without style conflicts.
}
