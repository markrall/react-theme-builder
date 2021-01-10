export const setToLS = (key: string, value: string) =>
  window.localStorage.setItem(key, JSON.stringify(value))

export const getFromLS = (key: string) => {
  const value = window.localStorage.getItem(key)
  if (value) {
    return JSON.parse(value)
  }
}

export const deleteFromLS = (key: string) => window.localStorage.removeItem(key)
