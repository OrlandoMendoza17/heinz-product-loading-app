const getDumbProducts = () => {

  // const randomSKU = () => parseInt((Math.random() * 30000).toString()).toString()
  // const randomPrice = () => parseInt((Math.random() * 100000).toString())

  const products = [
    {
      sku: "15149",
      name: "COL. BANANA 113G",
      image: "/product-images/15149.png",
      available: 863,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15152",
      name: "COL. FRUTAS MIXTA 113G",
      image: "/product-images/15152.png",
      available: 0,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15153",
      name: "COL. FRUTAS TROPIC.113G",
      image: "/product-images/15153.png",
      available: 24,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15154",
      name: "COL. POSTRE DE FRUTAS 113G",
      image: "/product-images/15154.png",
      available: 10,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15156",
      name: "COL. MANZANA 113G",
      image: "/product-images/15156.png",
      available: 79,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15157",
      name: "COL. PERA 113G",
      image: "/product-images/15157.png",
      available: 325,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15158",
      name: "COL. MELOCOTON 113G",
      image: "/product-images/15158.png",
      available: 857,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15159",
      name: "COL. CIRUELA PASAS 113G",
      image: "/product-images/15159.png",
      available: 0,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15172",
      name: "COL. MANGO 113G",
      image: "/product-images/15172.png",
      available: 0,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15196",
      name: "KETCHUP HEINZ 198G",
      image: "/product-images/15196.png",
      available: 23,
      quantity: 0.25,
      price: 0.09
    },
    {
      sku: "15197",
      name: "KETCHUP HEINZ 397G",
      image: "/product-images/15197.png",
      available: 1036,
      quantity: 0.25,
      price: 0.18
    },
    {
      sku: "15198",
      name: "KETCHUP HEINZ 567G",
      image: "/product-images/15198.png",
      available: 0,
      quantity: 0.25,
      price: 0.12
    },
    {
      sku: "15210",
      name: "KETCHUP VOLPACK HEINZ",
      image: "/product-images/15210.png",
      available: 0,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15216",
      name: "KETCHUP HEINZ INSTITUC. 397G",
      image: "/product-images/15216.png",
      available: 0,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15217",
      name: "PURE DE TOMATE HEINZ 490G",
      image: "/product-images/15217.png",
      available: 4,
      quantity: 0.25,
      price: 0.13
    },
    {
      sku: "15218",
      name: "PURE DE TOMATE HEINZ 190G",
      image: "/product-images/15218.png",
      available: 13,
      quantity: 0.25,
      price: 0.065
    },
    {
      sku: "15219",
      name: "PASTA DE TOMATE HEINZ 200G",
      image: "/product-images/15219.png",
      available: 11,
      quantity: 0.25,
      price: 0.065
    },
    {
      sku: "15220",
      name: "PASTA DE TOMATE HEINZ 511G",
      image: "/product-images/15220.png",
      available: 2,
      quantity: 0.25,
      price: 0.13
    },
    {
      sku: "15228",
      name: "KETCHUP TQF 397G",
      image: "/product-images/15228.png",
      available: 9,
      quantity: 0.25,
      price: 0.18
    },
    {
      sku: "15229",
      name: "PASTA TOMATE TQF 200G",
      image: "/product-images/15229.png",
      available: 233,
      quantity: 0.25,
      price: 0.065
    },
    {
      sku: "15230",
      name: "PASTA TOMATE TQF 505G",
      image: "/product-images/15230.png",
      available: 10,
      quantity: 0.25,
      price: 0.13
    },
    {
      sku: "15232",
      name: "SBT LA CUMBRE 380G",
      image: "/product-images/15232.png",
      available: 2,
      quantity: 0.25,
      price: 0.18
    },
    {
      sku: "15239",
      name: "SPP BOLOGNESA VID195G",
      image: "/product-images/15239.png",
      available: 1,
      quantity: 0.25,
      price: 0.065
    },
    {
      sku: "15240",
      name: "SPP BOLOGNESA VID 495G",
      image: "/product-images/15240.png",
      available: 17,
      quantity: 0.25,
      price: 0.13
    },
    {
      sku: "15243",
      name: "SPP COMPLETA  VID 195G",
      image: "/product-images/15243.png",
      available: 144,
      quantity: 0.25,
      price: 0.065
    },
    {
      sku: "15244",
      name: "SPP COMPLETA VID 495G",
      image: "/product-images/15244.png",
      available: 4,
      quantity: 0.25,
      price: 0.13
    },
    {
      sku: "15245",
      name: "SPP NAPOLITANA VID 195G",
      image: "/product-images/15245.png",
      available: 2,
      quantity: 0.25,
      price: 0.065
    },
    {
      sku: "15246",
      name: "SPP NAPOLITANA  VID 495G",
      image: "/product-images/15246.png",
      available: 33,
      quantity: 0.25,
      price: 0.13
    },
    {
      sku: "15249",
      name: "SALSA PIZZA TRADICIONAL 480G",
      image: "/product-images/15249.png",
      available: 64,
      quantity: 0.25,
      price: 0.13
    },
    {
      sku: "15251",
      name: "SPP SPAGH. NAPOLITANO 480G",
      image: "/product-images/15251.png",
      available: 0,
      quantity: 0.25,
      price: 0.13
    },
    {
      sku: "15253",
      name: "SALSA PRONTO BOLOGNESA 388G",
      image: "/product-images/15253.png",
      available: 191,
      quantity: 0.25,
      price: 0.13
    },
    {
      sku: "15254",
      name: "SALSA PRONTO NAPOLITANA 388G",
      image: "/product-images/15254.png",
      available: 0,
      quantity: 0.25,
      price: 0.13
    },
    {
      sku: "15255",
      name: "SALSA PRONTO COMPLETA 388G",
      image: "/product-images/15255.png",
      available: 0,
      quantity: 0.25,
      price: 0.13
    },
    {
      sku: "15258",
      name: "MOSTAZA HEINZ VID 195G",
      image: "/product-images/15258.png",
      available: 119,
      quantity: 0.25,
      price: 0.065
    },
    {
      sku: "15260",
      name: "MOSTAZA HEINZ VID 490G",
      image: "/product-images/15260.png",
      available: 12,
      quantity: 0.25,
      price: 0.13
    },
    {
      sku: "15261",
      name: "MOSTAZA HEINZ  GALON 3820 G",
      image: "/product-images/15261.png",
      available: 0,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15265",
      name: "MOSTAZA TQF VID 490G",
      image: "/product-images/15265.png",
      available: 0,
      quantity: 0.25,
      price: 0.13
    },
    {
      sku: "15266",
      name: "SALSA 57 194G X 24UN",
      image: "/product-images/15266.png",
      available: 10,
      quantity: 0.25,
      price: 0.09
    },
    {
      sku: "15267",
      name: "SALSA 57 378G",
      image: "/product-images/15267.png",
      available: 29,
      quantity: 0.25,
      price: 0.18
    },
    {
      sku: "15271",
      name: "SALSA DE SOYA 150 CC",
      image: "/product-images/15271.png",
      available: 24,
      quantity: 0.25,
      price: 0.045
    },
    {
      sku: "15272",
      name: "SALSA SOYA 300CC",
      image: "/product-images/15272.png",
      available: 18,
      quantity: 0.25,
      price: 0.09
    },
    {
      sku: "15274",
      name: "SALSA SOYA LA CUMBRE 150 CC",
      image: "/product-images/15274.png",
      available: 0,
      quantity: 0.25,
      price: 0.045
    },
    {
      sku: "15275",
      name: "SALSA SOYA TQF 150CC",
      image: "/product-images/15275.png",
      available: 17,
      quantity: 0.25,
      price: 0.045
    },
    {
      sku: "15276",
      name: "SALSA SOYA TQF 300CC",
      image: "/product-images/15276.png",
      available: 165,
      quantity: 0.25,
      price: 0.09
    },
    {
      sku: "15278",
      name: "VINAGRE GALON 4000 CC",
      image: "/product-images/15278.png",
      available: 0,
      quantity: 0.25,
      price: 0.4
    },
    {
      sku: "15280",
      name: "SALSA INGLESA LA CUMBRE 150 CC",
      image: "/product-images/15280.png",
      available: 1,
      quantity: 0.25,
      price: 0.045
    },
    {
      sku: "15281",
      name: "SALSA INGLESA 150 CC",
      image: "/product-images/15281.png",
      available: 12,
      quantity: 0.25,
      price: 0.045
    },
    {
      sku: "15282",
      name: "SALSA INGLESA 300 CC",
      image: "/product-images/15282.png",
      available: 27,
      quantity: 0.25,
      price: 0.09
    },
    {
      sku: "15284",
      name: "SALSA INGLESA GALON 4.000 CC",
      image: "/product-images/15284.png",
      available: 0,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15286",
      name: "SALSA INGLESA TQF 150CC",
      image: "/product-images/15286.png",
      available: 22,
      quantity: 0.25,
      price: 0.045
    },
    {
      sku: "15287",
      name: "SALSA INGLESA TQF 300CC",
      image: "/product-images/15287.png",
      available: 65,
      quantity: 0.25,
      price: 0.09
    },
    {
      sku: "15288",
      name: "SALSA PICANTE 150 CC",
      image: "/product-images/15288.png",
      available: 1,
      quantity: 0.25,
      price: 0.045
    },
    {
      sku: "15289",
      name: "VINAGRE BLANCO 500 CC",
      image: "/product-images/15289.png",
      available: 9,
      quantity: 0.25,
      price: 0.1
    },
    {
      sku: "15290",
      name: "VINAGRE BLANCO 1000 CC",
      image: "/product-images/15290.png",
      available: 65,
      quantity: 0.25,
      price: 0.1
    },
    {
      sku: "15292",
      name: "VINAGRE TQF 500 CC",
      image: "/product-images/15292.png",
      available: 23,
      quantity: 0.25,
      price: 0.1
    },
    {
      sku: "15293",
      name: "VINAGRE TQF 1000 CC",
      image: "/product-images/15293.png",
      available: 19,
      quantity: 0.25,
      price: 0.1
    },
    {
      sku: "15295",
      name: "SALSA AJO 150 CC",
      image: "/product-images/15295.png",
      available: 12,
      quantity: 0.25,
      price: 0.045
    },
    {
      sku: "15296",
      name: "SALSA AJO 300 CC",
      image: "/product-images/15296.png",
      available: 219,
      quantity: 0.25,
      price: 0.09
    },
    {
      sku: "15297",
      name: "SALSA AJO LA CUMBRE 150 CC",
      image: "/product-images/15297.png",
      available: 100,
      quantity: 0.25,
      price: 0.01
    },
    {
      sku: "15298",
      name: "SALSA AJO TQF 150 CC",
      image: "/product-images/15298.png",
      available: 1,
      quantity: 0.25,
      price: 0.045
    },
    {
      sku: "15320",
      name: "GEL. PIÑA 132G",
      image: "/product-images/15320.png",
      available: 3,
      quantity: 0.25,
      price: 0.4
    },
    {
      sku: "15322",
      name: "GEL. LIMON 132G",
      image: "/product-images/15322.png",
      available: 4,
      quantity: 0.25,
      price: 0.4
    },
    {
      sku: "15323",
      name: "GEL. CEREZA 132G",
      image: "/product-images/15323.png",
      available: 0,
      quantity: 0.25,
      price: 0.4
    },
    {
      sku: "15324",
      name: "GEL. FRAMBUESA 132G",
      image: "/product-images/15324.png",
      available: 0,
      quantity: 0.25,
      price: 0.4
    },
    {
      sku: "15326",
      name: "GEL. UVA 132G",
      image: "/product-images/15326.png",
      available: 12,
      quantity: 0.25,
      price: 0.4
    },
    {
      sku: "15329",
      name: "GEL. FRESA 66G",
      image: "/product-images/15329.png",
      available: 44,
      quantity: 0.25,
      price: 0.2
    },
    {
      sku: "15330",
      name: "GEL. FRESA 132G",
      image: "/product-images/15330.png",
      available: 0,
      quantity: 0.25,
      price: 0.4
    },
    {
      sku: "15336",
      name: "GEL. UVA  66G",
      image: "/product-images/15336.png",
      available: 46,
      quantity: 0.25,
      price: 0.2
    },
    {
      sku: "15338",
      name: "GEL. SIN SABOR 33G",
      image: "/product-images/15338.png",
      available: 5,
      quantity: 0.25,
      price: 0.2
    },
    {
      sku: "15339",
      name: "GEL. CEREZA 66G",
      image: "/product-images/15339.png",
      available: 16,
      quantity: 0.25,
      price: 0.2
    },
    {
      sku: "15340",
      name: "GEL. FRAMBUESA 66G",
      image: "/product-images/15340.png",
      available: 29,
      quantity: 0.25,
      price: 0.2
    },
    {
      sku: "15342",
      name: "GEL. FRAMBUESA INST.1CJX3BL",
      image: "/product-images/15342.png",
      available: 0,
      quantity: 0.25,
      price: 0.2
    },
    {
      sku: "15348",
      name: "PUDIN VAINILLA 58G",
      image: "/product-images/15348.png",
      available: 47,
      quantity: 0.25,
      price: 0.2
    },
    {
      sku: "15352",
      name: "PUDIN CHOCOLATE 72G",
      image: "/product-images/15352.png",
      available: 17,
      quantity: 0.25,
      price: 0.2
    },
    {
      sku: "15353",
      name: "FLAN 46G",
      image: "/product-images/15353.png",
      available: 16,
      quantity: 0.25,
      price: 0.2
    },
    {
      sku: "15355",
      name: "FLAN 92G",
      image: "/product-images/15355.png",
      available: 2,
      quantity: 0.25,
      price: 0.4
    },
    {
      sku: "15372",
      name: "POLLY BOLSA ENRIQ. 12X900G",
      image: "/product-images/15372.png",
      available: 0,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15374",
      name: "CREMA A. POLLY ENR. 12X900G",
      image: "/product-images/15374.png",
      available: 0,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15379",
      name: "POLLY BOLSA ENRIQ. 4X2000G",
      image: "/product-images/15379.png",
      available: 0,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15380",
      name: "POLLY BOLSA ENRIQ. 12X450G",
      image: "/product-images/15380.png",
      available: 0,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15381",
      name: "MI CHICHA POLLY 12X550G",
      image: "/product-images/15381.png",
      available: 0,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15430",
      name: "SALSA TERIYAKI 150 CC",
      image: "/product-images/15430.png",
      available: 2,
      quantity: 0.25,
      price: 0.045
    },
    {
      sku: "15553",
      name: "KETCHUP HEINZ PICANTE 397G",
      image: "/product-images/15553.png",
      available: 8,
      quantity: 0.25,
      price: 0.18
    },
    {
      sku: "15557",
      name: "COL. 100% MANZANA 110G",
      image: "/product-images/15557.png",
      available: 1,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15558",
      name: "COL. 100% PERA 110G",
      image: "/product-images/15558.png",
      available: 4,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15560",
      name: "COL. 100% MANZANA BANANA 110G",
      image: "/product-images/15560.png",
      available: 0,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15561",
      name: "COL. 100% PERA GUAYABA 110G",
      image: "/product-images/15561.png",
      available: 834,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15582",
      name: "MOSTAZA HEINZ 250G PET",
      image: "/product-images/15582.png",
      available: 0,
      quantity: 0.25,
      price: 0.065
    },
    {
      sku: "15583",
      name: "MOSTAZA  MIEL HEINZ 280G PET",
      image: "/product-images/15583.png",
      available: 0,
      quantity: 0.25,
      price: 0.065
    },
    {
      sku: "15588",
      name: "SALSA DE AJO GALON",
      image: "/product-images/15588.png",
      available: 0,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15610",
      name: "SALSA SOYA GALON 4000CC",
      image: "/product-images/15610.png",
      available: 0,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15645",
      name: "COL. POUCH FRUT.MIXTAS 113G 24",
      image: "/product-images/15645.png",
      available: 2,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15647",
      name: "COL. POUCH BANANA 113G 24UNDS",
      image: "/product-images/15647.png",
      available: 288,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15671",
      name: "COL. POUCH F. TROPICAL 113G 24",
      image: "/product-images/15671.png",
      available: 118,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15672",
      name: "COL. POUCH MELOCOTON 113G 24UN",
      image: "/product-images/15672.png",
      available: 1,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15673",
      name: "COL. POUCH POST FRUTA 113G 24U",
      image: "/product-images/15673.png",
      available: 0,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15674",
      name: "KET.IND. 10G 396 SB HEINZ",
      image: "/product-images/15674.png",
      available: 0,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15678",
      name: "COL. POUCH PERA 113G 24UNDS",
      image: "/product-images/15678.png",
      available: 11,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15679",
      name: "COL. POUCH MANZANA 113GR",
      image: "/product-images/15679.png",
      available: 88,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15704",
      name: "MERE.CHOCO.KIDZ BOLS. 450G",
      image: "/product-images/15704.png",
      available: 107,
      quantity: 0.25,
      price: 0.1
    },
    {
      sku: "15707",
      name: "SBT KETCHUP CON BBQ 397G",
      image: "/product-images/15707.png",
      available: 6,
      quantity: 0.25,
      price: 0.18
    },
    {
      sku: "15714",
      name: "MOSTAZA HEINZ VID 113G",
      image: "/product-images/15714.png",
      available: 39,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15723",
      name: "POSTRE MANZANA C/ARROZ 118G",
      image: "/product-images/15723.png",
      available: 0,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15727",
      name: "POSTRE PERA C/ARROZ 118G",
      image: "/product-images/15727.png",
      available: 0,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15729",
      name: "POST. FRUTAS TRO.C/ARROZ 118G",
      image: "/product-images/15729.png",
      available: 0,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15736",
      name: "PASSATA HEINZ 480G",
      image: "/product-images/15736.png",
      available: 181,
      quantity: 0.25,
      price: 0.13
    },
    {
      sku: "15737",
      name: "POST MANGO C/ARROZ 118G",
      image: "/product-images/15737.png",
      available: 0,
      quantity: 0.25,
      price: 0.07
    },
    {
      sku: "15739",
      name: "KETCHUP HEINZ PROMOCION",
      image: "/product-images/15739.png",
      available: 0,
      quantity: 0.25,
      price: 0.18
    },
    {
      sku: "15740",
      name: "GEL. TUTTI FRUTTI 66G",
      image: "/product-images/15740.png",
      available: 12,
      quantity: 0.25,
      price: 0.2
    },
    {
      sku: "15752",
      name: "GEL. PIÑA  66G",
      image: "/product-images/15752.png",
      available: 4,
      quantity: 0.25,
      price: 0.2
    },
    {
      sku: "15753",
      name: "SALSA PARA GUISO TQF 190G",
      image: "/product-images/15753.png",
      available: 0,
      quantity: 0.25,
      price: 0.065
    },
    {
      sku: "15754",
      name: "SALSA PARA GUISOS TQF 480G",
      image: "/product-images/15754.png",
      available: 0,
      quantity: 0.25,
      price: 0.13
    },
    {
      sku: "15758",
      name: "MI CHICHA POLLY BOLSA  12X450G",
      image: "/product-images/15758.png",
      available: 208,
      quantity: 0.25,
      price: 0.06
    },
    {
      sku: "15759",
      name: "KETCHUP PICANTE 198G",
      image: "/product-images/15759.png",
      available: 0,
      quantity: 0.25,
      price: 0.09
    },
    {
      sku: "15760",
      name: "COL. HEINZ PERA 186G",
      image: "/product-images/15760.png",
      available: 31,
      quantity: 0.25,
      price: 0.09
    },
    {
      sku: "15761",
      name: "COL. HEINZ MANZANA 186G",
      image: "/product-images/15761.png",
      available: 4,
      quantity: 0.25,
      price: 0.09
    },
    {
      sku: "15762",
      name: "COL. HEINZ MELOCOTON 186G",
      image: "/product-images/15762.png",
      available: 1,
      quantity: 0.25,
      price: 0.09
    },
    {
      sku: "15764",
      name: "COL. HEINZ BANANA 186G",
      image: "/product-images/15764.png",
      available: 3,
      quantity: 0.25,
      price: 0.09
    },
    {
      sku: "15765",
      name: "COL. HEINZ FRUTAS MIXTAS 186G",
      image: "/product-images/15765.png",
      available: 2,
      quantity: 0.25,
      price: 0.09
    },
    {
      sku: "15766",
      name: "COL. HEINZ FRUTAS TROPIC 186G",
      image: "/product-images/15766.png",
      available: 2,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15767",
      name: "KETCHUP BBK 198G",
      image: "/product-images/15767.png",
      available: 0,
      quantity: 0.25,
      price: 0.09
    },
    {
      sku: "15768",
      name: "COL.POSTRE FRUTAS  186G",
      image: "/product-images/15768.png",
      available: 1,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15770",
      name: "GEL. LIMÓN  66G",
      image: "/product-images/15770.png",
      available: 13,
      quantity: 0.25,
      price: 0.2
    },
    {
      sku: "15771",
      name: "VINAGRE DORADO ARO 500 CC",
      image: "/product-images/15771.png",
      available: 25,
      quantity: 0.25,
      price: 0.1
    },
    {
      sku: "15772",
      name: "GEL. CEREZA FLEXIBLE 132G",
      image: "/product-images/15772.png",
      available: 182,
      quantity: 0.25,
      price: 0.15
    },
    {
      sku: "15773",
      name: "GEL. FRESA  FLEXIBLE 132G",
      image: "/product-images/15773.png",
      available: 5,
      quantity: 0.25,
      price: 0.15
    },
    {
      sku: "15774",
      name: "GEL. FRAMBUESA FLEXIBLE 132G",
      image: "/product-images/15774.png",
      available: 40,
      quantity: 0.25,
      price: 0.15
    },
    {
      sku: "15775",
      name: "KETCHUP HEINZ SIN AZÚCAR  367G",
      image: "/product-images/15775.png",
      available: 4,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15777",
      name: "MOSTAZA MIEL VIDRIO 200G",
      image: "/product-images/15777.png",
      available: 6,
      quantity: 0.25,
      price: 0
    },
    {
      sku: "15779",
      name: "KETCHUP TQF PROMO 397G",
      image: "/product-images/15779.png",
      available: 5,
      quantity: 0.25,
      price: 0
    }
  ]
  
  return products;
}

export default getDumbProducts;