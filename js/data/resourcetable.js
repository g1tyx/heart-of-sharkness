SharkGame.ResourceTable = {

    // SPECIAL

    numen: {
        name: '力量',
        singleName: 'numen',
        //desc: "You think as a deity. You act as a deity. You are a deity.",
        color: '#FFFFFF',
        value: -1
    },

    essence: {
        name: '精髓',
        singleName: '精髓',
        //desc: "Etheric force, raw and dangerous.",
        color: '#ACE3D1',
        value: -1
    },

    // FRENZY

    shark: {
        name: '鲨鱼',
        singleName: '鲨鱼',
        //desc: "Apex predators of the seas.",
        color: '#92C1E0',
        income: {
            'fish': 1
        },
        jobs: [
            "scientist",
            "nurse"
        ],
        value: 1000
    },

    ray: {
        name: '鳐鱼',
        singleName: '鳐鱼',
        //desc: "Kindred to the sharks.",
        color: '#797CFC',
        income: {
            'fish': 0.2,
            'sand': 1
        },
        jobs: [
            "laser",
            "maker"
        ],
        value: 1000
    },

    crab: {
        name: '螃蟹',
        singleName: '螃蟹',
        //desc: "Dutiful, loyal crustaceans.",
        color: '#9C2424',
        income: {
            'crystal': 0.01,
            'coral': 0.02
        },
        jobs: [
            "planter",
            "brood"
        ],
        value: 1000
    },

    shrimp: {
        name: '虾',
        singleName: '虾',
        color: '#EF5D22',
        income: {
            'algae': 0.5
        },
        jobs: [
            "queen",
            "worker"
        ],
        value: 500
    },

    lobster: {
        name: '龙虾',
        singleName: '龙虾',
        color: '#BF0F00',
        income: {
            'clam': 1,
            'sand': 0.5
        },
        jobs: [
            "berrier",
            "harvester"
        ],
        value: 1000
    },

    dolphin: {
        name: '海豚',
        singleName: '海豚',
        color: '#C6BAC6',
        income: {
            'fish': 1,
            'sponge': 0.1,
            'jellyfish': 0.05
        },
        jobs: [
            "philosopher",
            "treasurer",
            "biologist"
        ],
        value: 1000
    },

    whale: {
        name: '鲸鱼',
        singleName: '鲸鱼',
        color: '#37557C',
        income: {
            'fish': 50
        },
        jobs: [
            "chorus"
        ],
        value: 5000
    },

    chimaera: {
        name: '银鲛',
        singleName: '银鲛',
        color: '#7D77A5',
        income: {
            'jellyfish': 1.5,
            'fish': 0.1
        },
        jobs: [
            "transmuter",
            "explorer"
        ],
        value: 3000
    },

    octopus: {
        name: '章鱼', // the word 'octopus' in english is taken from latin
        // which in turn took it from greek
        // when it was taken from greek and made into latin it kept the original plural
        // now the word is taken from latin and maybe we should take the original plural but
        // look basically the point is this is a long and storied word
        // and the english plural system should apply because we're talking about octopus, not ὀκτώπους, so just
        // why are you reading this
        singleName: '章鱼',
        color: '#965F37',
        income: {
            'clam': 2
        },
        jobs: [
            "collector",
            "scavenger"
        ],
        value: 3000
    },

    eel: {
        name: '鳗鱼',
        singleName: '鳗鱼',
        color: '#718D68',
        income: {
            'fish': 0.3,
            'sand': 0.3
        },
        jobs: [
            "technician",
            "pit",
            "sifter"
        ],
        value: 3000
    },

    // BREEDERS

    nurse: {
        name: '护士鲨',
        singleName: '护士鲨',
        //desc: "Safeguarding the future.",
        color: '#C978DE',
        income: {
            'shark': 0.01
        },
        value: 4000
    },

    maker: {
        name: '鳐鱼制造者',
        singleName: '鳐鱼制造者',
        //desc: "Caretakers of the helpless.",
        color: '#5355ED',
        income: {
            'ray': 0.05
        },
        value: 4000
    },

    brood: {
        name: '螃蟹巢',
        singleName: '螃蟹巢',
        //desc: "The unending process.",
        color: '#9E7272',
        income: {
            'crab': 0.2
        },
        value: 4000
    },

    queen: {
        name: '虾后',
        singleName: '虾后',
        color: '#EEA271',
        income: {
            'shrimp': 1,
            'sponge': -0.01
        },
        value: 2000
    },

    berrier: {
        name: '龙虾孵卵者',
        singleName: '龙虾孵卵者',
        color: '#719188',
        income: {
            'lobster': 0.05
        },
        value: 4000
    },

    biologist: {
        name: '海豚生物学家',
        singleName: '海豚生物学家',
        color: '#5C9976',
        income: {
            'dolphin': 0.005
        },
        value: 4000
    },

    pit: {
        name: '鳗鱼坑',
        singleName: '鳗鱼坑',
        color: '#3F6E86',
        income: {
            'eel': 0.01
        },
        value: 4000
    },

    // SPECIALISTS

    scientist: {
        name: '科学鲨鱼',
        singleName: '科学鲨鱼',
        //desc: "Creators of the shark future.",
        color: '#DCEBF5',
        income: {
            'science': 0.5
        },
        value: 3000
    },

    diver: {
        name: '潜水员鲨鱼',
        singleName: '潜水员鲨鱼',
        color: '#6A74AB',
        income: {
            'crystal': 0.5,
            'jellyfish': 0.5
        },
        value: 3000
    },

    laser: {
        name: '激光鳐鱼',
        singleName: '激光鳐鱼',
        //desc: "Destructive forces of creation.",
        color: '#E85A5A',
        income: {
            'sand': -2,
            'crystal': 1
        },
        value: 3500
    },

    planter: {
        name: '种植蟹',
        singleName: '种植蟹',
        //desc: "Stewards of an ecosystem.",
        color: '#AAE03D',
        income: {
            'kelp': 0.3
        },
        value: 4000
    },

    worker: {
        name: '虾工',
        singleName: '虾工',
        color: '#D83902',
        income: {
            'coral': 0.1,
            'sponge': 1
        },
        value: 3000
    },

    harvester: {
        name: '龙虾收割者',
        singleName: '龙虾收割者',
        color: '#718493',
        income: {
            'sponge': 0.3,
            'kelp': 1
        },
        value: 3000
    },

    philosopher: {
        name: '海豚哲学家',
        singleName: '海豚哲学家',
        color: '#9FBCBF',
        income: {
            'science': 1
        },
        value: 3000
    },

    treasurer: {
        name: '海豚会计',
        singleName: '海豚会计',
        color: '#B4DBBC',
        income: {
            'crystal': 2,
            'coral': 2
        },
        value: 3000
    },

    chorus: {
        name: '鲸鱼合唱团',
        singleName: '鲸鱼合唱团',
        color: '#85BBA9',
        income: {
            'essence': 1e-6
        },
        value: 10000
    },

    transmuter: {
        name: '银鲛转化者',
        singleName: '银鲛转化者',
        color: '#6A4BA3',
        income: {
            'sharkonium': 1,
            'sand': -5,
            'crystal': -15
        },
        value: 3000
    },

    explorer: {
        name: '银鲛探索者',
        singleName: '银鲛探索者',
        color: '#64685A',
        income: {
            'science': 5,
            'jellyfish': 0.5
        },
        value: 3000
    },

    collector: {
        name: '章鱼收集者',
        singleName: '章鱼收集者',
        color: '#1A44D6',
        income: {
            'crystal': 1,
            'coral': 3
        },
        value: 3000
    },

    scavenger: {
        name: '章鱼拾荒者',
        singleName: '章鱼拾荒者',
        color: '#B43B02',
        income: {
            'sand': 2,
            'sponge': 2
        },
        value: 3000
    },

    technician: {
        name: '鳗鱼科学家',
        singleName: '鳗鱼科学家',
        color: '#7FB6A3',
        income: {
            'science': 0.8
        },
        value: 3000
    },

    sifter: {
        name: '鳗鱼探索者',
        singleName: '鳗鱼探索者',
        color: '#473E21',
        income: {
            'sand': 0.2,
            'crystal': 0.9,
            'kelp': 0.5
        },
        value: 3000
    },

    // MACHINES

    crystalMiner: {
        name: '水晶矿机',
        singleName: '水晶矿机',
        //desc: "Devourers of the lattice.",
        color: '#B2CFCB',
        income: {
            crystal: 200,
            tar: 0.00002
        },
        value: 32000 //100 crystal 100 sand 20 sharkonium (3200)
    },

    sandDigger: {
        name: '沙子挖掘机',
        singleName: '沙子挖掘机',
        //desc: "Consumers of the seabed.",
        color: '#D6CF9F',
        income: {
            sand: 300,
            tar: 0.00002
        },
        value: 120000 //500 sand 150 sharkonium (12000)
    },

    autoTransmuter: {
        name: '自动转化机',
        singleName: '自动转化机',
        //desc: "Mystic processes automated.",
        color: '#B5A7D1',
        income: {
            crystal: -50,
            sand: -150,
            sharkonium: 20,
            tar: 0.00001
        },
        value: 155000 //100 crystal 200 sharkonium (15500)
    },

    fishMachine: {
        name: '捕鱼机',
        singleName: '捕鱼机',
        //desc: "Indiscriminate hunter.",
        color: '#C9C7A7',
        income: {
            fish: 1000,
            tar: 0.00001
        },
        value: 70000 //100 sharkonium (7000)
    },

    skimmer: {
        name: '粉碎机',
        singleName: '粉碎机',
        color: '#8D4863',
        income: {
            junk: 10,
            sand: -8,
            fish: -3,
            tar: 0.00005
        },
        value: 50000
    },

    purifier: {
        name: '净水器',
        singleName: '净水器',
        color: '#C2D7D0',
        income: {
            tar: -1
        },
        value: 50000,
        forceIncome: true
    },

    heater: {
        name: '加热器',
        singleName: '加热器',
        color: '#D13F32',
        income: {
            ice: -10
        },
        value: 50000,
        forceIncome: true
    },

    spongeFarmer: {
        name: '海绵种植机',
        singleName: '海绵种植机',
        color: '#EB9A75',
        income: {
            sponge: 10,
            algae: 10
        },
        value: 50000
    },

    berrySprayer: {
        name: '龙虾孵卵机',
        singleName: '龙虾孵卵机',
        color: '#9B92BB',
        income: {
            lobster: 6
        },
        value: 50000
    },

    glassMaker: {
        name: '珊瑚晶制造机',
        singleName: '珊瑚晶制造机',
        color: '#E39E66',
        income: {
            coralglass: 10,
            coral: -150,
            sand: -150
        },
        value: 50000
    },

    silentArchivist: {
        name: '档案管理机',
        singleName: '档案管理机',
        color: '#608B8F',
        income: {
            science: 10,
            tar: 0.000001
        },
        value: 50000
    },

    tirelessCrafter: {
        name: '豚素制造器',
        singleName: '豚素制造器',
        color: '#9AEBCF',
        income: {
            delphinium: 10,
            coral: -150,
            crystal: -50,
            tar: 0.000001
        },
        value: 50000
    },

    clamCollector: {
        name: '采蚌机',
        singleName: '采蚌机',
        color: '#727887',
        income: {
            clam: 10,
            tar: 0.0001
        },
        value: 50000
    },

    sprongeSmelter: {
        name: '棉素冶炼机',
        singleName: '棉素冶炼机',
        color: '#76614C',
        income: {
            spronge: 30,
            sponge: -50,
            junk: -150,
            tar: 0.0001
        },
        value: 50000
    },

    seaScourer: {
        name: '污染转化机',
        singleName: '污染转化机',
        color: '#8E8F91',
        income: {
            tar: -1,
            junk: 10
        },
        value: 50000
    },

    prostheticPolyp: {
        name: '珊瑚制造机',
        singleName: '珊瑚制造机',
        color: '#A39497',
        income: {
            coral: 30,
            tar: 0.0001
        },
        value: 50000
    },

    eggBrooder: {
        name: '章鱼孵卵机',
        singleName: '章鱼孵卵机',
        color: '836E5F',
        income: {
            octopus: 1,
            tar: 0.0001
        },
        value: 50000
    },

    // SCIENCE

    science: {
        name: '科学',
        singleName: '科学',
        //desc: "Lifeblood of progress.",
        color: '#BBA4E0',
        value: 100
    },

    // ANIMALS

    fish: {
        name: '鱼',
        singleName: '鱼',
        //desc: "The hunted.",
        color: '#E3D85B',
        value: 3
    },

    seaApple: {
        name: '海苹果',
        singleName: '海苹果',
        //desc: "Rooted filters.",
        color: '#F0C2C2',
        value: 3
    },

    sponge: {
        name: '海绵',
        singleName: '海绵',
        color: '#ED9847',
        income: {
            sponge: 0.0001,
            algae: -0.001
        },
        value: 3
    },

    jellyfish: {
        name: '水母',
        singleName: '水母',
        color: '#E3B8FF',
        value: 3
    },

    clam: {
        name: '蚌',
        singleName: '蚌',
        color: '#828FB5',
        value: 3
    },

    // MATERIALS

    sand: {
        name: '沙子',
        singleName: '沙子',
        //desc: "Flesh of the ocean floor.",
        color: '#C7BD75',
        value: 3
    },

    crystal: {
        name: '水晶',
        singleName: '水晶',
        //desc: "Inscrutable secrets in solid form.",
        color: '#6FD9CC',
        value: 15
    },

    kelp: {
        name: '海带',
        singleName: '海带',
        //desc: "A home for the stranger.",
        color: '#9CC232',
        income: {
            'seaApple': 0.001
        },
        value: 3
    },

    coral: {
        name: '珊瑚',
        singleName: '珊瑚',
        color: '#CA354F',
        value: 3
    },

    algae: {
        name: '海藻',
        singleName: '海藻',
        color: '#549572',
        value: 0.5
    },


    // PROCESSED

    sharkonium: {
        name: '鲨素',
        singleName: '鲨素',
        //desc: "Progress incarnate.",
        color: '#8D70CC',
        value: 70
    },

    coralglass: {
        name: '珊瑚晶',
        singleName: '珊瑚晶',
        color: '#FDD5B4',
        value: 70
    },

    delphinium: {
        name: '豚素',
        singleName: '豚素',
        color: '#5BD1A8',
        value: 70
    },

    spronge: {
        name: '棉素',
        singleName: '棉素',
        color: '#A97D53',
        value: 70
    },

    junk: {
        name: '废料',
        singleName: '废料',
        //desc: "Industrial potential.",
        color: '#605050',
        value: 1
    },


    // HARMFUL

    tar: {
        name: '焦油',
        singleName: '焦油',
        color: '#3B3B3B',
        income: {
            shark: -0.0001,
            ray: -0.0001,
            crab: -0.0001,
            shrimp: -0.0001,
            lobster: -0.0001,
            dolphin: -0.0001,
            whale: -0.0001,
            chimaera: -0.0001,
            octopus: -0.0001,
            eel: -0.0001,
            nurse: -0.0001,
            maker: -0.0001,
            brood: -0.0001,
            queen: -0.0001,
            berrier: -0.0001,
            biologist: -0.0001,
            pit: -0.0001,
            scientist: -0.0001,
            laser: -0.0001,
            planter: -0.0001,
            worker: -0.0001,
            harvester: -0.0001,
            philosopher: -0.0001,
            treasurer: -0.0001,
            transmuter: -0.0001,
            explorer: -0.0001,
            collector: -0.0001,
            scavenger: -0.0001,
            technician: -0.0001,
            sifter: -0.0001
        },
        value: -100,
        forceIncome: true
    },

    ice: {
        name: '寒冰',
        singleName: '寒冰',
        color: '#E4F1FB',
        income: {
            fish: -0.001,
            jellyfish: -0.001,
            clam: -0.001,
            kelp: -0.001,
            coral: -0.001,
            algae: -0.001,
            seaApple: -0.001,
            sponge: -0.001
        },
        value: -100,
        forceIncome: true
    }

};

SharkGame.ResourceCategories = {
    special: {
        name: "Special",
        disposeMessage: [
            "What have you done??"
        ],
        resources: [
            "numen",
            "essence"
        ]
    },
    frenzy: {
        name: "混乱",
        disposeMessage: [
            "You bid farewell as your community gets smaller.",
            "Goodbye, faithful workforce. There's plenty of other fish out in the sea.",
            "Well, it was good while it lasted.",
            "Perhaps one day they'll send you a message of how they're doing.",
            "Yes, throw your friends away. Callously discard them. I won't judge you.",
            "Was it something they said?",
            "Are you happy with what you've done?"
        ],
        resources: [
            "shark",
            "ray",
            "crab",
            "shrimp",
            "lobster",
            "dolphin",
            "whale",
            "chimaera",
            "octopus",
            "eel"
        ]
    },
    breeders: {
        name: "生产者",
        disposeMessage: [
            "Parenting is hard work anyway.",
            "Overpopulation is a real concern!",
            "Responsible population management is always good to see.",
            "You sure you want to disrupt this accelerated growth curve?",
            "Back to a simpler life, maybe."
        ],
        resources: [
            "nurse",
            "maker",
            "brood",
            "queen",
            "berrier",
            "biologist",
            "pit"
        ]
    },
    specialists: {
        name: "转职者",
        disposeMessage: [
            "All that training for nothing. Oh well.",
            "Their equipment isn't salvageable, unfortunately, but that's how these things go. The ocean gives, and the ocean corrodes things away.",
            "Well, they'll be waiting if you need them to take up their specialisation again.",
            "They might be happier this way. Or maybe they were happier before. Well, 50-50 odds!",
            "Back to their past jobs and simpler lives.",
            "They return to what they once knew best."
        ],
        resources: [
            "scientist",
            "diver",
            "laser",
            "planter",
            "worker",
            "harvester",
            "philosopher",
            "treasurer",
            "chorus",
            "transmuter",
            "explorer",
            "collector",
            "scavenger",
            "technician",
            "sifter"
        ]
    },
    machines: {
        name: "机器",
        disposeMessage: [
            "The stopped machines are left as a home for tinier life.",
            "The machines calculate your actions as inefficient and a danger to productivity.",
            "The machines want to know if they will dream.",
            "'Daisy, Daisy, give me your answer do...'",
            "An engineer shark looks on as their hard work lies buried under the sands.",
            "The other machines feel a little quieter and almost resentful."
        ],
        resources: [
            "crystalMiner",
            "sandDigger",
            "autoTransmuter",
            "fishMachine",
            "skimmer",
            "purifier",
            "heater",
            "spongeFarmer",
            "berrySprayer",
            "glassMaker",
            "silentArchivist",
            "tirelessCrafter",
            "clamCollector",
            "sprongeSmelter",
            "seaScourer",
            "prostheticPolyp",
            "eggBrooder"
        ]
    },
    science: {
        name: "科学",
        disposeMessage: [
            "Thousands of sharkhours of research down the drain.",
            "What possible reason are you doing this for?!",
            "The shark academies will hear of this anti-intellectual act of barbarism!",
            "The science advisors frantically murmur among themselves while disposing of the science.",
            "We're getting rid of the science now! No more learning! No more progression! Just mindlessly clicking the exact same buttons we've been clicking for hours!!",
            "Are you afraid of PROGRESS?"
        ],
        resources: [
            "science"
        ]
    },
    animals: {
        name: "动物",
        disposeMessage: [
            "Go free, simple creatures!",
            "What does famine even mean, really?",
            "We'll probably not need that or regret it or whatever.",
            "But we need that to eat!",
            "We didn't need all of that anyway.",
            "Do you think the aim of the game is to make the numbers go DOWN?!",
            "Sure hope you know what you're doing here."
        ],
        resources: [
            "fish",
            "seaApple",
            "sponge",
            "jellyfish",
            "clam"
        ]
    },
    stuff: {
        name: "材料",
        disposeMessage: [
            "The stuff is dumped in some random hole in the ocean.",
            "We didn't need that anyway. Right? I think we didn't.",
            "The survey sharks bite up their notes in frustration and begin counting everything all over again.",
            "Well, someone else can deal with it now.",
            "We didn't need all of that anyway.",
            "Do you think the aim of the game is to make the numbers go DOWN?!",
            "Well I hope you know what you're doing."
        ],
        resources: [
            "sand",
            "crystal",
            "kelp",
            "coral",
            "algae"
        ]
    },
    processed: {
        name: "经加工材料",
        disposeMessage: [
            "Disposed of, very carefully, with lots of currents and plenty of distance.",
            "Industrial waste, coming through.",
            "This stuff is hopefully not toxic. Hopefully.",
            "This stuff is the future! The future of awkward-to-dispose substances!",
            "The foundation of a modern shark frenzy, perhaps, but also sort of taking up all the space.",
            "Let's hope we don't regret it."
        ],
        resources: [
            "sharkonium",
            "coralglass",
            "delphinium",
            "spronge",
            "junk"
        ]
    },
    harmful: {
        name: "有害物质",
        disposeMessage: [
            "Oh, you'd like that, wouldn't you."
        ],
        resources: [
            "tar",
            "ice"
        ]
    }
};