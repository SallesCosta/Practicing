import { useState, useEffect, ChangeEvent } from 'react'
import { v4 } from 'uuid' // yarn add uuid @types/uuid

export type Lista = {
  index: number
  id: string
  content: string
}

export function useHooks() {
  const [value, setValue] = useState('')
  const [Array, setArray] = useState<Lista[]>([])
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    // console.log(Array)
  }, [Array])

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    return setValue(e.target.value)
  }

  const handleDelete = (id: string) => {
    return setArray(prevstate => prevstate.filter(item => (item.id !== id)))
  }

  const AddItem = () => {
    if (!Array) { return null }
    setArray(Array.concat({
      index: index,
      id: v4(),
      content: value,
    }))
    setIndex(index + 1)
  }

  return { index, value, Array, handleChange, AddItem, handleDelete }
}
