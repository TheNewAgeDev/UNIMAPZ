const DEFAULT_STORAGE = { defaultLayer: 'Por Defecto', showInfo: true, retorno: true }

export const getConfigStorage = () => {
  const config = JSON.parse(window.localStorage.getItem('config'))
  return config || DEFAULT_STORAGE
}

export const setConfigStorage = (config) => {
  const lastConfig = getConfigStorage()
  const newConfig = { ...lastConfig, ...config }

  window.localStorage.setItem('config', JSON.stringify(newConfig))
}
