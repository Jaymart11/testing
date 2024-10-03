import apiClient from "./api";

// Create
export const createProductData = async (data) => {
  const response = await apiClient.post("/products", data);
  return response.data;
};

// Read
export const getProductData = async (categoryId) => {
  const params = categoryId ? { categoryId } : {};
  const response = await apiClient.get("/products", { params });
  return response.data;
};

// Read single
export const getProductDataById = async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};

// Update
export const updateProductData = async (id, data) => {
  const response = await apiClient.put(`/products/${id}`, data);
  return response.data;
};

// Delete
export const deleteProductData = async (id) => {
  const response = await apiClient.delete(`/products/${id}`);
  return response.data;
};
