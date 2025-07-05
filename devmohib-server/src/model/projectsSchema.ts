import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  liveLink: {
    type: String,
    required: true
  },
  sourceCode: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  perspective: {
    type: String,
    required: true
  },
  challengingPart: {
    type: String,
    required: true
  },
  goal: {
    type: String,
    required: true
  },
  techStack: {
    type: [String],
    required: true
  },
  features: {
    type: [String],
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  completionDate: {
    type: Date,
    required: true
  },
  highlight: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

export default Project;
