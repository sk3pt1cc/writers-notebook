import React from 'react'
import Button from '../Button'
import Input from '../Input'
import { SelectionCarouselWrapper, SelectionControls, SelectionEntities, SelectionEntity } from './styles'

const SelectionCarousel = ({ entities, titleKey, saveSelection }) => {
  const [selection, setSelection] = React.useState([])
  const [filter, setFilter] = React.useState('')
  const [filteredEntities, setFilteredEntities] = React.useState([])

  React.useEffect(() => {
    if (filter === '') {
      setFilteredEntities(entities)
    } else {
      setFilteredEntities(entities.filter(entity => entity.alphaPoint.toLowerCase().includes(filter.toLowerCase())))
    }
  }, [filter, entities])

  const addtoSelected = (entity) => {
    setSelection([...selection, entity.id])
  }

  const removeSelected = (entity) => {
    setSelection(selection.filter(id => id !== entity.id))
  }

  const save = () => {
    if (selection.length > 0) {
      saveSelection(selection)
    }
  }

  const clear = () => {
    setSelection([])
  }

  const toggleSelected = (entity) => {
    if (selection.includes(entity)) {
      removeSelected(entity)
    } else {
      addtoSelected(entity)
    }
  }

  return (
    <SelectionCarouselWrapper>
      <SelectionControls>
        <Input label="Filter entities" onChange={setFilter} value={filter} />
      </SelectionControls>
      <SelectionEntities>
        {filteredEntities.map(entity => (
          <SelectionEntity key={entity.id} onClick={() => toggleSelected(entity)} selected={selection.includes(entity.id)}>
            <p>Alpha point: {entity[titleKey]}</p>
          </SelectionEntity>
        ))}
      </SelectionEntities>
      <SelectionControls>
        <Button onClick={save}>Save Selection</Button>
        <Button onClick={clear}>Clear Selection</Button>
      </SelectionControls>
    </SelectionCarouselWrapper>  
  )
}

export default SelectionCarousel
