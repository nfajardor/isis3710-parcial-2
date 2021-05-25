import { Table } from 'react-bootstrap'
import TableElement from './TableElement'
function TableComponent(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Channel</th>
          <th>Seasons</th>
          <th>Episodes</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((serie) => (
          <TableComponent key={serie.id} data={serie} />
        ))}
      </tbody>
    </Table>
  )
}
export default TableComponent
