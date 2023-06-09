import mongoose from "mongoose";

const roleSchema = mongoose.Schema({
  roleName: { type: String, required: true },
  roleAccess: [String],
});

const Role = mongoose.model("Role", roleSchema);
export default Role;
