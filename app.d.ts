type Product = {
  name: string, // IMDSC1 | STOCKCOD
  sku: string,  // IMLITM
  available: number, // STOCKCANT
  price: number, // ?
  image?: string, // Se va a eliminar porque obtendrá en una carpeta local dependiendo del sku del producto
  quantity: number, // Se setea desde la app
  details: {
    IBITM: number,
    UMCONV: number,
    IMSRP1: string,
    IMSRP2: string,
    IMSRP3: string,
    IMSRP4: string,
  }
}

type User = {
  id: number,
  nombre: string,
  email: string,
  password: string,
  ficha: string,
  two_factor_auth: string,
  is_admin: boolean,
  password_login_available: boolean,
}

type AuthCredentials = {
  user: User,
  token: string,
}

type Employee = {
  name: string;
  CI: string;
  ficha: number;
  zone: string;
  clientType: string;
  address: string;
  birthState: string;
  birthNeighborhood: string;
  type: string;
}

type Purchase = {
  id: string,
  order: string;
  date: string;
  details: string;
}

type Bill = {
  number: number,
  purchase: Purchase,
  employee: Employee,
  products: Product[],
}

type Bulletin = {
  number: number,
  name: string;
  user: string;
  ficha: number;
  address: string;
  zone: string;
  clientType: string;
  order: string;
  store: string;
  details: string;
  date: string;
}

type BulletinHeader = {
  SYEDOC: number // N° Orden
  SYDOCO: number // N° Orden
  SYDEL1: string // Observaciones
  SYMCU: string  // Almacén
  SYVR01: string // Orden de compra
  SYAN8: number  // FICHA DE EMPLEADO
  SYSHAN: number // FICHA DE EMPLEADO
  SYDRQJ: number // Fecha 5 dias despues (Fecha de entrega) -> Date - Requested
  SYTRDJ: number // Fecha Real -> Date - Order/Transaction
  SYURDT: number // FECHA
  SYUPMJ: number // FECHA
  SYTDAY: number // -> Time of Day
  SYCO: string,
  SYEKCO: string,
  SYKCOO: string,
  SYEDCT: string,
  SYDCTO: string,
  SYEDER: string,
  SYURRF: string,
  SYUSER: string,
  SYJOBN: string,

  SYPTC: string,
  SYSUN: string,
  SYMON: string,
  SYTUE: string,
  SYWED: string,
  SYTHR: string,
  SYFRI: string,
  SYSAT: string,
  SYASN: string,
  SYNTR: string,
  SYEDTY: string,
  SYEDST: string,
  SYEDFT: string,
  SYEDSP: string, // "Y" -> Ya procesado
  SYPNID: string,
  SYOFRQ: string,
  SYSFXO: string,
  SYOKCO: string,
  SYOORN: string,
  SYOCTO: string,
  SYRKCO: string,
  SYRORN: string,
  SYRCTO: string,
  SYVR02: string,
  SYDEL2: string,
  SYINMG: string,
  SYRYIN: string,
  SYPRGP: string,
  SYTXA1: string,
  SYEXR1: string,
  SYTXCT: string,
  SYATXT: string,
  SYBACK: string,
  SYSBAL: string,
  SYHOLD: string,
  SYPLST: string,
  SYMOT: string,
  SYCOT: string,
  SYZON: string,
  SYAFT: string,
  SYRCD: string,
  SYPID: string,
  SYROUT: string,
  SYCNID: string,
  SYFRTH: string,
  SYSTOP: string,
  SYFUF1: string,
  SYFRTC: string,
  SYMORD: string,
  SYFUF2: string,
  SYWUMD: string,
  SYVUMD: string,
  SYAUTN: string,
  SYCACT: string,
  SYSBLI: string,
  SYCRMD: string,
  SYCRRM: string,
  SYCRCD: string,
  SYLNGP: string,
  SYORBY: string,
  SYTKBY: string,
  SYURCD: string,
  SYPRIO: string,
  SYCRR: number,
  SYFAP: number,
  SYPA8: number,
  SYEDSQ: number,
  SYEDLN: number,
  SYEDDT: number,
  SYEDDL: number,
  SYNXDJ: number,
  SYSSDJ: number,
  SYPDDJ: number,
  SYOPDJ: number,
  SYADDJ: number,
  SYCNDJ: number,
  SYPEFJ: number,
  SYPPDJ: number,
  SYPSDJ: number,
  SYTRDC: number,
  SYPCRT: number,
  SYINVC: number,
  SYANBY: number,
  SYCARS: number,
  SYCMC1: number,
  SYCMR1: number,
  SYCMC2: number,
  SYCMR2: number,
  SYOTOT: number,
  SYTOTC: number,
  SYCEXP: number,
  SYFCST: number,
  SYURAT: number,
  SYURAB: number,
}

type BulletinInfo = {
  SZEDOC: number, // Numero Orden
  SZDOCO: number, // Numero Orden
  SZLITM: string, // SKU
  SZDSC1: string, // Nombre
  SZDSC2: string, // Nombre
  SZVR01: string, // Descripcion boletin
  SZUORG: number, // Cajas / 100 ->	Units - Order/Transaction Quantity
  SZSOQS: number, // -> Quantity Shipped
  SZMCU: string,
  SZAN8: number,  // FICHA DE EMPLEADO
  SZSHAN: number, // FICHA DE EMPLEADO
  SZITM: number,  //IMITM
  SZPDDJ: number,
  SZCTRY: number,
  SZEKCO: string,
  SZKCOO: string,
  SZNXTR: string, // Tiene que ser "524"
  SZLTTR: string, // Valor estático
  SZEDLN: number, // Numero de linea
  SZLNID: number, // Numero de linea
  SZDRQJ: number, // Fecha 5 dias despues (Fecha de entrega) -> Date - Requested
  SZTRDJ: number, // Fecha Real -> Date - Order/Transaction
  SZUPMJ: number, // Fecha de actualización
  SZRSDJ: number, // Fecha -> Date - Promised Delivery
  SZPEFJ: number, // Fecha -> Date - Price Effective Date
  SZUPRC: number, // -> Amount - Price per Unit
  SZAEXP: number, // -> EXP	Amount - Extended Price
  SZUNCS: number, // -> Amount - Unit Cost
  SZECST: number, // -> Amount - Extended Cost
  SZITWT: number, // -> Unit Weight	
  SZTDAY: number, // -> Time of Day	 // -> Time of Day
  SZURDT: number, // User Reserved Date
  SZSLSM: number,
  SZSLM2: number,
  SZUOM: string,  // IMUOM1 -> Unit of Measure as Input
  SZPTC: string,  // Payment Terms Code
  SZPRIO: string, // Valor estático
  SZUSER: string, // IMUSER
  SZJOBN: string, // IMJOBN
  SZLNTY: string, //IBLNTY
  SZCOMM: string,
  SZEDCT: string,
  SZDCTO: string, // Tiene que ser siempre "V1"
  SZBALU: string,
  SZEDER: string,
  SZCO: string,
  SZURRF: string,

  SZAITM: string, // SKU
  SZSTOP: string,
  SZZON: string,
  SZRATT: string,
  SZWTUM: string,         // IMUWUM
  SZLT: string,
  SZASN: string,
  SZTORG: string,
  SZPID: string,     // IMPID
  SZPROV: string,
  SZCSTO: string,
  SZCMGL: string,
  SZSTTS: string,
  SZUNCD: string,
  SZEDSP: string, // "Y" -> Ya trasferido
  SZTAX1: string,
  SZBACK: string, //IBBACK
  SZSBAL: string,
  SZAPTS: string,
  SZAFT: string,
  SZFUF1: string,
  SZSO03: string,
  SZACOM: string,
  SZEDTY: string,
  SZEDST: string,
  SZEDFT: string,
  SZPNID: string,
  SZSFXO: string,
  SZOKCO: string,
  SZOORN: string,
  SZOCTO: string,
  SZRKCO: string,
  SZRORN: string,
  SZRCTO: string,
  SZDMCT: string,
  SZVR02: string,
  SZLOCN: string,
  SZLOTN: string,
  SZFRGD: string,
  SZTHGD: string,
  SZEMCU: string,
  SZRLIT: string,
  SZSRP1: string,
  SZSRP2: string,
  SZSRP3: string,
  SZSRP4: string,
  SZSRP5: string,
  SZPRP1: string,
  SZPRP2: string,
  SZPRP3: string,
  SZPRP4: string,
  SZPRP5: string,
  SZPRGR: string,
  SZCLVL: string,
  SZDSFT: string,
  SZFAPP: string,
  SZKCO: string,
  SZDCT: string,
  SZODCT: string,
  SZOKC: string,
  SZPRMO: string,
  SZTXA1: string,
  SZEXR1: string,
  SZATXT: string,
  SZRESL: string,
  SZOTQY: string,
  SZTPC: string,
  SZAPUM: string,
  SZINMG: string, // IBINMG
  SZRYIN: string,
  SZDTBS: string,
  SZCNID: string,
  SZFRTH: string,
  SZLOB: string,
  SZEUSE: string,
  SZDTYS: string,
  SZCDCD: string,
  SZNTR: string,
  SZMOT: string,
  SZCOT: string,
  SZROUT: string,
  SZFRTC: string,
  SZFRAT: string,
  SZSHCM: string,
  SZSHCN: string,
  SZSERN: string,
  SZUOM1: string,
  SZUOM2: string,
  SZUOM4: string,
  SZVLUM: string,
  SZRPRC: string, // IBRPRC
  SZORPR: string, // IBORPR
  SZORP: string,
  SZCMGP: string,
  SZGLC: string,
  SZSO01: string,
  SZSO02: string,
  SZSO04: string,
  SZSO05: string,
  SZSO06: string,
  SZSO07: string,
  SZSO08: string,
  SZSO09: string,
  SZSO10: string,
  SZSO11: string,
  SZSO12: string,
  SZSO13: string,
  SZSO14: string,
  SZSO15: string,
  SZCMCG: string, // IBCMCG
  SZRCD: string,
  SZGWUM: string,
  SZANI: string,
  SZAID: string,
  SZOMCU: string,
  SZOBJ: string,
  SZSUB: string,
  SZSBL: string,
  SZSBLT: string,
  SZLCOD: string,
  SZUPC1: string,
  SZUPC2: string,
  SZUPC3: string,
  SZSWMS: string,
  SZCRMD: string,
  SZCRCD: string,
  SZURCD: string, // IMURCD
  SZEDSQ: number,
  SZEDDT: number,
  SZEDDL: number,
  SZOGNO: number,
  SZRLLN: number,
  SZDMCS: number,
  SZPA8: number,
  SZOPDJ: number,
  SZADDJ: number,
  SZIVD: number,
  SZCNDJ: number,
  SZDGL: number,
  SZPPDJ: number,
  SZPSDJ: number,
  SZFRMP: number, // IBFRMP
  SZTHRP: number, // IBTHRP
  SZEXDP: number,
  SZKTLN: number,
  SZCPNT: number,
  SZRKIT: number,
  SZKTP: number,
  SZSOBK: number,
  SZSOCN: number,
  SZSONE: number,
  SZUOPN: number,
  SZQTYT: number,
  SZQRLV: number,
  SZAOPN: number,
  SZLPRC: number,
  SZTCST: number,
  SZTRDC: number,
  SZFUN2: number,
  SZDSPR: number,
  SZCADC: number,
  SZDOC: number,
  SZODOC: number,
  SZPSN: number,
  SZDELN: number,
  SZDFTN: number,
  SZVEND: number, // IBVEND
  SZANBY: number,
  SZCARS: number,
  SZPQOR: number,
  SZSQOR: number,
  SZITVL: number,
  SZFY: number,
  SZSLCM: number,
  SZSLC2: number,
  SZGRWT: number,
  SZCRR: number,
  SZFPRC: number,
  SZFUP: number,
  SZFEA: number,
  SZFUC: number,
  SZFEC: number,
  SZURAT: number, // IMURAT
  SZURAB: number, // IMURAB
}