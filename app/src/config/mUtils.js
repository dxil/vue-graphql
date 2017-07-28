export const setStore = (key, content) => {
  let _content = content
  if (!key) return;
  if (typeof content !== 'string') {
    _content = JSON.stringify(content)
  }
  sessionStorage.setItem(key, _content)
}

export const getStore = (key) => {
  if (!key) return;
  return sessionStorage.getItem(key)
}

export const removeStore = (key) => {
  if (!key) return;
  sessionStorage.removeItem(key)
}