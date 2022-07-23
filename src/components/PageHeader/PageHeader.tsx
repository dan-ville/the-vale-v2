import './PageHeader.scss'

const PageHeader = ({ text }: { text: string }) => {
  return <h2 className="page-header">{text}</h2>
}

export default PageHeader
