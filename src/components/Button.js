function Button({ className = '', variant = 'indigo', ...props }) {
  return <button className={`button ${variant} ${className}`} {...props} />
}

export default Button
