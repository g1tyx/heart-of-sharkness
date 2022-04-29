SharkGame.WorldTypes = {
    test: {
        name: "Test",
        desc: "You REALLY shouldn't be seeing this.",
        shortDesc: "testing",
        entry: "You enter a debug ocean.",
        style: "default",
        absentResources: [],
        modifiers: [],
        gateCosts: {
            fish: 1E3,
            sand: 1E3,
            crystal: 1E3,
            kelp: 1E3,
            seaApple: 1E3,
            sharkonium: 1E3
        }
    },
    start: {
        name: "母星",
        desc: "你不该看到这个的",
        shortDesc: "陌生蓝色",
        entry: "你进入一个熟悉的蓝色海洋，你过去的知识都变成了模糊的记忆。",
        style: "default",
        absentResources: [
            "tar",
            "ice",
            "shrimp",
            "lobster",
            "dolphin",
            "whale",
            "chimaera",
            "octopus",
            "eel",
            "queen",
            "berrier",
            "biologist",
            "pit",
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
            "sifter",
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
            "sponge",
            "jellyfish",
            "clam",
            "coral",
            "algae",
            "coralglass",
            "delphinium",
            "spronge"
        ],
        modifiers: [],
        // initial gate cost, scaled by planetary level
        gateCosts: {
            fish: 1E4,
            sand: 1E4,
            crystal: 1E4,
            kelp: 1E3,
            seaApple: 1E3,
            sharkonium: 1E4
        }
    },
    marine: {
        name: "海洋星",
        desc: "一个平静的蓝色星球。宁静而美丽，和家乡如此相似。",
        shortDesc: "陌生蓝色",
        entry: "你进入一个熟悉的蓝色海洋，你过去的知识都变成了模糊的记忆。",
        style: "default",
        absentResources: [
            "tar",
            "ice",
            "heater",
            "shrimp",
            "chimaera",
            "eel"
        ],
        modifiers: [
            { modifier: "planetaryResourceBoost", resource: "fish", amount: 1.5 }
        ],
        gateCosts: {
            fish: 1E6,
            sand: 1E6,
            crystal: 1E6,
            kelp: 1E3,
            seaApple: 1E3,
            sharkonium: 1E5
        }
    },
    chaotic: {
        name: "混沌星",
        desc: "一个疯狂的世界，被无形的力量撕裂。",
        shortDesc: "旋涡",
        entry: "你被卷入一场混乱的战斗当中，没有了过去的记忆。新遇到的生物从四面八方向你冲来",
        style: "chaotic",
        absentResources: [
            "tar",
            "ice",
            "heater",
            "eel",
            "whale",
            "octopus",
            "shrimp",
            "chimaera"
        ],
        modifiers: [
            { modifier: "planetaryIncome", resource: "frenzy", amount: 0.0001 },
            { modifier: "planetaryIncome", resource: "animals", amount: -0.0001 },
            { modifier: "planetaryIncome", resource: "stuff", amount: -0.001 }
        ],
        gateCosts: {
            sponge: 1E5,
            clam: 1E5,
            sand: 1E7,
            crystal: 1E7,
            shark: 1E4,
            sharkonium: 1E7
        }
    },
    haven: {
        name: "富饶星",
        desc: "一个富饶的海洋世界。如此美丽，却又如此脆弱。",
        shortDesc: "繁荣美丽",
        entry: "什么都不记得了，你发现自己置身于一个充满生命的美丽的海洋。这里的生活将会很美好。",
        style: "haven",
        absentResources: [
            "tar",
            "ice",
            "heater",
            "chimaera",
            "eel"
        ],
        modifiers: [
            { modifier: "planetaryIncomeMultiplier", resource: "breeders", amount: 1 },
            { modifier: "planetaryResourceBoost", resource: "animals", amount: 1 }
        ],
        gateCosts: {
            fish: 1E7,
            clam: 1E7,
            sponge: 1E7,
            kelp: 1E9,
            coralglass: 1E4,
            coral: 1E6
        }
    },
    tempestuous: {
        name: "暴雨星",
        desc: "在暴风雨产生的漩涡当中什么都无法休息。",
        shortDesc: "暴风灰色",
        entry: "You recall nothing and know only the storms. The unrelenting, restless storms scattering your possessions and allies.",
        style: "tempestuous",
        absentResources: [
            "tar",
            "ice",
            "heater",
            "chimaera",
            "jellyfish"
        ],
        modifiers: [
            { modifier: "planetaryIncome", resource: "stuff", amount: -0.02 },
            { modifier: "planetaryIncome", resource: "crystal", amount: -0.002 },
            { modifier: "planetaryIncome", resource: "frenzy", amount: -0.0001 }
        ],
        gateCosts: {
            junk: 1E9,
            coral: 1E6,
            spronge: 1E6,
            delphinium: 1E6,
            sharkonium: 1E6,
            crystal: 1E6
        }
    },
    violent: {
        name: "狂暴星",
        desc: "大气中都是硫磺烟雾，海洋接近沸腾，并难以呼吸。。",
        shortDesc: "灼热红色",
        entry: "灼热的水把你过去的最后一丝记忆从你身上抹去。在下面，裂口喷出浓重的沙云。",
        style: "violent",
        absentResources: [
            "tar",
            "ice",
            "heater",
            "octopus",
            "eel",
            "chimaera",
            "whale"
        ],
        modifiers: [
            { modifier: "planetaryIncomeReciprocalMultiplier", resource: "breeders", amount: 1 },
            { modifier: "planetaryIncome", resource: "sand", amount: 0.1 },
            { modifier: "planetaryIncome", resource: "kelp", amount: 0.001 },
            { modifier: "planetaryIncome", resource: "coral", amount: 0.00001 },
            { modifier: "planetaryIncome", resource: "algae", amount: 0.0001 }
        ],
        gateCosts: {
            sand: 1E10,
            kelp: 1E9,
            coral: 1E6,
            algae: 1E3,
            sponge: 1E6,
            junk: 1E9
        }
    },
    abandoned: {
        name: "远古弃星",
        desc: "星球已被遗弃。这快要灭亡的星球上充满了机械。",
        shortDesc: "黑暗的深绿色",
        entry: "你不知道是谁让这个世界如此支离破碎。是你的祖辈吗?或者就是你自己?",
        style: "abandoned",
        absentResources: [
            "ice",
            "heater",
            "shrimp",
            "chimaera",
            "eel",
            "jellyfish",
            "algae",
            "whale"
        ],
        modifiers: [
            { modifier: "planetaryIncome", resource: "tar", amount: 0.1 },
            { modifier: "planetaryStartingResources", resource: "crystalMiner", amount: 1 },
            { modifier: "planetaryStartingResources", resource: "sandDigger", amount: 1 },
            { modifier: "planetaryStartingResources", resource: "fishMachine", amount: 1 },
            { modifier: "planetaryStartingResources", resource: "silentArchivist", amount: 1 }
        ],
        gateCosts: {
            junk: 1E8,
            purifier: 5,
            coralglass: 1E5,
            spronge: 1E5,
            delphinium: 1E5,
            sharkonium: 1E5
        }
    },
    shrouded: {
        name: "黑暗星",
        desc: "黑暗的海洋下隐藏着秘密，当然还有危险。",
        shortDesc: "黑暗神秘",
        entry: "入眼皆是黑暗。 你知道在这被遗弃的海域中有的只有眼前的黑暗。模糊的记忆引导你追寻着水晶的亮光。",
        style: "shrouded",
        absentResources: [
            "tar",
            "ice",
            "heater",
            "lobster",
            "crab",
            "shrimp",
            "sponge"
        ],
        modifiers: [
            { modifier: "planetaryIncome", resource: "crystal", amount: 0.05 },
            { modifier: "planetaryResourceBoost", resource: "crystal", amount: 1 },
            { modifier: "planetaryResourceReciprocalBoost", resource: "animals", amount: 1 },
            { modifier: "planetaryResourceReciprocalBoost", resource: "kelp", amount: 1 },
            { modifier: "planetaryResourceReciprocalBoost", resource: "coral", amount: 1 },
            { modifier: "planetaryIncomeReciprocalMultiplier", resource: "specialists", amount: 0.5 }
        ],
        gateCosts: {
            jellyfish: 1E8,
            clam: 1E6,
            crystal: 1E9,
            science: 1E9,
            sharkonium: 1E7,
            fish: 1E8
        }
    },
    frigid: {
        name: "冰霜星",
        desc: "寒冷的海洋将一切生命都慢慢地冰冻至死。",
        shortDesc: "冰霜白色",
        entry: "当你在疑惑自己突然的失忆时，你注意到在你面前形成的晶体。太冷了。",
        style: "frigid",
        absentResources: [
            "tar",
            "dolphin",
            "whale",
            "lobster",
            "chimaera",
            "shrimp",
            "seaApple",
            "coral",
            "algae"
        ],
        modifiers: [
            { modifier: "planetaryIncomeReciprocalMultiplier", resource: "breeders", amount: 1 },
            { modifier: "planetaryIncomeMultiplier", resource: "machines", amount: 1},
            { modifier: "planetaryIncome", resource: "ice", amount: 0.001 }
        ],
        gateCosts: {
            sand: 1E6,
            crystal: 1E4,
            clam: 1E3,
            heater: 5,
            sharkonium: 1E7,
            fish: 1E7
        }
    }
};

