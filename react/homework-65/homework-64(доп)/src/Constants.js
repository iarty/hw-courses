export const CATEGORIES = ["Star Wars", "Famous people", "Saying", "Humour", "Motivational"];

export const CATEGORYLINK = [
	{ to: "/", label: "All", exact: true },
	...CATEGORIES.map(category => ({ to: `/quotes/${category}`, label: category, exact: false }))
];

export const MAINLINK = [
	{ to: "/", label: "Todo list", exact: true },
	{ to: "/films", label: "Films list", exact: true },
];
