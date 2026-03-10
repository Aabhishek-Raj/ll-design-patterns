import { pool } from "./db";

export const queryService =  {
    
    async getUser() {
        await pool.query(
        "SELECT * FROM users WHERE email = $1",
        ["test@email.com"]
        )
    }
}
