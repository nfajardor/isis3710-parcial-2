import { Card, Table } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import TableElement from './TableElement'
import CardComponent from './CardComponent'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'
function TableComponent(props) {
  /*
  console.log('language', lang)
  console.log('tipo', typeof lang)
*/
  let allData = props.data
  const [card, setCard] = useState(false)
  const [series, setSeries] = useState({})

  const selectSeries = (s) => {
    /* console.log('click en:')
    console.log(s.name)*/
    setCard(true)
    setSeries(s)
    //console.log(s)
  }

  const handleSize = () => {
    if (card) return 8
    return 12
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={handleSize}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>
                  <FormattedMessage id="Name" />
                </th>
                <th>
                  <FormattedMessage id="Channel" />
                </th>
                <th>
                  <FormattedMessage id="Seasons" />
                </th>
                <th>
                  <FormattedMessage id="Episodes" />
                </th>
                <th>
                  <FormattedMessage id="Release" />
                </th>
              </tr>
            </thead>
            <tbody>
              {allData.map((series) => (
                <TableElement
                  key={series.id}
                  data={series}
                  select={selectSeries}
                />
              ))}
            </tbody>
          </Table>
        </Col>
        <Col xs={1 - handleSize}>
          <CardComponent data={series} />
        </Col>
      </Row>
    </Container>
  )
}
export default TableComponent

/* 
{props.data.map((serie) => (
          <TableElement key={serie.id} data={serie} />
        ))}
*/
