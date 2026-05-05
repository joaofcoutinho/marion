export function wppLink(phone: string, message: string): string {
  return `https://wa.me/55${phone}?text=${encodeURIComponent(message)}`
}
