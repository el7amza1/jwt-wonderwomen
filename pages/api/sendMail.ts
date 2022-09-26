// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { values } = req.body;
  const msg = {
    to: `${values.email}`, // Change to your recipient
    from: "marwanashrafzaki98@gmail.com", // Change to your verified sender
    subject: `Hello ${values.firstName}`,
    text: "Hi, How are you",
    // html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      return res.status(200).json("Message Sent");
    })
    .catch((error) => {
      return res.status(403).json(error);
    });
}
