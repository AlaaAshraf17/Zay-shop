// src/services/productsAPI.js

// Helper to build query string from params object
function buildQuery(params) {
    const qp = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== '') {
        qp.append(key, value);
      }
    });
    return qp.toString();
  }
  
  // Fetch list of products with optional pagination, category, sort, search
  export async function getAllProducts({ page, category, sort, search }) {
    const query = buildQuery({ page, category, sort, search });
    const res = await fetch(`/api/products?${query}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
    }
    return res.json();  // expected shape: { products: [...], totalPages, page }
  }
  
  // Fetch a single product by its ID
  export async function getProductById(id) {
    const res = await fetch(`/api/products/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch product ${id}: ${res.status} ${res.statusText}`);
    }
    return res.json();  // full product object
  }
  

  
