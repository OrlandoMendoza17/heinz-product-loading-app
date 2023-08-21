export type BulletinsFormat = {
  headers: BulletinHeader[];
  info: BulletinInfo;
}[]

const getSQLValue = (value: string | number) => { 
  return (typeof value === "string") ? `'${value}'` : value
}

export const getBulletinHeadersQuery = (bulletins: BulletinsFormat) => {
  const headers = bulletins.map(({ headers }) => headers)

  const listOfValues = headers.map((item) => {
    const header = item[0]
    const values = `(${
      Object.values(header).map(value => getSQLValue(value)).join(", ")
    })`
    return values
  })

  const keys = `(${Object.keys(headers[0][0]).map(key => `[${key}]`).join(", ")})`
  const values = listOfValues.join(",\n")
  
  return `
    INSERT INTO [HCRM01].[dbo].[F9011]\n${keys}
    VALUES\n${values}
  `
}

export const getBulletinInfoQuery = (bulletins: BulletinsFormat) => {const headers = bulletins.map(({ headers }) => headers)
  const info = bulletins.map(({ info }) => info)

  const listOfValues = info.map((info)=>{
    const values = `(${
      Object.values(info).map(value => (typeof value === "string") ? `'${value}'` : value).join(", ")
    })`
    return values;
  })

  const keys = `(${Object.keys(info[0]).map(key => `[${key}]`).join(", ")})`
  const values = listOfValues.join(",\n")
  
  return `
    SET IDENTITY_INSERT [HCRM01].[dbo].[F9010] ON
    INSERT INTO [HCRM01].[dbo].[F9010]\n${keys} 
    VALUES\n${values}
    SET IDENTITY_INSERT [HCRM01].[dbo].[F9010] OFF
  `
}