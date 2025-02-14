    var Spark = window.Spark || { cmd: [] };

    Spark.temp_modified = "10.02.2025 14:35"
    Spark.temp_author = "cwahl";

    Spark.loadTime = new Date().getTime(); 
    Spark.headerBiddingSlots = new Array();
    Spark.nonHeaderBiddingSlots = new Array();
    Spark.amazonSlotsArray = new Array();
    Spark.additionalAmazonSlotsArray = new Array();
    Spark.adslot = new Object();
    Spark.boolCMP = false;
    Spark.boolPermutive = false;
    Spark.sparktargetings = new Object();
    Spark.rubicon = false;
    Spark.amazon = false;
    Spark.startBool =false;
    Spark.boolDefineSlots = false;
    Spark.picountBool = false;
    Spark.sizeMapping = new Object();
    Spark.rubicon_size_mapping = new Object();
    Spark.tcData = new Object();
    Spark.event_consent = new CustomEvent("consentReceived", {detail: Spark.tcData}); 
    Spark.event_permutive = new CustomEvent("permutiveReady", {detail: Spark.tcData});
    Spark.event_hbInstream = new CustomEvent("hbInstreamReady", {detail: Spark.tcData});
    Spark.func_consent = [];
    Spark.bool_consent = false;
    Spark.func_permutive = [];
    Spark.bool_permutive = false;
    Spark.func_hbInstream = [];
    Spark.bool_hbInstream = false;
    Spark.device = "sta";
    Spark.mob_interstitial = false;
    Spark.adslots_norefresh = new Array();
    Spark.permutiveSegments = new Array();
    Spark.refrehParameter = new Array();
    Spark.allSlots = new Array();
    Spark.debuggingAllSlots = new Array();
    Spark.targetings = new Object();
    Spark.adRefreshDisable = false;
    Spark.disableAdSlot = false;
    Spark.mob_anchor = false;  
    Spark.prebidRan = false;
    Spark.HBParameter = false;
    Spark.amazonRequestBool = false;
    Spark.deactivateGeoedge = false;
    Spark.deactivateRubicon = false;
    Spark.deactivateHbInstream  = false;
    Spark.deactivateAmazon = false;
    Spark.deactivatePermutive =false;
    Spark.deactivateAssertiveYield =false;
    Spark.deactivateIntoWow = false;
    Spark.deactivatePubmatic =false;
    Spark.analogExclusiveParameter = false;
    Spark.deactivateAdRequest = false;
    Spark.deactivateUtiq = false;
    Spark.exclusive = false;
    Spark.prerollHb = false;
    Spark.displaySLotIdArray = new Array();
    Spark.ppid = "";
    Spark.ppidBool = false;
    Spark.iab_str = "-1";
    Spark.video = [];
    Spark.artixCallActive  = false;
    Spark.artixcallError = false;
    Spark.funke_contextual = "-1";
    Spark.audixCallActive  = false;
    Spark.audixcallError = false;
    Spark.audix_str = "-1";
    Spark.domain_user_id = "-1"
    Spark.ad_refresh_order_ids = [];
    Spark.id5 = "";
    Spark.criteo = "";
    Spark.hb_targets = "";
    Spark.amazon_targets = "";
    Spark.func = function(){};
    Spark.funcPerm = function(){};
    Spark.sites = { // header-height,(-)marginLeft, marginLeftSkyLeft, marginLeftSkyRight,left
                    'myself\.de': [101,680] ,
                    'donna-magazin\.de': [101,680],
                    'bildderfrau\.de': [119, 680, 0, 0],
                    //'gofeminin\.de': [0,29,200,200],
                    'gofeminin\.de': [0,700,0,0],
                    '4players\.de': [30,660,0,0],
                    'release\.4players\.de': [30,660,0,0],
                    'funke\.fun': [101],
                    'onmeda\.de': [60,10, 300, 990],
                    'eatclub\.tv': [113,1, 0, 0, 1160],
                    'wmn\.de': [83,1, 0, 0, 1470],
                    'eatclub\.de': [200,1, 0, 0, 1510],
                    'wmn\.dbn\.funkedigital\.de': [83,1, 0, 0, 1160],
                    'wordpress\.cloud\.funkedigital\.de': [83,1, 0, 0, 1470],
                    'dasmerkichmir\.hoerzu\.de': [0,160],
                    'superhelddarm\.hoerzu\.de': [0,160],
                    'zurruhekommen\.hoerzu\.de': [0,160], 
                    'relaunchdgtls\.hoerzu\.de': [0,356],
                    'hoerzu\.de': [0,436],
                    'futurezone\.de': [83,1, 0, 0, 1160],
                    'selfies\.com': [71,1, 0, 0, 1160],
                    'imtest\.de': [105,1, 0, 0, 1160],
                    'imtest\.dbn-rd\.funkedigital\.de': [105,1, 0, 0, 1160],
                    'imtest\.dbn\.funkedigital\.de': [105,1, 0, 0, 1160], 
                    'funke-entertainment\.de': [0,285,160,160],
                    'stage\.moin\.de': [0,800,0,0],
                    'moin\.de': [0,800,0,0],
                    'berlin-live\.de': [0,800,0,0],
                    'news38\.de': [0,800,0,0],
                    'thueringen24\.de': [0,800,0,0],
                    'derwesten\.de': [0,800,0,0],
                    'sf-prod\.abendblatt\.de': [0,800,0,0],
                    'radioenneperuhr\.de': [72,840,0,0],
                    'radioemscherlippe\.de': [72,840,0,0],
                    'radiobochum\.de': [72,840,0,0],
                    'radiokw\.de': [72,840,0,0],
                    'radiovest\.de': [72,840,0,0],
                    'radiohagen\.de': [72,840,0,0],
                    'radioduisburg\.de': [72,840,0,0],
                    'radioherne\.de': [72,840,0,0],
                    'radiooberhausen\.de': [72,840,0,0],
                    'radiomuelheim\.de': [72,840,0,0],
                    'radiosauerland\.de': [72,840,0,0],
                    'radioessen\.de': [72,840,0,0],
                    'tvdigital\.de': [0,0,0,0],
                    'braunschweiger-zeitung\.de': [0,800,0,0],
                    'harzkurier\.de': [0,800,0,0],
                    'morgenpost\.de': [0,800,0,0],
                    'thueringer-allgemeine\.de': [0,800,0,0],
                    'otz\.de':[0,800,0,0],
                    'tlz\.de':[0,800,0,0],
                    'schlager\.de': [0,800,0,0],
                    'staging\.schlager\.de': [0,800,0,0],
                    'abendblatt\.de':[0,800,0,0], 
                    'waz\.de':[0,800,0,0],   
                    'wp\.de':[0,800,0,0],   
                    'ikz-online\.de':[0,800,0,0],
                    'nrz\.de':[0,800,0,0],
                    'wr\.de':[0,800,0,0],
                    'landidee\.de': [101,680,0,0],
                    '4p\.de': [145,800,0,0],
    
    }
    Spark.cmp_cdid_obj = { //domain -> cdid 
                   //"localhost": "1ab732ac93dd",
                   "4players.de": "7f96a89471f3c",
                   "4p.de": "7f96a89471f3c",
                   "chietoku.jp": "7f96a89471f3c",
                   "derwesten.de": "7f96a89471f3c",
                   "donna-magazin.de": "1ab732ac93dd",
                   "eatclub.tv": "1ab732ac93dd",
                   "eatclub.de": "1ab732ac93dd",
                   "einfachschoen.me": "7f96a89471f3c",
                   "erkaeltet.info": "1ab732ac93dd",
                   "fototest.de": "1ab732ac93dd",
                   "funke.fun": "1ab732ac93dd",
                   "futurezone.de": "7f96a89471f3c",
                   "genialetricks.de": "7f96a89471f3c",
                   "gofeminin.de": "1ab732ac93dd",
                   "heftig.de": "7f96a89471f3c",
                   "herzberatung.de": "1ab732ac93dd",
                   "hoerzu.de": "1ab732ac93dd",
                   "hoerzu.at": "1ab732ac93dd",
                   "hzdevpimcore11at.dcmdev.de":"1ab732ac93dd",
                   "imishin.jp": "bdc0b784a8bf",
                   "imishin.me": "bdc0b784a8bf",
                   "imtest.de": "1ab732ac93dd",
                   "klack.de": "1ab732ac93dd",
                   "kronendach.com": "1ab732ac93dd",
                   "leckerschmecker.me": "7f96a89471f3c",
                   "moin.de": "7f96a89471f3c",
                   "myself.de": "1ab732ac93dd",
                   "news38.de": "7f96a89471f3c",
                   "reviersport.de": "6bc732dca34b",
                   "special-rueckenschmerz.de": "1ab732ac93dd",
                   "selfies.com":"1ab732ac93dd",
                   "thueringen24.de": "7f96a89471f3c",
                   "tvdigital.de": "1ab732ac93dd",
                   "tvdirekt.de": "1ab732ac93dd",
                   "veggieboom.com/de": "7f96a89471f3c",
                   "werstreamt.es": "1ab732ac93dd",
                   "wmn.de": "7f96a89471f3c",
                   "9monate.de": "1ab732ac93dd",
                   "scheidenpilz.com" :"1ab732ac93dd",
                   "hormontherapie-wechseljahre.de" :"1ab732ac93dd",
                   "special-harninkontinenz.de" :"1ab732ac93dd",
                   "haemorriden.net" :"1ab732ac93dd",
                   "gesundheit.de": "1ab732ac93dd",
                   "lifeline.de": "1ab732ac93dd",
                   "abendblatt.de": "8385f61515cf",
                   "braunschweiger-zeitung.de": "53d7eb04bee9",
                   "harzkurier.de": "53d7eb04bee9",
                   "ikz-online.de": "6bc732dca34b",
                   "morgenpost.de": "f2f5f6652559",
                   "nrz.de": "6bc732dca34b",
                   "otz.de": "2455a60500a7",
                   "thueringer-allgemeine.de": "2455a60500a7",
                   "tlz.de": "2455a60500a7",
                   "waz.de": "6bc732dca34b",
                   "wp.de": "6bc732dca34b",
                   "wr.de": "6bc732dca34b",
                   "iconicbook.com":"1ab732ac93dd",
                   "sissikochbuch.de":"1ab732ac93dd",
                   "gong.de":"1ab732ac93dd",
                   "tvfuermich.de":"1ab732ac93dd",
                   "onmeda.de":"1ab732ac93dd",
                   "berlin-live.de":"7f96a89471f3c",
                   "lokalkompass.de":"6bc732dca34b",
                   "bildderfrau.de":"1ab732ac93dd",
                   "stage.futurezone.de":"7f96a89471f3c",
                   "kreuzfahrtguide.com": "8385f61515cf",
                   "bdf.unitb.com":"1ab732ac93dd",
                   "gesundheit.marketingfactory.dev":"1ab732ac93dd",
                   "vipdev.lndo.site":"1ab732ac93dd",
                   "stage-reviersport.tools.funkedigital.de": "6bc732dca34b",
                   "genialetricks.funkedigital.de": "7f96a89471f3c",
                   "lastucerie.fr": "7f96a89471f3c",
                   "marketingfactory.dev":"1ab732ac93dd",
                   "gofeminin.blomstra.community": "1ab732ac93dd",
                   "schlager.de": "7f96a89471f3c",
                   "landidee.info": "1ab732ac93dd",
                   "landidee.de": "1ab732ac93dd",
                   "hzdevpimcore11.dcmdev.de": "1ab732ac93dd",
                   "veggieboom.funkedigital.de":"bdc0b784a8bf",
                   "veggieboom.de":"bdc0b784a8bf",
                   "scrumdiddlyumptious.funkedigital.de":"7f96a89471f3c",
                   "scrumdiddlyumptious.com":"7f96a89471f3c",
                   "riquisimo.funkedigital.de":"7f96a89471f3c",
                   "riquisimo.net":"7f96a89471f3c",
                   "bonap.funkedigital.de":"7f96a89471f3c",
                   "bonap.fr":"7f96a89471f3c",
                   "schlager.funkedigital.de":"7f96a89471f3c",
    }
    Spark.agma_Obj = {                       
                    "hoerzu.de": "hoerzu",
                    "tvdigital.de": "tvdigi",
                    "klack.de": "klack",
                    "werstreamt.es": "werstream",
                    "bildderfrau.de": "bildder",
                    "myself.de": "myself",
                    "donna-magazin.de": "donmag",
                    "beautytv.de": "beauty",
                    "gofeminin.de": "gofemi",
                    "onmeda.de": "onmeda",
                    "gesundheit.de": "gesund",
                    "lifeline.de": "lifeline",
                    "9monate.de": "neumon",
                    "myself.de/gesund": "mysege",
                    "donna-magazin.de/gesundheit": "donges",
                    "bildderfrau.de/gesund": "bilges",
                    "gofeminin.de/gesundheit": "gofges",
                    "haemorriden.net": "haemor",
                    "herzberatung.de": "herzber",
                    "hormontherapie-wechseljahre.de": "howechs",
                    "scheidenpilz.com": "scheipi",
                    "special-harninkontinenz.de": "harnin",
                    "special-rueckenschmerz.de": "specrue",
                    "erkaeltet.info": "erkael",
                    "waz.de": "wazde",
                    "nrz.de": "nrzde",
                    "wr.de": "wrdede",
                    "wp.de": "wpdede",
                    "ikz-online.de": "ikzonl",
                    "derwesten.de": "derwes",
                    "reviersport.de": "reviersp",
                    "lokalkompass.de": "lokalko",
                    "abendblatt.de": "abend",
                    "moin.de": "moin",
                    "braunschweiger-zeitung.de": "braunz",
                    "harzkurier.de": "harz",
                    "otz.de": "otz",
                    "tlz.de": "tlz",
                    "thueringer-allgemeine.de": "thuer",
                    "morgenpost.de": "morgen",
                    "futurezone.de": "future",
                    "wmn.de": "wmn",
                    "4players.de": "4play",
                    "leckerschmecker.me": "lecker",
                    "schlager.de": "schlager",
                    "tvdirekt.de": "tvdir",
                    "eatclub.de": "eatcl",
                    "imtest.de": "imtest",
                    "eatclub.tv": "eatcl",
    }
    Spark.watson_obj = {
    '/automotive and vehicles':[['020000'],['1'], ['1']],
    '/automotive and vehicles/cars':[['020700'],['2'], ['2']],
    '/automotive and vehicles/commercial vehicles':[['020900'],['3'], ['3']],
    '/automotive and vehicles/trucks and suvs/truck accessories':[['021703'],['3'], ['3']],
    '/automotive and vehicles/cars/sedan':[['020711'],['4'], ['4']],
    '/automotive and vehicles/cars/wagon':[['020713'],['5'], ['5']],
    '/automotive and vehicles/trucks and suvs':[['021700'],['6'], ['6']],
    '/automotive and vehicles/trucks and suvs/suvs':[['021702'],['6'], ['6']],
    '/automotive and vehicles/minivan':[['021100'],['7', '13'], ['7', '13']],
    '/automotive and vehicles/campers and rvs':[['020600'],['7'], ['7']],
    '/automotive and vehicles/cars/convertible':[['020703'],['8'], ['8']],
    '/automotive and vehicles/cars/coupe':[['020704'],['9'], ['9']],
    '/automotive and vehicles/cars/crossover':[['020705'],['10'], ['10']],
    '/automotive and vehicles/cars/hatchback':[['020707'],['11'], ['11']],
    '/automotive and vehicles/off-road vehicles':[['021400'],['14'], ['14']],
    '/automotive and vehicles/trucks and suvs/pickup trucks':[['021701'],['15'], ['15']],
    '/automotive and vehicles/cars/diesel':[['020706'],['16'], ['16']],
    '/automotive and vehicles/certified pre-owned':[['020800'],['18'], ['18']],
    '/automotive and vehicles/cars/vintage cars':[['020712'],['19'], ['19']],
    '/automotive and vehicles/electric vehicles':[['021000'],['22'], ['22']],
    '/automotive and vehicles/cars/hybrid':[['020708'],['22'], ['22']],
    '/automotive and vehicles/cars/luxury':[['020709'],['23'], ['23']],
    '/automotive and vehicles/cars/performance vehicles':[['020710'],['24'], ['24']],
    '/automotive and vehicles/cars/car culture':[['020701'],['25'], ['25']],
    '/technology and computing/consumer electronics/camera and photo equipment/cameras and camcorders/cameras':[['230511'],['26'], ['26']],
    '/automotive and vehicles/motorcycles':[['021300'],['27'], ['27']],
    '/automotive and vehicles/road-side assistance':[['021500'],['28'], ['28']],
    '/automotive and vehicles/scooters and mopeds':[['021600'],['29'], ['29']],
    '/automotive and vehicles/buying and selling cars':[['020500'],['30'], ['30']],
    '/finance/personal finance/insurance/car insurance':[['080604'],['31', '402'], ['31', '402']],
    '/automotive and vehicles/auto parts':[['020100'],['32'], ['32']],
    '/automotive and vehicles/auto repair':[['020200'],['34'], ['34']],
    '/travel/transports/road travel/road accident':[['240810'],['35'], ['35']],
    '/automotive and vehicles/motor shows':[['021200'],['36'], ['36']],
    '/automotive and vehicles/vehicle rental':[['021900'],['41'], ['41']],
    '/art and entertainment/books and literature':[['010100'],['42'], ['42']],
    '/art and entertainment/books and literature/reference books':[['010109'],['43', '47'], ['43', '47']],
    '/art and entertainment/books and literature/non-fiction':[['010107'],['44'], ['44']],
    "/art and entertainment/books and literature/children's books":[['010102'],['45'], ['45']],
    '/art and entertainment/comics and animation/comics':[['010303'],['46', '262'], ['46', '262']],
    '/art and entertainment/comics and animation':[['010300'],['46'], ['46']],
    '/art and entertainment/books and literature/romance novels':[['010110'],['48'], ['48']],
    '/art and entertainment/books and literature/mythology':[['010106'],['48'], ['48']],
    '/art and entertainment/books and literature/poetry':[['010108'],['49'], ['49']],
    '/travel/travel guides':[['241000'],['50'], ['50']],
    '/business and industrial':[['030000'],['52'], ['52']],
    '/business and industrial/business news':[['030600'],['53'], ['53']],
    '/finance/accounting and auditing':[['080100'],['54'], ['54']],
    '/finance/accounting and auditing/bookkeeping':[['080102'],['54'], ['54']],
    '/business and industrial/company/annual report':[['031001'],['54'], ['54']],
    '/business and industrial/company/earnings':[['031003'],['54'], ['54']],
    '/finance/accounting and auditing/billing and invoicing':[['080101'],['54'], ['54']],
    '/finance/accounting and auditing/tax preparation and planning':[['080103'],['54'], ['54']],
    '/business and industrial/business operations/human resources':[['030702'],['55'], ['55']],
    '/business and industrial/business operations/human resources/compensation and benefits':[['030703'],['55'], ['55']],
    '/business and industrial/business operations/human resources/payroll services':[['030704'],['55'], ['55']],
    '/business and industrial/company':[['031000'],['56', '60'], ['56', '60']],
    '/business and industrial/logistics':[['031800'],['57', '101'], ['57', '101']],
    '/business and industrial/business operations/management/supply chain management':[['030708'],['57'], ['57']],
    '/business and industrial/logistics/freight train':[['031802'],['57', '101'], ['57', '101']],
    '/business and industrial/advertising and marketing':[['030100'],['58'], ['58']],
    '/art and entertainment/visual art and design/design/industrial and product design':[['011207'],['58', '204'], ['58', '204']],
    '/business and industrial/advertising and marketing/brand management':[['030102'],['58'], ['58']],
    '/business and industrial/advertising and marketing/marketing':[['030103'],['58'], ['58']],
    '/business and industrial/advertising and marketing/public relations':[['030104'],['58'], ['58']],
    '/technology and computing/enterprise technology/customer relationship management':[['230801'],['58', '72', '99'], ['58', '72', '99']],
    '/business and industrial/advertising and marketing/telemarketing':[['030105'],['59'], ['59']],
    '/education/studying business':[['061400'],['62'], ['62']],
    '/finance/bank':[['080200'],['63'], ['63']],
    '/finance':[['080000'],['63'], ['63']],
    '/finance/investing/day trading':[['080503'],['63'], ['63']],
    '/finance/investing/futures trading':[['080508'],['63'], ['63']],
    '/finance/investing':[['080500'],['64', '410'], ['64', '410']],
    '/business and industrial/company/bankruptcy':[['031002'],['65'], ['65']],
    '/finance/personal finance/debt management':[['080601'],['67'], ['67']],
    '/business and industrial/company/merger and acquisition':[['031005'],['68'], ['68']],
    '/business and industrial/company/joint venture':[['031004'],['68'], ['68']],
    '/finance/personal finance/lending':[['080606'],['69', '70'], ['69', '70']],
    '/finance/investing/venture capital':[['080512'],['71'], ['71']],
    '/business and industrial/business software':[['030800'],['72'], ['72']],
    '/technology and computing/enterprise technology':[['230800'],['72', '99'], ['72', '99']],
    '/technology and computing/enterprise technology/enterprise resource planning':[['230803'],['72', '99'], ['72', '99']],
    '/technology and computing/enterprise technology/data management':[['230802'],['72', '99', '620'], ['72', '99', '620']],
    '/business and industrial/business operations':[['030700'],['73'], ['73']],
    '/business and industrial/business operations/management/business process':[['030706'],['73'], ['73']],
    '/shopping/resources/consumer protection':[['190402'],['74'], ['74']],
    '/business and industrial/business operations/management':[['030705'],['76'], ['76']],
    '/business and industrial/business operations/business plans':[['030701'],['76'], ['76']],
    '/business and industrial/business operations/management/project management':[['030707'],['76'], ['76']],
    '/law, govt and politics/government/government contracting and procurement':[['130405'],['77'], ['77']],
    '/law, govt and politics/government/government agencies':[['130404'],['77'], ['77']],
    '/business and industrial/green solutions':[['031500'],['78'], ['78']],
    '/science/ecology/waste management/waste disposal':[['180405'],['79', '467'], ['79', '467']],
    '/finance/financial news':[['080300'],['80'], ['80']],
    '/business and industrial/mining industry':[['032100'],['81'], ['81']],
    '/business and industrial/paper industry':[['032200'],['81'], ['81']],
    '/business and industrial/textile industry':[['032800'],['81'], ['81']],
    '/business and industrial/iron and steel industry':[['031700'],['81'], ['81']],
    '/business and industrial/energy/oil/oil and gas prices':[['031208'],['86', '418'], ['86', '418']],
    '/business and industrial/energy/oil/diesel fuel':[['031207'],['86'], ['86']],
    '/business and industrial/chemicals industry':[['030900'],['90', '466'], ['90', '466']],
    '/business and industrial/chemicals industry/adhesives':[['030901'],['90', '466'], ['90', '466']],
    '/business and industrial/chemicals industry/cleaning agents':[['030902'],['90', '466'], ['90', '466']],
    '/business and industrial/chemicals industry/dyes and pigments':[['030903'],['90', '466'], ['90', '466']],
    '/business and industrial/chemicals industry/plastics and polymers':[['030904'],['90', '466'], ['90', '466']],
    '/business and industrial/advertising and marketing/advertising':[['030101'],['91'], ['91']],
    '/education/teaching and classroom resources/school supplies':[['061502'],['92'], ['92']],
    '/art and entertainment/music/recording industry':[['010826'],['93'], ['93']],
    '/art and entertainment/music/recording industry/record labels':[['010828'],['93'], ['93']],
    '/business and industrial/record company':[['032500'],['93'], ['93']],
    '/home and garden/environmental safety':[['120300'],['94'], ['94']],
    '/business and industrial/food industry':[['031400'],['96'], ['96']],
    '/business and industrial/agriculture and forestry/food production':[['030305'],['96'], ['96']],
    '/business and industrial/agriculture and forestry/livestock':[['030308'],['96'], ['96']],
    '/business and industrial/agriculture and forestry/aquaculture':[['030302'],['96'], ['96']],
    '/society/welfare/healthcare':[['201001'],['97'], ['97']],
    '/society/welfare/healthcare/hospital':[['201002'],['97'], ['97']],
    '/business and industrial/hospitality industry':[['031600'],['98'], ['98']],
    '/food and drink/gastronomy':[['090900'],['98'], ['98']],
    '/business and industrial/hospitality industry/food service':[['031602'],['98'], ['98']],
    '/business and industrial/logistics/air freight':[['031801'],['101', '118'], ['101', '118']],
    '/travel/transports':[['240800'],['101'], ['101']],
    '/travel/transports/air travel/air and space accident':[['240802'],['101'], ['101']],
    '/travel/transports/air travel/airfare':[['240803'],['101', '118'], ['101', '118']],
    '/travel/transports/air travel/airlines':[['240804'],['101', '118'], ['101', '118']],
    '/travel/transports/air travel/airplanes':[['240805'],['101'], ['101']],
    '/travel/transports/air travel/airports':[['240806'],['101'], ['101']],
    '/travel/transports/air travel/helicopters':[['240807'],['101', '118'], ['101', '118']],
    '/travel/transports/public transport':[['240808'],['101'], ['101']],
    '/business and industrial/agriculture and forestry':[['030300'],['102'], ['102']],
    '/business and industrial/agriculture and forestry/agriculture':[['030301'],['102'], ['102']],
    '/business and industrial/agriculture and forestry/horticulture':[['030307'],['102', '275'], ['102', '275']],
    '/business and industrial/agriculture and forestry/crops and seed':[['030303'],['102', '275'], ['102', '275']],
    '/business and industrial/agriculture and forestry/forestry':[['030306'],['102'], ['102']],
    '/business and industrial/agriculture and forestry/organic farming':[['030309'],['102'], ['102']],
    '/business and industrial/manufacturing':[['031900'],['104'], ['104']],
    '/science/engineering':[['180500'],['105', '120'], ['105', '120']],
    '/business and industrial/shipbuilding':[['032600'],['105'], ['105']],
    '/business and industrial/metals':[['032000'],['107'], ['107']],
    '/society/welfare/social services/volunteering':[['201004'],['108'], ['108']],
    '/business and industrial/pharmaceutical industry':[['032300'],['109'], ['109']],
    '/business and industrial/energy':[['031200'],['110'], ['110']],
    '/business and industrial/energy/coal':[['031201'],['110'], ['110']],
    '/business and industrial/energy/natural gas':[['031203'],['110'], ['110']],
    '/business and industrial/energy/nuclear power':[['031204'],['110'], ['110']],
    '/business and industrial/energy/nuclear power/nuclear accident':[['031205'],['110'], ['110']],
    '/business and industrial/energy/oil':[['031206'],['110'], ['110']],
    '/business and industrial/energy/oil/oil company':[['031209'],['110'], ['110']],
    '/business and industrial/energy/renewable energy':[['031210'],['110'], ['110']],
    '/business and industrial/energy/renewable energy/biofuel':[['031211'],['110'], ['110']],
    '/business and industrial/energy/renewable energy/fuel cell':[['031212'],['110'], ['110']],
    '/business and industrial/energy/renewable energy/geothermal energy':[['031213'],['110'], ['110']],
    '/business and industrial/energy/renewable energy/hydroelectric energy':[['031214'],['110'], ['110']],
    '/business and industrial/energy/renewable energy/solar energy':[['031215'],['110'], ['110']],
    '/business and industrial/energy/renewable energy/wind energy':[['031216'],['110'], ['110']],
    '/business and industrial/publishing':[['032400'],['111'], ['111']],
    '/business and industrial/fashion industry':[['031300'],['113'], ['113']],
    '/shopping/retail':[['190500'],['114'], ['114']],
    '/business and industrial/automation':[['030400'],['115'], ['115']],
    '/business and industrial/aerospace and defense/space technology':[['030202'],['115'], ['115']],
    '/automotive and vehicles/cars/car industry':[['020702'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands':[['021800'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/acura':[['021801'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/alfa romeo':[['021802'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/audi':[['021803'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/bentley':[['021804'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/buick':[['021805'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/cadillac':[['021806'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/chevrolet':[['021807'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/chrysler':[['021808'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/ferrari':[['021809'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/fiat':[['021810'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/ford':[['021811'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/honda':[['021812'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/hyundai':[['021813'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/isuzu':[['021814'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/jeep':[['021815'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/kia':[['021816'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/lamborghini':[['021817'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/land rover':[['021818'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/maserati':[['021819'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/mazda':[['021820'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/mercedes-benz':[['021821'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/mitsubishi':[['021822'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/nissan':[['021823'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/nissan/infiniti':[['021824'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/peugeot':[['021825'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/pontiac':[['021826'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/porsche':[['021827'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/rolls-royce':[['021828'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/saab':[['021829'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/scion':[['021830'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/subaru':[['021831'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/suzuki':[['021832'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/toyota':[['021833'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/volkswagen':[['021834'],['117'], ['117']],
    '/automotive and vehicles/vehicle brands/volvo':[['021835'],['117'], ['117']],
    '/business and industrial/aerospace and defense':[['030200'],['118'], ['118']],
    '/law, govt and politics/armed forces/air force':[['130101'],['118', '389'], ['118', '389']],
    '/science/biology/biotechnology':[['180101'],['119'], ['119']],
    '/business and industrial/biomedical':[['030500'],['119'], ['119']],
    '/business and industrial/construction':[['031100'],['121'], ['121']],
    '/business and industrial/aerospace and defense/defense industry':[['030201'],['122'], ['122']],
    '/careers':[['050000'],['123'], ['123']],
    '/careers/career advice':[['050100'],['125'], ['125']],
    '/careers/career planning':[['050200'],['126', '138'], ['126', '138']],
    '/careers/job search':[['050400'],['127'], ['127']],
    '/careers/job fairs':[['050300'],['128'], ['128']],
    '/careers/resume writing and advice':[['050600'],['129'], ['129']],
    '/careers/telecommuting':[['050700'],['130', '607'], ['130', '607']],
    '/education':[['060000'],['132'], ['132']],
    '/education/adult education':[['060100'],['133'], ['133']],
    '/education/school/private school':[['061201'],['134'], ['134']],
    '/education/high school':[['060800'],['135'], ['135']],
    '/society/sex/sex education':[['200602'],['135'], ['135']],
    '/education/special education':[['061300'],['136'], ['136']],
    '/education/graduate school':[['060700'],['137'], ['137']],
    '/education/graduate school/college':[['060701'],['137'], ['137']],
    '/family and parenting/children/daycare and preschool':[['070301'],['142', '194'], ['142', '194']],
    '/education/teaching and classroom resources/lesson plans':[['061501'],['143'], ['143']],
    '/education/homeschooling':[['060900'],['145'], ['145']],
    '/education/homework and study tips':[['061000'],['146'], ['146']],
    '/education/language learning':[['061100'],['147'], ['147']],
    '/education/english as a second language':[['060500'],['147'], ['147']],
    '/education/distance learning':[['060400'],['148'], ['148']],
    '/education/grade school':[['060600'],['149'], ['149']],
    '/art and entertainment/shows and events':[['011000'],['150'], ['150']],
    '/travel/tourist destinations/theme parks':[['240617'],['151'], ['151']],
    '/travel/specialty travel/sightseeing tours':[['240503'],['153'], ['153']],
    '/shopping/retail/department stores':[['190501'],['154'], ['154']],
    '/shopping/retail/outlet stores':[['190503'],['154'], ['154']],
    '/art and entertainment/shows and events/fair':[['011007'],['154'], ['154']],
    '/art and entertainment/visual art and design/art museums and galleries':[['011203'],['155'], ['155']],
    '/art and entertainment/shows and events/exhibition':[['011006'],['155'], ['155']],
    '/sports/bicycling/mountain biking':[['210601'],['159', '492'], ['159', '492']],
    '/sports/windsurfing':[['216000'],['159'], ['159']],
    '/sports/trekking':[['215400'],['159'], ['159']],
    '/sports/parachuting':[['213500'],['159'], ['159']],
    '/sports/boat racing':[['210800'],['159'], ['159']],
    '/sports/archery':[['210100'],['159'], ['159']],
    '/sports/climbing/mountain climbing':[['211501'],['159', '500'], ['159', '500']],
    '/sports/climbing/rock climbing':[['211502'],['159', '500'], ['159', '500']],
    '/travel/tourist destinations/national parks':[['240612'],['160'], ['160']],
    '/shopping/gifts/party supplies':[['190303'],['161'], ['161']],
    '/art and entertainment/music/recording industry/music awards':[['010827'],['162'], ['162']],
    '/art and entertainment/shows and events/beauty contest':[['011001'],['162', '553'], ['162', '553']],
    '/society/social institution':[['200700'],['163'], ['163']],
    '/style and fashion/clothing/wedding dresses':[['220415'],['163', '569', '585'], ['163', '569', '585']],
    '/education/alumni and reunions':[['060200'],['163'], ['163']],
    '/society/work/contracts':[['201101'],['163'], ['163']],
    '/society/social institution/marriage/weddings':[['200704'],['165'], ['165']],
    '/society/social institution/marriage/common law marriage':[['200703'],['165'], ['165']],
    '/family and parenting/babies and toddlers/baby clothes':[['070201'],['166'], ['166']],
    '/science/social science/pedagogy':[['181109'],['169'], ['169']],
    '/business and industrial/hospitality industry/event planning':[['031601'],['170'], ['170']],
    '/health and fitness/disorders/mental disorder/depression':[['100604'],['171'], ['171']],
    '/science/medicine/psychology and psychiatry':[['180912'],['171', '187'], ['171', '187']],
    '/science/social science/history/heraldry':[['181104'],['171'], ['171']],
    '/law, govt and politics/politics/political parties':[['130808'],['174'], ['174']],
    '/art and entertainment/shows and events/sports event':[['011009'],['176'], ['176']],
    '/art and entertainment/theatre/theatre awards':[['011101'],['177'], ['177']],
    '/pets/zoo':[['150800'],['178'], ['178']],
    '/food and drink/dining out':[['090500'],['179', '218'], ['179', '218']],
    '/art and entertainment/shows and events/conference':[['011005'],['180'], ['180']],
    '/hobbies and interests/games/gambling':[['110704'],['181', '524'], ['181', '524']],
    '/art and entertainment/movies/film festivals and awards':[['010601'],['182'], ['182']],
    '/art and entertainment/shows and events/concert':[['011004'],['184'], ['184']],
    '/art and entertainment/shows and events/classical concert':[['011003'],['184', '346'], ['184', '346']],
    '/art and entertainment/shows and events/festival':[['011008'],['184'], ['184']],
    '/art and entertainment/celebrity fan and gossip':[['010200'],['185'], ['185']],
    '/family and parenting':[['070000'],['186'], ['186']],
    '/society/dating':[['200200'],['188'], ['188']],
    '/health and fitness/sexuality':[['101200'],['188'], ['188']],
    '/society/social institution/divorce':[['200701'],['189'], ['189']],
    '/family and parenting/eldercare':[['070400'],['190'], ['190']],
    '/society/social institution/marriage':[['200702'],['191'], ['191']],
    '/family and parenting/motherhood':[['070500'],['192'], ['192']],
    '/family and parenting/adoption':[['070100'],['193'], ['bvdw_sensitive']],
    '/technology and computing/computer security':[['230400'],['195'], ['195']],
    '/family and parenting/babies and toddlers':[['070200'],['196'], ['196']],
    '/family and parenting/children':[['070300'],['197'], ['197']],
    '/family and parenting/parenting teens':[['070600'],['198'], ['198']],
    '/society/teens':[['200800'],['198'], ['198']],
    '/family and parenting/special needs kids':[['070700'],['199'], ['199']],
    '/art and entertainment':[['010000'],['201'], ['201']],
    '/art and entertainment/dance':[['010400'],['203'], ['203']],
    '/art and entertainment/dance/ballroom dance':[['010402'],['203'], ['203']],
    '/art and entertainment/dance/belly dance':[['010403'],['203'], ['203']],
    '/art and entertainment/dance/pole dancing':[['010405'],['203'], ['203']],
    '/art and entertainment/dance/ballet':[['010401'],['203'], ['203']],
    '/art and entertainment/visual art and design/design':[['011205'],['204'], ['204']],
    '/art and entertainment/visual art and design':[['011200'],['204'], ['204']],
    '/art and entertainment/visual art and design/design/graphic design':[['011206'],['204'], ['204']],
    '/art and entertainment/visual art and design/digital art':[['011209'],['205'], ['205']],
    '/hobbies and interests/art and technology':[['110100'],['205'], ['205']],
    '/hobbies and interests/arts and crafts/photography':[['110205'],['206', '255'], ['206', '255']],
    '/art and entertainment/dance/modern dance':[['010404'],['207'], ['207']],
    '/art and entertainment/music/music genres/opera':[['010810'],['208'], ['208']],
    '/art and entertainment/theatre':[['011100'],['209'], ['209']],
    '/art and entertainment/visual art and design/performance art':[['011212'],['209'], ['209']],
    '/art and entertainment/theatre/theatre companies':[['011102'],['209'], ['209']],
    '/food and drink':[['090000'],['210'], ['210']],
    '/food and drink/beverages/alcoholic beverages':[['090201'],['211'], ['211']],
    '/food and drink/beverages/alcoholic beverages/wine':[['090203'],['211'], ['211']],
    '/food and drink/beverages/alcoholic beverages/cocktails and beer':[['090202'],['211'], ['211']],
    '/food and drink/vegan':[['091300'],['212'], ['212']],
    '/food and drink/vegetarian':[['091400'],['213'], ['213']],
    '/food and drink/cuisines':[['090300'],['214'], ['214']],
    '/food and drink/cuisines/american cuisine':[['090301'],['214'], ['214']],
    '/food and drink/cuisines/chinese cuisine':[['090302'],['214'], ['214']],
    '/food and drink/cuisines/french cuisine':[['090303'],['214'], ['214']],
    '/food and drink/cuisines/indian cuisine':[['090304'],['214'], ['214']],
    '/food and drink/cuisines/italian cuisine':[['090305'],['214'], ['214']],
    '/food and drink/cuisines/japanese cuisine':[['090306'],['214'], ['214']],
    '/food and drink/cuisines/mexican cuisine':[['090307'],['214'], ['214']],
    '/food and drink/cuisines/regional cuisine':[['090308'],['214'], ['214']],
    '/food and drink/barbecues and grilling':[['090100'],['215'], ['215']],
    '/food and drink/health and lowfat cooking':[['091000'],['216'], ['216']],
    '/food and drink/desserts and baking':[['090400'],['217'], ['217']],
    '/food and drink/food/baked goods':[['090804'],['217'], ['217']],
    '/food and drink/food allergies':[['090700'],['219'], ['219']],
    '/food and drink/gastronomy/slow food':[['090901'],['220'], ['220']],
    '/food and drink/kosher food':[['091200'],['220'], ['220']],
    '/food and drink/healthy eating':[['091100'],['221'], ['221']],
    '/food and drink/beverages/non alcoholic beverages/bottled water':[['090205'],['221', '222'], ['221', '222']],
    '/food and drink/food/fruits and vegetables':[['090810'],['221'], ['221']],
    '/food and drink/food/salads':[['090813'],['221'], ['221']],
    '/food and drink/food/grains and pasta':[['090811'],['221'], ['221']],
    '/food and drink/beverages/non alcoholic beverages':[['090204'],['222'], ['222']],
    '/food and drink/beverages/non alcoholic beverages/coffee and tea':[['090206'],['222'], ['222']],
    '/food and drink/beverages/non alcoholic beverages/soft drinks':[['090207'],['222'], ['222']],
    "/health and fitness/men's health":[['101000'],['223', '228'], ['223', '228']],
    "/health and fitness/women's health":[['101600'],['223', '238'], ['223', '238']],
    '/health and fitness/exercise':[['100800'],['225'], ['225']],
    '/sports/hockey':[['212700'],['226'], ['226']],
    '/sports/handball':[['212600'],['226'], ['226']],
    '/sports/polo':[['213600'],['226'], ['226']],
    '/sports/running and jogging':[['214000'],['227'], ['227']],
    '/health and fitness/nutrition':[['101100'],['229'], ['229']],
    '/society/senior living':[['200500'],['230'], ['230']],
    '/health and fitness/weight loss':[['101500'],['231'], ['bvdw_sensitive']],
    '/health and fitness/alternative medicine':[['100300'],['233'], ['233']],
    '/health and fitness/alternative medicine/homeopathy':[['100303'],['233'], ['233']],
    '/health and fitness/alternative medicine/herbs for health':[['100301'],['234'], ['234']],
    '/health and fitness/alternative medicine/holistic healing':[['100302'],['235'], ['235']],
    '/health and fitness/therapy/physical therapy':[['101401'],['236'], ['236']],
    '/health and fitness/addiction/smoking addiction':[['100102'],['237'], ['237']],
    '/hobbies and interests':[['110000'],['239'], ['239']],
    '/shopping/retail/second-hand market':[['190504'],['240'], ['240']],
    '/hobbies and interests/magic and illusion':[['111200'],['241'], ['241']],
    '/art and entertainment/music/musical instruments':[['010822'],['243'], ['243']],
    '/art and entertainment/music/musical instruments/drums':[['010823'],['243'], ['243']],
    '/art and entertainment/music/musical instruments/guitars':[['010824'],['243'], ['243']],
    '/art and entertainment/music/musical instruments/pianos':[['010825'],['243'], ['243']],
    '/hobbies and interests/guitar':[['110900'],['243'], ['243']],
    '/hobbies and interests/paranormal phenomena':[['111400'],['244'], ['244']],
    '/art and entertainment/radio':[['010900'],['245'], ['245']],
    '/art and entertainment/books and literature/science fiction':[['010111'],['246'], ['246']],
    '/art and entertainment/visual art and design/arts education':[['011204'],['247'], ['247']],
    '/hobbies and interests/arts and crafts':[['110200'],['248'], ['248']],
    '/art and entertainment/visual art and design/art and craft supplies':[['011202'],['248'], ['248']],
    '/hobbies and interests/arts and crafts/pottery':[['110206'],['248'], ['248']],
    '/hobbies and interests/arts and crafts/crochet':[['110202'],['249'], ['249']],
    '/hobbies and interests/arts and crafts/candle and soap making':[['110201'],['250'], ['250']],
    '/art and entertainment/visual art and design/drawing':[['011210'],['251'], ['251']],
    '/hobbies and interests/arts and crafts/jewelry making':[['110203'],['252'], ['252']],
    '/hobbies and interests/needlework':[['111300'],['253'], ['253']],
    '/hobbies and interests/arts and crafts/knitting':[['110204'],['253'], ['253']],
    '/art and entertainment/visual art and design/painting':[['011211'],['254'], ['254']],
    '/hobbies and interests/scrapbooking':[['111600'],['256'], ['256']],
    '/hobbies and interests/arts and crafts/woodworking':[['110207'],['257'], ['257']],
    '/hobbies and interests/birdwatching':[['110400'],['259'], ['259']],
    '/hobbies and interests/cigars':[['110500'],['260'], ['260']],
    '/hobbies and interests/collecting':[['110600'],['261'], ['261']],
    '/hobbies and interests/collecting/stamps and coins':[['110601'],['263'], ['263']],
    '/technology and computing/consumer electronics/audio equipment':[['230501'],['265'], ['265']],
    '/technology and computing/mp3 and midi':[['231100'],['265'], ['265']],
    '/hobbies and interests/home recording':[['111000'],['265'], ['265']],
    '/hobbies and interests/getting published/freelance writing':[['110801'],['266'], ['266']],
    '/hobbies and interests/getting published':[['110800'],['266'], ['266']],
    '/hobbies and interests/getting published/screenwriting':[['110802'],['267'], ['267']],
    '/technology and computing/consumer electronics/camera and photo equipment/cameras and camcorders/camcorders':[['230507'],['268'], ['268']],
    '/hobbies and interests/games':[['110700'],['269'], ['269']],
    '/hobbies and interests/games/board games and puzzles':[['110701'],['270'], ['270']],
    '/hobbies and interests/games/chess':[['110703'],['270'], ['270']],
    '/hobbies and interests/games/card games':[['110702'],['271'], ['271']],
    '/hobbies and interests/games/role playing games':[['110706'],['272'], ['272']],
    '/science/medicine/genetics':[['180904'],['273', '468'], ['273', '468']],
    '/home and garden':[['120000'],['274'], ['274']],
    '/home and garden/gardening and landscaping':[['120400'],['275'], ['275']],
    '/home and garden/remodeling and construction':[['121100'],['276'], ['276']],
    '/home and garden/appliances':[['120100'],['278'], ['278']],
    '/home and garden/appliances/dishwashers':[['120101'],['278'], ['278']],
    '/home and garden/appliances/microwaves':[['120102'],['278'], ['278']],
    '/home and garden/appliances/refrigerators and freezers':[['120103'],['278'], ['278']],
    '/home and garden/appliances/small appliances':[['120104'],['278'], ['278']],
    '/home and garden/appliances/stoves':[['120105'],['278'], ['278']],
    '/home and garden/home improvement and repair':[['120600'],['280'], ['280']],
    '/home and garden/home improvement and repair/house painting and finishing':[['120601'],['280'], ['280']],
    '/home and garden/home improvement and repair/plumbing':[['120602'],['280'], ['280']],
    '/home and garden/home improvement and repair/power tools':[['120603'],['280'], ['280']],
    '/home and garden/home improvement and repair/roofing':[['120604'],['280'], ['280']],
    '/home and garden/pest control':[['121000'],['282'], ['282']],
    '/art and entertainment/visual art and design/design/interior design':[['011208'],['283'], ['283']],
    '/home and garden/bed and bath':[['120200'],['283'], ['283']],
    '/home and garden/bed and bath/bathroom':[['120201'],['283'], ['283']],
    '/home and garden/bed and bath/bedroom':[['120202'],['283'], ['283']],
    '/home and garden/bed and bath/bedroom/bedding and bed linens':[['120203'],['283'], ['283']],
    '/home and garden/bed and bath/bedroom/beds and headboards':[['120204'],['283'], ['283']],
    '/home and garden/bed and bath/bedroom/mattresses':[['120205'],['283'], ['283']],
    '/home and garden/home furnishings':[['120500'],['283'], ['283']],
    '/home and garden/home furnishings/lamps and lighting':[['120501'],['283'], ['283']],
    '/home and garden/home furnishings/rugs and carpets':[['120502'],['283'], ['283']],
    '/home and garden/home furnishings/sofas and chairs':[['120503'],['283'], ['283']],
    '/home and garden/nursery and playroom':[['120900'],['283'], ['283']],
    '/home and garden/gardening and landscaping/landscaping':[['120402'],['284'], ['284']],
    '/home and garden/gardening and landscaping/gardening':[['120401'],['284'], ['284']],
    '/home and garden/gardening and landscaping/yard and patio':[['120403'],['284'], ['284']],
    '/health and fitness':[['100000'],['286'], ['286']],
    '/health and fitness/addiction':[['100100'],['287'], ['bvdw_sensitive']],
    '/health and fitness/disease':[['100500'],['287'], ['bvdw_sensitive']],
    '/health and fitness/disease/chronic pain':[['100510'],['287'], ['bvdw_sensitive']],
    '/health and fitness/disorders':[['100600'],['287'], ['bvdw_sensitive']],
    '/health and fitness/disease/allergies':[['100502'],['288'], ['bvdw_sensitive']],
    '/health and fitness/disease/deafness':[['100512'],['289'], ['bvdw_sensitive']],
    '/health and fitness/disease/thyroid disease':[['100522'],['293'], ['bvdw_sensitive']],
    '/health and fitness/disease/heart disease':[['100518'],['296'], ['bvdw_sensitive']],
    '/health and fitness/disease/epidemic':[['100514'],['297'], ['bvdw_sensitive']],
    '/health and fitness/disease/asthma':[['100504'],['300'], ['bvdw_sensitive']],
    '/health and fitness/disorders/mental disorder':[['100601'],['301'], ['bvdw_sensitive']],
    '/health and fitness/disorders/mental disorder/a.d.d.':[['100602'],['301'], ['bvdw_sensitive']],
    '/health and fitness/disorders/mental disorder/bipolar disorder':[['100603'],['301'], ['bvdw_sensitive']],
    '/health and fitness/disorders/mental disorder/panic and anxiety':[['100605'],['301'], ['bvdw_sensitive']],
    '/health and fitness/incest and abuse support':[['100900'],['301'], ['bvdw_sensitive']],
    '/health and fitness/therapy':[['101400'],['301'], ['bvdw_sensitive']],
    '/health and fitness/disease/infertility':[['100521'],['302', '304'], ['bvdw_sensitive']],
    '/family and parenting/motherhood/pregnancy':[['070502'],['305'], ['bvdw_sensitive']],
    '/family and parenting/motherhood/artificial insemination':[['070501'],['305'], ['bvdw_sensitive']],
    '/society/sex/pornography':[['200601'],['307', 'Rm3SiT'], ['bvdw_sensitive']],
    '/health and fitness/disease/aids and hiv':[['100501'],['308'], ['bvdw_sensitive']],
    '/science/medicine/dermatology':[['180902'],['309'], ['bvdw_sensitive']],
    '/health and fitness/disorders/sleep disorders':[['100606'],['310'], ['bvdw_sensitive']],
    '/health and fitness/addiction/substance abuse':[['100103'],['311'], ['bvdw_sensitive']],
    '/health and fitness/addiction/alcoholism':[['100101'],['311'], ['bvdw_sensitive']],
    '/health and fitness/disease/arthritis':[['100503'],['312'], ['bvdw_sensitive']],
    '/health and fitness/disease/chronic fatigue syndrome':[['100509'],['313'], ['bvdw_sensitive']],
    '/health and fitness/disease/autism and pdd':[['100505'],['313'], ['bvdw_sensitive']],
    '/health and fitness/disease/epilepsy':[['100515'],['313'], ['bvdw_sensitive']],
    '/health and fitness/disease/headaches and migraines':[['100517'],['313'], ['bvdw_sensitive']],
    '/health and fitness/disease/cancer':[['100506'],['314'], ['bvdw_sensitive']],
    '/health and fitness/disease/cancer/brain tumor':[['100507'],['314'], ['bvdw_sensitive']],
    '/health and fitness/disease/cold and flu':[['100511'],['315'], ['315']],
    '/health and fitness/dental care':[['100400'],['316'], ['316']],
    '/health and fitness/disease/diabetes':[['100513'],['317'], ['bvdw_sensitive']],
    '/health and fitness/disease/gerd and acid reflux':[['100516'],['318'], ['bvdw_sensitive']],
    "/health and fitness/disease/ibs and crohn's disease":[['100519'],['318'], ['bvdw_sensitive']],
    '/health and fitness/disease/cholesterol':[['100508'],['318'], ['bvdw_sensitive']],
    '/health and fitness/disease/incontinence':[['100520'],['318'], ['bvdw_sensitive']],
    '/science/medicine/medical research':[['180906'],['319'], ['bvdw_sensitive']],
    '/health and fitness/drugs':[['100700'],['320', 'pg0WhF'], ['bvdw_sensitive']],
    '/science/medicine/surgery':[['180914'],['321'], ['bvdw_sensitive']],
    '/style and fashion/beauty/cosmetology and beauty professionals':[['220206'],['323'], ['bvdw_sensitive']],
    '/art and entertainment/movies':[['010600'],['324'], ['324']],
    '/art and entertainment/movies and tv/movies':[['010713'],['324'], ['324']],
    '/art and entertainment/movies and tv/action':[['010701'],['325'], ['325']],
    '/art and entertainment/movies and tv/westerns':[['010721'],['325'], ['325']],
    '/art and entertainment/movies and tv/romantic comedies':[['010717'],['326'], ['326']],
    '/art and entertainment/movies and tv':[['010700'],['327', '649', '652'], ['327', '649', '652']],
    '/art and entertainment/movies and tv/independent':[['010712'],['328'], ['328']],
    '/art and entertainment/comics and animation/cartoons':[['010302'],['329'], ['329']],
    '/art and entertainment/movies and tv/comedies':[['010707'],['330', '646'], ['330', '646']],
    '/art and entertainment/movies and tv/thrillers':[['010720'],['331'], ['331']],
    '/art and entertainment/movies and tv/documentaries':[['010709'],['332', '648'], ['332', '648']],
    '/art and entertainment/movies and tv/dramas':[['010710'],['333', '647'], ['333', '647']],
    "/art and entertainment/movies and tv/children's":[['010704'],['334', '645'], ['334', '645']],
    '/art and entertainment/movies and tv/animated':[['010702'],['335'], ['335']],
    '/art and entertainment/movies and tv/horror':[['010711'],['336'], ['336']],
    '/art and entertainment/music':[['010800'],['338'], ['338']],
    '/art and entertainment/music/music genres':[['010801'],['339'], ['339']],
    '/art and entertainment/music/music genres/easy listening':[['010805'],['344'], ['344']],
    '/art and entertainment/music/music genres/classical music':[['010803'],['346'], ['346']],
    '/art and entertainment/music/music genres/country music':[['010804'],['350'], ['350']],
    '/art and entertainment/music/music genres/electronic music':[['010806'],['351'], ['351']],
    '/art and entertainment/music/music genres/world music':[['010818'],['352'], ['352']],
    '/art and entertainment/music/music genres/folk music':[['010807'],['353'], ['353']],
    '/art and entertainment/music/singing':[['010829'],['353'], ['353']],
    '/art and entertainment/music/music genres/hip hop':[['010808'],['355'], ['355']],
    '/art and entertainment/music/music genres/jazz':[['010809'],['357'], ['357']],
    '/art and entertainment/music/music genres/ska':[['010815'],['359'], ['359']],
    '/art and entertainment/music/music genres/blues':[['010802'],['360'], ['360']],
    '/art and entertainment/music/music genres/religious music':[['010813'],['361'], ['361']],
    '/art and entertainment/music/music genres/soul music':[['010816'],['362'], ['362']],
    '/art and entertainment/music/music genres/rock music':[['010814'],['363'], ['363']],
    '/art and entertainment/music/music genres/punk':[['010812'],['365'], ['365']],
    '/art and entertainment/music/music genres/soundtracks':[['010817'],['369', '650'], ['369', '650']],
    '/art and entertainment/radio/talk radio':[['010903'],['371'], ['371']],
    '/art and entertainment/radio/radio programs':[['010902'],['372', '373', '376'], ['372', '373', '376']],
    '/law, govt and politics':[['130000'],['379'], ['379']],
    '/news':[['140000'],['379'], ['379']],
    '/society/crime/personal offense/torture':[['200109'],['380'], ['380']],
    '/society/crime/property crime/robbery':[['200118'],['380'], ['380']],
    '/technology and computing/computer crime':[['230200'],['380', '599'], ['380', '599']],
    '/law, govt and politics/law enforcement':[['130600'],['380'], ['380']],
    '/law, govt and politics/law enforcement/coast guard':[['130601'],['380'], ['380']],
    '/law, govt and politics/law enforcement/highway patrol':[['130603'],['380'], ['380']],
    '/law, govt and politics/law enforcement/police':[['130604'],['380'], ['380']],
    '/science/weather/meteorological disaster':[['181201'],['381'], ['381']],
    '/law, govt and politics/law enforcement/fire department':[['130602'],['381'], ['381']],
    '/news/international news':[['140100'],['382'], ['382']],
    '/law, govt and politics/politics/foreign policy':[['130806'],['382'], ['382']],
    '/law, govt and politics/government/embassies and consulates':[['130402'],['382'], ['382']],
    '/law, govt and politics/legal issues':[['130700'],['383'], ['383']],
    '/law, govt and politics/government/courts and judiciary':[['130401'],['383'], ['383']],
    '/law, govt and politics/legal issues/civil law':[['130701'],['383'], ['383']],
    '/law, govt and politics/legal issues/international law':[['130704'],['383'], ['383']],
    '/law, govt and politics/legal issues/legislation':[['130705'],['383'], ['383']],
    '/law, govt and politics/legal issues/legislation/education laws':[['130706'],['383'], ['383']],
    '/law, govt and politics/legal issues/legislation/family laws':[['130707'],['383'], ['383']],
    '/law, govt and politics/legal issues/legislation/health care laws':[['130708'],['383'], ['383']],
    '/news/local news':[['140200'],['384'], ['384']],
    '/news/national news':[['140300'],['385'], ['385']],
    '/law, govt and politics/politics/domestic policy':[['130801'],['385'], ['385']],
    '/law, govt and politics/politics':[['130800'],['386'], ['386']],
    '/law, govt and politics/government/executive branch':[['130403'],['386'], ['386']],
    '/law, govt and politics/government/heads of state':[['130406'],['386'], ['386']],
    '/law, govt and politics/government/legislative':[['130407'],['386'], ['386']],
    '/law, govt and politics/government/parliament':[['130408'],['386'], ['386']],
    '/law, govt and politics/government/state and local government':[['130409'],['386'], ['386']],
    '/law, govt and politics/government':[['130400'],['386'], ['386']],
    '/law, govt and politics/espionage and intelligence':[['130300'],['386'], ['386']],
    '/law, govt and politics/espionage and intelligence/secret service':[['130301'],['386'], ['386']],
    '/law, govt and politics/espionage and intelligence/surveillance':[['130302'],['386'], ['386']],
    '/law, govt and politics/politics/elections':[['130802'],['387'], ['387']],
    '/law, govt and politics/politics/elections/local elections':[['130803'],['387'], ['387']],
    '/law, govt and politics/politics/elections/presidential elections':[['130804'],['387'], ['387']],
    '/law, govt and politics/politics/elections/referendums':[['130805'],['387'], ['387']],
    '/law, govt and politics/immigration':[['130500'],['388'], ['388']],
    '/society/unrest and war':[['200900'],['389'], ['389']],
    '/law, govt and politics/armed forces':[['130100'],['389'], ['389']],
    '/law, govt and politics/armed forces/army':[['130102'],['389'], ['389']],
    '/law, govt and politics/armed forces/marines':[['130103'],['389'], ['389']],
    '/law, govt and politics/armed forces/navy':[['130104'],['389'], ['389']],
    '/law, govt and politics/armed forces/veterans':[['130105'],['389'], ['389']],
    '/science/weather':[['181200'],['390'], ['390']],
    '/science/weather/meteorological disaster/flood':[['181202'],['390'], ['390']],
    '/science/weather/meteorological disaster/hurricane':[['181203'],['390'], ['390']],
    '/science/weather/meteorological disaster/tornado':[['181204'],['390'], ['390']],
    '/finance/personal finance':[['080600'],['391'], ['391']],
    '/finance/bank/bank account':[['080202'],['392'], ['392']],
    '/finance/bank/atms':[['080201'],['392'], ['392']],
    '/finance/grants, scholarships and financial aid':[['080400'],['393'], ['393']],
    '/finance/grants, scholarships and financial aid/government grants':[['080402'],['394'], ['394']],
    '/society/welfare':[['201000'],['394'], ['394']],
    '/society/welfare/social services':[['201003'],['394'], ['394']],
    '/finance/grants, scholarships and financial aid/scholarships':[['080403'],['395'], ['395']],
    '/finance/grants, scholarships and financial aid/financial aid':[['080401'],['395'], ['395']],
    '/finance/personal finance/financial planning':[['080602'],['396'], ['396']],
    '/finance/personal finance/insurance':[['080603'],['398'], ['398']],
    '/careers/nursing':[['050500'],['399'], ['399']],
    '/finance/personal finance/insurance/travel insurance':[['080605'],['404'], ['404']],
    '/finance/personal finance/lending/credit cards':[['080607'],['406'], ['406']],
    '/finance/personal finance/lending/personal loans':[['080608'],['408'], ['408']],
    '/finance/investing/brokerages':[['080502'],['410'], ['410']],
    '/finance/investing/portfolio':[['080510'],['410'], ['410']],
    '/finance/investing/funds':[['080504'],['410'], ['410']],
    '/finance/investing/beginning investing':[['080501'],['410'], ['410']],
    '/finance/investing/funds/hedge fund':[['080506'],['411'], ['411']],
    '/finance/investing/funds/mutual funds':[['080507'],['412'], ['412']],
    '/finance/investing/options':[['080509'],['413'], ['413']],
    '/finance/investing/stocks':[['080511'],['414'], ['414']],
    '/finance/investing/funds/exchange traded funds':[['080505'],['414'], ['414']],
    '/law, govt and politics/legal issues/legislation/tax laws':[['130709'],['415'], ['415']],
    '/society/work/retirement':[['201102'],['416'], ['416']],
    '/business and industrial/energy/electricity':[['031202'],['418'], ['418']],
    '/technology and computing/internet technology/isps':[['231005'],['419'], ['419']],
    '/science/ecology/waste management':[['180403'],['421'], ['421']],
    '/pets':[['150000'],['422'], ['422']],
    '/pets/birds':[['150300'],['423'], ['423']],
    '/pets/cats':[['150400'],['424'], ['424']],
    '/pets/dogs':[['150500'],['425'], ['425']],
    '/pets/aquariums':[['150200'],['426'], ['426']],
    '/pets/large animals':[['150600'],['427'], ['427']],
    '/pets/reptiles':[['150700'],['429'], ['429']],
    '/science/medicine/veterinary medicine':[['180917'],['430'], ['430']],
    '/art and entertainment/music/music genres/pop music':[['010811'],['432'], ['432']],
    '/art and entertainment/humor':[['010500'],['440'], ['440']],
    '/real estate':[['160000'],['441'], ['441']],
    '/real estate/apartments':[['160100'],['442'], ['442']],
    '/real estate/low income housing':[['160400'],['442'], ['442']],
    '/travel/vacation rentals':[['241200'],['444'], ['444']],
    '/real estate/architects':[['160200'],['445'], ['445']],
    '/home and garden/luxury homes':[['120800'],['447'], ['447']],
    '/art and entertainment/visual art and design/architecture':[['011201'],['447'], ['447']],
    '/business and industrial/agriculture and forestry/farms and ranches':[['030304'],['449'], ['449']],
    '/real estate/buying and selling homes':[['160300'],['451'], ['451']],
    '/religion and spirituality':[['170000'],['453'], ['453']],
    '/religion and spirituality/atheism and agnosticism':[['170200'],['454', '457'], ['bvdw_sensitive']],
    '/hobbies and interests/astrology':[['110300'],['456'], ['bvdw_sensitive']],
    '/religion and spirituality/buddhism':[['170300'],['458'], ['bvdw_sensitive']],
    '/religion and spirituality/christianity':[['170400'],['459'], ['bvdw_sensitive']],
    '/religion and spirituality/christianity/catholicism':[['170401'],['459'], ['bvdw_sensitive']],
    '/religion and spirituality/christianity/latter-day saints':[['170402'],['459'], ['bvdw_sensitive']],
    '/religion and spirituality/christianity/orthodoxy':[['170403'],['459'], ['bvdw_sensitive']],
    '/religion and spirituality/christianity/protestantism':[['170404'],['459'], ['bvdw_sensitive']],
    '/religion and spirituality/hinduism':[['170500'],['460'], ['bvdw_sensitive']],
    '/religion and spirituality/islam':[['170600'],['461'], ['bvdw_sensitive']],
    '/religion and spirituality/islam/islamic fundamentalism':[['170601'],['461'], ['bvdw_sensitive']],
    '/religion and spirituality/judaism':[['170700'],['462'], ['bvdw_sensitive']],
    '/religion and spirituality/alternative religions':[['170100'],['463'], ['bvdw_sensitive']],
    '/science':[['180000'],['464'], ['464']],
    '/science/biology':[['180100'],['465'], ['465']],
    '/science/biology/botany':[['180102'],['465'], ['465']],
    '/science/biology/breeding':[['180103'],['465'], ['465']],
    '/science/biology/cytology':[['180104'],['465'], ['465']],
    '/science/biology/marine biology':[['180105'],['465'], ['465']],
    '/science/biology/molecular biology':[['180106'],['465'], ['465']],
    '/science/biology/zoology':[['180107'],['465'], ['465']],
    '/science/biology/zoology/endangered species':[['180108'],['465'], ['465']],
    '/science/biology/zoology/entomology':[['180109'],['465'], ['465']],
    '/science/biology/zoology/ornithology':[['180110'],['465'], ['465']],
    '/science/medicine':[['180900'],['465'], ['465']],
    '/science/medicine/cardiology':[['180901'],['465'], ['465']],
    '/science/medicine/embryology':[['180903'],['465'], ['465']],
    '/science/medicine/oncology':[['180907'],['465'], ['465']],
    '/science/medicine/orthopedics':[['180908'],['465'], ['465']],
    '/science/medicine/pediatrics':[['180909'],['465'], ['465']],
    '/science/medicine/pharmacology':[['180910'],['465'], ['465']],
    '/science/medicine/physiology':[['180911'],['465'], ['465']],
    '/science/medicine/psychology and psychiatry/psychoanalysis':[['180913'],['465'], ['465']],
    '/science/medicine/surgery/cosmetic surgery':[['180915'],['465'], ['465']],
    '/science/medicine/surgery/transplants':[['180916'],['465'], ['465']],
    '/science/chemistry':[['180200'],['466'], ['466']],
    '/science/chemistry/organic chemistry':[['180201'],['466'], ['466']],
    '/science/ecology':[['180400'],['467'], ['467']],
    '/science/ecology/pollution':[['180402'],['467'], ['467']],
    '/science/ecology/waste management/recycling':[['180404'],['467'], ['467']],
    '/science/geography':[['180600'],['469'], ['469']],
    '/science/geology':[['180700'],['470'], ['470']],
    '/science/geography/cartography':[['180601'],['470'], ['470']],
    '/science/geography/topography':[['180602'],['470'], ['470']],
    '/science/geology/mineralogy':[['180701'],['470'], ['470']],
    '/science/geology/seismology':[['180702'],['470'], ['470']],
    '/science/geology/seismology/earthquakes':[['180703'],['470'], ['470']],
    '/science/geology/volcanology':[['180704'],['470'], ['470']],
    '/science/geology/volcanology/volcanic eruptions':[['180705'],['470'], ['470']],
    '/science/physics':[['181000'],['471'], ['471']],
    '/science/physics/astrophysics':[['181001'],['471'], ['471']],
    '/science/physics/atomic physics':[['181002'],['471'], ['471']],
    '/science/physics/electromagnetism':[['181003'],['471'], ['471']],
    '/science/physics/hydraulics':[['181004'],['471'], ['471']],
    '/science/physics/nanotechnology':[['181005'],['471'], ['471']],
    '/science/physics/optics':[['181006'],['471'], ['471']],
    '/science/physics/thermodynamics':[['181008'],['471'], ['471']],
    '/science/physics/space and astronomy':[['181007'],['472'], ['472']],
    '/shopping':[['190000'],['473'], ['473']],
    '/shopping/resources/coupons':[['190404'],['474'], ['474']],
    '/shopping/gifts/flowers':[['190301'],['475'], ['475']],
    '/shopping/gifts':[['190300'],['476'], ['476']],
    '/shopping/gifts/greeting cards':[['190302'],['476'], ['476']],
    '/food and drink/food and grocery retailers':[['090800'],['477'], ['477']],
    '/food and drink/food and grocery retailers/bakeries':[['090801'],['477'], ['477']],
    '/food and drink/food and grocery retailers/grocery stores':[['090803'],['477'], ['477']],
    '/shopping/retail/wholesalers':[['190505'],['479'], ['479']],
    '/food and drink/food and grocery retailers/convenience stores':[['090802'],['479'], ['479']],
    '/hobbies and interests/games/lottery':[['110705'],['480'], ['480']],
    '/shopping/resources/contests and freebies':[['190403'],['481'], ['481']],
    '/shopping/toys':[['190600'],['482'], ['482']],
    '/shopping/toys/action figures':[['190601'],['482'], ['482']],
    '/shopping/toys/dolls':[['190602'],['482'], ['482']],
    '/shopping/toys/puppets':[['190603'],['482'], ['482']],
    '/shopping/toys/stuffed animals':[['190604'],['482'], ['482']],
    '/sports':[['210000'],['483'], ['483']],
    '/sports/football':[['212200'],['484', '488', '507'], ['484', '488', '507']],
    '/sports/boxing':[['211200'],['485'], ['485']],
    '/sports/cheerleading':[['211400'],['486'], ['486']],
    '/education/graduate school/college life':[['060703'],['487'], ['487']],
    '/sports/basketball':[['210500'],['489', '547'], ['489', '547']],
    '/sports/baseball':[['210400'],['490', '545'], ['490', '545']],
    '/sports/cricket':[['211600'],['491'], ['491']],
    '/sports/bicycling':[['210600'],['492'], ['492']],
    '/automotive and vehicles/bicycles and accessories':[['020300'],['492'], ['492']],
    '/sports/olympics/paralympic games':[['213301'],['494'], ['bvdw_sensitive']],
    '/sports/diving':[['211800'],['495'], ['495']],
    '/sports/horses':[['212900'],['496'], ['496']],
    '/sports/horse racing':[['212800'],['497'], ['497']],
    '/sports/canoeing and kayaking':[['211300'],['499'], ['499']],
    '/sports/climbing':[['211500'],['500'], ['500']],
    '/sports/paintball':[['213400'],['501'], ['501']],
    '/sports/scuba diving':[['214200'],['502'], ['502']],
    '/sports/skateboarding':[['214300'],['503'], ['503']],
    '/sports/snowboarding':[['214600'],['504'], ['504']],
    '/sports/surfing and bodyboarding':[['215000'],['505'], ['505']],
    '/sports/wakeboarding':[['215600'],['506'], ['506']],
    '/automotive and vehicles/boats and watercraft':[['020400'],['506'], ['506']],
    '/sports/hockey/field hockey':[['212701'],['509'], ['509']],
    '/sports/skating/figure skating':[['214401'],['510'], ['510']],
    '/sports/fishing':[['212100'],['511'], ['511']],
    '/sports/fishing/fly fishing':[['212101'],['511'], ['511']],
    '/sports/fishing/freshwater fishing':[['212102'],['511'], ['511']],
    '/sports/fishing/saltwater fishing':[['212103'],['511'], ['511']],
    '/sports/fishing/sport fishing':[['212104'],['511'], ['511']],
    '/sports/golf':[['212400'],['512'], ['512']],
    '/sports/gymnastics':[['212500'],['513'], ['513']],
    '/sports/gymnastics/calisthenics':[['212501'],['513'], ['513']],
    '/sports/hunting and shooting':[['213000'],['514'], ['514']],
    '/sports/hunting and shooting/skeet shooting':[['213001'],['514'], ['514']],
    '/sports/hunting and shooting/target shooting':[['213002'],['514'], ['514']],
    '/sports/skating/ice skating':[['214402'],['515'], ['515']],
    '/sports/skating/roller skating':[['214403'],['516'], ['516']],
    '/sports/skating':[['214400'],['516'], ['516']],
    '/sports/auto racing':[['210200'],['518'], ['518']],
    '/sports/auto racing/nascar':[['210201'],['518'], ['518']],
    '/sports/auto racing/rally':[['210202'],['518'], ['518']],
    '/sports/go kart':[['212300'],['518'], ['518']],
    '/sports/motorcycling':[['213200'],['519'], ['519']],
    '/sports/martial arts':[['213100'],['520'], ['520']],
    '/sports/martial arts/judo':[['213101'],['520'], ['520']],
    '/sports/martial arts/karate':[['213102'],['520'], ['520']],
    '/sports/martial arts/sumo':[['213103'],['520'], ['520']],
    '/sports/olympics':[['213300'],['521'], ['521']],
    '/sports/rodeo':[['213700'],['525'], ['525']],
    '/sports/rowing':[['213800'],['526'], ['526']],
    '/sports/rugby':[['213900'],['527'], ['527']],
    '/sports/sailing':[['214100'],['530'], ['530']],
    '/sports/skiing':[['214500'],['531'], ['531']],
    '/sports/skiing/downhill skiing':[['214501'],['531'], ['531']],
    '/sports/skiing/nordic skiing':[['214502'],['531'], ['531']],
    '/sports/billiards':[['210700'],['532'], ['532']],
    '/sports/soccer':[['214700'],['533'], ['533']],
    '/sports/badminton':[['210300'],['534'], ['534']],
    '/sports/softball':[['214800'],['535'], ['535']],
    '/sports/swimming':[['215100'],['537'], ['537']],
    '/sports/table tennis and ping-pong':[['215200'],['538'], ['538']],
    '/sports/tennis':[['215300'],['539'], ['539']],
    '/sports/volleyball':[['215500'],['541'], ['541']],
    '/sports/walking':[['215700'],['542'], ['542']],
    '/sports/water polo':[['215800'],['543'], ['543']],
    '/sports/weightlifting':[['215900'],['544'], ['544']],
    '/sports/wrestling':[['216100'],['546'], ['546']],
    '/sports/volleyball/beach volleyball':[['215501'],['548'], ['548']],
    '/sports/bodybuilding':[['211000'],['549'], ['549']],
    '/sports/bowling':[['211100'],['550'], ['550']],
    '/style and fashion':[['220000'],['552'], ['552']],
    '/style and fashion/beauty':[['220200'],['553'], ['553']],
    '/style and fashion/beauty/tattoos':[['220213'],['553'], ['553']],
    '/style and fashion/beauty/hair care':[['220211'],['554'], ['554']],
    '/style and fashion/beauty/cosmetics':[['220202'],['555'], ['555']],
    '/style and fashion/beauty/cosmetics/eyeshadow':[['220203'],['555'], ['555']],
    '/style and fashion/beauty/cosmetics/lipstick':[['220204'],['555'], ['555']],
    '/style and fashion/beauty/cosmetics/nail polish':[['220205'],['555'], ['555']],
    '/style and fashion/accessories/gloves':[['220102'],['555'], ['555']],
    '/style and fashion/accessories/scarves':[['220104'],['555'], ['555']],
    '/style and fashion/accessories/socks':[['220105'],['555'], ['555']],
    '/style and fashion/beauty/face and body care/nail care':[['220210'],['556'], ['556']],
    '/style and fashion/beauty/perfume':[['220212'],['558'], ['558']],
    '/style and fashion/beauty/cologne':[['220201'],['558'], ['558']],
    '/style and fashion/accessories':[['220100'],['561'], ['561']],
    '/style and fashion/accessories/wallets':[['220107'],['563'], ['563']],
    '/style and fashion/accessories/hats':[['220103'],['564'], ['564']],
    '/style and fashion/jewelry':[['220700'],['565', '581'], ['565', '581']],
    '/style and fashion/jewelry/bracelets':[['220701'],['565', '581'], ['565', '581']],
    '/style and fashion/accessories/watches':[['220108'],['565', '581'], ['565', '581']],
    '/style and fashion/jewelry/earrings':[['220702'],['565', '581'], ['565', '581']],
    '/style and fashion/jewelry/necklaces':[['220703'],['565', '581'], ['565', '581']],
    '/style and fashion/jewelry/rings':[['220704'],['565', '581'], ['565', '581']],
    '/style and fashion/clothing':[['220400'],['566', '575', '582'], ['566', '575', '582']],
    '/style and fashion/clothing/skirts':[['220413'],['566'], ['566']],
    '/style and fashion/clothing/shirts':[['220411'],['566', '582'], ['566', '582']],
    '/style and fashion/clothing/pants':[['220408'],['566', '582'], ['566', '582']],
    '/style and fashion/clothing/blazers':[['220401'],['567', '569'], ['567', '569']],
    '/style and fashion/clothing/shorts':[['220412'],['568', '584'], ['568', '584']],
    '/style and fashion/clothing/hoodies':[['220403'],['568', '584'], ['568', '584']],
    '/style and fashion/clothing/pants/jeans':[['220409'],['568', '584', '595'], ['568', '584', '595']],
    '/style and fashion/footwear/sneakers':[['220605'],['568', '584'], ['568', '584']],
    '/style and fashion/clothing/sweaters':[['220414'],['568', '584'], ['568', '584']],
    '/style and fashion/footwear/slippers':[['220604'],['568', '584'], ['568', '584']],
    '/style and fashion/footwear/sandals':[['220602'],['569', '584'], ['569', '584']],
    '/style and fashion/clothing/petticoats':[['220410'],['569'], ['569']],
    '/style and fashion/clothing/pajamas':[['220407'],['570'], ['570']],
    '/style and fashion/clothing/leggings':[['220405'],['570'], ['570']],
    '/style and fashion/clothing/lingerie':[['220406'],['570'], ['570']],
    '/style and fashion/clothing/jackets':[['220404'],['571', '586'], ['571', '586']],
    '/style and fashion/clothing/coats':[['220402'],['571'], ['571']],
    '/style and fashion/footwear/boots':[['220601'],['571', '586'], ['571', '586']],
    '/style and fashion/swimwear/bikinis':[['221001'],['572'], ['572']],
    '/style and fashion/swimwear':[['221000'],['572', '587'], ['572', '587']],
    '/style and fashion/footwear':[['220600'],['573'], ['573']],
    '/style and fashion/body art':[['220300'],['574'], ['574']],
    '/style and fashion/fashion designers':[['220500'],['576'], ['576']],
    '/style and fashion/luxury goods':[['220800'],['578'], ['578']],
    "/style and fashion/men 's fashion":[['220900'],['580'], ['580']],
    '/style and fashion/underwear':[['221100'],['588'], ['588']],
    '/style and fashion/footwear/shoes':[['220603'],['589'], ['589']],
    '/style and fashion/beauty/face and body care':[['220207'],['590'], ['590']],
    '/style and fashion/beauty/face and body care/body care':[['220208'],['591'], ['591']],
    '/style and fashion/beauty/face and body care/hygiene and toiletries':[['220209'],['592', '593', '594'], ['592', '593', '594']],
    '/technology and computing':[['230000'],['596'], ['596']],
    '/science/computer science/artificial intelligence':[['180301'],['597'], ['597']],
    '/technology and computing/hardware/computer/portable computer':[['230921'],['598'], ['598']],
    '/technology and computing/computer certification':[['230100'],['599'], ['599']],
    '/technology and computing/computer reviews':[['230300'],['599'], ['599']],
    '/technology and computing/hardware':[['230900'],['599'], ['599']],
    '/technology and computing/hardware/computer':[['230901'],['599'], ['599']],
    '/technology and computing/hardware/computer components':[['230902'],['599'], ['599']],
    '/technology and computing/hardware/computer components/chips and processors':[['230903'],['599'], ['599']],
    '/technology and computing/hardware/computer components/disks':[['230904'],['599'], ['599']],
    '/technology and computing/hardware/computer components/graphics cards':[['230905'],['599'], ['599']],
    '/technology and computing/hardware/computer components/memory':[['230906'],['599'], ['599']],
    '/technology and computing/hardware/computer components/memory/portable':[['230907'],['599'], ['599']],
    '/technology and computing/hardware/computer components/motherboards':[['230908'],['599'], ['599']],
    '/technology and computing/hardware/computer components/sound cards':[['230909'],['599'], ['599']],
    '/science/computer science':[['180300'],['599'], ['599']],
    '/technology and computing/hardware/computer networking':[['230910'],['600'], ['600']],
    '/technology and computing/networking/vpn and remote access':[['231202'],['600'], ['600']],
    '/technology and computing/networking/network monitoring and management':[['231201'],['600'], ['600']],
    '/technology and computing/networking':[['231200'],['600'], ['600']],
    '/technology and computing/hardware/computer networking/router':[['230911'],['600'], ['600']],
    '/technology and computing/hardware/computer networking/wireless technology':[['230912'],['600'], ['600']],
    '/science/computer science/distributed systems':[['180303'],['600'], ['600']],
    '/technology and computing/hardware/computer peripherals':[['230913'],['601'], ['601']],
    '/technology and computing/consumer electronics/audio equipment/headphones':[['230502'],['601'], ['601']],
    '/technology and computing/consumer electronics/audio equipment/speakers':[['230503'],['601'], ['601']],
    '/technology and computing/consumer electronics/audio equipment/stereo systems and components':[['230504'],['601'], ['601']],
    '/technology and computing/hardware/computer peripherals/computer monitors':[['230914'],['601'], ['601']],
    '/technology and computing/hardware/computer peripherals/printers, copiers and fax':[['230915'],['601'], ['601']],
    '/technology and computing/hardware/computer peripherals/printers, copiers and fax/copiers':[['230916'],['601'], ['601']],
    '/technology and computing/hardware/computer peripherals/printers, copiers and fax/fax machines':[['230917'],['601'], ['601']],
    '/technology and computing/hardware/computer peripherals/printers, copiers and fax/printers':[['230918'],['601'], ['601']],
    '/technology and computing/hardware/computer peripherals/printers, copiers and fax/scanners':[['230919'],['601'], ['601']],
    '/technology and computing/software':[['231500'],['602'], ['602']],
    '/science/computer science/software engineering':[['180304'],['602', '631'], ['602', '631']],
    '/technology and computing/software/graphics software':[['231504'],['603', '614'], ['603', '614']],
    '/technology and computing/software/shareware and freeware':[['231507'],['605'], ['605']],
    '/technology and computing/software/desktop video':[['231503'],['606'], ['606']],
    '/technology and computing/software/net conferencing':[['231506'],['607'], ['607']],
    '/technology and computing/computer security/antivirus and malware':[['230401'],['608'], ['608']],
    '/technology and computing/internet technology/web search':[['231009'],['609', '627'], ['609', '627']],
    '/technology and computing/software/graphics software/animation':[['231505'],['610'], ['610']],
    '/technology and computing/software/databases':[['231501'],['611'], ['611']],
    '/technology and computing/software/desktop publishing':[['231502'],['612'], ['612']],
    '/art and entertainment/radio/podcasts':[['010901'],['613'], ['613']],
    '/technology and computing/operating systems':[['231300'],['615'], ['615']],
    '/technology and computing/operating systems/linux':[['231301'],['615'], ['615']],
    '/technology and computing/operating systems/mac os':[['231302'],['615'], ['615']],
    '/technology and computing/operating systems/unix':[['231303'],['615'], ['615']],
    '/technology and computing/operating systems/windows':[['231304'],['615'], ['615']],
    '/technology and computing/data centers':[['230600'],['616'], ['616']],
    '/technology and computing/hardware/computer/desktop computer':[['230920'],['617'], ['617']],
    '/technology and computing/computer security/network security':[['230402'],['618'], ['618']],
    '/science/computer science/cryptography':[['180302'],['618'], ['618']],
    '/technology and computing/internet technology':[['231000'],['619'], ['619']],
    '/technology and computing/internet technology/ecommerce':[['231002'],['619'], ['619']],
    '/technology and computing/internet technology/internet cafes':[['231004'],['619'], ['619']],
    '/technology and computing/internet technology/web clip art':[['231007'],['619'], ['619']],
    '/technology and computing/hardware/computer/servers':[['230925'],['620'], ['620']],
    '/technology and computing/internet technology/web design and html':[['231008'],['621', '622', '629'], ['621', '622', '629']],
    '/technology and computing/internet technology/email':[['231003'],['623'], ['623']],
    '/technology and computing/technical support':[['231700'],['626'], ['626']],
    '/technology and computing/internet technology/social network':[['231006'],['628'], ['628']],
    '/technology and computing/internet technology/chat':[['231001'],['628'], ['628']],
    '/technology and computing/internet technology/web search/people search':[['231010'],['628'], ['628']],
    '/technology and computing/hardware/computer/portable computer/laptop':[['230922'],['630'], ['630']],
    '/technology and computing/hardware/computer/portable computer/palmtops and pdas':[['230923'],['630'], ['630']],
    '/technology and computing/programming languages':[['231400'],['631'], ['631']],
    '/technology and computing/programming languages/c and c++':[['231401'],['631'], ['631']],
    '/technology and computing/programming languages/java':[['231402'],['631'], ['631']],
    '/technology and computing/programming languages/javascript':[['231403'],['631'], ['631']],
    '/technology and computing/programming languages/visual basic':[['231404'],['631'], ['631']],
    '/technology and computing/consumer electronics':[['230500'],['632'], ['632']],
    '/technology and computing/consumer electronics/radios':[['230520'],['632'], ['632']],
    '/technology and computing/consumer electronics/telephones':[['230521'],['632'], ['632']],
    '/technology and computing/electronic components':[['230700'],['632'], ['632']],
    '/technology and computing/consumer electronics/camera and photo equipment':[['230505'],['633'], ['633']],
    '/technology and computing/consumer electronics/camera and photo equipment/cameras and camcorders':[['230506'],['633'], ['633']],
    '/technology and computing/consumer electronics/camera and photo equipment/cameras and camcorders/camera bags':[['230508'],['633'], ['633']],
    '/technology and computing/consumer electronics/camera and photo equipment/cameras and camcorders/camera batteries':[['230509'],['633'], ['633']],
    '/technology and computing/consumer electronics/camera and photo equipment/cameras and camcorders/camera lenses':[['230510'],['633'], ['633']],
    '/technology and computing/consumer electronics/camera and photo equipment/telescopes':[['230512'],['633'], ['633']],
    '/technology and computing/consumer electronics/tv and video equipment/home theater systems':[['230526'],['634'], ['634']],
    '/technology and computing/consumer electronics/tv and video equipment':[['230524'],['634'], ['634']],
    '/technology and computing/consumer electronics/tv and video equipment/dvrs and set-top boxes':[['230525'],['634'], ['634']],
    '/technology and computing/consumer electronics/tv and video equipment/projectors':[['230527'],['634'], ['634']],
    '/technology and computing/consumer electronics/tv and video equipment/televisions':[['230528'],['634'], ['634']],
    '/technology and computing/consumer electronics/tv and video equipment/televisions/hdtvs':[['230529'],['634'], ['634']],
    '/technology and computing/consumer electronics/tv and video equipment/televisions/lcd tvs':[['230530'],['634'], ['634']],
    '/technology and computing/consumer electronics/tv and video equipment/televisions/plasma tvs':[['230531'],['634'], ['634']],
    '/technology and computing/consumer electronics/tv and video equipment/video players and recorders':[['230532'],['634'], ['634']],
    '/technology and computing/consumer electronics/tv and video equipment/video players and recorders/blu-ray players and recorders':[['230533'],['634'], ['634']],
    '/technology and computing/consumer electronics/telephones/mobile phones/smart phones':[['230523'],['635'], ['635']],
    '/technology and computing/hardware/computer/portable computer/tablet':[['230924'],['636'], ['636']],
    '/technology and computing/consumer electronics/ebook reader':[['230513'],['636'], ['636']],
    '/technology and computing/consumer electronics/portable entertainment':[['230519'],['637'], ['637']],
    '/business and industrial/automation/robotics':[['030401'],['638'], ['638']],
    '/art and entertainment/movies and tv/television':[['010719'],['640'], ['640']],
    '/art and entertainment/comics and animation/anime and manga':[['010301'],['641'], ['641']],
    '/art and entertainment/movies and tv/classics':[['010705'],['643'], ['643']],
    '/art and entertainment/movies and tv/cult classics':[['010708'],['643'], ['643']],
    '/art and entertainment/movies and tv/bollywood':[['010703'],['643'], ['643']],
    '/art and entertainment/movies and tv/classics/silent films':[['010706'],['643'], ['643']],
    '/art and entertainment/movies and tv/reality':[['010716'],['651'], ['651']],
    '/travel':[['240000'],['653'], ['653']],
    '/style and fashion/accessories/backpacks':[['220101'],['654'], ['654']],
    '/automotive and vehicles/bicycles and accessories/mountain bikes':[['020301'],['654'], ['654']],
    '/style and fashion/accessories/sunglasses':[['220106'],['654'], ['654']],
    '/travel/tourist destinations':[['240600'],['655'], ['655']],
    '/travel/tourist destinations/africa':[['240601'],['656'], ['656']],
    '/travel/tourist destinations/japan':[['240610'],['657'], ['657']],
    '/travel/tourist destinations/australia and new zealand':[['240602'],['658'], ['658']],
    '/travel/tourist destinations/europe':[['240606'],['659'], ['659']],
    '/travel/tourist destinations/eastern europe':[['240605'],['659'], ['659']],
    '/travel/tourist destinations/italy':[['240609'],['659'], ['659']],
    '/travel/tourist destinations/france':[['240607'],['659'], ['659']],
    '/travel/tourist destinations/greece':[['240608'],['659'], ['659']],
    '/travel/tourist destinations/united kingdom':[['240618'],['659'], ['659']],
    '/travel/tourist destinations/canada':[['240603'],['660'], ['660']],
    '/travel/tourist destinations/south america':[['240615'],['662'], ['662']],
    '/travel/tourist destinations/caribbean':[['240604'],['662'], ['662']],
    '/travel/tourist destinations/mexico and central america':[['240611'],['662'], ['662']],
    '/travel/specialty travel':[['240500'],['664'], ['664']],
    '/travel/specialty travel/ecotourism':[['240502'],['664'], ['664']],
    '/travel/specialty travel/vineyards':[['240504'],['664'], ['664']],
    '/travel/tourist destinations/ski resorts':[['240614'],['664'], ['664']],
    '/travel/specialty travel/adventure travel':[['240501'],['665'], ['665']],
    '/travel/traveling with kids':[['241100'],['666'], ['666']],
    '/travel/honeymoons and getaways':[['240300'],['667'], ['667']],
    '/travel/tourist facilities/hotel':[['240702'],['668'], ['668']],
    '/travel/hotels':[['240400'],['668'], ['668']],
    '/travel/tourist facilities':[['240700'],['668'], ['668']],
    '/travel/transports/train travel':[['240813'],['669'], ['669']],
    '/travel/transports/road travel':[['240809'],['670'], ['670']],
    '/travel/tourist destinations/spas':[['240616'],['671'], ['671']],
    '/travel/transports/air travel':[['240801'],['672'], ['672']],
    '/travel/tourist destinations/seaside resort':[['240613'],['673'], ['673']],
    '/food and drink/food/breakfast foods':[['090805'],['674'], ['674']],
    '/travel/budget travel':[['240100'],['675'], ['675']],
    '/travel/business travel':[['240200'],['676'], ['676']],
    '/travel/tourist facilities/camping':[['240701'],['677'], ['677']],
    '/travel/transports/sea travel/cruises':[['240812'],['678'], ['678']],
    '/travel/transports/sea travel':[['240811'],['678'], ['678']],
    '/hobbies and interests/games/video and computer games':[['110707'],['680'], ['680']],
    '/technology and computing/consumer electronics/game systems and consoles':[['230514'],['681'], ['681']],
    '/technology and computing/consumer electronics/game systems and consoles/nintendo':[['230515'],['681'], ['681']],
    '/technology and computing/consumer electronics/game systems and consoles/playstation':[['230516'],['681'], ['681']],
    '/technology and computing/consumer electronics/game systems and consoles/xbox':[['230517'],['681'], ['681']],
    '/society/crime/personal offense':[['200103'],['6i4dB6'], ['bvdw_sensitive']],
    '/law, govt and politics/espionage and intelligence/terrorism':[['130303'],['8FD8nI'], ['bvdw_sensitive']],
    '/business and industrial/war industry/weaponry':[['032901'],['avbNf2'], ['bvdw_sensitive']],
    '/business and industrial/war industry':[['032900'],['avbNf2'], ['bvdw_sensitive']],
    '/society/crime/personal offense/hate crime':[['200105'],['HxqYV1', 'j9PaO9'], ['bvdw_sensitive']],
    '/society/crime/personal offense/homicide':[['200106'],['I4GWl6'], ['bvdw_sensitive']],
    '/society/crime/personal offense/assault':[['200104'],['I4GWl6'], ['bvdw_sensitive']],
    '/law, govt and politics/legal issues/death penalty':[['130702'],['I4GWl6'], ['bvdw_sensitive']],
    '/technology and computing/consumer electronics/tv and video equipment/video players and recorders/dvd players and recorders':[['230534'],['mm3UXx'], ['bvdw_sensitive']],
    '/society/crime/drug trafficking':[['200101'],['pg0WhF'], ['bvdw_sensitive']],
    '/society/crime/sexual offence':[['200121'],['Rm3SiT'], ['bvdw_sensitive']],
    '/society/crime/sexual offence/paedophilia':[['200122'],['Rm3SiT'], ['bvdw_sensitive']],
    '/society/crime/sexual offence/prostitution':[['200123'],['Rm3SiT'], ['bvdw_sensitive']],
    '/society/crime/sexual offence/rape':[['200124'],['Rm3SiT'], ['bvdw_sensitive']],
    '/bvdw_sensitive':[['040000'],['v9i3On'], ['bvdw_sensitive']],
    '/society/crime':[['200100'],['XtODT3'], ['bvdw_sensitive']],
    '/society/crime/organized crime':[['200102'],['XtODT3'], ['bvdw_sensitive']],
    '/society/crime/personal offense/human trafficking':[['200107'],['XtODT3'], ['bvdw_sensitive']],
    '/society/crime/personal offense/kidnapping':[['200108'],['XtODT3'], ['bvdw_sensitive']],
    '/law, govt and politics/legal issues/human rights':[['130703'],['XtODT3'], ['bvdw_sensitive']],
    '/society/crime/property crime':[['200110'],['XtODT3'], ['bvdw_sensitive']],
    '/society/crime/property crime/arson':[['200111'],['XtODT3'], ['bvdw_sensitive']],
    '/society/crime/property crime/bribery':[['200112'],['XtODT3'], ['bvdw_sensitive']],
    '/society/crime/property crime/embezzlement':[['200114'],['XtODT3'], ['bvdw_sensitive']],
    '/society/crime/property crime/fraud':[['200115'],['XtODT3'], ['bvdw_sensitive']],
    '/society/crime/property crime/larceny':[['200116'],['XtODT3'], ['bvdw_sensitive']],
    '/society/crime/property crime/piracy':[['200117'],['XtODT3'], ['bvdw_sensitive']],
    '/society/crime/property crime/smuggling':[['200119'],['XtODT3'], ['bvdw_sensitive']],
    '/society/crime/property crime/usury':[['200120'],['XtODT3'], ['bvdw_sensitive']],
    '/society/racism':[['200400'],['Z7rJBM'], ['bvdw_sensitive']],
    '/society/gay life':[['200300'],['Z7rJBM'], ['bvdw_sensitive']],
}        
    Spark.creativeService = {
        createElement: function (e, a, tn, at) {
            var el = document.createElement(e);
                for (var i in a) {
                    if (a.hasOwnProperty(i)) {
                        el.setAttribute(i, a[i]);
                    }
                }
                if (tn) {
                    el.appendChild(document.createTextNode(tn));
                }
                at.appendChild(el);
                return el;
    },
    createFireplace : function(data){
            var containerWidth = data["slot"].parentElement.offsetWidth;
            var desktop = false;
            var tablet = false;
            var oms_admo_fireplace_ids = [];
            var oms_admo_fireplace_classes = [];
            var fireplace = null;
            var fireplace_tablet =  null;
            var sky_left_image = null;
            var sky_right_image = null;
            var headerHeight = 0;
            var admo_bgc_div_left = null;
            var admo_bgc_div_right = null;
            var bgc_right_div = null;
            var bgc_left_div = null;
            var setTime = false;
            var billboard_desktop = null;
            var marginLeft = 0;
            var marginLeftSkyRight = 0;
            var marginLeftSkyLeft = 0;
            var left = 0;
            var skyTop = 0;
            var wmnBool = false;
            var myselfBool = false;
            var screenWidth = 1770;
            var hoerzuBool = true;
            var newVersion = false;
            var funkeHoerzuBool = false;
            var hoerzuFireplaceBool = false;
            var gofemininBool = false;
            var  westfunkBool = false;   
            var fireplaceWidth = 0;
            var wordpressBool = false;

             data["slot"].style.width = '800px';

             if (typeof data["billboard_iframe_desktop"] !== 'undefined') {
                  fireplaceWidth = data["billboard_iframe_desktop"]["width"];
             }else{
                  fireplaceWidth = data["billboard_image_desktop"]["width"];
             }

            getSite();
            
           
            if(hoerzuFireplaceBool){
                screenWidth = 1300;
            }
            if(wordpressBool){
                if(/morgenpost.de|abendblatt.de|thueringer-allgemeine.de|otz.de|tlz.de|braunschweiger-zeitung.de|harzkurier.de|waz.de|wp.de|wr.de|ikz-online.de|nrz.de/.test(window.location.href)){
                    screenWidth = 1100; 
                } else{
                    screenWidth = 1250; 
                }
              
            }

            if (parent.innerWidth < screenWidth){ 
                  createTablet();
            }else{
                  createDesktop();
            }
            data["slot"].style.position = 'absolute';
            
            //resize
            window.addEventListener('resize', function() {
                if (window.innerWidth < screenWidth){ 
                    if(!tablet && desktop){
                        fireplace.style.display = "none";
                        if (fireplace_tablet != null) {
                            fireplace_tablet.style.display = "block";
                         }else{
                            createTablet();
                         }
                        tablet = true;
                        desktop = false;
                    }
                     
                    if(wmnBool && window.innerWidth < 1100){
                       fireplace_tablet.style.width = "728px";
                       fireplace_tablet.style.height = "90px";
                    }else{
                      if (typeof data["billboard_iframe_tablet"] !== 'undefined') {
                        fireplace_tablet.style.width = data["billboard_iframe_tablet"]["width"]+"px";
                        fireplace_tablet.style.height = data["billboard_iframe_tablet"]["height"]+"px";
                      }else{
                        fireplace_tablet.style.width = data["billboard_image_tablet"]["width"]+"px";
                        fireplace_tablet.style.height = data["billboard_image_tablet"]["height"]+"px";
                      }
                    }
                }else{
                    if (!desktop && tablet) {
                        fireplace_tablet.style.display = "none";
                        if (fireplace != null) {
                            fireplace.style.display = "block";
                        }else{
                            createDesktop();
                        }
                         
                        tablet = false;
                        desktop = true;
                    }

                    if(fireplace != null){
                       
                        if(data["background_click"]){
                          
                            if (newVersion) {
                                if(setTime){
                                    window.setTimeout(function() {
                                        if (typeof data["billboard_iframe_desktop"] !== 'undefined') { 
                                         admo_bgc_div_left.style.width = sky_left_iframe.getBoundingClientRect().right + 'px';
                                         admo_bgc_div_right.style.width = window.innerWidth - sky_right_iframe.getBoundingClientRect().x + 'px'; 

                                         admo_bgc_div_left.style.height = window.innerHeight - headerHeight + 'px';  
                                         admo_bgc_div_right.style.height = window.innerHeight - headerHeight + 'px';
                                        }else{
                                         admo_bgc_div_left.style.width = sky_left_image.getBoundingClientRect().right + 'px';
                                         admo_bgc_div_right.style.width = window.innerWidth - sky_right_image.getBoundingClientRect().x + 'px'; 

                                         admo_bgc_div_left.style.height = window.innerHeight - headerHeight + 'px';  
                                         admo_bgc_div_right.style.height = window.innerHeight - headerHeight + 'px';
                 
                                        } 
                                    }, 50);
                                }
                            }else{
                                if(setTime){
                                  window.setTimeout(function() {
                                    if (typeof data["billboard_iframe_desktop"] !== 'undefined') { 
                                         admo_bgc_div_left.style.width = sky_left_iframe.getBoundingClientRect().right + 'px';
                                        if (myselfBool) {
                                            admo_bgc_div_right.style.width = window.innerWidth - sky_right_iframe.getBoundingClientRect().x - 10 + 'px'; 
                                        }else{
                                            admo_bgc_div_right.style.width = window.innerWidth - sky_right_iframe.getBoundingClientRect().x + 'px'; 
                                        }
                                         

                                         admo_bgc_div_left.style.marginLeft = data["sky_left_iframe"]["width"] - sky_left_iframe.getBoundingClientRect().right +'px';    
                                         admo_bgc_div_right.style.marginRight = data["sky_right_iframe"]["width"] - (window.innerWidth - sky_right_iframe.getBoundingClientRect().x) +'px';
                                        
                                         //window.innerHeight - headerHeight;

                                         admo_bgc_div_left.style.height = window.innerHeight - headerHeight + 'px';  
                                         admo_bgc_div_right.style.height = window.innerHeight - headerHeight + 'px';
                                    }else{
                                         admo_bgc_div_left.style.width = sky_left_image.getBoundingClientRect().right + 'px';
                                         if (myselfBool) {
                                            admo_bgc_div_right.style.width = window.innerWidth - sky_right_image.getBoundingClientRect().x + 'px'; 
                                         }else{
                                            admo_bgc_div_right.style.width = window.innerWidth - sky_right_image.getBoundingClientRect().x + 'px'; 
                                         }
                                         
                                         if (gofemininBool) {
                                            admo_bgc_div_left.style.marginLeft = - sky_left_image.getBoundingClientRect().right +'px';    
                                            admo_bgc_div_right.style.marginRight = - (window.innerWidth - sky_right_image.getBoundingClientRect().x) +'px';
                                         
                                         }else{
                                            admo_bgc_div_left.style.marginLeft = data["sky_left_image"]["width"] - sky_left_image.getBoundingClientRect().right +'px';    
                                            admo_bgc_div_right.style.marginRight = data["sky_right_image"]["width"] - (window.innerWidth - sky_right_image.getBoundingClientRect().x) +'px';
                                        }

                                         
                                         //window.innerHeight - headerHeight;

                                         admo_bgc_div_left.style.height = window.innerHeight - headerHeight + 'px';  
                                         admo_bgc_div_right.style.height = window.innerHeight - headerHeight + 'px';
                                    } 
                                  }, 50);
                                }
                            }
                        }
                    }
                }
            });
        
            function createDesktop(){
                desktop = true;
                getSite();
             
          
                if (typeof data["billboard_iframe_desktop"] !== 'undefined') {
                    if (newVersion) {
                         if (marginLeft > 1) {
                             fireplace = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace', 'style': 'margin-left:-'+marginLeft+'px;position:relative;'}, '', data["slot"].parentElement);
                         }else{
                             fireplace = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace', 'style': 'position:relative;'}, '', data["slot"].parentElement);
                         
                         }
                      
                    
                        billboard_desktop = Spark.creativeService["createElement"]('div', {id: 'sb','style': 'height:'+data["billboard_iframe_desktop"]["height"]+'px; width:'+data["billboard_iframe_desktop"]["width"]+'px;'}, '', fireplace);
                        Spark.creativeService["createElement"]('iframe', {'src': data["billboard_iframe_desktop"]["iframeurl"], 'scrolling':'no','frameborder':'0','marginheight':'0','marginwidth':'0','vspace':'0','hspace':'0', 'style': 'border: none; width: ' + data["billboard_iframe_desktop"]["width"] + 'px; height: ' + data["billboard_iframe_desktop"]["height"] + 'px'}, '', billboard_desktop);
                         

                        var sky_rechts_ifr = Spark.creativeService["createElement"]('div', {'style': 'position: absolute;left:'+left+'px;'}, '', fireplace);
                        sky_right_iframe = Spark.creativeService["createElement"]('div', {'id': 'sky_right_iframe','style': ' z-index:99; top:'+ headerHeight +'px; height:'+data["sky_right_iframe"]["height"]+'px; width:'+data["sky_right_iframe"]["width"]+'px;'}, '', sky_rechts_ifr);
                        Spark.creativeService["createElement"]('iframe', {'src': data["sky_right_iframe"]["iframeurl"],'scrolling':'no','frameborder':'0','marginheight':'0','marginwidth':'0','vspace':'0','hspace':'0','style': 'border: none; width: ' + data["sky_right_iframe"]["width"] + 'px; height: ' + data["sky_right_iframe"]["height"] + 'px'}, '', sky_right_iframe);
                         
                      
                        var sky_links_ifr = Spark.creativeService["createElement"]('div', {'style': 'position: absolute;left:0px'}, '', fireplace);
                        sky_left_iframe = Spark.creativeService["createElement"]('div', {'id': 'sky_left_iframe','style':' z-index:99; top:'+headerHeight+'px;height:'+data["sky_left_iframe"]["height"]+'px; width:'+data["sky_left_iframe"]["width"]+'px;'}, '', sky_links_ifr);
                        
                        Spark.creativeService["createElement"]('iframe', {'src': data["sky_left_iframe"]["iframeurl"],'scrolling':'no','frameborder':'0','marginheight':'0','marginwidth':'0','vspace':'0','hspace':'0','style': 'border: none; width: ' + data["sky_left_iframe"]["width"] + 'px; height: ' + data["sky_left_iframe"]["height"] + 'px'}, '', sky_left_iframe);
                         
                        if(data["background_click"]){
                           createBgDiv();
                           window.document.onclick = bgclick;
                        } 

                        /////////////////alte Version   
                    }else{ 
                        if (data["slot"].parentElement.getBoundingClientRect().left > data["sky_left_iframe"]["width"]) {
                          if(marginLeft == 0){
                             marginLeft = (((data["billboard_iframe_desktop"]["width"] - containerWidth) / 2));
                          }
                          if(funkeHoerzuBool) {
                             fireplace = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace', 'style': 'height:'+data["billboard_iframe_desktop"]["height"]+'px; margin-left: -' + marginLeft +'px;'}, '', data["slot"].parentElement);
                          }else{
                             fireplace = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace', 'style': 'position:relative; height:'+data["billboard_iframe_desktop"]["height"]+'px; margin-left: -' + marginLeft +'px;'}, '', data["slot"].parentElement);
                          }
               
                        }else{
                            if(marginLeft == 0){
                                marginLeft = (data["sky_left_iframe"]["width"]+15);
                            }
                            if (funkeHoerzuBool) {
                                fireplace = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace', 'style': 'height:'+data["billboard_iframe_desktop"]["height"]+'px; margin-left: -' + marginLeft + 'px;'}, '', data["slot"].parentElement);
                            }else{
                                fireplace = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace', 'style': 'position:relative; height:'+data["billboard_iframe_desktop"]["height"]+'px; margin-left: -' + marginLeft + 'px;'}, '', data["slot"].parentElement);
                            }
                        }
                        data["slot"].style.marginLeft = - (((data["billboard_iframe_desktop"]["width"] - containerWidth) / 2)) + "px";  
                        
                        if(westfunkBool){
                            billboard_desktop = Spark.creativeService["createElement"]('div', {'style': 'position: absolute; width: '+data["billboard_iframe_desktop"]["width"]+'px '}, '', fireplace);
                        } else {
                            billboard_desktop = Spark.creativeService["createElement"]('div', {'style': 'position: absolute; '}, '', fireplace);
                        }
                        
                        Spark.creativeService["createElement"]('iframe', {'src': data["billboard_iframe_desktop"]["iframeurl"], 'scrolling':'no','frameborder':'0','marginheight':'0','marginwidth':'0','vspace':'0','hspace':'0', 'style': 'border: none; width: ' + data["billboard_iframe_desktop"]["width"] + 'px; height: ' + data["billboard_iframe_desktop"]["height"] + 'px'}, '', billboard_desktop);
                         
                        if(marginLeftSkyRight == 0){
                           sky_right_iframe = Spark.creativeService["createElement"]('div', {'id': 'sky_right_iframe','style': 'position: absolute; z-index:3; right: 0px;top:'+data["billboard_iframe_desktop"]["height"] + 'px'}, '', billboard_desktop);
                         
                        }else{
                           if (funkeHoerzuBool) {
                              sky_right_iframe = Spark.creativeService["createElement"]('div', {'id': 'sky_right_image','style': 'position: absolute;  z-index:3; left:'+marginLeftSkyRight+'px;top:0px'}, '', billboard_desktop);
                         
                           }else if (gofemininBool) {
                            sky_right_iframe = Spark.creativeService["createElement"]('div', {'id': 'sky_right_image','style': 'position: absolute;  z-index:3; right: -'+marginLeftSkyRight+'px;top:0px'}, '', billboard_desktop);
                         
                           }
                           else{
                              sky_right_iframe = Spark.creativeService["createElement"]('div', {'id': 'sky_right_image','style': 'position: absolute;  z-index:3; margin-left:'+marginLeftSkyRight+'px;top:0px'}, '', billboard_desktop);
                         
                           }
                        }
             
                        Spark.creativeService["createElement"]('iframe', {'src': data["sky_right_iframe"]["iframeurl"],'scrolling':'no','frameborder':'0','marginheight':'0','marginwidth':'0','vspace':'0','hspace':'0','style': 'border: none; width: ' + data["sky_right_iframe"]["width"] + 'px; height: ' + data["sky_right_iframe"]["height"] + 'px'}, '', sky_right_iframe);
                         
                        if(marginLeftSkyLeft == 0){
                            sky_left_iframe = Spark.creativeService["createElement"]('div', {'id': 'sky_left_iframe','style': 'position: absolute;  z-index:3; left: 0px;top:'+data["billboard_iframe_desktop"]["height"] + 'px'}, '', billboard_desktop);
                        }else{
                            if (funkeHoerzuBool) {
                              sky_left_iframe = Spark.creativeService["createElement"]('div', {'id': 'sky_left_image','style': 'position: absolute;  z-index:3;top: 0px;left: -'+marginLeftSkyLeft+ 'px'}, '', billboard_desktop);
                        
                            }else{
                              sky_left_iframe = Spark.creativeService["createElement"]('div', {'id': 'sky_left_image','style': 'position: absolute;  z-index:3;top: 0px;margin-left: -'+marginLeftSkyLeft+ 'px'}, '', billboard_desktop);
                            }
                        }   
             
                        Spark.creativeService["createElement"]('iframe', {'src': data["sky_left_iframe"]["iframeurl"],'scrolling':'no','frameborder':'0','marginheight':'0','marginwidth':'0','vspace':'0','hspace':'0','style': 'border: none; width: ' + data["sky_left_iframe"]["width"] + 'px; height: ' + data["sky_left_iframe"]["height"] + 'px'}, '', sky_left_iframe);
                         


                        if(data["background_click"]){
                            createBgDiv();
                            window.document.onclick = bgclick;
                            if(setTime){
                              window.setTimeout(function() {
                                 
                                admo_bgc_div_left.style.width = sky_left_iframe.getBoundingClientRect().right + 'px';
                                if (myselfBool) {
                                   admo_bgc_div_right.style.width = window.innerWidth - sky_right_iframe.getBoundingClientRect().x - 10 + 'px'; 
                                }else{
                                    admo_bgc_div_right.style.width = window.innerWidth - sky_right_iframe.getBoundingClientRect().x + 'px'; 
                                }
                                
    
                                admo_bgc_div_left.style.marginLeft = data["sky_left_iframe"]["width"] - sky_left_iframe.getBoundingClientRect().right +'px';    
                                admo_bgc_div_right.style.marginRight = data["sky_right_iframe"]["width"] - (window.innerWidth - sky_right_iframe.getBoundingClientRect().x) +'px';
                               

                              }, 50);
                            } 
                        }
                    }
                }else{
        
                    if (newVersion) {
                        if (marginLeft > 1){
                           fireplace = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace', 'style': 'margin-left:-'+marginLeft+'px; position:relative;'}, '', data["slot"].parentElement);
                        }else{
                           fireplace = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace', 'style': 'position:relative;'}, '', data["slot"].parentElement);
                        }

                    billboard_desktop = Spark.creativeService["createElement"]('div', {id: 'sb','style': 'height:'+data["billboard_image_desktop"]["height"]+'px; width:'+data["billboard_image_desktop"]["width"]+'px;'}, '', fireplace);
                       
                    if (typeof data["billboard_image_desktop"]["targeturl"] !==  "undefined") {
                        if(typeof data["billboard_image_desktop"]["targeturlBiboDesktop"] !==  "undefined"){
                            if(typeof data["billboard_image_desktop"]["targetwindow"] !==  "undefined"){
                                var billboard_desktop_a = Spark.creativeService["createElement"]('a',{'href': data["billboard_image_desktop"]["targeturlBiboDesktop"], 'target': data["billboard_image_desktop"]["targetwindow"]}, '', billboard_desktop);
                            }else{
                                var billboard_desktop_a = Spark.creativeService["createElement"]('a',{'href': data["billboard_image_desktop"]["targeturlBiboDesktop"], 'target': '_blank'}, '', billboard_desktop);
                            }
                        }else{
                            if(typeof data["billboard_image_desktop"]["targetwindow"] !==  "undefined"){
                              var billboard_desktop_a = Spark.creativeService["createElement"]('a',{'href': data["billboard_image_desktop"]["targeturl"], 'target': data["billboard_image_desktop"]["targetwindow"]}, '', billboard_desktop);
                            }else{
                                var billboard_desktop_a = Spark.creativeService["createElement"]('a',{'href': data["billboard_image_desktop"]["targeturl"], 'target': '_blank'}, '', billboard_desktop);
                            }
                        }
                        Spark.creativeService["createElement"]('img', {'src': data["billboard_image_desktop"]["imageurl"], 'style': 'width: ' + data["billboard_image_desktop"]["width"] + 'px; height: ' + data["billboard_image_desktop"]["height"] + 'px'}, '', billboard_desktop_a);

                        // if(typeof data["billboard_image_desktop"]["targetwindow"] !==  "undefined"){
                        //     var billboard_desktop_a = Spark.creativeService["createElement"]('a',{'href': data["billboard_image_desktop"]["targeturl"], 'target': data["billboard_image_desktop"]["targetwindow"]}, '', billboard_desktop);
                        // }else{
                        //     var billboard_desktop_a = Spark.creativeService["createElement"]('a',{'href': data["billboard_image_desktop"]["targeturl"], 'target': '_blank'}, '', billboard_desktop);
                        // }

                    }else{
                        if (typeof data["targeturl"] !==  "undefined") {
                            if(typeof data["targetwindow"] !==  "undefined"){
                              var billboard_desktop_a = Spark.creativeService["createElement"]('a',{'href': data["targeturl"], 'target': data["targetwindow"]}, '', billboard_desktop);
                            }else{
                              var billboard_desktop_a = Spark.creativeService["createElement"]('a',{'href': data["targeturl"], 'target': '_blank'}, '', billboard_desktop);
                            }
                            Spark.creativeService["createElement"]('img', {'src': data["billboard_image_desktop"]["imageurl"], 'style': 'width: ' + data["billboard_image_desktop"]["width"] + 'px; height: ' + data["billboard_image_desktop"]["height"] + 'px'}, '', billboard_desktop_a);
                           
                        }else{
                            Spark.creativeService["createElement"]('img', {'src': data["billboard_image_desktop"]["imageurl"], 'style': 'width: ' + data["billboard_image_desktop"]["width"] + 'px; height: ' + data["billboard_image_desktop"]["height"] + 'px'}, '', billboard_desktop);
                        }
                    }

                    var sky_rechts_img = Spark.creativeService["createElement"]('div', {'style': 'position: absolute;left:'+left+'px;'}, '', fireplace);
                    sky_right_image = Spark.creativeService["createElement"]('div', {'id': 'sky_right_image','style': 'z-index:99; top:'+ headerHeight +'px; height:'+data["sky_right_image"]["height"]+'px; width:'+data["sky_right_image"]["width"]+'px;'}, '', sky_rechts_img);
                       
           
                    if (typeof data["sky_right_image"]["targeturl"] !==  "undefined") {
                        if(typeof data["sky_right_image"]["targeturlSkyRight"] !==  "undefined"){
                            if(typeof data["sky_right_image"]["targetwindow"] !==  "undefined"){
                                var sky_right_image_a = Spark.creativeService["createElement"]('a',{'href': data["sky_right_image"]["targeturlSkyRight"], 'target': data["sky_right_image"]["targetwindow"]}, '', sky_right_image);
                            }else{
                                var sky_right_image_a = Spark.creativeService["createElement"]('a',{'href': data["sky_right_image"]["targeturlSkyRight"], 'target': '_blank'}, '',sky_right_image);
                            }
                        }else{
                            if(typeof data["sky_right_image"]["targetwindow"] !==  "undefined"){
                              var sky_right_image_a = Spark.creativeService["createElement"]('a',{'href': data["sky_right_image"]["targeturl"], 'target': data["sky_right_image"]["targetwindow"]}, '', sky_right_image);
                            }else{
                                var sky_right_image_a = Spark.creativeService["createElement"]('a',{'href': data["sky_right_image"]["targeturl"], 'target': '_blank'}, '', sky_right_image);
                            }
                        }
                        Spark.creativeService["createElement"]('img', {'src': data["sky_right_image"]["imageurl"], 'style': 'z-index:99;width: ' + data["sky_right_image"]["width"] + 'px; height: ' + data["sky_right_image"]["height"] + 'px'}, '', sky_right_image_a);

                        // if(typeof data["sky_right_image"]["targetwindow"] !==  "undefined"){
                        //    var sky_right_image_a = Spark.creativeService["createElement"]('a',{'id':'sky_right_image_a','href': data["sky_right_image"]["targeturl"], 'target': data["sky_right_image"]["targetwindow"]}, '', sky_right_image);
                        // }else{
                        //    var sky_right_image_a = Spark.creativeService["createElement"]('a',{'id':'sky_right_image_a','href': data["sky_right_image"]["targeturl"], 'target': '_blank'}, '', sky_right_image);
                        // }  

                    }else{
                        if (typeof data["targeturl"] !==  "undefined") {
                            if(typeof data["targetwindow"] !==  "undefined"){
                              var sky_right_image_a = Spark.creativeService["createElement"]('a',{'id':'sky_right_image_a','href': data["targeturl"], 'target': data["targetwindow"]}, '', sky_right_image);
                            }else{
                              var sky_right_image_a = Spark.creativeService["createElement"]('a',{'id':'sky_right_image_a','href': data["targeturl"], 'target': '_blank'}, '', sky_right_image);
                            }
                            Spark.creativeService["createElement"]('img', {'src': data["sky_right_image"]["imageurl"], 'style': 'z-index:99; width: ' + data["sky_right_image"]["width"] + 'px; height: ' + data["sky_right_image"]["height"] + 'px'}, '', sky_right_image_a);
                        }else{
                            Spark.creativeService["createElement"]('img', {'src': data["sky_right_image"]["imageurl"], 'style': 'z-index:99; width: ' + data["sky_right_image"]["width"] + 'px; height: ' + data["sky_right_image"]["height"] + 'px'}, '', sky_right_image);
                        }
                    }

                    var sky_links_img = Spark.creativeService["createElement"]('div', {'style': 'position: absolute;left: 0px;'}, '', fireplace);
                    sky_left_image = Spark.creativeService["createElement"]('div', {'id': 'sky_left_image','style': ' z-index:99; top:'+ headerHeight +'px; height:'+data["sky_left_image"]["height"]+'px; width:'+data["sky_left_image"]["width"]+'px;'}, '', sky_links_img);
                    
                    if (typeof data["sky_left_image"]["targeturl"] !==  "undefined") {
                        if(typeof data["sky_left_image"]["targeturlSkyLeft"] !==  "undefined"){
                            if(typeof data["sky_left_image"]["targetwindow"] !==  "undefined"){
                                var sky_left_image_a = Spark.creativeService["createElement"]('a',{'href': data["sky_left_image"]["targeturlSkyLeft"], 'target': data["sky_left_image"]["targetwindow"]}, '', sky_left_image);
                            }else{
                                var sky_left_image_a = Spark.creativeService["createElement"]('a',{'href': data["sky_left_image"]["targeturlSkyLeft"], 'target': '_blank'}, '',sky_left_image);
                            }
                        }else{
                            if(typeof data["sky_left_image"]["targetwindow"] !==  "undefined"){
                              var sky_left_image_a = Spark.creativeService["createElement"]('a',{'href': data["sky_left_image"]["targeturl"], 'target': data["sky_left_image"]["targetwindow"]}, '', sky_left_image);
                            }else{
                                var sky_left_image_a = Spark.creativeService["createElement"]('a',{'href': data["sky_left_image"]["targeturl"], 'target': '_blank'}, '', sky_left_image);
                            }
                        }
                        Spark.creativeService["createElement"]('img', {'src': data["sky_left_image"]["imageurl"], 'style': 'z-index:99; width: ' + data["sky_left_image"]["width"] + 'px; height: ' + data["sky_left_image"]["height"] + 'px'}, '', sky_left_image_a);

                        // if(typeof data["sky_left_image"]["targetwindow"] !==  "undefined"){
                        //   var sky_left_image_a = Spark.creativeService["createElement"]('a',{'id':'sky_left_image_a','href': data["sky_left_image"]["targeturl"], 'target': data["sky_left_image"]["targetwindow"]}, '', sky_left_image);
                        // }else{
                        //   var sky_left_image_a = Spark.creativeService["createElement"]('a',{'id':'sky_left_image_a','href': data["sky_left_image"]["targeturl"], 'target': '_blank'}, '', sky_left_image);
                        // }
                     
                      }else{
                        if (typeof data["targeturl"] !== "undefined") {
                            if(typeof data["targetwindow"] !==  "undefined"){
                                var sky_left_image_a = Spark.creativeService["createElement"]('a',{'id':'sky_left_image_a','href': data["targeturl"], 'target': data["targetwindow"]}, '', sky_left_image);
                            }else{
                                var sky_left_image_a = Spark.creativeService["createElement"]('a',{'id':'sky_left_image_a','href': data["targeturl"], 'target': '_blank'}, '', sky_left_image);
                            }
                     
                            Spark.creativeService["createElement"]('img', {'src': data["sky_left_image"]["imageurl"], 'style': 'z-index:99;width: ' + data["sky_left_image"]["width"] + 'px; height: ' + data["sky_left_image"]["height"] + 'px'}, '', sky_left_image_a);
                        }else{
                            Spark.creativeService["createElement"]('img', {'src': data["sky_left_image"]["imageurl"], 'style': 'z-index:99;width: ' + data["sky_left_image"]["width"] + 'px; height: ' + data["sky_left_image"]["height"] + 'px'}, '', sky_left_image);
                        }
                    }
            

                    if(data["background_click"]){
                      createBgDiv();
                      window.document.onclick = bgclick;
                    } 
                      /////////////////alte Version
                }else{

                    if (data["slot"].parentElement.getBoundingClientRect().left > data["sky_left_image"]["width"]) {
                        if(marginLeft == 0){
                            marginLeft = (((data["billboard_image_desktop"]["width"] - containerWidth) / 2));
                        }
                        if (funkeHoerzuBool) {
                           fireplace = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace', 'style': 'height:'+data["billboard_image_desktop"]["height"]+'px; margin-left: -' +marginLeft + 'px;'}, '', data["slot"].parentElement);
                        }else{
                           fireplace = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace', 'style': 'height:'+data["billboard_image_desktop"]["height"]+'px; margin-left: -' +marginLeft + 'px;'}, '', data["slot"].parentElement);
                        }
                    }else{
                        if(marginLeft == 0){
                            marginLeft = (data["sky_left_image"]["width"]+15);
                        }
                        if (funkeHoerzuBool) {
                          fireplace = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace', 'style': 'height:'+data["billboard_image_desktop"]["height"]+'px; margin-left: -' + marginLeft + 'px;'}, '', data["slot"].parentElement);
                        }else{
                          fireplace = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace', 'style': 'height:'+data["billboard_image_desktop"]["height"]+'px; margin-left: -' + marginLeft + 'px;'}, '', data["slot"].parentElement);
                        }
                    }
                    data["slot"].style.marginLeft = - (((data["billboard_image_desktop"]["width"] - containerWidth) / 2)) + "px";
                     
                    if(marginLeft == 1 && wmnBool){
                       billboard_desktop = Spark.creativeService["createElement"]('div', {'style': 'position: absolute; left: -'+left+'px; width:'+data["billboard_image_desktop"]["width"]+'px'}, '', fireplace);
                    } else if (westfunkBool){
                        billboard_desktop = Spark.creativeService["createElement"]('div', {'style': 'position: absolute; width: '+data["billboard_image_desktop"]["width"]+'px '}, '', fireplace);
                    } else{
                       billboard_desktop = Spark.creativeService["createElement"]('div', {'style': 'position: absolute; '}, '', fireplace); 
                    }
             
          
                    if (typeof data["targeturl"] !==  "undefined") {
                        if(/adurl%253D.[^"]/.test(data["targeturlBiboDesktop"])){
                            if(typeof data["targetwindow"] !==  "undefined"){
                                var billboard_desktop_a = Spark.creativeService["createElement"]('a',{'href': data["targeturlBiboDesktop"], 'target': data["targetwindow"]}, '', billboard_desktop);
                            }else{
                                var billboard_desktop_a = Spark.creativeService["createElement"]('a',{'href': data["targeturlBiboDesktop"], 'target': '_blank'}, '', billboard_desktop);
                            }
                        }else{
                            if(typeof data["targetwindow"] !==  "undefined"){
                              var billboard_desktop_a = Spark.creativeService["createElement"]('a',{'href': data["targeturl"], 'target': data["targetwindow"]}, '', billboard_desktop);
                            }else{
                                var billboard_desktop_a = Spark.creativeService["createElement"]('a',{'href': data["targeturl"], 'target': '_blank'}, '', billboard_desktop);
                            }
                        }

                        // if(typeof data["targetwindow"] !==  "undefined"){
                        //    var billboard_desktop_a = Spark.creativeService["createElement"]('a',{'href': data["targeturl"], 'target': data["targetwindow"]}, '', billboard_desktop);
                        // }else{
                        //    var billboard_desktop_a = Spark.creativeService["createElement"]('a',{'href': data["targeturl"], 'target': '_blank'}, '', billboard_desktop);
                        // }
                        Spark.creativeService["createElement"]('img', {'src': data["billboard_image_desktop"]["imageurl"], 'style': 'width: ' + data["billboard_image_desktop"]["width"] + 'px; height: ' + data["billboard_image_desktop"]["height"] + 'px'}, '', billboard_desktop_a);
                    }else{
                        Spark.creativeService["createElement"]('img', {'src': data["billboard_image_desktop"]["imageurl"], 'style': 'width: ' + data["billboard_image_desktop"]["width"] + 'px; height: ' + data["billboard_image_desktop"]["height"] + 'px'}, '', billboard_desktop);
                    }
          
                    if(marginLeftSkyRight == 0){
                        sky_right_image = Spark.creativeService["createElement"]('div', {'id': 'sky_right_image','style': 'position: absolute;  z-index:3; right: 0px;top:'+data["billboard_image_desktop"]["height"] + 'px'}, '', billboard_desktop);
                    }else{
                        if(funkeHoerzuBool) {
                          sky_right_image = Spark.creativeService["createElement"]('div', {'id': 'sky_right_image','style': 'position: absolute;  z-index:3; left:'+marginLeftSkyRight+'px;top:0px'}, '', billboard_desktop);
                    
                        }else if(gofemininBool){
                          sky_right_image = Spark.creativeService["createElement"]('div', {'id': 'sky_right_image','style': 'position: absolute;  z-index:3; right:-'+marginLeftSkyRight+'px;top:0px'}, '', billboard_desktop);
                    
                        }
                        else{
                          sky_right_image = Spark.creativeService["createElement"]('div', {'id': 'sky_right_image','style': 'position: absolute;  z-index:3; margin-left:'+marginLeftSkyRight+'px;top:0px'}, '', billboard_desktop);
                    
                        }  
                      
                    }
            
                    if (typeof data["targeturl"] !==  "undefined") {
                        if(/adurl%253D.[^"]/.test(data["targeturlSkyRight"])){
                            if(typeof data["targetwindow"] !==  "undefined"){
                                var sky_right_image_a = Spark.creativeService["createElement"]('a',{'href': data["targeturlSkyRight"], 'target': data["targetwindow"]}, '', sky_right_image);
                            }else{
                                var sky_right_image_a = Spark.creativeService["createElement"]('a',{'href': data["targeturlSkyRight"], 'target': '_blank'}, '',sky_right_image);
                            }
                        }else{
                            if(typeof data["targetwindow"] !==  "undefined"){
                              var sky_right_image_a = Spark.creativeService["createElement"]('a',{'href': data["targeturl"], 'target': data["targetwindow"]}, '', sky_right_image);
                            }else{
                                var sky_right_image_a = Spark.creativeService["createElement"]('a',{'href': data["targeturl"], 'target': '_blank'}, '', sky_right_image);
                            }
                        }


                       // if(typeof data["targetwindow"] !==  "undefined"){
                       //    var sky_right_image_a = Spark.creativeService["createElement"]('a',{'id':'sky_right_image_a','href': data["targeturl"], 'target': data["targetwindow"]}, '', sky_right_image);
                       //  }else{
                       //    var sky_right_image_a = Spark.creativeService["createElement"]('a',{'id':'sky_right_image_a','href': data["targeturl"], 'target': '_blank'}, '', sky_right_image);
                       //  }
                        Spark.creativeService["createElement"]('img', {'src': data["sky_right_image"]["imageurl"], 'style': 'width: ' + data["sky_right_image"]["width"] + 'px; height: ' + data["sky_right_image"]["height"] + 'px'}, '', sky_right_image_a);
                    }else{
                        Spark.creativeService["createElement"]('img', {'src': data["sky_right_image"]["imageurl"], 'style': 'width: ' + data["sky_right_image"]["width"] + 'px; height: ' + data["sky_right_image"]["height"] + 'px'}, '', sky_right_image);
                    }

                    if(marginLeftSkyLeft == 0){
                        sky_left_image = Spark.creativeService["createElement"]('div', {'id': 'sky_left_image','style': 'position: absolute;  z-index:3;left: 0px;top:'+data["billboard_image_desktop"]["height"] + 'px'}, '', billboard_desktop);
                    }else{
                        if (funkeHoerzuBool) {
                          sky_left_image = Spark.creativeService["createElement"]('div', {'id': 'sky_left_image','style': 'position: absolute;  z-index:3;top: 0px;left: -'+marginLeftSkyLeft+ 'px'}, '', billboard_desktop);
                    
                        }else{
                          sky_left_image = Spark.creativeService["createElement"]('div', {'id': 'sky_left_image','style': 'position: absolute;  z-index:3;top: 0px;margin-left: -'+marginLeftSkyLeft+ 'px'}, '', billboard_desktop);
                        }  
                    }
     
                    if (typeof data["targeturl"] !== "undefined") {
                        if(/adurl%253D.[^"]/.test(data["targeturlSkyLeft"])){
                            if(typeof data["targetwindow"] !==  "undefined"){
                                var sky_left_image_a = Spark.creativeService["createElement"]('a',{'href': data["targeturlSkyLeft"], 'target': data["targetwindow"]}, '', sky_left_image);
                            }else{
                                var sky_left_image_a = Spark.creativeService["createElement"]('a',{'href': data["targeturlSkyLeft"], 'target': '_blank'}, '',sky_left_image);
                            }
                        }else{
                            if(typeof data["targetwindow"] !==  "undefined"){
                              var sky_left_image_a = Spark.creativeService["createElement"]('a',{'href': data["targeturl"], 'target': data["targetwindow"]}, '', sky_left_image);
                            }else{
                                var sky_left_image_a = Spark.creativeService["createElement"]('a',{'href': data["targeturl"], 'target': '_blank'}, '', sky_left_image);
                            }
                        }

                        // if(typeof data["targetwindow"] !==  "undefined"){
                        //     var sky_left_image_a = Spark.creativeService["createElement"]('a',{'id':'sky_left_image_a','href': data["targeturl"], 'target': data["targetwindow"]}, '', sky_left_image);
                        // }else{
                        //     var sky_left_image_a = Spark.creativeService["createElement"]('a',{'id':'sky_left_image_a','href': data["targeturl"], 'target': '_blank'}, '', sky_left_image);
                        // }  

                        Spark.creativeService["createElement"]('img', {'src': data["sky_left_image"]["imageurl"], 'style': 'width: ' + data["sky_left_image"]["width"] + 'px; height: ' + data["sky_left_image"]["height"] + 'px'}, '', sky_left_image_a);
                    }else{
                        Spark.creativeService["createElement"]('img', {'src': data["sky_left_image"]["imageurl"], 'style': 'width: ' + data["sky_left_image"]["width"] + 'px; height: ' + data["sky_left_image"]["height"] + 'px'}, '', sky_left_image);
                    }
                    if(data["background_click"]){
                       createBgDiv();
                       window.document.onclick = bgclick;
                            if(setTime){
                               window.setTimeout(function() {
                                admo_bgc_div_left.style.width = sky_left_image.getBoundingClientRect().right + 'px';
                                if (myselfBool) {
                                    admo_bgc_div_right.style.width = window.innerWidth - sky_right_image.getBoundingClientRect().x - 10 + 'px';
                                }else{
                                    admo_bgc_div_right.style.width = window.innerWidth - sky_right_image.getBoundingClientRect().x + 'px';
                                }
                                if (gofemininBool) {
                                       admo_bgc_div_left.style.marginLeft = - sky_left_image.getBoundingClientRect().right +'px';    
                                       admo_bgc_div_right.style.marginRight = - (window.innerWidth - sky_right_image.getBoundingClientRect().x) +'px';
                                       admo_bgc_div_right.style.top = '0px';
                                       admo_bgc_div_left.style.top = '0px';
                                         
                                }else{
                                       admo_bgc_div_left.style.marginLeft = data["sky_left_image"]["width"] - sky_left_image.getBoundingClientRect().right +'px';    
                                        admo_bgc_div_right.style.marginRight = data["sky_right_image"]["width"] - (window.innerWidth - sky_right_image.getBoundingClientRect().x) +'px';
                                }
                               
                               }, 50);
                            }
                       }
                    }  
                } 
                    if(data["sticky"]) {
                       parent.addEventListener('scroll', onScroll);
                    }
                    setbgcColor(); 
            };
       
            function createTablet(){
                tablet = true; 
                if (typeof data["billboard_iframe_tablet"] !== 'undefined') {
                    fireplace_tablet = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace_tablet', 'style': 'position:relative; height:'+data["billboard_iframe_tablet"]["height"]+'px;'}, '', data["slot"].parentElement);
                    var billboard_tablet = Spark.creativeService["createElement"]('div', {'style': 'text-align:center;'}, '', fireplace_tablet);
                    Spark.creativeService["createElement"]('iframe', {'src': data["billboard_iframe_tablet"]["iframeurl"],'scrolling':'no','frameborder':'0','marginheight':'0','marginwidth':'0','vspace':'0','hspace':'0','style': 'border: none; width: ' + data["billboard_iframe_tablet"]["width"] + 'px; height: ' + data["billboard_iframe_tablet"]["height"] + 'px'}, '', billboard_tablet);
                    setbgcColor();
                }else{
                    if(/myself.de/.test(parent.window.location)){
                        fireplace_tablet = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace_tablet', 'style': 'position:relative; width:1172px; margin-bottom: 1px; height:'+data["billboard_image_tablet"]["height"]+'px; background-color: '+data["background_color"]}, '', data["slot"].parentElement);
                    } else if (/eatclub.tv/.test(parent.window.location)){
                        fireplace_tablet = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace_tablet', 'style': 'position:relative; width:1002px; height:'+data["billboard_image_tablet"]["height"]+'px; background-color: '+data["background_color"]}, '', data["slot"].parentElement);
                    } else {
                        fireplace_tablet = Spark.creativeService["createElement"]('div', {id: 'admo_fireplace_tablet', 'style': 'position:relative; height:'+data["billboard_image_tablet"]["height"]+'px;'}, '', data["slot"].parentElement);
                    }                      
                    var billboard_tablet = Spark.creativeService["createElement"]('div', {'style': 'text-align:center;'}, '', fireplace_tablet);

                    if (typeof data["targeturl"] !== "undefined") {
                        if(/adurl%253D.[^"]/.test(data["targeturlBiboTablet"])){
                            if(typeof data["targetwindow"] !==  "undefined"){
                                var billboard_tablet_a = Spark.creativeService["createElement"]('a',{'href': data["targeturlBiboTablet"], 'target': data["targetwindow"]}, '', billboard_tablet);
                            }else{
                                var billboard_tablet_a = Spark.creativeService["createElement"]('a',{'href': data["targeturlBiboTablet"], 'target': '_blank'}, '', billboard_tablet);
                            }
                        }else{
                            if(typeof data["targetwindow"] !==  "undefined"){
                              var billboard_tablet_a = Spark.creativeService["createElement"]('a',{'href': data["targeturl"], 'target': data["targetwindow"]}, '', billboard_tablet);
                            }else{
                                var billboard_tablet_a = Spark.creativeService["createElement"]('a',{'href': data["targeturl"], 'target': '_blank'}, '', billboard_tablet);
                            }
                        }

                        // if(typeof data["targetwindow"] !==  "undefined"){
                        //    var billboard_tablet_a = Spark.creativeService["createElement"]('a',{href: data["targeturl"], target: data["targetwindow"]}, '', billboard_tablet);
                        // }else{
                        //    var billboard_tablet_a = Spark.creativeService["createElement"]('a',{href: data["targeturl"], target: '_blank'}, '', billboard_tablet);
                        // }

                        if (/myself.de/.test(parent.window.location)){
                            var billboard_tablet_bg = Spark.creativeService["createElement"]('div', {id: 'billboard_tablet_bg', 'style': 'width:1172px'}, '', billboard_tablet_a);
                            Spark.creativeService["createElement"]('img', {'src': data["billboard_image_tablet"]["imageurl"], 'style': 'width: ' + data["billboard_image_tablet"]["width"] + 'px; height: ' + data["billboard_image_tablet"]["height"] + 'px'}, '', billboard_tablet_bg);
                        } else if (/eatclub.tv/.test(parent.window.location)){
                            var billboard_tablet_bg = Spark.creativeService["createElement"]('div', {id: 'billboard_tablet_bg', 'style': 'width:1002px'}, '', billboard_tablet_a);
                            Spark.creativeService["createElement"]('img', {'src': data["billboard_image_tablet"]["imageurl"], 'style': 'width: ' + data["billboard_image_tablet"]["width"] + 'px; height: ' + data["billboard_image_tablet"]["height"] + 'px'}, '', billboard_tablet_bg);
                        } else {
                            Spark.creativeService["createElement"]('img', {'src': data["billboard_image_tablet"]["imageurl"], 'style': 'width: ' + data["billboard_image_tablet"]["width"] + 'px; height: ' + data["billboard_image_tablet"]["height"] + 'px'}, '', billboard_tablet_a);
                        }
                    }else{
                        Spark.creativeService["createElement"]('img', {'src': data["billboard_image_tablet"]["imageurl"], 'style': 'width: ' + data["billboard_image_tablet"]["width"] + 'px; height: ' + data["billboard_image_tablet"]["height"] + 'px'}, '', billboard_tablet);
                    }
                    setbgcColor();
                }
            };
            function onScroll() {
                if (typeof data["billboard_iframe_desktop"] !== 'undefined'){
                    if (newVersion){
                        if(parent.document.getElementById('sb').getBoundingClientRect().top + 250 - headerHeight <= 0) {
                            if (data["sticky"] ) {
                               sky_left_iframe.style.position = 'fixed';
                               sky_right_iframe.style.position = 'fixed';
                               admo_bgc_div_left.style.position = 'fixed';
                               admo_bgc_div_right.style.position = 'fixed';
                            }  
                        }else{
                            sky_left_iframe.style.position = 'static';
                            sky_right_iframe.style.position = 'static';

                            admo_bgc_div_left.style.position = 'fixed';
                            admo_bgc_div_right.style.position = 'fixed';
                        }  
                    }else{
                        if (data["slot"].parentElement.getBoundingClientRect().bottom < 0) {
                            if (data["sticky"] ) {
                                sky_left_iframe.style.top  = Math.abs(data["slot"].parentElement.getBoundingClientRect().bottom)+data["billboard_iframe_desktop"]["height"] + headerHeight +'px';
                                sky_right_iframe.style.top = Math.abs(data["slot"].parentElement.getBoundingClientRect().bottom)+data["billboard_iframe_desktop"]["height"] + headerHeight +'px';    
                            }
                    
                            if(data["background_click"] ){
                                admo_bgc_div_left.style.top = Math.abs(data["slot"].parentElement.getBoundingClientRect().bottom)+data["billboard_iframe_desktop"]["height"] + headerHeight +'px';
                                admo_bgc_div_right.style.top = Math.abs(data["slot"].parentElement.getBoundingClientRect().bottom)+data["billboard_iframe_desktop"]["height"] + headerHeight +'px';
                            }
                        }else {
                            if (data["sticky"] ) { 
                                if(marginLeftSkyLeft == 0 && marginLeftSkyRight == 0){
                                   sky_left_iframe.style.top = data["billboard_iframe_desktop"]["height"]+'px';
                                   sky_right_iframe.style.top = data["billboard_iframe_desktop"]["height"]+'px'; 
                                }else{
                                   sky_left_iframe.style.top = '0px';
                                   sky_right_iframe.style.top = '0px'; 
                                }         
                            }

                            if(data["background_click"] ) { 
                                if(marginLeftSkyLeft == 0 && marginLeftSkyRight == 0){
                                    if(/morgenpost.de|abendblatt.de|thueringer-allgemeine.de|otz.de|tlz.de|braunschweiger-zeitung.de|harzkurier.de|waz.de|wp.de|wr.de|ikz-online.de|nrz.de/.test(window.location.href)){
                                        admo_bgc_div_left.style.top = '-' + Math.abs(data["slot"].parentElement.getBoundingClientRect().top)+data["billboard_iframe_desktop"]["height"] + headerHeight +'px';
                                        admo_bgc_div_right.style.top = '-' + Math.abs(data["slot"].parentElement.getBoundingClientRect().top)+data["billboard_iframe_desktop"]["height"] + headerHeight +'px';
                                    } else{
                                        admo_bgc_div_left.style.top = data["billboard_iframe_desktop"]["height"]+'px';
                                        admo_bgc_div_right.style.top = data["billboard_iframe_desktop"]["height"]+'px';
                                    }
                                }else{
                                      admo_bgc_div_left.style.top = '0px';
                                      admo_bgc_div_right.style.top = '0px';
                                    } 
                          }
                      }  
                   }
                 
                }else{
                    if(newVersion) {
                        if(parent.document.getElementById('sb').getBoundingClientRect().top + 250 - headerHeight <= 0) {
                            if (data["sticky"] ) {
                                sky_left_image.style.position = 'fixed';
                                sky_right_image.style.position = 'fixed';

                                admo_bgc_div_left.style.position = 'fixed';
                                admo_bgc_div_right.style.position = 'fixed';
                            }  
                        }else{
                            sky_left_image.style.position = 'static';
                            sky_right_image.style.position = 'static';
                            admo_bgc_div_left.style.position = 'fixed';
                            admo_bgc_div_right.style.position = 'fixed';
                        }
                    }else{
                        if (data["slot"].parentElement.getBoundingClientRect().bottom < 0) {
                            if (data["sticky"] ){
                                sky_left_image.style.top  = Math.abs(data["slot"].parentElement.getBoundingClientRect().bottom)+data["billboard_image_desktop"]["height"] + headerHeight +'px';
                                sky_right_image.style.top = Math.abs(data["slot"].parentElement.getBoundingClientRect().bottom)+data["billboard_image_desktop"]["height"] + headerHeight +'px';
                            }
                            if(data["background_click"] ) { 
                                admo_bgc_div_left.style.top = Math.abs(data["slot"].parentElement.getBoundingClientRect().bottom)+data["billboard_image_desktop"]["height"] + headerHeight +'px';
                                admo_bgc_div_right.style.top = Math.abs(data["slot"].parentElement.getBoundingClientRect().bottom)+data["billboard_image_desktop"]["height"] + headerHeight +'px';
                            }
                        }else{
                            if(data["sticky"] ) {
                                if(marginLeftSkyLeft == 0 && marginLeftSkyRight == 0){
                                      sky_left_image.style.top = data["billboard_image_desktop"]["height"]+'px';
                                      sky_right_image.style.top = data["billboard_image_desktop"]["height"]+'px'; 
                                }else{
                                      sky_left_image.style.top = '0px';
                                      sky_right_image.style.top = '0px'; 
                                }
                            }
                            if(data["background_click"]) { 
                                if(marginLeftSkyLeft == 0 && marginLeftSkyRight == 0){
                                     if(/morgenpost.de|abendblatt.de|thueringer-allgemeine.de|otz.de|tlz.de|braunschweiger-zeitung.de|harzkurier.de|waz.de|wp.de|wr.de|ikz-online.de|nrz.de/.test(window.location.href)){
                                        admo_bgc_div_left.style.top = '-' + Math.abs(data["slot"].parentElement.getBoundingClientRect().top)+data["billboard_image_desktop"]["height"] + headerHeight +'px';
                                        admo_bgc_div_right.style.top = '-' + Math.abs(data["slot"].parentElement.getBoundingClientRect().top)+data["billboard_image_desktop"]["height"] + headerHeight +'px';
                                    } else {
                                        admo_bgc_div_left.style.top = data["billboard_image_desktop"]["height"]+'px';
                                        admo_bgc_div_right.style.top = data["billboard_image_desktop"]["height"]+'px';
                                    }     
                                }else{
                                    admo_bgc_div_left.style.top = '0px';
                                    admo_bgc_div_right.style.top = '0px';
                                }
                            }
                        }
                    }
                }
            };
            function getSite() { 
               
                for (var prop in Spark.sites) {
                        if(Spark.sites.hasOwnProperty(prop)) {
                            if ((new RegExp(prop)).test(window.location)) {
                                headerHeight = Spark.sites[prop][0];
                                if(prop == 'myself.de'){
                                   setTime = true;
                                   marginLeft = Spark.sites[prop][1];
                                   myselfBool = true;
                                }
                                else if(prop == 'donna-magazin.de'){
                                   if(window.location.pathname === "/"){
                                       marginLeft = 885;
                                   }else{
                                       marginLeft = Spark.sites[prop][1];
                                   }
                                   setTime = true;
                                   
                                } 
                                else if(prop == 'landidee.de'){
                                     setTime = true;
                                    if (fireplaceWidth == 1410) {
                                        marginLeft = Spark.sites[prop][1];
                                    } else if (fireplaceWidth == 1490){
                                        marginLeft = 720;                                    
                                    }else if (fireplaceWidth == 1570){
                                        marginLeft = 760;                                      
                                    }else if (fireplaceWidth == 1770){
                                        marginLeft = 860;                                       
                                    }else{
                                        marginLeft = Spark.sites[prop][1];
                                    }
                                    westfunkBool = true;

                                }
                                else if (prop == 'bildderfrau.de'){
                                    setTime = true;
                                    if (fireplaceWidth == 1410) {
                                        marginLeft = 120;
                                    } else if (fireplaceWidth == 1490){
                                        marginLeft = 160;                                    
                                    }else if (fireplaceWidth == 1570){
                                        marginLeft = 200;                                      
                                    }else if (fireplaceWidth == 1770){
                                        marginLeft = 300;                                       
                                    }else{
                                        marginLeft = Spark.sites[prop][1];
                                    }
                                    westfunkBool = true;

                                } else if(prop == 'onmeda.de'){
                                   setTime = true;
                                   if(data["billboard_iframe_desktop"]["width"] == 1310){
                                     marginLeft = 635;
                                     
                                   }else{
                                     marginLeft = Spark.sites[prop][1];
                                     marginLeftSkyLeft = Spark.sites[prop][2];
                                     marginLeftSkyRight = Spark.sites[prop][3];
                                   }
                                   
                                }
                                else if (prop == 'relaunchdgtls.hoerzu.de') {
                                      setTime = true;
                                      if (fireplaceWidth == 1440) {
                                        marginLeft = 356;
                                        }else if(fireplaceWidth == 1520){
                                            marginLeft =  396;
                                        }else if(fireplaceWidth == 1600){
                                            marginLeft =  436;
                                        } else {
                                            marginLeft =  Spark.sites[prop][1]; 
                                        } 
                                      westfunkBool = true;
                                }
                                else if(prop == 'dasmerkichmir.hoerzu.de'|| prop == 'zurruhekommen.hoerzu.de' || prop == 'superhelddarm.hoerzu.de'){
                                   setTime = true;
                                   marginLeft = Spark.sites[prop][1];
                                   hoerzuBool = false;
                                   
                                }
                                else if(prop == 'funke-entertainment.de'){
                                   setTime = true;
                                   funkeHoerzuBool = true;
                                   marginLeft = Spark.sites[prop][1];
                                }
                                else if(prop == 'tvdigital.de'){
                                   setTime = true;
                                }
                                else if(prop == 'hoerzu.de' && hoerzuBool){
                                   setTime = true;
                                    if (fireplaceWidth == 1440) {
                                        marginLeft = 356;
                                        }else if(fireplaceWidth == 1520){
                                            marginLeft =  396;
                                        }else if(fireplaceWidth == 1600){
                                            marginLeft =  436;
                                        } else {
                                            marginLeft =  Spark.sites[prop][1]; 
                                        } 
                                   //marginLeft = Spark.sites[prop][1];
                                   //hoerzuFireplaceBool = true;
                                      westfunkBool = true;
                                   
                                }
                                 /*else if(prop =='gofeminin.de'){
                                   setTime = true;
                                   marginLeft = Spark.sites[prop][1];
                                   marginLeftSkyLeft = Spark.sites[prop][2];
                                   marginLeftSkyRight = Spark.sites[prop][3];
                                   gofemininBool = true;
                                   //data["background_click"] = '';
                                   
                                 }*/
                                else if(prop =='4players.de' || prop =='release.4players.de'){
                                   setTime = true;
                                   marginLeft = Spark.sites[prop][1];
                                   
                                }


                                else if(prop == 'futurezone.de' || prop == 'selfies.com' || prop == 'wmn.de'  || prop == '4p.de' || prop == 'imtest.de'){
                                   setTime = true;
                                  // newVersion = true;
                                   if (fireplaceWidth == 1240) {
                                        marginLeft = 620;
                                    }else if(fireplaceWidth == 1320){
                                        marginLeft =  660;
                                    }else if(fireplaceWidth == 1400){
                                        marginLeft =  700;
                                    } else {
                                        marginLeft =  Spark.sites[prop][1]; 
                                    } 
                                   westfunkBool = true; 
                                   wordpressBool = true;

                                   // if(prop == 'imtest.de' || prop == 'wmn.de'){
                                   //      document.body.classList.add('has-fireplace');
                                   //          if(prop == 'wmn.de'){
                                   //              wmnBool = true;
                                   //          }   
                                   //          if (prop == 'imtest.de' && document.querySelector('.has-sidebar')) {
                                   //              marginLeft = 245;
                                   //          }
                                   // }
                                }
                                else if(prop == 'eatclub.tv'){
                                   setTime = true;
                                   newVersion = true;
                                   //left = Spark.sites[prop][4];
                                   if (typeof data["billboard_iframe_desktop"] !== 'undefined') {
                                       left = data["billboard_iframe_desktop"]["width"] - data["sky_right_iframe"]["width"]; 
                                   }else{
                                       left = data["billboard_image_desktop"]["width"] - data["sky_right_image"]["width"];
                                   }
                                   marginLeft = 1;
                                   wordpressBool = true;
                                   //document.body.classList.add('has-fireplace');
                                }
                                else if(prop == 'veggieboom.de'){
                                   setTime = true;
                                   marginLeft = 390;
                                   //absoluteDivWidth = 1770px
                                   //left = Spark.sites[prop][4]; 
                                   marginLeft = 1;
                                   //document.body.classList.add('has-fireplace');
                                }
                                else if(prop == 'stage.moin.de' || prop == 'moin.de' || prop == 'berlin-live.de' || prop == 'news38.de' || prop == 'thueringen24.de' || prop == 'derwesten.de'|| prop == 'gofeminin.de' || prop == 'schlager.de'|| prop == 'staging.schlager.de'){
                                   setTime = true;
                                   if (fireplaceWidth == 1240) {
                                        marginLeft = 620;
                                    }else if(fireplaceWidth == 1320){
                                        marginLeft =  660;
                                    }else if(fireplaceWidth == 1400){
                                        marginLeft =  700;
                                    } else {
                                        marginLeft =  Spark.sites[prop][1]; 
                                    } 
                                   westfunkBool = true; 
                                   wordpressBool = true;
                                }
                                else if(prop == 'abendblatt.de' || prop == 'braunschweiger-zeitung.de' || prop == 'harzkurier.de' || 
                                        prop == 'ikz-online.de' || prop == 'morgenpost.de' || prop == 'nrz.de' || prop == 'otz.de' ||  prop == 'thueringer-allgemeine.de' || 
                                        prop == 'tlz.de' || prop == 'waz.de' || prop == 'wp.de' || prop == 'wr.de' || prop == 'sf-prod.'){
                                   setTime = true;
                                   //newVersion = true;
                                   if (fireplaceWidth == 1240) {
                                        marginLeft = 620;
                                    }else if(fireplaceWidth == 1320){
                                        marginLeft =  660;
                                    }else if(fireplaceWidth == 1400){
                                        marginLeft =  700;
                                    } else {
                                        marginLeft =  Spark.sites[prop][1]; 
                                    } 
                                   westfunkBool = true; 
                                   wordpressBool = true;
                                }
                                else if(prop == 'radioenneperuhr.de' || prop == 'radioemscherlippe.de' || prop == 'radiobochum.de' || prop == 'radiokw.de' || 
                                prop == 'radiovest.de' || prop == 'radiohagen.de' || prop == 'radioduisburg.de' || prop == 'radioherne.de' ||
                                prop == 'radiooberhausen.de' || prop == 'radiomuelheim.de' || prop == 'radiosauerland.de' || prop == 'radioessen.de'){
                                    setTime = true;
                                    if (fireplaceWidth == 1680) {
                                         marginLeft = 840;
                                     }else if(fireplaceWidth == 1600){
                                         marginLeft =  800;
                                    }else{
                                         marginLeft = 760;
                                    }
                                    //marginLeft =  Spark.sites[prop][1];       
                                    westfunkBool = true;                                                                                                  
                                 }

                             break;
                        }
                    }
                }
            };
            function setbgcColor(){
                if (typeof data["background_color"] !==  "undefined" && !/radio/.test(parent.window.location)) {
                  data["background_color"] = /^#/.test(data["background_color"]) ? data["background_color"] : '#'+data["background_color"];
                  document.getElementsByTagName('body')[0].style.backgroundColor = data["background_color"];
                } 
            };
            function createBgDiv(){
                var hg = window.innerHeight - headerHeight;
                //var hg = window.innerHeight - 101;
                if (newVersion) {
                    
                    if (typeof data["billboard_iframe_desktop"] !== 'undefined'){
                       bgc_right_div = Spark.creativeService["createElement"]('div', {'style': 'position: absolute;left:'+left+'px'}, '', fireplace);
                       admo_bgc_div_right = Spark.creativeService["createElement"]('div', {id: 'admo_bgc_div_right', 'style': 'position:fixed;right:0px; top:'+ headerHeight+'px; height:'+ hg +'px; width:350px;z-index:1; cursor: pointer;'}, '', bgc_right_div);
                      
                       bgc_left_div = Spark.creativeService["createElement"]('div', {'style': 'position: absolute;left:0px'}, '', fireplace);
                       admo_bgc_div_left = Spark.creativeService["createElement"]('div', {id: 'admo_bgc_div_left', 'style': 'position:fixed;left:0px; height:'+ hg +'px;z-index:1; top:'+headerHeight+'px; width:350px;cursor: pointer;'}, '', bgc_left_div);
                    }else {
                        var bck_right_width = window.innerWidth - sky_right_image.getBoundingClientRect().x;
                        bgc_right_div = Spark.creativeService["createElement"]('div', {'style': 'position: absolute;left:'+left+'px'}, '', fireplace);
                        admo_bgc_div_right = Spark.creativeService["createElement"]('div', {id: 'admo_bgc_div_right', 'style': 'position:fixed;right:0px; top:'+ headerHeight+'px; height:'+ hg +'px; width:'+ bck_right_width +'px;z-index:1; cursor: pointer;'}, '', bgc_right_div);
                      
                        bgc_left_div = Spark.creativeService["createElement"]('div', {'style': 'position: absolute;left:0px'}, '', fireplace);
                        admo_bgc_div_left = Spark.creativeService["createElement"]('div', {id: 'admo_bgc_div_left', 'style': 'position:fixed;left:0px; height:'+ hg +'px;z-index:1; top:'+headerHeight+'px; width:'+ sky_left_image.getBoundingClientRect().right+'px; cursor: pointer;'}, '', bgc_left_div);
                    }
                
                }else{
                    if(setTime){
                        if(/morgenpost.de|abendblatt.de|thueringer-allgemeine.de|otz.de|tlz.de|braunschweiger-zeitung.de|harzkurier.de|waz.de|wp.de|wr.de|ikz-online.de|nrz.de/.test(window.location.href)){
                            admo_bgc_div_right = Spark.creativeService["createElement"]('div', {id: 'admo_bgc_div_right', 'style': 'position:absolute;right:0px;height:'+ hg +'px;z-index:1;top: -250px;cursor: pointer;'}, '', billboard_desktop);
                            admo_bgc_div_left = Spark.creativeService["createElement"]('div', {id: 'admo_bgc_div_left', 'style': 'position:absolute;left:0px;height:'+ hg +'px;z-index:1;top: -250px;cursor: pointer;'}, '', billboard_desktop); 
                        
                        }else{
                            admo_bgc_div_right = Spark.creativeService["createElement"]('div', {id: 'admo_bgc_div_right', 'style': 'position:absolute;right:0px;height:'+ hg +'px;z-index:1; cursor: pointer;'}, '', billboard_desktop);
                            admo_bgc_div_left = Spark.creativeService["createElement"]('div', {id: 'admo_bgc_div_left', 'style': 'position:absolute;left:0px;height:'+ hg +'px;z-index:1;cursor: pointer;'}, '', billboard_desktop); 
                        }
                    }
                }
            }

            function bgclick(e) {
                admo_bgc_div_left.onclick = function(){
                   window.open(data["background_click"]);
                };
                admo_bgc_div_right.onclick = function(){
                   window.open(data["background_click"]);
                }    
            };
        },       

        createSitebar: function (datalist) {
            window.addEventListener('load', function () {
                if(typeof datalist["iframe"] !== "undefined") {
                  var ifrsrc = datalist["iframe"];
                }else{
                  var ifrsrc = "";
                } 
                if (typeof datalist["img"] !== "undefined") {
                  var imgsrc = datalist["img"];
                } else{
                  var imgsrc = "";
                }
       
                 var widthSitebar = datalist["width"];
                 var heightSitebar = datalist["height"];
                 var minWidthSitebar = datalist["minWidth"];
                 var minHeightSitebar = datalist["minHeight"];
                 var maxWidthSitebar = datalist["maxWidth"];
                 var maxHeightSitebar = datalist["maxHeight"];
                 //var sitebar = document.createElement('div');
        
                 //window.frameElement.parentElement.insertBefore(sitebar, window.frameElement.parentElement.firstChild); 
                 var sitebar = window.frameElement;
                 var sitebarBody = sitebar.contentDocument.body;
                 var ifr = document.createElement("iframe");
         
                if (ifrsrc !== ""){
                     sitebar.style.width = calculateRightWidth()+"px";
                     sitebar.style.height = refreshScrollHeight() +"px";
                     ifr.style.width = "100%";
                     ifr.style.height = sitebar.style.height;
                }else{ 
                    if (calculateRightWidth()*heightSitebar/widthSitebar <= refreshScrollHeight()) {
                       sitebar.style.width = calculateRightWidth()+"px";
                       sitebar.style.height = calculateRightWidth()*heightSitebar/widthSitebar +"px";
                    }else{
                      sitebar.style.width = refreshScrollHeight()*widthSitebar/heightSitebar+"px";
                      sitebar.style.height = refreshScrollHeight() +"px";
                      //ifr.style.width = sitebar.style.width;
                      //ifr.style.height = sitebar.style.height;
                    }
                }

        
                sitebar.style.background = "white";
                if (ifrsrc !== ""){
                    ifr.setAttribute("id","ifr");
                    ifr.src = ifrsrc;
                    ifr.style.width = "100%";
                    ifr.overflow = "hidden";
                    ifr.style.height = sitebar.style.height;
                    ifr.style.border ="none";
                    ifr.style.padding ="0px";
                    ifr.style.margin ="0px";
                    ifr.style.position ="sticky";
                    sitebarBody.appendChild(ifr); 
                }
                else if (imgsrc !== ""){

                    var a = document.createElement("a");
                    a.setAttribute('href',datalist["click"]);
                    a.setAttribute('target', '_blank');
                    a.setAttribute("id","fd_ad_a");
                    sitebarBody.appendChild(a); 

                    var img = document.createElement("img");
                    img.setAttribute("id","img");
                    img.src = imgsrc;
                    img.style.width ="100%";
                    img.style.height ="100%";
                    img.style.border ="none";
                    img.style.padding ="0px";
                    img.style.margin ="0px";
                    img.style.position ="sticky";
                
                    a.appendChild(img); 
                }else{

                } 
                parent.addEventListener('scroll', function() {
                    if (ifrsrc !== ""){
                         sitebar.style.width = calculateRightWidth()+"px";
                         sitebar.style.height = refreshScrollHeight() +"px";
                         ifr.style.width =  "100%";
                         ifr.style.height = sitebar.style.height;
                    }
                    //sitebar.style.height = refreshScrollHeight()+"px";
                    //sitebar.style.width = refreshScrollHeight()/2 +"px";
                });
        
                 //resize
                parent.addEventListener('resize', function() {
                    if (ifrsrc !== ""){
                        sitebar.style.width =  calculateRightWidth()+"px";
                        sitebar.style.height = refreshScrollHeight() +"px";
                        ifr.style.width = "100%";
                        ifr.style.height = sitebar.style.height;
                    }else{
                        if(calculateRightWidth()*heightSitebar/widthSitebar <= refreshScrollHeight()) {
                             sitebar.style.width =  calculateRightWidth()+"px";
                             sitebar.style.height = calculateRightWidth()*heightSitebar/widthSitebar +"px";
                             //ifr.style.width = sitebar.style.width;
                             //ifr.style.height = sitebar.style.height;
                        }else{
                             sitebar.style.width = refreshScrollHeight()*widthSitebar/heightSitebar+"px";
                             sitebar.style.height = refreshScrollHeight() +"px";
                             //ifr.style.width = sitebar.style.width;
                             //ifr.style.height = sitebar.style.height;
                        }
                    }
                });
     

                function calculateRightWidth(){
                  var differenceWitdh = parent.innerWidth - sitebar.getBoundingClientRect().x;
                    if (differenceWitdh>minWidthSitebar) {
                       if (differenceWitdh<maxWidthSitebar) {
                           return differenceWitdh;
                          }else{
                           return maxWidthSitebar;
                          }
                     }else{
                         return minWidthSitebar;
                     }
                 };

                function refreshScrollHeight() { 
                     var differenceHeight = parent.innerHeight- sitebar.getBoundingClientRect().y;
                      if (differenceHeight>minHeightSitebar) {
                          if (differenceHeight<maxHeightSitebar) {
                            return differenceHeight;
                           }else{
                            return maxHeightSitebar;
                           }
                       }else{
                            return minHeightSitebar;
                       }
                };
            }); 
        },
   
        createSitebarIframe: function () {
            window.addEventListener('load', function () {
                var sitebar = window.frameElement;
                var widthSitebar = window.frameElement.width;
                var heightSitebar = window.frameElement.height;
                var minWidthSitebar = 100;
                var minHeightSitebar = 200;
                var maxWidthSitebar = 800;
                var maxHeightSitebar = 1200;
                //var sitebar = document.createElement('div');
                if (calculateRightWidth()*heightSitebar/widthSitebar <= refreshScrollHeight()) {
                    sitebar.style.width = calculateRightWidth()+"px";
                    sitebar.style.height = calculateRightWidth()*heightSitebar/widthSitebar +"px";
                }else{
                    sitebar.style.width = refreshScrollHeight()*widthSitebar/heightSitebar+"px";
                    sitebar.style.height = refreshScrollHeight() +"px";
                }
  
                sitebar.style.background = "white";
               
                parent.addEventListener('scroll', function() {
                   //sitebar.style.height = refreshScrollHeight()+"px";
                   //sitebar.style.width = refreshScrollHeight()/2 +"px";
                });
    
                 //resize
                parent.addEventListener('resize', function() {
                  if (calculateRightWidth()*heightSitebar/widthSitebar <= refreshScrollHeight()) {
                     sitebar.style.width =  calculateRightWidth()+"px";
                     sitebar.style.height = calculateRightWidth()*heightSitebar/widthSitebar +"px";
                    }else{
                     sitebar.style.width = refreshScrollHeight()*widthSitebar/heightSitebar+"px";
                     sitebar.style.height = refreshScrollHeight() +"px";
                    }
                });
 
                function calculateRightWidth(){
                    var differenceWitdh = parent.innerWidth - sitebar.getBoundingClientRect().x;
                    if (differenceWitdh>minWidthSitebar) {
                        if (differenceWitdh<maxWidthSitebar) {
                            return differenceWitdh;
                        }else{
                            return maxWidthSitebar;
                        }
                    }else{
                        return minWidthSitebar;
                    }
                };

                function refreshScrollHeight() { 
                    var differenceHeight = parent.innerHeight- sitebar.getBoundingClientRect().y;
                    if (differenceHeight>minHeightSitebar) {
                        if (differenceHeight<maxHeightSitebar) {
                            return differenceHeight;
                        }else{
                            return maxHeightSitebar;
                        }
                    }else{
                        return minHeightSitebar;
                    }
                };
            }); 
        },
    }; 
    
    Spark.getFirestoreData = function(){
        var url = window.location.href;
        var get_url = 'https://context.funkedigital.de/content_categories?url=' + url;
        var request = new window.XMLHttpRequest();
        request.open("GET", get_url);
        request.send();
        request.responseType = "json";
        request.onload = () => {
          if (request.readyState == 4 && request.status == 200) {
            Spark.iab_str = request.response.iab_ids;
            Spark.funke_contextual = request.response.funke_contextual;
            if (request.response.video != "-1") {
               Spark.video = request.response.video;
            }
          }else{
            Spark.artixcallError = true;
          } 
        };      
     }

    Spark.artixCallEpg = function(url){
        var get_url = 'https://context.funkedigital.de/content_categories?url=' + url;
        var request = new window.XMLHttpRequest();
        request.open("GET", get_url);
        request.send();
        request.responseType = "json";
        request.onload = () => {
          if (request.readyState == 4 && request.status == 200) {
            Spark.iab_str = request.response.iab_ids;
            Spark.funke_contextual = request.response.funke_contextual;
            googletag.cmd.push(function(){
                if (Spark.iab_str != "-1") {
                    googletag.pubads().setTargeting('iab',Spark.iab_str.split(","));
                }
                if (Spark.funke_contextual != "-1") { 
                    googletag.pubads().setTargeting('ctx',Spark.funke_contextual.split(","));
                }
            });
            Spark.artixcallError = false;
          }
        };
    }
    
    Spark.getFirstPartyID = function() {
        function getFirstPartyID() {
            const match = document.cookie.match(new RegExp('spid\\.[a-f0-9]+=([^;]+)'));
        return match ? match[1].split('.')[0] : false;
        }
          const fpid = getFirstPartyID();
          if (fpid) {
            const get_url = 'https://context.funkedigital.de/audix?audix=' + fpid;
            const request = new XMLHttpRequest();
            request.open("GET", get_url);
            request.send();
            request.responseType = "json";
            request.onload = () => {
            
              if (request.status === 200 && request.response) {
                Spark.audix_str = request.response.audix_id;
                Spark.domain_user_id = fpid;
              } else {
                Spark.audixcallError = true;
              }
            };
          } else {
            console.error('FPID not found');
            Spark.audixcallError = true;
          }
    }
    Spark.onClickEpg = function(){
        var listItems = document.querySelectorAll('.m-epg-card__list li');
        listItems.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                var a_elem = this.querySelector('a');
                if (a_elem && a_elem.href) {
                    Spark.artixCallEpg(a_elem.href);
                    Spark.artixCallActive = true;
                }
            });
        });
        var tableItems = document.querySelectorAll('.m-table__series-label');
        tableItems.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                var a_elem = this.querySelector('a');
                if (a_elem && a_elem.href) {
                    Spark.artixCallEpg(a_elem.href);
                    Spark.artixCallActive = true;
                }
            });
        });
    }

    Spark.amazonrequest = function(amazonSlotsArray, headerBiddingSlotsArray){

       if (!Spark.amazonRequestBool) {
           Spark.amazonRequestBool = true;
          /* ----- Begin Step 2 ----- */
            apstag.fetchBids({
            slots: amazonSlotsArray,
            timeout: 2e3
            }, function(bids) {
                /* ----- Begin Step 3 ----- */
                // set apstag targeting on googletag, then trigger the first DFP request in googletag's disableInitialLoad integration
                googletag.cmd.push(function(){
                   apstag.setDisplayBids();
                   //console.log('### spark googletag refresh - amazonrequest');
                    Spark.setHBtargeting(headerBiddingSlotsArray);
                        pbjs.que.push(function() {   
                            pbjs.onEvent('adRenderSucceeded', function(data) {
                                Spark.snowplowTrackingAdRenderSucceeded(data.bid); 
                            });
                        });   
                    googletag.pubads().refresh(headerBiddingSlotsArray);
                });
                /* ----- End Step 3 ----- */
           });
            /* ----- End Step 2 ----- */  
       }
    }

   Spark.removeElementByIdHoerzu = function(item){ 
  
    if ((/hoerzu\.de/.test(window.location.href)) && (/sta_/.test(item.getAdUnitPath()))){
        if (document.getElementById('ad-pos_mod') !== null) {
                document.getElementById('ad-pos_mod').remove();
                    // document.getElementById('ad-pos_mod').style.display = "none";
                    // console.log ('### hoerzu sta --> posn');
        }                            
     } else if ((/hoerzu\.de/.test(window.location.href)) && (/mob_/.test(item.getAdUnitPath()))){
        if (document.getElementById('ad-mr_mod') !== null) {
                    document.getElementById('ad-mr_mod').remove();
                    // document.getElementById('ad-mr_mod').style.display = "none";
                    // console.log ('### hoerzu sta --> posn');
            }
    } 

   }
   Spark.addHeaderBiddingSlot = function(hbslot){
     Spark.headerBiddingSlots.push(hbslot);
   }

    Spark.getAuctionCallbackAdditional = function() {

        var adserverRequestSentAdditional = false;
        var sendAdServerRequestAdditional = function(headerBiddingSlots) {
            if (adserverRequestSentAdditional) return;
            adserverRequestSentAdditional = true;
            if (!Spark.amazon) {
              Spark.setHBtargeting(headerBiddingSlots);
              googletag.cmd.push(function() {               
                googletag.pubads().refresh(headerBiddingSlots);
              });
            }else{
               if(Spark.additionalAmazonSlotsArray.length > 0) {
                  Spark.debugService.debuggingArray.push('Spark: amazonRequestLater: ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                  Spark.amazonrequest(Spark.additionalAmazonSlotsArray, headerBiddingSlots);
                  Spark.amazonRequestBool = false;
               } 
            }
        }
        return sendAdServerRequestAdditional;
    };

  Spark.requestAdditional = function(nonHeader, header){
        //console.log('### spark bidrequest');
        if (nonHeader.length > 0) {
           googletag.cmd.push(function() { 
            googletag.pubads().refresh(nonHeader);
           });
         } 

        if (header.length > 0  && Spark.rubicon) {
            var sendAdServerRequestAdditional = Spark.getAuctionCallbackAdditional();

            setTimeout(function() {
                   sendAdServerRequestAdditional(header);
                   Spark.addHeaderBiddingSlot(header[0]);
            }, 3500);
            // make bid request
            pbjs.que.push(function() {
                Spark.debugService.debuggingArray.push('Spark: additional Slot bidrequest ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                pbjs.rp.requestBids({
                    callback: sendAdServerRequestAdditional,
                    gptSlotObjects: header,
                    sizeMappings: Spark.sizeMapping, 
                    data: { "permutive": {"permutive":Spark.permutiveSegments} }
                });
            });
          
        }
    }; 

    Spark.getAuctionCallback = function() {
        var adserverRequestSent = false;
        var sendAdServerRequest = function(headerBiddingSlots) {
            if (adserverRequestSent) return;
            adserverRequestSent = true;
            if (!Spark.amazon) {
                Spark.setHBtargeting(headerBiddingSlots);
                    pbjs.que.push(function() {
                        pbjs.onEvent('adRenderSucceeded', function(data) {
                            Spark.snowplowTrackingAdRenderSucceeded(data.bid); 
                        });
                    });  
                googletag.cmd.push(function() {
                    googletag.pubads().refresh(headerBiddingSlots);
                });
            }else{
               if (Spark.amazonSlotsArray.length > 0) {
                       Spark.debugService.debuggingArray.push('Spark: amazonRequest ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                       Spark.amazonrequest(Spark.amazonSlotsArray, headerBiddingSlots);
               }
            }
        }
        return sendAdServerRequest;
    };
        

    Spark.request = function(arrayNonHeaderBidding, arrayHeaderBidding){
        //console.log('### spark request');
        //console.log(arrayNonHeaderBidding);
        //console.log(arrayHeaderBidding);
        googletag.cmd.push(function (){
            // wartet auf DMP
            if (arrayNonHeaderBidding.length > 0) {
                //console.log('### spark googletag refresh - request');
                Spark.debugService.debuggingArray.push('Spark: setTimeout adrequest ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                googletag.pubads().refresh(arrayNonHeaderBidding);
                      
            }
            if (arrayHeaderBidding.length > 0  && Spark.rubicon) {
                var sendAdServerRequest = Spark.getAuctionCallback();
                setTimeout(function() {
                   sendAdServerRequest(arrayHeaderBidding);
                }, 3500);
                //console.log({ "permutive": Spark.permutiveSegments })
                // make bid request
                pbjs.que.push(function() {
                    Spark.debugService.debuggingArray.push('Spark: alle Slots bid request ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                    pbjs.rp.requestBids({
                       callback: sendAdServerRequest,
                       gptSlotObjects: arrayHeaderBidding,
                       sizeMappings: Spark.rubicon_size_mapping,
                       data: { "permutive": {"permutive": Spark.permutiveSegments} }
                       
                    });
                });
            }
        })
    };
  
    Spark.calladserver = function(n){ 
         //console.log('### spark calladserver');
         //console.log('Spark.startBool ' + Spark.startBool);
         //console.log('Spark.boolCMP ' + Spark.boolCMP);
         //console.log('Spark.boolDefineSlots ' + Spark.boolDefineSlots);
        if (n == 1) {
            Spark.debugService.debuggingArray.push('Spark: calladserver function ' +' Spark.startBool: ' + Spark.startBool +' Spark.boolCMP: ' + Spark.boolCMP + ' Spark.boolDefineSlots: ' + Spark.boolDefineSlots + ' Spark.boolPermutive: ' + Spark.boolPermutive + ' ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
            if (Spark.startBool && Spark.boolCMP && Spark.boolDefineSlots && Spark.boolPermutive) { 
                Spark.request(Spark.nonHeaderBiddingSlots, Spark.headerBiddingSlots); 
                Spark.debugService["addDebuggingArray"]();
            }
        }else{
            if (!Spark.boolPermutive && !Spark.deactivateAdRequest) {
                Spark.boolPermutive = true;
                Spark.debugService.debuggingArray.push('Spark: setTimeout calladserver function ' +' Spark.startBool: ' + Spark.startBool +' Spark.boolCMP: ' + Spark.boolCMP + ' Spark.boolDefineSlots: ' + Spark.boolDefineSlots + ' Spark.boolPermutive: ' + Spark.boolPermutive + ' ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                
                if (Spark.startBool && Spark.boolCMP && Spark.boolDefineSlots && Spark.boolPermutive) { 
                    Spark.request(Spark.nonHeaderBiddingSlots, Spark.headerBiddingSlots); 
                    
                    Spark.debugService["addDebuggingArray"]();   
                }
            }
        }
    };

    Spark.compareAdslotWithOrder = function(campaignId, elementId) {  
        if (campaignId && Spark.ad_refresh_order_ids.length > 0) {
            if (!Spark.ad_refresh_order_ids.includes(campaignId.toString())) { 
                if (!Spark.adslots_norefresh.includes(elementId)) {
                    Spark.adslots_norefresh.push(elementId);
                    Spark.debugService.debuggingArray.push('Spark: not refreshed slot: ' + elementId + ' ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                    //console.log('not refreshed slot:' + elementId);
                }
            }
        }
    }
    
    Spark.selectedAdrefresh  = function(){ 
        fetch('https://scout.data.funkedigital.de/orders.json')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response for order.json not ok: ' + response.statusText);
                        }
                        return response.text();
                    })
                    .then(text => {
                        // Extract the date from comments
                        const dateCommentMatch = text.match(/\d{4}-\d{2}-\d{2}/);
                        const dateFromJSON = '';
                        if (!dateCommentMatch) {
                            Spark.debugService.debuggingArray.push('Spark: none functional orders.json');
                        } else {
                            const dateFromJSON = dateCommentMatch[0]
                            Spark.debugService.debuggingArray.push('Spark: Date from order.json: ' + dateFromJSON);
                            //console.log('Date from order.json: ' + dateFromJSON );
                        }

                        // Check if the JSON is old
                        if (dateCommentMatch[0] === dateFromJSON) {
                            console.log('order.json is checked already');
                            return; 
                        }

                        // Get the JSON Object
                        const indexOfJsonStart = text.indexOf('[', dateCommentMatch.index);
                        if (indexOfJsonStart === -1) {
                            console.error('No JSON data found.');
                            throw new Error('No order.json start indicator found.');
                        }
                        const jsonText = text.substring(indexOfJsonStart);
                        const data = JSON.parse(jsonText);

                        // Return the parsed data
                        return data;
                    })
                    .then(jsonArray => {
                        // Going through the JSON Object
                        jsonArray.forEach(item => {
                            if (item.order_id) {
                                  //console.log(item.order_id);
                                  Spark.ad_refresh_order_ids.push(item.order_id);
                            }
                        });
                    })
                    .catch(error => {
                        console.error('There has been a problem with the operations:', error);
                    });
        }
    Spark.adrefresh  = function(){ 
        //console.log("Spark adrefresh DevSpark");
        var slotArray = [];
        var slotCreativeIdArray = []; 
        var deactivetedCreativeIdArray =[];    
     
        window.fd_deactivateRefresh = function(creativeId){
            if(!deactivetedCreativeIdArray.includes(creativeId)){
                       deactivetedCreativeIdArray.push(creativeId);       
            };
        }; 
        var numberSlot = [];
        var adServerBoolean = [];
        var secSlot = []; 
        var time = new Date().getTime();
        var secSlotArray = [];
        if (Spark.refrehParameter.length > 0) {
            var config = {
                events_mobile: ['touchmove','click','focus'],
                events_desktop: ['mousemove','keypres','onblur','scroll','keydown'],
                mobile: [
                    Spark.refrehParameter[0]  
                ],
                desktop: [
                    Spark.refrehParameter[1]  
                ],
                refreshTimeDesktop:[ 
                    Spark.refrehParameter[2]  , Spark.refrehParameter[3]  
                ],
                refreshTimeMobile: [
                   Spark.refrehParameter[5]  
                ],
                numberDesktop: [
                    Spark.refrehParameter[6]  
                ],
                numberMobile: [
                    Spark.refrehParameter[7]  
                ]
            };
        }else{
            var config = {
                events_mobile: ['touchmove','click','focus'],
                events_desktop: ['mousemove','keypres','onblur','scroll','keydown'],
                mobile: [
                    80 
                ],
                desktop: [
                    85
                ],
                refreshTimeDesktop:[ 
                   5000, 10000
                ],
                refreshTimeMobile: [
                   7000
                ],
                numberDesktop: [
                    10
                ],
                numberMobile: [
                    10
                ]
            };
        }
        //ein User mindestens x Sekunden aktiv ist 
        config.events_desktop.forEach(function(element){
            window.addEventListener(element,e=>{
                time = new Date().getTime(); 
            });
        });
           
        googletag.cmd.push(function() { 
            googletag.pubads().addEventListener("slotVisibilityChanged",function(event){
                if(!slotArray.includes(event.slot)){
                       slotArray.push(event.slot);       
                }
                 
                    //wenn sich ein adslot aus dem oberen Bereich des Bildschirms verschwindet
                   //ein adslot zu x% sichtbar ist
                if(Spark.device == "mob"){
                    if(event.inViewPercentage < config.mobile[0] || event.inViewPercentage === null ){
                        if(slotArray.includes(event.slot)){
                            slotArray.splice(slotArray.indexOf(event.slot), 1);  
                        } 
                        if(typeof secSlot[event.slot.getSlotElementId()] !== "undefined"){
                            secSlot[event.slot.getSlotElementId()] = null;
                        };
                    };
                  
                      // x sec. sichtbar ist
                    if(event.inViewPercentage > config.mobile[0]  ){
                        if(typeof secSlot[event.slot.getSlotElementId()] === "undefined" || secSlot[event.slot.getSlotElementId()] === null){
                            secSlot[event.slot.getSlotElementId()] = new Date().getTime();
                            secSlotArray[event.slot.getSlotElementId()]= event.slot;       
                        };
                    };
                }else{ 
                    if(event.inViewPercentage < config.desktop[0] || event.inViewPercentage === null ){
                        if(slotArray.includes(event.slot)){
                            slotArray.splice(slotArray.indexOf(event.slot), 1);  
                        };  
                        if(typeof secSlot[event.slot.getSlotElementId()] !== "undefined"){
                            secSlot[event.slot.getSlotElementId()] = null;
                        };
                    };
                      // x sec. sichtbar ist
                    if(event.inViewPercentage > config.desktop[0]  ){
                        if(typeof secSlot[event.slot.getSlotElementId()] === "undefined" ||  secSlot[event.slot.getSlotElementId()] === null){
                           secSlot[event.slot.getSlotElementId()] = new Date().getTime();
                           secSlotArray[event.slot.getSlotElementId()]= event.slot;
                        };
                    };
                };
            });
               
            googletag.pubads().addEventListener("slotRenderEnded",function(event){
                if (!Spark.allSlots.includes(event.slot)) {
                    Spark.allSlots.push(event.slot); 
                }
                
                var campaignId = event.campaignId;
                var elementId = event.slot.getSlotElementId();
                Spark.compareAdslotWithOrder(campaignId, elementId); 
                
                slotCreativeIdArray[event.slot.getSlotElementId()] = event.creativeId;  
                if(slotArray.includes(event.slot)){
                    if(event.isEmpty){ 
                        slotArray.splice(slotArray.indexOf(event.slot), 1);
                        if(typeof secSlot[event.slot.getSlotElementId()] !== "undefined"){
                            secSlot[event.slot.getSlotElementId()] = null;
                        };
                    };         
                };               
            });
                
            function refreshAdSlots() {
                if (Spark.device == "mob") {
                    // x sec. sichtbar ist
                    for (var [key, value] of Object.entries(secSlot)) {
                       if(/moin|wmn|futurezone/.test(window.location.href)){
                         if(new Date().getTime() - value > 10000){
                            if(!slotArray.includes(secSlotArray[key]) && value !== null){
                                slotArray.push(secSlotArray[key]);
                            }; 
                         }else{
                            if(slotArray.includes(secSlotArray[key])){
                                slotArray.splice(slotArray.indexOf(secSlotArray[key]), 1);  
                            }; 
                         };
                      }else{
                         if(new Date().getTime() - value > config.refreshTimeMobile[0]){
                            if(!slotArray.includes(secSlotArray[key]) && value !== null){
                                slotArray.push(secSlotArray[key]);
                            }; 
                         }else{
                            if(slotArray.includes(secSlotArray[key])){
                                slotArray.splice(slotArray.indexOf(secSlotArray[key]), 1);  
                            }; 
                         };
                       }
                    };
                    if(slotArray.length>0){
                       deleteDeactiveted();
                       noRefresh();    
                       check(); 
                    };
                     if(/moin|wmn|futurezone/.test(window.location.href)){
                         setTimeout(refreshAdSlots, 10000);  
                     }else{
                         setTimeout(refreshAdSlots, config.refreshTimeMobile[0]);  
                     } 
                   
                }else{
                    if (/moin|wmn|futurezone/.test(window.location.href)) {
                         if(new Date().getTime() - time >= config.refreshTimeDesktop[0]) {
                        setTimeout(refreshAdSlots, config.refreshTimeDesktop[0]);
                        }else {
                        // x sec. sichtbar ist
                        for (var [key, value] of Object.entries(secSlot)) {
                            if(new Date().getTime() - value > 14000){
                                if(!slotArray.includes(secSlotArray[key]) && value !== null){
                                    slotArray.push(secSlotArray[key]);
                                }; 
                            }else{
                                if(slotArray.includes(secSlotArray[key])){
                                    slotArray.splice(slotArray.indexOf(secSlotArray[key]), 1);  
                                }; 
                            };
                        };
                        if(slotArray.length>0){
                           deleteDeactiveted();
                           noRefresh();    
                           check(); 
                        }; 
                        setTimeout(refreshAdSlots, config.refreshTimeDesktop[0]);  
                     };

                    }else{
                        if(new Date().getTime() - time >= config.refreshTimeDesktop[0]) {
                        setTimeout(refreshAdSlots, config.refreshTimeDesktop[0]);
                        }else {
                        // x sec. sichtbar ist
                        for (var [key, value] of Object.entries(secSlot)) {
                            if(new Date().getTime() - value > config.refreshTimeDesktop[1]){
                                if(!slotArray.includes(secSlotArray[key]) && value !== null){
                                    slotArray.push(secSlotArray[key]);
                                }; 
                            }else{
                                if(slotArray.includes(secSlotArray[key])){
                                    slotArray.splice(slotArray.indexOf(secSlotArray[key]), 1);  
                                }; 
                            };
                        };
                        if(slotArray.length>0){
                           deleteDeactiveted();
                           noRefresh();    
                           check(); 
                        }; 
                        setTimeout(refreshAdSlots, config.refreshTimeDesktop[0]);  
                     };
                  }
                }
            }; 
               
            function deleteDeactiveted(){
               slotArray.forEach(function(element){
                    if(deactivetedCreativeIdArray.includes(slotCreativeIdArray[element.getSlotElementId()])){
                       //console.log(element.getSlotElementId());
                       slotArray.splice(slotArray.indexOf(element), 1);
                       secSlot[element.getSlotElementId()] = null;
                    };
                });
            };
            function noRefresh(){
                if(Spark.adslots_norefresh.length > 0){
                    slotArray.forEach(function(element){
                        if(Spark.adslots_norefresh.includes(element.getSlotElementId())){
                           slotArray.splice(slotArray.indexOf(element), 1);
                           secSlot[element.getSlotElementId()] = null;
                           //console.log(element.getSlotElementId()+ " no Refresh");
                        };
                    }); 
                };
            };
            function  getAuctionCallbackAdrefresh() {
                var adserverRequestSent = false;
                var sendAdServerRequest = function(headerBiddingSlots) {
                    if (adserverRequestSent) return;
                    adserverRequestSent = true;
                    googletag.pubads().refresh(headerBiddingSlots);
                }
                
                    return sendAdServerRequest;
            };    
            function check(){ 
                slotArray.forEach(function(element){
                    adServerBoolean[element.getSlotElementId()] = true;      
                    //ein adslot bereits x mal geladen
                    if(typeof numberSlot[element.getSlotElementId()] === "undefined"){
                        numberSlot[element.getSlotElementId()] = 1;
                    };

                    if (Spark.device =="mob") {
                        if(numberSlot[element.getSlotElementId()] <= config.numberMobile[0]){ 
                            var slotPos = element.getTargeting('pos');
                            element.clearTargeting();
                            element.setTargeting('pos', slotPos[0]);
                            element.setTargeting('refresh', 'true');
                            element.setTargeting('refreshCount', numberSlot[element.getSlotElementId()]);    
                            //refresh adslots
                             if (Spark.amazonSlotsArray.length > 0) {
                                Spark.amazonSlotsArray.forEach(function(elem){
                                    
                                    if (elem["slotID"] == element.getSlotElementId()) {
                                        adServerBoolean[element.getSlotElementId()] = false;
                                        Spark.debugService.debuggingArray.push('Spark: refresh amazon ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                                         apstag.fetchBids({
                                            slots: [elem],
                                            timeout: 2e3
                                         }, function(bids) {
                                                // set apstag targeting on googletag, then trigger the first DFP request in googletag's disableInitialLoad integration
                                                googletag.cmd.push(function(){
                                                   apstag.setDisplayBids();
                                                   //googletag.pubads().refresh([element]);
                                                });
                                            });
                                    }
                                });
                            }
                            if (Spark.headerBiddingSlots.length > 0) {
                                Spark.headerBiddingSlots.forEach(function(elem){
                                    if (elem.getSlotElementId() == element.getSlotElementId()) {
                                        adServerBoolean[element.getSlotElementId()] = false;
                                        var sendAdServerRequest = getAuctionCallbackAdrefresh();
                                         // make bid request
                                        pbjs.que.push(function() {
                                            Spark.debugService.debuggingArray.push('Spark: refresh bidrequest ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                                            pbjs.rp.requestBids({
                                                callback: sendAdServerRequest,
                                                gptSlotObjects: [element],
                                                data: { "permutive": {"permutive":Spark.permutiveSegments} }
                                            });
                                        });
                                    }
                                });
                            }
                           
                            if(adServerBoolean[element.getSlotElementId()]){
                                if (!Spark.adRefreshDisable) {
                                 googletag.cmd.push(function() {   
                                   googletag.pubads().refresh([element]);
                                 }); 
                                }
                                
                            }
                           Spark.debugService.debuggingArray.push('Spark: '+element.getAdUnitPath()+' refreshed ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                     
                            secSlot[element.getSlotElementId()] = new Date().getTime();
                            numberSlot[element.getSlotElementId()] += 1;
                        }
                    }else{
                        if(numberSlot[element.getSlotElementId()] <= config.numberDesktop[0]){ 
                            var slotPos = element.getTargeting('pos');
                            element.clearTargeting();
                            element.setTargeting('pos', slotPos[0]);
                            element.setTargeting('refresh', 'true');
                            element.setTargeting('refreshCount', numberSlot[element.getSlotElementId()]);    
                            //refresh adslots
                             if (Spark.amazonSlotsArray.length > 0) {
                               Spark.amazonSlotsArray.forEach(function(elem){
                                    if (elem["slotID"] == element.getSlotElementId()) {
                                        adServerBoolean[element.getSlotElementId()] = false;
                                         Spark.debugService.debuggingArray.push('Spark: refresh amazon ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                                        apstag.fetchBids({
                                            slots: [elem],
                                            timeout: 2e3
                                        }, function(bids) {
                                          // set apstag targeting on googletag, then trigger the first DFP request in googletag's disableInitialLoad integration
                                            googletag.cmd.push(function(){
                                                apstag.setDisplayBids();
                                                //googletag.pubads().refresh([element]);
                                            });
                                        });
                                    }
                                });
                            }
                            if (Spark.headerBiddingSlots.length > 0) {
                                Spark.headerBiddingSlots.forEach(function(elem){
                                    if (elem.getSlotElementId() == element.getSlotElementId()) {
                                        adServerBoolean[element.getSlotElementId()] = false;
                                        var sendAdServerRequest = getAuctionCallbackAdrefresh();
                                        // make bid request
                                        pbjs.que.push(function() {
                                            Spark.debugService.debuggingArray.push('Spark: refresh bidrequest ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                                            pbjs.rp.requestBids({
                                                callback: sendAdServerRequest,
                                                gptSlotObjects: [element],
                                                data: { "permutive": {"permutive":Spark.permutiveSegments} }
                                            });
                                        });
                                    }
                                });
                            }
                            
                            if(adServerBoolean[element.getSlotElementId()]){
                                if (!Spark.adRefreshDisable) {
                                   googletag.pubads().refresh([element]);
                                   
                                }
                            }
                            Spark.debugService.debuggingArray.push('Spark: '+element.getAdUnitPath()+' refreshed ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                     
                            secSlot[element.getSlotElementId()] = new Date().getTime();
                            numberSlot[element.getSlotElementId()] += 1;
                        }  
                    } 
                }); 
            };
            if (Spark.device =="mob") {
                setTimeout(refreshAdSlots, config.refreshTimeMobile[0]);
            }else{
                 setTimeout(refreshAdSlots, config.refreshTimeDesktop[1]);   
            }
        });
    }
    Spark.disableAdrefresh = function(){
        Spark.headerBiddingSlots = new Array();
        Spark.amazonSlotsArray = new Array();
        Spark.adRefreshDisable = true;
    }
    Spark.watsonSetTargeting = function(taxonomyArray){
        var iabArray = new Array();
        var wtsnArray = new Array();
        var ovkArray  = new Array();
        if (taxonomyArray.length > 0) {
            taxonomyArray.forEach(function(element){ 
             if (Spark.watson_obj.hasOwnProperty(element.label)) {
                Spark.watson_obj[element.label][0].forEach(function(wtsn){
                    if (!wtsnArray.includes(wtsn)) {
                           wtsnArray.push(wtsn);
                    }
                })
                Spark.watson_obj[element.label][1].forEach(function(iab){
                        if (!iabArray.includes(iab)) {
                               iabArray.push(iab);
                        }
                    })
                Spark.watson_obj[element.label][2].forEach(function(ovk){
                        if (!ovkArray.includes(ovk)) {
                             ovkArray.push(ovk);
                        }
                    })
                
               var label = element.label;
               var categories = label.split("/");
               if (categories.length > 2) {
                   categories.shift();
                   categories[0] = "/" + categories[0];
                   if (Spark.watson_obj.hasOwnProperty(categories[0])) {
                       Spark.watson_obj[categories[0]][1].forEach(function(i){
                        if (!iabArray.includes(i)) {
                           iabArray.push(i);
                        }
                        })
                        Spark.watson_obj[categories[0]][2].forEach(function(o){
                            if (!ovkArray.includes(o)) {
                                ovkArray.push(o);
                            }
                        })
                   }
                }
             } 
            });

             googletag.cmd.push(function (){
               if (Spark.iab_str == "-1") {
                googletag.pubads().setTargeting("iab", iabArray);
              }  
               googletag.pubads().setTargeting("wtsn", wtsnArray);
               googletag.pubads().setTargeting("ovk", ovkArray);
               googletag.pubads().setTargeting('abtest', ['a', 't002']);
            });
             
        }else{
            googletag.cmd.push(function (){
                googletag.pubads().setTargeting("wtsn", 'false');
                googletag.pubads().setTargeting('abtest', ['b', 't002']);
            }); 
        }

     }; 

    Spark.start = function(){
       Spark.startBool = true;
       //console.log("call adserver start");
       Spark.calladserver(1);  
       Spark.debugService.debuggingArray.push('Spark: start function: ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);  
    
    };
    Spark.displayMobInterstitial = function(){
        if(Spark.device == "mob"){
            Spark.mob_interstitial = false;
            googletag.cmd.push(function() {
                var slot_inter = googletag.defineOutOfPageSlot(
                '/39216077/'+Spark.adslot['siteName']+'/'+Spark.adslot['zoneName']+'/oop1',
                googletag.enums.OutOfPageFormat.INTERSTITIAL);
                if (slot_inter) {
                    slot_inter.addService(googletag.pubads()).setTargeting("pos", "oop1").setTargeting("environment", "mob");
                }
                // NOTE! Consider delaying until first div on page
                googletag.display(slot_inter);
                setTimeout(function() {
                   googletag.pubads().refresh([slot_inter]);
                }, 1000);
                if (!Spark.dataLayerBool) {
                 googletag.pubads().addEventListener("slotVisibilityChanged",function(event){
                        if(!event.isEmpty && /oop1$/.test(event.slot.getAdUnitPath())){
                           window.dataLayer = window.dataLayer || []; 
                           window.dataLayer.push({
                               'gpt_slot_id': event.slot.getSlotElementId(),
                               'gpt_action': 'slot_visibility_changed',
                               'event': 'prestitial_view'
                           });
                           Spark.dataLayerBool = true;
                        }; 
                 });
                }
             });
        }
    };
    
    Spark.createMobAnchor = function(){
        
        var clicked = false;
        var footer = Spark.creativeService["createElement"]('div', {id:'mob_anchor_ad','style': 'margin: 0; padding: 0; height: 128px; width: 100%; position:fixed; bottom:0; z-index: 10000;display:none;'}, '', document.body);
        if (/reviersport\.de/.test(window.location.href)|| /stage-reviersport\.tools\.funkedigital\.de/.test(window.location.href)){
            footer.style.bottom = "58px";
        }
        if (/radio/.test(parent.window.location)){
            footer.style.width = "100vw";
        }
        if (/9monate/.test(parent.window.location) && /\d{2,}/.test(parent.window.location.href)){
            footer.style.bottom = "35px";
        }
        if (/lifeline.de\/\w/.test(parent.window.location.href)){
            footer.style.bottom = "35px";
        }
        if (/heftig\.de/.test(window.location.href)){
            window.addEventListener("scroll", function(event){
             var socialbar = window.getComputedStyle(document.querySelector("body > div.nc_wrapper.swp_floating_horizontal_wrapper.bottom"));
                if(socialbar !== "undefined"){
                    if (socialbar.visibility == 'visible') { 
                     footer.style.bottom = "54px";
                    } else {
                     footer.style.bottom = "0px";
                    } 
                }
            });
        } 
        var div1 =  Spark.creativeService["createElement"]('div', {'style': 'position:relative;'}, '', footer); 
        var div1_1 =  Spark.creativeService["createElement"]('div', {id:'arrow_box_anchor1','style': 'position:absolute; top: 0; width: 55px; height: 26px; text-align: center; background: #FFF; border-top-right-radius:10px; border: 1px groove; border-bottom:0;border-left:0; z-index: 900;'}, '', div1); 
        var divArrow =  Spark.creativeService["createElement"]('div', {id:'arrow_anchor1','style': 'border-width: 0px 2px 2px 0px; border-style: solid;border-color: black;border-image: initial;display: inline-block;padding: 5px;text-align: center;transform: rotate(45deg);visibility: visible;'}, '', div1_1); 
        
        var div1_2 =  Spark.creativeService["createElement"]('div', {id:'border_box_anchor1', 'style': 'position: absolute;z-index: 900;height: 2px; width:100%; left:55px; top:25px; border-top: 1px groove;'}, '', div1); 
        var div1_3 =  Spark.creativeService["createElement"]('div', {id:'box_anchor1', 'style': 'position:absolute; top:25px; width:100%; padding-top: 3px; height:103px; background: #FFF;-webkit-box-pack: center;-webkit-box-align: center;display: -webkit-box;'}, '', div1); 
        var ad = Spark.creativeService["createElement"]('div', {id: 'anchor1','style': 'text-align:center;'}, '', div1_3); 
            //Spark.definitionService["displaySlot"]("anchor1");
      div1_1.addEventListener("click",function(event){
        if (clicked) {
            footer.style.height = '128px';
            div1_3.style.visibility = 'visible';
            divArrow.style.transform = 'rotate(45deg)';
            clicked = false;
        }else{
           div1_3.style.visibility = 'hidden'; 
           footer.style.height = '25px';
           divArrow.style.transform = 'rotate(-135deg)'; 
           if (/reviersport\.de/.test(window.location.href)|| /stage-reviersport\.tools\.funkedigital\.de/.test(window.location.href)){
            divArrow.style.marginTop = '8px';
            }
           clicked = true;
        }

      });
    };

    Spark.hideAnchorAdframe = function(){
        document.getElementById('arrow_box_anchor1').style.visibility = "hidden";
        document.getElementById('border_box_anchor1').style.visibility = "hidden";
        document.getElementById('arrow_anchor1').style.visibility = "hidden";
        document.getElementById('box_anchor1').style.background = "none";
        document.querySelector("#anchor1").getElementsByTagName("iframe")[0].contentWindow.document.querySelector("#abgc").style.visibility = "hidden";
    }

    Spark.showAnchorAdframe = function(){
        document.getElementById('arrow_box_anchor1').style.visibility = "visible";
        document.getElementById('border_box_anchor1').style.visibility = "visible";
        document.getElementById('arrow_anchor1').style.visibility = "visible";
        document.getElementById('box_anchor1').style.background = "#FFF";
        document.querySelector("#anchor1").getElementsByTagName("iframe")[0].contentWindow.document.querySelector("#abgc").style.visibility = "visible";
    
    };

    Spark.createUnderstitial = function(divId){
       var pos2Div = document.getElementById(divId);
       if (pos2Div) {
           var understitialDiv1 = Spark.creativeService["createElement"]('div', {id:'understitial','style': 'height: 350px;overflow: hidden; display: block; position: relative; box-sizing: border-box; margin: 0 auto;'}, '', pos2Div.parentElement);
           pos2Div.parentElement.insertBefore(understitialDiv1,pos2Div);
           understitialDiv1.appendChild(pos2Div);
           var understitialDiv2 = Spark.creativeService["createElement"]('div', {'style': 'position: absolute!important; top: 0!important; left: 0!important; width: 100%!important; height: 100%!important; border: 0!important; margin: 0!important; padding: 0!important; clip: rect(0,auto,auto,0)!important; -webkit-clip-path: polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important; clip-path: polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important;'}, '', understitialDiv1);
           var understitialDiv3 = Spark.creativeService["createElement"]('div', {'style': 'position: fixed!important; top: 0!important; height: 100%; -webkit-transform: translateZ(0)!important; display: -ms-flexbox; display: flex; -ms-flex-direction: column; flex-direction: column; -ms-flex-align: center; align-items: center; -ms-flex-pack: center; justify-content: center; width: 100%; left: 0'}, '', understitialDiv2);
           understitialDiv3.appendChild(pos2Div);  
       }
    };

    Spark.setHBtargeting = function(hbSlots){
        hbSlots.forEach(function(item){
                    
                    if (/sb1$/.test(item.getAdUnitPath()) && item.getTargeting('hb_deal')[0] == "fireplace" && item.getTargeting('hb_bidder')[0] == "yieldlab") {
                            hbSlots.forEach(function(item1){
                                if (/sky1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_pb_yieldlab',item.getTargeting('hb_pb_yieldlab')[0]);
                                }
                                if (/sb1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                }
                                if (/skyl$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_pb_yieldlab',item.getTargeting('hb_pb_yieldlab')[0]);
                                }
                            });
                        }
                        if (/sb1$/.test(item.getAdUnitPath()) && item.getTargeting('hb_deal')[0] == "fireplace" && item.getTargeting('hb_bidder')[0] == "yieldlabBCN") {
                            hbSlots.forEach(function(item1){
                                if (/sky1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_pb_yieldlabBCN',item.getTargeting('hb_pb_yieldlabBCN')[0]);
                                }
                                if (/sb1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                }
                                if (/skyl$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_pb_yieldlabBCN',item.getTargeting('hb_pb_yieldlabBCN')[0]);
                                }
                            });
                        }
                    if (/sb1$/.test(item.getAdUnitPath()) && item.getTargeting('hb_bidder')[0] == "improvedigital") {
                            hbSlots.forEach(function(item1){
                                if (/sky1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_pb_improvedigital',item.getTargeting('hb_pb_improvedigital')[0]);
                                }
                                if (/sb1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                }
                                if (/skyl$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_pb_improvedigital',item.getTargeting('hb_pb_improvedigital')[0]);
                                }
                            });
                        }

                    if (/sb1$/.test(item.getAdUnitPath()) && item.getTargeting('hb_bidder')[0] == "visx") {
                            hbSlots.forEach(function(item1){
                                if (/sky1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_pb_visx',item.getTargeting('hb_pb_visx')[0]);
                                }
                                if (/sb1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                }
                                if (/skyl$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_pb_visx',item.getTargeting('hb_pb_visx')[0]);
                                }
                            });
                        }
                    if (/sb1$/.test(item.getAdUnitPath()) && (item.getTargeting('hb_bidder')[0] == "Justpremium" || item.getTargeting('hb_bidder')[0] == "justpremium")) {
                            hbSlots.forEach(function(item1){
                                if (/sky1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_pb_justpremium',item.getTargeting('hb_pb_justpremium')[0]);
                                }
                                if (/sb1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                }
                                if (/skyl$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_pb_justpremium',item.getTargeting('hb_pb_justpremium')[0]);
                                }
                            });
                      }
                    if (/sb1$/.test(item.getAdUnitPath()) && (item.getTargeting('hb_bidder')[0] == "GumGum" || item.getTargeting('hb_bidder')[0] == "gumgum")) {
                                hbSlots.forEach(function(item1){
                                    if (/sky1$/.test(item1.getAdUnitPath())){
                                        item1.setTargeting('hb_deal','fireplace');
                                        item1.setTargeting('hb_pb_gumgum',item.getTargeting('hb_pb_gumgum')[0]);
                                    }
                                    if (/sb1$/.test(item1.getAdUnitPath())){
                                        item1.setTargeting('hb_deal','fireplace');
                                    }
                                    if (/skyl$/.test(item1.getAdUnitPath())){
                                        item1.setTargeting('hb_deal','fireplace');
                                        item1.setTargeting('hb_pb_gumgum',item.getTargeting('hb_pb_gumgum')[0]);
                                    }
                                });
                        }
                    if (/sb1$/.test(item.getAdUnitPath()) && item.getTargeting('hb_bidder')[0] == "appnexus" && (item.getTargeting('hb_size')[0] == "1280x90" || item.getTargeting('hb_size_appnexus')[0] == "1280x90" || item.getTargeting('hb_size')[0] == "970x170" || item.getTargeting('hb_size_appnexus')[0] == "970x170")) {
                            hbSlots.forEach(function(item1){
                                if (/sky1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_size','1280x90');
                                    item1.setTargeting('hb_pb_appnexus',item.getTargeting('hb_pb_appnexus')[0]);
                                }
                                if (/sb1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_size','1280x90');
                                }
                                if (/skyl$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_size','1280x90');
                                    item1.setTargeting('hb_pb_appnexus',item.getTargeting('hb_pb_appnexus')[0]);
                                }
                            });
                        }
                    if (/sb1$/.test(item.getAdUnitPath()) && item.getTargeting('hb_bidder')[0] == "pubmatic" && (item.getTargeting('hb_size')[0] == "1280x90" || item.getTargeting('hb_size_pubmatic')[0] == "1280x90" || item.getTargeting('hb_size')[0] == "970x170" || item.getTargeting('hb_size_pubmatic')[0] == "970x170" )) {
                            hbSlots.forEach(function(item1){
                                if (/sky1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_size','1280x90');
                                    item1.setTargeting('hb_pb_pubmatic',item.getTargeting('hb_pb_pubmatic')[0]);
                                }
                                if (/sb1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_size','1280x90');
                                }
                                if (/skyl$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_size','1280x90');
                                    item1.setTargeting('hb_pb_pubmatic',item.getTargeting('hb_pb_pubmatic')[0]);
                                }
                            });
                    }
                     if (/sb1$/.test(item.getAdUnitPath()) && item.getTargeting('hb_bidder')[0] == "PubmaticBCN" && (item.getTargeting('hb_size')[0] == "1280x90" || item.getTargeting('hb_pb_PubmaticBCN')[0] == "1280x90" || item.getTargeting('hb_pb_PubmaticBCN')[0] == "970x170" || item.getTargeting('hb_size')[0] == "970x170")) {
                            hbSlots.forEach(function(item1){
                                if (/sky1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_size','1280x90');
                                    item1.setTargeting('hb_pb_PubmaticBCN',item.getTargeting('hb_pb_PubmaticBCN')[0]);
                                }
                                if (/sb1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_size','1280x90');
                                }
                                if (/skyl$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_size','1280x90');
                                    item1.setTargeting('hb_pb_PubmaticBCN',item.getTargeting('hb_pb_PubmaticBCN')[0]);
                                }
                            });
                        }
                    if (/sb1$/.test(item.getAdUnitPath()) && item.getTargeting('hb_bidder')[0] == "dspx") {
                            hbSlots.forEach(function(item1){
                                if (/sky1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_pb_dspx',item.getTargeting('hb_pb_dspx')[0]);
                                }
                                if (/sb1$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                }
                                if (/skyl$/.test(item1.getAdUnitPath())){
                                    item1.setTargeting('hb_deal','fireplace');
                                    item1.setTargeting('hb_pb_dspx',item.getTargeting('hb_pb_dspx')[0]);
                                }
                            });
                    }
                    if (/anchor1$/.test(item.getAdUnitPath())){
                            pbjs.que.push(function() {
                                pbjs.onEvent('bidWon', function(data) {
                                    if (data.adUnitCode == 'anchor1' && (data.bidderCode == 'ogury' || data.bidderCode == 'justpremium' || data.bidderCode == 'seedtag' || data.bidderCode == 'gumgum')){
                                        //console.log(data.bidderCode+ ' won the ad server auction for ad unit (JP or ogury) ' +data.adUnitCode);
                                        Spark.hideAnchorAdframe();
                                    } else if (data.adUnitCode == 'anchor1' && !(data.bidderCode == 'ogury' || data.bidderCode == 'justpremium' || data.bidderCode == 'seedtag' || data.bidderCode == 'gumgum')) {
                                        Spark.showAnchorAdframe();
                                    }
                                });  
                            });  
                        } ;
                    
                    pbjs.que.push(function() {
                        pbjs.onEvent('bidWon', function(data) {
                            if (data.bidderCode == 'ttd'){
                                //console.log(data.bidderCode + ' won the ad server auction for ad unit TheTradeDesk ' + data.adUnitCode);
                                Spark.adslots_norefresh.push(data.adUnitCode);
                            } 
                        });  
                    }); 
                    
                    Spark.removeElementByIdHoerzu(item);  
            });
    }
    Spark.loadPrebid = function(){
          // Check the prebidRan flag
        if (!Spark.prebidRan) {
          Spark.prebidRan = true;
          var pbjsEl = document.createElement("script");
          pbjsEl.type = "text/javascript";
          pbjsEl.async = true;
          if(Spark.device == "mob"){
            pbjsEl.src = "//micro.rubiconproject.com/prebid/dynamic/18086.js?environment=mob";
          }else{
            pbjsEl.src = "//micro.rubiconproject.com/prebid/dynamic/18086.js?environment=sta";
          }
        
           //Your Prebid JS URL 
          var pbjsTargetEl = document.getElementsByTagName("head")[0];
          pbjsTargetEl.insertBefore(pbjsEl, pbjsTargetEl.firstChild);
          Spark.debugService.debuggingArray.push('Spark: rubicon loaded ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
        }
    };
    Spark.loadAssertiveyield = function(){
        if (!Spark.deactivateAssertiveYield) {
            if (/hoerzu\.de/.test(window.location.href)){

           if (window.location.pathname == '/') {
            window.assertive = {
                debug: true, // for dynamic debug see: https://suite.assertiveyield.com/docs/tracking-client#debug-mode
                entityId: "8uaHKwWjXJENAqcy8",
                analytics: {
                    sampleRate: 1, // 1 = all sessions are tracked, 0.5 = 50% of the sessions are tracked...
                    custom: {
                        // optional dimensions for custom data, they expect null or string
                        layout: null,
                        userState: null,
                        custom_1: null,
                        custom_2: null,
                        custom_3: null,
                        custom_4: null,
                        custom_5: null,
                        custom_6: null,
                        custom_7: null,
                        custom_8: null,
                        custom_9: null,
                    },
                },
            };
           Spark.initService["createScript"]('https://8uahkwwjxjenaqcy8.ay.delivery/client-v2.js', true); 
           }else if (window.location.pathname.indexOf("tv-programm") > -1) {
            window.assertive = {
                debug: true, // for dynamic debug see: https://suite.assertiveyield.com/docs/tracking-client#debug-mode
                entityId: "EYysHJzxopfJbp7f8",
                analytics: {
                    sampleRate: 1, // 1 = all sessions are tracked, 0.5 = 50% of the sessions are tracked...
                    custom: {
                        // optional dimensions for custom data, they expect null or string
                        layout: null,
                        userState: null,
                        custom_1: null,
                        custom_2: null,
                        custom_3: null,
                        custom_4: null,
                        custom_5: null,
                        custom_6: null,
                        custom_7: null,
                        custom_8: null,
                        custom_9: null,
                    },
                },
            };
            Spark.initService["createScript"]('https://eyyshjzxopfjbp7f8.ay.delivery/client-v2.js', true); 
           }else{
            window.assertive = {
                debug: true, // for dynamic debug see: https://suite.assertiveyield.com/docs/tracking-client#debug-mode
                entityId: "PZ32ascsNt4ZG5xBJ",
                analytics: {
                    sampleRate: 1, // 1 = all sessions are tracked, 0.5 = 50% of the sessions are tracked...
                    custom: {
                        // optional dimensions for custom data, they expect null or string
                        layout: null,
                        userState: null,
                        custom_1: null,
                        custom_2: null,
                        custom_3: null,
                        custom_4: null,
                        custom_5: null,
                        custom_6: null,
                        custom_7: null,
                        custom_8: null,
                        custom_9: null,
                    },
                },
            };

            Spark.initService["createScript"]('https://pz32ascsnt4zg5xbj.ay.delivery/client-v2.js', true); 
          }
       }
        }
    };


  
    Spark.debugService = { 
        debuggingArray: new Array(),

        getDebug: function(){
           if((/Mobi/i).test(navigator.userAgent)){
                window.onload = function() {
                    var debugDiv = document.createElement('div');
                    debugDiv.style.position = "fixed";  
                    debugDiv.style.zIndex = "100000";
                    debugDiv.style.bottom = "0px";
                    debugDiv.style.width = "100%";
                    debugDiv.style.height = "50%"
                    debugDiv.style.background = "white";
                    debugDiv.style.backgroundAttachment= "scrool"; 
                    debugDiv.style.fontSize = "xx-large";
                    debugDiv.innerHTML =  "<p>" + Spark.debugService.debuggingArray.join("</p><p>") + "</p>";
                    document.body.appendChild(debugDiv); 
                }
            }else{
                Spark.debugService.debuggingArray.forEach(element => console.log(element));
            };
        },
       
    addDebuggingArray: function(){
          Spark.debugService.debuggingArray.push('Spark: addDebuggingArray function: ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);  
          googletag.cmd.push(function() {
           googletag.pubads().addEventListener("slotRenderEnded",function(event){
                if(!event.isEmpty){ 
                     Spark.debuggingAllSlots.push(event); 
                }   
               
            });
          });
        }
    };
    Spark.snowplowTracking = function(){
        window.googletag = window.googletag || {cmd: []};
        window.dataLayer = window.dataLayer || [];
          
        googletag.cmd.push(function() {
        googletag.pubads().addEventListener("slotRequested", function(event) {
          window.dataLayer.push({
           'gpt_slot_id': event.slot.getSlotElementId(),
           'gpt_action': 'slot_requested',
           'event': 'gpt_listener'
          });
        });
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          window.dataLayer.push({
            'gpt_slot_id': event.slot.getSlotElementId(),
            'gpt_advertiser_id': event.advertiserId,
            'gpt_campaign_id': event.campaignId,
            'gpt_company_ids': event.companyIds,
            'gpt_creative_id': event.creativeId,
            'gpt_is_backfill': event.isBackfill,
            'gpt_is_empty': event.isEmpty,
            'gpt_label_ids': event.labelIds,
            'gpt_line_item_id': event.lineItemId,
            'gpt_size': event.size.join('x'),
            'gpt_slot_content_changed': event.slotContentChanged,
            'gpt_source_agnostic_creative_id': event.sourceAgnosticCreativeId,
            'gpt_source_agnostic_line_item_id': event.sourceAgnosticLineItemId,    
            'gpt_action': 'slot_render_ended',
            'event': 'gpt_listener'
            });
          });
        });

    };

    Spark.snowplowTrackingAdRenderSucceeded = function(data){
      window.dataLayer = window.dataLayer || [];
       window.dataLayer.push({
            'event': 'prebid_bidwon',
            "properties": {
                "ad_id": data.adId,
                "ad_unit_code": data.adUnitCode,
                "advertiser_name": data.adserverTargeting.hb_adomain,
                "auction_id": data.auctionId,
                "bid_available": true,
                "bidder": data.bidder,
                "bidder_timeout": data.ttl,
                "cpm": data.cpm,
                "hb_pb": data.adserverTargeting.hb_pb,
                "height": data.height,
                "time_to_respond": data.timeToRespond,
                "width": data.width,
                "winning_bid": true
            }
        });
    };
    Spark.snowplowTrackingAuctionEnd = function(data){
      window.dataLayer = window.dataLayer || [];
       var datalayer_object = {
        'event': 'auctionEnd',
        'properties': {}
       }
       for (var i = 0; i < data.length; i++) {
            datalayer_object.properties[i] = {
                "ad_id": data[i].adId,
                "ad_unit_code": data[i].adUnitCode,
                "advertiser_name": data[i].adserverTargeting.hb_adomain,
                "auction_id": data[i].auctionId,
                "bid_available": true,
                "bidder": data[i].bidder,
                "bidder_timeout": data[i].ttl,
                "cpm": data[i].cpm,
                "hb_pb": data[i].adserverTargeting.hb_pb,
                "height": data[i].height,
                "time_to_respond": data[i].timeToRespond,
                "width": data[i].width,
                "winning_bid": true  
            }
       }
        window.dataLayer.push(datalayer_object); 
    };
    
    Spark.definitionService = {
        getAllSlots:function(){
            return  Spark.allSlots; 
        },

        pwaPageSwitch:function(pageData){
            googletag.destroySlots();
            if (Spark.device == "mob" && document.getElementById("mob_anchor_ad")) { 
               document.getElementById("mob_anchor_ad").remove();
            }

            var targetingValues = new Object();
            var hBS = new Array();
            var nHBS = new Array();

            var targetingKeys = ["permutive","spark","screen_width","browser_width","advelvet","puid"]
            targetingKeys.forEach(function(element){
                targetingValues[element] = googletag.pubads().getTargeting(element);
            });

          
            googletag.pubads().clearTargeting();
            for (const [key, value] of Object.entries(targetingValues)) {
              googletag.cmd.push(function() {
               googletag.pubads().setTargeting(key, value);
              });
            }
            // frag existiert oder nicht 
            // watson abfrage 
            // sitename und zonename ersetzen

            Spark.adslot['siteName'] = pageData["siteName"];
            Spark.adslot['zoneName'] = pageData["zoneName"]; 

            Spark.allSlots = new Array();
            Spark.headerBiddingSlots = new Array();
            Spark.nonHeaderBiddingSlots = new Array();
            Spark.amazonSlotsArray = new Array();
            Spark.additionalAmazonSlotsArray = new Array();

            Spark.definitionService["targetings"](pageData["targetings"]);

                if (Spark.device == "mob") { 
                    if (/wmn\.de|eatclub\.tv|futurezone\.de|selfies\.com|imtest\.de|hoerzu\.de|hoerzu\.at|m\.tvdirekt\.de|mobil\.4players\.de|hoerzu\.at|hzdevpimcore11at.dcmdev.de/.test(window.location.href) || Spark.mob_anchor){
                        var anchorSlot = googletag.defineSlot('/39216077/'+ Spark.adslot['siteName']+'/'+ Spark.adslot['zoneName']+'/anchor1', [[300,50],[320,50],[300,75],[320,75],[320,100],[300,100]], 'anchor1').addService(googletag.pubads());
                        Spark.debugService.debuggingArray.push('Spark: '+'/39216077/'+Spark.adslot['siteName']+'/'+Spark.adslot['zoneName']+'/anchor1 defined with size '+[[300,50],[320,50],[300,75],[320,75],[320,100],[300,100]]+' '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]); 
                        anchorSlot.setTargeting('pos', 'anchor1');
                        //Spark.targetings["pos"] = 'anchor1';
                        anchorSlot.setTargeting("refresh", "initial");

                        if (Spark.deactivateRubicon) {
                            nHBS.push(anchorSlot);
                        }else{
                            hBS.push(anchorSlot);
                        }
                        
                        if (Spark.amazon) {
                            var amazonAnchorSlotObject = {
                            slotID:  'anchor1',
                            slotName: '/39216077/'+Spark.adslot['siteName']+'/'+Spark.adslot['zoneName']+'/anchor1',
                            sizes: [[300,50],[320,50],[300,75],[320,75],[320,100],[300,100]]
                            };

                           Spark.additionalAmazonSlotsArray.push(amazonAnchorSlotObject);
                           Spark.amazonSlotsArray.push(amazonAnchorSlotObject);
                           Spark.amazonRequestBool = false;
                        }
                    
                            Spark.createMobAnchor();
                            Spark.mob_anchor = false;

                            googletag.display("anchor1");

                            Spark.requestAdditional(nHBS, hBS);
                    }

                      googletag.pubads().addEventListener("slotResponseReceived",function(event){
                            if(/anchor1$/.test(event.slot.getAdUnitPath())){
                                Spark.showAnchorAdframe();
                               }; 
                      });

                      googletag.pubads().addEventListener("slotRenderEnded",function(event){
                        if(!event.isEmpty && /anchor1$/.test(event.slot.getAdUnitPath())){
                            document.getElementById("mob_anchor_ad").style.display = 'block';
                            Spark.showAnchorAdframe();
                        }; 
                      });
                };

            if(typeof pageData["permutiveTax"] !== "undefined"){
                if (pageData["targetings"]["artikeltyp"] != "index" && pageData["targetings"]["artikeltyp"] != "gallery" && pageData["targetings"]["artikeltyp"] != "epg" && window.location.pathname != "/suche/" && window.location.href.indexOf("?") == -1 && window.location.href.indexOf("#") == -1) {
                    pageData["permutiveTax"].classifications_watson = {
                        categories: "$alchemy_taxonomy",
                        concepts: "$alchemy_concepts",
                        entities: "$alchemy_entities",
                        keywords: "$alchemy_keywords",
                        watson_sentiment: "$alchemy_document_sentiment"
                    };
                    //console.log(datalist["permutiveTax"]);  
                    permutive.addon("web", { 
                        page: pageData["permutiveTax"]
                    });
                }else{
                    permutive.addon("web", { 
                        page: pageData["permutiveTax"]
                    });
                }   
            }else{
                if (pageData["targetings"]["artikeltyp"] != "index" && pageData["targetings"]["artikeltyp"] != "gallery" && pageData["targetings"]["artikeltyp"] != "epg" && window.location.pathname != "/suche/" && window.location.href.indexOf("?") == -1 && window.location.href.indexOf("#") == -1) {
                    permutive.addon("web", { 
                        page: {
                            classifications_watson: {
                                  categories: "$alchemy_taxonomy",
                                  concepts: "$alchemy_concepts",
                                  entities: "$alchemy_entities",
                                  keywords: "$alchemy_keywords",
                                  watson_sentiment: "$alchemy_document_sentiment"
                            }
                        }
                    });
                }else{
                        permutive.addon("web", {});
                } 
            } 
          
        },   
        setZone:function(zoneName){
             Spark.adslot['zoneName'] = zoneName;
        },
        getPermutiveSegmentsArray:function(str){
            var replace_str = str.replace("[","");
            replace_str = replace_str.replace("]","");
            return replace_str.replace(/["']/g, "").split(",");
        },
        setExclusive:function(exclusiveParameter){ 
            Spark.exclusive = true;  
            Spark.deactivateAmazon = true;  
            Spark.deactivateRubicon = true;
            Spark.deactivateIntoWow = true;
            googletag.cmd.push(function (){
             googletag.pubads().setTargeting('exclusive',exclusiveParameter);
            }); 
        },
        getDomainName: function(hostname) {
            var parts = hostname.split('.').reverse(); // Split hostname and reverse for easy access
              
            if (parts.length >= 2) {
               return parts[1]; 
            }
               return hostname;
        },
        containsArray: function(haystack, needle){
          return haystack.some(item => {
            return Array.isArray(item) && Array.isArray(needle) && item.length === needle.length && item.every((val, index) => val === needle[index]);
          });
        },
        getPermutiveTargeting:function(){
          segment = '';
          permutive.segments(function(segments) {
          segment = 'permutive='+segments.join();
           //console.log(segments);
          });
          return segment;
        },

        isJSON:function(str){
            try {
               JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        },

        targetings:function(object){
           googletag.cmd.push(function (){
                for (const [key, value] of Object.entries(object)) {
                    if (value !== "") {
                          googletag.pubads().setTargeting(key, value);
                          var output = 'Spark: setTargeting('+key+', '+value+') '
                          Spark.debugService.debuggingArray.push(output + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                       
                       }
                }
                if (localStorage !== "undefined") {
                    if (localStorage.getItem('permutive-id') !== "undefined") {
                        Spark.ppid = localStorage.getItem('permutive-id');
                    }
                    if (localStorage._pdfps && localStorage._pdfps !== "") {
                        Spark.permutiveSegments = Spark.definitionService.getPermutiveSegmentsArray(localStorage._pdfps);
                        googletag.pubads().setTargeting('permutive', Spark.definitionService.getPermutiveSegmentsArray(localStorage._pdfps));
                        Spark.debugService.debuggingArray.push('Spark: definitionService permutive ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                    }
                    //console.log('Permutive definitionService')
                }   
           });
           //Spark.cmd = googletag.cmd; 
        },

        initHbInstream: function(autoplay){
            if(!Spark.deactivateRubicon && !Spark.deactivateHbInstream){ 
                const AdUnitThirdLevel = {
                    thirdLevel: ['preroll1', 'preroll']
                };
                const buildAdURL = (thirdLevelIndex) => {
                    return AdUnitThirdLevel.thirdLevel[thirdLevelIndex];
                };
                const slotName = buildAdURL((autoplay == true || typeof autoplay == 'undefined') ? 1 : 0);
                //console.log(slotName);
               
                var slot_name = '/39216077/' + Spark.adslot['siteName'] + '/' + Spark.adslot['zoneName'] + '/' + slotName;
                pbjs.que.push(function() {
                    //console.log('## requestVideoBids');
                        pbjs.rp.requestVideoBids({
                            adSlotName: slot_name,
                            adServer: "gam",
                            playerSize: [640,480],
                            data: { "permutive": {"permutive":Spark.permutiveSegments} },
                            callback: Spark.definitionService.getBidResponse
                        });

                });
                apstag.fetchBids({
                        slots: [{
                            slotID: 'preroll',
                            mediaType: 'video',
                            sizes: [[640,480]]
                        }],
                        timeout: 1500
                    },
                    function(bids) {
                        console.log("amazon APS response");
                       // console.log(bids);
                        Spark.amazon_targets = Spark.definitionService.attachVideoTargeting(bids);
                        // console.log("amazon target "+ Spark.amazon_targets);
                    }
                 );   
            }else{
                document.dispatchEvent(Spark.event_hbInstream); 
            } 
        },




        getBidResponse: function(bidResponses, timedOut, auctionId) {
            // console.log('### getBidResponse');
            if (typeof bidResponses !== 'undefined' && Object.keys(bidResponses).length > 0) {
                //console.log(bidResponses);
                if (typeof bidResponses.adTagUrl !== 'undefined') {
                    // console.log('### getBidResponse.adTagUrl');
                    Spark.hb_targets = '%26';
                    var adtag = bidResponses.adTagUrl.split('&');
                    adtag.forEach ((a, i) => {
                        if (/cust_params=/.test(a)) {
                            Spark.hb_targets += a.split('=')[1];
                        }
                    });
                    Spark.prerollHb = true;
                }else {
                    // console.log ('### no bidResponses')
                };

            }; 
             document.dispatchEvent(Spark.event_hbInstream); 
        }, 
        attachVideoTargeting: function(bids){
          var targeting = bids.filter(function (bid) { return bid.mediaType === 'video' }).map(function (bid) { return bid.encodedQsParams || bid.helpers.encodedQsParams(); }).join('');
          return targeting;
        },
        getPrerollRequest: function(obj){
            Spark.debugService.debuggingArray.push('Spark: getPrerollRequest '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
            
            var vidix_funke_contextual = "";
            var iabv1 = "";
            var AdUnitThirdLevel = {
                thirdLevel: ['preroll1', 'preroll']
            }
            const buildAdURL = (thirdLevelIndex) => {
                var thirdLevel = AdUnitThirdLevel.thirdLevel[thirdLevelIndex],
                    permutiveId = localStorage.getItem('permutive-id') || '-1'; // Provide a default value if not found

                return '//pubads.g.doubleclick.net/gampad/ads?&sz=480x360%7C640x480&iu=/39216077/'+ Spark.adslot['siteName'] +'/'+ Spark.adslot['zoneName'] +'/'+ thirdLevel+'&impl=s&correlator='+ parseInt(Math.random() * (10000000000)) + 
                        '&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=0&url='+encodeURIComponent(window.location.href)+ 
                        '&description_url='+encodeURIComponent(window.location.href)+'&ppid='+permutiveId+'&plcmt=2&vpmute=1&cust_params=';
            }
           
            const pageParam = buildAdURL((obj['autoplay'] == true || typeof obj['autoplay']  == 'undefined') ? 1 : 0);

            var custParamVideoRequest  = {
                'ttID': obj['videoID'], 
                'artikeltyp': Spark.targetings["artikeltyp"], 
                'pos':(typeof obj['autoplay'] == 'undefined' || obj['autoplay'] == true) ? 'preroll' : 'preroll1',
                'loknewsid': Spark.targetings["loknewsid"], 
                'lokseite': Spark.targetings["lokseite"],
                'loktitel':  Spark.targetings["loktitel"],
                'lokverz1': Spark.targetings["lokverz1"],
                'lokverz2': Spark.targetings["lokverz2"],
                'lokverzn': Spark.targetings["lokverzn"],
                'videotags': encodeURIComponent(obj['videoTags']),
                'pgname': obj['pgname'],
                'advelvet': parseInt(Math.random() *(20 - 1) + 1),
                'environment': Spark.targetings["environment"], 
                'playerHeight': obj['playerHeight'],
                'playerWidth': obj['playerWidth'],
                'playerPos': obj['playerPos'],
                'playlist': obj['playlist'],
                'playlistId': obj['playlistId'], 
                'paid': obj['paid'],
                'playlistcount': obj['playlistcount'], 
                //'permutive': encodeURIComponent(Spark.definitionService.getPermutiveTargeting().replace('permutive=','')),
                'permutive':(Spark.targetings["permutive"] || '').toString(),
                'ppid': localStorage.getItem('permutive-id'),
                'spark': 'true',
                'autoplay':(typeof obj['autoplay'] !== 'undefined') ? obj['autoplay'] : '',
                'player':(typeof obj['player'] !== 'undefined') ? obj['player'] : '',
            } 
                if (typeof Spark.video !== "undefined" && Spark.video.length > 0) {
                    Spark.video.forEach(function(elem){
                        for (const [key, value] of Object.entries(elem)) {
                            if (key == obj.videoID) {
                                vidix_funke_contextual = value.funke_contextual;
                                iabv1 = value.iab_ids;
                            }             
                        }
                    });
                }

                if (Spark.definitionService["isJSON"](decodeURIComponent(localStorage["id5id"]))) {
                   custParamVideoRequest["id5"] = JSON.parse(decodeURIComponent(localStorage["id5id"]))["original_uid"];
                } 
                if (typeof ihowpbjs !== 'undefined') {
                   if (ihowpbjs.getUserIds() !== 'undefined') {
                      custParamVideoRequest["criteo"] = ihowpbjs.getUserIds()["criteoId"];
                   }
                }
                if(iabv1) {
                    custParamVideoRequest.iab = iabv1;
                }

                if(vidix_funke_contextual) {
                    custParamVideoRequest.ctx = vidix_funke_contextual;
                }
                if (Spark.audixCallActive){
                    if (Spark.audix_str != "-1") {
                        custParamVideoRequest["audix"] = Spark.audix_str;
                    }
                }
                Object.keys(custParamVideoRequest).forEach(key => {
                        if (typeof custParamVideoRequest[key] === 'undefined') delete custParamVideoRequest[key];
                });
                var adtagWithoutHb = pageParam + Object.keys(custParamVideoRequest).map(function (key) { 
                                return "" + key + "%3D" + custParamVideoRequest[key]
                            }).join("%26");
                  
                if(!Spark.deactivateRubicon && !Spark.deactivateHbInstream && Spark.prerollHb && !Spark.HBParameter){ 
                        var adtag = adtagWithoutHb + Spark.hb_targets; 
                        if (Spark.amazon_targets) {
                            adtag = adtag + Spark.amazon_targets;
                        } 
                        Spark.debugService.debuggingArray.push('Spark: getPrerollRequest with HB '+ adtag);
                        Spark.HBParameter = true;
                        return adtag; 
                } else if (!Spark.prerollHb || Spark.HBParameter){
                        var adtag = adtagWithoutHb; 
                        Spark.debugService.debuggingArray.push('Spark: getPrerollRequest without HB '+ adtag);    
                        return adtag;    
                };
        },

        refresh:function(slotArray){
          googletag.cmd.push(function (){
          if (slotArray === undefined) {
             googletag.pubads().refresh(Spark.nonHeaderBiddingSlots); 
             googletag.pubads().refresh(Spark.headerBiddingSlots);

          }else{
            slotArray.forEach(function(element){

            if (Spark.nonHeaderBiddingSlots.length > 0) {
            Spark.nonHeaderBiddingSlots.forEach(function(elem){
                  if (elem.getSlotElementId() == element) {
                    googletag.pubads().refresh([elem]);
                  }
             });
            }
            if (Spark.headerBiddingSlots.length > 0) {
             Spark.headerBiddingSlots.forEach(function(elem){
                  if (elem.getSlotElementId() == element) {
                    googletag.pubads().refresh([elem]);
                  }
                });
               }
              })
             }
           });
        },
    

        displaySlot: function(id){
            //console.log('### spark displaySlot');
            if (Spark.boolDefineSlots){
               googletag.cmd.push(function(){ 
                 googletag.display(id); 
              });
            }else{
                if (!Spark.displaySLotIdArray.includes(id)) {
                    Spark.displaySLotIdArray.push(id);
                }
            } 
             
             if(Spark.mob_interstitial){
               Spark.displayMobInterstitial();
             }
             
        },
        displaySlots: function(idArray){
           idArray.forEach(Spark.definitionService.displaySlot);
        },

        setTargeting:function(object){
               googletag.cmd.push(function (){
                   for (const [key, value] of Object.entries(object)) {
                        if (value !== "") {
                          googletag.pubads().setTargeting(key, value);
                          Spark.targetings[key] = value;
                          var output = 'Spark: setTargeting('+key+', '+value+') '
                          Spark.debugService.debuggingArray.push(output + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                        }
                      
                   } 
               });
               //Spark.cmd = googletag.cmd; 
        },
        clearTargeting:function(key){
            googletag.cmd.push(function (){
                googletag.pubads().clearTargeting(key); 
                Spark.debugService.debuggingArray.push('Spark: clearTargeting '+key+' '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
            });
               
        },
        destroySlots:function(array){
            googletag.cmd.push(function (){
                googletag.destroySlots(array); 
                Spark.debugService.debuggingArray.push('Spark: destroySlots '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
            });
               
        },
        getSiteInfo:function(){
            var siteInfo = new Object();
            siteInfo["siteName"] = Spark.adslot['siteName'];
            siteInfo["zoneName"] = Spark.adslot['zoneName'];
            siteInfo["targetings"] = Spark.targetings;
            return siteInfo;
        },

        defineSlots: function(slotArray){ 
            slotArray.forEach(Spark.definitionService.defineSlot);
        },
     
        defineSlot: function(slot){
        
        //disable Adslots inside APP on articles
        if (/CleverPushApp/.test(window.navigator.userAgent) && /\.de\/([^\/]+)\/(.+)\//.test(window.location.href)) {
            if (slot && slot['id'] && slot['name']) {
                if (slot['name'] == 'pos3' || slot['name'] == 'posn'|| slot['name'] == 'po1') {
                    Spark.disableAdSlot = true;
                    Spark.boolDefineSlots = false;
                    var element = document.getElementById(slot['id']);
                        if (element) {
                            element.style.display = 'none';
                        }
                } else{
                    Spark.disableAdSlot = false;
                }
            }
        };
    

       if (!Spark.deactivateAdRequest && !Spark.disableAdSlot) { 
       /*  
        if (Spark.rubicon) {
          if (typeof slot['headerbidding'] === "undefined" ) {
            var headerbidding = true;
          }else{
            var headerbidding = slot['headerbidding'];
          }
        }else{
           var headerbidding = false;
        }
      */
       var headerbidding = true;
       if (slot['name'] == 'pos2') {
            if (window.location.host != 'www.hoerzu.at') {
                 slot.sizes.push([300,220]);
            }
            if (Spark.device == "mob") { 
                if (/wmn/.test(window.location.href)){
                    slot['sizes'].push([300,600]);
                        Spark.createUnderstitial(slot['id']);
                }
            }
        }
        if (slot['name']== 'po1') { 
            if (/4players|moin|thueringen24|derwesten|news38|berlin-live|bildderfrau|schlager|selfies|wmn|veggieboom|einfachschoen|genialetricks|heftig|leckerschmecker|riquisimo|scrum|bonap|gofeminin/.test(window.location.href)) {
                if (Spark.device == "sta"){
                    slot.sizes.push([970,540],[300,250],[300,400]);
                } else if (Spark.device == "mob" && !Spark.definitionService.containsArray(slot.sizes, [300, 250])){
                    slot.sizes.push([300,250],[300,400]);
                }        
            }
        }

        if (slot['name'] == 'sb1' && Spark.definitionService.containsArray(slot.sizes, [1280, 90]) && window.location.host != 'www.hoerzu.at') {
                    slot.sizes.push([970,170]);
        } 

       Spark.sizeMapping = new Object();
        googletag.cmd.push(function(){    
         if (Spark.boolCMP && Spark.boolPermutive && Spark.boolDefineSlots) {
          Spark.additionalAmazonSlotsArray = [];  
          var headerBiddingSlot = new Array();
          var nonHeaderBiddingSlot = new Array();
          var amazonSlot = new Array();
          if (typeof slot['sizes'] === "undefined" || slot['sizes'].length == 0) {
                var admoSlot = googletag.defineOutOfPageSlot('/39216077/'+Spark.adslot['siteName']+'/'+Spark.adslot['zoneName']+'/'+slot['name'], slot['id']).addService(googletag.pubads());
                Spark.debugService.debuggingArray.push('Spark: '+'/39216077/'+Spark.adslot['siteName']+'/'+Spark.adslot['zoneName']+'/'+slot['name']+' defined '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]); 
            }else{ 
                var admoSlot = googletag.defineSlot('/39216077/'+Spark.adslot['siteName']+'/'+Spark.adslot['zoneName']+'/'+slot['name'], slot['sizes'], slot['id']).addService(googletag.pubads());
                Spark.debugService.debuggingArray.push('Spark: '+'/39216077/'+Spark.adslot['siteName']+'/'+Spark.adslot['zoneName']+'/'+slot['name']+' defined with size '+ slot['sizes']+' '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]); 
          }
                  for (const [key, value] of Object.entries(slot["targetings"])) {
                         admoSlot.setTargeting(key, value);
                  }
                   admoSlot.setTargeting("refresh", "initial");

                  if (typeof slot["setCollapseEmptyDiv"] !== "undefined" && slot["setCollapseEmptyDiv"] == 2) {
                    admoSlot.setCollapseEmptyDiv(true,true);
                  }else{
                    admoSlot.setCollapseEmptyDiv(true);
                  }   
                  if (typeof slot["sizeMapping"] !== "undefined") {
                    var mapping = googletag.sizeMapping();
                    slot["sizeMapping"].forEach(function(arr){
                        mapping =mapping.addSize(arr[0],arr[1]);
                  })
                     mapping = mapping.build();
                     admoSlot.defineSizeMapping(mapping);
                  }
                  if (typeof slot["sizeMapping"] !== "undefined" && headerbidding) {
                    var rubicon_array = new Array();
                    slot["sizeMapping"].forEach(function(arr){
                      var rubicon_object = new Object();
                      rubicon_object["minViewPort"] = arr[0];
                      rubicon_object["sizes"] = arr[1];
                      rubicon_array.push(rubicon_object);
                    });
                      Spark.sizeMapping[slot['id']] = rubicon_array; 
                    }
                  if (slot["noRefresh"]) {
                       Spark.adslots_norefresh.push(slot['id']);
                  } 
                  if (headerbidding == false || Spark.deactivateRubicon) {
                     nonHeaderBiddingSlot.push(admoSlot);
                     Spark.nonHeaderBiddingSlots.push(admoSlot);
                  }else{
                     headerBiddingSlot.push(admoSlot);
                    if(Spark.amazon){
                      var amazonSlotObject = {
                      slotID:  slot['id'],
                      slotName: '/39216077/'+Spark.adslot['siteName']+'/'+Spark.adslot['zoneName']+'/'+slot['name'],
                      sizes: slot['sizes']
                      };
                      amazonSlot.push(amazonSlotObject);
                      Spark.additionalAmazonSlotsArray.push(amazonSlotObject);
                      Spark.amazonSlotsArray.push(amazonSlotObject);
                    }

                    Spark.debugService.debuggingArray.push('Spark: setTimeout additional Slot amazonRequest ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                    Spark.amazonRequestBool = false;
                    //Spark.requestAdditional(nonHeaderBiddingSlot, headerBiddingSlot);

                    //if (amazonSlot.length > 0) {
                      //Spark.amazonrequest(amazonSlot, headerBiddingSlot);
                    //}
                    //Spark.headerBiddingSlots.push(admoSlot);
                 }
                  Spark.requestAdditional(nonHeaderBiddingSlot, headerBiddingSlot);
                  
           }else{
              
            if (typeof slot['sizes'] === "undefined" || slot['sizes'].length == 0) {
                var admoSlot = googletag.defineOutOfPageSlot('/39216077/'+Spark.adslot['siteName']+'/'+Spark.adslot['zoneName']+'/'+slot['name'], slot['id']).addService(googletag.pubads());
                Spark.debugService.debuggingArray.push('Spark: '+'/39216077/'+Spark.adslot['siteName']+'/'+Spark.adslot['zoneName']+'/'+slot['name']+' defined '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]); 
            }else{ 
                 var admoSlot = googletag.defineSlot('/39216077/'+Spark.adslot['siteName']+'/'+Spark.adslot['zoneName']+'/'+slot['name'], slot['sizes'], slot['id']).addService(googletag.pubads());
                 Spark.debugService.debuggingArray.push('Spark: '+'/39216077/'+Spark.adslot['siteName']+'/'+Spark.adslot['zoneName']+'/'+slot['name']+' defined with size '+ slot['sizes'] +' '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]); 
            }     
                 for (const [key, value] of Object.entries(slot["targetings"])) {
                         admoSlot.setTargeting(key, value);
                  }
                   admoSlot.setTargeting("refresh", "initial");
                  if (typeof slot["setCollapseEmptyDiv"] !== "undefined" && slot["setCollapseEmptyDiv"] == 2) {
                    admoSlot.setCollapseEmptyDiv(true,true);
                  }else{
                    admoSlot.setCollapseEmptyDiv(true);
                  }
                 if (typeof slot["sizeMapping"] !== "undefined" ) {
                    var mapping = googletag.sizeMapping();
                     slot["sizeMapping"].forEach(function(arr){
                         mapping = mapping.addSize(arr[0],arr[1]);
                     })
                    
                      mapping = mapping.build();
                     admoSlot.defineSizeMapping(mapping);
                  }
                 
                if(typeof slot["sizeMapping"] !== "undefined" && headerbidding) {
                    var rubicon_array = new Array();
                    slot["sizeMapping"].forEach(function(arr){
                      var rubicon_object = new Object();
                      rubicon_object["minViewPort"] = arr[0];
                      rubicon_object["sizes"] = arr[1];
                      rubicon_array.push(rubicon_object);
                    });
           
                   Spark.rubicon_size_mapping[element['id']] = rubicon_array; 
                }
                  if (slot["noRefresh"]) {
                    Spark.adslots_norefresh.push(slot['id']);
                  }

                  if (headerbidding == false || Spark.deactivateRubicon) {
                     Spark.nonHeaderBiddingSlots.push(admoSlot);
                  }else{
                     Spark.headerBiddingSlots.push(admoSlot);
                    if(Spark.amazon){
                      var amazonSlotObject = {
                      slotID:  slot['id'],
                      slotName: '/39216077/'+Spark.adslot['siteName']+'/'+Spark.adslot['zoneName']+'/'+slot['name'],
                      sizes: slot['sizes']
                      };
                     
                      Spark.amazonSlotsArray.push(amazonSlotObject);
                    }
                  }
                }
            })
          }
         }  
      }; 
    Spark.initService = { 

       setImageUrl: function(url){
           (new Image()).src = url;
       },
    
       setIframeUrl: function (url){
           var ifrm = document.createElement("iframe");
           ifrm.setAttribute("src", "url");
           document.getElementsByTagName('body').lastChild.after(ifrm); 
       },
    
       createScript: function (url, async){
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = async;
            script.src = url;
            document.getElementsByTagName('head').item(0).appendChild(script); 
        },
   
       createLink: function(url){
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.getElementsByTagName('head').item(0).appendChild(link); 
         },
       createTextNode: function(){

       },
       deactivateComponents: function(urlParams){
         if (urlParams.has('rubicon') && urlParams.get('rubicon') == "false") {
                Spark.deactivateRubicon = true;
         }
         if (urlParams.has('geoedge') && urlParams.get('geoedge') == "false") {
                Spark.deactivateGeoedge = true;
         }
         if (urlParams.has('amazon') && urlParams.get('amazon') == "false") {
                Spark.deactivateAmazon = true;
         }
         if (urlParams.has('permutive') && urlParams.get('permutive') == "false") {
                Spark.deactivatePermutive = true;
        }
        if (urlParams.has('refresh') && urlParams.get('refresh') == "false") {
                Spark.disableAdrefresh();
         }
         if (urlParams.has('pubmatic') && urlParams.get('pubmatic') == "false") {
                Spark.deactivatePubmatic = true;
         }
         if (urlParams.has('assertiveyield') && urlParams.get('assertiveyield') == "false") {
                Spark.deactivateAssertiveYield = true;
         }
         if (urlParams.has('intowow') && urlParams.get('intowow') == "false") {
                Spark.deactivateIntoWow = true;
         }
         if (urlParams.has('HbInstream') && urlParams.get('HbInstream') == "false") {
                Spark.deactivateHbInstream = true;
         }
         if (urlParams.has('testUtiq') && urlParams.get('testUtiq') == "1") {
                Spark.deactivateUtiq = true;
         }
      }
    };

      document.addEventListener('consentReceived', function (e) {
        if (!Spark.bool_consent) {  
            Spark.bool_consent = true;
            for (var i=0;i<Spark.func_consent.length;i++){
              Spark.func_consent[i](Spark.tcData);
            }
        }    
      });
      document.addEventListener('permutiveReady', function (e) {
       if (!Spark.bool_permutive) {
            Spark.bool_permutive = true;
            for (var i=0;i<Spark.func_permutive.length;i++){
              Spark.func_permutive[i](Spark.tcData);
            }
        }
      });

      document.addEventListener('hbInstreamReady', function (e) {
       if (!Spark.bool_hbInstream) {
            Spark.bool_hbInstream = true;
            for (var i=0;i<Spark.func_hbInstream.length;i++){
              Spark.func_hbInstream[i](Spark.tcData);
            }
        }
      });
     
     Spark.addEventListener = function (a, b){
        if (a === 'consentReceived') {
          if (!Spark.bool_consent){
            Spark.func_consent.push(b);
          } else {
            b(Spark.tcData); // aufruf mit tcData
          }
        }
        if (a === 'permutiveReady') {
          if (!Spark.bool_permutive){
            Spark.func_permutive.push(b);
          } else {
            b(Spark.tcData); // aufruf mit tcData
          }          
        }
        if (a === 'hbInstreamReady') { 
          if (!Spark.bool_hbInstream){
            Spark.func_hbInstream.push(b);
          } else {
            b(Spark.tcData); // aufruf mit tcData
          }          
        }  
        if (a === 'slotRenderEnded') {
            googletag.cmd.push(function(){
                googletag.pubads().addEventListener(a, b);
            })
        }
      };

    Spark.initCmp = function(datalist){
        //config No. 1
      if (typeof datalist["cmp"] !== "undefined") {
         
        if (typeof datalist["cmpParams"] !== "undefined") {
             for (const [keyCmp, valueCmp] of Object.entries(datalist["cmpParams"])){
                if (valueCmp !== "") {
                    window[keyCmp] = valueCmp;
                }
            }   
        }
          
          var existCmp = true;

          if(datalist["cmp"] != 0){
     
          Spark.initService["createLink"]('https://cdn.consentmanager.mgr.consensu.org/delivery/cmp.min.css');
          window.gdprAppliesGlobally=true;
          window.cmp_id=datalist["cmp"];
          window.cmp_params="";
          window.cmp_host="consentmanager.mgr.consensu.org";
          window.cmp_cdn="cdn.consentmanager.mgr.consensu.org";
            function cmp_getlang(j){
              if(typeof(j)!="boolean"){
                      j=true
              }
              if(j&&typeof(cmp_getlang.usedlang)=="string"&&cmp_getlang.usedlang!==""){
                      return cmp_getlang.usedlang
              }
          var g=["DE","EN","FR","IT","NO","DA","FI","ES","PT","RO","BG","ET","EL","GA","HR","LV","LT","MT","NL","PL","SV","SK","SL","CS","HU","RU","SR","ZH","TR","UK"];
          var c=[];
          var f=location.hash;
          var e=location.search;
          var a="languages" in navigator?navigator.languages:[];
          if(f.indexOf("cmplang=")!=-1){
          c.push(f.substr(f.indexOf("cmplang=")+8,2))
          }else{
             if(e.indexOf("cmplang=")!=-1){
                c.push(e.substr(e.indexOf("cmplang=")+8,2))
             }else{
                 if("cmp_setlang" in window&&window.cmp_setlang!=""){
                     c.push(window.cmp_setlang.toUpperCase())
                 }else{
                    if(a.length>0){
                       for(var d=0;d<a.length;d++){
                        c.push(a[d])
                        }
                    }
                  }
                }
             }
           if("language" in navigator){
               c.push(navigator.language)
           } 
           if("userLanguage" in navigator){
               c.push(navigator.userLanguage)
           }
            var h="";
            for(var d=0;d<c.length;d++){
              var b=c[d].toUpperCase();
                if(b.indexOf("-")!=-1){
                   b=b.substr(0,2)
                 }
                if(g.indexOf(b)!=-1){
                      h=b;break
                }
            }
            if(h==""&&typeof(cmp_getlang.defaultlang)=="string"&&cmp_getlang.defaultlang!==""){
              return cmp_getlang.defaultlang
            }else{
              if(h==""){
                h="EN"
              }
            }
            h=h.toUpperCase();
            return h
            }(function(){var a="";var c="_en";if("cmp_getlang" in window){a=window.cmp_getlang().toLowerCase();c="_"+a}var b=document.createElement("script");b.src="https://"+window.cmp_host+"/delivery/cmp.php?id="+window.cmp_id+"&h="+encodeURIComponent(location.href)+"&"+window.cmp_params+(document.cookie.length>0?"&__cmpfcc=1":"")+"&l="+a+"&o="+(new Date()).getTime();b.type="text/javascript";b.setAttribute("data-cmp-ab",1);b.async=true;if(document.body){document.body.appendChild(b)}else{if(document.currentScript){document.currentScript.parentElement.appendChild(b)}else{document.write(b.outerHTML)}}var b=document.createElement("script");b.src="https://"+window.cmp_cdn+"/delivery/cmp"+c+".min.js";b.type="text/javascript";b.setAttribute("data-cmp-ab",1);b.async=true;if(document.body){document.body.appendChild(b)}else{if(document.currentScript){document.currentScript.parentElement.appendChild(b)}else{document.write(b.outerHTML)}}window.cmp_addFrame=function(e){if(!window.frames[e]){if(document.body){var d=document.createElement("iframe");d.style.cssText="display:none";d.name=e;document.body.appendChild(d)}else{window.setTimeout('window.cmp_addFrame("'+e+'")',10)}}};window.cmp_rc=function(k){var d=document.cookie;var h="";var f=0;while(d!=""&&f<100){f++;while(d.substr(0,1)==" "){d=d.substr(1,d.length)}var j=d.substring(0,d.indexOf("="));if(d.indexOf(";")!=-1){var e=d.substring(d.indexOf("=")+1,d.indexOf(";"))}else{var e=d.substr(d.indexOf("=")+1,d.length)}if(k==j){h=e}var g=d.indexOf(";")+1;if(g==0){g=d.length}d=d.substring(g,d.length)}return(h)};window.cmp_stub=function(){var d=arguments;__cmapi.a=__cmapi.a||[];if(!d.length){return __cmapi.a}else{if(d[0]==="ping"){if(d[1]===2){d[2]({gdprApplies:gdprAppliesGlobally,cmpLoaded:false,cmpStatus:"stub",displayStatus:"hidden",apiVersion:"2.0",cmpId:31},true)}else{d[2]({gdprAppliesGlobally:gdprAppliesGlobally,cmpLoaded:false},true)}}else{if(d[0]==="getUSPData"){d[2]({version:1,uspString:window.cmp_rc("")},true)}else{if(d[0]==="getTCData"){__cmapi.a.push([].slice.apply(d))}else{if(d[0]==="addEventListener"){__cmapi.a.push([].slice.apply(d))}else{if(d.length==4&&d[3]===false){d[2]({},false)}else{__cmapi.a.push([].slice.apply(d))}}}}}}};window.cmp_msghandler=function(h){var d=typeof h.data==="string";
            try{var g=d?JSON.parse(h.data):h.data}catch(j){var g=null}if(typeof(g)==="object"&&g!==null&&"__cmpCall" in g){var f=g.__cmpCall;window.__cmp(f.command,f.parameter,function(k,i){var e={__cmpReturn:{returnValue:k,success:i,callId:f.callId}};h.source.postMessage(d?JSON.stringify(e):e,"*")})}if(typeof(g)==="object"&&g!==null&&"__cmapiCall" in g){var f=g.__cmapiCall;window.__cmapi(f.command,f.parameter,function(k,i){var e={__cmapiReturn:{returnValue:k,success:i,callId:f.callId}};h.source.postMessage(d?JSON.stringify(e):e,"*")})}if(typeof(g)==="object"&&g!==null&&"__uspapiCall" in g){var f=g.__uspapiCall;window.__uspapi(f.command,f.version,function(k,i){var e={__uspapiReturn:{returnValue:k,success:i,callId:f.callId}};h.source.postMessage(d?JSON.stringify(e):e,"*")})}if(typeof(g)==="object"&&g!==null&&"__tcfapiCall" in g){var f=g.__tcfapiCall;window.__tcfapi(f.command,f.version,function(k,i){var e={__tcfapiReturn:{returnValue:k,success:i,callId:f.callId}};h.source.postMessage(d?JSON.stringify(e):e,"*")},f.parameter)}};window.cmp_setStub=function(d){if(!(d in window)||(typeof(window[d])!=="function"&&typeof(window[d])!=="object"&&(typeof(window[d])==="undefined"||window[d]!==null))){window[d]=window.cmp_stub;window[d].msgHandler=window.cmp_msghandler;if(window.addEventListener){window.addEventListener("message",window.cmp_msghandler,false)}else{window.attachEvent("onmessage",window.cmp_msghandler)}}};window.cmp_addFrame("__cmapiLocator");window.cmp_addFrame("__cmpLocator");window.cmp_addFrame("__uspapiLocator");window.cmp_addFrame("__tcfapiLocator");window.cmp_setStub("__cmapi");window.cmp_setStub("__cmp");window.cmp_setStub("__tcfapi");window.cmp_setStub("__uspapi")})();
    
          }
          
          
        const callback = (tcData, success) => {
            //console.log('### spark cmp-callback');
            //console.log('### spark cmp-status: ' + tcData.eventStatus);
            if (typeof tcData !== 'undefined' && tcData != null) {
               Spark.debugService.debuggingArray.push('Spark: cmp '+tcData.eventStatus+' '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]); 
            }
            if(success && tcData.eventStatus !== 'loading') {
            
              if(success && (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete' || tcData.gdprApplies === false)) {
                //if (typeof jQuery !== 'undefined') {
                  //   if (typeof tcData.customVendorConsents !== 'undefined' && tcData.customVendorConsents.s1429) {
                            // jQuery(document).trigger('cmpDataReady', {vgwortAccepted: true});
                    // }else{
                             //jQuery(document).trigger('cmpDataReady', {});
                     //}
                //} 
                   Spark.tcData = tcData;
                   Spark.addEventListener('consentReceived', Spark.func);
                  
                    Spark.boolCMP = true;
                __tcfapi('removeEventListener', 2, (success) => {}, tcData.listenerId);
               }  
               else if(!success && tcData === 'NO_CMP_FOUND') {
                        //console.log('### NO_CMP_FOUND');
                }
            }
        }
              if (typeof __tcfapi === 'undefined') {
                     var cmpInti = 0;
                     window.cmpInt = setInterval(function(){
                       cmpInti++;
                 // console.log('### cmpInt' + cmpInti);
               if (typeof __tcfapi !== 'undefined') {
                 window.clearInterval(window.cmpInt);
                 __tcfapi('addEventListener', 2, callback);
               }
                 if (cmpInti > 10) {
                  window.clearInterval(window.cmpInt);
                 }
              }, 200);
              } else {
                 __tcfapi('addEventListener', 2, callback);
              
             }   
        }
    }
    Spark.init = function(datalist){
      //console.log('### spark init');
      var   debugArray = [];
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

        if (/CleverPushApp/.test(window.navigator.userAgent)) { 
          const siteNameMapping = { 
             'www.4p.de': 'app_4players',
             'www.berlin-live.de': 'app_berlinlive' 
          }; 
          const host = window.location.host; 
          if (siteNameMapping.hasOwnProperty(host)) { 
              datalist.siteName = siteNameMapping[host];
              datalist.targetings.environment = 'app'; 
          } 
        };

        Spark.adslot['siteName'] = datalist['siteName'];
        Spark.adslot['zoneName'] = datalist['zoneName'];

        if (datalist.siteName == 'app_4players' || datalist.siteName == 'app_berlinlive') {
            Spark.device = 'mob';
        }else{
            Spark.device = datalist["siteName"].substring(0, 3);
        }
            
        Spark.selectedAdrefresh();

        if (/kronendach\.de/.test(window.location.href)){
           Spark.deactivateAmazon = true;        
        }
        if (/selfies\.com/.test(window.location.href)){
           Spark.analogExclusiveParameter= true;        
        }
        if (/scheidenpilz|hormontherapie-wechseljahre|haemorriden/.test(window.location.href)) {
            Spark.deactivateAmazon = true;  
            Spark.deactivateRubicon = true;
            datalist["adrefresh"] = false;
            Spark.analogExclusiveParameter = true;
        }
        if (typeof datalist["exclusive"] !== "undefined" && datalist["exclusive"]) {
            Spark.exclusive = true;  
            Spark.deactivateAmazon = true;  
            Spark.deactivateRubicon = true;
            Spark.deactivateIntoWow = true;
            Spark.deactivatePermutive = true;
            datalist["adrefresh"] = false;
        }
       if (/gofeminin\.de/.test(window.location.href) && /liebe\.gofeminin\.de|beziehung\.gofeminin\.de\/forum\/all|100-sexstellungen|abspritzen|abspritzt|adult|anal|anpinkeln|anpissen|aphrodisiaka|aphrodisiakum|arsch|aufreizend|av|bbc|bdsm|betaubung|bh-frei|bitch|blasen|blowjob|blow-job|bondage|bordell|bruste|bruste-melken|busen|buttplug|cbt|cfnm|cockring|coitus|com-sub|cowgirl|crotch|cuckold|cum|cunnilingus|cunt|damenwaschetrager|deepthroat|deep-throat|defloration|dick|dildo|dirty|doggy|domina|doppelpenetration|doublepenetration|dreier|durchvogeln|eichel|ejakulation|ejakulieren|entjungfern|entjungfert|erektion|erotisch|facesitting|fd1003795|fd1006763|fd100880|fd1009317|fd1019678|fd1019976|fd1022344|fd1023123|fd1023419|fd1023421|fd102461|fd1030564|fd1033593|fd1034010|fd1035223|fd1036179|fd1036682|fd103716|fd1038863|fd1039606|fd1041049|fd1041798|fd1043213|fd1043679|fd1043734|fd1043871|fd1043945|fd1044529|fd1044816|fd1045193|fd1045315|fd1045696|fd1046729|fd1047504|fd1047924|fd1047951|fd1047978|fd1048457|fd1048676|fd1048684|fd1048746|fd1048994|fd1049055|fd1049178|fd1049533|fd1049674|fd1049753|fd1049952|fd1049992|fd1050027|fd1050287|fd1050295|fd1050361|fd1050422|fd1050551|fd1050874|fd1050881|fd1050994|fd1051026|fd1051029|fd1051050|fd1051163|fd1051198|fd1051226|fd1051286|fd1051318|fd1051333|fd1051345|fd1051376|fd1051403|fd1051419|fd1051444|fd1051569|fd1051641|fd1051716|fd1051717|fd1051722|fd1051772|fd1051819|fd1051820|fd1051857|fd1051878|fd1051882|fd1051892|fd1051893|fd1051919|fd1051932|fd1051935|fd1051970|fd1051988|fd1051995|fd1051996|fd1051997|fd1052002|fd1052014|fd1052017|fd1052021|fd1052027|fd1052040|fd1052051|fd1052081|fd1052083|fd1052088|fd108490|fd110704|fd16446|fd20288|fd269094|fd274329|fd274498|fd29029|fd320965|fd321710|fd331528|fd364840|fd382860|fd395102|fd455168|fd458606|fd581411|fd589894|fd643676|fd651424|fd673762|fd679696|fd682839|fd687763|fd687818|fd892618|fd89527|fd909694|fd965521|fd967527|fd982352|fd985778|fd994758|fd995804|fd996641|fellatio|fesseln|fesselspiele|fetisch|ficken|fingern|fisten|fisting|fkk|flirten|flittchen|flutschen|force|fotze|frigide|fuck|gang bang|gangbang|gefugig|geleckt|geschlechtsakt|geschlechtsverkehr|gesichtsbesamung|gleitgel|gummipuppe|hardcore|hengst|hinterturchen|hoden|hure|intim|inzest|juckreiz|jungfernhautchen|jungfrau|kamasutra|keuschheitschelle|keuschheitsgurtel|keuschheitskafig|kiffen|kitzler|klitoris|kondom|kopffick|korperbesamung|ladyboy|latexhosen|lederfetisch|lesbe|lesbisch|libidoverlust|liebeskugeln|liebessklave|liebesspiele|liebesszenen|luststeigerung|lusttropfen|luxusprostituierte|mannerstrings|masochismus|mastubieren|mastubiert|masturbation|masturbator|masturbieren|masturbiert|matrubieren|mikropenis|milf|missbrauch|missbraucht|missionar|monsterschwanzen|morgenlatte|muschi|nacktbild|nackte|nacktfotos|nacktheit|naturgeil|naturkaviar|natursekt|nippel|notgeil|nutte|nymphomanie|onanieren|onaniert|oral(?!-b-io).*|overkneestiefel|Partnertausch|passive-frauen-diese-stellungen-sind-fuer-euch|Pegging|Penetration|Peniskafig|Penisring|Penisumfang|Periode|Pervers|Petting|Pinkelspiele|Playboy|poloch|Porno|prostata-massage|Prostituierte|Prostitution|Puff|Quickie|Rammeln|Rasieren|rasiert|Reinspritzen|Reizwasche|Rimjob|Rosette|s2131595|s5253969|s5377369|Sadomaso|samenerguss|Samenspende|Sandwich|Satisfyer|Schamlippen|Scharf|Schlampe|Schlucke|schwanzgeil|Sex(?!.*s1757564\.html\/?$).*|sexstellungen-fuer-einen-kleinen-penis|slip-ouvert|Sperma|Strapon|strap-on|string|sugardaddy|Swinger|Tampon|Tanga|Tangas|Tittenfick|Toilette|ubernachtung|umkleide|umschnalldildo|unanstandiges|unbefriedigt|unbeschnitten|unerfillte|unterhoschen|unterhosen|unterleib|unterordnung|untervogelt|unterwasche|untreu|unwohl|unzensiert|urin|urinieren|vagina|vagisan|vakuumpumpe|venushugel|verfuhren|verfuhrt|vergewaltigt|vergewaltigung|vorgefuhrt|vorhaut|vorspiel|voyeur|wichsen|wixnummer|xxl|zungenanal|zungenkusse|zungenpiercing|zuspritzen|penis|viagra|selbstbefriedigung|total-power-exchange|fd175901|fd175901|fd1050943|fd1052126|fd1049514|fd1052381|fd1049000|fd929809|fd1031737|fd1050224|fd688418|fd1027222|fd1051457|fd390576|fd960386|dom-sub|fd97794|fd855306|fd940360|fd102008|fd391431|fd964383|fd981458|fd695397|fd599125|fd1052246|fd1028941|fd1031229|fd1035084|fd458701|fd1047509|fd895902|fd1022878|fd695844|fd973977|fd181251|fd993777|fd991018|fd947593|fd103741|fd380112|fd888663|fd97554|fd837102/i.test(window.location.href)) {
           Spark.deactivateAdRequest = true;
           Spark.deactivateAmazon = true;  
           Spark.deactivateRubicon = true;
           Spark.deactivateHbInstream = true;
           Spark.deactivateIntoWow = true;
           Spark.deactivatePermutive = true;
        }
        if (/derwesten\.de/.test(window.location.href) && Spark.device == "sta"){
            Spark.deactivateIntoWow = true;      
        }

        if (/imtest\.de/.test(window.location.href)){
             Spark.deactivateIntoWow = true;
             datalist["adrefresh"] = false;
        }
        if (typeof datalist.targetings !== "undefined" ) {
            if (datalist.targetings.artikeltyp != "index" && datalist.targetings.artikeltyp != "gallery" && datalist.targetings.artikeltyp != "epg" && window.location.pathname != "/suche/" && window.location.href.indexOf("?") == -1 && window.location.href.indexOf("#") == -1) {
                Spark.getFirestoreData();
                Spark.artixCallActive = true;
                Spark.getFirstPartyID();
                Spark.audixCallActive = true;
            }
        }
        if (/hoerzu/.test(window.location.href) && /tv-programm/.test(window.location.href) && /bid_/.test(window.location.href)) {
            Spark.getFirestoreData();
            Spark.artixCallActive = true;
        }
        // intowow 
        if (!Spark.deactivateIntoWow) {
            function ybGPTHook(d,l,_,f,w,e,t){
                try{
                    if(window.__iwcshook__&&window.__iwcshook__(),l&&0!==l.length&&(_&&f&&w&&e&&t)){if(d.googletag){
                        if(!d.googletag.cmd||!d.googletag.cmd.push)return
                    }else d.googletag={cmd:[]};

                var h=function(e){
                    return parseInt(100*e+1e-4)},k=function(){
                        var e,t=["0.01~0.0~115n1fk#jed0xs#1iwx1xc#aiq0ow#1a1a1og#sa016o#1rsk268#62wikg#15lgjk0#nu6j28#1ncqk1s#eyjitc#1eh3jsw#wptjb4#1w8dkao#3uzri8#13djshs#1l4tszk,lm9s00#cqmrr4#1c96sqo#uhws8w#1u0gt8g#8at9mo#17tdam8#q23a4g#1pknb40#h6g9vk#1gp0av4#yxqadc#1ygabcw#j4mww#101onwg#iaeneo#1hsyoe8#9ern5s,18xbo5c#r61nnk#1qolon4#4yy51c#14hi60w#mq85j4#1m8s6io#dul5a8#1dd569s#vlv5s0#1v4f6rk#2r1dz4#129leyo#kibegw#1k0vfgg#bmoe80#tdyeps,1b58f7k#1swifpc#76uw3k#16pex34#oy4wlc#1ogoxkw#g2hwcg#1fl1xc0#xtrwu8#1xcbxts#27277k#11pm874#jyc7pc#1jgw8ow#b2p7gg#1al98g0#stz7y8#1scj8xs,6mvpc0#165fqbk#oe5pts#1nwpqtc#fiipkw#1f12qkg#x9sq2o#1wscr28#4eyy9s#13xiz9c#m68yrk#1loszr4#dalyio#1ct5zi8#v1vz0g#1ukg000#8usge8#18dchds,qm2gw0#1q4mhvk#hqfgn4#1h8zhmo#zhph4w#1z09i4g#133tog#10lnuo0#iudu68#1icxv5s#9yqtxc#19hauww#rq0uf4#1r8kveo#5ixbsw#151hcsg#na7cao,1msrda8#eekc1s#1dx4d1c#w5ucjk#1voedj4#3b0kqo#12tklq8#l2al8g#1kkum80#c6nkzk#1bp7lz4#txxlhc#1tghmgw#7qu2v4#179e3uo#1p0o4cg,pi43cw","0.01~1.17~1g5143k,gmh340#ydr3ls#1xwb4lc#1d3f28#10vng1s#j4dfk0#1imxgjk#a8qfb4#19ragao#s00fsw#1rikgsg#5swx6o#15bgy68#nk6xog#1n2qyo0#eojxfk#wftxxc,1e73yf4#1vydyww#3l064g#133k740#lca6m8#1kuu7ls#cgn6dc#1bz77cw#u7x6v4#1tqh7uo#80to8w#17jdp8g#ps3oqo#1panpq8#gwgohs#1gf0phc#ynqozk#951j4,1y6apz4#zrp2io#i0f20w#1hiz30g#94s1s0#18nc2rk#qw229s#1qem39c#4oyjnk#147ikn4#mg8k5c#1lysl4w#dkljwg#1d35kw0#vbvke8#1uuflds#2h1slc#k8bt34,11zltkw#1jqvu2o#bcosu8#1av8tts#t3ytc0#1smiubk#6wvaps#16ffbpc#oo5b7k#1o6pc74#fsiayo#1fb2by8#xjsbgg#1x2ccg0#1x2lts#11fmmtc#1j6wnb4,jocmbk#aspm2o#1ab9n28#sjzmkg#1s2jnk0#6cw3y8#15vg4xs#o464g0#1nmq5fk#f8j474#1er356o#wzt4ow#1wid5og#44zcw0#13njdvk#lw9dds#1letedc#d0md4w,1cj6e4g#urwdmo#1uagem8#8ksv0g#183cw00#qc2vi8#1pumwhs#hgfv9c#1gyzw8w#z7pvr4#1yq9wqo#t48ao#10bo9a8#ike8sg#1i2y9s0#9or8jk#197b9j4#rg191c,1qyla0w#58xqf4#14rhreo#n07qww#1mirrwg#e4kqo0#1dn4rnk#vvur5s#1vees5c#310zcw#12jl0cg#ksazuo#1kav0u8#bwnzls#1bf80lc#tny03k#1t6i134,7guhhc#16zeigw#p84hz4","0.02~2.37~gchhq8#y3ri80#1i37r4#j9d88w#adq800#s508hs#5xwpvk","0.02~2.5~np6qdc#etjq4g#wktqm8#3pzytc#lh9zb4#clmz28#ucwzk0#85tgxs#px3hfk","0.02~2.67~h1gh6o#ysqhog#e4u80#i5eups#99rugw#r11uyo#4tyccg#ml8cu8#dplclc","0.02~2.84~vgvd34#2m1la8#kdbls0#bholj4#t8ym0w#71v3eo#ot53wg#fxi3nk#xos45c","0.02~3.01~222eio#jtcf0g#axperk#sozf9c#6hvwn4#o95x4w#fdiww0#x4sxds","0.02~3.16~49z5kw#m1962o#d5m5ts#uww6bk#8psnpc#qh2o74#hlfny8#zcpog0#y40zk","0.02~3.33~ipe1hc#9tr18g#rl11q8#5dxj40#n57jls#e9kjcw#w0ujuo#360s1s#kxasjk","0.02~3.5~c1nsao#tsxssg#7lua68#pd4ao0#ghhaf4#y8raww#183mdc#izdmv4#a3qmm8","0.02~3.67~rv0n40#5nx4hs#nf74zk#ejk4qo#wau58g#3g0dfk#l7adxc#cbndog#u2xe68","0.02~3.84~7vtvk0#pn3w1s#grgvsw#yiqwao#458u8#hvf9c0#8zs934#qr29kw#4jyqyo","0.02~4.01~mb8rgg#dflr7k#v6vrpc#2c1zwg#k3c0e8#b7p05c#syz0n4#6rvi0w","0.02~4.16~oj5iio#fnii9s#xesirk#1s2t4w#jjctmo#anptds#seztvk#67wb9c#nz6br4","0.02~4.33~f3jbi8#wutc00#3zzk74#lr9kow#cvmkg0#umwkxs#8ft2bk#q732tc#hbg2kg","0.02~4.5~z2q328#o4fls#ifeg3k#9jrfuo#rb1gcg#53xxq8#mv7y80#dzkxz4#vquygw","0.02~4.67~2w16o0#knb75s#bro6ww#tiy7eo#7buosg#p34pa8#g7hp1c#xyrpj4#1kl43k","0.02~4.84~jbv4lc#ag84cg#s7i4u8#60em80#nromps#ew1mgw#wnbmyo#3shv5s","0.02~4.99~ljrvnk#co4veo#ufevwg#88bda8#pzlds0#h3ydj4#yv8e0w#gmqkg#i7wr28","0.02~5.16~9c9qtc#r3jrb4#4wg8ow#mnq96o#ds38xs#vjd9fk#2ojhmo#kfti4g#bk6hvk","0.02~5.33~tbgidc#74czr4#ovn08w#g00000#xra0hs#24kav4#jvubcw#b07b40#srhbls","0.02~5.5~6kdszk#obnthc#fg0t8g#x7atq8#4ch1xc#m3r2f4#d84268#uze2o0#8sak1s","0.02~5.67~qjkkjk#hnxkao#zf7ksg#10lxc0#irvxts#9w8xkw#rniy2o#5gffgg#n7pfy8","0.02~5.84~ec2fpc#w3cg74#38ioe8#kzsow0#c45on4#tvfp4w#7oc6io#pfm70g","0.02~5.99~gjz6rk#yb979c#1alips#j1vj7k#a68iyo#rxijgg#5qf0u8#nhp1c0#em2134","0.02~6.16~wdc1kw#3ii9s0#l9sa9s#ce5a0w#u5faio#7ybrwg#pplse8#gtys5c#yl8sn4","0.02~6.33~6n56o#hxx5og#92a5fk#qtk5xc#4mgnb4#mdqnsw#di3nk0#v9do1s#2ejw8w","0.02~6.5~k5twqo#ba6whs#t1gwzk#6udedc#olnev4#fq0em8","0.1~6.69~shhq80#42hgjk","0.1~6.88~q9kz5s#9m9c74","0.09~7.07~vtcutc#7ecl4w","0.09~7.26~j6vbwg#er1ts0","0.09~7.45~uaf37k#bmxvk","0.09~7.64~miqghs#bf6p6o#xma7sw","0.09~7.92~6fe0ao#lyr9q8","0.09~8.11~hixrls#rij5ds","0.09~8.3~33ivpc#pamebk","0.09~8.49~a18q9s#w8c8w0#7tbz7k","0.09~8.77~hsxczk#dd3uv4","0.09~8.96~swh4ao#1pkwsg","0.09~9.15~nwofeo#ct4o3k#z086ps","0.09~9.43~51g1ds#kktatc","0.09~9.62~g4zsow#s8r30g","0.09~9.81~3tqtc0#q0uby8#9diozk","0.09~10.09~vkm7ls#75lxxc","0.09~10.28~jx39j4#fh9reo","0.09~10.47~v0n0u8#11uvi8#n8ye4g","0.09~10.75~c5emtc#yci5fk","0.09~10.94~5rnz0g#lb18g0","0.09~11.13~gv7qbk#qut43k","0.09~11.32~2fsuf4#omwd1c#argnwg","0.09~11.6~wyk6io#8jjwu8","0.09~11.79~ij5am8#e3bshs","0.09~11.98~tmp1xc#1gu9kw#nnxs74","0.09~12.26~cke0w0#yrhji8","0.09~12.45~4spe68#kc2nls","0.09~12.64~fw95hc#snqh34#48q7eo","0.09~12.92~qftq0w#9si328","0.09~13.11~vzllog#7klc00","0.09~13.3~iy4oow#eib6kg#u1og00","0.09~13.58~2wao0#m9zta8","0.09~13.77~b6g1z4#xdjklc","0.09~13.96~66nd34#lq0mio","0.09~14.15~ha74e8#r9si68#2us8hs","0.09~14.43~p1vr40#aez668","0.09~14.62~wm2osg#872f40","0.09~14.81~i6nsw0#dquark#ta7k74","0.09~15.09~23bcow#oaevb4","0.09~15.28~d6v400#zdymm8","0.09~15.47~5f6ha8#kyjqps#giq8lc","0.09~15.75~rw9la8#3h9bls","0.09~15.94~pocu80#91179c","0.09~16.13~v84pvk#6t4g74#jklrsw","0.09~16.41~f4s9og#uo5j40","0.09~16.6~pdds0#mwgwe8","0.09~16.79~bsx534#y00npc#5u5vcw","0.09~17.07~ldj4sg#gxpmo0","0.09~17.26~qxb0g0#2iaqrk","0.09~17.45~ope9ds#atyk8w","0.09~17.64~x122v4#8m1t6o#iln6yo","0.09~17.92~e5tou8#tp6y9s","0.09~18.11~14cruo#nbgagw","0.09~18.3~c7wj5s#yf01s0#4g7wg0","0.09~18.58~jzl5vk#fjrnr4","0.09~18.77~sb8zcw#3w8pog","0.09~18.96~q3c8ao#9g0lc0#vn43y8","0.09~19.24~783u9s#jezi0w","0.09~19.43~ez5zwg#uij9c0","0.09~19.62~jr400#mqumm8#bnavb4","0.09~19.9~xuedxc#6ni6f4","0.09~20.09~m6vfuo#hr1xq8","0.09~20.28~rqnbi8#3bn1ts","0.09~20.47~piqkg0#a9cwe8#wggf0g","0.09~20.75~81g5c0#i11j40","0.09~20.94~dl80zk#t4laf4","0.09~21.13~1xp2ww#o4slj4#d18u80","0.09~21.41~z8ccu8#59k7i8","0.09~21.6~ksxgxs#gd3ytc","0.09~21.79~s5mpkw#3qmfwg#pxpyio","0.09~22.07~9aebk0#vhhu68","0.09~22.26~72hkhs#jtyw3k","0.09~22.45~fe5dz4#uxineo#yqi2o","0.09~22.73~n5u0ow#c2a9ds","0.09~22.92~y9ds00#5ojlkw","0.09~23.11~l7wv0g#gs3cw0","0.09~23.3~qroqo0#2cogzk#ojrzls","0.09~23.58~aocagw#wvft34","0.09~23.77~8gfjeo#ig0x6o","0.09~23.96~e07f28#tjkohs#1l7l6o","0.09~24.24~nsb3sw#corchs","0.09~24.43~yvuv40#4x2ps0","0.09~24.62~kgfz7k#g0mh34#ss3sow","0.09~24.9~4d3j0g#qk71mo","0.09~25.09~9wveo0#w3yxa8","0.09~25.28~7oynls#j2i0ao#emoi68","0.09~25.56~u61rls#79m9s","0.09~25.75~med4w0#batdkw","0.09~25.94~xhww74#6b0oow#ludy4g","0.09~26.22~hekg00#re5ts0","0.09~26.41~2z5k3k#p692ps","0.09~26.6~abusqo#wiybcw","0.09~26.79~83y1og#i3jfgg#dnpxc0","0.09~27.07~t736rk#206z9c","0.09~27.26~o7ahvk#d3qqkg","0.09~27.45~zau96o#5c23uo#kvfda8","0.09~27.73~gflv5s#rt57uo","0.09~27.92~3e4y68#pl8gsg","0.09~28.11~8xwtts#v50cg0#6q02rk","0.19~28.48~f1nw8w#m90cg#bpsrnk#62a1hc#h5tssg#2qeww0#b22qdc","0.19~29.8~8u5zb4#edxuyo#1cgxz4#cg0pa8#4oc2kg#frvtvk#44cvsw","0.19~31.12~9o4rgg#7g80e8#esx91c#did4w#bh24g0#6h9fk0#hkt6v4#35eayo","0.19~32.63~a345j4#7v7egw#deza4g#1rgc1s#cv03cw#53bgn4#g6v7y8","0.19~33.95~3rve2o#9bn9q8#73qio0#ffec5c#zzg8w#c3j7k0#5psjr4","0.19~35.27~gtcb28#2dxf5s#apl8n4#8hohkw#e1gd8g#1eyubk#ciilmo#4qtyww","0.19~36.78~fudq80#46us5c#9qmnsw#7ipwqo#egfrb4#10veo#b4kmps","0.19~38.1~64rxts#h8bp4w#2swt8g#aies5c#8ai134#du9wqo#26qyo0#daapz4","0.19~39.61~5im39c#gm5ukg#3koxkw#94gt8g#6wk268#f87vnk#sszr4","0.19~40.93~bwcr28#5xlhc0#h158n4#2lqcqo#axe680#8phf5s#e99atc#17sdts","0.48~42.44~cbc54w#seolc0","0.47~43.39~7bjg8w#mnf0n4#hnmbr4#wd0t1c#1u9gxs","0.47~45.75~kphuyo#96ypkw#uu31fk#5l3zls#ogcdmo#dwrt34","0.47~48.58~yw63nk#4derk0#j2t8u8#bb4m4g#reh2bk#849a80","0.47~51.41~o7lqf4#gfx3pc#v5bkzk#mk8w0#li7oxs#ayn4e8","0.47~54.24~ttvif4#4kwglc#q80sg0#ephn28#xkq134#31yozk","0.47~57.07~hrd69s#crkhds#sab9q8#7764n4#naiku8#gwrx1c","0.47~59.9~x04d8g#1iegao#kdmubk#9u29s0#u38mps#687jsw#p3fxts","0.47~63.2~dsehhc#zfitc0#3itibk#jm5yio#buhbsw#qyv75s","0.47~66.03~8nlzwg#nd0h6o#flbugw#vooao0#i6xa8#m5b94w","0.47~68.86~a7spog#t313pc#5800sg#pw5rsw#fcl79c#y7tla8","0.47~71.69~2b4a9s#iegqgw#cn75s0#sqjlz4#7negw0#mcsy68","0.47~74.52~hd09a8#whe4n4#1ymsjk#ktv6kg#8wcn40#ujgyyo","0.47~77.35~6324u8#oyaiv4#eepybk#ynwb9c#454z5s#j9iuio","0.47~80.18~bhu7sw#rl6o00#7vzhts#nzby0w#g7nbb4#vjivpc","0.47~83.01~10rjls#l9xwjk#aqdc00#tllq0w#4rm29s#qeqe4g","0.47~85.84~eh7uo0#xcg8ow#2towlc#i9bbi8#d9imm8#ryx3wg","0.47~88.67~6vrytc#mz4f0g#h0d5a8#x3plhc#170agw#k28ohs","0.47~91.5~9io3y8#uebk00#6jah34#peiv40#dh0bnk#z44ni8","0.47~94.33~3meqkg#jpr6rk#by2k1s#qnh1c0#8c7u2o#nuymf4","0.47~97.16~g39zpc#w6mfwg#9x4w0"],
                        n={};
                        for(e in t)try{var o,r=t[e].split("~"),i=h(parseFloat(r[0])),s=h(parseFloat(r[1])),g=r[2].split("#"),a=0;for(o in g)try{var c,u=parseInt(a*i+s),d=[],l=g[o],_=(-1!==l.indexOf(",")?d=l.split(","):d.push(l),u/100);for(c in d)n[d[c]]=_;a++}catch(e){}}catch(e){}return n}(),v=function(e){try{var t,n,o,r,i,s,g,a,c,u;e.getTargeting&&e.setTargeting&&(t=e.getTargeting("amznbid")[0],n=k[t]||-1,o=parseFloat(e.getTargeting("hb_pb")[0]||-1),r=e.getTargeting("hb_bidder")[0]||"hb_pb_unknown",g="nobidder",(i=s=-1)===n&&-1===o||(o<=n?(s=n,g="amznbid",void 0!==(a=e.getTargeting("amznsz")[0])&&(i="a"+a)):(s=o,g=r,void 0!==(c=e.getTargeting("hb_size")[0])&&(i="p"+c))),u=[s=function(e){var t=[{inclusive_min:0,exclusive_max:10,delta:.01},{inclusive_min:10,exclusive_max:20,delta:.05},{inclusive_min:20,exclusive_max:100,delta:.5},{inclusive_min:100,exclusive_max:101,delta:1}];if(e<0)return e;var n,o=h(e);for(n in t){var r=t[n],i=h(r.inclusive_min),s=h(r.exclusive_max),r=h(r.delta);if(i<=o&&o<s)return parseInt(o/r)*r}return h(t[t.length-1].inclusive_min)}(s).toString()],0<e.getTargeting("in2w_key16").length&&u.push("o_"+s),e.setTargeting("in2w_upa_price",u),e.setTargeting("in2w_upa_bidder",g),e.setTargeting("in2w_upa_size",i))}catch(e){}};try{var n=new Date,o=new Date(n.toLocaleString("en-US",{timeZone:"UTC"})),p=(new Date(n.toLocaleString("en-US",{timeZone:t})).getTime()-o.getTime())/36e5}catch(e){p=1}var r,y=e,b=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],m={"1_0010":"01","1_0011":"02","1_0020":"03","1_0021":"04","1_0110":"05","1_0111":"06","1_0120":"07","1_0121":"08","1_0310":"09","1_0311":"0a","1_0320":"0b","1_0321":"0c","1_0610":"0d","1_0611":"0e","1_0620":"0f","1_0621":"0g","1_0810":"0h","1_0811":"0i","1_0820":"0j","1_0821":"0k","2_0000":"19","2_0001":"1a","2_0002":"1b","2_000z":"1c","2_0030":"1d","2_0031":"1e","2_0032":"1f","2_003z":"1g","2_0100":"1h","2_0101":"1i","2_0102":"1j","2_010z":"1k","2_0130":"1l","2_0131":"1m","2_0132":"1n","2_013z":"1o","2_0300":"1p","2_0301":"1q","2_0302":"1r","2_030z":"1s","2_0330":"1t","2_0331":"1u","2_0332":"1v","2_033z":"1w","2_0600":"1x","2_0601":"1y","2_0602":"1z","2_060z":"20","2_0630":"21","2_0631":"22","2_0632":"23","2_063z":"24","2_0800":"25","2_0801":"26","2_0802":"27","2_080z":"28","2_0830":"29","2_0831":"2a","2_0832":"2b","2_083z":"2c","1_0z10":"3l","1_0z11":"3m","1_0z20":"3n","1_0z21":"3o","2_0z00":"3x","2_0z01":"3y","2_0z02":"3z","2_0z0z":"40","2_0z30":"41","2_0z31":"42","2_0z32":"43","2_0z3z":"44"},i={gpt:0,amp:1,video:2,mobile:3,gpt_lite:4,adx_tag:5},s={out_of_page:0,anchor:1,app_open:2,banner:3,instream_audio:4,instream_video:5,interstitial:6,native_advance:7,rewarded:8,others:35},g={desktop:0,smartphone:1,tablet:2,connecttv:3,others:35},a={ios:0,android:1,macos:2,windows:3,others:35},c={chrome:0,safari:1,edge:2,others:35},u=function(){var e=x(),t=z();return{os:q(e),dc:j(e),browser:P(e,t)}},x=function(){var e=window.navigator;return(e=e&&e.userAgent)||""},z=function(){var e=window.navigator;return(e=e&&e.userAgentData)||null},q=function(e){return L(e,"Win")?"windows":L(e,"like Mac")?"ios":L(e,"Mac")?"macos":L(e,"Android")?"android":"others"},j=function(e){return S(e)?"tablet":T(e)?"smartphone":E(e)?"connecttv":"desktop"},T=function(e){return L(e,"iPod")||L(e,"iPhone")||L(e,"Android")||L(e,"IEMobile")},S=function(e){return L(e,"iPad")||L(e,"Tablet")||L(e,"Android")&&!L(e,"Mobile")||L(e,"Silk")},E=function(e){return L(e,"Roku")||L(e,"SMART-TV")||L(e,"SmartTV")||L(e,"NetCast")||L(e,"crkey")},P=function(e,t){t=O(t);return t||(L(e,"OPR/")||L(e,"Opera")?"others":L(e,"Edg")?"edge":L(e,"Firefox")?"others":L(e,"Chrome")?"chrome":L(e,"Safari")||L(e,"iPad")||L(e,"iPhone")||L(e,"iphone")?"safari":"others")},O=function(e){if(e&&e.brands){if(M(e.brands,"Opera"))return"opera";if(M(e.brands,"Microsoft Edge"))return"edge";if(M(e.brands,"Chrome"))return"chrome"}return null},L=function(e,t){return-1!==e.indexOf(t)},M=function(e,t){return e.some(function(e){return e.brand===t})},C=function(e,t){if(e)return["0"];for(var n=Math.floor(1e3*Math.random()+1),o=[],r=0,i=0;i<t.length;++i){for(var s=1,g=t[i],a=0,c=0;c<g.length;c++)if(n<=(a+=g[c])){s=c+1;break}1<s&&0<r&&(s=s+r-1),r+=t[i].length;var u=b[s];for(c=0;c<o.length;++c)if(o[c]===u){c=-1;break}-1!==c&&o.push(u)}return o},A=function(e){var e=(new Date).getTime()+36e5*e,t=parseInt(e/36e5,10)%24;return[[1,0],[3,24],[6,32]].map(function(e){return b[Math.floor(t/e[0])+e[1]]})},D=function(){var e,t,n;return r||(n=u(),e=void 0!==c[n.browser]?c[n.browser]:c.others,t=void 0!==a[n.os]?a[n.os]:a.others,n=void 0!==g[n.dc]?g[n.dc]:g.others,r={dc:b[n],os:b[t],browser:b[e]}),r},F=function(e,t){if(void 0===(e=i[e]))throw new Error;t=void 0!==s[t="top_anchor"!==t&&"bottom_anchor"!==t?t:"anchor"]?s[t]:s.others;return{rt:b[e],ivf:b[t]}},H=function(e,t,n,o,r,i,s){var g=[],a=("0"===n||"3"===n?(r=m["2_"+e+t+n+r])&&g.push(r):(r=m["1_"+e+t+n+o])&&g.push(r),[]),c=[];for(d in g){var u=g[d];a.push("-"+u);for(var d=0;d<i.length;++d){var l,_=u+i[d];for(l in a.push(_),s){var f=s[l];c.push(_+f)}}}return{short:a,full:c}},V=function(e){try{if(!e.length)return"0";for(var t=305419896,n=0;n<e.length;++n)t^=(t<<5)+(t>>2)+e.charCodeAt(n)&4294967295;return(t<0?4294967296+t:t)+""}catch(e){return"-1"}},U=function(e){var t,n,o,r=e,i=[],s=1e5,g=1,a=1e5,c=1;for(t in r="fluid"===e||"number"==typeof r[0]&&"number"==typeof r[1]?[e]:r)"fluid"===r[t]?i.push(r[t]):((n=r[t][0])<s&&(s=n),g<n&&(g=n),(o=r[t][1])<a&&(a=o),c<o&&(c=o),i.push(n+"x"+o));i.sort(function(e,t){return e<t?-1:1});e=i.length;return i.push(s),i.push(g),i.push(a),i.push(c),i.push(e),V(i.join(","))},R=function(e,t){try{for(var n in e)if("string"==typeof e[n]){var o,r=e[n].split(",");for(o in t)for(var i in r)if(r[i]===t[o])return!0}}catch(e){}return!1},I=function(e){try{if(e.__should_skip_labeling)e.__should_skip_labeling=!1;else{var t,n,o=e.getTargeting(_),r="u",i=(R(o,f)?r="b":R(o,w)?r="o":(t=googletag.pubads().getTargeting(_),R(t,f)?r="b":R(t,w)&&(r="o")),"banner");if(e.__is_oop)i=googletag.enums.OutOfPageFormat[e.__oop_format]?googletag.enums.OutOfPageFormat[e.__oop_format].toLowerCase():"out_of_page";else try{if(e.__sz_mapping){var s=Math.round(window.innerWidth),g=Math.round(window.innerHeight);for(c in e.__sz_mapping){var a=e.__sz_mapping[c][0];if(a[0]<=s&&a[1]<=g){n=e.__sz_mapping[c][1];break}}}else e.__def_sizes&&(n=e.__def_sizes)}catch(e){}var c,u=function(e,t,n,o,r,i){try{var s,g,a,c,u,d,l,_,f,w,h,k;return"u"===n?[{key:"in2w_key16",values:[]},{key:"in2w_key20",values:[]},{key:"in2w_key21",values:[]}]:(s=F(o,r),g=D(),a=s.rt,c=s.ivf,u=g.dc,d=g.os,l=g.browser,f=C(_="b"===n,t),w=A(e),h=H(a,c,u,d,l,f,w),_&&(h.short=[]),k=[],i&&i.length&&k.push(U(i)),[{key:"in2w_key16",values:h.short},{key:"in2w_key20",values:h.full},{key:"in2w_key21",values:k}])}catch(e){return[{key:"in2w_key20",values:["4p10","4p1o","4p1w"]}]}}(p,y,r,"gpt",i,n);for(c in u)e.__setTargeting(u[c].key,u[c].values)}}catch(e){}};d.googletag.cmd.unshift=function(e){d.googletag.cmd.splice(1,0,e)},d.googletag.cmd.push(function(){var t=["slotRequested","slotResponseReceived","slotRenderEnded","slotOnload","impressionViewable","slotVisibilityChanged"],r=t.slice(1),i=function(e){e=e.__getResponseInformation?e.__getResponseInformation():e.getResponseInformation();return e&&e.advertiserId&&-1!==l.indexOf(e.advertiserId)},s=d.googletag.pubads(),o=(s.__product_version=3,s.__build_id="4f005916-872e-414e-8fb2-971d0e44467e",s.__hook_version=8,s.setTargeting("in2w_key15","u0"),function(e){return d.document.getElementById(e.getSlotElementId())}),n=function(e,t){try{var n=o(e);t?n.style["min-width"]||n.style["min-height"]||(n.style["min-width"]=n.offsetWidth+"px",n.style["min-height"]=n.offsetHeight+"px",e.__keepSize=1):e.__keepSize&&(n.style["min-width"]="",n.style["min-height"]="",delete e.__keepSize)}catch(e){}},g=(d.googletag.__display=d.googletag.display,d.googletag.display=function(e){var t=[];for(n in arguments)t.push(arguments[n]);try{var n,o=this.pubads().getSlots();for(n in o){var r=o[n];v(r)}}catch(e){}return d.googletag.__display.apply(s,t)}.bind(d.googletag),s.__refresh=s.refresh,s.refresh=function(e){var t,n=[];for(o in arguments)n.push(arguments[o]);try{for(var o in e=e||this.getSlots()){var r=e[o],i=(v(r),r.__refreshCount||0);r.setTargeting("in2w_key15","u"+((t=i)<11?t:t<26?"10-":t<51?"25-":t<101?"50-":"100-")),0<i&&r.__setTargeting("in2w_key22","1")}}catch(e){}s.__refresh.apply(s,n)}.bind(s),s.__setTargeting=s.setTargeting,s.__clearTargeting=s.clearTargeting,d.googletag.__defineOutOfPageSlot=d.googletag.defineOutOfPageSlot,d.googletag.__defineSlot=d.googletag.defineSlot,s.setTargeting=function(){var e=[];for(n in arguments)e.push(arguments[n]);var t=s.__setTargeting.apply(s,e);try{var n,o=this.getSlots();for(n in o){var r=o[n];I(r)}}catch(e){}return t}.bind(s),s.clearTargeting=function(){var e=[];for(n in arguments)e.push(arguments[n]);var t=s.__clearTargeting.apply(s,e);try{var n,o=this.getSlots();for(n in o){var r=o[n];I(r)}}catch(e){}return t}.bind(s),function(o){o.__setTargeting=o.setTargeting,o.setTargeting=function(){var e,t=[];for(e in arguments)t.push(arguments[e]);var n=o.__setTargeting.apply(o,t);return I(o),n}.bind(o)}),a=function(o){o.__clearTargeting=o.clearTargeting,o.clearTargeting=function(){var e,t=[];for(e in arguments)t.push(arguments[e]);var n=o.__clearTargeting.apply(o,t);return I(o),n}.bind(o)};d.googletag.defineOutOfPageSlot=function(){var e,t=[];for(e in arguments)t.push(arguments[e]);var n=d.googletag.__defineOutOfPageSlot.apply(d.googletag,t);return n&&(n.__is_oop=!0,n.__oop_format=t[1],g(n),a(n),I(n)),n}.bind(d.googletag),d.googletag.defineSlot=function(){var e,t=[];for(e in arguments)t.push(arguments[e]);var r=d.googletag.__defineSlot.apply(d.googletag,t);return r&&(r.__is_oop=!1,r.__def_sizes=arguments[1],g(r),a(r),r.__defineSizeMapping=r.defineSizeMapping,r.defineSizeMapping=function(e){var t,n=[];for(t in arguments)n.push(arguments[t]);var o=r.__defineSizeMapping.apply(r,n);return r.__sz_mapping=e,I(r),o}.bind(r),I(r)),r}.bind(d.googletag);try{var e,c=s.getSlots();for(e in c)try{var u=c[e];void 0!==u.__setTargeting||u.getOutOfPage()||(u.__is_oop=!1,g(u),a(u),I(u))}catch(e){}}catch(e){}s.__reportEvents=function(e,t){if(s.__eventProxy&&s.__eventProxy[e])for(var n in s.__eventProxy[e])try{s.__eventProxy[e][n](t)}catch(e){}},s.__addEventListener=s.addEventListener,s.addEventListener=function(o,e){if(-1!==t.indexOf(o))try{return this.__eventProxy=this.__eventProxy||{},this.__eventProxy[o]?(-1===this.__eventProxy[o].indexOf(e)&&this.__eventProxy[o].push(e),s):(this.__eventProxy[o]=[e],s.__addEventListener(o,function(e){var t=e.slot;if(t.__skipEvent&&t.__skipEvent[o]&&(new Date).getTime()-t.__skipEvent[o]<3e3)delete t.__skipEvent[o];else if(-1===r.indexOf(o)||!i(t))for(var n in s.__eventProxy[o])try{s.__eventProxy[o][n](e)}catch(e){}}))}catch(e){}return s.__addEventListener(o,e)}.bind(s),s.__removeEventListener=s.removeEventListener,s.removeEventListener=function(e,t){try{var n=this.__eventProxy;if(n&&n[e])return-1!==n[e].indexOf(t)&&(n[e].splice(n[e].indexOf(t),1),!0)}catch(e){}return s.__removeEventListener(e,t)}.bind(s),s.addEventListener("slotRequested",function(e){e=e.slot;delete e.__responseInfo,e.__refreshCount=e.__refreshCount||0,++e.__refreshCount,n(e,!0)}),s.addEventListener("slotRenderEnded",function(e){n(e.slot,!1)}),s.__addEventListener("slotRequested",function(e){e=e.slot;try{o(e).children[0].style.display="none",e.__hide=1}catch(e){}}),s.__addEventListener("slotRenderEnded",function(e){e=e.slot;if(e.__hide){try{var t=o(e);i(e)&&(t.children[0].children[0].style.display="none"),t.children[0].style.width&&"center"!==t.children[0].style["text-align"]?t.children[0].style.display="inline-block":t.children[0].style.display=""}catch(e){}delete e.__hide}})})}}catch(e){}}

            ybGPTHook(window,[5285345496],"intowow_optimized",["false"],["true"],[[900,10,10,10,10,10,10,10,10,10,10],[900,20,20,20,20,20]],"Europe/Berlin");

            // Sample benchmark / optimization true traffic randomization method
            window.googletag = window.googletag || { cmd: [] };
            window.googletag.cmd.push(function() {
              var opt_ratio = 0.9;
              var billing_key = 'intowow_optimized';  
              var traffic_group = (Math.random() < opt_ratio) ? 'true' : 'false';
              googletag.pubads().setTargeting(billing_key, traffic_group);
            });
        } 

        Spark.initService["deactivateComponents"](urlParams);
        
        document.addEventListener("DOMContentLoaded", checkAdBlock());
        
        function checkAdBlock() {
            var ad = document.createElement('ins');
            ad.className = 'AdSense';
            ad.style.display = 'block';
            ad.style.position = 'absolute';
            ad.style.top = '-1px';
            ad.style.height = '1px';
            if (document.body) {
                document.body.appendChild(ad);
                window.setTimeout(function() {
                    if (!ad.clientHeight) {
                        document.body.removeChild(ad);
                        adBlockDetected();
                    }else if (ad.clientHeight === 1){
                        adBlockUndetected();
                    }
                }, 100);
            }
        }
        
        function adBlockDetected() {
          if (typeof dataLayer !== "undefined") {
                dataLayer.push({'event':'AdBlocker','adblocker':'true'}); 
          }
        }

        function adBlockUndetected(){
           if (typeof dataLayer !== "undefined") {
                dataLayer.push({'event':'AdBlocker','adblocker':'false'}); 
          } 
        }

       function loadDmp(costr){
        Spark.debugService.debuggingArray.push('Spark: loadDmp: ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);

         permutive.consent({ "opt_in": true, "token": costr });
         setTimeout(function(){
          permutive.identify([{
            tag: 'PermId',
            id: localStorage['permutive-id']
          }])

         },1500);
         Spark.debugService.debuggingArray.push('Spark: permutive.consent: ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]); 
             
         permutive.ready(function(){ 

            Spark.permutiveTime  = new Date().getTime();
            var load_ready_diff = Spark.permutiveTime - Spark.loadTime;

            Spark.debugService.debuggingArray.push('Spark: time difference between permutive.ready and spark load '+ load_ready_diff +' ms '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);

            var puid = localStorage.getItem('permutive-id'),
            datum = new Date(); 

            datum.setDate(datum.getDate() + 365);

            if (Spark.definitionService["isJSON"](decodeURIComponent(localStorage["id5id"]))) {
                 Spark.id5 = JSON.parse(decodeURIComponent(localStorage["id5id"]))["original_uid"];
            } 

            if (localStorage._pdfps && localStorage._pdfps !== "") {
                Spark.permutiveSegments = Spark.definitionService.getPermutiveSegmentsArray(localStorage._pdfps);
                Spark.targetings["permutive"] = Spark.definitionService.getPermutiveSegmentsArray(localStorage._pdfps);
                Spark.debugService.debuggingArray.push('Spark: loadDMP permutiveSegments '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
            }

            if (puid) {
              document.cookie = "pubjs_pubcommonID=" + puid + "; expires=" + datum + "; path=/;";
              if (!Spark.ppid) {
                  Spark.ppid = puid;
              }
             
              //googletag.enableServices();
            }
            if (typeof ihowpbjs !== 'undefined') {
                if (typeof ihowpbjs.getUserIds() !== 'undefined') {
                      Spark.criteo = ihowpbjs.getUserIds()["criteoId"];
                      if (!Spark.id5) {
                        if (typeof ihowpbjs.getUserIds().id5id !== 'undefined') {
                            if (typeof ihowpbjs.getUserIds().id5id.uid !== 'undefined') {
                               Spark.id5 = ihowpbjs.getUserIds().id5id.uid;
                            }
                        }
                      }
                }
            }
            googletag.cmd.push(function (){
               if (!Spark.ppidBool) {
                 googletag.pubads().setPublisherProvidedId(puid);
               }
               googletag.pubads().setTargeting("id5", Spark.id5);
               googletag.pubads().setTargeting("criteo", Spark.criteo);
            });
              document.dispatchEvent(Spark.event_permutive);
              Spark.debugService.debuggingArray.push('Spark: permutive.ready: ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);  
              
               //permutive.context.watson.taxonomy[0].label][0]
                var watsonInti = 0;
                  window.watsonInt = setInterval(function(){
                       watsonInti++;
                      //console.log('### watsonInt' + watsonInti);
                    if (typeof permutive.context !== 'undefined') {
                       if (typeof permutive.context.watson !== 'undefined' && Object.entries(permutive.context.watson).length > 0) {
                            if (typeof permutive.context.watson.taxonomy !== 'undefined') {
                               window.clearInterval(window.watsonInt);
                               Spark.watsonSetTargeting(permutive.context.watson.taxonomy);
                            }
                       }
                    }
                     if (watsonInti > 20) {
                      googletag.cmd.push(function (){
                        googletag.pubads().setTargeting("wtsn", 'false');
                        googletag.pubads().setTargeting('abtest', ['b', 't002']);
                      });  
                      window.clearInterval(window.watsonInt);
                     }
                  }, 200);

              if (!Spark.boolPermutive) {
                 Spark.boolPermutive = true;
                 Spark.calladserver(1); 
              }   
                
             
          }, "initialised");
          if(typeof datalist["permutiveTax"] !== "undefined"){
           if (datalist["targetings"]["artikeltyp"] != "index" && datalist["targetings"]["artikeltyp"] != "gallery" && datalist["targetings"]["artikeltyp"] != "epg" && window.location.pathname != "/suche/" && window.location.href.indexOf("?") == -1 && window.location.href.indexOf("#") == -1) {
               
               datalist["permutiveTax"].classifications_watson = {
                      categories: "$alchemy_taxonomy",
                      concepts: "$alchemy_concepts",
                      entities: "$alchemy_entities",
                      keywords: "$alchemy_keywords",
                      watson_sentiment: "$alchemy_document_sentiment"
                 };
               //console.log(datalist["permutiveTax"]);  
              permutive.addon("web", { 
                page: datalist["permutiveTax"]
             });
               Spark.debugService.debuggingArray.push('Spark: permutive watson active '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]); 
             }else{
                permutive.addon("web", { 
                  page: datalist["permutiveTax"]
              });
            }   
           }else{
              datalist["permutiveTax"] = new Object();
             if (datalist["targetings"]["artikeltyp"] != "index" && datalist["targetings"]["artikeltyp"] != "gallery" && datalist["targetings"]["artikeltyp"] != "epg" && window.location.pathname != "/suche/" && window.location.href.indexOf("?") == -1 && window.location.href.indexOf("#") == -1) {
               datalist["permutiveTax"].classifications_watson= {
                      categories: "$alchemy_taxonomy",
                      concepts: "$alchemy_concepts",
                      entities: "$alchemy_entities",
                      keywords: "$alchemy_keywords",
                      watson_sentiment: "$alchemy_document_sentiment"
               };

               permutive.addon("web", { 
                page: {
                  classifications_watson: {
                      categories: "$alchemy_taxonomy",
                      concepts: "$alchemy_concepts",
                      entities: "$alchemy_entities",
                      keywords: "$alchemy_keywords",
                      watson_sentiment: "$alchemy_document_sentiment"
                 }
               }});
               Spark.debugService.debuggingArray.push('Spark: permutive watson active '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
             }else{
                permutive.addon("web", {});
             } 
           }
            window.addEventListener('message', event => {
                
                if (event?.data?.type === 'picked_answer') {
                  // window.top.postMessage(event.data, '*')
                    // on the root scope
                    console.log("apester even data: ");
                    console.log(event.data);
                    console.log("apester answerId: " + event.data.data.answerId);
                    console.log("apester answerText: " + event.data.data.answerText);
                    console.log("apester interactionId: " + event.data.data.interactionId);
                    console.log("apester slideId: " + event.data.data.slideId);
                    console.log("apester slideTitle: " + event.data.data.slideTitle);
                    console.log("apester type: " + event.data.type);
                    
                  permutive.track('SurveyResponse', {
                    "answer": {
                       "optionID": event.data.data.answerId,
                       "optionIdentifier": event.data.data.interactionId,
                       "optionPosition": event.data.data.interactionIndex,
                       "text": event.data.data.answerText
                    },
                     "question": {
                       "text": event.data.data.slideTitle
                    },
                     "survey": {
                       "id": event.data.data.slideId,
                       "solution": "Apester",
                       "type": event.data.type 
                    }
                 })
                 
                }
            });  
            
          
            var prmtvPageProps = datalist["permutiveTax"]; 
            
            var apiKey = "80430544-c5ac-44c5-b4ce-eb3058e62076";    
            (function () {
              var url = 'https://api.permutive.com/ctx/v1/segment?k=' + apiKey;
              var request = new window.XMLHttpRequest();

              request.open('POST', url, true);
              request.onreadystatechange = callbackPerm;
              request.send(JSON.stringify({
                pageProperties: enrichClient(prmtvPageProps),
                url: document.URL
            }))    

             function callbackPerm() {
                if (request.readyState === 4 && request.status === 200) {
                  var apiResponse;

                  try {
                    apiResponse = JSON.parse(request.responseText)
                  } catch (e) {
                    return;
                  }
                    permutive.addon('contextual', apiResponse);
                    //console.log("responseText: " + request.responseText);
                    googletag.cmd.push(function () {
                    
                    var ctxcohorts = apiResponse.gam || [];
                    var targetingKey = 'prmtvctx';
                    var targetingValues = ctxcohorts.concat('rts');

                    if (googletag.pubads().getTargeting(targetingKey).length === 0) {
                      googletag.pubads().setTargeting(targetingKey, targetingValues);
                    }
                  })
                }
              }
                function enrichClient (obj) {
                    try {
                      return Object.assign({}, obj, {
                        client: {
                          url: document.URL,
                          referrer: document.referrer,
                          type: 'web',
                          user_agent: navigator.userAgent,
                          domain: window.location.hostname,
                          title: document.title
                        }
                      })
                    } catch (e) {
                      return obj
                    }
                  }
            })();
            
            

         } 
      //config No. 1
      if (typeof datalist["cmp"] !== "undefined") {
         
        if (typeof datalist["cmpParams"] !== "undefined") {
             for (const [keyCmp, valueCmp] of Object.entries(datalist["cmpParams"])){
                if (valueCmp !== "") {
                    window[keyCmp] = valueCmp;
                }
            }   
        }
          
          var existCmp = true;

          if(datalist["cmp"] != 0){
            var newCmpCode = false;
            var newCmpId = 0;           

            for (var prop in Spark.cmp_cdid_obj) {
                if(Spark.cmp_cdid_obj.hasOwnProperty(prop)) {
                    if ((new RegExp(prop)).test(window.location)) {
                        if (prop == 'berlin-live.de' && /CleverPushApp/.test(window.navigator.userAgent)) { 
                            newCmpId = '5525a6753031';
                        }else{
                            newCmpId = Spark.cmp_cdid_obj[prop];
                        }
                        newCmpCode = true;       
                    }
                }
            } 
          window.cmp_disablegpp = true;
          if (newCmpCode) {
             window.gdprAppliesGlobally=true;if(!("cmp_id" in window)||window.cmp_id<1){window.cmp_id=0}if(!("cmp_cdid" in window)){window.cmp_cdid=newCmpId}if(!("cmp_params" in window)){window.cmp_params=""}if(!("cmp_host" in window)){window.cmp_host="b.delivery.consentmanager.net"}if(!("cmp_cdn" in window)){window.cmp_cdn="cdn.consentmanager.net"}if(!("cmp_proto" in window)){window.cmp_proto="https:"}if(!("cmp_codesrc" in window)){window.cmp_codesrc="1"}window.cmp_getsupportedLangs=function(){var b=["DE","EN","FR","IT","NO","DA","FI","ES","PT","RO","BG","ET","EL","GA","HR","LV","LT","MT","NL","PL","SV","SK","SL","CS","HU","RU","SR","ZH","TR","UK","AR","BS"];if("cmp_customlanguages" in window){for(var a=0;a<window.cmp_customlanguages.length;a++){b.push(window.cmp_customlanguages[a].l.toUpperCase())}}return b};window.cmp_getRTLLangs=function(){var a=["AR"];if("cmp_customlanguages" in window){for(var b=0;b<window.cmp_customlanguages.length;b++){if("r" in window.cmp_customlanguages[b]&&window.cmp_customlanguages[b].r){a.push(window.cmp_customlanguages[b].l)}}}return a};window.cmp_getlang=function(j){if(typeof(j)!="boolean"){j=true}if(j&&typeof(window.cmp_getlang.usedlang)=="string"&&window.cmp_getlang.usedlang!==""){return window.cmp_getlang.usedlang}var g=window.cmp_getsupportedLangs();var c=[];var f=location.hash;var e=location.search;var a="languages" in navigator?navigator.languages:[];if(f.indexOf("cmplang=")!=-1){c.push(f.substr(f.indexOf("cmplang=")+8,2).toUpperCase())}else{if(e.indexOf("cmplang=")!=-1){c.push(e.substr(e.indexOf("cmplang=")+8,2).toUpperCase())}else{if("cmp_setlang" in window&&window.cmp_setlang!=""){c.push(window.cmp_setlang.toUpperCase())}else{if(a.length>0){for(var d=0;d<a.length;d++){c.push(a[d])}}}}}if("language" in navigator){c.push(navigator.language)}if("userLanguage" in navigator){c.push(navigator.userLanguage)}var h="";for(var d=0;d<c.length;d++){var b=c[d].toUpperCase();if(g.indexOf(b)!=-1){h=b;break}if(b.indexOf("-")!=-1){b=b.substr(0,2)}if(g.indexOf(b)!=-1){h=b;break}}if(h==""&&typeof(cmp_getlang.defaultlang)=="string"&&cmp_getlang.defaultlang!==""){return cmp_getlang.defaultlang}else{if(h==""){h="EN"}}h=h.toUpperCase();return h};(function(){var u=document;var v=u.getElementsByTagName;var h=window;var o="";var b="_en";if("cmp_getlang" in h){o=h.cmp_getlang().toLowerCase();if("cmp_customlanguages" in h){for(var q=0;q<h.cmp_customlanguages.length;q++){if(h.cmp_customlanguages[q].l.toUpperCase()==o.toUpperCase()){o="en";break}}}b="_"+o}function x(i,e){var w="";i+="=";var s=i.length;var d=location;if(d.hash.indexOf(i)!=-1){w=d.hash.substr(d.hash.indexOf(i)+s,9999)}else{if(d.search.indexOf(i)!=-1){w=d.search.substr(d.search.indexOf(i)+s,9999)}else{return e}}if(w.indexOf("&")!=-1){w=w.substr(0,w.indexOf("&"))}return w}var k=("cmp_proto" in h)?h.cmp_proto:"https:";if(k!="http:"&&k!="https:"){k="https:"}var g=("cmp_ref" in h)?h.cmp_ref:location.href;var j=u.createElement("script");j.setAttribute("data-cmp-ab","1");var c=x("cmpdesign","cmp_design" in h?h.cmp_design:"");var f=x("cmpregulationkey","cmp_regulationkey" in h?h.cmp_regulationkey:"");var r=x("cmpgppkey","cmp_gppkey" in h?h.cmp_gppkey:"");var n=x("cmpatt","cmp_att" in h?h.cmp_att:"");j.src=k+"//"+h.cmp_host+"/delivery/cmp.php?"+("cmp_id" in h&&h.cmp_id>0?"id="+h.cmp_id:"")+("cmp_cdid" in h?"&cdid="+h.cmp_cdid:"")+"&h="+encodeURIComponent(g)+(c!=""?"&cmpdesign="+encodeURIComponent(c):"")+(f!=""?"&cmpregulationkey="+encodeURIComponent(f):"")+(r!=""?"&cmpgppkey="+encodeURIComponent(r):"")+(n!=""?"&cmpatt="+encodeURIComponent(n):"")+("cmp_params" in h?"&"+h.cmp_params:"")+(u.cookie.length>0?"&__cmpfcc=1":"")+"&l="+o.toLowerCase()+"&o="+(new Date()).getTime();j.type="text/javascript";j.async=true;if(u.currentScript&&u.currentScript.parentElement){u.currentScript.parentElement.appendChild(j)}else{if(u.body){u.body.appendChild(j)}else{var t=v("body");if(t.length==0){t=v("div")}if(t.length==0){t=v("span")}if(t.length==0){t=v("ins")}if(t.length==0){t=v("script")}if(t.length==0){t=v("head")}if(t.length>0){t[0].appendChild(j)}}}var m="js";var p=x("cmpdebugunminimized","cmpdebugunminimized" in h?h.cmpdebugunminimized:0)>0?"":".min";var a=x("cmpdebugcoverage","cmp_debugcoverage" in h?h.cmp_debugcoverage:"");if(a=="1"){m="instrumented";p=""}var j=u.createElement("script");j.src=k+"//"+h.cmp_cdn+"/delivery/"+m+"/cmp"+b+p+".js";j.type="text/javascript";j.setAttribute("data-cmp-ab","1");j.async=true;if(u.currentScript&&u.currentScript.parentElement){u.currentScript.parentElement.appendChild(j)}else{if(u.body){u.body.appendChild(j)}else{var t=v("body");if(t.length==0){t=v("div")}if(t.length==0){t=v("span")}if(t.length==0){t=v("ins")}if(t.length==0){t=v("script")}if(t.length==0){t=v("head")}if(t.length>0){t[0].appendChild(j)}}}})();window.cmp_addFrame=function(b){if(!window.frames[b]){if(document.body){var a=document.createElement("iframe");a.style.cssText="display:none";if("cmp_cdn" in window&&"cmp_ultrablocking" in window&&window.cmp_ultrablocking>0){a.src="//"+window.cmp_cdn+"/delivery/empty.html"}a.name=b;a.setAttribute("title","Intentionally hidden, please ignore");a.setAttribute("role","none");a.setAttribute("tabindex","-1");document.body.appendChild(a)}else{window.setTimeout(window.cmp_addFrame,10,b)}}};window.cmp_rc=function(h){var b=document.cookie;var f="";var d=0;while(b!=""&&d<100){d++;while(b.substr(0,1)==" "){b=b.substr(1,b.length)}var g=b.substring(0,b.indexOf("="));if(b.indexOf(";")!=-1){var c=b.substring(b.indexOf("=")+1,b.indexOf(";"))}else{var c=b.substr(b.indexOf("=")+1,b.length)}if(h==g){f=c}var e=b.indexOf(";")+1;if(e==0){e=b.length}b=b.substring(e,b.length)}return(f)};window.cmp_stub=function(){var a=arguments;__cmp.a=__cmp.a||[];if(!a.length){return __cmp.a}else{if(a[0]==="ping"){if(a[1]===2){a[2]({gdprApplies:gdprAppliesGlobally,cmpLoaded:false,cmpStatus:"stub",displayStatus:"hidden",apiVersion:"2.0",cmpId:31},true)}else{a[2](false,true)}}else{if(a[0]==="getUSPData"){a[2]({version:1,uspString:window.cmp_rc("")},true)}else{if(a[0]==="getTCData"){__cmp.a.push([].slice.apply(a))}else{if(a[0]==="addEventListener"||a[0]==="removeEventListener"){__cmp.a.push([].slice.apply(a))}else{if(a.length==4&&a[3]===false){a[2]({},false)}else{__cmp.a.push([].slice.apply(a))}}}}}}};window.cmp_gpp_ping=function(){return{gppVersion:"1.0",cmpStatus:"stub",cmpDisplayStatus:"hidden",supportedAPIs:["tcfca","usnat","usca","usva","usco","usut","usct"],cmpId:31}};window.cmp_gppstub=function(){var a=arguments;__gpp.q=__gpp.q||[];if(!a.length){return __gpp.q}var g=a[0];var f=a.length>1?a[1]:null;var e=a.length>2?a[2]:null;if(g==="ping"){return window.cmp_gpp_ping()}else{if(g==="addEventListener"){__gpp.e=__gpp.e||[];if(!("lastId" in __gpp)){__gpp.lastId=0}__gpp.lastId++;var c=__gpp.lastId;__gpp.e.push({id:c,callback:f});return{eventName:"listenerRegistered",listenerId:c,data:true,pingData:window.cmp_gpp_ping()}}else{if(g==="removeEventListener"){var h=false;__gpp.e=__gpp.e||[];for(var d=0;d<__gpp.e.length;d++){if(__gpp.e[d].id==e){__gpp.e[d].splice(d,1);h=true;break}}return{eventName:"listenerRemoved",listenerId:e,data:h,pingData:window.cmp_gpp_ping()}}else{if(g==="getGPPData"){return{sectionId:3,gppVersion:1,sectionList:[],applicableSections:[0],gppString:"",pingData:window.cmp_gpp_ping()}}else{if(g==="hasSection"||g==="getSection"||g==="getField"){return null}else{__gpp.q.push([].slice.apply(a))}}}}}};window.cmp_msghandler=function(d){var a=typeof d.data==="string";try{var c=a?JSON.parse(d.data):d.data}catch(f){var c=null}if(typeof(c)==="object"&&c!==null&&"__cmpCall" in c){var b=c.__cmpCall;window.__cmp(b.command,b.parameter,function(h,g){var e={__cmpReturn:{returnValue:h,success:g,callId:b.callId}};d.source.postMessage(a?JSON.stringify(e):e,"*")})}if(typeof(c)==="object"&&c!==null&&"__uspapiCall" in c){var b=c.__uspapiCall;window.__uspapi(b.command,b.version,function(h,g){var e={__uspapiReturn:{returnValue:h,success:g,callId:b.callId}};d.source.postMessage(a?JSON.stringify(e):e,"*")})}if(typeof(c)==="object"&&c!==null&&"__tcfapiCall" in c){var b=c.__tcfapiCall;window.__tcfapi(b.command,b.version,function(h,g){var e={__tcfapiReturn:{returnValue:h,success:g,callId:b.callId}};d.source.postMessage(a?JSON.stringify(e):e,"*")},b.parameter)}if(typeof(c)==="object"&&c!==null&&"__gppCall" in c){var b=c.__gppCall;window.__gpp(b.command,function(h,g){var e={__gppReturn:{returnValue:h,success:g,callId:b.callId}};d.source.postMessage(a?JSON.stringify(e):e,"*")},"parameter" in b?b.parameter:null,"version" in b?b.version:1)}};window.cmp_setStub=function(a){if(!(a in window)||(typeof(window[a])!=="function"&&typeof(window[a])!=="object"&&(typeof(window[a])==="undefined"||window[a]!==null))){window[a]=window.cmp_stub;window[a].msgHandler=window.cmp_msghandler;window.addEventListener("message",window.cmp_msghandler,false)}};window.cmp_setGppStub=function(a){if(!(a in window)||(typeof(window[a])!=="function"&&typeof(window[a])!=="object"&&(typeof(window[a])==="undefined"||window[a]!==null))){window[a]=window.cmp_gppstub;window[a].msgHandler=window.cmp_msghandler;window.addEventListener("message",window.cmp_msghandler,false)}};window.cmp_addFrame("__cmpLocator");if(!("cmp_disableusp" in window)||!window.cmp_disableusp){window.cmp_addFrame("__uspapiLocator")}if(!("cmp_disabletcf" in window)||!window.cmp_disabletcf){window.cmp_addFrame("__tcfapiLocator")}if(!("cmp_disablegpp" in window)||!window.cmp_disablegpp){window.cmp_addFrame("__gppLocator")}window.cmp_setStub("__cmp");if(!("cmp_disabletcf" in window)||!window.cmp_disabletcf){window.cmp_setStub("__tcfapi")}if(!("cmp_disableusp" in window)||!window.cmp_disableusp){window.cmp_setStub("__uspapi")}if(!("cmp_disablegpp" in window)||!window.cmp_disablegpp){window.cmp_setGppStub("__gpp")};
           } 

        if (/derwesten\.de|moin\.de|news38\.de|thueringen24\.de|selfies\.com|hoerzu\.de|hoerzu\.at|werstreamt\.es|tvdigital\.de|klack\.de|tvdirekt\.de|harzkurier\.de|braunschweiger-zeitung\.de|wmn\.de|berlin-live\.de|futurezone\.de|morgennpost\.de|thueringer-allgemeine\.de|otz\.de|tlz\.de|bildderfrau\.de|leckerschmecker\.me|genialetricks\.de|eatclub\.de|lifeline\.de|onmeda\.de|heftig\.de|einfachschoen\.me|gesundheit\.de|4p\.de|donna-magazin\.de|9monate\.de|landidee\.de|funke\.fun/.test(window.location.href)){
                window.cmp_custombutton2 = true;
                window.cmp_custombutton2_name = "Auswahl zustimmen";
                window.cmp_custombutton2_pos = 2;
                window.cmp_custombutton2_screen = 2;
                window.cmp_custombutton2_purposes = ["1","2","3","4","5","6","7","8","9","10"]; 
                window.cmp_pur_mode = 2;
                window.cmp_pur_purposes = ["1","2","3","4","5","6","7","8","9","10"];
                window.cmp_custombutton2_logic = 1;
                window.cmp_custombutton = true;
                window.cmp_custombutton_name = "Zustimmung widerrufen";
                window.cmp_custombutton_pos = 0;
                window.cmp_custombutton_screen = 2;
                window.cmp_custombutton_purposes = ["1","c11","c12"];
                window.cmp_custombutton_logic = 4;  
                window.cmp_custombutton_behavior = 9;
        }
          }
          
          
        const callback = (tcData, success) => {
            //console.log('### spark cmp-callback');
            //console.log('### spark cmp-status: ' + tcData.eventStatus);
           if (typeof tcData !== 'undefined' && tcData != null) {
               Spark.debugService.debuggingArray.push('Spark: cmp '+tcData.eventStatus+' '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]); 
           }
          if(success && tcData.eventStatus !== 'loading') {
            
             if(success && (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete' || tcData.gdprApplies === false)) {
                //if (typeof jQuery !== 'undefined') {
                     //if (typeof tcData.customVendorConsents !== 'undefined' && tcData.customVendorConsents.s1429) {
                             //jQuery(document).trigger('cmpDataReady', {vgwortAccepted: true});
                     //}else{
                             //jQuery(document).trigger('cmpDataReady', {});
                     //}
                //} 
                
                    if (tcData.vendor !== 'undefined' && tcData.vendor.consents !== 'undefined' && tcData.vendor.consents[1016]) {
                            loadAllScripts();
                    }else{
                        if (tcData.vendor !== 'undefined' && tcData.vendor.consents !== 'undefined' && tcData.vendor.consents[755]) {
                            loadAllScripts();
                        }
                    }
                    Spark.tcData = tcData;
                    //Spark.addEventListener('consentReceived', Spark.func);
                    document.dispatchEvent(Spark.event_consent); 
                    //callAdserver();
                    Spark.boolCMP = true;
                    Spark.calladserver(1);
                    if (localStorage !== "undefined") {
                        if (localStorage.getItem('permutive-id') !== "undefined") {
                            Spark.ppid = localStorage.getItem('permutive-id');
                        }
                        if (localStorage._pdfps && localStorage._pdfps !== "") {
                            Spark.permutiveSegments = Spark.definitionService.getPermutiveSegmentsArray(localStorage._pdfps);
                            Spark.targetings["permutive"] = Spark.definitionService.getPermutiveSegmentsArray(localStorage._pdfps);
                            Spark.debugService.debuggingArray.push('Spark: callbackCMP permutiveSegments ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
                        }
                    } 
                   if (typeof loadDmp === 'function'&& !Spark.deactivatePermutive && tcData.vendor !== 'undefined' && tcData.vendor.consents !== 'undefined' && tcData.vendor.consents[361]) {
                       loadDmp(tcData.tcString);
                     if (/futurezone\.de|morgenpost\.de/.test(window.location.href)) {
                      setTimeout(function() {
                           document.dispatchEvent(Spark.event_permutive); 
                           Spark.calladserver(0);
                        googletag.cmd.push(function (){
                           if (Spark.ppid) {
                                Spark.ppidBool = true;
                                googletag.pubads().setPublisherProvidedId(Spark.ppid);
                            }     
                        });
                      }, 1000);
                     }else{
                        setTimeout(function() {
                           document.dispatchEvent(Spark.event_permutive); 
                           Spark.calladserver(0);
                        googletag.cmd.push(function (){
                           if (Spark.ppid) {
                                Spark.ppidBool = true;
                                googletag.pubads().setPublisherProvidedId(Spark.ppid);
                            }     
                        });
                      }, 200);
                     }
                      
                       
                    }else{
                        document.dispatchEvent(Spark.event_permutive);
                        Spark.calladserver(0); 
                    }
                    
                    
                __tcfapi('removeEventListener', 2, (success) => {}, tcData.listenerId);
               }  
                else if(!success && tcData === 'NO_CMP_FOUND') {
                        //console.log('### NO_CMP_FOUND');
                }
              }
            }
              if (typeof __tcfapi === 'undefined') {
                     var cmpInti = 0;
                     window.cmpInt = setInterval(function(){
                       cmpInti++;
                 // console.log('### cmpInt' + cmpInti);
               if (typeof __tcfapi !== 'undefined') {
                 window.clearInterval(window.cmpInt);
                 __tcfapi('addEventListener', 2, callback);
               }
                 if (cmpInti > 10) {
                  window.clearInterval(window.cmpInt);
                 }
              }, 200);
              } else {
                 __tcfapi('addEventListener', 2, callback);
              
             }   
        }
      
        window.googletag = window.googletag || {cmd: []}; 
        function loadAllScripts(){
            //console.log("loadAllScripts");
        if ((typeof datalist["permutiveDMP"] === "undefined" || datalist["permutiveDMP"]) && !Spark.deactivatePermutive) {
            if(typeof datalist["permutiveNamespace"] !== "undefined" && typeof datalist["permutiveApiKey"] !== "undefined" && typeof datalist["permutiveOrganizationId"] !== "undefined"){
               !function(n,e,i){if(!n){n=n||{},window.permutive=n,n.q=[],n.config=i||{},n.config.apiKey=e,n.config.environment=n.config.environment||"production";for(var o=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],r=0;r<o.length;r++){var t=o[r];n[t]=function(e){return function(){var i=Array.prototype.slice.call(arguments,0);n.q.push({functionName:e,arguments:i})}}(t)}}}(window.permutive,datalist["permutiveApiKey"],{"consentRequired": true});
              window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting("permutive").length){var g=window.localStorage.getItem("_pdfps");window.googletag.pubads().setTargeting("permutive",g?JSON.parse(g):[])}});
      
             }else{
              !function(n,e,i){if(!n){n=n||{},window.permutive=n,n.q=[],n.config=i||{},n.config.apiKey=e,n.config.environment=n.config.environment||"production";for(var o=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],r=0;r<o.length;r++){var t=o[r];n[t]=function(e){return function(){var i=Array.prototype.slice.call(arguments,0);n.q.push({functionName:e,arguments:i})}}(t)}}}(window.permutive,"80430544-c5ac-44c5-b4ce-eb3058e62076",{"consentRequired": true});
              window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting("permutive").length){var g=window.localStorage.getItem("_pdfps");window.googletag.pubads().setTargeting("permutive",g?JSON.parse(g):[])}});
             }
              if(typeof datalist["permutiveOrganizationId"] !== "undefined" && typeof datalist["permutiveWorkspaceId"] !== "undefined"){
               Spark.initService["createScript"]('https://'+datalist["permutiveOrganizationId"]+'.edge.permutive.app/'+datalist["permutiveWorkspaceId"]+'-web.js', true);
              }else{
               Spark.initService["createScript"]('https://f23f026d-af06-45a2-8d42-9222f4656195.edge.permutive.app/3442b902-99b6-43e3-b9ff-671a50bde7bb-web.js', true);
              } 
        }
       
       //   --- LiveRamp --->
        if (/moin\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://ats-wrapper.privacymanager.io/ats-modules/89a45f14-48a8-44a5-ac24-b568f7a939eb/ats.js', true);
        } else if (/derwesten\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://ats-wrapper.privacymanager.io/ats-modules/89a45f14-48a8-44a5-ac24-b568f7a939eb/ats.js', true);
        } else if (/morgenpost.de|abendblatt.de|thueringer-allgemeine.de|otz.de|tlz.de|braunschweiger-zeitung.de|harzkurier.de|waz.de|wp.de|wr.de|ikz-online.de|nrz.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://ats-wrapper.privacymanager.io/ats-modules/770f5a2a-1c3b-41c3-ad50-a790bd394b66/ats.js', true);
            window.addEventListener("envelopeModuleReady", () => {
               try{
                     var mailadress = window.SPARK.sso.jwtDecode(window.SPARK.sso.getCookie('sfauthp')).email;
                     var mail = mailadress.replace(/\s/g, "");
                }catch(err){
                    //console.log('### kein eingeloggter User')
                }
                try{
                    ats.setAdditionalData({'type':'email','id':mail})   
                }catch(err){
                    //console.log('### kein ATS')
                }
             });
        }
        // <---- LiveRamp ---
        
        function hashEmail(){
            var scriptSrc = "https://storage.googleapis.com/admo-spark/sha256min.js",
                scriptExists = document.getElementById('idhashed');

                if (!scriptExists) {
                    var scriptTag = document.createElement('script');
                        scriptTag.id = 'idhashed'
                        scriptTag.src = scriptSrc;
                        document.head.appendChild(scriptTag);
                }

            var mailadress = window.SPARK.sso.jwtDecode(window.SPARK.sso.getCookie('sfauthp')).email,
                emaillow = mailadress.toLowerCase().replaceAll('+', ""),
                email_s = emaillow.split("@"),
                mail = email_s[0].replace(/\./g, "")+"@"+email_s[1],
                hashedmail = sha256(mail);

                // Permutive ID
                if (Spark.boolPermutive){
                        permutive.identify([ 
                            { "id": hashedmail, 
                             "tag": "email_sha256" } 
                        ]);
                }  
                // Amazon Publisher Audiences
                if (/morgenpost.de|abendblatt.de|thueringer-allgemeine.de|otz.de|tlz.de|braunschweiger-zeitung.de|harzkurier.de|waz.de|wp.de|wr.de|ikz-online.de|nrz.de/.test(window.location.href)){
                        localStorage.setItem('ApSFdB', hashedmail)  
                }
        };


        // For Permutive and Amazon Publisher Audiences
        function checkMEmail() {
            var AmazonPublisherRegex = /morgenpost.de|abendblatt.de|thueringer-allgemeine.de|otz.de|tlz.de|braunschweiger-zeitung.de|harzkurier.de|waz.de|wp.de|wr.de|ikz-online.de|nrz.de/;
            var checkMail = setInterval(function() {
                try {
                    var userData = window.SPARK.sso.jwtDecode(window.SPARK.sso.getCookie('sfauthp'));
                    if (userData && userData.email !== "") {
                        hashEmail(); 
                        clearInterval(checkMail);
                    } else {
                        throw new Error('No email found');
                    }
                } catch (error) {
                    clearInterval(checkMail);
                    if (error.message === 'No email found' && AmazonPublisherRegex.test(window.location.href)) {
                        localStorage.removeItem('ApSFdB');
                    } else {
                        console.log('### missed permutive-id'); 
                    }
                }
            }, 1000);

            setTimeout(function() {
                clearInterval(checkMail); // Clear the interval after 11 seconds regardless of the outcome
            }, 11000);
        }

        checkMEmail();

        // --- Utiq LIVE  -->
        if (!Spark.deactivateUtiq && /heftig|news38|thueringen24|futurezone|wmn|schlager/.test(window.location.href)){
          var isUtiqInitialized = false;
          var triggerUtiq = function() {
            (() => {
              if (!isUtiqInitialized && typeof window.sessionStorage.funke_pv_flag !== "undefined" && window.sessionStorage.funke_pv_flag == 'true') {
                isUtiqInitialized = true;
                const s = document.createElement("script");
                s.type = "text/javascript";
                // Define a mapping for host names to script URLs
                const urlMapping = {
                    "heftig.de": "https://utiq.heftig.de/utiqLoader.js",
                    "news38.de": "https://utiq.news38.de/utiqLoader.js",
                    "genialetricks.de": "https://utiq.genialetricks.de/utiqLoader.js" ,
                    "leckerschmecker.me": "https://utiq.leckerschmecker.me/utiqLoader.js",
                    "einfachschoen.me": "https://utiq.einfachschoen.me/utiqLoader.js",
                    "thueringen24.de": "https://utiq.thueringen24.de/utiqLoader.js",
                    "berlin-live.de": "https://utiq.berlin-live.de/utiqLoader.js",
                    "futurezone.de": "https://utiq.futurezone.de/utiqLoader.js",
                    "wmn.de": "https://utiq.wmn.de/utiqLoader.js",
                    "schlager.de": "https://utiq.schlager.de/utiqLoader.js"
                };
                // Determine the matching source based on the current host
                const currentHostName = window.location.hostname.split('.').slice(-2).join('.');
                s.src = urlMapping[currentHostName];
                document.head.appendChild(s);
              }
            })();
            // Stop checking for the cookie
            clearInterval(cookieCheckInterval);
          };
          // Checking if the cookie exists
          var cookieCheckInterval = window.setInterval(function() {
            // Replace the cookie name "all_cmp_accepted" and the cookie value "true" with the
            // corresponding cookie name and value that represent that a user has accepted all cookies
            const cookieMapping = {
                    "heftig.de": "__cmpconsentx10576",
                    "news38.de": "__cmpconsentx42173",
                    "genialetricks.de": "__cmpconsentx42173" ,
                    "leckerschmecker.me": "__cmpconsentx42173",
                    "einfachschoen.me": "__cmpconsentx10576",
                    "thueringen24.de": "__cmpconsentx42173",
                    "berlin-live.de": "__cmpconsentx76466",
                    "futurezone.de": "__cmpconsentx42173",
                    "wmn.de": "__cmpconsentx76466",
                    "schlager.de": "__cmpconsentx76466"
                };
            for (var domain in cookieMapping) {
                var cookieName = cookieMapping[domain];
                if (document.cookie.indexOf(cookieName) !== -1) {
                    triggerUtiq();
                }
            }
             // You might want to adjust this interval time as needed
          } , 100);
        }
        // <--- Utiq LIVE --

         // --- Utiq TEST -->
        if (Spark.deactivateUtiq && /genialetricks|leckerschmecker|einfachschoen|berlin-live/.test(window.location.href)){
          var isUtiqInitialized = false;
          var triggerUtiq = function() {
            (() => {
              if (!isUtiqInitialized) {
                isUtiqInitialized = true;
                const s = document.createElement("script");
                s.type = "text/javascript";
                // Define a mapping for host names to script URLs
                const urlMapping = {
                    "genialetricks.de": "https://utiq.genialetricks.de/utiqLoader.js" ,
                    "leckerschmecker.me": "https://utiq.leckerschmecker.me/utiqLoader.js",
                    "einfachschoen.me": "https://utiq.einfachschoen.me/utiqLoader.js",
                    "berlin-live.de": "https://utiq.berlin-live.de/utiqLoader.js",
                };
                // Determine the matching source based on the current host
                const currentHostName = window.location.hostname.split('.').slice(-2).join('.');
                s.src = urlMapping[currentHostName];
                document.head.appendChild(s);
              }
            })();
            // Stop checking for the cookie
            clearInterval(cookieCheckInterval);
          };
          // Checking if the cookie exists
          var cookieCheckInterval = window.setInterval(function() {
            // Replace the cookie name "all_cmp_accepted" and the cookie value "true" with the
            // corresponding cookie name and value that represent that a user has accepted all cookies
            const cookieMapping = {
                    "genialetricks.de": "__cmpconsentx42173" ,
                    "leckerschmecker.me": "__cmpconsentx42173",
                    "einfachschoen.me": "__cmpconsentx10576",
                    "berlin-live.de": "__cmpconsentx76466",
                };
            for (var domain in cookieMapping) {
                var cookieName = cookieMapping[domain];
                if (document.cookie.indexOf(cookieName) !== -1) {
                    triggerUtiq();
                }
            }
             // You might want to adjust this interval time as needed
          } , 100);
        }
        // <--- Utiq TEST--

            //config No. 2
        if(typeof datalist["gpt"] === "undefined" || datalist["gpt"] == true){
           
           Spark.initService["createScript"]('https://securepubads.g.doubleclick.net/tag/js/gpt.js', true);
           
           Spark.debugService.debuggingArray.push('Spark: gpt loaded ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]); 
           
        }
          //config No. 3 
        if((typeof datalist["rubicon"] === "undefined" || datalist["rubicon"] == true) && !Spark.deactivateRubicon){
             Spark.rubicon  = true; 
             //Spark.device = datalist["siteName"].substring(0, 3);
             
            var PWT={}; //Initialize Namespace
            window.pbjs = window.pbjs||{};
            pbjs.que=pbjs.que||[];
            PWT.jsLoaded = function(){ //PubMatic pwt.js on load callback is used to load GPT and Prebid
               Spark.loadPrebid();
            }; 
            // Failsafe to call gpt
             setTimeout(Spark.loadPrebid(), 100);
            (function() {
                var purl = window.location.href;
                var url = '//ads.pubmatic.com/AdServer/js/pwt/159706/4217';
                var profileVersionId = '';
                if(purl.indexOf('pwtv=')>0){
                    var regexp = /pwtv=(.*?)(&|$)/g;
                    var matches = regexp.exec(purl);
                    if(matches.length >= 2 && matches[1].length > 0){
                        profileVersionId = '/'+matches[1];
                    }
                }
                var wtads = document.createElement('script');
                wtads.async = true;
                wtads.type = 'text/javascript';
                wtads.src = url+profileVersionId+'/pwt.js';
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(wtads, node);
            })(); 
           var agmaCode = "";
            for (var prop in Spark.agma_Obj) {
                        if(Spark.agma_Obj.hasOwnProperty(prop)) {
                            if ((new RegExp(prop)).test(window.location)) {
                                agmaCode = Spark.agma_Obj[prop];
                            }
                        }
            }
            if (agmaCode) {
                    pbjs.que.push(function () {
                     pbjs.enableAnalytics([
                        {
                          provider: "agma",
                          options: {
                            code: agmaCode
                          },
                        },
                     ]);
                    }); 
            }       
               
            pbjs.que.push(function() {
                pbjs.onEvent('auctionEnd', function(data) {
                    Spark.snowplowTrackingAuctionEnd(data.bidsReceived); 
                });
            });   
            
         }
        

      if((typeof datalist["amazon"] === "undefined" || datalist["amazon"] == true) && !Spark.deactivateAmazon){
        Spark.amazon = true;
        /* ----- Begin Step 1 ----- */
        //Load the APS JavaScript Library
       !function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};
          A=p.createElement(s);
          A.async=!0;
          A.src=t;g=p.getElementsByTagName(s)[0];
          g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");  

          //Initialize the Library
           //Initialize the Library
          if (Spark.iab_str != "-1" && typeof datalist.targetings.keyword !== "undefined" ) {
           apstag.init({
            pubID: '3915',
            adServer: 'googletag',
            deals: true,
            signals:{
                "ortb2":{
                    "site": {
                        "name": Spark.definitionService.getDomainName(window.location.host),
                        "cattax": 6,
                        "cat": Spark.iab_str.split(","),
                        "keywords": datalist.targetings.keyword.toString(),
                        "domain": window.location.host,
                    }
                }
            }
          });
         } else {
            apstag.init({
            pubID: '3915',
            adServer: 'googletag',
            deals: true
          });
         }  
          
         /* ----- End Step 1 ----- */
          Spark.debugService.debuggingArray.push('Spark: Amazon loaded ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
      
      }
       
          // config No. 5
        // GeoEdge deaktiviert
/*
         if ((typeof datalist["geoedge"] === "undefined" || datalist["geoedge"] == true) && !Spark.deactivateGeoedge) {
           window.grumi = {
              cfg: {
                advs: {
                    '50224237' : true,                    
                    '81845557' :   true,
                    '4726472858' : true,
                    '4888216492' : true,
                    '4644377193' : true,
                    '5014422655' : true,
                    '4726473101' : true,
                    '4580567178' : true,
                    '5174641362' : true,
                    '4567291115' : true,
                    '4957969436' : true,
                    '5226545932' : true,
                    '4681250111' : true,
                    '4971551949' : true,
                    '5193492436' : true,
                    '5088252679' : true,
                    '5050313738' : true,
                    '4660204497' : true,
                    '5057348785' : true,
                    '4699461322' : true,
                    '5004500544' : true,
                    '5211228611' : true,
                    '5145345541' : true,
                    '4645137044' : true,
                    '4680292542' : true,
                    '4546432208' : true,
                    '4785336626' : true,
                    '63577357' : true,
                    '5178536611' : true,
                    '4552504063' : true,
                    '4673052409' : true,
                    '4739968300' : true,
                    '442434677' : true,                 
                },
                   pubIds: {
                     'ca-pub-8685022799332292': true
                   },
                   pbGlobal: 'pbjsYLHH'
                 },
                   key: '7ee86014-6f98-446b-880d-7f8c1cd4db04'
             };
           
             Spark.initService["createScript"]('//rumcdn.geoedge.be/7ee86014-6f98-446b-880d-7f8c1cd4db04/grumi-ip.js', true);
             Spark.debugService.debuggingArray.push('Spark: geoedge loaded ' + new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]);
          }
          */
        
      var query_split = queryString.split("&");
       
      for (var i = 0; i < query_split.length; i++) {
        var keyValue = getKeyValue("sparkTargeting",query_split[i]);
        if (keyValue) {
            var n = keyValue.indexOf("=");
            var key =keyValue.substring(0,n);
            var value =keyValue.substring(n+1,keyValue.length);
            datalist["targetings"][key] = value;
        }
     }  

     
      function getKeyValue(name, url) {
       
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp(name + '(.*)'+'(=([^&#]*)|&|#|$|)'),
        results = regex.exec(url);
         if (!results) return null;
         if (!results[1]) return '';
         if (results[1]) {
         }
 
        return decodeURIComponent(results[1].replace(/\+/g, ' '));
      } 
     
      // config No. 6

             //--- The Media Trust -->
        if (/hoerzu\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://scripts.webcontentassessor.com/scripts/dc94068daf7b1c11ca30be773c8c4dc444ee0bcbb1dea681a80f5761f1fa2347', true);    
        } else if (/derwesten\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://scripts.webcontentassessor.com/scripts/aaa285e2c5e77ad1f16728c5d2525b44644d6771ea67316e3b11d2749357bbbc', true);
        } else if (/morgenpost\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://scripts.webcontentassessor.com/scripts/ddb41a5a1f8ffcba86e23dbe9d2bb08ddfea5e78f9b53b4a49a4eac693a73c5f', true);
        } else if (/waz\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://scripts.webcontentassessor.com/scripts/809601e9f32c1696f8d374d96c2bf1fb9d7c04483439948710942594991f62da', true);
        } else if (/reviersport\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://scripts.webcontentassessor.com/scripts/1a103e068523c9d47481ee56c78e48246d633df694c05331024914b6e1f27150', true);
        } else if (/myself\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://scripts.webcontentassessor.com/scripts/4000c98aa6467378ea27d5423802a0137e9e92f04299696708cc3b3f76c4bf0e', true);
        } else if (/abendblatt\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://scripts.webcontentassessor.com/scripts/e7450f09cbe93bce4faa60f07f3c0110e45a90a2e262234b7f45a8ddd68c7a6c', true);
        } else if (/tvdigital\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://scripts.webcontentassessor.com/scripts/0eadf8c610c9345f23b564765f683b455bf6a767f9b6cd1bf472b2893cb0333e', true);
        } else if (/bildderfrau\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://scripts.webcontentassessor.com/scripts/a10cd704ce9dd6e22feb5cc057984487372adce1832b5120a2862e74ac55f91c', true);
        } else if (/gofeminin\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://scripts.webcontentassessor.com/scripts/cf3d6de4a2fb7aef3a25fc508c75f84d40f954588bb576c7d7b1879c0d33560d', true);
        } else if (!/hoerzu|derwesten|morgenpost|waz|myself|abendblatt|tvdigital|bildderfrau|gofeminin\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://scripts.webcontentassessor.com/scripts/4e159b5e6d0dbcd2e911ac4240e0ed5ec649bf6d2c8ea35334edcc2dbd2e6bec', true);
        }
        // <---- The Media Trust ---

        //  --- Adnami Integration --->
        if (/derwesten\.de/.test(window.location.href)){
        Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.derwesten.de.js', true);
        } else if (/hoerzu\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.hoerzu.de.js', true);
        } else if (/morgenpost\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.morgenpost.de.js', true);
        } else if (/waz\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.waz.de.js', true);
        } else if (/reviersport\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.reviersport.de.js', true);
        } else if (/myself\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.myself.de.js', true);
        } else if (/abendblatt\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.abendblatt.de.js', true);
        } else if (/tvdigital\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.tvdigital.de.js', true);
        } else if (/bildderfrau\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.bildderfrau.de.js', true);
        } else if (/gofeminin\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.gofeminin.de.js', true);
        } else if (/wmn\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.wmn.de.js', true);
        } else if (/futurezone\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.futurezone.de.js', true);
        } else if (/moin\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.moin.de.js', true);
        } else if (/news38\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.news38.de.js', true);
        } else if (/thueringen24\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.thueringen24.de.js', true);
        } else if (/imtest\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.imtest.de.js', true);
        } else if (/eatclub\.tv/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.eatclub.de.js', true);
        } else if (/thueringer-allgemeine\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.thueringer-allgemeine.de.js', true);
        } else if (/braunschweiger-zeitung\.de/.test(window.location.href)){
            Spark.initService["createScript"]('https://macro.adnami.io/macro/hosts/adsm.macro.braunschweiger-zeitung.de.js', true);
        }
        // <---- Adnami Integration ---

         
        
        if (typeof datalist["refrehParameter"] !== "undefined" && datalist["refrehParameter"].length > 0) {
            Spark.refrehParameter = datalist["refrehParameter"];
        }
        
        if (/hoerzu/.test(window.location.href) && /tv-programm/.test(window.location.href)) {
            Spark.onClickEpg();
        }
       
        if(typeof datalist["thirdrdpartyScript"] !== "undefined"){
             datalist["thirdrdpartyScript"].forEach(Spark.initService["createScript"]);
        }
        if(typeof datalist["thirdrdpartyImage"] !== "undefined"){
             datalist["thirdrdpartyScript"].forEach(Spark.initService["setImageUrl"])
        }
        if(typeof datalist["thirdrdpartyIframe"] !== "undefined"){
            datalist["thirdrdpartyIframe"].forEach(Spark.initService["setIframeUrl"])
        }
          
        if(typeof datalist["targetings"] !== "undefined"){
            Spark.definitionService["targetings"](datalist["targetings"]);
            for (const [key, value] of Object.entries(datalist["targetings"])) {
                if (value !== "") {
                   Spark.targetings[key] = value;         
                 }
              }
           } 
       
       
        if(typeof datalist["adslots"] !== "undefined" && !Spark.deactivateAdRequest){
            //console.log('### spark - adslots');
           var adslots = datalist["adslots"];
          
           //var headerBiddingSlots = [];
           //var nonHeaderBiddingSlots = [];
           googletag.cmd.push(function() {
           if (Spark.device == "mob") { 
             if (/wmn\.de|eatclub\.tv|futurezone\.de|selfies\.com|imtest\.de|hoerzu\.de|hoerzu\.at|m\.tvdirekt\.de|mobil\.4players\.de/.test(window.location.href) || Spark.mob_anchor){
                 if(/73932\/Tekken_Hybrid|85280\/ASUS/.test(window.location.href) || /article\/special\/85392/.test(window.location.href) || /news\/2206838/.test(window.location.href) || /article\/special\/85423/.test(window.location.href) || /reviersport.de\/sofatrainer/.test(window.location.href) || datalist.siteName == 'app_berlinlive' || datalist.siteName == 'app_4players'){
                    Spark.mob_anchor = false;
                 } else {
                    var anchorSlot = googletag.defineSlot('/39216077/'+datalist['siteName']+'/'+datalist['zoneName']+'/anchor1', [[300,50],[320,50],[300,75],[320,75],[320,100],[300,100]], 'anchor1').addService(googletag.pubads());
                    Spark.debugService.debuggingArray.push('Spark: '+'/39216077/'+datalist['siteName']+'/'+datalist['zoneName']+'/anchor1 defined with size '+[[300,50],[320,50],[300,75],[320,75],[320,100],[300,100]]+' '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]); 
                    anchorSlot.setTargeting('pos', 'anchor1');
                    //Spark.targetings["pos"] = 'anchor1';
                    anchorSlot.setTargeting("refresh", "initial");
                    if (Spark.deactivateRubicon) {
                        Spark.nonHeaderBiddingSlots.push(anchorSlot);
                    }else{
                        Spark.headerBiddingSlots.push(anchorSlot);
                    }
                    
                    if (Spark.amazon) {
                        var amazonAnchorSlotObject = {
                        slotID:  'anchor1',
                        slotName: '/39216077/'+datalist['siteName']+'/'+datalist['zoneName']+'/anchor1',
                        sizes: [[300,50],[320,50],[300,75],[320,75],[320,100],[300,100]]
                        };

                        Spark.amazonSlotsArray.push(amazonAnchorSlotObject);
                    }
                
                        Spark.createMobAnchor();
                        Spark.mob_anchor = false;
                 }                
                   
                googletag.pubads().addEventListener("slotResponseReceived",function(event){
                    if(/anchor1$/.test(event.slot.getAdUnitPath())){
                        Spark.showAnchorAdframe();
                    }; 
                });   
               

                googletag.pubads().addEventListener("slotRenderEnded",function(event){
                    if(!event.isEmpty && /anchor1$/.test(event.slot.getAdUnitPath())){
                        document.getElementById("mob_anchor_ad").style.display = 'block';
                       }; 
                  });
                     
                  
               
             }
           }  
           if (!Spark.picountBool) {
             var picountSlot = googletag.defineSlot('/39216077/'+datalist['siteName']+'/'+datalist['zoneName']+'/'+'picount', [[1,1]], 'picount').addService(googletag.pubads());
                 picountSlot.setTargeting('pos', 'picount');
                 picountSlot.setTargeting("refresh", "initial");
                if (Spark.deactivateRubicon) {
                    Spark.nonHeaderBiddingSlots.push(picountSlot);
                }else{
                    Spark.headerBiddingSlots.push(picountSlot);
                }
                 if (Spark.amazon) {
                        var amazonPicountSlotObject = {
                        slotID:  'picount',
                        slotName: '/39216077/'+datalist['siteName']+'/'+datalist['zoneName']+'/picount',
                        sizes: [[1,1]]
                        };

                        Spark.amazonSlotsArray.push(amazonPicountSlotObject);
                }
             Spark.adslots_norefresh.push('picount');
             Spark.picountBool = true;
           }  
              adslots.forEach(function(element){
            
                  if (Spark.rubicon) {
                      if (typeof element['headerbidding'] === "undefined" ) {
                         var headerbidding = true;
                          }else{
                         var headerbidding = element['headerbidding'];
                     }
                  }else{
                         var headerbidding = false;
                }

                if (element.name == 'pos2') {
                    if (window.location.host != 'www.hoerzu.at') {
                           element.sizes.push([300,220]);
                    }
                    if (Spark.device == "mob") { 
                         if (/wmn\.de/.test(window.location.href)){
                             element.sizes.push([300,600]);
                             Spark.createUnderstitial(element['id']);
                         }
                     }
                }

                if (element.name == 'po1') { 
                    if (/4players|moin|thueringen24|derwesten|news38|berlin-live|bildderfrau|schlager|selfies|wmn|veggieboom|einfachschoen|genialetricks|heftig|leckerschmecker|riquisimo|scrum|bonap|gofeminin/.test(window.location.href)) {
                        if (Spark.device == "sta"){
                            element.sizes.push([970,540],[300,250],[300,400]);
                        } else if (Spark.device == "mob" && !Spark.definitionService.containsArray(element.sizes, [300, 250])){
                            element.sizes.push([300,250],[300,400]);
                        }                        
                    }
                }

                 if (element.name == 'sb1' && Spark.definitionService.containsArray(element.sizes, [1280, 90]) && window.location.host != 'www.hoerzu.at') {
                    element.sizes.push([970,170]);
                }

               if (typeof element['sizes'] === "undefined" || element['sizes'].length == 0) {
                
                 var admoSlot = googletag.defineOutOfPageSlot('/39216077/'+datalist['siteName']+'/'+datalist['zoneName']+'/'+element['name'], element['id']).addService(googletag.pubads());
                Spark.debugService.debuggingArray.push('Spark: '+'/39216077/'+datalist['siteName']+'/'+datalist['zoneName']+'/'+element['name']+' defined '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]); 
            
                }else{
                  //console.log('### spark - defineSlot' + element['name']);
                 
                  var admoSlot = googletag.defineSlot('/39216077/'+datalist['siteName']+'/'+datalist['zoneName']+'/'+element['name'], element['sizes'], element['id']).addService(googletag.pubads());
                  Spark.debugService.debuggingArray.push('Spark: '+'/39216077/'+datalist['siteName']+'/'+datalist['zoneName']+'/'+element['name']+' defined with size '+element['sizes']+' '+ new Date().toISOString().replace(/T/, ' ').replace(/Z/, ' ').split(" ")[1]); 
            
                }
                
                 for (const [key, value] of Object.entries(element["targetings"])) {
                         admoSlot.setTargeting(key, value);
                         //Spark.targetings[key] = value;
                 }
                 
                 admoSlot.setTargeting("refresh", "initial");
                 //Spark.targetings['refresh'] = 'initial';

                 if (typeof element["setCollapseEmptyDiv"] !== "undefined" && element["setCollapseEmptyDiv"] == 2) {
                     admoSlot.setCollapseEmptyDiv(true,true);
                 }else{
                     admoSlot.setCollapseEmptyDiv(true);
                 } 
                  if (typeof element["sizeMapping"] !== "undefined") {
                    var mapping = googletag.sizeMapping();
                       element["sizeMapping"].forEach(function(arr){ 
                       mapping = mapping.addSize(arr[0],arr[1]);
                     })
                    
                     mapping = mapping.build();
                     admoSlot.defineSizeMapping(mapping);
                  }
                   
                    if (typeof element["sizeMapping"] !== "undefined" && headerbidding) {
                    var rubicon_array = new Array();
                    element["sizeMapping"].forEach(function(arr){
                      var rubicon_object = new Object();
                      rubicon_object.minViewPort = arr[0];
                      rubicon_object.sizes = arr[1];
                      rubicon_array.push(rubicon_object);
                    });
                     Spark.rubicon_size_mapping[element['id']] = rubicon_array; 
                    }
                  
                  if (element["noRefresh"]) {
                       Spark.adslots_norefresh.push(element['id']);
                  } 

                  if (headerbidding == false || Spark.deactivateRubicon) {
                        //console.log('### spark push nonHeaderBiddingSlots');
                       Spark.nonHeaderBiddingSlots.push(admoSlot);
                  }else{
                        //console.log('### spark push headerBiddingSlots');
                       Spark.headerBiddingSlots.push(admoSlot);
                     if (typeof element['sizes'] !== "undefined" && element['sizes'].length > 0){   
                      if(Spark.amazon){
                      var amazonSlotObject = {
                      slotID:  element['id'],
                      slotName: '/39216077/'+datalist['siteName']+'/'+datalist['zoneName']+'/'+element['name'],
                      sizes: element['sizes']
                      };

                      Spark.amazonSlotsArray.push(amazonSlotObject);
                    }
                   } 
                  }
              
            });
                googletag.pubads().setTargeting("advelvet", (Math.floor(Math.random() * 20) + 1) + ""); 
                googletag.pubads().enableSingleRequest();
                googletag.pubads().disableInitialLoad();

                if (typeof datalist["exclusive"] !== "undefined" && datalist["exclusive"]) {
                    googletag.pubads().setTargeting('exclusive',datalist["exclusive"]);
                }
                
                //googletag.pubads().collapseEmptyDivs(true);
                googletag.pubads().setTargeting('spark','true');
                Spark.targetings['spark'] = "true";
              if (screen.width >= 1520) {
                googletag.pubads().setTargeting('screen_width','1520');
                Spark.targetings['screen_width'] = "1520";
              } else if (screen.width >= 1500) {
                googletag.pubads().setTargeting('screen_width','1500');
                Spark.targetings['screen_width'] = "1500";
              } else if (screen.width >= 1300) {
                googletag.pubads().setTargeting('screen_width','1300');
                Spark.targetings['screen_width'] = "1300";
              } else if (screen.width >= 1280) {
                 googletag.pubads().setTargeting('screen_width','1280');
                 Spark.targetings['screen_width'] = "1280";
              } else if (screen.width >= 1100) {
                 googletag.pubads().setTargeting('screen_width','1100');
                 Spark.targetings['screen_width'] = "1100";
              } else if (screen.width >= 1000) {
                 googletag.pubads().setTargeting('screen_width','1000');
                 Spark.targetings['screen_width'] = "1000";
              } else if (screen.width >= 900) {
                 googletag.pubads().setTargeting('screen_width','900');
                 Spark.targetings['screen_width'] = "900";
              } else if (screen.width >= 800) {
                 googletag.pubads().setTargeting('screen_width','800');
                 Spark.targetings['screen_width'] = "800";
              } else if (screen.width >= 600) {
                 googletag.pubads().setTargeting('screen_width','600');
                 Spark.targetings['screen_width'] = "600";
              } else if (screen.width >= 414) {
                 googletag.pubads().setTargeting('screen_width','414');
                 Spark.targetings['screen_width'] = "414";
              } else if (screen.width >= 375) {
                 googletag.pubads().setTargeting('screen_width','375');
                 Spark.targetings['screen_width'] = "375";
              }
              if (window.innerWidth >= 1520) {
                googletag.pubads().setTargeting('browser_width','1520');
                Spark.targetings['browser_width'] = "1520";
              } else if (window.innerWidth >= 1500) {
                googletag.pubads().setTargeting('browser_width','1500');
                Spark.targetings['browser_width'] = "1500";                  
              } else if (window.innerWidth >= 1300) {
                googletag.pubads().setTargeting('browser_width','1300');
                Spark.targetings['browser_width'] = "1300";
              } else if (window.innerWidth >= 1280) {
                googletag.pubads().setTargeting('browser_width','1280');
                Spark.targetings['browser_width'] = "1280";
              } else if (window.innerWidth >= 1100) {
                googletag.pubads().setTargeting('browser_width','1100');
                Spark.targetings['browser_width'] = "1100";
              } else if (window.innerWidth >= 1000) {
                googletag.pubads().setTargeting('browser_width','1000');
                Spark.targetings['browser_width'] = "1000";
              } else if (window.innerWidth >= 900) {
                googletag.pubads().setTargeting('browser_width','900');
                Spark.targetings['browser_width'] = "900";
              } else if (window.innerWidth >= 800) {
                googletag.pubads().setTargeting('browser_width','800');
                Spark.targetings['browser_width'] = "800";
              } else if (window.innerWidth >= 600) {
                googletag.pubads().setTargeting('browser_width','600');
                Spark.targetings['browser_width'] = "600";
              } else if (window.innerWidth >= 414) {
                googletag.pubads().setTargeting('browser_width','414');
                Spark.targetings['browser_width'] = "414";
              } else if (window.innerWidth >= 375) {
                googletag.pubads().setTargeting('browser_width','375');
                Spark.targetings['browser_width'] = "375";
              }
                
                if (Spark.iab_str != "-1") {
                    googletag.pubads().setTargeting('iab',Spark.iab_str.split(","));
                }
                if (Spark.funke_contextual != "-1") { 
                    googletag.pubads().setTargeting('ctx',Spark.funke_contextual.split(","));
                }

                if (Spark.artixcallError) {
                    googletag.pubads().setTargeting("ctx", 'err001');
                }
                if (Spark.artixCallActive && Spark.funke_contextual == "-1") {
                    googletag.pubads().setTargeting("ctx", 'err002');
                }


                if (Spark.audix_str != "-1") { 
                    googletag.pubads().setTargeting('audix',Spark.audix_str.split(","));
                }
                if (Spark.domain_user_id != "-1") { 
                    googletag.pubads().setTargeting('dn',Spark.domain_user_id);
                }
                if (Spark.audixcallError) {
                    googletag.pubads().setTargeting("audix", 'err001');
                }
                if (Spark.audixCallActive && Spark.audix_str == "-1") {
                    googletag.pubads().setTargeting("audix", 'err002');
                }

                googletag.enableServices(); 

           Spark.boolDefineSlots = true;
           Spark.calladserver(1);
           
            });
        }


        if (typeof datalist["mob_anchor"] !== "undefined" && datalist["mob_anchor"] == true) {
              Spark.mob_anchor = true;   
        }
        if (typeof datalist["adrefresh"] === "undefined" || datalist["adrefresh"]) {
            Spark.adrefresh();
        }

        if(typeof datalist["mob_interstitial"] !== "undefined" && datalist["mob_interstitial"] == true){
                Spark.mob_interstitial = true;       
        }

        Spark.snowplowTracking();       
         
        
          //Spark.debugService.debuggingArray = debugArray; 
             if (urlParams.has('adldebug') && urlParams.get('adldebug') == "true") {
                Spark.debugService["getDebug"]();
          } 
        }
      }
        
          Spark.cmd.forEach(function(func){
                    func(); // run your function
         });
   
          window.Spark.cmd = { 
               push: function(f){ 
                    f();
          }
    };  