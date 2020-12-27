function Button({ variant = '', className = '', ...props }) {
  return <button className={`button ${variant} ${className}`} {...props} />
}

export default Button
