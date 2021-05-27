import TableComponent from './TableComponent'
import { FormattedMessage } from 'react-intl'
import Graph from './Graph'
Graph()
function Main(props) {
  return (
    <div>
      <h1>
        <FormattedMessage id="Title" />
      </h1>
      <hr></hr>
      <TableComponent data={props.data} />
    </div>
  )
}

export default Main
