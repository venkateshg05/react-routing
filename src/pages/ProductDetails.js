import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const params = useParams();
  return (
    <div>
      <h1>{params.productId} page</h1>
    </div>
  );
};

export default ProductsDetails;
