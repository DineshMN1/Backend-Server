import {DatabaseSync} from 'node:sqlite'

const db = new DatabaseSync(':memory:')

// Execute SQL statement from strings 
db.exec(`
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEX
    )
`)

db.exec(`
    CREATE TABLE todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        tast TEXT,
        complete BOOLEAN DEFAULT 0,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )
`)

export default db;
