import React, { useCallback, useEffect, useState } from 'react'
import FormControl from './FormControl'
import TeacherView from './TeacherView'
import type { IData } from '../types'

const Main = () => {
  const [data, setData] = useState<IData[]>( JSON.parse(localStorage.getItem("data") || '[]') || [])
  const [editingItem, setEditingItem] = useState<null | IData>(null)

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data])

  const handleDelete = useCallback((id: number) => {
    setData(prev => prev.filter((item) => item.id !== id))
  }, [setData])
  return (
    <div>
      <FormControl setData={setData} editingItem={editingItem} setEditingItem={setEditingItem}/>
      <TeacherView onDelete={handleDelete} setEditingItem={setEditingItem} data={data}/>
    </div>
  )
}

export default React.memo(Main)