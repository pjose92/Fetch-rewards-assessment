import {Selection, Option} from './Selection.styles'

const List = ({list, listId, handleChange, value, format = (item)=> item}) => {
  return (
    <Selection 
      id={listId} 
      defaultValue={value || "default"} 
      onChange={handleChange} 
      required>
        <Option value={"default"} disabled>
          Choose your {listId}
        </Option>
      {list.map((item)=> (
        <Option value={format(item)} key={format(item)} >{format(item)}</Option>
      ))}
    </Selection>
  )
}

export default List;