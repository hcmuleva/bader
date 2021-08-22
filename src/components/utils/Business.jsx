const businessName =[{
    "label":"SHOP", "value":"SHOP"},{
    "label":"SHOWROOM", "value":"SHOWROOM",
    "label":"AGRICULTURE", "value":"AGRICULTURE"

}]
const businessType={
    SHOP:["KIRANA","JEWELLERY","HARDWARE","MEDICAL","FURNITURE","OTHER"],
    SHOWROOM:["VEHICAL","HOMEDECORATION","ELECTRONICS","MACHINARY","CLOTH","OTHER"],
    AGRICULTURE:["HORTICULTURE","CASHCROP","AQAPHONICS","HYDROPHONICS","GARDEN","OTHER"],
}

 function getBusinessType(type){
      return businessType[type]
}
export {businessName, getBusinessType}