interface SeedProduct {
    NombreProducto: string;
    Precio: string;
    Categoria: ValidCategory;
}

type ValidCategory = 'CASE' | 'MOTHER BOARDS' | 'PROCESADORES' | 'MEMORIA RAM' | 'MEMORIA SD' | 'UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS' | 'CELULARES' | 'DVD-RWs' | 'TABLET' | 'NOTEBOOK' | 'COMPUTADORES DESKTOP, AIO, MINIPC' | 'PROYECTORES' | 'ESCANER' | 'IMPRESORAS' | 'SERVIDORES' |
    'CAMARAS' | 'TARJETA DE VIDEO' | 'ROUTER, ACCESS POINT, SWITCH, NVR';

export const seedProducts: SeedProduct[] = [
    {
        NombreProducto: "CASE ADATA FOR HDD-SSD EC700G M.2 PCIE/SATA USB3.2 GEN2 WITH RGB LIGHTING",
        Precio: "27.00",
        Categoria: "CASE"
    },
    {
        NombreProducto: "CASE CORSAIR 2500X DUAL-CHAMBER 1USB3.2 2USB-TYPE-C WIN-TEMP GLASS mATX mIATX WHITE",
        Precio: "124.70",
        Categoria: "CASE"
    },
    {
        NombreProducto: "CASE CORSAIR 2500X DUAL-CHAMBER 1USB3.2 2USB-TYPE-C WIN.-TEMP. GLASS mATX mIATX BLACK",
        Precio: "124.70",
        Categoria: "CASE"
    },
    {
        NombreProducto: "CASE CORSAIR ATX 6500X DUAL-CAMERA TEMPERED GLAS 2TYPE-C 5USB3.2 AUDIO MID-TOWER BLACK",
        Precio: "156.20",
        Categoria: "CASE"
    },
    {
        NombreProducto: "CASE CORSAIR ATX 6500X DUAL-CHAMBER TEMPERED GLAS 2TYPE-C 5USB3.2 AUDIO MID-TOWER WHITE",
        Precio: "156.20",
        Categoria: "CASE"
    },
    {
        NombreProducto: "CASE HELTECH SX-8122 MICRO-SLIM FP-750W BLACK",
        Precio: "26.00",
        Categoria: "CASE"
    },
    {
        NombreProducto: "CASE HELTECH SX-8201 MICRO-SLIM FP-750W BLACK",
        Precio: "26.00",
        Categoria: "CASE"
    },
    {
        NombreProducto: "CASE INFINYTEK GAMER PRO H-15 BLACK 4 VENTILADORES ARGB SIN PS BLACK",
        Precio: "49.50",
        Categoria: "CASE"
    },
    {
        NombreProducto: "CASE INFINYTEK GAMER PRO-3306 BLACK 4 VENTILADORES ARGB SIN PS BLACK",
        Precio: "29.50",
        Categoria: "CASE"
    },
    {
        NombreProducto: "CASE INS CA-054 MICRO-ATX LED-RGB USB-2.0-302 COMBO TECL PARA MOU PARL BLACK",
        Precio: "27.90",
        Categoria: "CASE"
    },
    {
        NombreProducto: "CASE QUASAD C3151T 2USB3.2 USB2.0 24-4 PINES 2SATA TECL. MOU. PAR. FP-300W NEGRO",
        Precio: "32.00",
        Categoria: "CASE"
    },
    {
        NombreProducto: "CASE QUASAD C3152 2USB3.2 USB2.0 24-4 PINES 2SATA TECL. MOU. PAR. FP-300W NEGRO",
        Precio: "32.00",
        Categoria: "CASE"
    },
    {
        NombreProducto: "CASE SPEEDMIND SMCS-M10 COMBO CASE USB3.0 TECLADO MOUSE",
        Precio: "58.00",
        Categoria: "CASE"
    },
    {
        NombreProducto: "ENCLOSURE ARGOM 2.5INC. SATA USB 3.0 NEGRO",
        Precio: "5.60",
        Categoria: "CASE"
    },
    {
        NombreProducto: "ENCLOSURE ARGOM AC-1033 2.5INC. SATA USB 3.0 NEGRO",
        Precio: "6.40",
        Categoria: "CASE"
    },
    {
        NombreProducto: "MBO ASROCK H610M-AC 14th LGA1700 2DDR4 WiFi D-Sub HDMI DP USB3.2 M.2 PCIE 4.0 Micro-ATX",
        Precio: "83.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO ASROCK H610M-HVS 12GEN LGA1700 2XDDR4 VGA HDMI 10USB M.2 PCIE 4.0 MICROATX",
        Precio: "68.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO ASROCK Z790 LIGHTNING WIFI 14VA LGA-1700 DDR5 HDMI DP 3M.2 12USB3.2 PCIE5.0 ATX",
        Precio: "197.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO ASROCK Z890 STEEL LEGENG WIFI BT LGA1851 4DDR5 HDMI 4M.2 9USB3.2 PCIE5.0 ATX",
        Precio: "319.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO ASUS PRIME A520M-K AM4 RYZEN 2DA. 2XDDR4 HDMI DP 12USB 4PCIE MATX",
        Precio: "61.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO ASUS Prime B860M-A Intel Core Ultra LGA1851 DDR5-8666Mhz 2DP HDMI M.2 PCIe5.0 uATX",
        Precio: "158.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO ASUS PRIME H610 12VA LGA1700 2XDDR4-3200 D-SUB HDMI M.2 USB3.2 PCIE4.0 MATX",
        Precio: "70.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO ASUS PRIME Z890-P WIFI Intel Core Ultra Series LGA1851 DDR5-8666 HDMI DP 5USB 4m.2 PCIe5.0 ATX",
        Precio: "262.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO ASUS PRO Q570M-C 10MA-11AVA. LGA1200 4DDR4 2DP HDMI 2M.2 6USB 2-PCIE3.0 MICRO-ATX",
        Precio: "179.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO ASUS ROG STRIX B860-A GAMING WIFI Intel Core Ultra DDR5-8600Mhz BT DP HDMI 4M.2 PCIe 5.0 ATX",
        Precio: "279.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO ASUS ROG STRIX B860-F GAMING WIFI Intel Core Ultra LGA1851 DDR5-9066Mhz BT DP HDMI 4M.2 PCIe 5.0",
        Precio: "304.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO ASUS ROG STRIX Z890-F Gaming Intel Core Ultra LGA1851 DDR5 WIFI HDMI DP 23USB 5M.2 PCIe5.0 ATX",
        Precio: "446.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO GIGABYTE B650 EAGLE AX AMD AM5 RYZEN 7000 4DDR5 HDMI DP USBC 2PCIE 4.0 M.2 ATX",
        Precio: "164.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO GIGABYTE B760M DS3H AX 13VA LGA1700 4DDR4 WIFI BT HDMI 2DP 2M.2 USB-TYPE-C PCIE4.0 MATX",
        Precio: "129.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO GIGABYTE B760M-D3HP DDR4 14va LGA1700 4DDR4-3200 HDMI 2M.2 8USB PCIe4.0 mATX",
        Precio: "99.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO GIGABYTE B850 AORUS ELITE WIFI7 ICE AM5 Ryzen 9000 4DDR5 BT DP HDMI USB3.2 PCIe 5.0 ATX",
        Precio: "222.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO GIGABYTE B850 GAMING X WIFI6E AM5 Ryzen 9000 4DDR5-5200 BT DP HDMI USB3.2 PCIe 5.0 ATX",
        Precio: "196.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO GIGABYTE B860 EAGLE WIFI6E Intel Core Ultra LGA1851 DDR5-6400 HDMI DP 3M.2 PCIe 5.0 ATX",
        Precio: "192.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO GIGABYTE B860 GAMING X WIFI6E Intel Core Ultra LGA1851 DDR5-6400 BT HDMI DP 3M.2 PCIe 5.0 ATX",
        Precio: "205.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO GIGABYTE B860M D3HP Intel Core Ultra LGA1851 DDR5-6400 HDMI DP 2M.2 13USB PCIe 5.0 micro ATX",
        Precio: "125.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO GIGABYTE H510M K V2 11TH LGA1200 2DDR4-3200 HDMI M.2 4USB3.2 6USB2.0 PCIe3.0 mATX",
        Precio: "63.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO GIGABYTE H610M-H V3 14VA LGA1700 2DDR4 D-SUB HDMI M.2 USB3.2 PCIe4.0 micro-ATX",
        Precio: "69.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO GIGABYTE H810M H Intel Core Ultra LGA1851 DDR5-6400 D-Sub HDMI M.2 11USB PCIe4.0 micro ATX",
        Precio: "95.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO GIGABYTE H810M K Intel Core Ultra LGA1851 DDR5-6400 DP HDMI M.2 10USB PCIe4.0 micro-ATX",
        Precio: "90.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO GIGABYTE Z790 EAGLE AX 14va LGA-1700 4DDR5 WIFI BT HDMI DP 3M.2 USB-C PCIe5.0 ATX",
        Precio: "204.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO QUASAD H610 12VA LGA1700 DDR4-3200 VID SON HDMI M.2 4USB3.0 AIO",
        Precio: "80.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO QUASAD Q670 13VA LGA1700 DDR4-3200 VID SON HDMI M.2 4USB3.0 AIO",
        Precio: "124.00",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "MBO ZEBION H570 11TH LGA1200 2XDDR4-SD SN LN VGA HDMI M.2 USB3.0 MITX",
        Precio: "93.33",
        Categoria: "MOTHER BOARDS"
    },
    {
        NombreProducto: "PROC. AMD AM5 RYZEN 5 9600X 3.9GHZ 6CORE 12HILOS DDR5-192GB L3-32MB 65W NO.INLC. COOLER",
        Precio: "287.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM5 RYZEN 7 7700 3.8GHZ 8CORE 16HILOS 8MB CACHE DDR5-128GB WRAITH PRISM",
        Precio: "334.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM5 RYZEN 7 7700X 4.7GHZ 8CORE 16HILOS 6MB CACHE 105W TSMC 5NM FINFET",
        Precio: "340.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM5 RYZEN 7 9700X 3.8GHZ 8CORE 16HILOS DDR5-192GB L3-32MB 65W NO-INCL COOLER",
        Precio: "355.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM5 RYZEN 7 9800X3D 4.7GHZ 8CORE 16HILOS 8MB CACHE DDR5-192GB No-Fan",
        Precio: "535.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM5 RYZEN 9 7900 3.7GHZ 12CORE 24HILOS 12MB CACHE DDR5-128GB WRAITH PRISM",
        Precio: "372.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM5 RYZEN 9 7900X 4.7GHZ 12CORE 24HILOS 12MB CACHE 170W TSMC 5NM FINFET",
        Precio: "409.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD RYZEN 5 7600X AM5 4.7GHZ 6CORE 12HILOS 6MB CACHE DDR5 105W FINFET DE 5NM TSMC NO-DIS",
        Precio: "230.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD RYZEN 5 8600G AM5 5.0GHZ 6CORE 12HILOS CACHE 22MB 65W WITHOUT THERMAL SOLUTION",
        Precio: "199.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD RYZEN 7 7800X3D 4.2GHZ 8CORE 16HILOS 8MB DDR5 120W TSMC 5NM FINFET",
        Precio: "455.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD RYZEN 9 9900X3D 4.4GHZ 12CORE 24HILOS 128MB L3-CACHE 120W",
        Precio: "671.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD RYZEN 9 9950X3D 4.3GHZ 16CORE 32HILOS 128MB L3-CACHE 170W",
        Precio: "785.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. DELL XEON BRONCE 3204 1.9GHZ. 6C-6T. 8.25MB CACHE PARA R640-R740",
        Precio: "389.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. INTEL CORE I3-10105 10GEN 3.70-4.40GHZ 4NUCLEOS 8HILOS 6MB DDR4-2666 UHD630 LGA1200",
        Precio: "98.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. INTEL CORE I3-10105F 10GEN 3.70-4.40GHZ 4NUCLEOS 8HILOS 6MB DDR4-2666 NOVIDEO LGA1200",
        Precio: "85.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. INTEL CORE I3-12100 12GEN 3.30-4.30GHZ 4NUCLEOS 8HILOS 5MB DDR4-3200 UHD730 LGA1700",
        Precio: "122.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. INTEL CORE I3-13100 13GEN 3.40GHZ 4NUCLEOS 12MB DDR4-3200 UHD730 LGA1700",
        Precio: "128.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. INTEL CORE I3-14100 14GEN 3.50-4.70GHZ 4NUCLEOS 8HILOS 12MB DDR5-4800 UHD730 LGA1700",
        Precio: "128.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. INTEL CORE I5-10400 10GEN 2.90-4.30GHZ 6NUCLEOS 12HILOS 12MB DDR4-2666 UHD630 LGA1200",
        Precio: "139.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. INTEL CORE I5-12400 12GEN 2.50-4.40GHZ 6NUCLEO 12HILO 18MB DDR5-4800 UHD730 LGA1700",
        Precio: "158.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. INTEL CORE I5-13400 13GEN 2.50-4.60GHZ 10NUCLEO 16HILO 20MB DDR5-4800",
        Precio: "175.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. INTEL CORE I5-14400 14GEN 2.50-4.70GHZ 10NUCLEO 16HILO 20MB DDR5-4800 UHD770 LGA1700",
        Precio: "189.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. INTEL CORE I7-12700 12GEN 2.10-4.90GHZ 12NUCLEOS 20HILOS 25MB DDR4 3200 UHD770 LGA1700",
        Precio: "304.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. INTEL CORE I7-13700 13GEN 5.1GHZ 16CORES 24THREADS 24MB DDR5-5600 UHD770 LGA1700",
        Precio: "364.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. INTEL CORE I7-14700K 14GEN 3.40-5.50GHZ 20N 28H 33MB DDR5-5600 UHD770 NOVENT LGA1700",
        Precio: "424.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. INTEL CORE I9-14900 14GEN 5.6GHZ 24N 32H 36MB DDR5-5600 UHD-770 LGA1700",
        Precio: "658.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. INTEL CORE I9-14900KF 14GEN 5.60GHZ 24N 16H 36MB DDR5-5600 NOVIDEO NOVENT LGA1700",
        Precio: "501.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. INTEL ULTRA 7 265 3.9Hz 20Cores 20Hilos Cache 30MB DDR5-6400 Graphics LGA1851",
        Precio: "386.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROCESADOR INTEL ULTRA 5 225 3.5Hz 6-Core 10-Nucleos Cache 20MB DDR5-6400 Vid. LGA1851",
        Precio: "282.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM4 RYZEN 3 4100 3.8GHZ 4CORE 8HILOS 4MB CACHE 65W 7NM RETAIL-BOX SIN VIDEO",
        Precio: "74.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM4 RYZEN 5 5500 3.6GHZ 6CORE 12HILOS 3MB CACHE 65W RETAIL-BOX SIN VIDEO",
        Precio: "80.70",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM4 RYZEN 5 5600GT 3.6GHZ 6CORE 12HILOS CACHE 19MB 65W WITH THERMAL SOLUTION",
        Precio: "138.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM4 RYZEN 5 5600X 3.7GHZ 6CORE 12HILOS 32MB CACHE 65W 7NM BOX SIN VIDEO",
        Precio: "126.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM4 Ryzen 5 5600XT 3.7Ghz 6CORE 12HILOS 3MB CACHE 65W BOX",
        Precio: "154.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM4 RYZEN 5 Pro 4655G 3.7GHZ 6CORE 12HILOS 8MB-CACHE 65W 7NM VENT. INCL.",
        Precio: "102.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM4 RYZEN 7 5700G 3.8GHZ 8CORE 16 HILOS 16MB CACHE 65W TSMC 7NM FINFET",
        Precio: "152.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM4 RYZEN 7 5800X 3.8GHZ 8CORE 16HILOS 32MB CACHE 95W 7NM BOX SIN VIDEO SIN COOLER",
        Precio: "227.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM4 Ryzen 7 5800XT 3.8GHZ 8CORE 16HILOS CACHE 32MB 105W WITHOUT THERMAL SOLUTION",
        Precio: "222.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "PROC. AMD AM5 RYZEN 5 7600 3.8GHZ 6CORE 12HILOS 6MB CACHE DDR5-128GB WRAITH STEALTH",
        Precio: "208.00",
        Categoria: "PROCESADORES"
    },
    {
        NombreProducto: "DIMM KINGSTON FURY BEAST RGB 16GB DDR5-5200MHZ CL40 288-PIN NON-ECC",
        Precio: "50.00",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM KINGSTON FURY BEAST RGB 32GB DDR5-5200MHZ CL40 288-PIN NON-ECC",
        Precio: "87.80",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM KINGSTON FURY BEAST RGB XMP 16GB DDR5-5200MHZ CL40 288-PIN NON-ECC",
        Precio: "50.10",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM KINGSTON FURY BEAST RGB XMP 16GB DDR5-5600MHZ CL40 288-PIN NON-ECC",
        Precio: "50.70",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM KINGSTON FURY RENEGADE 32GB 512M X 64BIT DDR4-3200 CL 16 288-PIN NEGRO",
        Precio: "63.30",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM LEXAR 16GB DD4-3200Mhz 288Pin CL22 1.2V",
        Precio: "26.00",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM LEXAR 8GB DD4-3200Mhz 288Pin CL22 1.2V",
        Precio: "16.00",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "SO-DIMM ADATA 4GB PC-2666 DDR4 CL19",
        Precio: "11.50",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "SO-DIMM ADATA 8GB PC-3200 DDR4 STD 1.2 260-PIN SGN",
        Precio: "14.60",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "SO-DIMM CRUCIAL 8GB DDR4-3200 1GX64 CL22",
        Precio: "15.90",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "SO-DIMM KINGSTON 16GB 1RX16 2G 64BIT PC4-3200 CL22 260-PIN",
        Precio: "29.00",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "SO-DIMM KINGSTON 16GB 3200MHZ DDR4 CL20 SODIMM FURY IMPACT PN-KF432S20IB-16",
        Precio: "31.60",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "SO-DIMM KINGSTON 16GB DDR5 5600MT-s NON-ECC CL46 1Rx16 1.1V 262pin42.60 DISCO DURO WESTERN DIGITAL-INTERNO-AZUL-2TB-5400PM-2.5INC.-CACHE 128MB-NOTEBOOK BLUE",
        Precio: "42.60",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "SO-DIMM KINGSTON 16GB DDR5-5600MHZ CL46 1RX8 1.1V 262-PIN Non-ECC",
        Precio: "44.90",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "SO-DIMM KINGSTON 32GB 1RX16 4G X 64-BIT PC4-3200 CL22 260-PIN",
        Precio: "59.00",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "SO-DIMM KINGSTON 32GB DDR5 5600MT-s NON-ECC CL46 2Rx8 1.1V 262pin 79.90 DISCO DURO WESTERN DIGITAL-INTERNO-ROJO PRO-10TB-7200RPM-3.5INC.-24-7-NAS",
        Precio: "79.90",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "SO-DIMM KINGSTON 8GB 1600MHZ DDR3L NON-ECC CL11 1.35V KVR16LS11-827.30 DISO DURO ADATA HD330-1TB ANTISHOCK USB-3.2 BLACK EXTERNO",
        Precio: "27.30",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "SO-DIMM KINGSTON 8GB 1RX8 1G 64BIT PC4-3200 CL22 260-PIN",
        Precio: "15.90",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "SO-DIMM KINGSTON 8GB DDR3 PC-1600",
        Precio: "27.40",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "SO-DIMM KINGSTON FURY IMPACT 8GB DDR4-3200MHZ PC4-25600 CL20 ECC 260-PIN",
        Precio: "17.70",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "SODIMM KINGSTON FURY IMPACT 16GB 2G x 64-Bit DDR5-5600 CL40 262-Pin44.40 HDD DELL 1.2TB 10K RPM 12G 3.5INC SAS HOTPLUG PARA T360, R360, R760XS",
        Precio: "44.40",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM ADATA 8GB 3200Mhz DDR4 L22 1.2V",
        Precio: "14.60",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM ADATA 8GB DDR5 4800 1.1V",
        Precio: "22.90",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM ADATA 8GB PC-1600 DDR3L LOW VOLTAGE",
        Precio: "22.60",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM ADATA SINGLE TRAY 8GB DDR4 2666MHZ",
        Precio: "14.60",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM CORSAIR Dominator Titanium RGB DDR5 DRAM 64GB (2x32GB) 600MT-s CL32",
        Precio: "270.00",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM CORSAIR RGB 64GB VENGEANCE 2X32GB DDR5 5600MHZ CL40 BLACK168.90 DISCO DURO EXTERNO ADATA 1TB HD710 USB 3.0 ANTISHOCK WATERRESIST AMARILLO",
        Precio: "168.90",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM DELL 16GB DDR5 UDIMM 4800 MT-s ECC para T360 R360",
        Precio: "259.00",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM DELL 16GB DDR5 UDIMM 4800MHz ECC para R660xs, R760xs",
        Precio: "228.60",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM DELL 16GB DDR5 UDIMM 5600MHz ECC para R660xs R760xs",
        Precio: "266.00",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM DELL 32GB DDR5 UDIMM 4800 MT-s ECC para T360 R360",
        Precio: "420.90",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM DELL 32GB DDR5 UDIMM 4800MHz ECC para R660xs, R760xs",
        Precio: "416.00",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM DELL 32GB DDR5 UDIMM 5600MHz ECC para R660xs R760xs",
        Precio: "381.00",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM DELL 32GB DDR5 UDIMM 5600MHz ECC para T160, T360, R260, R360421.00 DISCO DURO EXTERNO ADATA 2TB HD710 USB 3.0 ANTISHOCK WATERRESIST ROJO",
        Precio: "421.00",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM DELL 64GB DDR4 RDIMM 3200MHZ ECC PARA R450 R550 R650XS R750XS",
        Precio: "626.40",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM DELL 64GB DDR5 UDIMM 4800MHz ECC para R660xs, R760xs",
        Precio: "683.10",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM DELL 64GB DDR5 UDIMM 5600MHz ECC para R660xs R760xs",
        Precio: "785.00",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM KINGSTON 16GB 1RX8 2G X 64-BIT PC4-3200",
        Precio: "28.90",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM KINGSTON 16GB DDR5-5600MHZ CL46 1RX8 1.1V 288-PIN Non-ECC",
        Precio: "44.90",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM KINGSTON 8GB 1600MHZ DDR3 NON-ECC CL11 KVR16N11-8",
        Precio: "27.30",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM KINGSTON 8GB PC4-3200MHZ DDR4 NON-ECC CL22 1RX16 64BIT",
        Precio: "15.90",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM KINGSTON FURY 16GB 3200MHZ DDR4 CL16 NON ECC RGB 1.35V BLACK37.60 DISCO DURO WD 4TB 3.5INC SATA 3 7200RPM 256MB BUFFER BLACK",
        Precio: "37.60",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM KINGSTON FURY 8GB 3200MHZ DDR4 CL16 NON ECC BLACK",
        Precio: "18.00",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM KINGSTON FURY BEAST 16GB DDR5-5200MHZ CL40 288-PIN NON-ECC 43.20 DISCO DURO WD INTERNO 10TB 7200RPM 3.5INC. 24-7 VIDEO VIGILANCIA PURPLE",
        Precio: "43.20",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM KINGSTON FURY BEAST 32GB DDR5-5200MHZ CL40 288-PIN NON-ECC 82.80 DISCO DURO WD INTERNO NAS 10TB 7200RPM CACHE 64MB 3.5INC. 24-7 RED PLUS",
        Precio: "82.80",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM KINGSTON FURY BEAST NEGRO 32GB 2X16GB-64BIT DDR5-4800 CL38 288-PIN",
        Precio: "115.10",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "DIMM KINGSTON FURY BEAST NEGRO 32GB DDR5-5600MTS CL36 288-PIN NON-ECC PLUG N PLAY",
        Precio: "83.80",
        Categoria: "MEMORIA RAM"
    },
    {
        NombreProducto: "MEMORIA MICRO-SDXC WESTERN DIGITAL 128GB SDA 5.0 RD-85WGF0 MORADO",
        Precio: "18.60",
        Categoria: "MEMORIA SD"
    },
    {
        NombreProducto: "MEMORY micro-SDXC SanDdisk UHS-I 128GB 4K UHD with Adapter",
        Precio: "15.70",
        Categoria: "MEMORIA SD"
    },
    {
        NombreProducto: "MICRO-SD KINGSTON SDCS2 256GB CANVAS SELECT PLUS 100MBS C10 UHS-I U3 V30",
        Precio: "19.50",
        Categoria: "MEMORIA SD"
    },
    {
        NombreProducto: "MICRO-SD KINGSTON SDXC 128GB ENDURANCE 95R/45W C10 A1 UHS-I CARD19.80 HDD DELL 2TB 7.2K RPM 6G 3.5INC SATA HOTPLUG PARA T360, R360, R760XS",
        Precio: "19.80",
        Categoria: "MEMORIA SD"
    },
    {
        NombreProducto: "MICRO-SD KINGSTON SDXC 64GB ENDURANCE 95R/30W C10 A1 UHS-I CARD 12.10 HDD DELL 4TB 7.2K RPM 6G 3.5INC SATA CABLEADO PARA T160",
        Precio: "12.10",
        Categoria: "MEMORIA SD"
    },
    {
        NombreProducto: "MICRO-SD SANDISK ULTRA 64GB MICROSDHC-UHS-I CARD WITH ADAPTADOR 100MBS CLASE 10",
        Precio: "4.20",
        Categoria: "MEMORIA SD"
    },
    {
        NombreProducto: "MICRO-SD WITH ADAPTER KINGSTON SDCS2 128GB CANVAS SELECT PLUS",
        Precio: "9.50",
        Categoria: "MEMORIA SD"
    },
    {
        NombreProducto: "MICRO-SD WITH ADAPTER KINGSTON SDCS2 64GB CANVAS SELECT PLUS",
        Precio: "5.00",
        Categoria: "MEMORIA SD"
    },
    {
        NombreProducto: "Micro-SDXC 64GB Canvas Go Plus 170MB-s A2 U3 V30 Card with ADP",
        Precio: "7.90",
        Categoria: "MEMORIA SD"
    },
    {
        NombreProducto: "SD KINGSTON SDS2 64GB CANVAS SELECT PLUS CLASE 10 UHS-I U1",
        Precio: "5.60",
        Categoria: "MEMORIA SD"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL 8TB SATA 7200RPM 3.5Inch CACHE-256MB RED PRO NAS 5y",
        Precio: "254.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD KINGSTON 1TB M.2 2280 SNV3S-1000G PCIe 4.0 x 4 NVMe 6000-4000MB-s NAND 3D",
        Precio: "56.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL INTERNO 12TB NAS 7200RPM 3.5INC. RED",
        Precio: "334.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD KINGSTON 1TB SXS1000 PCIE 1050-MB-S USB 3.2 EXTERNAL",
        Precio: "83.40",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL INTERNO 2TB 5400RPM 3.5INC.24-7 256MB CACHE 3Y PURPLE",
        Precio: "62.90",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD KINGSTON 1TB SXS1000R ROJO PCIe 1050-MB-S USB 3.2 EXTERNAL",
        Precio: "83.60",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL INTERNO 6TB 5400RPM 3.5INC. 24-7 VIDEO VIGILANCIA PURPLE",
        Precio: "144.70",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD KINGSTON 240GB A400 SATA 3 2.5INC. FOR PC O NOTEBOOK 7MM",
        Precio: "24.80",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL NAS 6TB 7200RPM 3.5Inch SATA 6Gb-S CMR Cache 256MB Red Pro",
        Precio: "229.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD KINGSTON 2TB M.2 2280 SNV3S-2000G PCIe 4.0 x 4 NVMe 6000-5000MB-s NAND 3D",
        Precio: "113.20",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL Red Pro 12TB NAS 7200RPM SATA 6 Gb-S 512MB-Cache 3.5INC. RED",
        Precio: "334.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD KINGSTON 2TB SXS1000 PCIE 1050-MB-S USB 3.2 EXTERNAL",
        Precio: "135.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL Red Pro 14TB NAS 7200RPM SATA 6Gb-S 512MB-Cache 3.5INC.",
        Precio: "350.20",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD KINGSTON 2TB SXS1000R ROJO PCIe 1050-MB-S USB 3.2 EXTERNAL",
        Precio: "117.10",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL Red Pro 24TB NAS 7200RPM SATA 6Gb-S 512MB-Cache 3.5INC.",
        Precio: "577.20",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD KINGSTON 480GB A400 SATA 3 2.5INC. FOR PC O NOTEBOOK 7MM",
        Precio: "36.10",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL RED PRO NAS 16TB 7200RPM 3.5INC SATA 259MBS CACHE 512MB",
        Precio: "360.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD KINGSTON 960GB A400 SATA 3 2.5INC. FOR PC O NOTEBOOK 7MM",
        Precio: "57.20",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL Red Pro NAS 20TB 7200RPM SATA 6 Gb-S 512MB-Cache 3.5INC. RED",
        Precio: "430.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD SANDISK 1TB USB3.2 TYPE-C NEGRO",
        Precio: "65.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL SSD MY PASSPORT 1TB USB 3.0 EXTERNO GRIS",
        Precio: "109.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD SEAGATE FIRECUDA GAMING STJP1000400 1TB USB-C EXTERNO LED RGB 5Y",
        Precio: "269.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL-INTERNO 4TB 5400RPM 3.5INC. 24-7-NAS SATA6GB-S CACHE 256MB RED PLUS",
        Precio: "101.20",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD SEAGATE FIRECUDA GAMING STJP500400 500GB USB-C EXTERNO LED RGB 5Y",
        Precio: "189.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL-INTERNO-AZUL-2TB-5400PM-2.5INC.-CACHE 128MB-NOTEBOOK BLUE",
        Precio: "169.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD WESTERN DIGITAL 1TB INTERNO 2.5INCH SA510 7MM SATA III 560MB-S BLUE",
        Precio: "74.40",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL-INTERNO-PURPLE-8TB-5640RPM-3.5INC.-24-7-VIDEO VIGILANCIA PURPLE",
        Precio: "212.90",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD WESTERN DIGITAL 1TB M.2 2280 SN700 PCIe Gen3 x4 RED",
        Precio: "154.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL-INTERNO-ROJO PRO-10TB-7200RPM-3.5INC.-24-7-NAS",
        Precio: "315.70",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD WESTERN DIGITAL 240GB L3.96-W2.75-H0.28 SATA3 545MB-S GREEN",
        Precio: "24.80",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL-INTERNO-ROJO PRO-10TB-7200RPM-3.5INC.-24-7-NAS",
        Precio: "315.70",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD WESTERN DIGITAL 250GB M.2 2280 NVME SN570 BLUE",
        Precio: "46.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISO DURO ADATA HD330-1TB ANTISHOCK USB-3.2 BLACK EXTERNO",
        Precio: "60.30",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD WESTERN DIGITAL 480GB L3.96-W2.75-H0.28 SATA3 545MB-S GREEN",
        Precio: "34.60",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISO DURO ADATA HD330-2TB ANTISHOCK USB-3.2 BLACK EXTERNO",
        Precio: "77.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD WESTERN DIGITAL SN350 NVME 1TB GEN3X4 PCIE M.2 2280 1850MBS GREEN",
        Precio: "54.90",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "HARD DISK DRIVE LEXMARK 500GB SATA",
        Precio: "271.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD WESTERN DIGITAL SN770M NVMe 1TB M.2 2230 PCIe Gen 4 5150MBs Black",
        Precio: "108.40",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "HDD DELL 1.2TB 10K RPM 12G 2.5INC SAS HOTPLUG PARA R360, R660XS",
        Precio: "197.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD XPG 2TB S55 M.2 2230 PCIE 4.0 NVMe 5000MBs",
        Precio: "164.90",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "HDD DELL 1.2TB 10K RPM 12G 3.5INC SAS HOTPLUG PARA T360, R360, R760XS",
        Precio: "197.90",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "HDD DELL 12TB 7.2K RPM 6G 3.5INC SATA HOTPLUG PARA T360, R360, R760XS",
        Precio: "434.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "HDD DELL 2.4TB 10K RPM 12G 3.5INC SAS HOTPLUG PARA T360, R360, R760XS",
        Precio: "279.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "HDD DELL 2TB 7.2K RPM 6G 3.5INC SATA CABLEADO PARA T160",
        Precio: "192.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "HDD DELL 2TB 7.2K RPM 6G 3.5INC SATA HOTPLUG PARA T360, R360, R760XS",
        Precio: "200.60",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "HDD DELL 4TB 7.2K RPM 6G 3.5INC SATA CABLEADO PARA T160",
        Precio: "227.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "HDD DELL 4TB 7.2K RPM 6G 3.5INC SATA HOTPLUG PARA T360, R360, R760XS",
        Precio: "240.80",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "HDD DELL 8TB 7.2K RPM 6G 3.5INC SATA HOTPLUG PARA T360, R360, R760XS",
        Precio: "328.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "HDD KINGSTON DC600M 1920GB 2.5INCH 3D TLC SATA III",
        Precio: "270.10",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "HDD KINGSTON DC600M 960GB SATA SSDS 2.5INCH 3D TLC SATA III",
        Precio: "150.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "HDD SEAGATE ULTRATOUCH PORTABLE STHH1000400 1TB 2.5INCH USB-C EXTERNO NEGRO 2Y",
        Precio: "68.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "HDD SEAGATE ULTRATOUCH PORTABLE STHH1000402 1TB 2.5INCH USB-C EXTERNO BLANCO 2Y",
        Precio: "68.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO DELL 2.4TB 10K RPM SAS 12GBPS 2.5INC. HOT-PLUG PARA R230-R330-R430",
        Precio: "704.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SDD SANDISK 1TB Plus M.2 NVMe PCIe Gen. 3.0 Internal",
        Precio: "58.40",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO EXTERNO ADATA 1TB HD710 USB 3.0 ANTISHOCK WATER RESIST AZUL",
        Precio: "61.80",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SDD SANDISK 500GB Plus M.2 NVMe PCIe Gen. 3.0 Internal",
        Precio: "37.30",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO EXTERNO ADATA 1TB HD710 USB 3.0 ANTISHOCK WATERRESIST AMARILLO",
        Precio: "61.80",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SOLID STATE DRIVE KINGSTON 1TB M.2 SXS2000 2000MB-s USB 3.2 Gen 2x2 EXTERNAL",
        Precio: "90.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO EXTERNO ADATA 1TB HD710 USB 3.0 ANTISHOCK WATERRESIST CAMUFLAJE",
        Precio: "64.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SOLID STATE DRIVE KINGSTON 1TB M.2 XS2000 2000MB-s USB-C 3.2 Gen 2x2 EXTERNAL",
        Precio: "100.10",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO EXTERNO ADATA 1TB HD710 USB 3.0 ANTISHOCK WATERRESIST NEGRO",
        Precio: "61.80",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SOLID STATE DRIVE WESTERN DIGITAL 2TB 2.5 SA510 SATA 560MB/s BLUE134.20 TABLET SAMSUNG GALAXY S10 FE Plus 8GB 128GB 13.1Inch 5G-LTE BT And-14 Incl-Case Gray",
        Precio: "134.20",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO EXTERNO ADATA 1TB HD710 USB 3.0 ANTISHOCK WATERRESIST ROJO",
        Precio: "61.80",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SOLID STATE DRIVE WESTERN DIGITAL 2TB M.2 SN350 PCIE 2280 3D NAND 3200MB-S GREEN",
        Precio: "107.20",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO EXTERNO ADATA 1TB HD770 RGB USB 3.0 NEGRO",
        Precio: "71.10",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SOLID STATE DRIVE WESTERN DIGITAL 2TB SATA III 2.5INCH 7MM GREEN",
        Precio: "92.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO EXTERNO ADATA 2TB HD710 USB 3.0 ANTISHOCK WATERRESIST CAMOUFLAJE",
        Precio: "82.70",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SOLID STATE DRIVE WESTERN DIGITAL 500GB INTERNO 2.5INCH SA510 7MM SATA III 560MB-S BLUE",
        Precio: "54.80",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO EXTERNO ADATA 2TB HD710 USB 3.0 ANTISHOCK WATERRESIST NEGRO",
        Precio: "80.80",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD ADATA 2TB LEGEND 710 PCIE GEN3 X4 M.2 2280 NVME 1.4 3D NAND",
        Precio: "142.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO EXTERNO ADATA 2TB HD710 USB 3.0 ANTISHOCK WATERRESIST ROJO",
        Precio: "80.80",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD ADATA LEGEND 860 1TB M.2 2280 3D NAND PCIe Gen4X4 5000MB-s 5y 58.40 TABLET VORTEX ZTAN10 QC 4GB 32GB 10Inch WIFI Lte vUSB-C 2-CAM AND13 GREEN",
        Precio: "58.40",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO EXTERNO ADATA 2TB HD710B USB 3.0 ANTISHOCK WATERRESIST AZUL",
        Precio: "79.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD ADATA LEGEND 860 2TB M.2 2280 3D NAND PCIe Gen4X4 5000MB-s 5y106.50",
        Precio: "106.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO EXTERNO ADATA 2TB HD770G USB 3.1 NEGRO",
        Precio: "90.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD ADATA LEGEND 900 2TB M.2 PCIE GEN4X4 MVME 7000MB-S COMP. 3Y 118.60 COP. DELL PRECISION WORKSTATION 3280 i7-14700 16GB 512GB-M.2 NVIDIA-T400-4GB W11Pro CFF 3YB",
        Precio: "118.60",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO EXTERNO ADATA 5TB HD710 PRO USB 3.1 ANTISHOCK WATERRESIST NEGRO",
        Precio: "148.60",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD ADATA SD810-2TB 2000MB-S USB-3.2 TYPO-C BLACK EXTERNO",
        Precio: "152.60",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO EXTERNO ADATA 8TB HM800 USB-3.2 WINDOS-MAC NEGRO",
        Precio: "236.10",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD ADATA SD810-2TB 2000MB-S USB-3.2 TYPO-C SILVER EXTERNO",
        Precio: "152.60",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WD 1TB ELEMENTS SSD PORTATIL USB 3.0 EXTERNO BLACK",
        Precio: "88.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD ADATA SD810-4TB 2000MB-S USB-3.2 TYPO-C BLACK EXTERNO",
        Precio: "327.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WD 2TB ELEMENTS SE SSD PORTATIL, USB 3.0 COMPATIBLE CON PC MAC",
        Precio: "159.90",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD ADATA SD810-4TB 2000MB-S USB-3.2 TYPO-C SILVER EXTERNO",
        Precio: "327.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WD 2TB SATA3 6GB-S 5400RPM 64MB",
        Precio: "59.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD ADATA XPG GAMMIX S55 1TB PCIe Gen4 x4 M.2 2230 5000-MB/s",
        Precio: "82.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WD 4TB 3.5INC SATA 3 7200RPM 256MB BUFFER BLACK",
        Precio: "188.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD DELL 1.92TB READINTENSIVE 6G 2.5INC SATA HOTPLUG PARA R360, R660XS",
        Precio: "847.60",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WD 4TB 3.5INC SATA 7200RPM 256MB 24-7 RED PRO NAS",
        Precio: "163.40",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD DELL 480GB READINTENSIVE 6G 2.5INC SATA HOTPLUG PARA R350, R650XS, R750XS",
        Precio: "422.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WD INTERNO 10TB 7200RPM 3.5INC. 24-7 VIDEO VIGILANCIA PURPLE",
        Precio: "280.60",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD DELL 480GB READINTENSIVE 6G 3.5INC SATA HOTPLUG PARA T360, R360, R760XS",
        Precio: "392.40",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WD INTERNO NAS 10TB 7200RPM CACHE 64MB 3.5INC. 24-7 RED PLUS",
        Precio: "291.30",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD DELL 960GB READINTENSIVE 6G 2.5INC SATA HOTPLUG R360, R660XS 536.70 NOT. DELL LATITUDE 3450 i5-1335U 8GB 512GB-M.2 14Inc-FHD W11Pro Gris 1YB",
        Precio: "536.70",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL -NAS-8TB-5640RPM-3.5INC.-RED PLUS- 256MB CACHE",
        Precio: "185.50",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD DELL 960GB ReadIntensive 6G 3.5Inc SATA Cableado para T150, T160 536.00 NOT. DELL LATITUDE 3450 i7-1355U 16GB 512GB-M.2 14Inc-FHD W11Pro Gris 1YB",
        Precio: "536.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "DISCO DURO WESTERN DIGITAL 4TB-INTERNO-PURPLE-5400RPM-3.5INC.-24-7-256MB CACHE 3Y PURPLE",
        Precio: "94.20",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "SSD DELL 960GB READINTENSIVE 6G 3.5INC SATA HOTPLUG PARA T360, R360, R760XS",
        Precio: "548.00",
        Categoria: "UNIDADES DE ESTADO SOLIDO Y DISCOS DUROS"
    },
    {
        NombreProducto: "CELULAR SAMSUNG GALAXY A56 OC 12GB 256GB 5G 6.7Inch 4CAM USB-C And-14 Awesome Graphite",
        Precio: "410.00",
        Categoria: "CELULARES"
    },
    {
        NombreProducto: "CELULAR SAMSUNG GALAXY AI S24 PLUS 12GB 512GB 5G 6.7INC 4CAM. DUAL-SIM ANDROID-14 ONYX BLACK",
        Precio: "822.00",
        Categoria: "CELULARES"
    },
    {
        NombreProducto: "CELULAR SAMSUNG GALAXY S25 ULTRA 12GB 512GB 5G 6.85INC 5CAM. NFC USB-C TITANIUM GRAY",
        Precio: "1140.00",
        Categoria: "CELULARES"
    },
    {
        NombreProducto: "CELULAR SAMSUNG GALAXY SM-A06 OC 4GB 128GB 5G-LTE 6.7INC HD 2CAM USB-C ANDROID 14 BLACK",
        Precio: "94.00",
        Categoria: "CELULARES"
    },
    {
        NombreProducto: "CELULAR SAMSUNG GALAXY SM-A165MZK OC 4GB 128GB LTE 6.71",
        Precio: "142.00",
        Categoria: "CELULARES"
    },
    {
        NombreProducto: "CELULAR SAMSUNG GALAXY SM-A556ELB OC 8GB 256GB 5G 6.6INC 4CAM USB-C ANDROID 14 CELESTE",
        Precio: "325.00",
        Categoria: "CELULARES"
    },
    {
        NombreProducto: "DVD-RW HP USB PORT EXTERNAL",
        Precio: "34.00",
        Categoria: "DVD-RWs"
    },
    {
        NombreProducto: "DVD-RWITER DELL SLIM DVD-RW DW316 EXTERNAL USB",
        Precio: "31.80",
        Categoria: "DVD-RWs"
    },
    {
        NombreProducto: "TABLET HYUNDAI PLUS 10LB2 QC 4GB 64GB LTE WIFI 10.1Inch IPS 2-CAM. ANDROID 13 BLACK",
        Precio: "81.00",
        Categoria: "TABLET"
    },
    {
        NombreProducto: "TABLET PROSPER G11 2.0GHZ 4GB 64GB 10.1Inch Wifi 4G-Lte BT USB-C 2-CAM AND13 BLACK",
        Precio: "58.00",
        Categoria: "TABLET"
    },
    {
        NombreProducto: "TABLET SAMSUNG GALAXY A9 SM-X110 OC 4GB OC 2.0GHZ 8.7INC. 64GB WIFI BT USD ANDROID GRAPHITE",
        Precio: "110.00",
        Categoria: "TABLET"
    },
    {
        NombreProducto: "TABLET SAMSUNG GALAXY A9 SM-X110 OC 4GB OC 2.0GHZ 8.7INC. 64GB WIFI BT USD ANDROID SILVER",
        Precio: "110.00",
        Categoria: "TABLET"
    },
    {
        NombreProducto: "TABLET SAMSUNG GALAXY A9 SM-X115 OC 2.0GHZ 8.7INC. 4GB 64GB 4-LTE BT USD ANDROID-13 GRAPHITE",
        Precio: "140.00",
        Categoria: "TABLET"
    },
    {
        NombreProducto: "TABLET SAMSUNG GALAXY S10 FE 8GB 128GB 10.9Inch 5G-LTE BT And-14 Incl. Case Gray",
        Precio: "498.00",
        Categoria: "TABLET"
    },
    {
        NombreProducto: "TABLET SAMSUNG GALAXY S10 FE Plus 8GB 128GB 13.1Inch 5G-LTE BT And-14 Incl-Case Gray",
        Precio: "595.00",
        Categoria: "TABLET"
    },
    {
        NombreProducto: "TABLET SAMSUNG GALAXY S10 FE Plus 8GB 128GB 13.1Inch Wifi BT And-14 Incl-Case Gray",
        Precio: "510.00",
        Categoria: "TABLET"
    },
    {
        NombreProducto: "TABLET SAMSUNG GALAXY TAB 5 ACTIVE RUGED OC 6G 128GB 8Inch 2CAM 5G ANDROI-14 Green",
        Precio: "482.00",
        Categoria: "TABLET"
    },
    {
        NombreProducto: "TABLET SAMSUNG GALAXY TAB A9Plus OC 4G 64GB 11INCH 2CAM WIFI ANDROID 13 GRAY",
        Precio: "168.00",
        Categoria: "TABLET"
    },
    {
        NombreProducto: "TABLET SAMSUNG GALAXY TAB A9Plus OC 4G 64GB 11INCH 2CAM WIFI ANDROID 13 SILVER",
        Precio: "168.00",
        Categoria: "TABLET"
    },
    {
        NombreProducto: "TABLET VORTEX ZTAN10 QC 4GB 32GB 10Inch WIFI Lte vUSB-C 2-CAM AND13 GREEN",
        Precio: "54.00",
        Categoria: "TABLET"
    },
    {
        NombreProducto: "COP. DELL PRECISION WORKSTATION 3280 i7-14700 16GB 512GB-M.2 NVIDIA-T400-4GB W11Pro CFF 3YB",
        Precio: "1536.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. APPLE MACBOOK PRO M3 8GB 512GB-SSD 14INCH MACOS SILVER",
        Precio: "1432.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. APPLE MACBOOK PRO M4 16GB 512GB 14INCH IOS SILVER",
        Precio: "1759.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. APPLE MACBOOK PRO M4 16GB 512GB 14INCH IOS SPACE BLACK",
        Precio: "1759.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. APPLE MACBOOK PRO M4 32GB 1TB 14.2INCH-IPS 3USB-C HDMI macOS SILVER",
        Precio: "3589.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. APPLE MackBook Pro 16 M3 36GB 1TB-SSD 16.2INCH HDMI 3Thu4",
        Precio: "3629.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. APPLE MackBook Pro M3 36GB 512GB-SSD 16.2INCH macOS Silver",
        Precio: "3280.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. ASUS Zephyrus GAMING Intel Core ULTra 9 185H 16GB 1TB-SSD",
        Precio: "1874.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DELL LATITUDE 3450 i5-1335U 16GB 512GB-M.2 14Inc-FHD W11Pro Gris 1YB",
        Precio: "692.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DELL LATITUDE 3450 i5-1335U 8GB 512GB-M.2 14Inc-FHD W11Pro Gris 1YB",
        Precio: "644.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DELL LATITUDE 3450 i7-1355U 16GB 512GB-M.2 14Inc-FHD W11Pro Gris 1YB",
        Precio: "911.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DELL LATITUDE 3550 i5-1335U 16GB 512GB-M.2 15.6Inc-FHD W11Pro Gris 1YB",
        Precio: "704.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DELL LATITUDE 3550 i5-1335U 8GB 512GB-M.2 15.6Inc-FHD W11Pro Gris 1YB",
        Precio: "657.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DELL LATITUDE 3550 i7-1355U 16GB 512GB-M.2 15.6Inc-FHD W11Pro Gris 1YB",
        Precio: "884.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DELL LATITUDE 5450 Ultra5-125U 16GB 512GB-M.2 14Inc-FHD W11Pro Gris 3YB",
        Precio: "939.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DELL LATITUDE 5450 Ultra7-155U 16GB 512GB-M.2 14Inc-FHD W11Pro Gris 3YB",
        Precio: "1078.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DELL LATITUDE 7430 I5-1235U 8GB 256GB-M.2 14INC-FHD HDMI 2XUSB-C W10PRO GRIS 3YPS",
        Precio: "892.40",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DELL LATITUDE 7450 Ultra7-155U 16GB 512GB-M.2 2n1 14Inc-FHD-Touch W11Pro 3YPS",
        Precio: "1610.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DELL LATITUDE 7450 Ultra7-165U-vPro 16GB 512GB-M.2 14Inc-FHD+ W11Pro Aluminum 3PS",
        Precio: "1399.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DELL PRECISION WORKSTATION 3591 Ultra9-185H-vProEnt 32GB 1TB-M.2 15.6Inc RTX2000-8GB W11Pro 3YB",
        Precio: "2446.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DYNABOOK SATELLITE PRO C50-K I7-1255U 16GB 512GB 15.6INCH 4USB NO-OS DARK-BLUE 3y",
        Precio: "538.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DYNABOOK TECRA A40-K I5-1235U 16GB 512GB-SSD 14INCH WIN11-PRO MYSTIC-BLUE 3Y",
        Precio: "850.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DYNABOOK TECRA A40-K I7-1255U 16GB 512GB 14Inch FHD HDMI 4USB W11-PRO Mystic Blue 3y",
        Precio: "819.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DYNABOOK TECRA A40-K I7-1360P 16GB 512GB-SSD 14Inch IPS-HD W11-PRO Mystic Blue 3y",
        Precio: "956.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. DYNABOOK TECRA A50-K I7-1355U 16GB 1TB-SSD 15.6Inch FHD HDMI 4USB W11-PRO Mystic Blue 3y",
        Precio: "944.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP 14-DK1512LA AMD ATHLON SILVER 3050U 8GB 256GB 14INC. MOU - AUDI-ESTUCHE W10H GRIS",
        Precio: "304.78",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP 14-EM0017la AMD Ryzen 5 7520U 8GB 512GB 14Inch HDMI USB-C 2USB-A WIN-11H-SL-BLUE",
        Precio: "468.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP 14-em0026la Ryzen 5 7520U 16GB 512GB 14Inch HDMI USB-C 2USB-A FreeDos Silver",
        Precio: "414.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP 15-eh3005la AMD Ryzen 7 7730U 16GB 512GB-M.2 15.6Inch HDMI DP USB-C USB-A FreeDos SILVER",
        Precio: "570.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP 15-fd0053la I5-1235U 16GB 512GB 15.6Inch HDMI USB-C 2USB-A FreeDos Silver",
        Precio: "481.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP 15-fd0059la I5-1235U 16GB 512GB 15.6Inch HDMI USB-C 2USB-A Win11-HS Silver",
        Precio: "608.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP 245 G9 AMD RYZEN 5 5625U 8GB 512GB 14INCH HDMI USB-C 2USB-A WIN-PRO64-BITS",
        Precio: "615.31",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP 250 G10 Intel I5-1334U 8GB 512GB 15.6INCH HDMI 2USB-A USB-C FreeDOS3.0 Gray",
        Precio: "414.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP 255 G10 AMD Ryzen 5 7530U 16GB 512GB 15.6INCH HDMI 2USB-A USB-C FreeDOS3.0 Gray",
        Precio: "396.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP 255 G10 AMD Ryzen 7 7730U 16GB 512GB 15.6INCH HDMI 2USB-A USB-C FreeDOS3.0 Gray",
        Precio: "456.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP EliteBook 660 G11 Intel Core Ultra 7 155U 16GB 1TB 16Inch HDMI DP 2USB-C 2USB W11-Pro Silver",
        Precio: "1082.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP ELITEBOOK 840 G10 I7-1355U 16GB-DDR5 1TB-SSD 14INC. HDMI 2TH-4 2USB-TYPEC W11-PRO SILVER",
        Precio: "1232.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP ELITEBOOK 840 G11 Ultra 7 155U 16GB 1TB 14INC. HDMI 2USB-C W11-Pro Silver",
        Precio: "1257.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP PROBOOK 440 G10 I7-1355U 16GB 512GB 14INC. HDMI 2USB-TYPEA 2USB-TYPEC W11-PRO SILVER",
        Precio: "854.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP ProBook 440 G11 Ultra 7 155U 16GB 1TB 14INCH HDMI 2USB-C USB-A W11-Pro Silver",
        Precio: "1093.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP PROBOOK 450 G10 I7-1355U 16GB 1TB 15.6INC. HDMI 3USB-TYPEA USB-TYPEC W11-PRO SILVER",
        Precio: "915.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP PROBOOK 450 G10 I7-1355U 16GB 512GB 15.6INC. HDMI 2USB-TYPEA 2USB-TYPEC W11-PRO SILVER",
        Precio: "859.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP ProBook 460 G11 Ultra 5 125U 16GB 512GB 16INCH HDMI DP 2USB-C W11-Pro Silver",
        Precio: "799.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP ProBook 460 G11 Ultra 7 155U 16GB 1TB 16INCH HDMI 2USB-C W11-Pro Silver",
        Precio: "983.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP Victus 15-fb2025la Ryzen 5 8645HS 16GB 512GB 15.6Inch RTX2050-4GB HDMI DP FreeDos Black",
        Precio: "692.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP Victus 15-fb2026la Ryzen 5 8645HS 8GB 512GB 15.6Inch RTX2050-4GB USB-C 2USB-A HDMI Win11 H",
        Precio: "732.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. HP ZBook Power G11 Ultra 9 L3-7400 64GB 1TB-M2 16inch-IPS VID-8GB 5USB W11-Pro Silver",
        Precio: "2548.10",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. QUASAD NB01 I7-1165 G7 16GB 1TB 15.6INCH TECL. ILUM. HDMI RED 5USB WIN11-PRO GRIS",
        Precio: "689.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. QUASAD NB01 I7-1165 G7 16GB 512GB 15.6INCH TECL. ILUM. HDMI RED 5USB GRIS FREE-DOS",
        Precio: "520.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOT. QUASAD NB01 I7-1165 G7 8GB 256GB 15.6INCH HDMI RED 3USB USB-C GRIS",
        Precio: "520.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOTEBOOK QUASAD CORE I7-1165U 16GB 500TB 14.1INCH WIN11-PRO NEGRO MODELO-2",
        Precio: "1006.00",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "NOTQUASAD CRIPTOM-PROMAX TOUCH I7-1165G7 16GB-4266MHZ 2TB-SSD 15.6I WINDOWS 11 PROFESIONAL",
        Precio: "1235.53",
        Categoria: "NOTEBOOK"
    },
    {
        NombreProducto: "BARE BONE QUASAD AIO A256TCV-6 23.8INCH CAM-9MP BLACK",
        Precio: "290.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "BARE BONE QUASAD AIO Q670 23.8INCH CAM-9MP BLACK",
        Precio: "269.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "BARE BONE QUASAD AIO Q670 23.8INCH CAM-9MP BLACK",
        Precio: "280.58",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COMP. HP AIO PROONE 440 G9 I7-13700 8GB 512GB 23.8INCH BT WIN11",
        Precio: "943.60",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. APPLE IMAC AIO M4 16GB 512GB-SSD 24INCH BT WIFI CAM. IOS SILVER",
        Precio: "2219.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. APPLE IMAC AIO M4 24GB 1TB-SSD 24INCH BT WIFI CAM. IOS BLUE",
        Precio: "2699.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. APPLE IMAC AIO M3 8GB 512GB-SSD 24Inch. 4.5K CAM. WIFI BT 2USB-C MACOS",
        Precio: "2082.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. APPLE IMAC AIO M4 16GB 256GB-SSD 24INCH BT WIFI CAM-12M 2Thunderbolt",
        Precio: "1552.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. APPLE IMAC AIO M4 16GB 256GB-SSD 24INCH BT WIFI CAM. IOS BLUE",
        Precio: "1552.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. APPLE IMAC AIO M4 16GB 256GB-SSD 24INCH BT WIFI CAM. IOS GREEN",
        Precio: "1552.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. DELL OPTIPLEX 7020 i5-14500-vPro 8GB 512GB-M.2 W11Pro SFF 3YB",
        Precio: "686.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. DELL OPTIPLEX 7020 i5-14500T-vPro 8GB 512GB-M.2 W11Pro MFF 3YB",
        Precio: "635.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. DELL OPTIPLEX 7020 i7-14700T-vPro 16GB 512GB-M.2 W11Pro MFF 3YB",
        Precio: "849.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. DELL OPTIPLEX 7020 PLUS i7-14700-vPro 16GB 512GB-M.2 W11Pro SFF 3PS",
        Precio: "1018.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. DELL OPTIPLEX AIO 7420 i5-14500T-vPro 8GB 512GB 23.8Inc W11Pro 3YB",
        Precio: "836.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. DELL OPTIPLEX AIO 7420 i7-14700-vPro 16GB 512GB 23.8Inc W11Pro 3YB",
        Precio: "1122.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. HP AIO 24-cb1025la INTEL I5-1235U 8GB 512GB-M.2 23.8Inch BT HDMI 2USB WIN11H Silver",
        Precio: "623.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. HP AIO 24-cb1028la i5-1235U 8GB 512GB-M.2 23.8Inch BT HDMI 2USB-A Free-Dos Black",
        Precio: "544.30",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. HP AIO 24-cb1029la i3-1215U 8GB 512GB-M.2 23.8Inch BT HDMI 2USB-A FreeDos Black",
        Precio: "427.20",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. HP AIO PROONE 440 G9 I5-13500 8GB 512GB 23.8INCH BT WIN11-PRO BLACK",
        Precio: "818.10",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. HP PRODESK 400 G9 I7-13700 16GB 1TB WIN11-PRO BLACK",
        Precio: "887.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. HP PRODESK 400 G9 I7-13700 16GB 512GB WIN11-PRO BLACK",
        Precio: "869.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. HP VICTUS TG02-1000LA I5-134000 8GB 512GB-SSD W11-HOME BLACK",
        Precio: "615.10",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "COP. QUASAD AIO CORE-I7-12700 16GB 1TB 23.8PULG CQ-1160IT WIFI CR W-CAM LINUX BLACK",
        Precio: "649.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "NOT. APPLE MACBOOK PRO M3 PRO 36GB 2TB-SSD 14INCH OS SPACE BLACK",
        Precio: "2254.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "NUC 14 Pro ASUS INTEL Core 3 100U SD-DDR5-96GB 2M.2 2.5Inch Wi-Fi LAN 2HDMI",
        Precio: "359.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "NUC ASUS 14 Essential INTEL N150 SD-DDR54800-16GB M.2 or SATA SSD WIFI HDMI",
        Precio: "171.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "NUC Pro ASUS INTEL Core Ultra 5 125H DDR5-96GB M.2 WIFI BT HDMI USB3.2 LAN",
        Precio: "482.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "POS SYSTEM SAT AIO INTEL J4125 4GB 128GB-SSD 15.6Inch TOUCH USB - LAN Black",
        Precio: "538.00",
        Categoria: "COMPUTADORES DESKTOP, AIO, MINIPC"
    },
    {
        NombreProducto: "PROYECTOR BENQ EW800ST 3300 LUMEN WXGA SHORT THROW SMART DLP WHITE",
        Precio: "1040.00",
        Categoria: "PROYECTORES"
    },
    {
        NombreProducto: "PROYECTOR BENQ LW500 DLP 2000LUM WXGA LED 3D HDMI USB-A RS232 IR REC. WHITE",
        Precio: "644.00",
        Categoria: "PROYECTORES"
    },
    {
        NombreProducto: "PROYECTOR EPSON BRIGHT LINK 1485I PLUS 1080P 3LCD 5000LUM.",
        Precio: "3326.00",
        Categoria: "PROYECTORES"
    },
    {
        NombreProducto: "PROYECTOR EPSON LASER PORTATIL SMART EPIQVISION EF12 FHD 1080 WF 150INCH 3LCD ANDROI BLACK",
        Precio: "1061.00",
        Categoria: "PROYECTORES"
    },
    {
        NombreProducto: "PROYECTOR EPSON POWER LITE L630U LASER FULL HD WUXGA 6.200 LUMENES WHITE",
        Precio: "3890.00",
        Categoria: "PROYECTORES"
    },
    {
        NombreProducto: "PROYECTOR EPSON POWER LITE L520W WXGA LONG-THROW BLANCO",
        Precio: "2184.00",
        Categoria: "PROYECTORES"
    },
    {
        NombreProducto: "PROYECTOR EPSON POWERLITE 118 3LCD XGA CON DUAL HDMI 3800LUM. WHITE",
        Precio: "653.10",
        Categoria: "PROYECTORES"
    },
    {
        NombreProducto: "PROYECTOR EPSON POWERLITE L570U LASER 3LCD 5200LUM. WUXGA BLANCO",
        Precio: "3266.00",
        Categoria: "PROYECTORES"
    },
    {
        NombreProducto: "PROYECTOR EPSON POWERLITE W49 3LCD WXGA 3800 LUMENES HDMI BLANCO",
        Precio: "771.00",
        Categoria: "PROYECTORES"
    },
    {
        NombreProducto: "PROYECTOR EPSON POWERLITE W52 PLUS WXGA. 4000 LUMENES. WIFI. 3LCD. HDMI. BLANCO",
        Precio: "904.00",
        Categoria: "PROYECTORES"
    },
    {
        NombreProducto: "PROYECTOR LG PF510Q CineBeam Smart webOS 22 100Inch LED,450Lumenes FHD 1920x1080 White",
        Precio: "538.00",
        Categoria: "PROYECTORES"
    },
    {
        NombreProducto: "Lector de Codigo de Barras SAT AI202 Plus 1D - 2D USB Negro",
        Precio: "45.20",
        Categoria: "ESCANER"
    },
    {
        NombreProducto: "Lector de Codigo de Barras SAT AI402W 350 Scaneos BlueTooh 1D - 2D y OCR USB",
        Precio: "87.80",
        Categoria: "ESCANER"
    },
    {
        NombreProducto: "Lector de Codigo de Barras SAT LI102N Plus 270mm-s 1D USB Negro",
        Precio: "25.70",
        Categoria: "ESCANER"
    },
    {
        NombreProducto: "Lector de Codigo de Barras SAT LI102NW Plus 270mm-s BlueTooh - USB 50mts 1D",
        Precio: "54.60",
        Categoria: "ESCANER"
    },
    {
        NombreProducto: "SCANNER EPSON DS-530 II 35 PPM-70 IPM. 1200 DPI. USB 3.0 ALIM. AUTO. 442.00",
        Precio: "442.00",
        Categoria: "ESCANER"
    },
    {
        NombreProducto: "SCANNER EPSON DS-730N 40PPM-80IPM. 600 DPI. USB. MOD. ROJO. OPC.. ADF 100PAG.",
        Precio: "612.00",
        Categoria: "ESCANER"
    },
    {
        NombreProducto: "SCANNER EPSON DS-800WN WIRELESS NETWORK COLOR DOCUMENT",
        Precio: "1050.00",
        Categoria: "ESCANER"
    },
    {
        NombreProducto: "SCANNER EPSON DS-870. 65 PPM-130 IPM. 600 DPI. USB. MOD. ROJO. OPC.. ADF 100 PAGINAS",
        Precio: "719.00",
        Categoria: "ESCANER"
    },
    {
        NombreProducto: "SCANNER EPSON DS-970. 85 PPM-170 IPM. 600 DPI. USB. MOD. ROJO. OPC.. ADF 100 PAGINAS",
        Precio: "1066.00",
        Categoria: "ESCANER"
    },
    {
        NombreProducto: "SCANNER EPSON WORKFORCE DS-410 26PPM 600DPI ADF 50PAG. USB2.0 406.00",
        Precio: "406.00",
        Categoria: "ESCANER"
    },
    {
        NombreProducto: "SCANNER EPSON WORKFORCE DS-C330 30PPM-60PPM 600 DPI. USB-C 2.0 BLACK",
        Precio: "338.00",
        Categoria: "ESCANER"
    },
    {
        NombreProducto: "SCANNER EPSON WORKFORCE ES-320W 30PPM-60PPM 600 DPI. USB2.0. WIFI BLACK",
        Precio: "362.00",
        Categoria: "ESCANER"
    },
    {
        NombreProducto: "SCANNER EPSON WORKFORCE ES-400 II 35 PPM-70 IPM. 600 DPI. USB. MOD. ROJO. OPC.. ADF 50 PAG.",
        Precio: "476.00",
        Categoria: "ESCANER"
    },
    {
        NombreProducto: "IMP. - SCANNER EPSON SURECOLOR T5470M",
        Precio: "5411.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON ECOTANK MULT. L8180 A3-PLUS PHOTO USB LAN DUPLEX",
        Precio: "797.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. LEXMARK LASER MULTIFUNCION COLOR CX431ADW DUPLEX 26PPM",
        Precio: "358.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. LEXMARK MULT. LASER COLOR CX725DHE",
        Precio: "2441.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. LEXMARK MULT. LASER MX-622ADHE MONOCROMO",
        Precio: "955.91",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMPRESORA EPSON MATRICIAL TM-U220D-806 USB GRAY (C31C515806)",
        Precio: "205.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON MATRICIAL FX-890II 680 CPS PARALELA - USB 2.0",
        Precio: "388.10",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON MATRICIAL LX-350 390 CPS USB PARALELA",
        Precio: "228.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON MULT. ECOTANK A3 L14150 SCAN-COPIA-FAX 4COLORES 4800X1200DPI",
        Precio: "586.40",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON MULT. ECOTANK L4260 4 COLORES 33 PPM NEGRO-15 PPM USB WIFI DUPLEX AUTOMATICO",
        Precio: "248.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON MULT. L5590 ALTO DESEMPENO PRECISION-CORE 4CL 33PPM-NG 20PPM-CL WIFI-ETHERNET",
        Precio: "337.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON MULTIFUNCIONAL ECOTANK L3250 4 COLORES 33 PPM NEGRO-15 PPM USB WIFI",
        Precio: "205.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON SD MATRICIAL TM-U950-252 PARALELA BLANCO PN C31C176252",
        Precio: "792.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON SURECOLOR T3170X SISTEMA TINTA CONTINUA 4 COLORES USB WIFI ETHERNET",
        Precio: "2073.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON SURECOLOR T5170M 36INCH WIRELESS PRINTER SCANNER COPIER",
        Precio: "4552.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON ECOTANK L1250 WIFI 33PPM NEGRO - 15PPM COLOR USB WIFI-DIRECT NEGRA",
        Precio: "148.40",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON ECOTANK L8050 PHOTOGRAFICA WIFI DIRECT A4 CD-DVD IDF-PVC USB BLACK",
        Precio: "378.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON ECOTANK M1120 MONOCROMATICA 15 PPM USB WIFI",
        Precio: "178.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON ECOTANK M1180 MONOCROMATICA 39PPM DUPLEX RED 10 BASE T USB WIFI DIRECT",
        Precio: "331.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON PORTABLE Mobilink TM-P20II 2Inch Black",
        Precio: "212.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. EPSON TERMICA TM-T88VII-052 ETHERNET + USB NEGRO (C31CJ57052)",
        Precio: "299.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. LEXMARK LASER MONO. MS632DWE DUPLEX 50PPM",
        Precio: "795.30",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. LEXMARK LASER MULTIFUNCION MX-431ADW DUPLEX 42PPM",
        Precio: "490.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. LEXMARK MFP LASER MONO. MX522ADHE DUPLEX 46PPM",
        Precio: "810.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. LEXMARK MFP LASER MONO. MX532ADWE DUPLEX 46PPM",
        Precio: "762.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. LEXMARK MS431ADN DUPLEX 42PPM",
        Precio: "364.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "IMP. LEXMARK MX721ADHE DUPLEX 62PPM",
        Precio: "1598.00",
        Categoria: "IMPRESORAS"
    },
    {
        NombreProducto: "SERVER DELL POWEREDGE R360 IntelXeonE-2468 16GB 480GB-RI-2.5Inc-SSD iDRAC9B PERC-H755 3YPS",
        Precio: "2904.00",
        Categoria: "SERVIDORES"
    },
    {
        NombreProducto: "SERVER DELL POWEREDGE R660XS IntelXeonSIlver4410Y 32GB 480GB-RI 2.5Inc-SSD PERC-H755 3PS",
        Precio: "4249.00",
        Categoria: "SERVIDORES"
    },
    {
        NombreProducto: "SERVER DELL POWEREDGE R760XS IntelXeonGold5416S 32GB 480GB-RI 3.5INC-SSD IDRAC9DC PERC-H755 3YPS",
        Precio: "4957.00",
        Categoria: "SERVIDORES"
    },
    {
        NombreProducto: "SERVER DELL POWEREDGE R760XS IntelXeonGold5416S 32GB 480GB-RI 3.5INC-SSD IDRAC9DC PERC-H755 3YPS4h",
        Precio: "4795.00",
        Categoria: "SERVIDORES"
    },
    {
        NombreProducto: "SERVER DELL POWEREDGE T160 IntelXeonE-2414 16GB 2TB SATA 3.5Inc-HDD iDRAC9B NO-PERC 1YB",
        Precio: "1276.00",
        Categoria: "SERVIDORES"
    },
    {
        NombreProducto: "SERVER DELL POWEREDGE T160 IntelXeonE-2436 16GB 4TB SATA 3.5Inc-HDD iDRAC9B PERC-H355 3YB",
        Precio: "1762.00",
        Categoria: "SERVIDORES"
    },
    {
        NombreProducto: "CAMARA ARGOM CONVOY 70 SMART WIFI OUTDOOR-INDOOR 2K QHD WHITE",
        Precio: "34.80",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA CANON POWERSHOT G7 X MARK II 20.11 NEGRA",
        Precio: "1764.00",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA DE SEGURIDAD TP-LINK TAPO-C420 INDOOR - OUTDOOR 2560X1440 PIXEL WHITE",
        Precio: "75.40",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA DE VIGILANCIA TP-Link Tapo C120 2K 4MP WI-FI FIJA WHITE",
        Precio: "26.90",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA LOGITECH RALLY BAR HUDDLE GRAFITO SALAS PEQUEÑAS 6 MICS 1 BOCINA ZOOM 4X 4K",
        Precio: "1632.60",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA LOGITECH RALLY BAR GRAFITO SALAS MEDIANAS A GRANDES-IA-15X-6 MICS-2 ALTAVOCES",
        Precio: "3333.15",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA LOGITECH RALLY BAR MINI BLANCO SALAS PEQUEÑAS-IA-4X-6 MICS-3 ALTAVOCES",
        Precio: "2584.90",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA LOGITECH RALLY BAR MINI GRAFITO SALAS PEQUENAS-IA-4X-6 MICS-3 ALTAVOCES",
        Precio: "2584.90",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA LOGITECH SCRIBE PIZARRAS EN SALAS VIDEOCONFERENCIA - IA",
        Precio: "993.15",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA LOGITECH SIGHT TABLETOP GRAPHITE",
        Precio: "1870.65",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA TP-Link Inteligente Wifi Vigilancia 360Grados 2K Night Vision todo color AI Detection IP65",
        Precio: "36.40",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA TP-Link Inteligente Wifi Vigilancia 360Grados 2K QHD Vision Noct. AI Detection",
        Precio: "42.40",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA TP-Link Tapo C225 WiFi 2K QHD StarLight IA Mov. Horizontal - Vertical Contro - Voz",
        Precio: "33.90",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA TP-LINK TAPO C400S2 SAMART WIRE-FREE SECURITY 2-CAMERA SYSTEM",
        Precio: "152.10",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA TP-LINK VIGI 4MP FULL-COLOR TURRET NETWORK SMART DETECTION",
        Precio: "31.50",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA TP-LINK VIGI 4MP OUTDOOR FULL-COLOR NETWORK WHITE",
        Precio: "30.90",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA TP-LINK VIGI 4MP OUTDOOR FULL-COLOR WI-FI BULLET NETWORK WHITE",
        Precio: "39.80",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA TP-LINK VIGI C230I MINI DE RED 3MP",
        Precio: "28.00",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA TP-LINK VIGI C240 4MP DOME Networkj Full Color 2.8mm Smart Detection IK10-IP67",
        Precio: "31.70",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA TP-LINK VIGI C340S IP67 TIPO BULLET COLORPRO PARA EXTERIORES DE 4MP",
        Precio: "74.10",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA TP-LINK VIGI C440 2.8mm 4MP FULL-COLOR TURRET NETWORK SMART DETECTION WHITE",
        Precio: "27.10",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA TP-LINK WI-FI TAPO-C320WS SEGURIDAD EXTERIORES IP66 4MP",
        Precio: "33.20",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA VIDEO CONFERENCIA LOGITECH Meetup 2 Negro",
        Precio: "1034.55",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA VIDEO CONFERENCING LOGITECH BRIO 300 FHD 1080 USB GRAFITO",
        Precio: "59.40",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA VIDEO CONFERENCING LOGITECH BRIO 300 FHD 1080 USB PINK",
        Precio: "58.70",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA VIDEO CONFERENCING LOGITECH BRIO 300 FHD 1080 USB WHITE",
        Precio: "58.70",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA VIDEO CONFERENCING LOGITECH BRIO 500 FHD 1080 CORREC. ILUM. ENCUADRE AUTO. GRAFITO",
        Precio: "103.90",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA VIDEO CONFERENCING LOGITECH BRIO 500 FHD 1080 CORREC. ILUM. ENCUADRE AUTO. WHITE",
        Precio: "103.90",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA VIDEO CONFERENCING LOGITECH BRIO 500 FHD 1080 CORREC. ILUM. ENCUADRE AUTO.PINK",
        Precio: "106.20",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA WEB LOGITECH STREAMCAM PLUS 1080P FULL HD TIPO C",
        Precio: "124.90",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CAMARA WI-FI DE SEGURIDAD PARA EXTERIORES IP66 3 MP TAPO C310",
        Precio: "26.40",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CONFERENCE-CAM LOGITECH CONNECT BLUETOOTH 1920X1080 AUDIO 360 1 A 6 PERSONAS VISION 90",
        Precio: "408.15",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CONFERENCE-CAM LOGITECH GROUP 1920X1080 ZOOM 10X BLUETOOTH-VISION 90 HASTA 14 PERSONAS",
        Precio: "952.35",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CONFERENCE-CAM LOGITECH GROUP BUNDLE FHD ZOOM 10X-BT-MICS EXPANSION HASTA 20 PERSONAS VISION",
        Precio: "1088.40",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CONFERENCE-CAM LOGITECH MEETUP 4K-ZOOM 5X-RIGHTSIGHT-BT-VISION 120-MICS EXPANSION-HASTA 8 PERSONAS",
        Precio: "782.30",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CONFERENCE-CAM LOGITECH MEETUP ULTRA HD-ZOOM 5X-RIGHTSIGHT-BT-VISION 120-HASTA 6 PERSONAS",
        Precio: "714.25",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CONFERENCE-CAM LOGITECH RALLY 4K PTZ BLACK",
        Precio: "984.90",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CONFERENCE-CAM LOGITECH RALLY PLUS 4K-ZOOM 15X-RIGHTSENSE-VISION 90 HASTA 24 PERSONAS",
        Precio: "2176.75",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "CONFERENCE-CAM LOGITECH RALLY PREMIUM 4K-ZOOM 15X-RIGHTSENSE-VISION 90 HASTA 14 PERSONAS",
        Precio: "1768.60",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "WEB CAM ARGOM FULL HD 1080P WITH MICROPHONE - LED CAM45",
        Precio: "21.30",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "WEB-CAM LOGITECH C930E NEGRO BUSINESS 1920X1080 ZOOM 4X-VISION 90GRADOS",
        Precio: "87.50",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "WEBCAM LOGITECH BRIO NEGRO ULTRA HD-30FPS-PRO STREAM-RECORD-5X-VISION 90",
        Precio: "151.00",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "WEBCAM LOGITECH C922 STREAM-RECORD 1920X1080-30FPS-CAMPO VISUAL 78-TRIPODE",
        Precio: "72.60",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "Webcam Logitech MX BRIO 705 8.5 Megapixel USB Type C Grafito",
        Precio: "151.00",
        Categoria: "CAMARAS"
    },
    {
        NombreProducto: "Timbre de Video TP-Link con Bateria 2K 5MP Deteccion IA Vision Noc. Color Campo Amplio Bat. Extraibl",
        Precio: "76.90",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO ASUS DUAL GEFORCE RTX-3050 OC 6GB GDDR6 96BITS DVI-D HDMI DP PCI EXP. 4.0",
        Precio: "194.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO ASUS DUAL GeForce RTX-5060 TI OC EDITION 8GB GDDR7 128BIT HDMI 3DP 3Vent PCIe 5.0",
        Precio: "459.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO ASUS PRIME GeForce RTX-5070 12GB OC EDITION GDDR7 192BIT HDMI 3DP 3Vent PCIe 5.0",
        Precio: "739.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO ASUS PRIME GeForce RTX-5070 TI OC Edition 16GB GDDR6X 256BIT HDMI 3DP 3Vent PCIe 5.0",
        Precio: "992.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO ASUS ROG Astral Geforcr RTX-5080 OC EDITION 16GB GDDR7 256BIT 2HDMI 3DP 3Vent PCIe 5.0",
        Precio: "1684.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO ASUS ROG ASTRAL RTX-5090 32GB GAMING GDDR7 512BIT 2HDMI 3DP 3Vent PCIe 5.0",
        Precio: "3079.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO ASUS ROG GeForce GAMING RTX-5070 12GB GDDR7 256BIT 2HDMI 3DP 3Vent PCIe 5.0",
        Precio: "838.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO ASUS TUF Gaming GeForce RTX-5070 OC 12GB GDDR7 192BIT 2HDMI 3DP 3Vent PCIe 5.0",
        Precio: "801.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO ASUS TUF RTX-5070 TI GAMING 16GB GDDR7 292BIT 2HDMI 3DP 3Vent PCIe 5.0",
        Precio: "1054.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO GIGABYTE Aorus Radeon RX-9070 XT Elite 16GB 256BIT GDDR6 2DP 2HDMI 3VEN. PCI EXP. 4.0",
        Precio: "821.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO GIGABYTE GeForce RTX-4070 WINDFORCE 2X OC V2 12GB 192BIT GDDR6 3DP HDMI PCI EXP. 4.0",
        Precio: "609.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO GIGABYTE GeForce RTX-5070 EAGLE OC 12GB 192BIT GDDR7 HDMI 3DP 3Vent. PCIe 5.0",
        Precio: "711.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO GIGABYTE GeForce RTX-5070 GAMING OC 12GB 192BIT GDDR7 HDMI 3DP 3Vent. PCIe 5.0",
        Precio: "736.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO GIGABYTE GeForce RTX-5070 Ti AERO OC16GB 256BIT GDDR7 HDMI 3DP 3Vent. PCIe 5.0",
        Precio: "1134.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO GIGABYTE GeForce RTX-5070 Ti EAGLE OC SFF 16GB 256BIT GDDR7 HDMI 3DP 3Vent. PCIe 5.0",
        Precio: "1071.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO GIGABYTE GeForce RTX-5070 Ti GAMING OC 16GB 256BIT GDDR7 HDMI 3DP 3Vent. PCIe 5.0",
        Precio: "1122.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO GIGABYTE GeForce RTX-5070 Ti WINDFORCE OC SFF 16GB 256BIT GDDR7 HDMI 3DP 3Vent.PCIe 5.0",
        Precio: "935.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO GIGABYTE GeForce RTX-5080 AERO OC SFF 16GB 256BIT GDDR7 HDMI 3DP 3Vent.PCIe 5.0",
        Precio: "1582.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "VIDEO GIGABYTE GeForce RTX-5080 GAMING OC 16GB 256BIT GDDR7 3DP HDMI 3VENT. PCIe 5.0",
        Precio: "1564.00",
        Categoria: "TARJETA DE VIDEO"
    },
    {
        NombreProducto: "DECO TP-LINK DECO X50 OUTDOOR WI-FI 6 MESH AI AX3000 IP65 POE 1-PACK WHITE",
        Precio: "65.70",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "DECO TP-Link Wifi Mesh Inteligente Doble Banda AC-1900 2 PACK",
        Precio: "74.30",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "DECO TP-LINK X10 WIFI 6 MESH WIFI AX1500 FOR HOME 2 PACK 1500Mbs Blanco",
        Precio: "69.00",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "DECO TP-LINK X10 WIFI 6 MESH WIFI AX1500 FOR HOME 3 PACK 1500Mbs Blanco",
        Precio: "103.50",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "DECO TP-LINK X20 WIFI 6 MESH WIFI AX1800 FOR HOME 2 PACK 574MBPS-2.4GHZ BLANCO",
        Precio: "103.50",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "DECO X50 SISTEMA WI-FI 6 MESH AI AX3000 BLANCO 1 PACK",
        Precio: "49.50",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "DECO X50 SISTEMA WI-FI 6 MESH AI AX3000 BLANCO 2 PACK",
        Precio: "92.70",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "EXTENSOR DE COBERTURA MERCUSYS BY TP-LINK WI-FI 300MBPS",
        Precio: "11.40",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "EXTENSOR DE COBERTURA WI-FI AX1800 RE600X",
        Precio: "62.30",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "PUNTO DE ACCESO INALAMBRICO FAST BANDA DUAL AC1750 CON MONTAJE DE TECHO EAP265 HD",
        Precio: "85.80",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "PUNTO DE ACCESO INALAMBRICO MU-MIMO AC1200 DE EXTERIOR-INTERIOR EAP225-OUTDOOR",
        Precio: "60.20",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "PUNTO DE ACCESO INALAMBRICO MU-MIMO AC1350 DE MONTAJE EN TECHO EAP225",
        Precio: "59.60",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ROOMMATE LOGITECH AUTONOMO COLLABOS PARA SOLUCIONES DE VIDEO CONFERENCIA",
        Precio: "1070.65",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ROUTER MERCUSYS AC1300 DOBLE BANDA HIGH SPEED WIFI 4ANTENAS NEGRO",
        Precio: "21.70",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ROUTER MERCUSYS AC1900 600MBPS WIRELESS DUAL BAND GIGABIT MR50G NEGRO",
        Precio: "26.20",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ROUTER MERCUSYS MR-62X AX1500 1.5Mps Dual-Band WIFI 6 Black",
        Precio: "22.20",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ROUTER MERCUSYS MR-80X AX3000 DUAL BAND WIFI 4 Puertos RJ45 1000Mb-s Black",
        Precio: "31.70",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ROUTER MERCUSYS MW302R MULTI-MODE WIRELESS N 300MBPS 2ANT. WHITE",
        Precio: "9.20",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ROUTER MU-MIMO AC1200 DOBLE BANDA 4 ANTENAS C64",
        Precio: "25.40",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ROUTER TP-LINK ARCHER C58HP WIRLESS DUAL BANDA HIGH CAPACITY AC1350",
        Precio: "63.20",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ROUTER TP-LINK ER-605 VPN 5 PUERTO GIGABIT OMADA",
        Precio: "44.10",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ROUTER TP-LINK VPN GIGABIT OMADA POE 3 EN 1 2P SFP 1P GIGABIT WAN 1GIGABIT WAN-LAN",
        Precio: "157.70",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ROUTER VPN DE BANDA ANCHA GIGABIT SAFESTREAM TL-ER7206",
        Precio: "110.00",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "SENSOR SMART DE TEMPERATURA Y HUMEDAD TP-LINK TAPO T315 2.7INCH PANT. WHITE",
        Precio: "23.90",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "SOPORTE LOGITECH PARA MICROFONO COLGANTE RALLY",
        Precio: "100.45",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "TAP SCHEDULER LOGITECH GRAFITO 10.1 INC PROGRAMACION SALAS DE REUNION",
        Precio: "716.25",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "USB PROGRAMER MODEL COPY BIOS",
        Precio: "101.00",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ACCESS POINT TP-Link Omada Wireless Bridge 5Ghz 867 Mbps Longe Range Indorr-Outdoor White",
        Precio: "131.90",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ACCESS POINT TP-LINK AX3600 WIRELESS DUAL BAND MULTI-GIGABIT CEILING MOUNT",
        Precio: "184.30",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ACCESS POINT TP-LINK EAP-625-OUTDOOR HD AX1800 WI.FI 6 IP67 PoE White",
        Precio: "138.40",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ACCESS POINT TP-LINK WIFI6 AX3000 3GBPS INTERIOR-EXTERIOR WHITE",
        Precio: "131.60",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ADAPTADOR INALAMBRICO PCI EXPRESS N 150MBPS TL-WN781ND",
        Precio: "6.80",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ADAPTADOR INALAMBRICO PCI EXPRESS N 300MBPS TL-WN881ND",
        Precio: "9.40",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ADAPTADOR INALAMBRICO USB BANDA DUAL AC600 ARCHER T2U",
        Precio: "9.20",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ADAPTADOR INALAMBRICO USB BANDA DUAL AC1300 ARCHER T4U",
        Precio: "16.70",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ADAPTADOR INALAMBRICO USB NANO N 150MBPS TL-WN725N",
        Precio: "4.60",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ADAPTADOR LOGITECH RALLY MIC POD HUB FOR RALLY VIDEO-CONFERENCING SYSTEMS",
        Precio: "193.60",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ADAPTADOR LOGITECH SWITCH PARA SALAS DE REUNION USB USB-C",
        Precio: "908.20",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ADAPTADOR NANO USB BLUETOOTH 5.0 UB500",
        Precio: "5.10",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ADAPTADOR TP-LINK T2U PLUS AC600 HIGH GAIN DUAL BAND WIRELESS USB",
        Precio: "10.90",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ADAPTADOR TP-Link UE300 USB 3.0 TO GIGABIT Ethenet Network PnP Blanco",
        Precio: "9.70",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ADAPTADOR USB-C 3.0 SUPER RAPIDO A ADAPTADOR USB-A UC400",
        Precio: "3.70",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "ANTENA QUASAD WIFI FOR AIO A246",
        Precio: "9.00",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "CARGADOR LOGITECH POWER UP BLANCO",
        Precio: "22.80",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "CONTROLADOR TACTIL LOGITECH TAP IP GRAFITO 10.1 INC",
        Precio: "708.85",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "CONTROLADOR TPLINK OMADA CLOUD POE",
        Precio: "78.10",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "DECO AC1200 WHOLE HOME MESH 2 PACK DECO M4 (2-PACK)",
        Precio: "59.90",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "DECO AC1200 WHOLE HOME MESH 3 PACK DECO M4 (3-PACK)",
        Precio: "79.90",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "DECO AC1300 WHOLE HOME MESH 2 PACK DECO M5 (2-PACK)",
        Precio: "95.00",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "DECO AC1300 WHOLE HOME MESH 3 PACK DECO M5 (3-PACK)",
        Precio: "142.50",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "DECO AX1800 WHOLE HOME MESH 2 ANTENAS INTERNAS 2 PUERTOS GIGABIT DECO X20 (3 PACK)",
        Precio: "151.80",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "DECO TP-LINK AX 3000 X50 2Pack Whole Home Mesh Wifi-6 IP65 PoE-DC Ceiling-Wall-Tabletop Mount",
        Precio: "115.30",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    },
    {
        NombreProducto: "DECO TP-LINK DECO S7 WI-FI MESH INTELIGENTE DOBLE BANDA AC1900",
        Precio: "110.40",
        Categoria: "ROUTER, ACCESS POINT, SWITCH, NVR"
    }
];