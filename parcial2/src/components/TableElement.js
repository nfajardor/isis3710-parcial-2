import { FormattedDate } from 'react-intl'

function TableElement(props) {
  let dateArr = props.data.release.split('/')
  const newDate = dateArr[1] + '/' + dateArr[0] + '/' + dateArr[2]

  return (
    <tr onClick={() => props.select(props.data)}>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
      <td>{props.data.channel}</td>
      <td>{props.data.seasons}</td>
      <td>{props.data.episodes}</td>
      <td>
        <FormattedDate
          value={newDate}
          year="numeric"
          month="long"
          day="numeric"
        ></FormattedDate>
      </td>
    </tr>
  )
}

export default TableElement
