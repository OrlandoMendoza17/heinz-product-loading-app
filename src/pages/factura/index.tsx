import BillItem from '@/components/pages/factura/BillItem'
import Header from '@/components/widgets/Header/Header'
import CartContext from '@/context/CartContext'
import formatMoney, { getTotalBoxesFromProducts, getTotalFromProducts, parseDecimals } from '@/utils/formatMoney'
import React, { useContext, useEffect, useState } from 'react'
import BillsContext from '@/context/BillsContext'
import { useRouter } from 'next/router'
import { BulletinsFormat, getBulletinDetailsQuery, getBulletinHeaderQuery } from '@/utils/getQueries'
import useNotification from '@/hooks/useNotification'
import ConfirmModal from '@/components/widgets/ConfirmModal'
import Button from '@/components/widgets/Button'
import { sendBulletin } from '@/services/boletin'
import { saveToSStorage } from '@/utils/sessionStorage'
import NotificationModal from '@/components/widgets/NotificationModal'
import useAuth from '@/hooks/useAuth'
import { addDays } from 'date-fns'
import getJDEdwardsJulianDate from '@/utils/parseDate/JDEdwardsDate'
import { number } from 'zod'

const Billing = () => {

  const router = useRouter()
  const [renderPage, credentials] = useAuth({})

  const { cart, selectedEmployees, purchase } = useContext(CartContext)
  const { bills, setBills } = useContext(BillsContext)

  const [loading, setLoading] = useState<boolean>(false)

  const [notification, handleNotification] = useNotification()
  const [alert, handleAlert] = useNotification()

  useEffect(() => {
    (async () => {

      if (!bills.length) {
        router.push("/productos")
      }

    })()
  }, [])


  const getTotalFromBills = () => {
    const total = bills.reduce((accumulator, { products }) => {
      const totalOrder = getTotalFromProducts(products)
      return accumulator + totalOrder;
    }, 0)
    return total;
  }

  const getTotalBoxesFromBills = () => {
    const totalBoxes = bills.reduce((accumulator, { products }) => {
      const boxes = getTotalBoxesFromProducts(products)
      return accumulator + boxes;
    }, 0)
    return totalBoxes;
  }

  const totalOrders = getTotalFromBills()
  const totalBoxes = getTotalBoxesFromBills()

  const handleConfirm = async () => {
    try {
      setLoading(true)

      const bulletins: BulletinsFormat[] = bills.map((bill) => {

        const { purchase, employee, products } = bill

        const shipment_date = getJDEdwardsJulianDate(addDays(new Date(purchase.date), 5).toISOString())

        const header: BulletinHeader = {
          SYEDOC: bill.number,      // N° Orden
          SYDOCO: bill.number,      // N° Orden
          SYDEL1: purchase.details, // Observaciones
          SYMCU: "        VE03",    // Almacén
          SYVR01: purchase.order,   // Orden de compra
          SYAN8: employee.ficha,    // FICHA DE EMPLEADO
          SYSHAN: employee.ficha,   // FICHA DE EMPLEADO
          SYDRQJ: shipment_date,    // Fecha 5 dias despues (Fecha de entrega) -> Date - Requested
          SYTRDJ: getJDEdwardsJulianDate(purchase.date),    // Fecha Real -> Date - Order/Transaction
          SYURDT: getJDEdwardsJulianDate(purchase.date),    // FECHA
          SYUPMJ: getJDEdwardsJulianDate(purchase.date),    // FECHA
          SYTDAY: 121854,           // -> Time of Day
          SYCO: "07200",
          SYEKCO: "07200",
          SYKCOO: "07200",
          SYEDCT: "V1",
          SYDCTO: "V1",
          SYEDER: "B",
          SYURRF: "iWEB",
          SYUSER: "VSJIT15",
          SYJOBN: "HVEOW001",

          SYPTC: "",
          SYSUN: "",
          SYMON: "",
          SYTUE: "",
          SYWED: "",
          SYTHR: "",
          SYFRI: "",
          SYSAT: "",
          SYASN: "",
          SYNTR: "",
          SYEDTY: "",
          SYEDST: "",
          SYEDFT: "",
          SYEDSP: "", // "Y" -> Ya procesado
          SYPNID: "",
          SYOFRQ: "",
          SYSFXO: "",
          SYOKCO: "",
          SYOORN: "",
          SYOCTO: "",
          SYRKCO: "",
          SYRORN: "",
          SYRCTO: "",
          SYVR02: "",
          SYDEL2: "",
          SYINMG: "",
          SYRYIN: "",
          SYPRGP: "",
          SYTXA1: "",
          SYEXR1: "",
          SYTXCT: "",
          SYATXT: "",
          SYBACK: "",
          SYSBAL: "",
          SYHOLD: "",
          SYPLST: "",
          SYMOT: "",
          SYCOT: "",
          SYZON: "",
          SYAFT: "",
          SYRCD: "",
          SYPID: "",
          SYROUT: "",
          SYCNID: "",
          SYFRTH: "",
          SYSTOP: "",
          SYFUF1: "",
          SYFRTC: "",
          SYMORD: "",
          SYFUF2: "",
          SYWUMD: "",
          SYVUMD: "",
          SYAUTN: "",
          SYCACT: "",
          SYSBLI: "",
          SYCRMD: "",
          SYCRRM: "",
          SYCRCD: "",
          SYLNGP: "",
          SYORBY: "",
          SYTKBY: "",
          SYURCD: "",
          SYPRIO: "0",
          SYCRR: 0,
          SYFAP: 0,
          SYPA8: 0,
          SYEDSQ: 0,
          SYEDLN: 0,
          SYEDDT: 0,
          SYEDDL: 0,
          SYNXDJ: 0,
          SYSSDJ: 0,
          SYPDDJ: 0,
          SYOPDJ: 0,
          SYADDJ: 0,
          SYCNDJ: 0,
          SYPEFJ: 0,
          SYPPDJ: 0,
          SYPSDJ: 0,
          SYTRDC: 0,
          SYPCRT: 0,
          SYINVC: 0,
          SYANBY: 0,
          SYCARS: 0,
          SYCMC1: 0,
          SYCMR1: 0,
          SYCMC2: 0,
          SYCMR2: 0,
          SYOTOT: 0,
          SYTOTC: 0,
          SYCEXP: 0,
          SYFCST: 0,
          SYURAT: 0,
          SYURAB: 0,
        }

        const details: BulletinInfo[] = products.map(({ sku, name, price, quantity, details }, index) => {
          return {
            SZEDOC: bill.number,         // Numero Orden
            SZDOCO: bill.number,         // Numero Orden
            SZLITM: sku,                 // SKU
            SZDSC1: "",                  // Nombre
            SZDSC2: "",                  // Nombre
            SZVR01: purchase.order,      // Descripcion boletin
            SZUORG: quantity * 10000,    // Cajas / 100 ->	Units - Order/Transaction Quantity
            SZSOQS: quantity * 10000,    // -> Quantity Shipped
            SZMCU: "        VE03",
            SZAN8: employee.ficha,       // FICHA DE EMPLEADO
            SZSHAN: employee.ficha,      // FICHA DE EMPLEADO
            SZITM: 0,                    //IMITM
            SZPDDJ: 0,
            SZCTRY: 0,
            SZEKCO: "07200",
            SZKCOO: "07200",
            SZNXTR: "580",               // Tiene que ser "524"
            SZLTTR: "520",               // Valor estático
            SZEDLN: (index + 1) * 1000,  // Numero de linea
            SZLNID: (index + 1) * 1000,  // Numero de linea
            SZDRQJ: shipment_date,       // Fecha 5 dias despues (Fecha de entrega) -> Date - Requested
            SZTRDJ: getJDEdwardsJulianDate(purchase.date),       // Fecha Real -> Date - Order/Transaction
            SZUPMJ: getJDEdwardsJulianDate(purchase.date),       // Fecha de actualización
            SZRSDJ: 0,                   // Fecha -> Date - Promised Delivery
            SZPEFJ: 0,                   // Fecha -> Date - Price Effective Date
            SZUPRC: 0,                   // -> Amount - Price per Unit
            SZAEXP: 0,                   // -> EXP	Amount - Extended Price
            SZUNCS: 0,                   // -> Amount - Unit Cost
            SZECST: 0,                   // -> Amount - Extended Cost
            SZITWT: 0,                   // -> Unit Weight	
            SZTDAY: 121854,              // -> Time of Day	 // -> Time of Day
            SZURDT: 0,       // User Reserved Date
            SZSLSM: 0,
            SZSLM2: 0,
            SZUOM: "CJ",                 // IMUOM1 -> Unit of Measure as Input
            SZPTC: "",                   // Payment Terms Code
            SZPRIO: "0",                 // Valor estático
            SZUSER: "VSJIT15",           // IMUSER
            SZJOBN: "HVEOW001",          // IMJOBN
            SZLNTY: "S",                 // IBLNTY
            SZCOMM: "S",
            SZEDCT: "V1",
            SZDCTO: "V1",                // Tiene que ser siempre "V1"
            SZBALU: "N",
            SZEDER: "B",
            SZCO: "07200",
            SZURRF: "iWEB",

            SZAITM: "", // SKU
            SZSTOP: "",
            SZZON: "",
            SZRATT: "",
            SZWTUM: "",            // IMUWUM
            SZLT: "",
            SZASN: "",
            SZTORG: "",
            SZPID: "",             // IMPID
            SZPROV: "",
            SZCSTO: "",
            SZCMGL: "",
            SZSTTS: "",
            SZUNCD: "",
            SZEDSP: "",            // "Y" -> Ya trasferido
            SZTAX1: "",
            SZBACK: "",            //IBBACK
            SZSBAL: "",
            SZAPTS: "",
            SZAFT: "",
            SZFUF1: "",
            SZSO03: "",
            SZACOM: "",
            SZEDTY: "",
            SZEDST: "",
            SZEDFT: "",
            SZPNID: "",
            SZSFXO: "",
            SZOKCO: "",
            SZOORN: "",
            SZOCTO: "",
            SZRKCO: "",
            SZRORN: "",
            SZRCTO: "",
            SZDMCT: "",
            SZVR02: "",
            SZLOCN: "",
            SZLOTN: "",
            SZFRGD: "",
            SZTHGD: "",
            SZEMCU: "",
            SZRLIT: "",
            SZSRP1: "",
            SZSRP2: "",
            SZSRP3: "",
            SZSRP4: "",
            SZSRP5: "",
            SZPRP1: "",
            SZPRP2: "",
            SZPRP3: "",
            SZPRP4: "",
            SZPRP5: "",
            SZPRGR: "",
            SZCLVL: "",
            SZDSFT: "",
            SZFAPP: "",
            SZKCO: "",
            SZDCT: "",
            SZODCT: "",
            SZOKC: "",
            SZPRMO: "",
            SZTXA1: "",
            SZEXR1: "",
            SZATXT: "",
            SZRESL: "",
            SZOTQY: "",
            SZTPC: "",
            SZAPUM: "",
            SZINMG: "", // IBINMG
            SZRYIN: "",
            SZDTBS: "",
            SZCNID: "",
            SZFRTH: "",
            SZLOB: "",
            SZEUSE: "",
            SZDTYS: "",
            SZCDCD: "",
            SZNTR: "",
            SZMOT: "",
            SZCOT: "",
            SZROUT: "",
            SZFRTC: "",
            SZFRAT: "",
            SZSHCM: "",
            SZSHCN: "",
            SZSERN: "",
            SZUOM1: "",
            SZUOM2: "",
            SZUOM4: "",
            SZVLUM: "",
            SZRPRC: "", // IBRPRC
            SZORPR: "", // IBORPR
            SZORP: "",
            SZCMGP: "",
            SZGLC: "",
            SZSO01: "",
            SZSO02: "",
            SZSO04: "",
            SZSO05: "",
            SZSO06: "",
            SZSO07: "",
            SZSO08: "",
            SZSO09: "",
            SZSO10: "",
            SZSO11: "",
            SZSO12: "",
            SZSO13: "",
            SZSO14: "",
            SZSO15: "",
            SZCMCG: "", // IBCMCG
            SZRCD: "",
            SZGWUM: "",
            SZANI: "",
            SZAID: "",
            SZOMCU: "",
            SZOBJ: "",
            SZSUB: "",
            SZSBL: "",
            SZSBLT: "",
            SZLCOD: "",
            SZUPC1: "",
            SZUPC2: "",
            SZUPC3: "",
            SZSWMS: "",
            SZCRMD: "",
            SZCRCD: "",
            SZURCD: "", // IMURCD
            SZEDSQ: 0,
            SZEDDT: 0,
            SZEDDL: 0,
            SZOGNO: 0,
            SZRLLN: 0,
            SZDMCS: 0,
            SZPA8: 0,
            SZOPDJ: 0,
            SZADDJ: 0,
            SZIVD: 0,
            SZCNDJ: 0,
            SZDGL: 0,
            SZPPDJ: 0,
            SZPSDJ: 0,
            SZFRMP: 0, // IBFRMP
            SZTHRP: 0, // IBTHRP
            SZEXDP: 0,
            SZKTLN: 0,
            SZCPNT: 0,
            SZRKIT: 0,
            SZKTP: 0,
            SZSOBK: 0,
            SZSOCN: 0,
            SZSONE: 0,
            SZUOPN: 0,
            SZQTYT: 0,
            SZQRLV: 0,
            SZAOPN: 0,
            SZLPRC: 0,
            SZTCST: 0,
            SZTRDC: 0,
            SZFUN2: 0,
            SZDSPR: 0,
            SZCADC: 0,
            SZDOC: 0,
            SZODOC: 0,
            SZPSN: 0,
            SZDELN: 0,
            SZDFTN: 0,
            SZVEND: 0, // IBVEND
            SZANBY: 0,
            SZCARS: 0,
            SZPQOR: 0,
            SZSQOR: 0,
            SZITVL: 0,
            SZFY: 0,
            SZSLCM: 0,
            SZSLC2: 0,
            SZGRWT: 0,
            SZCRR: 0.0000000,
            SZFPRC: 0,
            SZFUP: 0,
            SZFEA: 0,
            SZFUC: 0,
            SZFEC: 0,
            SZURAT: 0, // IMURAT
            SZURAB: 0, // IMURAB
          }

        })

        return { header, details }
      })

      
      console.log('Headers query', getBulletinHeaderQuery(bulletins))
      console.log('Details query', getBulletinDetailsQuery(bulletins))
      
      // const data = await sendBulletin(bulletins)
      // console.log('data', data)
      
      debugger
      
      handleAlert.open({
        type: "success",
        title: "Creación de Boletín",
        message: "Se ha generado el boletín con éxito ✅"
      })

      setTimeout(() => {
        saveToSStorage<boolean>("bills-confirmation", true)
        router.push("/factura/success")
      }, 5000);

    } catch (error) {
      setLoading(false)
      handleAlert.open({
        type: "danger",
        title: "Error",
        message: "Ha habido un error enviando creando el pedido ❌"
      })
    }
  }

  const handleOpenModal = () => {
    handleNotification.open({
      type: "warning",
      title: "Advertencia",
      message: "¿Estás seguro de que quieres confirmar el pedido?"
    })
  }

  return (
    renderPage &&
    <>
      {
        Boolean(bills.length) &&
        <div className="Layout">
          <Header />
          <main className="Bill xl:px-60">
            <section className="header">
              <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-bold">Confirmar Pedido</h1>
                <Button onClick={handleOpenModal} className="bg-secondary !py-2 font-bold hover:bg-emerald-500" loading={loading}>
                  Confirmar
                </Button>
              </div>
              <ul className="">
                <li><span>Total número de ordenes:</span> {bills.length}</li>
                <li><span>Total cantidad de cajas:</span> {totalBoxes}</li>
                <li><span>Total monto de ordenes:</span> {formatMoney(totalOrders)}</li>
              </ul>
            </section>
            <section>
              {
                bills.map((bill) =>
                  <BillItem bill={bill} key={bill.employee.ficha} />
                )
              }
            </section>
          </main>
        </div >
      }
      <ConfirmModal
        acceptAction={handleConfirm}
        notificationProps={[notification, handleNotification]}
      />
      <NotificationModal alertProps={[alert, handleAlert]} />
    </>
  )
}

export default Billing