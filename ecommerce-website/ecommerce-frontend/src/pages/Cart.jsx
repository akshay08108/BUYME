const Cart = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      <div className="bg-white rounded-2xl p-8 text-center">
        <p className="text-2xl text-gray-400">Your cart is empty</p>
        <p className="mt-4 text-gray-500">Start shopping to add items!</p>
      </div>
    </div>
  );
};

export default Cart;
