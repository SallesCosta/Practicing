import { useState, useEffect, ChangeEvent, useRef, KeyboardEvent } from 'react'
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
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
  }, [Array])

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    return setValue(e.target.value)
  }

  const handleDelete = (id: string) => {
    return setArray(prevstate => prevstate.filter(item => (item.id !== id)))
  }

  const AddItem = () => {
    if (!Array) { return null }
    inputRef.current?.focus()
    setArray(Array.concat({
      index: index,
      id: v4(),
      content: value,
    }))
    setIndex(index + 1)
    setValue('')
  }

  const handleAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      AddItem()
    }
  }
  return { index, value, Array, handleChange, AddItem, handleDelete, inputRef, handleAdd }
}
