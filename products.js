const PRODUCTS = [
  {
    "id": "1001",
    "name": "Velvet Matte Lipstick Rose",
    "category": "Lips",
    "price": 1390,
    "oldPrice": 1590,
    "rating": 4.4,
    "image": "assets/images/product-1001.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1002",
    "name": "Glow Matte Lipstick Nude",
    "category": "Lips",
    "price": 1420,
    "oldPrice": 1570,
    "rating": 4.5,
    "image": "assets/images/product-1002.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1003",
    "name": "Silk Matte Lipstick Berry",
    "category": "Lips",
    "price": 1460,
    "oldPrice": 1660,
    "rating": 4.6,
    "image": "assets/images/product-1003.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1004",
    "name": "Luxe Matte Lipstick Peach",
    "category": "Lips",
    "price": 1500,
    "oldPrice": 1750,
    "rating": 4.7,
    "image": "assets/images/product-1004.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1005",
    "name": "Radiant Matte Lipstick Cocoa",
    "category": "Lips",
    "price": 1540,
    "oldPrice": 1690,
    "rating": 4.8,
    "image": "assets/images/product-1005.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1006",
    "name": "Pure Matte Lipstick Coral",
    "category": "Lips",
    "price": 1570,
    "oldPrice": 1720,
    "rating": 4.9,
    "image": "assets/images/product-1006.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1007",
    "name": "Crystal Matte Lipstick Mocha",
    "category": "Lips",
    "price": 1610,
    "oldPrice": 1760,
    "rating": 4.3,
    "image": "assets/images/product-1007.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1008",
    "name": "Pro Matte Lipstick Plum",
    "category": "Lips",
    "price": 1650,
    "oldPrice": 1850,
    "rating": 4.4,
    "image": "assets/images/product-1008.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1009",
    "name": "Bloom Matte Lipstick Pink",
    "category": "Lips",
    "price": 1680,
    "oldPrice": 1830,
    "rating": 4.5,
    "image": "assets/images/product-1009.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1010",
    "name": "Nude Matte Lipstick Honey",
    "category": "Lips",
    "price": 1720,
    "oldPrice": 1970,
    "rating": 4.6,
    "image": "assets/images/product-1010.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1011",
    "name": "Velvet Matte Lipstick Rose",
    "category": "Lips",
    "price": 1760,
    "oldPrice": 2010,
    "rating": 4.7,
    "image": "assets/images/product-1011.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1012",
    "name": "Glow Matte Lipstick Nude",
    "category": "Lips",
    "price": 1790,
    "oldPrice": 1890,
    "rating": 4.8,
    "image": "assets/images/product-1012.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1013",
    "name": "Silk Matte Lipstick Berry",
    "category": "Lips",
    "price": 1830,
    "oldPrice": 2030,
    "rating": 4.9,
    "image": "assets/images/product-1013.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1014",
    "name": "Luxe Matte Lipstick Peach",
    "category": "Lips",
    "price": 1870,
    "oldPrice": 2120,
    "rating": 4.3,
    "image": "assets/images/product-1014.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1015",
    "name": "Radiant Matte Lipstick Cocoa",
    "category": "Lips",
    "price": 1900,
    "oldPrice": 2150,
    "rating": 4.4,
    "image": "assets/images/product-1015.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1016",
    "name": "Pure Matte Lipstick Coral",
    "category": "Lips",
    "price": 1940,
    "oldPrice": 2040,
    "rating": 4.5,
    "image": "assets/images/product-1016.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1017",
    "name": "Crystal Matte Lipstick Mocha",
    "category": "Lips",
    "price": 1980,
    "oldPrice": 2180,
    "rating": 4.6,
    "image": "assets/images/product-1017.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1018",
    "name": "Pro Matte Lipstick Plum",
    "category": "Lips",
    "price": 2020,
    "oldPrice": 2270,
    "rating": 4.7,
    "image": "assets/images/product-1018.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1019",
    "name": "Bloom Matte Lipstick Pink",
    "category": "Lips",
    "price": 2050,
    "oldPrice": 2250,
    "rating": 4.8,
    "image": "assets/images/product-1019.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1020",
    "name": "Nude Matte Lipstick Honey",
    "category": "Lips",
    "price": 2090,
    "oldPrice": 2240,
    "rating": 4.9,
    "image": "assets/images/product-1020.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1021",
    "name": "Velvet Matte Lipstick Rose",
    "category": "Lips",
    "price": 2130,
    "oldPrice": 2230,
    "rating": 4.3,
    "image": "assets/images/product-1021.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1022",
    "name": "Glow Matte Lipstick Nude",
    "category": "Lips",
    "price": 360,
    "oldPrice": 510,
    "rating": 4.4,
    "image": "assets/images/product-1022.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1023",
    "name": "Silk Matte Lipstick Berry",
    "category": "Lips",
    "price": 400,
    "oldPrice": 650,
    "rating": 4.5,
    "image": "assets/images/product-1023.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1024",
    "name": "Luxe Matte Lipstick Peach",
    "category": "Lips",
    "price": 440,
    "oldPrice": 590,
    "rating": 4.6,
    "image": "assets/images/product-1024.svg",
    "description": "Premium matte lipstick designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1025",
    "name": "Velvet Lip Gloss Rose",
    "category": "Lips",
    "price": 480,
    "oldPrice": 580,
    "rating": 4.4,
    "image": "assets/images/product-1025.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1026",
    "name": "Glow Lip Gloss Nude",
    "category": "Lips",
    "price": 510,
    "oldPrice": 710,
    "rating": 4.5,
    "image": "assets/images/product-1026.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1027",
    "name": "Silk Lip Gloss Berry",
    "category": "Lips",
    "price": 550,
    "oldPrice": 700,
    "rating": 4.6,
    "image": "assets/images/product-1027.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1028",
    "name": "Luxe Lip Gloss Peach",
    "category": "Lips",
    "price": 590,
    "oldPrice": 790,
    "rating": 4.7,
    "image": "assets/images/product-1028.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1029",
    "name": "Radiant Lip Gloss Cocoa",
    "category": "Lips",
    "price": 620,
    "oldPrice": 870,
    "rating": 4.8,
    "image": "assets/images/product-1029.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1030",
    "name": "Pure Lip Gloss Coral",
    "category": "Lips",
    "price": 660,
    "oldPrice": 860,
    "rating": 4.9,
    "image": "assets/images/product-1030.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1031",
    "name": "Crystal Lip Gloss Mocha",
    "category": "Lips",
    "price": 700,
    "oldPrice": 900,
    "rating": 4.3,
    "image": "assets/images/product-1031.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1032",
    "name": "Pro Lip Gloss Plum",
    "category": "Lips",
    "price": 730,
    "oldPrice": 980,
    "rating": 4.4,
    "image": "assets/images/product-1032.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1033",
    "name": "Bloom Lip Gloss Pink",
    "category": "Lips",
    "price": 770,
    "oldPrice": 920,
    "rating": 4.5,
    "image": "assets/images/product-1033.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1034",
    "name": "Nude Lip Gloss Honey",
    "category": "Lips",
    "price": 810,
    "oldPrice": 960,
    "rating": 4.6,
    "image": "assets/images/product-1034.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1035",
    "name": "Velvet Lip Gloss Rose",
    "category": "Lips",
    "price": 840,
    "oldPrice": 990,
    "rating": 4.7,
    "image": "assets/images/product-1035.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1036",
    "name": "Glow Lip Gloss Nude",
    "category": "Lips",
    "price": 880,
    "oldPrice": 1030,
    "rating": 4.8,
    "image": "assets/images/product-1036.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1037",
    "name": "Silk Lip Gloss Berry",
    "category": "Lips",
    "price": 920,
    "oldPrice": 1070,
    "rating": 4.9,
    "image": "assets/images/product-1037.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1038",
    "name": "Luxe Lip Gloss Peach",
    "category": "Lips",
    "price": 960,
    "oldPrice": 1160,
    "rating": 4.3,
    "image": "assets/images/product-1038.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1039",
    "name": "Radiant Lip Gloss Cocoa",
    "category": "Lips",
    "price": 990,
    "oldPrice": 1240,
    "rating": 4.4,
    "image": "assets/images/product-1039.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1040",
    "name": "Pure Lip Gloss Coral",
    "category": "Lips",
    "price": 1030,
    "oldPrice": 1130,
    "rating": 4.5,
    "image": "assets/images/product-1040.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1041",
    "name": "Crystal Lip Gloss Mocha",
    "category": "Lips",
    "price": 1070,
    "oldPrice": 1270,
    "rating": 4.6,
    "image": "assets/images/product-1041.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1042",
    "name": "Pro Lip Gloss Plum",
    "category": "Lips",
    "price": 1100,
    "oldPrice": 1350,
    "rating": 4.7,
    "image": "assets/images/product-1042.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1043",
    "name": "Bloom Lip Gloss Pink",
    "category": "Lips",
    "price": 1140,
    "oldPrice": 1290,
    "rating": 4.8,
    "image": "assets/images/product-1043.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1044",
    "name": "Nude Lip Gloss Honey",
    "category": "Lips",
    "price": 1180,
    "oldPrice": 1380,
    "rating": 4.9,
    "image": "assets/images/product-1044.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1045",
    "name": "Velvet Lip Gloss Rose",
    "category": "Lips",
    "price": 1220,
    "oldPrice": 1420,
    "rating": 4.3,
    "image": "assets/images/product-1045.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1046",
    "name": "Glow Lip Gloss Nude",
    "category": "Lips",
    "price": 1250,
    "oldPrice": 1500,
    "rating": 4.4,
    "image": "assets/images/product-1046.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1047",
    "name": "Silk Lip Gloss Berry",
    "category": "Lips",
    "price": 1290,
    "oldPrice": 1440,
    "rating": 4.5,
    "image": "assets/images/product-1047.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1048",
    "name": "Luxe Lip Gloss Peach",
    "category": "Lips",
    "price": 1330,
    "oldPrice": 1530,
    "rating": 4.6,
    "image": "assets/images/product-1048.svg",
    "description": "Premium lip gloss designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1049",
    "name": "Velvet Lip Liner Rose",
    "category": "Lips",
    "price": 1360,
    "oldPrice": 1560,
    "rating": 4.4,
    "image": "assets/images/product-1049.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1050",
    "name": "Glow Lip Liner Nude",
    "category": "Lips",
    "price": 1400,
    "oldPrice": 1550,
    "rating": 4.5,
    "image": "assets/images/product-1050.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1051",
    "name": "Silk Lip Liner Berry",
    "category": "Lips",
    "price": 1440,
    "oldPrice": 1540,
    "rating": 4.6,
    "image": "assets/images/product-1051.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1052",
    "name": "Luxe Lip Liner Peach",
    "category": "Lips",
    "price": 1470,
    "oldPrice": 1670,
    "rating": 4.7,
    "image": "assets/images/product-1052.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1053",
    "name": "Radiant Lip Liner Cocoa",
    "category": "Lips",
    "price": 1510,
    "oldPrice": 1660,
    "rating": 4.8,
    "image": "assets/images/product-1053.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1054",
    "name": "Pure Lip Liner Coral",
    "category": "Lips",
    "price": 1550,
    "oldPrice": 1750,
    "rating": 4.9,
    "image": "assets/images/product-1054.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1055",
    "name": "Crystal Lip Liner Mocha",
    "category": "Lips",
    "price": 1580,
    "oldPrice": 1730,
    "rating": 4.3,
    "image": "assets/images/product-1055.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1056",
    "name": "Pro Lip Liner Plum",
    "category": "Lips",
    "price": 1620,
    "oldPrice": 1770,
    "rating": 4.4,
    "image": "assets/images/product-1056.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1057",
    "name": "Bloom Lip Liner Pink",
    "category": "Lips",
    "price": 1660,
    "oldPrice": 1810,
    "rating": 4.5,
    "image": "assets/images/product-1057.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1058",
    "name": "Nude Lip Liner Honey",
    "category": "Lips",
    "price": 1700,
    "oldPrice": 1900,
    "rating": 4.6,
    "image": "assets/images/product-1058.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1059",
    "name": "Velvet Lip Liner Rose",
    "category": "Lips",
    "price": 1730,
    "oldPrice": 1930,
    "rating": 4.7,
    "image": "assets/images/product-1059.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1060",
    "name": "Glow Lip Liner Nude",
    "category": "Lips",
    "price": 1770,
    "oldPrice": 2020,
    "rating": 4.8,
    "image": "assets/images/product-1060.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1061",
    "name": "Silk Lip Liner Berry",
    "category": "Lips",
    "price": 1810,
    "oldPrice": 2010,
    "rating": 4.9,
    "image": "assets/images/product-1061.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1062",
    "name": "Luxe Lip Liner Peach",
    "category": "Lips",
    "price": 1840,
    "oldPrice": 1940,
    "rating": 4.3,
    "image": "assets/images/product-1062.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1063",
    "name": "Radiant Lip Liner Cocoa",
    "category": "Lips",
    "price": 1880,
    "oldPrice": 1980,
    "rating": 4.4,
    "image": "assets/images/product-1063.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1064",
    "name": "Pure Lip Liner Coral",
    "category": "Lips",
    "price": 1920,
    "oldPrice": 2170,
    "rating": 4.5,
    "image": "assets/images/product-1064.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1065",
    "name": "Crystal Lip Liner Mocha",
    "category": "Lips",
    "price": 1960,
    "oldPrice": 2110,
    "rating": 4.6,
    "image": "assets/images/product-1065.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1066",
    "name": "Pro Lip Liner Plum",
    "category": "Lips",
    "price": 1990,
    "oldPrice": 2240,
    "rating": 4.7,
    "image": "assets/images/product-1066.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1067",
    "name": "Bloom Lip Liner Pink",
    "category": "Lips",
    "price": 2030,
    "oldPrice": 2130,
    "rating": 4.8,
    "image": "assets/images/product-1067.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1068",
    "name": "Nude Lip Liner Honey",
    "category": "Lips",
    "price": 2070,
    "oldPrice": 2270,
    "rating": 4.9,
    "image": "assets/images/product-1068.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1069",
    "name": "Velvet Lip Liner Rose",
    "category": "Lips",
    "price": 2100,
    "oldPrice": 2350,
    "rating": 4.3,
    "image": "assets/images/product-1069.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1070",
    "name": "Glow Lip Liner Nude",
    "category": "Lips",
    "price": 2140,
    "oldPrice": 2390,
    "rating": 4.4,
    "image": "assets/images/product-1070.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1071",
    "name": "Silk Lip Liner Berry",
    "category": "Lips",
    "price": 380,
    "oldPrice": 480,
    "rating": 4.5,
    "image": "assets/images/product-1071.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1072",
    "name": "Luxe Lip Liner Peach",
    "category": "Lips",
    "price": 410,
    "oldPrice": 510,
    "rating": 4.6,
    "image": "assets/images/product-1072.svg",
    "description": "Premium lip liner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1073",
    "name": "Velvet Lip Tint Rose",
    "category": "Lips",
    "price": 450,
    "oldPrice": 550,
    "rating": 4.4,
    "image": "assets/images/product-1073.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1074",
    "name": "Glow Lip Tint Nude",
    "category": "Lips",
    "price": 490,
    "oldPrice": 640,
    "rating": 4.5,
    "image": "assets/images/product-1074.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1075",
    "name": "Silk Lip Tint Berry",
    "category": "Lips",
    "price": 520,
    "oldPrice": 770,
    "rating": 4.6,
    "image": "assets/images/product-1075.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1076",
    "name": "Luxe Lip Tint Peach",
    "category": "Lips",
    "price": 560,
    "oldPrice": 710,
    "rating": 4.7,
    "image": "assets/images/product-1076.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1077",
    "name": "Radiant Lip Tint Cocoa",
    "category": "Lips",
    "price": 600,
    "oldPrice": 850,
    "rating": 4.8,
    "image": "assets/images/product-1077.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1078",
    "name": "Pure Lip Tint Coral",
    "category": "Lips",
    "price": 640,
    "oldPrice": 740,
    "rating": 4.9,
    "image": "assets/images/product-1078.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1079",
    "name": "Crystal Lip Tint Mocha",
    "category": "Lips",
    "price": 670,
    "oldPrice": 920,
    "rating": 4.3,
    "image": "assets/images/product-1079.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1080",
    "name": "Pro Lip Tint Plum",
    "category": "Lips",
    "price": 710,
    "oldPrice": 860,
    "rating": 4.4,
    "image": "assets/images/product-1080.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1081",
    "name": "Bloom Lip Tint Pink",
    "category": "Lips",
    "price": 750,
    "oldPrice": 950,
    "rating": 4.5,
    "image": "assets/images/product-1081.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1082",
    "name": "Nude Lip Tint Honey",
    "category": "Lips",
    "price": 780,
    "oldPrice": 980,
    "rating": 4.6,
    "image": "assets/images/product-1082.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1083",
    "name": "Velvet Lip Tint Rose",
    "category": "Lips",
    "price": 820,
    "oldPrice": 920,
    "rating": 4.7,
    "image": "assets/images/product-1083.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1084",
    "name": "Glow Lip Tint Nude",
    "category": "Lips",
    "price": 860,
    "oldPrice": 1010,
    "rating": 4.8,
    "image": "assets/images/product-1084.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1085",
    "name": "Silk Lip Tint Berry",
    "category": "Lips",
    "price": 900,
    "oldPrice": 1150,
    "rating": 4.9,
    "image": "assets/images/product-1085.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1086",
    "name": "Luxe Lip Tint Peach",
    "category": "Lips",
    "price": 930,
    "oldPrice": 1180,
    "rating": 4.3,
    "image": "assets/images/product-1086.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1087",
    "name": "Radiant Lip Tint Cocoa",
    "category": "Lips",
    "price": 970,
    "oldPrice": 1170,
    "rating": 4.4,
    "image": "assets/images/product-1087.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1088",
    "name": "Pure Lip Tint Coral",
    "category": "Lips",
    "price": 1010,
    "oldPrice": 1160,
    "rating": 4.5,
    "image": "assets/images/product-1088.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1089",
    "name": "Crystal Lip Tint Mocha",
    "category": "Lips",
    "price": 1040,
    "oldPrice": 1140,
    "rating": 4.6,
    "image": "assets/images/product-1089.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1090",
    "name": "Pro Lip Tint Plum",
    "category": "Lips",
    "price": 1080,
    "oldPrice": 1230,
    "rating": 4.7,
    "image": "assets/images/product-1090.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1091",
    "name": "Bloom Lip Tint Pink",
    "category": "Lips",
    "price": 1120,
    "oldPrice": 1270,
    "rating": 4.8,
    "image": "assets/images/product-1091.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1092",
    "name": "Nude Lip Tint Honey",
    "category": "Lips",
    "price": 1150,
    "oldPrice": 1400,
    "rating": 4.9,
    "image": "assets/images/product-1092.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1093",
    "name": "Velvet Lip Tint Rose",
    "category": "Lips",
    "price": 1190,
    "oldPrice": 1440,
    "rating": 4.3,
    "image": "assets/images/product-1093.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1094",
    "name": "Glow Lip Tint Nude",
    "category": "Lips",
    "price": 1230,
    "oldPrice": 1330,
    "rating": 4.4,
    "image": "assets/images/product-1094.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1095",
    "name": "Silk Lip Tint Berry",
    "category": "Lips",
    "price": 1260,
    "oldPrice": 1510,
    "rating": 4.5,
    "image": "assets/images/product-1095.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1096",
    "name": "Luxe Lip Tint Peach",
    "category": "Lips",
    "price": 1300,
    "oldPrice": 1500,
    "rating": 4.6,
    "image": "assets/images/product-1096.svg",
    "description": "Premium lip tint designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1097",
    "name": "Velvet Foundation Rose",
    "category": "Face",
    "price": 1340,
    "oldPrice": 1440,
    "rating": 4.4,
    "image": "assets/images/product-1097.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1098",
    "name": "Glow Foundation Nude",
    "category": "Face",
    "price": 1380,
    "oldPrice": 1480,
    "rating": 4.5,
    "image": "assets/images/product-1098.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1099",
    "name": "Silk Foundation Berry",
    "category": "Face",
    "price": 1410,
    "oldPrice": 1510,
    "rating": 4.6,
    "image": "assets/images/product-1099.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1100",
    "name": "Luxe Foundation Peach",
    "category": "Face",
    "price": 1450,
    "oldPrice": 1700,
    "rating": 4.7,
    "image": "assets/images/product-1100.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1101",
    "name": "Radiant Foundation Cocoa",
    "category": "Face",
    "price": 1490,
    "oldPrice": 1690,
    "rating": 4.8,
    "image": "assets/images/product-1101.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1102",
    "name": "Pure Foundation Coral",
    "category": "Face",
    "price": 1520,
    "oldPrice": 1670,
    "rating": 4.9,
    "image": "assets/images/product-1102.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1103",
    "name": "Crystal Foundation Mocha",
    "category": "Face",
    "price": 1560,
    "oldPrice": 1710,
    "rating": 4.3,
    "image": "assets/images/product-1103.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1104",
    "name": "Pro Foundation Plum",
    "category": "Face",
    "price": 1600,
    "oldPrice": 1700,
    "rating": 4.4,
    "image": "assets/images/product-1104.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1105",
    "name": "Bloom Foundation Pink",
    "category": "Face",
    "price": 1640,
    "oldPrice": 1740,
    "rating": 4.5,
    "image": "assets/images/product-1105.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1106",
    "name": "Nude Foundation Honey",
    "category": "Face",
    "price": 1670,
    "oldPrice": 1820,
    "rating": 4.6,
    "image": "assets/images/product-1106.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1107",
    "name": "Velvet Foundation Rose",
    "category": "Face",
    "price": 1710,
    "oldPrice": 1910,
    "rating": 4.7,
    "image": "assets/images/product-1107.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1108",
    "name": "Glow Foundation Nude",
    "category": "Face",
    "price": 1750,
    "oldPrice": 1950,
    "rating": 4.8,
    "image": "assets/images/product-1108.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1109",
    "name": "Silk Foundation Berry",
    "category": "Face",
    "price": 1780,
    "oldPrice": 1980,
    "rating": 4.9,
    "image": "assets/images/product-1109.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1110",
    "name": "Luxe Foundation Peach",
    "category": "Face",
    "price": 1820,
    "oldPrice": 1920,
    "rating": 4.3,
    "image": "assets/images/product-1110.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1111",
    "name": "Radiant Foundation Cocoa",
    "category": "Face",
    "price": 1860,
    "oldPrice": 1960,
    "rating": 4.4,
    "image": "assets/images/product-1111.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1112",
    "name": "Pure Foundation Coral",
    "category": "Face",
    "price": 1890,
    "oldPrice": 2140,
    "rating": 4.5,
    "image": "assets/images/product-1112.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1113",
    "name": "Crystal Foundation Mocha",
    "category": "Face",
    "price": 1930,
    "oldPrice": 2180,
    "rating": 4.6,
    "image": "assets/images/product-1113.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1114",
    "name": "Pro Foundation Plum",
    "category": "Face",
    "price": 1970,
    "oldPrice": 2220,
    "rating": 4.7,
    "image": "assets/images/product-1114.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1115",
    "name": "Bloom Foundation Pink",
    "category": "Face",
    "price": 2000,
    "oldPrice": 2100,
    "rating": 4.8,
    "image": "assets/images/product-1115.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1116",
    "name": "Nude Foundation Honey",
    "category": "Face",
    "price": 2040,
    "oldPrice": 2140,
    "rating": 4.9,
    "image": "assets/images/product-1116.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1117",
    "name": "Velvet Foundation Rose",
    "category": "Face",
    "price": 2080,
    "oldPrice": 2330,
    "rating": 4.3,
    "image": "assets/images/product-1117.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1118",
    "name": "Glow Foundation Nude",
    "category": "Face",
    "price": 2120,
    "oldPrice": 2220,
    "rating": 4.4,
    "image": "assets/images/product-1118.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1119",
    "name": "Silk Foundation Berry",
    "category": "Face",
    "price": 350,
    "oldPrice": 550,
    "rating": 4.5,
    "image": "assets/images/product-1119.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1120",
    "name": "Luxe Foundation Peach",
    "category": "Face",
    "price": 390,
    "oldPrice": 590,
    "rating": 4.6,
    "image": "assets/images/product-1120.svg",
    "description": "Premium foundation designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1121",
    "name": "Velvet Concealer Rose",
    "category": "Face",
    "price": 430,
    "oldPrice": 630,
    "rating": 4.4,
    "image": "assets/images/product-1121.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1122",
    "name": "Glow Concealer Nude",
    "category": "Face",
    "price": 460,
    "oldPrice": 560,
    "rating": 4.5,
    "image": "assets/images/product-1122.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1123",
    "name": "Silk Concealer Berry",
    "category": "Face",
    "price": 500,
    "oldPrice": 600,
    "rating": 4.6,
    "image": "assets/images/product-1123.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1124",
    "name": "Luxe Concealer Peach",
    "category": "Face",
    "price": 540,
    "oldPrice": 690,
    "rating": 4.7,
    "image": "assets/images/product-1124.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1125",
    "name": "Radiant Concealer Cocoa",
    "category": "Face",
    "price": 580,
    "oldPrice": 780,
    "rating": 4.8,
    "image": "assets/images/product-1125.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1126",
    "name": "Pure Concealer Coral",
    "category": "Face",
    "price": 610,
    "oldPrice": 860,
    "rating": 4.9,
    "image": "assets/images/product-1126.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1127",
    "name": "Crystal Concealer Mocha",
    "category": "Face",
    "price": 650,
    "oldPrice": 850,
    "rating": 4.3,
    "image": "assets/images/product-1127.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1128",
    "name": "Pro Concealer Plum",
    "category": "Face",
    "price": 690,
    "oldPrice": 940,
    "rating": 4.4,
    "image": "assets/images/product-1128.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1129",
    "name": "Bloom Concealer Pink",
    "category": "Face",
    "price": 720,
    "oldPrice": 970,
    "rating": 4.5,
    "image": "assets/images/product-1129.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1130",
    "name": "Nude Concealer Honey",
    "category": "Face",
    "price": 760,
    "oldPrice": 960,
    "rating": 4.6,
    "image": "assets/images/product-1130.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1131",
    "name": "Velvet Concealer Rose",
    "category": "Face",
    "price": 800,
    "oldPrice": 900,
    "rating": 4.7,
    "image": "assets/images/product-1131.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1132",
    "name": "Glow Concealer Nude",
    "category": "Face",
    "price": 830,
    "oldPrice": 980,
    "rating": 4.8,
    "image": "assets/images/product-1132.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1133",
    "name": "Silk Concealer Berry",
    "category": "Face",
    "price": 870,
    "oldPrice": 1070,
    "rating": 4.9,
    "image": "assets/images/product-1133.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1134",
    "name": "Luxe Concealer Peach",
    "category": "Face",
    "price": 910,
    "oldPrice": 1110,
    "rating": 4.3,
    "image": "assets/images/product-1134.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1135",
    "name": "Radiant Concealer Cocoa",
    "category": "Face",
    "price": 940,
    "oldPrice": 1140,
    "rating": 4.4,
    "image": "assets/images/product-1135.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1136",
    "name": "Pure Concealer Coral",
    "category": "Face",
    "price": 980,
    "oldPrice": 1180,
    "rating": 4.5,
    "image": "assets/images/product-1136.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1137",
    "name": "Crystal Concealer Mocha",
    "category": "Face",
    "price": 1020,
    "oldPrice": 1220,
    "rating": 4.6,
    "image": "assets/images/product-1137.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1138",
    "name": "Pro Concealer Plum",
    "category": "Face",
    "price": 1060,
    "oldPrice": 1310,
    "rating": 4.7,
    "image": "assets/images/product-1138.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1139",
    "name": "Bloom Concealer Pink",
    "category": "Face",
    "price": 1090,
    "oldPrice": 1340,
    "rating": 4.8,
    "image": "assets/images/product-1139.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1140",
    "name": "Nude Concealer Honey",
    "category": "Face",
    "price": 1130,
    "oldPrice": 1280,
    "rating": 4.9,
    "image": "assets/images/product-1140.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1141",
    "name": "Velvet Concealer Rose",
    "category": "Face",
    "price": 1170,
    "oldPrice": 1370,
    "rating": 4.3,
    "image": "assets/images/product-1141.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1142",
    "name": "Glow Concealer Nude",
    "category": "Face",
    "price": 1200,
    "oldPrice": 1450,
    "rating": 4.4,
    "image": "assets/images/product-1142.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1143",
    "name": "Silk Concealer Berry",
    "category": "Face",
    "price": 1240,
    "oldPrice": 1440,
    "rating": 4.5,
    "image": "assets/images/product-1143.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1144",
    "name": "Luxe Concealer Peach",
    "category": "Face",
    "price": 1280,
    "oldPrice": 1430,
    "rating": 4.6,
    "image": "assets/images/product-1144.svg",
    "description": "Premium concealer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1145",
    "name": "Velvet Blush Rose",
    "category": "Face",
    "price": 1320,
    "oldPrice": 1420,
    "rating": 4.4,
    "image": "assets/images/product-1145.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1146",
    "name": "Glow Blush Nude",
    "category": "Face",
    "price": 1350,
    "oldPrice": 1500,
    "rating": 4.5,
    "image": "assets/images/product-1146.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1147",
    "name": "Silk Blush Berry",
    "category": "Face",
    "price": 1390,
    "oldPrice": 1490,
    "rating": 4.6,
    "image": "assets/images/product-1147.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1148",
    "name": "Luxe Blush Peach",
    "category": "Face",
    "price": 1430,
    "oldPrice": 1580,
    "rating": 4.7,
    "image": "assets/images/product-1148.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1149",
    "name": "Radiant Blush Cocoa",
    "category": "Face",
    "price": 1460,
    "oldPrice": 1610,
    "rating": 4.8,
    "image": "assets/images/product-1149.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1150",
    "name": "Pure Blush Coral",
    "category": "Face",
    "price": 1500,
    "oldPrice": 1650,
    "rating": 4.9,
    "image": "assets/images/product-1150.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1151",
    "name": "Crystal Blush Mocha",
    "category": "Face",
    "price": 1540,
    "oldPrice": 1690,
    "rating": 4.3,
    "image": "assets/images/product-1151.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1152",
    "name": "Pro Blush Plum",
    "category": "Face",
    "price": 1570,
    "oldPrice": 1770,
    "rating": 4.4,
    "image": "assets/images/product-1152.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1153",
    "name": "Bloom Blush Pink",
    "category": "Face",
    "price": 1610,
    "oldPrice": 1810,
    "rating": 4.5,
    "image": "assets/images/product-1153.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1154",
    "name": "Nude Blush Honey",
    "category": "Face",
    "price": 1650,
    "oldPrice": 1900,
    "rating": 4.6,
    "image": "assets/images/product-1154.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1155",
    "name": "Velvet Blush Rose",
    "category": "Face",
    "price": 1680,
    "oldPrice": 1880,
    "rating": 4.7,
    "image": "assets/images/product-1155.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1156",
    "name": "Glow Blush Nude",
    "category": "Face",
    "price": 1720,
    "oldPrice": 1970,
    "rating": 4.8,
    "image": "assets/images/product-1156.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1157",
    "name": "Silk Blush Berry",
    "category": "Face",
    "price": 1760,
    "oldPrice": 2010,
    "rating": 4.9,
    "image": "assets/images/product-1157.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1158",
    "name": "Luxe Blush Peach",
    "category": "Face",
    "price": 1800,
    "oldPrice": 2000,
    "rating": 4.3,
    "image": "assets/images/product-1158.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1159",
    "name": "Radiant Blush Cocoa",
    "category": "Face",
    "price": 1830,
    "oldPrice": 2080,
    "rating": 4.4,
    "image": "assets/images/product-1159.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1160",
    "name": "Pure Blush Coral",
    "category": "Face",
    "price": 1870,
    "oldPrice": 2120,
    "rating": 4.5,
    "image": "assets/images/product-1160.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1161",
    "name": "Crystal Blush Mocha",
    "category": "Face",
    "price": 1910,
    "oldPrice": 2110,
    "rating": 4.6,
    "image": "assets/images/product-1161.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1162",
    "name": "Pro Blush Plum",
    "category": "Face",
    "price": 1940,
    "oldPrice": 2040,
    "rating": 4.7,
    "image": "assets/images/product-1162.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1163",
    "name": "Bloom Blush Pink",
    "category": "Face",
    "price": 1980,
    "oldPrice": 2130,
    "rating": 4.8,
    "image": "assets/images/product-1163.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1164",
    "name": "Nude Blush Honey",
    "category": "Face",
    "price": 2020,
    "oldPrice": 2270,
    "rating": 4.9,
    "image": "assets/images/product-1164.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1165",
    "name": "Velvet Blush Rose",
    "category": "Face",
    "price": 2060,
    "oldPrice": 2260,
    "rating": 4.3,
    "image": "assets/images/product-1165.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1166",
    "name": "Glow Blush Nude",
    "category": "Face",
    "price": 2090,
    "oldPrice": 2290,
    "rating": 4.4,
    "image": "assets/images/product-1166.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1167",
    "name": "Silk Blush Berry",
    "category": "Face",
    "price": 2130,
    "oldPrice": 2230,
    "rating": 4.5,
    "image": "assets/images/product-1167.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1168",
    "name": "Luxe Blush Peach",
    "category": "Face",
    "price": 370,
    "oldPrice": 570,
    "rating": 4.6,
    "image": "assets/images/product-1168.svg",
    "description": "Premium blush designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1169",
    "name": "Velvet Highlighter Rose",
    "category": "Face",
    "price": 400,
    "oldPrice": 650,
    "rating": 4.4,
    "image": "assets/images/product-1169.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1170",
    "name": "Glow Highlighter Nude",
    "category": "Face",
    "price": 440,
    "oldPrice": 590,
    "rating": 4.5,
    "image": "assets/images/product-1170.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1171",
    "name": "Silk Highlighter Berry",
    "category": "Face",
    "price": 480,
    "oldPrice": 630,
    "rating": 4.6,
    "image": "assets/images/product-1171.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1172",
    "name": "Luxe Highlighter Peach",
    "category": "Face",
    "price": 510,
    "oldPrice": 760,
    "rating": 4.7,
    "image": "assets/images/product-1172.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1173",
    "name": "Radiant Highlighter Cocoa",
    "category": "Face",
    "price": 550,
    "oldPrice": 800,
    "rating": 4.8,
    "image": "assets/images/product-1173.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1174",
    "name": "Pure Highlighter Coral",
    "category": "Face",
    "price": 590,
    "oldPrice": 690,
    "rating": 4.9,
    "image": "assets/images/product-1174.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1175",
    "name": "Crystal Highlighter Mocha",
    "category": "Face",
    "price": 620,
    "oldPrice": 770,
    "rating": 4.3,
    "image": "assets/images/product-1175.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1176",
    "name": "Pro Highlighter Plum",
    "category": "Face",
    "price": 660,
    "oldPrice": 860,
    "rating": 4.4,
    "image": "assets/images/product-1176.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1177",
    "name": "Bloom Highlighter Pink",
    "category": "Face",
    "price": 700,
    "oldPrice": 850,
    "rating": 4.5,
    "image": "assets/images/product-1177.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1178",
    "name": "Nude Highlighter Honey",
    "category": "Face",
    "price": 740,
    "oldPrice": 840,
    "rating": 4.6,
    "image": "assets/images/product-1178.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1179",
    "name": "Velvet Highlighter Rose",
    "category": "Face",
    "price": 770,
    "oldPrice": 920,
    "rating": 4.7,
    "image": "assets/images/product-1179.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1180",
    "name": "Glow Highlighter Nude",
    "category": "Face",
    "price": 810,
    "oldPrice": 960,
    "rating": 4.8,
    "image": "assets/images/product-1180.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1181",
    "name": "Silk Highlighter Berry",
    "category": "Face",
    "price": 850,
    "oldPrice": 1000,
    "rating": 4.9,
    "image": "assets/images/product-1181.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1182",
    "name": "Luxe Highlighter Peach",
    "category": "Face",
    "price": 880,
    "oldPrice": 1130,
    "rating": 4.3,
    "image": "assets/images/product-1182.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1183",
    "name": "Radiant Highlighter Cocoa",
    "category": "Face",
    "price": 920,
    "oldPrice": 1020,
    "rating": 4.4,
    "image": "assets/images/product-1183.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1184",
    "name": "Pure Highlighter Coral",
    "category": "Face",
    "price": 960,
    "oldPrice": 1110,
    "rating": 4.5,
    "image": "assets/images/product-1184.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1185",
    "name": "Crystal Highlighter Mocha",
    "category": "Face",
    "price": 1000,
    "oldPrice": 1150,
    "rating": 4.6,
    "image": "assets/images/product-1185.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1186",
    "name": "Pro Highlighter Plum",
    "category": "Face",
    "price": 1030,
    "oldPrice": 1230,
    "rating": 4.7,
    "image": "assets/images/product-1186.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1187",
    "name": "Bloom Highlighter Pink",
    "category": "Face",
    "price": 1070,
    "oldPrice": 1320,
    "rating": 4.8,
    "image": "assets/images/product-1187.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1188",
    "name": "Nude Highlighter Honey",
    "category": "Face",
    "price": 1110,
    "oldPrice": 1210,
    "rating": 4.9,
    "image": "assets/images/product-1188.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1189",
    "name": "Velvet Highlighter Rose",
    "category": "Face",
    "price": 1140,
    "oldPrice": 1340,
    "rating": 4.3,
    "image": "assets/images/product-1189.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1190",
    "name": "Glow Highlighter Nude",
    "category": "Face",
    "price": 1180,
    "oldPrice": 1330,
    "rating": 4.4,
    "image": "assets/images/product-1190.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1191",
    "name": "Silk Highlighter Berry",
    "category": "Face",
    "price": 1220,
    "oldPrice": 1470,
    "rating": 4.5,
    "image": "assets/images/product-1191.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1192",
    "name": "Luxe Highlighter Peach",
    "category": "Face",
    "price": 1250,
    "oldPrice": 1450,
    "rating": 4.6,
    "image": "assets/images/product-1192.svg",
    "description": "Premium highlighter designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1193",
    "name": "Velvet Setting Powder Rose",
    "category": "Face",
    "price": 1290,
    "oldPrice": 1390,
    "rating": 4.4,
    "image": "assets/images/product-1193.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1194",
    "name": "Glow Setting Powder Nude",
    "category": "Face",
    "price": 1330,
    "oldPrice": 1430,
    "rating": 4.5,
    "image": "assets/images/product-1194.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1195",
    "name": "Silk Setting Powder Berry",
    "category": "Face",
    "price": 1360,
    "oldPrice": 1610,
    "rating": 4.6,
    "image": "assets/images/product-1195.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1196",
    "name": "Luxe Setting Powder Peach",
    "category": "Face",
    "price": 1400,
    "oldPrice": 1500,
    "rating": 4.7,
    "image": "assets/images/product-1196.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1197",
    "name": "Radiant Setting Powder Cocoa",
    "category": "Face",
    "price": 1440,
    "oldPrice": 1690,
    "rating": 4.8,
    "image": "assets/images/product-1197.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1198",
    "name": "Pure Setting Powder Coral",
    "category": "Face",
    "price": 1480,
    "oldPrice": 1580,
    "rating": 4.9,
    "image": "assets/images/product-1198.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1199",
    "name": "Crystal Setting Powder Mocha",
    "category": "Face",
    "price": 1510,
    "oldPrice": 1760,
    "rating": 4.3,
    "image": "assets/images/product-1199.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1200",
    "name": "Pro Setting Powder Plum",
    "category": "Face",
    "price": 1550,
    "oldPrice": 1750,
    "rating": 4.4,
    "image": "assets/images/product-1200.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1201",
    "name": "Bloom Setting Powder Pink",
    "category": "Face",
    "price": 1590,
    "oldPrice": 1840,
    "rating": 4.5,
    "image": "assets/images/product-1201.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1202",
    "name": "Nude Setting Powder Honey",
    "category": "Face",
    "price": 1620,
    "oldPrice": 1820,
    "rating": 4.6,
    "image": "assets/images/product-1202.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1203",
    "name": "Velvet Setting Powder Rose",
    "category": "Face",
    "price": 1660,
    "oldPrice": 1810,
    "rating": 4.7,
    "image": "assets/images/product-1203.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1204",
    "name": "Glow Setting Powder Nude",
    "category": "Face",
    "price": 1700,
    "oldPrice": 1950,
    "rating": 4.8,
    "image": "assets/images/product-1204.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1205",
    "name": "Silk Setting Powder Berry",
    "category": "Face",
    "price": 1740,
    "oldPrice": 1840,
    "rating": 4.9,
    "image": "assets/images/product-1205.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1206",
    "name": "Luxe Setting Powder Peach",
    "category": "Face",
    "price": 1770,
    "oldPrice": 2020,
    "rating": 4.3,
    "image": "assets/images/product-1206.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1207",
    "name": "Radiant Setting Powder Cocoa",
    "category": "Face",
    "price": 1810,
    "oldPrice": 1960,
    "rating": 4.4,
    "image": "assets/images/product-1207.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1208",
    "name": "Pure Setting Powder Coral",
    "category": "Face",
    "price": 1850,
    "oldPrice": 2100,
    "rating": 4.5,
    "image": "assets/images/product-1208.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1209",
    "name": "Crystal Setting Powder Mocha",
    "category": "Face",
    "price": 1880,
    "oldPrice": 2030,
    "rating": 4.6,
    "image": "assets/images/product-1209.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1210",
    "name": "Pro Setting Powder Plum",
    "category": "Face",
    "price": 1920,
    "oldPrice": 2120,
    "rating": 4.7,
    "image": "assets/images/product-1210.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1211",
    "name": "Bloom Setting Powder Pink",
    "category": "Face",
    "price": 1960,
    "oldPrice": 2060,
    "rating": 4.8,
    "image": "assets/images/product-1211.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1212",
    "name": "Nude Setting Powder Honey",
    "category": "Face",
    "price": 1990,
    "oldPrice": 2090,
    "rating": 4.9,
    "image": "assets/images/product-1212.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1213",
    "name": "Velvet Setting Powder Rose",
    "category": "Face",
    "price": 2030,
    "oldPrice": 2280,
    "rating": 4.3,
    "image": "assets/images/product-1213.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1214",
    "name": "Glow Setting Powder Nude",
    "category": "Face",
    "price": 2070,
    "oldPrice": 2320,
    "rating": 4.4,
    "image": "assets/images/product-1214.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1215",
    "name": "Silk Setting Powder Berry",
    "category": "Face",
    "price": 2100,
    "oldPrice": 2300,
    "rating": 4.5,
    "image": "assets/images/product-1215.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1216",
    "name": "Luxe Setting Powder Peach",
    "category": "Face",
    "price": 2140,
    "oldPrice": 2240,
    "rating": 4.6,
    "image": "assets/images/product-1216.svg",
    "description": "Premium setting powder designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1217",
    "name": "Velvet Mascara Rose",
    "category": "Eyes",
    "price": 380,
    "oldPrice": 630,
    "rating": 4.4,
    "image": "assets/images/product-1217.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1218",
    "name": "Glow Mascara Nude",
    "category": "Eyes",
    "price": 420,
    "oldPrice": 670,
    "rating": 4.5,
    "image": "assets/images/product-1218.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1219",
    "name": "Silk Mascara Berry",
    "category": "Eyes",
    "price": 450,
    "oldPrice": 550,
    "rating": 4.6,
    "image": "assets/images/product-1219.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1220",
    "name": "Luxe Mascara Peach",
    "category": "Eyes",
    "price": 490,
    "oldPrice": 640,
    "rating": 4.7,
    "image": "assets/images/product-1220.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1221",
    "name": "Radiant Mascara Cocoa",
    "category": "Eyes",
    "price": 530,
    "oldPrice": 630,
    "rating": 4.8,
    "image": "assets/images/product-1221.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1222",
    "name": "Pure Mascara Coral",
    "category": "Eyes",
    "price": 560,
    "oldPrice": 760,
    "rating": 4.9,
    "image": "assets/images/product-1222.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1223",
    "name": "Crystal Mascara Mocha",
    "category": "Eyes",
    "price": 600,
    "oldPrice": 800,
    "rating": 4.3,
    "image": "assets/images/product-1223.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1224",
    "name": "Pro Mascara Plum",
    "category": "Eyes",
    "price": 640,
    "oldPrice": 790,
    "rating": 4.4,
    "image": "assets/images/product-1224.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1225",
    "name": "Bloom Mascara Pink",
    "category": "Eyes",
    "price": 680,
    "oldPrice": 830,
    "rating": 4.5,
    "image": "assets/images/product-1225.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1226",
    "name": "Nude Mascara Honey",
    "category": "Eyes",
    "price": 710,
    "oldPrice": 810,
    "rating": 4.6,
    "image": "assets/images/product-1226.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1227",
    "name": "Velvet Mascara Rose",
    "category": "Eyes",
    "price": 750,
    "oldPrice": 850,
    "rating": 4.7,
    "image": "assets/images/product-1227.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1228",
    "name": "Glow Mascara Nude",
    "category": "Eyes",
    "price": 790,
    "oldPrice": 890,
    "rating": 4.8,
    "image": "assets/images/product-1228.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1229",
    "name": "Silk Mascara Berry",
    "category": "Eyes",
    "price": 820,
    "oldPrice": 1020,
    "rating": 4.9,
    "image": "assets/images/product-1229.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1230",
    "name": "Luxe Mascara Peach",
    "category": "Eyes",
    "price": 860,
    "oldPrice": 1060,
    "rating": 4.3,
    "image": "assets/images/product-1230.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1231",
    "name": "Radiant Mascara Cocoa",
    "category": "Eyes",
    "price": 900,
    "oldPrice": 1050,
    "rating": 4.4,
    "image": "assets/images/product-1231.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1232",
    "name": "Pure Mascara Coral",
    "category": "Eyes",
    "price": 930,
    "oldPrice": 1080,
    "rating": 4.5,
    "image": "assets/images/product-1232.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1233",
    "name": "Crystal Mascara Mocha",
    "category": "Eyes",
    "price": 970,
    "oldPrice": 1070,
    "rating": 4.6,
    "image": "assets/images/product-1233.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1234",
    "name": "Pro Mascara Plum",
    "category": "Eyes",
    "price": 1010,
    "oldPrice": 1210,
    "rating": 4.7,
    "image": "assets/images/product-1234.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1235",
    "name": "Bloom Mascara Pink",
    "category": "Eyes",
    "price": 1040,
    "oldPrice": 1140,
    "rating": 4.8,
    "image": "assets/images/product-1235.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1236",
    "name": "Nude Mascara Honey",
    "category": "Eyes",
    "price": 1080,
    "oldPrice": 1330,
    "rating": 4.9,
    "image": "assets/images/product-1236.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1237",
    "name": "Velvet Mascara Rose",
    "category": "Eyes",
    "price": 1120,
    "oldPrice": 1270,
    "rating": 4.3,
    "image": "assets/images/product-1237.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1238",
    "name": "Glow Mascara Nude",
    "category": "Eyes",
    "price": 1160,
    "oldPrice": 1310,
    "rating": 4.4,
    "image": "assets/images/product-1238.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1239",
    "name": "Silk Mascara Berry",
    "category": "Eyes",
    "price": 1190,
    "oldPrice": 1290,
    "rating": 4.5,
    "image": "assets/images/product-1239.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1240",
    "name": "Luxe Mascara Peach",
    "category": "Eyes",
    "price": 1230,
    "oldPrice": 1330,
    "rating": 4.6,
    "image": "assets/images/product-1240.svg",
    "description": "Premium mascara designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1241",
    "name": "Velvet Eyeliner Rose",
    "category": "Eyes",
    "price": 1270,
    "oldPrice": 1470,
    "rating": 4.4,
    "image": "assets/images/product-1241.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1242",
    "name": "Glow Eyeliner Nude",
    "category": "Eyes",
    "price": 1300,
    "oldPrice": 1500,
    "rating": 4.5,
    "image": "assets/images/product-1242.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1243",
    "name": "Silk Eyeliner Berry",
    "category": "Eyes",
    "price": 1340,
    "oldPrice": 1540,
    "rating": 4.6,
    "image": "assets/images/product-1243.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1244",
    "name": "Luxe Eyeliner Peach",
    "category": "Eyes",
    "price": 1380,
    "oldPrice": 1530,
    "rating": 4.7,
    "image": "assets/images/product-1244.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1245",
    "name": "Radiant Eyeliner Cocoa",
    "category": "Eyes",
    "price": 1420,
    "oldPrice": 1520,
    "rating": 4.8,
    "image": "assets/images/product-1245.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1246",
    "name": "Pure Eyeliner Coral",
    "category": "Eyes",
    "price": 1450,
    "oldPrice": 1700,
    "rating": 4.9,
    "image": "assets/images/product-1246.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1247",
    "name": "Crystal Eyeliner Mocha",
    "category": "Eyes",
    "price": 1490,
    "oldPrice": 1740,
    "rating": 4.3,
    "image": "assets/images/product-1247.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1248",
    "name": "Pro Eyeliner Plum",
    "category": "Eyes",
    "price": 1530,
    "oldPrice": 1630,
    "rating": 4.4,
    "image": "assets/images/product-1248.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1249",
    "name": "Bloom Eyeliner Pink",
    "category": "Eyes",
    "price": 1560,
    "oldPrice": 1810,
    "rating": 4.5,
    "image": "assets/images/product-1249.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1250",
    "name": "Nude Eyeliner Honey",
    "category": "Eyes",
    "price": 1600,
    "oldPrice": 1800,
    "rating": 4.6,
    "image": "assets/images/product-1250.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1251",
    "name": "Velvet Eyeliner Rose",
    "category": "Eyes",
    "price": 1640,
    "oldPrice": 1740,
    "rating": 4.7,
    "image": "assets/images/product-1251.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1252",
    "name": "Glow Eyeliner Nude",
    "category": "Eyes",
    "price": 1670,
    "oldPrice": 1770,
    "rating": 4.8,
    "image": "assets/images/product-1252.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1253",
    "name": "Silk Eyeliner Berry",
    "category": "Eyes",
    "price": 1710,
    "oldPrice": 1910,
    "rating": 4.9,
    "image": "assets/images/product-1253.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1254",
    "name": "Luxe Eyeliner Peach",
    "category": "Eyes",
    "price": 1750,
    "oldPrice": 1850,
    "rating": 4.3,
    "image": "assets/images/product-1254.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1255",
    "name": "Radiant Eyeliner Cocoa",
    "category": "Eyes",
    "price": 1780,
    "oldPrice": 1980,
    "rating": 4.4,
    "image": "assets/images/product-1255.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1256",
    "name": "Pure Eyeliner Coral",
    "category": "Eyes",
    "price": 1820,
    "oldPrice": 1920,
    "rating": 4.5,
    "image": "assets/images/product-1256.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1257",
    "name": "Crystal Eyeliner Mocha",
    "category": "Eyes",
    "price": 1860,
    "oldPrice": 2060,
    "rating": 4.6,
    "image": "assets/images/product-1257.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1258",
    "name": "Pro Eyeliner Plum",
    "category": "Eyes",
    "price": 1900,
    "oldPrice": 2050,
    "rating": 4.7,
    "image": "assets/images/product-1258.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1259",
    "name": "Bloom Eyeliner Pink",
    "category": "Eyes",
    "price": 1930,
    "oldPrice": 2030,
    "rating": 4.8,
    "image": "assets/images/product-1259.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1260",
    "name": "Nude Eyeliner Honey",
    "category": "Eyes",
    "price": 1970,
    "oldPrice": 2120,
    "rating": 4.9,
    "image": "assets/images/product-1260.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1261",
    "name": "Velvet Eyeliner Rose",
    "category": "Eyes",
    "price": 2010,
    "oldPrice": 2210,
    "rating": 4.3,
    "image": "assets/images/product-1261.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1262",
    "name": "Glow Eyeliner Nude",
    "category": "Eyes",
    "price": 2040,
    "oldPrice": 2140,
    "rating": 4.4,
    "image": "assets/images/product-1262.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1263",
    "name": "Silk Eyeliner Berry",
    "category": "Eyes",
    "price": 2080,
    "oldPrice": 2230,
    "rating": 4.5,
    "image": "assets/images/product-1263.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1264",
    "name": "Luxe Eyeliner Peach",
    "category": "Eyes",
    "price": 2120,
    "oldPrice": 2270,
    "rating": 4.6,
    "image": "assets/images/product-1264.svg",
    "description": "Premium eyeliner designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1265",
    "name": "Velvet Eyeshadow Palette Rose",
    "category": "Eyes",
    "price": 360,
    "oldPrice": 460,
    "rating": 4.4,
    "image": "assets/images/product-1265.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1266",
    "name": "Glow Eyeshadow Palette Nude",
    "category": "Eyes",
    "price": 390,
    "oldPrice": 590,
    "rating": 4.5,
    "image": "assets/images/product-1266.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1267",
    "name": "Silk Eyeshadow Palette Berry",
    "category": "Eyes",
    "price": 430,
    "oldPrice": 680,
    "rating": 4.6,
    "image": "assets/images/product-1267.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1268",
    "name": "Luxe Eyeshadow Palette Peach",
    "category": "Eyes",
    "price": 470,
    "oldPrice": 620,
    "rating": 4.7,
    "image": "assets/images/product-1268.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1269",
    "name": "Radiant Eyeshadow Palette Cocoa",
    "category": "Eyes",
    "price": 500,
    "oldPrice": 700,
    "rating": 4.8,
    "image": "assets/images/product-1269.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1270",
    "name": "Pure Eyeshadow Palette Coral",
    "category": "Eyes",
    "price": 540,
    "oldPrice": 790,
    "rating": 4.9,
    "image": "assets/images/product-1270.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1271",
    "name": "Crystal Eyeshadow Palette Mocha",
    "category": "Eyes",
    "price": 580,
    "oldPrice": 780,
    "rating": 4.3,
    "image": "assets/images/product-1271.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1272",
    "name": "Pro Eyeshadow Palette Plum",
    "category": "Eyes",
    "price": 610,
    "oldPrice": 860,
    "rating": 4.4,
    "image": "assets/images/product-1272.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1273",
    "name": "Bloom Eyeshadow Palette Pink",
    "category": "Eyes",
    "price": 650,
    "oldPrice": 750,
    "rating": 4.5,
    "image": "assets/images/product-1273.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1274",
    "name": "Nude Eyeshadow Palette Honey",
    "category": "Eyes",
    "price": 690,
    "oldPrice": 890,
    "rating": 4.6,
    "image": "assets/images/product-1274.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1275",
    "name": "Velvet Eyeshadow Palette Rose",
    "category": "Eyes",
    "price": 720,
    "oldPrice": 970,
    "rating": 4.7,
    "image": "assets/images/product-1275.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1276",
    "name": "Glow Eyeshadow Palette Nude",
    "category": "Eyes",
    "price": 760,
    "oldPrice": 860,
    "rating": 4.8,
    "image": "assets/images/product-1276.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1277",
    "name": "Silk Eyeshadow Palette Berry",
    "category": "Eyes",
    "price": 800,
    "oldPrice": 1000,
    "rating": 4.9,
    "image": "assets/images/product-1277.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1278",
    "name": "Luxe Eyeshadow Palette Peach",
    "category": "Eyes",
    "price": 840,
    "oldPrice": 1090,
    "rating": 4.3,
    "image": "assets/images/product-1278.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1279",
    "name": "Radiant Eyeshadow Palette Cocoa",
    "category": "Eyes",
    "price": 870,
    "oldPrice": 1120,
    "rating": 4.4,
    "image": "assets/images/product-1279.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1280",
    "name": "Pure Eyeshadow Palette Coral",
    "category": "Eyes",
    "price": 910,
    "oldPrice": 1160,
    "rating": 4.5,
    "image": "assets/images/product-1280.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1281",
    "name": "Crystal Eyeshadow Palette Mocha",
    "category": "Eyes",
    "price": 950,
    "oldPrice": 1150,
    "rating": 4.6,
    "image": "assets/images/product-1281.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1282",
    "name": "Pro Eyeshadow Palette Plum",
    "category": "Eyes",
    "price": 980,
    "oldPrice": 1080,
    "rating": 4.7,
    "image": "assets/images/product-1282.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1283",
    "name": "Bloom Eyeshadow Palette Pink",
    "category": "Eyes",
    "price": 1020,
    "oldPrice": 1270,
    "rating": 4.8,
    "image": "assets/images/product-1283.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1284",
    "name": "Nude Eyeshadow Palette Honey",
    "category": "Eyes",
    "price": 1060,
    "oldPrice": 1310,
    "rating": 4.9,
    "image": "assets/images/product-1284.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1285",
    "name": "Velvet Eyeshadow Palette Rose",
    "category": "Eyes",
    "price": 1100,
    "oldPrice": 1200,
    "rating": 4.3,
    "image": "assets/images/product-1285.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1286",
    "name": "Glow Eyeshadow Palette Nude",
    "category": "Eyes",
    "price": 1130,
    "oldPrice": 1380,
    "rating": 4.4,
    "image": "assets/images/product-1286.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1287",
    "name": "Silk Eyeshadow Palette Berry",
    "category": "Eyes",
    "price": 1170,
    "oldPrice": 1320,
    "rating": 4.5,
    "image": "assets/images/product-1287.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1288",
    "name": "Luxe Eyeshadow Palette Peach",
    "category": "Eyes",
    "price": 1210,
    "oldPrice": 1310,
    "rating": 4.6,
    "image": "assets/images/product-1288.svg",
    "description": "Premium eyeshadow palette designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1289",
    "name": "Velvet Brow Pencil Rose",
    "category": "Eyes",
    "price": 1240,
    "oldPrice": 1340,
    "rating": 4.4,
    "image": "assets/images/product-1289.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1290",
    "name": "Glow Brow Pencil Nude",
    "category": "Eyes",
    "price": 1280,
    "oldPrice": 1480,
    "rating": 4.5,
    "image": "assets/images/product-1290.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1291",
    "name": "Silk Brow Pencil Berry",
    "category": "Eyes",
    "price": 1320,
    "oldPrice": 1470,
    "rating": 4.6,
    "image": "assets/images/product-1291.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1292",
    "name": "Luxe Brow Pencil Peach",
    "category": "Eyes",
    "price": 1350,
    "oldPrice": 1550,
    "rating": 4.7,
    "image": "assets/images/product-1292.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1293",
    "name": "Radiant Brow Pencil Cocoa",
    "category": "Eyes",
    "price": 1390,
    "oldPrice": 1490,
    "rating": 4.8,
    "image": "assets/images/product-1293.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1294",
    "name": "Pure Brow Pencil Coral",
    "category": "Eyes",
    "price": 1430,
    "oldPrice": 1580,
    "rating": 4.9,
    "image": "assets/images/product-1294.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1295",
    "name": "Crystal Brow Pencil Mocha",
    "category": "Eyes",
    "price": 1460,
    "oldPrice": 1660,
    "rating": 4.3,
    "image": "assets/images/product-1295.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1296",
    "name": "Pro Brow Pencil Plum",
    "category": "Eyes",
    "price": 1500,
    "oldPrice": 1700,
    "rating": 4.4,
    "image": "assets/images/product-1296.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1297",
    "name": "Bloom Brow Pencil Pink",
    "category": "Eyes",
    "price": 1540,
    "oldPrice": 1790,
    "rating": 4.5,
    "image": "assets/images/product-1297.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1298",
    "name": "Nude Brow Pencil Honey",
    "category": "Eyes",
    "price": 1580,
    "oldPrice": 1830,
    "rating": 4.6,
    "image": "assets/images/product-1298.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1299",
    "name": "Velvet Brow Pencil Rose",
    "category": "Eyes",
    "price": 1610,
    "oldPrice": 1710,
    "rating": 4.7,
    "image": "assets/images/product-1299.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1300",
    "name": "Glow Brow Pencil Nude",
    "category": "Eyes",
    "price": 1650,
    "oldPrice": 1800,
    "rating": 4.8,
    "image": "assets/images/product-1300.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1301",
    "name": "Silk Brow Pencil Berry",
    "category": "Eyes",
    "price": 1690,
    "oldPrice": 1790,
    "rating": 4.9,
    "image": "assets/images/product-1301.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1302",
    "name": "Luxe Brow Pencil Peach",
    "category": "Eyes",
    "price": 1720,
    "oldPrice": 1820,
    "rating": 4.3,
    "image": "assets/images/product-1302.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1303",
    "name": "Radiant Brow Pencil Cocoa",
    "category": "Eyes",
    "price": 1760,
    "oldPrice": 1910,
    "rating": 4.4,
    "image": "assets/images/product-1303.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1304",
    "name": "Pure Brow Pencil Coral",
    "category": "Eyes",
    "price": 1800,
    "oldPrice": 1950,
    "rating": 4.5,
    "image": "assets/images/product-1304.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1305",
    "name": "Crystal Brow Pencil Mocha",
    "category": "Eyes",
    "price": 1840,
    "oldPrice": 1990,
    "rating": 4.6,
    "image": "assets/images/product-1305.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1306",
    "name": "Pro Brow Pencil Plum",
    "category": "Eyes",
    "price": 1870,
    "oldPrice": 1970,
    "rating": 4.7,
    "image": "assets/images/product-1306.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1307",
    "name": "Bloom Brow Pencil Pink",
    "category": "Eyes",
    "price": 1910,
    "oldPrice": 2010,
    "rating": 4.8,
    "image": "assets/images/product-1307.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1308",
    "name": "Nude Brow Pencil Honey",
    "category": "Eyes",
    "price": 1950,
    "oldPrice": 2100,
    "rating": 4.9,
    "image": "assets/images/product-1308.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1309",
    "name": "Velvet Brow Pencil Rose",
    "category": "Eyes",
    "price": 1980,
    "oldPrice": 2180,
    "rating": 4.3,
    "image": "assets/images/product-1309.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1310",
    "name": "Glow Brow Pencil Nude",
    "category": "Eyes",
    "price": 2020,
    "oldPrice": 2120,
    "rating": 4.4,
    "image": "assets/images/product-1310.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1311",
    "name": "Silk Brow Pencil Berry",
    "category": "Eyes",
    "price": 2060,
    "oldPrice": 2160,
    "rating": 4.5,
    "image": "assets/images/product-1311.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1312",
    "name": "Luxe Brow Pencil Peach",
    "category": "Eyes",
    "price": 2090,
    "oldPrice": 2290,
    "rating": 4.6,
    "image": "assets/images/product-1312.svg",
    "description": "Premium brow pencil designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1313",
    "name": "Velvet Cleanser Rose",
    "category": "Skincare",
    "price": 2130,
    "oldPrice": 2330,
    "rating": 4.4,
    "image": "assets/images/product-1313.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1314",
    "name": "Glow Cleanser Nude",
    "category": "Skincare",
    "price": 370,
    "oldPrice": 470,
    "rating": 4.5,
    "image": "assets/images/product-1314.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1315",
    "name": "Silk Cleanser Berry",
    "category": "Skincare",
    "price": 400,
    "oldPrice": 550,
    "rating": 4.6,
    "image": "assets/images/product-1315.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1316",
    "name": "Luxe Cleanser Peach",
    "category": "Skincare",
    "price": 440,
    "oldPrice": 540,
    "rating": 4.7,
    "image": "assets/images/product-1316.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1317",
    "name": "Radiant Cleanser Cocoa",
    "category": "Skincare",
    "price": 480,
    "oldPrice": 580,
    "rating": 4.8,
    "image": "assets/images/product-1317.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1318",
    "name": "Pure Cleanser Coral",
    "category": "Skincare",
    "price": 520,
    "oldPrice": 620,
    "rating": 4.9,
    "image": "assets/images/product-1318.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1319",
    "name": "Crystal Cleanser Mocha",
    "category": "Skincare",
    "price": 550,
    "oldPrice": 800,
    "rating": 4.3,
    "image": "assets/images/product-1319.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1320",
    "name": "Pro Cleanser Plum",
    "category": "Skincare",
    "price": 590,
    "oldPrice": 790,
    "rating": 4.4,
    "image": "assets/images/product-1320.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1321",
    "name": "Bloom Cleanser Pink",
    "category": "Skincare",
    "price": 630,
    "oldPrice": 780,
    "rating": 4.5,
    "image": "assets/images/product-1321.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1322",
    "name": "Nude Cleanser Honey",
    "category": "Skincare",
    "price": 660,
    "oldPrice": 810,
    "rating": 4.6,
    "image": "assets/images/product-1322.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1323",
    "name": "Velvet Cleanser Rose",
    "category": "Skincare",
    "price": 700,
    "oldPrice": 900,
    "rating": 4.7,
    "image": "assets/images/product-1323.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1324",
    "name": "Glow Cleanser Nude",
    "category": "Skincare",
    "price": 740,
    "oldPrice": 990,
    "rating": 4.8,
    "image": "assets/images/product-1324.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1325",
    "name": "Silk Cleanser Berry",
    "category": "Skincare",
    "price": 780,
    "oldPrice": 980,
    "rating": 4.9,
    "image": "assets/images/product-1325.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1326",
    "name": "Luxe Cleanser Peach",
    "category": "Skincare",
    "price": 810,
    "oldPrice": 960,
    "rating": 4.3,
    "image": "assets/images/product-1326.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1327",
    "name": "Radiant Cleanser Cocoa",
    "category": "Skincare",
    "price": 850,
    "oldPrice": 950,
    "rating": 4.4,
    "image": "assets/images/product-1327.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1328",
    "name": "Pure Cleanser Coral",
    "category": "Skincare",
    "price": 890,
    "oldPrice": 1090,
    "rating": 4.5,
    "image": "assets/images/product-1328.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1329",
    "name": "Crystal Cleanser Mocha",
    "category": "Skincare",
    "price": 920,
    "oldPrice": 1120,
    "rating": 4.6,
    "image": "assets/images/product-1329.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1330",
    "name": "Pro Cleanser Plum",
    "category": "Skincare",
    "price": 960,
    "oldPrice": 1210,
    "rating": 4.7,
    "image": "assets/images/product-1330.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1331",
    "name": "Bloom Cleanser Pink",
    "category": "Skincare",
    "price": 1000,
    "oldPrice": 1150,
    "rating": 4.8,
    "image": "assets/images/product-1331.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1332",
    "name": "Nude Cleanser Honey",
    "category": "Skincare",
    "price": 1030,
    "oldPrice": 1180,
    "rating": 4.9,
    "image": "assets/images/product-1332.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1333",
    "name": "Velvet Cleanser Rose",
    "category": "Skincare",
    "price": 1070,
    "oldPrice": 1170,
    "rating": 4.3,
    "image": "assets/images/product-1333.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1334",
    "name": "Glow Cleanser Nude",
    "category": "Skincare",
    "price": 1110,
    "oldPrice": 1310,
    "rating": 4.4,
    "image": "assets/images/product-1334.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1335",
    "name": "Silk Cleanser Berry",
    "category": "Skincare",
    "price": 1140,
    "oldPrice": 1240,
    "rating": 4.5,
    "image": "assets/images/product-1335.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1336",
    "name": "Luxe Cleanser Peach",
    "category": "Skincare",
    "price": 1180,
    "oldPrice": 1380,
    "rating": 4.6,
    "image": "assets/images/product-1336.svg",
    "description": "Premium cleanser designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1337",
    "name": "Velvet Moisturizer Rose",
    "category": "Skincare",
    "price": 1220,
    "oldPrice": 1370,
    "rating": 4.4,
    "image": "assets/images/product-1337.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1338",
    "name": "Glow Moisturizer Nude",
    "category": "Skincare",
    "price": 1260,
    "oldPrice": 1360,
    "rating": 4.5,
    "image": "assets/images/product-1338.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1339",
    "name": "Silk Moisturizer Berry",
    "category": "Skincare",
    "price": 1290,
    "oldPrice": 1490,
    "rating": 4.6,
    "image": "assets/images/product-1339.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1340",
    "name": "Luxe Moisturizer Peach",
    "category": "Skincare",
    "price": 1330,
    "oldPrice": 1480,
    "rating": 4.7,
    "image": "assets/images/product-1340.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1341",
    "name": "Radiant Moisturizer Cocoa",
    "category": "Skincare",
    "price": 1370,
    "oldPrice": 1520,
    "rating": 4.8,
    "image": "assets/images/product-1341.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1342",
    "name": "Pure Moisturizer Coral",
    "category": "Skincare",
    "price": 1400,
    "oldPrice": 1600,
    "rating": 4.9,
    "image": "assets/images/product-1342.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1343",
    "name": "Crystal Moisturizer Mocha",
    "category": "Skincare",
    "price": 1440,
    "oldPrice": 1540,
    "rating": 4.3,
    "image": "assets/images/product-1343.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1344",
    "name": "Pro Moisturizer Plum",
    "category": "Skincare",
    "price": 1480,
    "oldPrice": 1730,
    "rating": 4.4,
    "image": "assets/images/product-1344.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1345",
    "name": "Bloom Moisturizer Pink",
    "category": "Skincare",
    "price": 1520,
    "oldPrice": 1620,
    "rating": 4.5,
    "image": "assets/images/product-1345.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1346",
    "name": "Nude Moisturizer Honey",
    "category": "Skincare",
    "price": 1550,
    "oldPrice": 1800,
    "rating": 4.6,
    "image": "assets/images/product-1346.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1347",
    "name": "Velvet Moisturizer Rose",
    "category": "Skincare",
    "price": 1590,
    "oldPrice": 1840,
    "rating": 4.7,
    "image": "assets/images/product-1347.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1348",
    "name": "Glow Moisturizer Nude",
    "category": "Skincare",
    "price": 1630,
    "oldPrice": 1730,
    "rating": 4.8,
    "image": "assets/images/product-1348.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1349",
    "name": "Silk Moisturizer Berry",
    "category": "Skincare",
    "price": 1660,
    "oldPrice": 1910,
    "rating": 4.9,
    "image": "assets/images/product-1349.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1350",
    "name": "Luxe Moisturizer Peach",
    "category": "Skincare",
    "price": 1700,
    "oldPrice": 1950,
    "rating": 4.3,
    "image": "assets/images/product-1350.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1351",
    "name": "Radiant Moisturizer Cocoa",
    "category": "Skincare",
    "price": 1740,
    "oldPrice": 1890,
    "rating": 4.4,
    "image": "assets/images/product-1351.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1352",
    "name": "Pure Moisturizer Coral",
    "category": "Skincare",
    "price": 1770,
    "oldPrice": 1970,
    "rating": 4.5,
    "image": "assets/images/product-1352.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1353",
    "name": "Crystal Moisturizer Mocha",
    "category": "Skincare",
    "price": 1810,
    "oldPrice": 2010,
    "rating": 4.6,
    "image": "assets/images/product-1353.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1354",
    "name": "Pro Moisturizer Plum",
    "category": "Skincare",
    "price": 1850,
    "oldPrice": 1950,
    "rating": 4.7,
    "image": "assets/images/product-1354.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1355",
    "name": "Bloom Moisturizer Pink",
    "category": "Skincare",
    "price": 1880,
    "oldPrice": 2080,
    "rating": 4.8,
    "image": "assets/images/product-1355.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1356",
    "name": "Nude Moisturizer Honey",
    "category": "Skincare",
    "price": 1920,
    "oldPrice": 2170,
    "rating": 4.9,
    "image": "assets/images/product-1356.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1357",
    "name": "Velvet Moisturizer Rose",
    "category": "Skincare",
    "price": 1960,
    "oldPrice": 2060,
    "rating": 4.3,
    "image": "assets/images/product-1357.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1358",
    "name": "Glow Moisturizer Nude",
    "category": "Skincare",
    "price": 2000,
    "oldPrice": 2150,
    "rating": 4.4,
    "image": "assets/images/product-1358.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1359",
    "name": "Silk Moisturizer Berry",
    "category": "Skincare",
    "price": 2030,
    "oldPrice": 2230,
    "rating": 4.5,
    "image": "assets/images/product-1359.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1360",
    "name": "Luxe Moisturizer Peach",
    "category": "Skincare",
    "price": 2070,
    "oldPrice": 2220,
    "rating": 4.6,
    "image": "assets/images/product-1360.svg",
    "description": "Premium moisturizer designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1361",
    "name": "Velvet Serum Rose",
    "category": "Skincare",
    "price": 2110,
    "oldPrice": 2260,
    "rating": 4.4,
    "image": "assets/images/product-1361.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1362",
    "name": "Glow Serum Nude",
    "category": "Skincare",
    "price": 2140,
    "oldPrice": 2340,
    "rating": 4.5,
    "image": "assets/images/product-1362.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1363",
    "name": "Silk Serum Berry",
    "category": "Skincare",
    "price": 380,
    "oldPrice": 580,
    "rating": 4.6,
    "image": "assets/images/product-1363.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1364",
    "name": "Luxe Serum Peach",
    "category": "Skincare",
    "price": 420,
    "oldPrice": 670,
    "rating": 4.7,
    "image": "assets/images/product-1364.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1365",
    "name": "Radiant Serum Cocoa",
    "category": "Skincare",
    "price": 460,
    "oldPrice": 660,
    "rating": 4.8,
    "image": "assets/images/product-1365.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1366",
    "name": "Pure Serum Coral",
    "category": "Skincare",
    "price": 490,
    "oldPrice": 690,
    "rating": 4.9,
    "image": "assets/images/product-1366.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1367",
    "name": "Crystal Serum Mocha",
    "category": "Skincare",
    "price": 530,
    "oldPrice": 680,
    "rating": 4.3,
    "image": "assets/images/product-1367.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1368",
    "name": "Pro Serum Plum",
    "category": "Skincare",
    "price": 570,
    "oldPrice": 670,
    "rating": 4.4,
    "image": "assets/images/product-1368.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1369",
    "name": "Bloom Serum Pink",
    "category": "Skincare",
    "price": 600,
    "oldPrice": 750,
    "rating": 4.5,
    "image": "assets/images/product-1369.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1370",
    "name": "Nude Serum Honey",
    "category": "Skincare",
    "price": 640,
    "oldPrice": 740,
    "rating": 4.6,
    "image": "assets/images/product-1370.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1371",
    "name": "Velvet Serum Rose",
    "category": "Skincare",
    "price": 680,
    "oldPrice": 930,
    "rating": 4.7,
    "image": "assets/images/product-1371.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1372",
    "name": "Glow Serum Nude",
    "category": "Skincare",
    "price": 710,
    "oldPrice": 960,
    "rating": 4.8,
    "image": "assets/images/product-1372.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1373",
    "name": "Silk Serum Berry",
    "category": "Skincare",
    "price": 750,
    "oldPrice": 1000,
    "rating": 4.9,
    "image": "assets/images/product-1373.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1374",
    "name": "Luxe Serum Peach",
    "category": "Skincare",
    "price": 790,
    "oldPrice": 890,
    "rating": 4.3,
    "image": "assets/images/product-1374.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1375",
    "name": "Radiant Serum Cocoa",
    "category": "Skincare",
    "price": 820,
    "oldPrice": 1020,
    "rating": 4.4,
    "image": "assets/images/product-1375.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1376",
    "name": "Pure Serum Coral",
    "category": "Skincare",
    "price": 860,
    "oldPrice": 1060,
    "rating": 4.5,
    "image": "assets/images/product-1376.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1377",
    "name": "Crystal Serum Mocha",
    "category": "Skincare",
    "price": 900,
    "oldPrice": 1000,
    "rating": 4.6,
    "image": "assets/images/product-1377.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1378",
    "name": "Pro Serum Plum",
    "category": "Skincare",
    "price": 940,
    "oldPrice": 1040,
    "rating": 4.7,
    "image": "assets/images/product-1378.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1379",
    "name": "Bloom Serum Pink",
    "category": "Skincare",
    "price": 970,
    "oldPrice": 1170,
    "rating": 4.8,
    "image": "assets/images/product-1379.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1380",
    "name": "Nude Serum Honey",
    "category": "Skincare",
    "price": 1010,
    "oldPrice": 1210,
    "rating": 4.9,
    "image": "assets/images/product-1380.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1381",
    "name": "Velvet Serum Rose",
    "category": "Skincare",
    "price": 1050,
    "oldPrice": 1250,
    "rating": 4.3,
    "image": "assets/images/product-1381.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1382",
    "name": "Glow Serum Nude",
    "category": "Skincare",
    "price": 1080,
    "oldPrice": 1180,
    "rating": 4.4,
    "image": "assets/images/product-1382.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1383",
    "name": "Silk Serum Berry",
    "category": "Skincare",
    "price": 1120,
    "oldPrice": 1220,
    "rating": 4.5,
    "image": "assets/images/product-1383.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1384",
    "name": "Luxe Serum Peach",
    "category": "Skincare",
    "price": 1160,
    "oldPrice": 1360,
    "rating": 4.6,
    "image": "assets/images/product-1384.svg",
    "description": "Premium serum designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1385",
    "name": "Velvet Face Mask Rose",
    "category": "Skincare",
    "price": 1200,
    "oldPrice": 1350,
    "rating": 4.4,
    "image": "assets/images/product-1385.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1386",
    "name": "Glow Face Mask Nude",
    "category": "Skincare",
    "price": 1230,
    "oldPrice": 1430,
    "rating": 4.5,
    "image": "assets/images/product-1386.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1387",
    "name": "Silk Face Mask Berry",
    "category": "Skincare",
    "price": 1270,
    "oldPrice": 1520,
    "rating": 4.6,
    "image": "assets/images/product-1387.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1388",
    "name": "Luxe Face Mask Peach",
    "category": "Skincare",
    "price": 1310,
    "oldPrice": 1510,
    "rating": 4.7,
    "image": "assets/images/product-1388.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1389",
    "name": "Radiant Face Mask Cocoa",
    "category": "Skincare",
    "price": 1340,
    "oldPrice": 1490,
    "rating": 4.8,
    "image": "assets/images/product-1389.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1390",
    "name": "Pure Face Mask Coral",
    "category": "Skincare",
    "price": 1380,
    "oldPrice": 1580,
    "rating": 4.9,
    "image": "assets/images/product-1390.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1391",
    "name": "Crystal Face Mask Mocha",
    "category": "Skincare",
    "price": 1420,
    "oldPrice": 1520,
    "rating": 4.3,
    "image": "assets/images/product-1391.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1392",
    "name": "Pro Face Mask Plum",
    "category": "Skincare",
    "price": 1450,
    "oldPrice": 1600,
    "rating": 4.4,
    "image": "assets/images/product-1392.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1393",
    "name": "Bloom Face Mask Pink",
    "category": "Skincare",
    "price": 1490,
    "oldPrice": 1590,
    "rating": 4.5,
    "image": "assets/images/product-1393.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1394",
    "name": "Nude Face Mask Honey",
    "category": "Skincare",
    "price": 1530,
    "oldPrice": 1780,
    "rating": 4.6,
    "image": "assets/images/product-1394.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1395",
    "name": "Velvet Face Mask Rose",
    "category": "Skincare",
    "price": 1560,
    "oldPrice": 1660,
    "rating": 4.7,
    "image": "assets/images/product-1395.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1396",
    "name": "Glow Face Mask Nude",
    "category": "Skincare",
    "price": 1600,
    "oldPrice": 1800,
    "rating": 4.8,
    "image": "assets/images/product-1396.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1397",
    "name": "Silk Face Mask Berry",
    "category": "Skincare",
    "price": 1640,
    "oldPrice": 1790,
    "rating": 4.9,
    "image": "assets/images/product-1397.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1398",
    "name": "Luxe Face Mask Peach",
    "category": "Skincare",
    "price": 1680,
    "oldPrice": 1930,
    "rating": 4.3,
    "image": "assets/images/product-1398.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1399",
    "name": "Radiant Face Mask Cocoa",
    "category": "Skincare",
    "price": 1710,
    "oldPrice": 1960,
    "rating": 4.4,
    "image": "assets/images/product-1399.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1400",
    "name": "Pure Face Mask Coral",
    "category": "Skincare",
    "price": 1750,
    "oldPrice": 1900,
    "rating": 4.5,
    "image": "assets/images/product-1400.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1401",
    "name": "Crystal Face Mask Mocha",
    "category": "Skincare",
    "price": 1790,
    "oldPrice": 1890,
    "rating": 4.6,
    "image": "assets/images/product-1401.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1402",
    "name": "Pro Face Mask Plum",
    "category": "Skincare",
    "price": 1820,
    "oldPrice": 1970,
    "rating": 4.7,
    "image": "assets/images/product-1402.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1403",
    "name": "Bloom Face Mask Pink",
    "category": "Skincare",
    "price": 1860,
    "oldPrice": 2060,
    "rating": 4.8,
    "image": "assets/images/product-1403.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1404",
    "name": "Nude Face Mask Honey",
    "category": "Skincare",
    "price": 1900,
    "oldPrice": 2050,
    "rating": 4.9,
    "image": "assets/images/product-1404.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1405",
    "name": "Velvet Face Mask Rose",
    "category": "Skincare",
    "price": 1940,
    "oldPrice": 2190,
    "rating": 4.3,
    "image": "assets/images/product-1405.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1406",
    "name": "Glow Face Mask Nude",
    "category": "Skincare",
    "price": 1970,
    "oldPrice": 2120,
    "rating": 4.4,
    "image": "assets/images/product-1406.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1407",
    "name": "Silk Face Mask Berry",
    "category": "Skincare",
    "price": 2010,
    "oldPrice": 2210,
    "rating": 4.5,
    "image": "assets/images/product-1407.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1408",
    "name": "Luxe Face Mask Peach",
    "category": "Skincare",
    "price": 2050,
    "oldPrice": 2300,
    "rating": 4.6,
    "image": "assets/images/product-1408.svg",
    "description": "Premium face mask designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1409",
    "name": "Velvet Makeup Brush Set Rose",
    "category": "Tools",
    "price": 2080,
    "oldPrice": 2330,
    "rating": 4.4,
    "image": "assets/images/product-1409.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1410",
    "name": "Glow Makeup Brush Set Nude",
    "category": "Tools",
    "price": 2120,
    "oldPrice": 2220,
    "rating": 4.5,
    "image": "assets/images/product-1410.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1411",
    "name": "Silk Makeup Brush Set Berry",
    "category": "Tools",
    "price": 360,
    "oldPrice": 510,
    "rating": 4.6,
    "image": "assets/images/product-1411.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1412",
    "name": "Luxe Makeup Brush Set Peach",
    "category": "Tools",
    "price": 390,
    "oldPrice": 490,
    "rating": 4.7,
    "image": "assets/images/product-1412.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1413",
    "name": "Radiant Makeup Brush Set Cocoa",
    "category": "Tools",
    "price": 430,
    "oldPrice": 630,
    "rating": 4.8,
    "image": "assets/images/product-1413.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1414",
    "name": "Pure Makeup Brush Set Coral",
    "category": "Tools",
    "price": 470,
    "oldPrice": 570,
    "rating": 4.9,
    "image": "assets/images/product-1414.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1415",
    "name": "Crystal Makeup Brush Set Mocha",
    "category": "Tools",
    "price": 500,
    "oldPrice": 700,
    "rating": 4.3,
    "image": "assets/images/product-1415.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1416",
    "name": "Pro Makeup Brush Set Plum",
    "category": "Tools",
    "price": 540,
    "oldPrice": 690,
    "rating": 4.4,
    "image": "assets/images/product-1416.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1417",
    "name": "Bloom Makeup Brush Set Pink",
    "category": "Tools",
    "price": 580,
    "oldPrice": 830,
    "rating": 4.5,
    "image": "assets/images/product-1417.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1418",
    "name": "Nude Makeup Brush Set Honey",
    "category": "Tools",
    "price": 620,
    "oldPrice": 820,
    "rating": 4.6,
    "image": "assets/images/product-1418.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1419",
    "name": "Velvet Makeup Brush Set Rose",
    "category": "Tools",
    "price": 650,
    "oldPrice": 750,
    "rating": 4.7,
    "image": "assets/images/product-1419.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1420",
    "name": "Glow Makeup Brush Set Nude",
    "category": "Tools",
    "price": 690,
    "oldPrice": 790,
    "rating": 4.8,
    "image": "assets/images/product-1420.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1421",
    "name": "Silk Makeup Brush Set Berry",
    "category": "Tools",
    "price": 730,
    "oldPrice": 930,
    "rating": 4.9,
    "image": "assets/images/product-1421.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1422",
    "name": "Luxe Makeup Brush Set Peach",
    "category": "Tools",
    "price": 760,
    "oldPrice": 910,
    "rating": 4.3,
    "image": "assets/images/product-1422.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1423",
    "name": "Radiant Makeup Brush Set Cocoa",
    "category": "Tools",
    "price": 800,
    "oldPrice": 1050,
    "rating": 4.4,
    "image": "assets/images/product-1423.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1424",
    "name": "Pure Makeup Brush Set Coral",
    "category": "Tools",
    "price": 840,
    "oldPrice": 940,
    "rating": 4.5,
    "image": "assets/images/product-1424.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1425",
    "name": "Crystal Makeup Brush Set Mocha",
    "category": "Tools",
    "price": 880,
    "oldPrice": 1130,
    "rating": 4.6,
    "image": "assets/images/product-1425.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1426",
    "name": "Pro Makeup Brush Set Plum",
    "category": "Tools",
    "price": 910,
    "oldPrice": 1110,
    "rating": 4.7,
    "image": "assets/images/product-1426.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1427",
    "name": "Bloom Makeup Brush Set Pink",
    "category": "Tools",
    "price": 950,
    "oldPrice": 1050,
    "rating": 4.8,
    "image": "assets/images/product-1427.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1428",
    "name": "Nude Makeup Brush Set Honey",
    "category": "Tools",
    "price": 990,
    "oldPrice": 1090,
    "rating": 4.9,
    "image": "assets/images/product-1428.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1429",
    "name": "Velvet Makeup Brush Set Rose",
    "category": "Tools",
    "price": 1020,
    "oldPrice": 1270,
    "rating": 4.3,
    "image": "assets/images/product-1429.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1430",
    "name": "Glow Makeup Brush Set Nude",
    "category": "Tools",
    "price": 1060,
    "oldPrice": 1310,
    "rating": 4.4,
    "image": "assets/images/product-1430.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1431",
    "name": "Silk Makeup Brush Set Berry",
    "category": "Tools",
    "price": 1100,
    "oldPrice": 1300,
    "rating": 4.5,
    "image": "assets/images/product-1431.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1432",
    "name": "Luxe Makeup Brush Set Peach",
    "category": "Tools",
    "price": 1130,
    "oldPrice": 1330,
    "rating": 4.6,
    "image": "assets/images/product-1432.svg",
    "description": "Premium makeup brush set designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1433",
    "name": "Velvet Beauty Sponge Rose",
    "category": "Tools",
    "price": 1170,
    "oldPrice": 1370,
    "rating": 4.4,
    "image": "assets/images/product-1433.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1434",
    "name": "Glow Beauty Sponge Nude",
    "category": "Tools",
    "price": 1210,
    "oldPrice": 1410,
    "rating": 4.5,
    "image": "assets/images/product-1434.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1435",
    "name": "Silk Beauty Sponge Berry",
    "category": "Tools",
    "price": 1240,
    "oldPrice": 1490,
    "rating": 4.6,
    "image": "assets/images/product-1435.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1436",
    "name": "Luxe Beauty Sponge Peach",
    "category": "Tools",
    "price": 1280,
    "oldPrice": 1530,
    "rating": 4.7,
    "image": "assets/images/product-1436.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1437",
    "name": "Radiant Beauty Sponge Cocoa",
    "category": "Tools",
    "price": 1320,
    "oldPrice": 1420,
    "rating": 4.8,
    "image": "assets/images/product-1437.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1438",
    "name": "Pure Beauty Sponge Coral",
    "category": "Tools",
    "price": 1360,
    "oldPrice": 1610,
    "rating": 4.9,
    "image": "assets/images/product-1438.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1439",
    "name": "Crystal Beauty Sponge Mocha",
    "category": "Tools",
    "price": 1390,
    "oldPrice": 1540,
    "rating": 4.3,
    "image": "assets/images/product-1439.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1440",
    "name": "Pro Beauty Sponge Plum",
    "category": "Tools",
    "price": 1430,
    "oldPrice": 1580,
    "rating": 4.4,
    "image": "assets/images/product-1440.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1441",
    "name": "Bloom Beauty Sponge Pink",
    "category": "Tools",
    "price": 1470,
    "oldPrice": 1720,
    "rating": 4.5,
    "image": "assets/images/product-1441.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1442",
    "name": "Nude Beauty Sponge Honey",
    "category": "Tools",
    "price": 1500,
    "oldPrice": 1600,
    "rating": 4.6,
    "image": "assets/images/product-1442.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1443",
    "name": "Velvet Beauty Sponge Rose",
    "category": "Tools",
    "price": 1540,
    "oldPrice": 1790,
    "rating": 4.7,
    "image": "assets/images/product-1443.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1444",
    "name": "Glow Beauty Sponge Nude",
    "category": "Tools",
    "price": 1580,
    "oldPrice": 1680,
    "rating": 4.8,
    "image": "assets/images/product-1444.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1445",
    "name": "Silk Beauty Sponge Berry",
    "category": "Tools",
    "price": 1620,
    "oldPrice": 1870,
    "rating": 4.9,
    "image": "assets/images/product-1445.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1446",
    "name": "Luxe Beauty Sponge Peach",
    "category": "Tools",
    "price": 1650,
    "oldPrice": 1800,
    "rating": 4.3,
    "image": "assets/images/product-1446.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1447",
    "name": "Radiant Beauty Sponge Cocoa",
    "category": "Tools",
    "price": 1690,
    "oldPrice": 1890,
    "rating": 4.4,
    "image": "assets/images/product-1447.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1448",
    "name": "Pure Beauty Sponge Coral",
    "category": "Tools",
    "price": 1730,
    "oldPrice": 1880,
    "rating": 4.5,
    "image": "assets/images/product-1448.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1449",
    "name": "Crystal Beauty Sponge Mocha",
    "category": "Tools",
    "price": 1760,
    "oldPrice": 1860,
    "rating": 4.6,
    "image": "assets/images/product-1449.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1450",
    "name": "Pro Beauty Sponge Plum",
    "category": "Tools",
    "price": 1800,
    "oldPrice": 1950,
    "rating": 4.7,
    "image": "assets/images/product-1450.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1451",
    "name": "Bloom Beauty Sponge Pink",
    "category": "Tools",
    "price": 1840,
    "oldPrice": 2090,
    "rating": 4.8,
    "image": "assets/images/product-1451.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1452",
    "name": "Nude Beauty Sponge Honey",
    "category": "Tools",
    "price": 1870,
    "oldPrice": 2120,
    "rating": 4.9,
    "image": "assets/images/product-1452.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1453",
    "name": "Velvet Beauty Sponge Rose",
    "category": "Tools",
    "price": 1910,
    "oldPrice": 2060,
    "rating": 4.3,
    "image": "assets/images/product-1453.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1454",
    "name": "Glow Beauty Sponge Nude",
    "category": "Tools",
    "price": 1950,
    "oldPrice": 2150,
    "rating": 4.4,
    "image": "assets/images/product-1454.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1455",
    "name": "Silk Beauty Sponge Berry",
    "category": "Tools",
    "price": 1980,
    "oldPrice": 2080,
    "rating": 4.5,
    "image": "assets/images/product-1455.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1456",
    "name": "Luxe Beauty Sponge Peach",
    "category": "Tools",
    "price": 2020,
    "oldPrice": 2220,
    "rating": 4.6,
    "image": "assets/images/product-1456.svg",
    "description": "Premium beauty sponge designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1457",
    "name": "Velvet Eyelash Curler Rose",
    "category": "Tools",
    "price": 2060,
    "oldPrice": 2210,
    "rating": 4.4,
    "image": "assets/images/product-1457.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1458",
    "name": "Glow Eyelash Curler Nude",
    "category": "Tools",
    "price": 2100,
    "oldPrice": 2350,
    "rating": 4.5,
    "image": "assets/images/product-1458.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1459",
    "name": "Silk Eyelash Curler Berry",
    "category": "Tools",
    "price": 2130,
    "oldPrice": 2380,
    "rating": 4.6,
    "image": "assets/images/product-1459.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1460",
    "name": "Luxe Eyelash Curler Peach",
    "category": "Tools",
    "price": 370,
    "oldPrice": 570,
    "rating": 4.7,
    "image": "assets/images/product-1460.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1461",
    "name": "Radiant Eyelash Curler Cocoa",
    "category": "Tools",
    "price": 410,
    "oldPrice": 510,
    "rating": 4.8,
    "image": "assets/images/product-1461.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1462",
    "name": "Pure Eyelash Curler Coral",
    "category": "Tools",
    "price": 440,
    "oldPrice": 690,
    "rating": 4.9,
    "image": "assets/images/product-1462.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1463",
    "name": "Crystal Eyelash Curler Mocha",
    "category": "Tools",
    "price": 480,
    "oldPrice": 730,
    "rating": 4.3,
    "image": "assets/images/product-1463.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1464",
    "name": "Pro Eyelash Curler Plum",
    "category": "Tools",
    "price": 520,
    "oldPrice": 720,
    "rating": 4.4,
    "image": "assets/images/product-1464.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1465",
    "name": "Bloom Eyelash Curler Pink",
    "category": "Tools",
    "price": 560,
    "oldPrice": 710,
    "rating": 4.5,
    "image": "assets/images/product-1465.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1466",
    "name": "Nude Eyelash Curler Honey",
    "category": "Tools",
    "price": 590,
    "oldPrice": 690,
    "rating": 4.6,
    "image": "assets/images/product-1466.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1467",
    "name": "Velvet Eyelash Curler Rose",
    "category": "Tools",
    "price": 630,
    "oldPrice": 830,
    "rating": 4.7,
    "image": "assets/images/product-1467.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1468",
    "name": "Glow Eyelash Curler Nude",
    "category": "Tools",
    "price": 670,
    "oldPrice": 820,
    "rating": 4.8,
    "image": "assets/images/product-1468.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1469",
    "name": "Silk Eyelash Curler Berry",
    "category": "Tools",
    "price": 700,
    "oldPrice": 950,
    "rating": 4.9,
    "image": "assets/images/product-1469.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1470",
    "name": "Luxe Eyelash Curler Peach",
    "category": "Tools",
    "price": 740,
    "oldPrice": 990,
    "rating": 4.3,
    "image": "assets/images/product-1470.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1471",
    "name": "Radiant Eyelash Curler Cocoa",
    "category": "Tools",
    "price": 780,
    "oldPrice": 880,
    "rating": 4.4,
    "image": "assets/images/product-1471.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1472",
    "name": "Pure Eyelash Curler Coral",
    "category": "Tools",
    "price": 810,
    "oldPrice": 1010,
    "rating": 4.5,
    "image": "assets/images/product-1472.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1473",
    "name": "Crystal Eyelash Curler Mocha",
    "category": "Tools",
    "price": 850,
    "oldPrice": 1100,
    "rating": 4.6,
    "image": "assets/images/product-1473.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1474",
    "name": "Pro Eyelash Curler Plum",
    "category": "Tools",
    "price": 890,
    "oldPrice": 990,
    "rating": 4.7,
    "image": "assets/images/product-1474.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1475",
    "name": "Bloom Eyelash Curler Pink",
    "category": "Tools",
    "price": 920,
    "oldPrice": 1020,
    "rating": 4.8,
    "image": "assets/images/product-1475.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1476",
    "name": "Nude Eyelash Curler Honey",
    "category": "Tools",
    "price": 960,
    "oldPrice": 1210,
    "rating": 4.9,
    "image": "assets/images/product-1476.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1477",
    "name": "Velvet Eyelash Curler Rose",
    "category": "Tools",
    "price": 1000,
    "oldPrice": 1100,
    "rating": 4.3,
    "image": "assets/images/product-1477.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1478",
    "name": "Glow Eyelash Curler Nude",
    "category": "Tools",
    "price": 1040,
    "oldPrice": 1140,
    "rating": 4.4,
    "image": "assets/images/product-1478.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1479",
    "name": "Silk Eyelash Curler Berry",
    "category": "Tools",
    "price": 1070,
    "oldPrice": 1220,
    "rating": 4.5,
    "image": "assets/images/product-1479.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1480",
    "name": "Luxe Eyelash Curler Peach",
    "category": "Tools",
    "price": 1110,
    "oldPrice": 1210,
    "rating": 4.6,
    "image": "assets/images/product-1480.svg",
    "description": "Premium eyelash curler designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1481",
    "name": "Velvet Compact Mirror Rose",
    "category": "Tools",
    "price": 1150,
    "oldPrice": 1400,
    "rating": 4.4,
    "image": "assets/images/product-1481.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1482",
    "name": "Glow Compact Mirror Nude",
    "category": "Tools",
    "price": 1180,
    "oldPrice": 1280,
    "rating": 4.5,
    "image": "assets/images/product-1482.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1483",
    "name": "Silk Compact Mirror Berry",
    "category": "Tools",
    "price": 1220,
    "oldPrice": 1420,
    "rating": 4.6,
    "image": "assets/images/product-1483.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1484",
    "name": "Luxe Compact Mirror Peach",
    "category": "Tools",
    "price": 1260,
    "oldPrice": 1410,
    "rating": 4.7,
    "image": "assets/images/product-1484.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1485",
    "name": "Radiant Compact Mirror Cocoa",
    "category": "Tools",
    "price": 1300,
    "oldPrice": 1400,
    "rating": 4.8,
    "image": "assets/images/product-1485.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1486",
    "name": "Pure Compact Mirror Coral",
    "category": "Tools",
    "price": 1330,
    "oldPrice": 1580,
    "rating": 4.9,
    "image": "assets/images/product-1486.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1487",
    "name": "Crystal Compact Mirror Mocha",
    "category": "Tools",
    "price": 1370,
    "oldPrice": 1570,
    "rating": 4.3,
    "image": "assets/images/product-1487.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1488",
    "name": "Pro Compact Mirror Plum",
    "category": "Tools",
    "price": 1410,
    "oldPrice": 1510,
    "rating": 4.4,
    "image": "assets/images/product-1488.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1489",
    "name": "Bloom Compact Mirror Pink",
    "category": "Tools",
    "price": 1440,
    "oldPrice": 1640,
    "rating": 4.5,
    "image": "assets/images/product-1489.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1490",
    "name": "Nude Compact Mirror Honey",
    "category": "Tools",
    "price": 1480,
    "oldPrice": 1680,
    "rating": 4.6,
    "image": "assets/images/product-1490.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1491",
    "name": "Velvet Compact Mirror Rose",
    "category": "Tools",
    "price": 1520,
    "oldPrice": 1720,
    "rating": 4.7,
    "image": "assets/images/product-1491.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1492",
    "name": "Glow Compact Mirror Nude",
    "category": "Tools",
    "price": 1550,
    "oldPrice": 1700,
    "rating": 4.8,
    "image": "assets/images/product-1492.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1493",
    "name": "Silk Compact Mirror Berry",
    "category": "Tools",
    "price": 1590,
    "oldPrice": 1690,
    "rating": 4.9,
    "image": "assets/images/product-1493.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1494",
    "name": "Luxe Compact Mirror Peach",
    "category": "Tools",
    "price": 1630,
    "oldPrice": 1780,
    "rating": 4.3,
    "image": "assets/images/product-1494.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1495",
    "name": "Radiant Compact Mirror Cocoa",
    "category": "Tools",
    "price": 1660,
    "oldPrice": 1810,
    "rating": 4.4,
    "image": "assets/images/product-1495.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1496",
    "name": "Pure Compact Mirror Coral",
    "category": "Tools",
    "price": 1700,
    "oldPrice": 1900,
    "rating": 4.5,
    "image": "assets/images/product-1496.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1497",
    "name": "Crystal Compact Mirror Mocha",
    "category": "Tools",
    "price": 1740,
    "oldPrice": 1890,
    "rating": 4.6,
    "image": "assets/images/product-1497.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1498",
    "name": "Pro Compact Mirror Plum",
    "category": "Tools",
    "price": 1780,
    "oldPrice": 1980,
    "rating": 4.7,
    "image": "assets/images/product-1498.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1499",
    "name": "Bloom Compact Mirror Pink",
    "category": "Tools",
    "price": 1810,
    "oldPrice": 1960,
    "rating": 4.8,
    "image": "assets/images/product-1499.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1500",
    "name": "Nude Compact Mirror Honey",
    "category": "Tools",
    "price": 1850,
    "oldPrice": 2000,
    "rating": 4.9,
    "image": "assets/images/product-1500.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1501",
    "name": "Velvet Compact Mirror Rose",
    "category": "Tools",
    "price": 1890,
    "oldPrice": 1990,
    "rating": 4.3,
    "image": "assets/images/product-1501.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1502",
    "name": "Glow Compact Mirror Nude",
    "category": "Tools",
    "price": 1920,
    "oldPrice": 2020,
    "rating": 4.4,
    "image": "assets/images/product-1502.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1503",
    "name": "Silk Compact Mirror Berry",
    "category": "Tools",
    "price": 1960,
    "oldPrice": 2210,
    "rating": 4.5,
    "image": "assets/images/product-1503.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  },
  {
    "id": "1504",
    "name": "Luxe Compact Mirror Peach",
    "category": "Tools",
    "price": 2000,
    "oldPrice": 2100,
    "rating": 4.6,
    "image": "assets/images/product-1504.svg",
    "description": "Premium compact mirror designed for a smooth, comfortable and beautiful finish."
  }
];