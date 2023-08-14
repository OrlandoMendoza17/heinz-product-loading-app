import sequelize from "@/lib/mssql";
import { NextApiRequest, NextApiResponse } from "next";
import { BulletinsFormat, getBulletinHeadersQuery, getBulletinInfoQuery } from "@/utils/getQueries";

type ResponseData = unknown

type BodyProps = {
  bulletins: BulletinsFormat
}

const handleBulletins = async (
  request: NextApiRequest,
  response: NextApiResponse<ResponseData>
) => {
  try {
    const { bulletins }: BodyProps = request.body

    const headersQuery = getBulletinHeadersQuery(bulletins)
    const infoQuery = getBulletinInfoQuery(bulletins)

    await sequelize.query(headersQuery)
    await sequelize.query(infoQuery)

  } catch (error: unknown) {
    response.status(400).json(error)
  }
}

export default handleBulletins;