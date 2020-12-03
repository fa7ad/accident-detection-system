function Button({ className = '', variant = 'indigo', ...props }) {
  const variantClasses =
    variant === 'red'
      ? 'bg-red-700 focus:bg-red-900 hover:bg-red-800 focus:ring-red-600'
      : variant === 'blue'
      ? 'bg-blue-700 focus:bg-blue-900 hover:bg-blue-800 focus:ring-blue-600'
      : variant === 'indigo'
      ? 'bg-indigo-700 focus:bg-indigo-900 hover:bg-indigo-800 focus:ring-indigo-600'
      : variant === 'purple'
      ? 'bg-purple-700 focus:bg-purple-900 hover:bg-purple-800 focus:ring-purple-600'
      : 'bg-gray-700 focus:bg-gray-900 hover:bg-gray-800 focus:ring-gray-600'

  return (
    <button
      className={`${variantClasses}
      focus:outline-none focus:ring-2 focus:ring-opacity-50 text-white rounded-md shadow-md p-4 my-1 ${className}`}
      {...props}
    />
  )
}

export default Button
