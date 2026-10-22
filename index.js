/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */


 @type {Item[]}
 
const INVENTORY = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 3, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 5, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 91, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 47, name: "carrots", price: 2.25, category: "vegetable", quantity: 94 },
  { id: 82, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 6, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 101, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

/**
 * @param {Item[]} items
 * @returns {number[]} 
function getIds(items) {
  return items.map((item) => item.id);
}

/**
 * @param {Item[]} items
 * @returns {string[]} 
function getCategories(items) {
  return items.map((item) => item.category);
}


 * @param {Item[]} items
 * @returns {string[]} 
function getSkus(items) {
  return items.map((item) => `${item.id}#${item.name}#${item.name.length}`);
}

/**
 * @param {Item[]} items
 * @returns {Item[]} 
function getFruits(items) {
  return items.filter((item) => item.category === "fruit");
}

/**
 * @param {Item[]} items
 * @param {string} category
 * @returns {Item[]}
function getItemsByCategory(items, category) {
  return items.filter((item) => item.category === category);
}


 * @param {Item[]} items
 * @returns {Item[]} 
function getCheapItems(items) {
  return items.filter((item) => item.price <= 2.5);
}

/**
 * @param {Item[]} items
 * @returns {number} 
function countItems(items) {
  return items.reduce((count, item) => count + item.quantity, 0);
}

/**
 * @param {Item[]} items
 * @returns {number}
function getTotalCost(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

/**
 * @param {Item[]} items
 * @returns {Item} 
 */
function getMostExpensiveItem(items) {
  return items.reduce((mostExpensive, item) =>
    item.price > mostExpensive.price ? item : mostExpensive,
  );
}
