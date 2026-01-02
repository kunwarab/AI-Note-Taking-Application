import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    config: {
      type: Object,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Settings", settingsSchema);