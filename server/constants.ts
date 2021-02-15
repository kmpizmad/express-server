export const port: string | number = process.env.PORT || 8080;
export const url: string = (process.env.BASE_URL || 'http:localhost') + port;
export const scanPeriod: number = 1000 * 60 * 15;

export const today: string = new Date().toISOString().slice(0, 10);
