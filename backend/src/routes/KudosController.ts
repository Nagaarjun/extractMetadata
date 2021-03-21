const fs = require("fs");
const path = require("path");
const fsPromises = fs.promises;
const staticfile = path.resolve(__dirname, "../../../mocks", "users.json");
const giveKudos = async (req: any, res: any) => {
  let usersjson = await fsPromises.readFile(staticfile, "utf8");
  let parseuserjson = JSON.parse(usersjson);
  let domain = req.body.loggedInUser.emailId.split("@").pop();
  let outUsers = parseuserjson.users.map((user: any) => {
    if (req.body.loggedInUser.emailId === user.emailId) {
      if (
        user.numberOfKudosRemaining > 0 &&
        !user.kudosGivenTo.includes(req.body.giveKudos.emailId)
      ) {
        user.kudosGivenTo.push(req.body.giveKudos.emailId);
        user.numberOfKudosRemaining = user.numberOfKudosRemaining - 1;
      }
      return user;
    }
    if (req.body.giveKudos.emailId === user.emailId) {
      if (!user.kudosGivenTo.includes(user.emailId)) {
        user.kudosReceivedFrom.push(req.body.loggedInUser.emailId);
      }
      return user;
    }
    return user;
  });
  parseuserjson.users = outUsers;
  await fsPromises.writeFile(staticfile, JSON.stringify(parseuserjson));
  let filteredResults = parseuserjson.users.filter((user: any) => {
    return user.domain === domain;
  });
  res.send(filteredResults);
};

export { giveKudos };
