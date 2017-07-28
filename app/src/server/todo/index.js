import {Axios} from '../axios'

export const todos = {
  queryByTitle: (title) => Axios('graphql', 'post', '/graphql', {title: title})
}