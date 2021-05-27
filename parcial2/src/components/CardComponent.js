import Card from 'react-bootstrap/Card'
function CardComponent(props) {
  console.log(props.data.poster)
  const lang = window.navigator.language || navigator.browserLanguage
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={props.data.poster}
        alt={
          lang.includes('es')
            ? 'Error al cargar la imagen'
            : 'Error while loading image'
        }
      />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>{props.data.description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href={props.data.webpage}>{props.data.webpage}</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
