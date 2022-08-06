export const CATEGORIES = ["about", "contacts", "team", "our services", "our clients"];

export const LINKS = [
  ...CATEGORIES.map(category => ({ to: `/pages/${category}`, label: category, exact: false })),
	{ to: "/pages/admin", label: "Admin", exact: true }
];
