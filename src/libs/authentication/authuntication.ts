import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.TOKEN_SECRET
const correctPassword = process.env.CURRECT_PASSWORD
let hashedPassword :string = ''

const saltRounds = 10;
bcrypt.hash(correctPassword as string, saltRounds, (err, hash) => {
  if(!err){
    hashedPassword = hash
  }
})
export function generateToken(): string {
  return jwt.sign({}, jwtSecret as string, { expiresIn: '2h' });
}

export async function verifyPassword(password: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

