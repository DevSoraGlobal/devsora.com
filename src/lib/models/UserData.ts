import mongoose, { Document, Schema, Model } from "mongoose";

export interface IUserData extends Document {
  fullName: string;
  username: string;
  email: string;
  password?: string; // Password is optional as we might not always send it back
}

const UserDataSchema: Schema<IUserData> = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      maxLength: 254,
    },
    password: {
      type: String,
      required: true,
      select: false, // By default, do not return the password
    },
  },
  { timestamps: true }
);

// When a document is queried, if the password field was not explicitly selected, it will not be in the result.
// However, for authentication, we need it. So, we create a static method to get user with password.
UserDataSchema.statics.findUserWithPassword = function (condition: object) {
  return this.findOne(condition).select("+password");
};

// Ensure the model is not recompiled if it already exists
const UserData: Model<IUserData> = mongoose.models.UserData || mongoose.model<IUserData>("UserData", UserDataSchema);

export default UserData;

