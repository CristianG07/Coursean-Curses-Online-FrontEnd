import { MdClear } from 'react-icons/md'
import { useCartContext } from '../context/CartContext'
import { CartItem } from '../components/cart/CartItem'

export const Cart = () => {
  const { cart: cartItems, total_items, total_amount, clearCart } = useCartContext()

  if (total_items < 1) {
    return (
      <div className='containers mt-10 text-xl font-semibold'>
        <h5>No items found in the cart.</h5>
      </div>
    )
  }

  return (
    <section className='containers flex flex-col md:flex-row gap-8 my-5'>
      <div className='w-full lg:w-[75%] mx-auto'>
        <div className='flex justify-between mb-2'>
          <div>
            <h5 className='text-lg font-bold'>Shopping Cart</h5>
            <p className='text-sm font-medium'>
              <span className='text-lg font-bold'>{total_items}</span> Course in
              Cart
            </p>
          </div>
          <div className='flex items-end text-red-500 text-md font-semibold'>
            <button onClick={() => clearCart()} className='flex items-center gap-1'>
              <MdClear size={20} />
              Clear All
            </button>
          </div>
        </div>
        <div className='grid gap-6'>
          {cartItems?.map((cartItem) => (
            <CartItem key={cartItem.courseID} {...cartItem} />
          ))}
        </div>
      </div>
      <div className='text-lg mt-0 md:mt-8'>
        <div className='grid gap-4'>
          <div>
            <span className='font-semibold'>Total:</span>
            <p className='font-extrabold text-3xl'>${total_amount.toFixed(2)}</p>
          </div>
          <button className='w-fit px-8 py-3 bg-purple-600 hover:bg-purple-800 duration-500 font-bold text-white rounded-sm'>
            <span>Checkout</span>
          </button>
        </div>
      </div>
    </section>
  )
}
