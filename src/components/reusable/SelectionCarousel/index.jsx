import React from 'react'
import Button from '../Button'
import Input from '../Input'
import { SelectionCarouselWrapper, SelectionControls, SelectionDisplay, SelectionEntities, SelectionEntity, SelectionPanes } from './styles'

const SelectionCarousel = ({ entities, titleKey, saveSelection, preSelected=[] }) => {
  const [selection, setSelection] = React.useState([])
  const [filter, setFilter] = React.useState('')
  const [filteredEntities, setFilteredEntities] = React.useState([])

  React.useEffect(() => {
    const preSelectedEntities = preSelected.map(item => ({ ...entities.find(entity => entity.id === item.id), order: item.order }))
  
    setSelection(preSelectedEntities)
  }, [entities]);

  React.useEffect(() => {
    if (filter === '') {
      setFilteredEntities(entities)
    } else {
      setFilteredEntities(entities.filter(entity => entity.alphaPoint.toLowerCase().includes(filter.toLowerCase())))
    }
  }, [filter, entities])

  const addtoSelected = (entity) => {
    const order = selection.length;
    const items = [...selection, { ...entity, order }];

    setSelection(items)
  }

  const removeSelected = (entity) => {
    const filteredSelection = selection.filter(item => item.id !== entity.id);

    setSelection(filteredSelection)
  }

  const save = () => {
    saveSelection(selection.map(item => ({
      id: item.id,
      order: item.order
    })))
  }

  const clear = () => {
    setSelection([])
  }

  const selectionIncludesEntity = (entity) => {
    return Boolean(selection.find(item => item.id === entity.id))
  }

  const toggleSelected = (entity) => {
    if (selectionIncludesEntity(entity)) {
      removeSelected(entity)
    } else {
      addtoSelected(entity)
    }
  }

  const getOrderedSelection = () => {
    const predicate = (a, b) => {
      return a.order - b.order
    }

    const ordered = selection.sort(predicate) || []

    return ordered
  }

  const reorderSelection = (order, entity) => {
    const currentItems = [...selection].filter(item => item.id !== entity.id)

    // // Slot item into currentItems
    currentItems.splice(order, 0, entity)

    // Reapply ordering
    const orderedItems = currentItems.map((item, idx) => ({ ...item, order: idx }))

    setSelection(orderedItems)
  }

  const pushItemUp = (entity) => {
    const order = entity.order - 1
  
    reorderSelection(order, entity)
  }

  const pushItemDown = (entity) => {
    const order = entity.order + 1

    reorderSelection(order, entity)
  }

  return (
    <SelectionCarouselWrapper>
      <SelectionEntities>
        <Input label="Filter entities" onChange={setFilter} value={filter} />
        <SelectionPanes>
          <SelectionDisplay>
            <>
              {filteredEntities.map(entity => (
                <SelectionEntity key={entity.id} onClick={() => toggleSelected(entity)} selected={selectionIncludesEntity(entity)}>
                  <p>Alpha point: {entity[titleKey]}</p>
                </SelectionEntity>
              ))}
            </>
          </SelectionDisplay>
          <SelectionDisplay>
            <>
              {getOrderedSelection().map(entity => (
                entity && (
                  <SelectionEntity key={entity.id}>
                    <p>Alpha point: {entity[titleKey]}</p>
                    <div>
                      { entity.order !== 0 && (<Button onClick={() => pushItemUp(entity)}>^</Button>) }
                      { entity.order !== selection.length - 1 && (<Button onClick={() => pushItemDown(entity)}>v</Button>) }
                    </div>
                  </SelectionEntity>
                )
              ))}
            </>
          </SelectionDisplay>
        </SelectionPanes>
      </SelectionEntities>
      <SelectionControls>
        <Button onClick={save}>Save Selection</Button>
        <Button onClick={clear}>Clear Selection</Button>
      </SelectionControls>
    </SelectionCarouselWrapper>  
  )
}

export default SelectionCarousel
