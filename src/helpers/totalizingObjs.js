export const handleTotalizingObjs = (listItems, totalizeBy) => {
  const totals = listItems.reduce( (acc, item) => {
    const exists = acc?.find(tag => tag[totalizeBy] === item[totalizeBy])
    const listWithoutCurrentItem = acc?.filter(tag => tag[totalizeBy] !== item[totalizeBy])

    if (!exists) {
      acc?.push({...item, count: 1})
    } else {{
      acc = [...listWithoutCurrentItem, {...exists, count: exists.count+1}]
    }}

    return acc
  }, [])  
  
  return totals
}

export default handleTotalizingObjs