import CategorieCard from "./CategorieCard";
import { useEffect, useState } from "react";

const Categories = () => {
  const [product, setProduct] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mx-auto flex flex-wrap items-center justify-center">
      {product.map((product) => (
        <CategorieCard
          key={product.id}
          prouctName={product.title}
          image={product.image}
          productLeft={product.rating.count}
        />
      ))}
    </div>
  );
};

export default Categories;
