const ProductCard = ({ name, brand, price, img }) => {
  return (
    <>
      <div className="border p-4 rounded shadow-md w-[250px]">
        <img src={img} alt={name} className="w-full h-40 object-cover mb-2" />
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">Brand: {brand}</p>
        <p className="text-green-600 font-bold">${price}</p>
      </div>
    </>
  );
};

export default ProductCard;
