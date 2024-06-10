import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "winchygichu@gmail.com",
    pass: "5xbt7DXF",
  },
});

export default transporter;