 var arr=[{
            "sequence": "3",
            "logistics_id": 463,
            "logistics_name": "圆通快递",
            "logistics_remark": "联宝路",
            "agree_flag": "协议物流",
            "is_cod": false
        }, {
            "sequence": "5",
            "logistics_id": 465,
            "logistics_name": "邮政EMS",
            "logistics_remark": "",
            "agree_flag": "协议物流",
            "is_cod": false
        }, {
            "sequence": "11",
            "logistics_id": 467,
            "logistics_name": "顺丰快递",
            "logistics_remark": "",
            "agree_flag": "协议物流",
            "is_cod": false
        }, {
            "sequence": "9",
            "logistics_id": 470,
            "logistics_name": "申通快递",
            "logistics_remark": "",
            "agree_flag": "协议物流",
            "is_cod": false
        }, {
            "sequence": "15",
            "logistics_id": 1327,
            "logistics_name": "韵达快递",
            "logistics_remark": "",
            "agree_flag": "协议物流",
            "is_cod": false
        }, {
            "sequence": "4",
            "logistics_id": 1499,
            "logistics_name": "中通速递",
            "logistics_remark": "",
            "agree_flag": "协议物流",
            "is_cod": false
        }, {
            "sequence": "7",
            "logistics_id": 1747,
            "logistics_name": "优速快递",
            "logistics_remark": "",
            "agree_flag": "协议物流",
            "is_cod": false
        }, {
            "sequence": "1",
            "logistics_id": 2016,
            "logistics_name": "全峰快递",
            "logistics_remark": "上海市闵行区华友路",
            "agree_flag": "协议物流",
            "is_cod": false
        }, {
            "sequence": "0",
            "logistics_id": 2087,
            "logistics_name": "京东快递",
            "logistics_remark": "",
            "agree_flag": "协议物流",
            "is_cod": true
        }, {
            "sequence": "17",
            "logistics_id": 2094,
            "logistics_name": "快捷速递",
            "logistics_remark": "",
            "agree_flag": "协议物流",
            "is_cod": false
        }, {
            "sequence": "18",
            "logistics_id": 2105,
            "logistics_name": "速尔快递",
            "logistics_remark": "",
            "agree_flag": "协议物流",
            "is_cod": false
        }, {
            "sequence": "2",
            "logistics_id": 2130,
            "logistics_name": "德邦物流",
            "logistics_remark": "华友路德邦",
            "agree_flag": "协议物流",
            "is_cod": false
        }, {
            "sequence": "6",
            "logistics_id": 2170,
            "logistics_name": "邮政快递包裹",
            "logistics_remark": "",
            "agree_flag": "协议物流",
            "is_cod": false
        }, {
            "sequence": "12",
            "logistics_id": 2460,
            "logistics_name": "佳吉快运",
            "logistics_remark": "",
            "agree_flag": "协议物流",
            "is_cod": false
        }, {
            "sequence": "16",
            "logistics_id": 2465,
            "logistics_name": "国通快递",
            "logistics_remark": "",
            "agree_flag": "协议物流",
            "is_cod": false
        }, {
            "sequence": "14",
            "logistics_id": 4832,
            "logistics_name": "安能物流",
            "logistics_remark": "",
            "agree_flag": "协议物流",
            "is_cod": false
        }, {
            "sequence": "13",
            "logistics_id": 5419,
            "logistics_name": "中铁物流",
            "logistics_remark": "",
            "agree_flag": "协议物流",
            "is_cod": false
        }]
 var arrNew=arr.map(function (e) {
     var o={};
     o.id=e.logistics_id;
     o.name=e.logistics_name;
     return o;
 })
 console.log(JSON.stringify(arrNew));

 "skuName": 1037,
     "skuName": "商品名称",
     "itemTotal": 1038,
         "itemTotal": "商品数量",
     "skuId": 1039,
         "skuId": "SKUID",
     "jdPrice": 1040,
         "jdPrice": "商品价格",

     "giftPoint": 1041,
         "giftPoint": "优惠金额",

     "id": 1042,
         "name": "金额小计",
         "formula": "([F7IOIP4]-[FABB2TL])*[FPEAJKC]"

     "id": 1052,
         "templet": 91,
         "options": ["上海仓", "金山仓", "供应商仓", "京东仓"],
         "name": "发货仓",

     "id": 1056,
         "name": "平台",

     "productNo": 1057,
         "productNo": "产品型号",

     "id": 1058,
         "name": "发货数量",
