import type { NextApiRequest, NextApiResponse } from "next";
export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setPreviewData({});
  res.writeHead(307, { Location: "/blog" });
  res.end();
}
