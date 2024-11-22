import { v4 as uuidv4 } from "uuid"

// Read .env file
export default {
  logLevel: parseInt(process.env.LOG_LEVEL, 10),
  nodeUuid: uuidv4(),
  port: parseInt(process.env.PORT, 10),
  mongo: {
    url: process.env.MONGO_URL,
    db: process.env.MONGO_DB,
    agendaDb: process.env.MONGO_AGENDA_DB,
  },
  remoteUrl: process.env.REMOTE_URL,
  m3u8Destination: process.env.DESTINATION,
  browser: {
    userAgent: process.env.USER_AGENT,
  },
  discord: {
    token: process.env.DISCORD_USER_TOKEN,
    botAvatar: process.env.DISCORD_WEBHOOK_AVATAR,
    botName: process.env.DISCORD_WEBHOOK_USERNAME,
  },
  filters: {
    channels: (process.env.CHANNELS || "").split(","),
  },
  jellyfin: {
    url: process.env.JELLYFIN_URL,
    token: process.env.JELLYFIN_TOKEN,
    collectionUrl: process.env.JELLYFIN_COLLECTION_URL,
  },
  theSportsDb: {
    url: process.env.THE_SPORTS_DB_URL,
    apiKey: process.env.THE_SPORTS_DB_API_KEY,
  },
  matrix: {
    url: process.env.MATRIX_URL,
    user: process.env.MATRIX_USER,
    serverName: process.env.MATRIX_SERVER_NAME,
    accessToken: process.env.MATRIX_ACCESS_TOKEN,
    additionalAdmins: process.env.MATRIX_ADDITIONAL_ADMINS.split(","),
  },
  discordBot: {
    active: process.env.DISCORD_BOT_ACTIVE === "true",
    clientId: process.env.DISCORD_BOT_CLIENT_ID,
    token: process.env.DISCORD_BOT_TOKEN,
  },
}
