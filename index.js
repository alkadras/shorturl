import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.text('Merhaba Hono?'))

export default app