import { assetsIntance } from '../helpers/axios'

export const getArticles = () => {
  return assetsIntance.get(`/articles`)
}