type Prefix = '@Flee:'

type Keys = 'user'

type Cookies = `${Prefix}${Keys}`

export const useLocalStorage = () => {
  const saveLocalStorage = (key: Cookies, value: string) => {
    localStorage.setItem(key, value)
  }

  const getLocalStorage = (key: Cookies) => {
    return localStorage.getItem(key)
  }

  const deleteLocalStorage = (key: Cookies) => {
    localStorage.removeItem(key)
  }

  return { saveLocalStorage, getLocalStorage, deleteLocalStorage }
}
