import http from 'node:http'
import { Transform } from 'node:stream'
import { buffer } from 'stream/consumers'

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString())* -1

        callback(null, Buffer.from(String(transformed)))
    }
}

// req => ReadableStream 

// res => WritableStream

const server = http.createServer(async(req, res)=>{
    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }

   /* return req
    .pipe(new InverseNumberStream())
    .pipe(res)*/
})

server.listen(3334)