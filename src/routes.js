import { Database } from './database.js'
import { randomUUID } from 'node:crypto'
import { buildRoutePath } from './utils/build-route-path.js'

const database = new Database()

const user = []

export const  routes = [
    {
        method: 'GET',
        path: buildRoutePath('/users'),
        handle:(req, res) => {
            const users = database.select('users')
            return res
            .setHeader("Content-type", 'application/json')
            .end(JSON.stringify(users))
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/users/:id') ,
        handle:(req, res) => {

            const { name, email } = req.body
            user.push({
                id: randomUUID(),
                name,
                email,
            })
            
            database.insert('users', user)
    
            return res.writeHead(201).end()
        }
    }
]