import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file


const redis = new Redis({
    url: process.env.REDIS_URL,
    token: process.env.REDIS_TOKEN
})

await redis.set('foo', 'bar');
await redis.get('foo');


// create a ratelimiter that allows 5 requests per 10 seconds
const ratelimit = new Ratelimit ({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5,"10 s")
});

export default ratelimit;