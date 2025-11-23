
// This array acts as a mock database for now.
// In Module 3, this will be replaced with actual database interactions using Prisma.
const mockProducts = [
  { id: '1', name: 'Laptop Pro', description: 'Powerful laptop for professionals', price: 1200, category: 'Electronics' },
  { id: '2', name: 'Mechanical Keyboard', description: 'Gaming mechanical keyboard with RGB', price: 95, category: 'Accessories' },
  { id: '3', name: 'Wireless Mouse', description: 'Ergonomic wireless mouse', price: 50, category: 'Accessories' },
];


const getAllProducts = async () => {
  // Simulate an asynchronous operation (e.g., database query)
  return Promise.resolve(mockProducts);
};


const getProductById = async (productId) => {
  // Simulate an asynchronous operation
  return Promise.resolve(mockProducts.find(product => product.id === productId));
};


module.exports = {
  getAllProducts,
  getProductById,
};