import { createServer } from 'node:http'

const server = createServer((req, res) => {
  if (req.url === '/users' && req.method === 'GET') {
    res.end('Users')
  }
})

server.listen(3000)

import { createServer} from 'node:http'
const server = createServer((req, res) => {
    if (req.url === '/users' && req.method === 'GET') {
        res.end('Users')
    } else (res.url === '/')
})


server.listen(3000)

const server = createServer((req, res) => {
    if (req.url === '/users' && req.method === 'GET') {
        res.end('Users')
    } else (res)
})