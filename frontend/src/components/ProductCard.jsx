import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="product-card card">
      <div className="product-header">
        <h3 className="product-name">{product.name}</h3>
        <span className={`product-stock ${product.stock > 10 ? 'in-stock' : 'low-stock'}`}>
          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
        </span>
      </div>

      <p className="product-description">{product.description}</p>

      <div className="product-footer">
        <div className="product-price">
          ${product.price.toFixed(2)}
        </div>

        <div className="product-actions">
          <button 
            onClick={() => onEdit(product)} 
            className="btn-icon btn-edit"
            title="Edit"
          >
            ✏️
          </button>
          <button 
            onClick={() => onDelete(product.id)} 
            className="btn-icon btn-delete"
            title="Delete"
          >
            🗑️
          </button>
        </div>
      </div>

      <div className="product-meta">
        <small>Created: {new Date(product.createdAt).toLocaleDateString()}</small>
      </div>
    </div>
  );
}

export default ProductCard;