const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();

const LIMIT = 5; // max 5 request
const WINDOW = 60 * 1000; // 1 menit

export function rateLimit(ip: string) {
    const now = Date.now();
    const data = rateLimitMap.get(ip);

    if (!data) {
        rateLimitMap.set(ip, { count: 1, lastRequest: now });
        return true;
    }

    if (now - data.lastRequest > WINDOW) {
        rateLimitMap.set(ip, { count: 1, lastRequest: now });
        return true;
    }

    if (data.count >= LIMIT) {
        return false;
    }

    data.count++;
    return true;
}