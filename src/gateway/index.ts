import { startGateway, ws } from 'discordeno'
import WebSocket, { WebSocketServer } from 'ws'
import {
  DISCORD_TOKEN,
  FIRST_SHARD_ID,
  GATEWAY_INTENTS,
  GATEWAY_PORT,
  GATEWAY_SECRET_KEY,
  LAST_SHARD_ID,
  MAX_CLUSTERS,
  MAX_SHARDS,
  SHARDS_PER_CLUSTER,
  URL_GATEWAY_PROXY_WILL_FORWARD_TO,
} from '../configs'

// TODO: Use clusters to separate this maybe?
startGateway({
  token: DISCORD_TOKEN,
  compress: false,
  intents: GATEWAY_INTENTS,
  maxShards: MAX_SHARDS,
  firstShardId: FIRST_SHARD_ID,
  lastShardId: LAST_SHARD_ID,
  shardsPerCluster: SHARDS_PER_CLUSTER,
  maxClusters: MAX_CLUSTERS,
  reshard: true,
  url: URL_GATEWAY_PROXY_WILL_FORWARD_TO,
  secretKey: GATEWAY_SECRET_KEY,
})

// TODO: Support clusters maybe?
ws.tellClusterToIdentify = async function (_workerId, shardId, _bucketId) {}

// ENABLE LOGGER FOR DEBUGGING. OR SEND TO SENTRY ETC
// ws.log = console.log

const wss = new WebSocketServer({
  port: GATEWAY_PORT,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3,
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024,
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024, // Size (in bytes) below which messages
    // should not be compressed.
  },
}).on('connection', function connection(websocket) {
  // Forward events in a custom way
  ws.handleDiscordPayload = async function (data, shardId) {
    // TODO: http or ws here???
    websocket.send('something')
  }

  websocket.on('message', function incoming(message) {
    // HANDLE INCOMING REQUESTS
    // if (!message.)
    console.log('received: %s', message)
  })
})
