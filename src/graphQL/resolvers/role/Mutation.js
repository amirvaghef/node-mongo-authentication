const roleMutation = {
  newRole: async (parent, args, contextValue) => {
    return await contextValue.Role.create({
      roleName: args.role.roleName,
      roleAccess: args.role.roleAccess,
    });
  },
  updateRole: async (parent, args, contextValue) => {
    return await contextValue.Role.findOneAndUpdate(
      { _id: args.role._id },
      {
        $set: {
          roleName: args.role.roleName,
          roleAccess: args.role.roleAccess,
        },
      },
      { new: true }
    );
  },
  deleteRole: async (parent, args, contextValue) => {
    try {
      await contextValue.Role.findOneAndDelete({ _id: args.id });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};

export default roleMutation;
