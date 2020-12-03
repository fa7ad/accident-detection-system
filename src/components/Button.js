function Button({ className = '', variant = 'indigo', ...props }) {
  const variantClasses = `bg-${variant}-700 focus:bg-${variant}-900 hover:bg-${variant}-800 focus:ring-${variant}-600`
  return (
    <button
      className={`${variantClasses}
      focus:outline-none focus:ring-2 focus:ring-opacity-50 text-white rounded-md shadow-md p-4 my-1 ${className}`}
      {...props}
    />
  )
}

export default Button
