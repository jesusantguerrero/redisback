import { Client } from "redis-om"
import { createClient } from "redis"

let DB;

export const useDB = async() => {
    if (!DB) {
        const redis = createClient(process.env.DB_STRING)
        await redis.connect()
        DB = await new Client().use(redis)
    } 
    return DB
}