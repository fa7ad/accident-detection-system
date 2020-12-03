function Input({ className = '', variant = 'blue', ...props }) {
  return (
    <input
      className={`p-4 my-2 rounded-md shadow-inner placeholder-gray-400 text-gray-900 appearance-none 
      w-full focus:outline-none ring-${variant}-200 ring-1 focus:ring-${variant}-600 ${className}`}
      {...props}
    />
  )
}

export default Input
