export default function extractNumber(str: string): number {
  return +str.replace(/[^0-9]/g, '');
}
