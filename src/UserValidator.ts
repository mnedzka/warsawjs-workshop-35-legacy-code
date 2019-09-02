import path from 'path'
import fs from 'fs'

export const WEAK_PASSWORDS_FILE =
  path.join(__dirname, '../config/weakpasswords.txt')

export class UserValidator {
  constructor(
    private doReadFile = readFile
  ) {
  }

  isInvalidPassword(password: string) {
    const passwords = this
      .doReadFile(WEAK_PASSWORDS_FILE)
      .split('\n');
    for (const item of passwords) {
      if (password === item) {
        return true;
      }
    }
    return password.length <= 6;
  }
}

function readFile(fileName: string) {
  return fs.readFileSync(fileName, 'utf-8');
}
