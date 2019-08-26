import { addUserAndLogin } from './addUserAndLogin';

export async function handleSignup(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  try {
    await addUserAndLogin(password, username, res, login);
  }
  catch (e) {
    next(e);
  }

  async function login(user) {
    await new Promise(function (resolve, reject) {
      req.logIn(user, function (err) {
        if (err) {
          reject(err);
        }
        else {
          resolve();
        }
      });
    });
  }
}