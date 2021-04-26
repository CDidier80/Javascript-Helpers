const getCurrentDateString = (): string => {
  const date = new Date()
  const dateStr: string = (date.getMonth() > 8) 
    ? String((date.getMonth() + 1))
    : ('0' + (date.getMonth() + 1)) + '/' + ((date.getDate() > 9) 
      ? date.getDate() 
      : ('0' + date.getDate())) + '/' + date.getFullYear()
  return dateStr
}

