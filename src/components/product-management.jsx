import React, { useState } from 'react';
import { Upload, Trash2, Edit2 } from 'lucide-react';

// Inline UI components
const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Input = ({ className, ...props }) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 ${className}`}
    {...props}
  />
);

const Textarea = ({ className, ...props }) => (
  <textarea
    className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 ${className}`}
    {...props}
  />
);

const Card = ({ children, className, ...props }) => (
  <div className={`bg-white rounded-xl shadow-md ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-200">{children}</div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-2xl font-semibold">{children}</h2>
);

const CardContent = ({ children }) => (
  <div className="p-6">{children}</div>
);

export function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    id: null,
    name: '',
    description: '',
    country: '',
    images: []
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      url: URL.createObjectURL(file)
    }));
    setCurrentProduct(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }));
  };

  const removeImage = (imageId) => {
    setCurrentProduct(prev => ({
      ...prev,
      images: prev.images.filter(img => img.id !== imageId)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentProduct.name && currentProduct.description && currentProduct.country) {
      if (isEditing) {
        setProducts(prev => prev.map(product => 
          product.id === currentProduct.id ? currentProduct : product
        ));
        setIsEditing(false);
      } else {
        setProducts(prev => [...prev, { ...currentProduct, id: Date.now() }]);
      }
      setCurrentProduct({ id: null, name: '', description: '', country: '', images: [] });
    }
  };

  const editProduct = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };

  const removeProduct = (productId) => {
    setProducts(prev => prev.filter(product => product.id !== productId));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? 'Edit Product' : 'Add New Product'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <div className="space-y-4">
              <label className="block text-sm font-medium">Product Images</label>
              <div className="grid grid-cols-2 gap-4">
                {/* Upload Button */}
                <div className="relative">
                  <Input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-sky-500 rounded-lg cursor-pointer bg-sky-100 hover:bg-sky-200 transition-colors"
                  >
                    <Upload className="w-12 h-12 text-sky-500 mb-2" />
                    <span className="text-sm text-sky-500 font-medium">Upload File</span>
                  </label>
                </div>

                {/* Uploaded Images */}
                {currentProduct.images.map(image => (
                  <div key={image.id} className="relative bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 truncate">{image.name}</span>
                      <Button
                        onClick={() => removeImage(image.id)}
                        className="p-1 rounded-full bg-sky-500 text-white hover:bg-sky-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Product Name</label>
                <Input
                  type="text"
                  value={currentProduct.name}
                  onChange={(e) => setCurrentProduct(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Description</label>
                <Textarea
                  value={currentProduct.description}
                  onChange={(e) => setCurrentProduct(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Country of Origin</label>
                <Input
                  type="text"
                  value={currentProduct.country}
                  onChange={(e) => setCurrentProduct(prev => ({ ...prev, country: e.target.value }))}
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-sky-500 text-white hover:bg-sky-600">
              {isEditing ? 'Update Product' : 'Add Product'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Products List */}
      <Card>
        <CardHeader>
          <CardTitle>Products List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <Card key={product.id}>
                <CardContent>
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    {product.images[0] && (
                      <img
                        src={product.images[0].url}
                        alt={product.name}
                        className="object-cover rounded-lg w-full h-full"
                      />
                    )}
                  </div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                  <p className="text-sm text-gray-500 mt-2">Origin: {product.country}</p>
                  <div className="flex justify-end space-x-2 mt-4">
                    <Button
                      onClick={() => editProduct(product)}
                      className="border border-sky-500 text-sky-500 hover:bg-sky-100"
                    >
                      <Edit2 className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button
                      onClick={() => removeProduct(product.id)}
                      className="bg-red-500 text-white hover:bg-red-600"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

