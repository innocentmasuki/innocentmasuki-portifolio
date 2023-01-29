export const tailwindColors = [
  ["red-500", "red-100"],
  ["green-500", "green-100"],
  ["blue-500", "blue-100"],
  ["purple-500", "purple-100"],
  ["teal-500", "teal-100"],
  ["orange-500", "orange-100"],
  ["indigo-500", "indigo-100"],
  ["pink-500", "pink-100"],
];

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

export function getCategoryColor(categoryName: string, bg = false): string {
  const colorIndex = Math.abs(hashCode(categoryName)) % tailwindColors.length;
  return bg
    ? `bg-${tailwindColors[colorIndex][1]}`
    : `text-${tailwindColors[colorIndex][0]}`;
}
