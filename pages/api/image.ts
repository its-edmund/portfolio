import type { NextApiRequest, NextApiResponse } from "next";

export default function imageHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      res.status(200).json({ id, name: `User ${id}` });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
