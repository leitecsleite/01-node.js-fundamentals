import http from 'http'
import { json } from './middlewares/json.js'

const users = []

const server = http.createServer(async (req, res) => {

    const { method, url } = req

   await json(req, res)

    console.log(req.body.name)

    if (method === 'GET' && url === '/users') {
        return res
            .setHeader("Content-type", 'application/json')
            .end(JSON.stringify(users))
    }

    if (method === "POST" && url === "/users") {

        const { name, email } = req.body
        users.push({
            id: 1,
            name,
            email,
        })
        return res.writeHead(201).end()
    }

    return res.end('Hello World')
})

server.listen(3333)