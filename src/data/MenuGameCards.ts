import { IGameCards } from './../models/GameCardsModels';
import BgDaysGone from "../img/Bg/DaysGone/DaysGone.jpg"
import BgBeyondTwoSouls from "../img/Bg/BeyondTwoSouls/BeyondTwoSouls.jpg"
import BgDARKSOULSIII from "../img/Bg/DARKSOULSIII/DARKSOULSIII.png"
import BgELDENRING from "../img/Bg/ELDENRING/ELDENRING.jpg"
import BgPacificDrive from "../img/Bg/PacificDrive/PacificDrive.jpg"
import BgTheDarkPicturesAnthologyManofMedan from "../img/Bg/TheDarkPicturesAnthologyManofMedan/TheDarkPicturesAnthologyManofMedan.jpg"
import BgTheWitcher3WildHunt from "../img/Bg/TheWitcher3WildHunt/TheWitcher3WildHunt.jpg"
import BgKingdomComeDeliverancefrom from "../img/Bg/KingdomComeDeliverance/KingdomComeDeliverance.jpg"
import BgHomefrontTheRevolution from "../img/Bg/HomefrontTheRevolution/HomefrontTheRevolution.jpg"
import BgFEAR3 from "../img/Bg/F.E.A.R.3/F.E.A.R.3.jpg"
import BgEvilWest from "../img/Bg/EvilWest/EvilWestMain.jpg"
import BgWHISKERWATERS from "../img/Bg/WHISKERWATERS/WHISKERWATERS.jpg"
import BgDiRTRally from "../img/Bg/DiRTRally/DiRTRally.jpg"
import BgTabletopSimulator from "../img/Bg/TabletopSimulator/TabletopSimulator.jpg"

export const GameCards: IGameCards[] =[
    {
        id: 1,
        image: 'https://steammachine.ru/slider/3122518-462x264.webp',
        platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
        price: 100,
        region: "Россия",
        language: "Русский",
        title: "Days Gone",
        availability: "В наличии",
        description:"Сражайтесь и гоняйте по смертельно опасным дорогам постапокалиптической Америки. Играйте за Дикона Сент-Джона, номада и охотника за наградами, кочующего по разбитым дорогам в поисках смысла жизни в этом приключенческом боевике с открытым миром.",
        currency: "₽",
        bgImage: BgDaysGone,
        filter:{
            mode: ["singleplayer"],
            genreRU: ["Экшен", "Приключения"],
            genre: ["action", "adventures"],
            release: 2021,
            rating: 8
        },
        sliderImg:["https://steammachine.ru/gallery/3122518_80716190910644.jpg", "https://steammachine.ru/gallery/3122518_4016190912107.jpg", "https://steammachine.ru/gallery/3122518_10316190912082.jpg", "https://steammachine.ru/gallery/3122518_59816190912066.jpg"],
        trailer: "https://www.youtube.com/embed/9kCjoIBVWaU?si=Tum_qLma_MIQQMzE",
        characteristics:{
            os:"Windows 10 64-bits",
            cpu: "Intel Core i5-2500K@3.3GHz or AMD FX 6300@3.5GHz",
            ram: "8 GB ОЗУ",
            videocard: "Nvidia GeForce GTX 780 (3 GB) or AMD Radeon R9 290 (4 GB)",
            DirectX: "Версии 11",
        },

    },
    {
        id: 2,
        image: "https://steammachine.ru/slider/3012610-462x264.webp",
        platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
        price: 900,
        currency: "₽",
        region: "Россия",
        language: "Русский",
        title: "Beyond: Two Souls",
        availability: "В наличии",
        description: "Уникальный психологический экшен-триллер Beyond: Two Souls с участием голливудских суперзвезд Эллен Пейдж и Виллема Дефо уносит вас в увлекательное путешествие по всему миру, в котором вы проживете часть удивительной жизни Джоди Холмс",
        bgImage: BgBeyondTwoSouls,
        filter:{
            mode: ["singleplayer"],
            genreRU: ["Экшен", "Приключения"],
            genre: ["action", "adventures"],
            release: 2020,
            rating: 7
        },
        sliderImg:["https://steammachine.ru/gallery/3012610_23916032760252.jpg", "https://steammachine.ru/gallery/3012610_6216032760348.jpg", "https://steammachine.ru/gallery/3012610_30216032760315.jpg", "https://steammachine.ru/gallery/3012610_75316032760303.jpg"],
        trailer: "https://www.youtube.com/embed/MtEoS0MaNyA?si=gWvzTKUagKmvI3QW",
        characteristics:{
            os:"Windows 7 (64 bit)",
            cpu: "Intel Core i5-4430 @ 3.0 GHz or AMD FX-6300 @ 3.5 GHz",
            ram: "4 GB ОЗУ",
            videocard: "Nvidia GeForce GTX 660 with 2GB VRAM or AMD Radeon HD 7870 with 2GB VRAM",
            DirectX: "Версии 11",
        },
    },
    {
        id: 3,
        image: "https://steammachine.ru/slider/2053422-339x194.webp",
        platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
        price: 600,
        currency: "₽",
        region: "Россия",
        language: "Русский",
        title: "DARK SOULS III",
        availability: "В наличии",
        description: "Dark Souls продолжит испытывать игроков на прочность в новой главе знаменитой серии, собравшей множество наград и определившей лицо жанра. Соберитесь с духом и погрузитесь во тьму!",
        bgImage: BgDARKSOULSIII,
        filter:{
            mode: ["singleplayer"],
            genreRU: ["Экшен"],
            genre: ["action"],
            release: 2010,
            rating: 8
        },
        sliderImg:["https://steammachine.ru/gallery/2053422_47614538271326.jpg", "https://steammachine.ru/gallery/2053422_1514538271241.jpg", "https://steammachine.ru/gallery/2053422_11514538271348.jpg", "https://steammachine.ru/gallery/2053422_98514538271309.jpg"],
        trailer: "https://www.youtube.com/embed/cWBwFhUv1-8?si=CtMEbjGagnZmN46r",
        characteristics:{
            os:"Windows 7 SP1 64bit, Windows 8.1 64bit Windows 10 64bit",
            cpu: "Intel Core i3-2100 / AMD FX-6300",
            ram: "4 GB ОЗУ",
            videocard: "NVIDIA GeForce GTX 750 Ti / ATI Radeon HD 7950",
            DirectX: "Версии 11",
        },
    },
    {
        id: 4,
        image: "https://steammachine.ru/slider/3238614-339x194.webp",
        platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
        price: 570,
        currency: "₽",
        region: "Россия",
        language: "Русский",
        title: "ELDEN RING",
        availability: "В наличии",
        description: "НОВЫЙ ФЭНТЕЗИЙНЫЙ РОЛЕВОЙ БОЕВИК. Восстань, погасшая душа! Междуземье ждёт своего повелителя. Пусть благодать приведёт тебя к Кольцу Элден.",
        bgImage: BgELDENRING,
        filter:{
            mode: ['singleplayer', 'cooperative'],
            genreRU: ["Экшен", "Приключения", "RPG"],
            genre: ["action", "adventures", "RPG"],
            release: 2000,
            rating: 10
        },
        sliderImg:["https://steammachine.ru/gallery/3238614_4116360480247.jpg", "https://steammachine.ru/gallery/3238614_59116360479888.jpg", "https://steammachine.ru/gallery/3238614_76216360480139.jpg", "https://steammachine.ru/gallery/3238614_97016360480152.jpg"],
        trailer: "https://www.youtube.com/embed/AKXiKBnzpBQ?si=hafc5MDZUXBs75KT",
        characteristics:{
            os:"Windows 10",
            cpu: "INTEL CORE I5-8400 or AMD RYZEN 3 3300X",
            ram: "12 GB ОЗУ",
            videocard: "NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB",
            DirectX: "Версии 12",
        },
        
    },
    {
        id: 5,
        image: "https://steammachine.ru/slider/4212792-462x264.webp",
        platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
        price: 1500,
        currency: "₽",
        region: "Россия",
        language: "Русский",
        title: "Pacific Drive",
        availability: "В наличии",
        description: "Столкнитесь лицом к лицу с опасностями в Олимпийской зоне отчуждения, где машина — ваш единственный шанс на спасение в этом приключении на выживание! Собирайте ресурсы, грузите их в свой универсал и давите на газ, чтобы выжить.",
        bgImage: BgPacificDrive,
        filter:{
            mode: ["singleplayer"],
            genreRU: ["Экшен", "Приключения", "Инди", "Гонки"],
            genre: ["action", "adventures", "indie", "race"],
            release: 2005,
            rating: 3
        },
        sliderImg:["https://steammachine.ru/gallery/4212792_29817090397542.jpg", "https://steammachine.ru/gallery/4212792_61417090396748.jpg", "https://steammachine.ru/gallery/4212792_63417090397563.jpg", "https://steammachine.ru/gallery/4212792_8617090397525.jpg"],
        trailer: "https://www.youtube.com/embed/1KOb5AIeTLc?si=6ZElstlkO-rfD40d",
        characteristics:{
            os:"Windows 10",
            cpu: "Intel Core i5 8600",
            ram: "16 GB ОЗУ",
            videocard: "Nvidia GTX 1060 6GB",
            DirectX: "Версии 12",
        },
    },
    {
        id: 6,
        image: "https://steammachine.ru/slider/2708102-462x264.webp",
        platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
        price: 450,
        currency: "₽",
        region: "Россия",
        language: "Русский",
        title: "The Dark Pictures Anthology: Man of Medan",
        availability: "В наличии",
        description: "Антология The Dark Pictures — цикл нелинейных киноигр в жанре хоррор с поддержкой игры вдвоём по сети. В Man of Medan пятеро друзей отправились на дайвинг, но шторм превратил их поездку в настоящий кошмар.",
        bgImage: BgTheDarkPicturesAnthologyManofMedan,
        filter:{
            mode: ['singleplayer', 'network'],
            genreRU: ["Приключения"],
            genre: ["adventures"],
            release: 2011,
            rating: 5
        },
        sliderImg:["https://steammachine.ru/gallery/2708102_77415672395009.jpg", "https://steammachine.ru/gallery/2708102_4915672394964.jpg", "https://steammachine.ru/gallery/2708102_51715672395024.jpg", "https://steammachine.ru/gallery/2708102_83415672395015.jpg"],
        trailer: "https://www.youtube.com/embed/OQvo4-Ly-sA?si=8y8VHV55wQJ-VZhH",
        characteristics:{
            os:"Windows 7 64-bit",
            cpu: "Intel Core i5-3470 or AMD FX-8350",
            ram: "8 GB ОЗУ",
            videocard: "NVIDIA GeForce GTX 750 Ti or AMD Radeon HD 7870",
            DirectX: "Версии 11",
        },
        
    },
    {
        id: 7,
        image: "https://steammachine.ru/slider/3428718-462x264.webp",
        platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
        price: 779,
        currency: "₽",
        region: "Россия",
        language: "Русский",
        title: "The Witcher 3: Wild Hunt",
        availability: "В наличии",
        description: "Вы — Геральт из Ривии, наемный убийца чудовищ. Вы путешествуете по миру, в котором бушует война и на каждом шагу подстерегают чудовища. Вам предстоит выполнить заказ и найти Цири — Дитя Предназначения, живое оружие, способное изменить облик этого мира.",
        bgImage: BgTheWitcher3WildHunt,
        filter:{
            mode: ["singleplayer"],
            genreRU: ["Экшен", "Приключения", "RPG"],
            genre: ["action", "adventures", "RPG"],
            release: 2018,
            rating: 7
        },
        trailer: "https://www.youtube.com/embed/Sr-DKyAVU34?si=DBS9sTklxRo_23Ne",
        sliderImg:["https://steammachine.ru/gallery/sh_1744067_3.jpg", "https://steammachine.ru/gallery/sh_1744067_8.jpg", "https://steammachine.ru/gallery/sh_1744067_5.jpg", "https://steammachine.ru/gallery/sh_1744067_4.jpg"],
        characteristics:{
            os:"64-bit Windows 7, 64-bit Windows 8 (8.1) or 64-bit Windows 10",
            cpu: "Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940",
            ram: "6 GB ОЗУ",
            videocard: "Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870",
            DirectX: "Версии 11",
        },
    },
    {
        id: 8,
        image: "https://steammachine.ru/slider/2414058-339x194.webp",
        platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
        price: 490,
        currency: "₽",
        region: "Россия",
        language: "Русский",
        title: "Kingdom Come: Deliverance",
        availability: "В наличии",
        description: "Kingdom Come: Deliverance – это захватывающая РПГ с открытым миром, которая перенесёт вас в эпическое приключение в Священную Римскую империю. Отомстите за смерть ваших родителей, сражаясь с силами вторжения, выполняйте квесты, изменяйте мир своими решениями.",
        bgImage: BgKingdomComeDeliverancefrom,
        filter:{
            mode: ["singleplayer"],
            genreRU: ["Экшен", "Приключения", "RPG"],
            genre: ["action", "adventures", "RPG"],
            release: 2023,
            rating: 6
        },
        trailer: "https://www.youtube.com/embed/HqU9-nbFxkI?si=8LJt3oh2gxoXVtvk",
        sliderImg:["https://steammachine.ru/gallery/2414058_65815165362662.jpg", "https://steammachine.ru/gallery/2414058_1615165362327.jpg", "https://steammachine.ru/gallery/2414058_89615165362613.jpg", "https://steammachine.ru/gallery/2414058_41015165362626.jpg"],
        characteristics:{
            os:"Windows 7/8/8.1/10 (64-разрядная)",
            cpu: "двухъядерный Intel Core i3-6100 3,7 ГГц или аналогичный",
            ram: "8 GB ОЗУ",
            videocard: "GeForce GTX 660 или AMD Radeon HD 7850",
            DirectX: "Версии 11",
        },
    },
    {
        id: 9,
        image: "https://steammachine.ru/slider/2073089-339x194.webp",
        platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
        price: 700,
        currency: "₽",
        region: "Россия",
        language: "Русский",
        title: "Homefront: The Revolution",
        availability: "В наличии",
        description: "Возглавьте сопротивление превосходящим военным силам в партизанской войне в открытом динамичном мире Homefront®: The Revolution и разожгите революцию, а угнетенные поднимутся на борьбу с оккупантами.",
        bgImage: BgHomefrontTheRevolution,
        filter:{
            mode: ["singleplayer"],
            genreRU: ["Экшен", "Приключения"],
            genre: ["action", "adventures"],
            release: 2016,
            rating: 8
        },
        trailer: "https://www.youtube.com/embed/rcXx5C3VbZM?si=2pl1x2GQ959Ji_3g",
        sliderImg:["https://steammachine.ru/gallery/2073089_7314569291167.jpg", "https://steammachine.ru/gallery/2073089_98514569291085.jpg", "https://steammachine.ru/gallery/2073089_89414569291204.jpg", "https://steammachine.ru/gallery/2073089_86714569291193.jpg"],
        characteristics:{
            os:"Windows 7/8/10 all x64",
            cpu: "Intel Core i5-4570T (2.9 GHz) or equivalent or AMD FX-6100 (3.3 GHz) or equivalent",
            ram: "6144 MB ОЗУ",
            videocard: "GeForce GTX 560 TI (1024 MB) or equivalent or Radeon R7 260X (2048 MB) or equivalent",
            DirectX: "Версии 11",
        },
    },
    {
        id: 10,
        image: "https://steammachine.ru/slider/1136105-462x264.webp",
        platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
        price: 500,
        currency: "₽",
        region: "Россия",
        language: "Русский",
        title: "F.E.A.R. 3",
        availability: "В наличии",
        description: "В F.E.A.R. 3 вы найдете все качества, присущие серии F.E.A.R.: ужасающие паранормальные события, жаркие битвы и драматичный сюжет.",
        bgImage: BgFEAR3,
        filter:{
            mode: ['singleplayer', 'cooperative'],
            genreRU: ["Экшен"],
            genre: ["action"],
            release: 2009,
            rating: 2
        },
        trailer: "https://www.youtube.com/embed/V3KQl2br4bg?si=7jXBfgHcx-nQvQcL",
        sliderImg:["https://steammachine.ru/gallery/sh_1136105_2-288x162.webp", "https://steammachine.ru/gallery/sh_1136105_1.jpg", "https://steammachine.ru/gallery/sh_1136105_7.jpg", "https://steammachine.ru/gallery/sh_1136105_16-288x162.webp"],
        characteristics:{
            os:"Windows XP",
            cpu: "Intel Core 2 Duo с тактовой частотой 2,4 ГГц, AMD Athlon X2 4800+",
            ram: "2 GB ",
            videocard: "с 512 МБ видеопамяти (NVIDIA 8800 GT, ATI 3850HD) или лучше",
            DirectX: "9.0c",
        },
        
    },
    {
        id: 11,
        image: "https://steammachine.ru/slider/4135345-462x264.webp",
        platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
        price: 2300,
        currency: "₽",
        region: "Россия",
        language: "Русский",
        title: "Evil West",
        availability: "В наличии",
        description: "Зловещая угроза нависла над Диким Западом. В одиночку или сообща сражайтесь с кровожадными чудищами в беспощадных, взрывных боях и покажите всем, как это делается. Искореняйте полчища вампиров заправленной молнией рукавицей и станьте супергероем Дикого Запада.",
        bgImage: BgEvilWest,
        filter:{
            mode: ['singleplayer', 'cooperative', 'network'],
            genreRU: ["Приключения"],
            genre: ["adventures"],
            release: 2022,
            rating: 9
        },
        trailer: "https://www.youtube.com/embed/5ERcyYnqU9M?si=4liWuiEhqjrxC5pN",
        sliderImg:["https://steammachine.ru/gallery/4135345_43217051423926.jpg", "https://steammachine.ru/gallery/4135345_69317051423997.jpg", "https://steammachine.ru/gallery/4135345_95817051423975.jpg", "https://steammachine.ru/gallery/4135345_37717051423889.jpg"],
        characteristics:{
            os:"Windows 10 (64 bits)",
            cpu: "Intel Core i5-2500K (3.3 GHz) / AMD FX-6300 X6 (3.5 GHz)",
            ram: "8 GB ОЗУ",
            videocard: "4 GB VRAM, GeForce GTX 750 Ti / Radeon RX 460",
            DirectX: "9.0c",
        },
        discount: {
            discountPrice: 233,
            percent: 15
        }
        
    },
    {
        id: 12,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/2171570/capsule_616x353.jpg?t=1714050622",
        platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
        price: 573,
        currency: "₽",
        region: "Россия",
        language: "Русский",
        title: "WHISKER WATERS",
        availability: "В наличии",
        description: "Уникальное отличие Whisker Waters от других ролевых игр в том, что она фокусируется на рыбалке и подходит к ней креативно. Игроки могут использовать множество рыбацких принадлежностей и приемов, исследуя полуоткрытый мир, проходя задания и вылавливая самых разнообразных рыб. Каждая рыба ведёт себя по-своему, что делает рыбалку куда более захватывающей, а радость от каждой выловленной рыбы – незабываемым.",
        bgImage: BgWHISKERWATERS,
        filter:{
            mode: ['singleplayer',],
            genreRU: ["Приключения","Казуальные", "RPG"],
            genre: ["casual", "adventures", "RPG"],
            release: 2022,
            rating: 6
        },
        trailer: "https://www.youtube.com/embed/KQwBok8F0eE?si=55mTa7RthBBZ3jdl",
        sliderImg:["https://assets-prd.ignimgs.com/2023/09/13/whiskerthumb-1694618036750.jpg", "https://cdn.freewebstore.com/origin/788695/71dpsidvl_ac_sl1500__1711413137641.jpg", "https://img.tapimg.net/market/images/5c1d04ad47332af2c89ccdb50e34daf3.jpg?imageView2/2/w/1080/h/1080/q/80/format/jpg/interlace/1/ignore-error/1", "https://img.tapimg.net/market/images/31daeb577dd1a871beeef7a65e561feb.jpg?imageView2/2/w/1080/h/1080/q/80/format/jpg/interlace/1/ignore-error/1"],
        characteristics:{
            os:"Windows 10",
            cpu: "Ryzen 5 3600 or intel i7 9700",
            ram: "8 GB ОЗУ",
            videocard: "NVIDIA GeForce GTX 1650 / AMD equivalent",
            DirectX: "версии 11",
        },
        discount: {
            discountPrice: 400,
            percent: 10
        }
        
    },
    {
        id: 13,
        image: "https://steammachine.ru/slider/1932960-220x126.webp",
        platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
        price: 800,
        currency: "₽",
        region: "Россия",
        language: "Русский",
        title: "DiRT Rally",
        availability: "В наличии",
        description: "DiRT Rally — самая реалистичная из ныне существующих гоночных игр. (Проверено игроками сообщества DiRT, прошедшими 80 милл. миль.) Почувствуйте напряжение пилота, который знает, как высока цена ошибки.",
        bgImage: BgDiRTRally,
        filter:{
            mode: ['singleplayer'],
            genreRU: ["Гонки","Симуляторы", "Спортивные"],
            genre: ["race", "simulator", "sport"],
            release: 2015,
            rating: 4
        },
        trailer: "https://www.youtube.com/embed/E79ofEtVlBg?si=3AS9dHiKsZWgtd87",
        sliderImg:["https://steammachine.ru/gallery/sh_1932960_34.jpg", "https://steammachine.ru/gallery/sh_1932960_42.jpg", "https://steammachine.ru/gallery/sh_1932960_8.jpg", "https://steammachine.ru/gallery/sh_1932960_5.jpg"],
        characteristics:{
            os:"64bit Versions of Windows 7, Windows 8, Windows 10",
            cpu: "AMD FX Series or Intel Core i3 Series",
            ram: "4 GB ОЗУ",
            videocard: "AMD HD5450 or Nvidia GT430 or Intel HD4000 with 1GB of VRAM (DirectX 11 graphics card required)",
            DirectX: "версии 11",
        },
        discount: {
            discountPrice: 399,
            percent: 67 
        }
        
    },
    {
        id: 14,
        image: "https://steammachine.ru/slider/1851982-220x126.webp",
        platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
        price: 600,
        currency: "₽",
        region: "Россия",
        language: "Русский",
        title: "Tabletop Simulator",
        availability: "В наличии",
        description: "Tabletop Simulator - единственный симулятор, в котором вы можете дать волю своей агрессии, перевернув стол! Нет никаких правил, которым нужно следовать: только вы, физическая песочница и ваши друзья. Создавайте собственные игры и играйте, как хотите! Безграничные игровые возможности!",
        bgImage: BgTabletopSimulator,
        filter:{
            mode: ['singleplayer', 'cooperative', 'network'],
            genreRU: ["Казуальные","Симуляторы", "Инди"],
            genre: ["casual", "simulator", "indi" ],
            release: 2015,
            rating: 10
        },
        trailer: "https://www.youtube.com/embed/lKZVGZEuCHo?si=IN6nG5uVzbK89H5G",
        sliderImg:["https://steammachine.ru/gallery/1851982_23714219312892.jpg", "https://steammachine.ru/gallery/1851982_57714219312915.jpg", "https://steammachine.ru/gallery/1851982_82114219313012.jpg", "https://steammachine.ru/gallery/1851982_82714219312995.jpg"],
        characteristics:{
            os:"Windows XP, Windows Vista, Windows 7, Windows 8, Windows 10",
            cpu: "2.0 ГГц",
            ram: "4 GB ОЗУ",
            videocard: "с объемом видеопамяти не менее 256 МБ",
            DirectX: "9.0c",
        },
        discount: {
            discountPrice: 200,
            percent: 3
        }
        
    }
]