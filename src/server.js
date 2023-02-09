import http from 'http'
import { Database } from './database.js'
import { json } from './middlewares/json.js'

const database = new Database()

const users = []

const server = http.createServer(async (req, res) => {

    const { method, url } = req

   await json(req, res)

    console.log(req.body.name)

    if (method === 'GET' && url === '/users') {

        const users = database.select('users')

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
        
        database.insert('users', user)

        return res.writeHead(201).end()
    }

    return res.end('Hello World')
})

server.listen(3333)