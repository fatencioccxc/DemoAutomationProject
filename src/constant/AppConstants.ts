import dotenv from 'dotenv';

dotenv.config();

export class AppConstants {
    public static readonly URL =  process.env.URL ?? (() => { throw new Error("URL is not defined in .env") })();
    public static readonly ACCOUNT = process.env.ACCOUNT ?? (() => { throw new Error('ACCOUNT is not defined in .env') })();
    public static readonly PASSWORD = process.env.PASSWORD ?? (() => { throw new Error('PASSWORD is not defined in .env') })();
    public static readonly SCREEN_SIZE = { width: 1_280, height: 720 };
    public static readonly SLOW_MOTION = 2_000;
    public static readonly TIMEOUT = 10_000_000;
}