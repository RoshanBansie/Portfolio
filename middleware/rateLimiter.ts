import { RateLimiterMemory } from "rate-limiter-flexible"

export const rateLimiter = new RateLimiterMemory({
  points: 1, // 1 request
  duration: 30, // per 10 seconds
});