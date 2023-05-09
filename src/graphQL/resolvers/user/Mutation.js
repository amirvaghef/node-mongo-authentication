const userMutation = {
  newUser: async (parent, args, contextValue) => {
    return await contextValue.User.create({
      userName: args.user.userName,
      password: args.user.password,
      name: args.user.name,
      family: args.user.family,
      email: args.user.email,
      role: args.user.role,
    });
  },
  updateUser: async (parent, args, contextValue) => {
    return await contextValue.User.findOneAndUpdate(
      { _id: args.user._id },
      {
        $set: {
          userName: args.user.userName,
          password: args.user.password,
          name: args.user.name,
          family: args.user.family,
          email: args.user.email,
          role: args.user.role,
        },
      },
      { new: true }
    );
  },
  deleteUser: async (parent, args, contextValue) => {
    try {
      await contextValue.User.findOneAndDelete({ _id: args.id });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};

export default userMutation;
