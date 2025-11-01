import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

// create a ratelimiter that allows 5 requests per 10 seconds
const ratelimit = new Ratelimit ({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5,"60 s")
});

export default ratelimit;