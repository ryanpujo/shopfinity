// place files you want to import through the `$lib` alias in this folder.

export type Nav = {
  id: string;
  name: string;
  href: string;
}

export type Product = {
	id: number;
	title: string;
	price: number;
	images: string[];
	description: string;
	category: string;
	rating: number;
};

export function roundToNearestHalf(number: number) {
  const decimal = number - Math.floor(number); // Get the decimal part of the number
  if (decimal >= 0.3 || isEqualToThreeTenths(decimal)) {
    return Math.floor(number) + 0.5; // Round up to the nearest 0.5
  } else {
    return Math.floor(number); // Round down to the nearest whole number
  }
}

function isEqualToThreeTenths(number: number) {
  const tolerance = 0.0001; // Adjust the tolerance value as per your requirements
  return Math.abs(number - 0.3) < tolerance;
}
