import "./Button.scss"

interface Props extends React.PropsWithChildren {
  type?: "primary" | "default"
  style?: {}
}

const Button = ({ children, style }: Props) => {
  return <button className="custom-button" style={style}>{children}</button>
}

export default Button
