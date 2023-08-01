import sequelize from "@/lib/mssql";
import { NextApiRequest, NextApiResponse } from "next";

type INFOCENTEmployee = {
  ABALPH: string,
  ABTAX: string,
  AIAN8: number,
  AIAC03: string,
  AIAC05: string,
}

const Employees = async (request: NextApiRequest, response: NextApiResponse) => {

  const queryString = `
    SELECT AIARC, aico, AIARC, AIAN8, ABALPH, ABTAX, AIAC03, AIAC05  FROM openquery(hveow001,'select * from proddta.f03012') 
    A join openquery (hveow001,'select * from proddta.f0101')
    C ON (A.AIAN8 = C.ABAN8) WHERE aico = '07200' AND AIARC = 'EMP'
    AND AIHOLD= ''
  `

  const [data] = await sequelize.query(queryString) as [INFOCENTEmployee[], unknown]

  const employees = data.map((employee): Employee => {
    return {
      name: employee.ABALPH,
      CI: employee.ABTAX,
      ficha: employee.AIAN8,
      zone: employee.AIAC03,
      clientType: employee.AIAC05,
    }
  })

  response.status(200).json(employees)
}

export default Employees;