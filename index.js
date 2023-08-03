import { error, json, Router } from 'itty-router'

const router = Router()

router
  .get('/', () => 'Success!')
  .all('*', () => error(404))

export default {
  fetch: (req, ...args) => router
                            .handle(req, ...args)
                            .then(json)
                            .catch(error)
}
