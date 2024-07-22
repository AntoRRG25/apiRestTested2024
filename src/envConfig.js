import dotenv from 'dotenv'
const envFile = process.env.NODE_ENV==='development'? '.env.development' : process.env.NODE_ENV==='test'? '.env.test' : '.env'
dotenv.config({path: envFile})

const {VITE_SECRET_KEY, VITE_DB_USER, VITE_DB_PASSWORD, VITE_DB_HOST, VITE_DB_NAME, PORT, VITE_USER_IMG, VITE_GMAIL_USER, VITE_GMAIL_APP_PASS}= process.env;

const ConnectDb = process.env.NODE_ENV==='development'? `postgres://${VITE_DB_USER}:${VITE_DB_PASSWORD}@${VITE_DB_HOST}/${VITE_DB_NAME}` :process.env.NODE_ENV==='test'? `postgres://${VITE_DB_USER}:${VITE_DB_PASSWORD}@${VITE_DB_HOST}/${VITE_DB_NAME}` : process.env.VITE_RENDER_DB;


export default {
 Port : PORT,
 Status: process.env.NODE_ENV==='development'? 'in development' : process.env.NODE_ENV==='test'? 'testing' : 'in production',
 ConnectDb,
 optionRender: process.env.NODE_ENV==='development'? false :process.env.NODE_ENV==='test'? false : true,
 SecretKey: VITE_SECRET_KEY,
 userImg: VITE_USER_IMG,
 gmailUser: VITE_GMAIL_USER,
 gmailPass: VITE_GMAIL_APP_PASS
}

