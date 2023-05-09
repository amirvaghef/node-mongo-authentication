const userQuery = {
  users: async (parent, args, contextValue) => {
    return await contextValue.User.find();
  },
  user: async (parent, args, contextValue) => {
    return await contextValue.User.findById(args.id);
  },
  userByUserName: async (parent, args, contextValue) => {
    return await contextValue.User.find({ userName: args.userName });
  },
  validateUser: async (parent, args, contextValue) => {
    return await contextValue.User.find({
      userName: args.userName,
      password: args.password,
    });
  },
};

export default userQuery;
