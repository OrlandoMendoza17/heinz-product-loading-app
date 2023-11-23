export type BulletinsFormat = {
  header: BulletinHeader;
  details: BulletinInfo[];
}

export const getSQLValue = (value: string | number) => { 
  return (typeof value === "string") ? `'${value}'` : value
}

export const getBulletinHeaderQuery = (bulletins: BulletinsFormat[]) => {
  const headers = bulletins.map(({ header }) => header)

  const listOfValues = headers.map((header)=>{
    const values = `(${
      Object.values(header).map(value => (typeof value === "string") ? `'${value}'` : value).join(", ")
    })`
    return values;
  })

  const keys = `${Object.keys(headers[0]).map(key => `${key}`).join(", ")}`
  const values = listOfValues.join(",\n")
  
  // SET IDENTITY_INSERT [HCRM01].[dbo].[F9010] ON
  return `
    INSERT INTO OPENQUERY (JDE, 'SELECT ${keys} FROM PRODDTA.f4001z')\n VALUES\n${values}
  `
  // SET IDENTITY_INSERT [HCRM01].[dbo].[F9010] OFF
}

export const getBulletinDetailsQuery = (bulletins: BulletinsFormat[]) => {
  
  const keys = `${Object.keys(bulletins[0].details[0]).map(key => `${key}`).join(", ")}`
  const values = bulletins.map(({ details })=>{
    const values = details.map((header) => {
      return `(${Object.values(header).map(value => getSQLValue(value)).join(", ")})`
    })
    return values.join(",\n")
  }).join(",\n")
  
  return `
    INSERT INTO OPENQUERY (JDE, 'SELECT ${keys} FROM PRODDTA.f4011z') \n VALUES\n${values}
  `
}

