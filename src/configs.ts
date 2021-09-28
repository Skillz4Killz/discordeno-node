import { DiscordGatewayIntents } from "discordeno";

// TODO: REMOVE THESE! THEY ARE BAD FOR YOU! DUH! Seriously, only keep the ones your bot needs!
export const GATEWAY_INTENTS: (keyof typeof DiscordGatewayIntents)[] = [
    "DirectMessageReactions",
    "DirectMessageTyping",
    "DirectMessages",
    "GuildBans",
    "GuildEmojis",
    "GuildIntegrations",
    "GuildInvites",
    "GuildMembers",
    "GuildMessageReactions",
    "GuildMessageTyping",
    "GuildMessages",
    "GuildPresences",
    "GuildVoiceStates",
    "GuildWebhooks",
    "Guilds"
]

// TODO: dotenv
export const DISCORD_TOKEN = `Bot ${process.env.DISCORD_TOKEN!}`;
if (!process.env.DISCORD_TOKEN) throw new Error("DUDE! You did not provide a Discord token!");

// Set as 0 to make it use default values. NOT RECOMMENDED TO DEFAULT FOR BIG BOTS!!!!
export const MAX_SHARDS = process.env.MAX_SHARDS ? parseInt(process.env.MAX_SHARDS, 10) : 0;
export const FIRST_SHARD_ID = process.env.FIRST_SHARD_ID ? parseInt(process.env.FIRST_SHARD_ID, 10) : 0;
export const LAST_SHARD_ID = process.env.LAST_SHARD_ID ? parseInt(process.env.LAST_SHARD_ID, 10) : 0;
// Default to 10
export const SHARDS_PER_CLUSTER = process.env.SHARDS_PER_CLUSTER ? parseInt(process.env.SHARDS_PER_CLUSTER, 10) : 10;
export const MAX_CLUSTERS = parseInt(process.env.MAX_CLUSTERS!, 10);
if (!MAX_CLUSTERS) throw new Error("Please for the love of god, tell me how many clusters your machine can handle!")

export const URL_GATEWAY_PROXY_WILL_FORWARD_TO = process.env.URL_GATEWAY_PROXY_WILL_FORWARD_TO!
if (!URL_GATEWAY_PROXY_WILL_FORWARD_TO) throw new Error("Don't you think you need to give a URL where you want your gateway proxy to send events to?")

export const GATEWAY_SECRET_KEY = process.env.GATEWAY_SECRET_KEY!
if (!GATEWAY_SECRET_KEY) throw new Error("Do you want to be hacked? Add a secret authorization key that can be used to identify requests are from you.")

export const REST_AUTHORIZATION_KEY = process.env.REST_AUTHORIZATION_KEY!;
if (!REST_AUTHORIZATION_KEY) throw new Error("Do you want to be hacked? Add a secret authorization key to make sure requests are only made by you.")

export const BOT_ID = "";
if (!BOT_ID) throw new Error("Please enter the BOT ID you want to run this with.")

export const REST_PORT = 5000;
export const GATEWAY_PORT = 8080;