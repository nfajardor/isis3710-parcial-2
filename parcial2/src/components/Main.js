import TableComponent from './TableComponent'
function Main(props) {
  return (
    <div>
      <h1>T.V. Series</h1>
      <TableComponent data={props.data} />
    </div>
  )
}

export default Main
