"use strict";
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const sendMail = {};

sendMail.send = (mailOptions) => {
  mailOptions.from = "houserentservice114@gmail.com";
  const options = {
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "houserentservice114@gmail.com",
      pass: "houserent114!",
    },
  };
  const transporter = nodemailer.createTransport(smtpTransport(options));
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw error;
    }
  });
};
module.exports = sendMail;
