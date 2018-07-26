import React from 'react';

const Button = (props) => {
  const { children, color, onClick } = props
  return (
    <button style={{ color: color }} onClick={() => onClick(color)}>{children}</button>
  )
}

export default Button;
