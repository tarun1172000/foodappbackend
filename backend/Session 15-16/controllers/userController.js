const loginUser = (req, res) => {
    const { email, password } = req.body;
    

  // if email and password match from DB, return success
  res.send("Successful");
};

const signupUser = (req, res) => {
  res.send("Sign up successful");
};

module.exports = {
  loginUser,
  signupUser,
};
