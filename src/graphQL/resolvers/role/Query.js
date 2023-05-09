const roleQuery = {
  roles: async (parent, args, contextValue) => {
    return await contextValue.Role.find();
  },
  role: async (parent, args, contextValue) => {
    return await contextValue.Role.findById(args.id);
  },
};

export default roleQuery;
