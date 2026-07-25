interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Clean up expired entries every 10 minutes to prevent memory leaks
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()) {
      if (now > record.resetTime) {
        rateLimitMap.delete(ip);
      }
    }
  }, 10 * 60 * 1000);
}

export interface RateLimitOptions {
  limit?: number; // Max requests allowed
  windowMs?: number; // Time window in milliseconds
}

export function checkRateLimit(
  ip: string,
  options: RateLimitOptions = {}
): { isAllowed: boolean; remaining: number; resetTime: number } {
  const limit = options.limit ?? 5; // Default: 5 requests
  const windowMs = options.windowMs ?? 15 * 60 * 1000; // Default: 15 minutes

  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    });
    return {
      isAllowed: true,
      remaining: limit - 1,
      resetTime: now + windowMs,
    };
  }

  if (record.count >= limit) {
    return {
      isAllowed: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  record.count += 1;
  return {
    isAllowed: true,
    remaining: limit - record.count,
    resetTime: record.resetTime,
  };
}
