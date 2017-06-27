import * as compression from 'compression'
import * as express from 'express'
import { createServer as createHTTPServer } from 'http'
import { createServer as createHTTPSServer, Server } from 'https'
import { readFileSync } from 'fs'

const IS_PROD = process.env.IS_PROD
const HTTP_PORT = IS_PROD ? 80 : 5000
const HTTPS_PORT = IS_PROD ? 443 : 5001
const CLIENT_DIR = `${__dirname}/../dist/client`
const ROOT = IS_PROD ? `https://tsedit.co/` : `http://localhost:${HTTP_PORT}/`

let app = express()
  .use(compression())
  .get('*', express.static(CLIENT_DIR))

if (IS_PROD) {
  createHTTPSServer({
      key: readFileSync('/etc/letsencrypt/live/tsedit.co/privkey.pem', 'utf-8'),
      cert: readFileSync('/etc/letsencrypt/live/tsedit.co/fullchain.pem', 'utf-8')
    }, app)
    .on('info', (_: any) => console.info('HTTPS server:', _))
    .listen(HTTPS_PORT, function(this: Server) {
      this.emit('info', `Started HTTPS server on port ${HTTPS_PORT}...`)
    })

  // redirect http to https
  express()
    .get('*', (_, res) => res.redirect(ROOT))
    .listen(HTTP_PORT, () => console.info(`Started HTTP server on port ${HTTP_PORT}...`))
} else {
  createHTTPServer(app)
    .on('info', (_: any) => console.info('HTTP server:', _))
    .listen(HTTP_PORT, function(this: Server) {
      this.emit('info', `Started dev HTTP server on port ${HTTP_PORT}...`)
    })
}
