import { rest, setApplicationId, setBotId } from 'discordeno'
import { createServer, Http2ServerRequest, Http2ServerResponse } from 'http2'
import { BOT_ID, DISCORD_TOKEN, REST_AUTHORIZATION_KEY, REST_PORT } from '../configs'

// SETUP INTERNAL VALUES TO MAKE REST WORK!
rest.token = DISCORD_TOKEN
rest.authorization = REST_AUTHORIZATION_KEY

// DON'T WAIT FOR READY EVENT TO FILL THESE!
setBotId(BOT_ID)
setApplicationId(BOT_ID)

// TODO: find a more modern node http server alternative (ideally designed for serverless)
const server = createServer((request: Http2ServerRequest, response: Http2ServerResponse) => {
  response.end('Hello world!')
})

server.listen(REST_PORT, (error) => {
  if (error) {
    return console.log(error)
  }

  console.log(`Server listening on port ${REST_PORT}`)
})
