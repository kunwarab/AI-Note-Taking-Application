import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: mongoose.Schema.Types.String,
      ref: "User",
      required: true, 
    },
    embedding: {
      type: [Number],
      default: []
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Note", noteSchema);
