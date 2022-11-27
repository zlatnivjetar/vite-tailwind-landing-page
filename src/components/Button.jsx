const Button = (props) => {
  return (
    <a
      href="#"
      className={`p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight ${props.display}`}
    >
      {props.text}
    </a>
  )
}

export default Button
