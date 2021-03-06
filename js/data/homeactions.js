SharkGame.HomeActions = {

    // FREEBIES ////////////////////////////////////////////////////////////////////////////////

    'catchFish': {
        name: "抓鱼",
        effect: {
            resource: {
                'fish': 1
            }
        },
        cost: {},
        prereq: {
            // no prereqs
        },
        outcomes: [
            "降低声音",
            "吃了1只 腌鱼。 等等。 等一下。",
            "你吃了一顿丰盛的鱼！",
            "鱼。",
            "吃了1只 鲨鱼。 等等。 不，这不是鲨鱼。",
            "吃了1只 凤尾鱼。",
            "吃了1只 鲶鱼.",
            "吃了1只 比目鱼.",
            "吃了1只 黑线鳕.",
            "吃了1只 鲱鱼.",
            "吃了1只 鲭.",
            "吃了1只 鲻鱼.",
            "吃了1只 鲈鱼.",
            "吃了1只 狭鳕.",
            "吃了1只 鲑鱼.",
            "吃了1只 沙丁鱼.",
            "吃了1只 比目鱼.",
            "吃了1只 罗非鱼.",
            "吃了1只 鲑鳟鱼.",
            "吃了1只 白鲑.",
            "吃了1只 鲈鱼.",
            "吃了1只 鲤鱼.",
            "吃了1只 鳕鱼.",
            "吃了1只 大比目鱼.",
            "吃了1只 鯕鳅.",
            "吃了1只 鮟鱼.",
            "吃了1只 鲈鱼.",
            "吃了1只 甲鱼.",
            "吃了1只 跳鱼.",
            "吃了1只 石斑鱼.",
            "吃了1只 黑鲈.",
            "吃了1只 黄鳍金枪鱼.",
            "吃了1只 枪鱼.",
            "吃了1只 橙色连鳍鲑。",
            "吃了1只 鲨鱼.",
            "吃了1只 剑鱼.",
            "吃了1只 方头鱼.",
            "吃了1只 金枪鱼."

        ],
        helpText: "使用你的天生的鲨鱼实力，找到并捕捉一条鱼。"
    },

    'prySponge': {
        name: "收集海绵",
        effect: {
            resource: {
                'sponge': 1
            }
        },
        cost: {},
        prereq: {
            upgrade: [
                "spongeCollection"
            ]
        },
        outcomes: [
            "Pried an orange elephant ear sponge from the rocks.",
            "Pried a brain sponge from the rocks.",
            "Pried a branching tube sponge from the rocks.",
            "Pried a brown volcano carpet from the rocks.",
            "Pried a row pore rope sponge from the rocks.",
            "Pried a branching vase sponge from the rocks.",
            "Pried a chicken liver sponge from the rocks.",
            "Pried a red boring sponge from the rocks.",
            "Pried a heavenly sponge from the rocks.",
            "Pried a brown encrusting octopus sponge from the rocks.",
            "Pried a stinker sponge from the rocks.",
            "Pried a black-ball sponge from the rocks.",
            "Pried a strawberry vase sponge from the rocks.",
            "Pried a convoluted orange sponge from the rocks.",
            "Pried a touch-me-not sponge from the rocks. Ow.",
            "Pried a lavender rope sponge from the rocks.",
            "Pried a red-orange branching sponge from the rocks.",
            "Pried a variable boring sponge from the rocks.",
            "Pried a loggerhead sponge from the rocks.",
            "Pried a yellow sponge from the rocks.",
            "Pried an orange lumpy encrusting sponge from the rocks.",
            "Pried a giant barrel sponge from the rocks."
        ],
        helpText: "从海底捞起一块海绵以备将来之用。"
    },

    'getClam': {
        name: "捕蚌",
        effect: {
            resource: {
                'clam': 1
            }
        },
        cost: {},
        prereq: {
            upgrade: [
                "clamScooping"
            ]
        },
        outcomes: [
            "Got a grooved carpet shell.",
            "Got a hard clam.",
            "Got a manila clam.",
            "Got a soft clam.",
            "Got an 大西洋 surf clam.",
            "Got an ocean quahog.",
            "Got a pacific razor clam.",
            "Got a pismo clam.",
            "Got a geoduck.",
            "Got an 大西洋 jackknife clam.",
            "Got a lyrate asiatic hard clam.",
            "Got an ark clam.",
            "Got a nut clam.",
            "Got a duck clam.",
            "Got a marsh clam.",
            "Got a file clam.",
            "Got a giant clam.",
            "Got an asiatic clam.",
            "Got a peppery furrow shell.",
            "Got a pearl oyster."
        ],
        helpText: "获取一个蚌。为什么我们现在需要蚌?谁知道呢。"
    },

    'getJellyfish': {
        name: "抓水母",
        effect: {
            resource: {
                'jellyfish': 1
            }
        },
        cost: {},
        prereq: {
            upgrade: [
                "jellyfishHunting"
            ]
        },
        outcomes: [
            "Grabbed a mangrove jellyfish.",
            "Grabbed a lagoon jellyfish.",
            "Grabbed a nomuras jellyfish.",
            "Grabbed a sea nettle jellyfish.",
            "Grabbed an upside down jellyfish.",
            "Grabbed a comb jellyfish.",
            "Grabbed a sand jellyfish.",
            "Grabbed a box jellyfish.",
            "Grabbed a sea wasp jellyfish.",
            "Grabbed a blue blubber.",
            "Grabbed a white spotted jellyfish.",
            "Grabbed an immortal jellyfish.",
            "Grabbed a pelagia noctiluca.",
            "Grabbed a moon light jellyfish.",
            "Grabbed an iracongi irukandji jellyfish.",
            "Grabbed an irukandji jellyfish.",
            "Grabbed a moon jellyfish.",
            "Grabbed an aurelia aurita.",
            "Grabbed a ball jellyfish.",
            "Grabbed a cannonball jellyfish.",
            "Grabbed a man of war.",
            "Grabbed a war jellyfish.",
            "Grabbed a blue bottle jellyfish.",
            "Grabbed a lion's mane jellyfish.",
            "Grabbed a mane jellyfish.",
            "Grabbed a sun jellyfish.",
            "Grabbed a square jellyfish.",
            "Grabbed a physalia jellyfish.",
            "Grabbed a king jellyfish.",
            "Grabbed a cassiopeia jellyfish."
        ],
        helpText: "在捕捉水母时要冒很大的风险，不要被蜇。"
    },

    // CONVERSIONS ////////////////////////////////////////////////////////////////////////////////

    'seaApplesToScience': {
        name: "解剖海苹果",
        effect: {
            resource: {
                science: 5
            }
        },
        cost: [
            {resource: "seaApple", costFunction: "constant", priceIncrease: 1}
        ],
        max: "seaApple",
        prereq: {
            resource: {
                seaApple: 1
            },
            upgrade: [
                "xenobiology"
            ]
        },
        outcomes: [
            "There's science inside these things, surely!",
            "The cause of science is advanced!",
            "This is perhaps maybe insightful!",
            "Why are we even doing this? Who knows! Science!",
            "What is even the point of these things? Why are they named for fruit? They're squirming!"
        ],
        helpText: "解剖海苹果以获得额外的科学。研究!"
    },

    'spongeToScience': {
        name: "解剖海绵",
        effect: {
            resource: {
                science: 5
            }
        },
        cost: [
            {resource: "sponge", costFunction: "constant", priceIncrease: 1}
        ],
        max: "sponge",
        prereq: {
            resource: {
                sponge: 1
            },
            upgrade: [
                "xenobiology"
            ]
        },
        outcomes: [
            "Squishy porous science!",
            "The sponge has been breached and the science is leaking out!",
            "This is the best use of a sponge. Teeth dissections are the best.",
            "Sponge is now so many shreds. But so much was learned!",
            "The sponge is apparently not a plant. Yet plants feel more sophisticated than these things."
        ],
        helpText: "解剖海绵来了解它们多孔结构的秘密。为了科学!"
    },

    'jellyfishToScience': {
        name: "解剖水母",
        effect: {
            resource: {
                science: 5
            }
        },
        cost: [
            {resource: "jellyfish", costFunction: "constant", priceIncrease: 1}
        ],
        max: "jellyfish",
        prereq: {
            resource: {
                jellyfish: 1
            },
            upgrade: [
                "xenobiology"
            ]
        },
        outcomes: [
            "Eww eww gross it's so gloopy and fragile and OW IT STUNG ME",
            "These things are like a bag of wonders. Weird, tasteless wonders.",
            "Wow, sea apples seemed weird, but these things barely exist.",
            "Well, they turned out just as fragile as they looked.",
            "So interesting!"
        ],
        helpText: "研究蜇人水母那黏状的内部！发现，探索!"
    },

    'pearlConversion': {
        name: "珍珠转化",
        effect: {
            resource: {
                crystal: 1
            }
        },
        cost: [
            {resource: "clam", costFunction: "constant", priceIncrease: 1},
            {resource: "science", costFunction: "constant", priceIncrease: 5}
        ],
        max: "clam",
        prereq: {
            resource: {
                clam: 1
            },
            upgrade: [
                "pearlConversion"
            ]
        },
        outcomes: [
            "Pearls to crystals! One day. One day, we will get this right and only use the pearl.",
            "Welp, we somehow turned rocks to crystals. Oh. Nope, those were clams. Not rocks. It's so hard to tell sometimes.",
            "Okay, we managed to only use the pearls this time, but we, uh, had to break the clams open pretty roughly.",
            "Pearls to... nope. Clams to crystals. Science is hard."
        ],
        helpText: "把珍珠(还有外面的蚌壳)转化成水晶."
    },

    // MAKE ADVANCED RESOURCES  ///////////////////////////////////////////////////////////////////////////////

    'transmuteSharkonium': {
        name: "转化鲨素",
        effect: {
            resource: {
                sharkonium: 1
            }
        },
        cost: [
            {resource: "crystal", costFunction: "constant", priceIncrease: 5},
            {resource: "sand", costFunction: "constant", priceIncrease: 15}
        ],
        max: "sharkonium",
        prereq: {
            upgrade: [
                "transmutation"
            ]
        },
        outcomes: [
            "Transmutation destination!",
            "Transmutation rejuvenation!",
            "Transmogrification revelation!",
            "Transformation libation!",
            "Transfiguration nation! ...wait.",
            "Sharkonium arise!",
            "Arise, sharkonium!",
            "More sharkonium!",
            "The substance that knows no name! Except the name sharkonium!",
            "The substance that knows no description! It's weird to look at.",
            "The foundation of a modern shark frenzy!"
        ],
        helpText: "把普通资源转化成鲨素，未来的建造材料!"
    },

    'smeltCoralglass': {
        name: "转化珊瑚晶",
        effect: {
            resource: {
                coralglass: 1
            }
        },
        cost: [
            {resource: "coral", costFunction: "constant", priceIncrease: 10},
            {resource: "sand", costFunction: "constant", priceIncrease: 10}
        ],
        max: "coralglass",
        prereq: {
            upgrade: [
                "coralglassSmelting"
            ]
        },
        outcomes: [
            "Coralglass smelted!",
            "Coralglass melted! No. Wait.",
            "How does coral become part of glass? Well, you see, it's all very simple, or that's what the lobster told me.",
            "The backbo-- the exoskeleton of the crustacean industry!",
            "So fragile. Yet so useful."
        ],
        helpText: "把其他资源转化成珊瑚晶"
    },

    'fuseDelphinium': {
        name: "转化豚素",
        effect: {
            resource: {
                delphinium: 1
            }
        },
        cost: [
            {resource: "coral", costFunction: "constant", priceIncrease: 15},
            {resource: "crystal", costFunction: "constant", priceIncrease: 5}
        ],
        max: "delphinium",
        prereq: {
            upgrade: [
                "aquamarineFusion"
            ]
        },
        outcomes: [
            "Fusion confusion.",
            "Fission's fishy.",
            "Delphinium, something that, much like its inventors, just isn't quite as legitimate in the ocean.",
            "Delphinium, a substance we tolerate!",
            "Delphinium! It's a product!",
            "Delphinium! It... uh, is a thing! That exists!"
        ],
        helpText: "将一些资源转化成豚素,豚素有点类似于鲨素。不过更差一些."
    },

    'forgeSpronge': {
        name: "转化棉素",
        effect: {
            resource: {
                spronge: 1
            }
        },
        cost: [
            {resource: "sponge", costFunction: "constant", priceIncrease: 5},
            {resource: "junk", costFunction: "constant", priceIncrease: 15}
        ],
        max: "spronge",
        prereq: {
            upgrade: [
                "industrialGradeSponge"
            ]
        },
        outcomes: [
            "It pulses. That's unsettling.",
            "It shakes and quivers and otherwise acts sort of like sharkonium which is kind of freaking me out uh help",
            "Well, the octopuses know how to use this, I think.",
            "What... what <em>is</em> that?!",
            "Spronge. What a name. I don't think I could name it anything myself. Apart from 'horrifying'.",
            "Sweet fishmas, it's glowing. It's glowing!"
        ],
        helpText: "把旧海绵转化成棉素，这是未来使用的材料。"
    },

    // BUY ANIMALS ////////////////////////////////////////////////////////////////////////////////

    'getShark': {
        name: "Recruit shark",
        effect: {
            resource: {
                'shark': 1
            }
        },
        cost: [
            {resource: "fish", costFunction: "linear", priceIncrease: 5}
        ],
        max: "shark",
        prereq: {
            resource: {
                'fish': 5
            }
        },
        outcomes: [
            "一只大鼻子鲨鱼加入了你。",
            "一只黑鳍鲨鱼加入了你。",
            "一只蓝色鲨鱼加入了你。",
            "一只牛鲨加入了你。",
            "一只 猫鲨加入了你。",
            "一只 鳄鲨加入了你。",
            "一只 dusky whaler 鲨鱼加入了你。",
            "一只 dogfish 加入了你。",
            "一只 graceful 鲨鱼加入了你。",
            "一只 grey reef 鲨鱼加入了你。",
            "一只 goblin 鲨鱼加入了你。",
            "一只锤头鲨加入了你。",
            "A hardnose 鲨鱼加入了你。",
            "A lemon 鲨鱼加入了你。",
            "A milk 鲨鱼加入了你。",
            "A nervous 鲨鱼加入了你。",
            "An oceanic whitetip 鲨鱼加入了你。",
            "A pigeye 鲨鱼加入了你。",
            "A sandbar 鲨鱼加入了你。",
            "A 柔滑鲨鱼加入了你。",
            "A silvertip 鲨鱼加入了你。",
            "A sliteye 鲨鱼加入了你。",
            "A speartooth 鲨鱼加入了你。",
            "A spinner 鲨鱼加入了你。",
            "A spot-tail 鲨鱼加入了你。",
            "A mako 鲨鱼加入了你。",
            "A 虎鲨加入了你。",
            "A tawny 鲨鱼加入了你。",
            "A 白鲨鱼加入了你。",
            "A 斑马鲨鱼加入了你。"
        ],
        multiOutcomes: [
            "一大群鲨鱼加入了你的团队.",
            "这些鲨鱼真是多.",
            "鲨鱼群落飞速增长!",
            "更多鲨鱼! 更多！！！",
            "一大群鲨鱼. 一群大鲨鱼.",
            "A shiver of sharks! No, that's a legit name. Look it up.",
            "A school of sharks!",
            "A shoal of sharks!",
            "A frenzy of sharks!",
            "A gam of sharks! Yes, that's correct.",
            "A college of sharks! They're a little smarter than a school."
        ],
        helpText: "雇用鲨鱼来帮你抓更多鱼."
    },

    'getManta': {
        name: "Hire ray",
        effect: {
            resource: {
                'ray': 1
            }
        },
        cost: [
            {resource: "fish", costFunction: "linear", priceIncrease: 15}
        ],
        max: "ray",
        prereq: {
            resource: {
                'fish': 15
            }
        },
        outcomes: [
            "These guys seem to be kicking up a lot of sand!",
            "A spotted eagle ray 加入了你。",
            "A manta ray 加入了你。",
            "A stingray 加入了你。",
            "A clownnose 鳐鱼 加入了你。",
            "A bluespotted maskray 加入了你。",
            "A bluntnose stingray 加入了你。",
            "A oman masked 鳐鱼 加入了你。",
            "A bulls-eye electric 鳐鱼 加入了你。",
            "A shorttailed electric 鳐鱼 加入了你。",
            "A bentfin devil 鳐鱼 加入了你。",
            "A lesser electric 鳐鱼 加入了你。",
            "A cortez electric 鳐鱼 加入了你。",
            "A feathertail stingray 加入了你。",
            "A thornback 鳐鱼 加入了你。",
            "A giant shovelnose 鳐鱼 加入了你。",
            "A pacific cownose 鳐鱼 加入了你。",
            "A bluespotted ribbontail 鳐鱼 加入了你。",
            "A marbled ribbontail 鳐鱼 加入了你。",
            "A blackspotted torpedo 鳐鱼 加入了你。",
            "A marbled torpedo 鳐鱼 加入了你。",
            "A 大西洋 torpedo 鳐鱼 加入了你。",
            "A panther torpedo 鳐鱼 加入了你。",
            "A spotted torpedo 鳐鱼 加入了你。",
            "A ocellated torpedo 加入了你。",
            "A caribbean torpedo 加入了你。",
            "A striped stingaree 加入了你。",
            "A sparesly-spotted stingaree 加入了你。",
            "A kapala stingaree 加入了你。",
            "A common stingaree 加入了你。",
            "A eastern fiddler 鳐鱼 加入了你。",
            "A bullseye stingray 加入了你。",
            "A round stingray 加入了你。",
            "A yellow stingray 加入了你。",
            "A cortez round stingray 加入了你。",
            "A porcupine 鳐鱼 加入了你。",
            "A sepia stingaree 加入了你。",
            "A banded stingaree 加入了你。",
            "A spotted stingaree 加入了你。",
            "A sea pancake 加入了你。"
        ],
        multiOutcomes: [
            "A whole bunch of rays join you.",
            "That's a lot of rays.",
            "The ray conspiracy grows!",
            "I can't even deal with all of these rays.",
            "More rays more rays more more more.",
            "A school of rays!",
            "A fever of rays! Yes, seriously. Look it up.",
            "A whole lotta rays!",
            "The sand is just flying everywhere!",
            "So many rays."
        ],
        helpText: "雇佣鳐鱼来帮你收集鱼.它们可能会从海底带来一些沙子."
    },


    'getCrab': {
        name: "Acquire crab",
        effect: {
            resource: {
                'crab': 1
            }
        },
        cost: [
            {resource: "fish", costFunction: "linear", priceIncrease: 10}
        ],
        max: "crab",
        prereq: {
            resource: {
                'shark': 4,
                'ray': 4
            }
        },
        outcomes: [
            "A crab starts sifting shiny things out of the sand.",
            "A bering hermit 加入了你。",
            "A blackeye hermit 加入了你。",
            "A butterfly crab 加入了你。",
            "A dungeness crab 加入了你。",
            "A flattop crab 加入了你。",
            "A greenmark hermit 加入了你。",
            "A golf-ball crab 加入了你。",
            "A graceful crab 加入了你。",
            "A graceful decorator crab 加入了你。",
            "A graceful kelp crab 加入了你。",
            "A green shore crab 加入了你。",
            "A heart crab 加入了你。",
            "A helmet crab 加入了你。",
            "A longhorn decorator crab 加入了你。",
            "A maroon hermit 加入了你。",
            "A moss crab 加入了你。",
            "A northern kelp crab 加入了你。",
            "A orange hairy hermit 加入了你。",
            "A purple shore crab 加入了你。",
            "A pygmy rock crab 加入了你。",
            "A puget sound king crab 加入了你。",
            "A red rock crab 加入了你。",
            "A scaled crab 加入了你。",
            "A sharpnose crab 加入了你。",
            "A spiny lithoid crab 加入了你。",
            "A widehand hermit 加入了你。",
            "A umbrella crab 加入了你。"
        ],
        multiOutcomes: [
            "A lot of crabs join you.",
            "CRABS EVERYWHERE",
            "Crabs. Crabs. Crabs!",
            "Feels sort of crab-like around here.",
            "A cast of crabs!",
            "A dose of crabs!",
            "A cribble of crabs! Okay, no, that one's made up.",
            "So many crabs."
        ],
        helpText: "雇佣螃蟹来帮你找到鲨鱼和鳐鱼都没有发现的东西."
    },

    'getShrimp': {
        name: "获取虾",
        effect: {
            resource: {
                'shrimp': 1
            }
        },
        cost: [
            {resource: "sponge", costFunction: "linear", priceIncrease: 5}
        ],
        max: "shrimp",
        prereq: {
            resource: {
                'sponge': 5
            },
            upgrade: [
                "seabedGeology"
            ]
        },
        outcomes: [
            "An african filter shrimp 加入了你。",
            "An amano shrimp 加入了你。",
            "A bamboo shrimp 加入了你。",
            "A bee shrimp 加入了你。",
            "A black tiger shrimp 加入了你。",
            "A blue bee shrimp 加入了你。",
            "A blue pearl shrimp 加入了你。",
            "A blue tiger shrimp 加入了你。",
            "A brown camo shrimp 加入了你。",
            "A cardinal shrimp 加入了你。",
            "A crystal red shrimp 加入了你。",
            "A dark green shrimp 加入了你。",
            "A glass shrimp 加入了你。",
            "A golden bee shrimp 加入了你。",
            "A harlequin shrimp 加入了你。",
            "A malaya shrimp 加入了你。",
            "A neocaridina heteropoda 加入了你。",
            "A ninja shrimp 加入了你。",
            "An orange bee shrimp 加入了你。",
            "An orange delight shrimp 加入了你。",
            "A purple zebra shrimp 加入了你。",
            "A red cherry shrimp 加入了你。",
            "A red goldflake shrimp 加入了你。",
            "A red tiger shrimp 加入了你。",
            "A red tupfel shrimp 加入了你。",
            "A snowball shrimp 加入了你。",
            "A sulawesi shrimp 加入了你。",
            "A tiger shrimp 加入了你。",
            "A white bee shrimp 加入了你。",
            "A yellow shrimp 加入了你。"
        ],
        multiOutcomes: [
            "That's a lot of shrimp.",
            "So many shrimp, it's like a cloud!",
            "I can't cope with this many shrimp!",
            "Shrimp, they're like bugs, except not bugs or anything related at all!",
            "They're so tiny!",
            "How can something so small take up so much space?",
            "Sponge forever!"
        ],
        helpText: "说服虾来帮助你收集海藻，这有助于促进海绵的生产。"
    },

    'getLobster': {
        name: "获取龙虾",
        effect: {
            resource: {
                'lobster': 1
            }
        },
        cost: [
            {resource: "clam", costFunction: "linear", priceIncrease: 10}
        ],
        max: "lobster",
        prereq: {
            resource: {
                'clam': 10
            },
            upgrade: [
                "seabedGeology"
            ]
        },
        outcomes: [
            "A scampi 加入了你。",
            "A crayfish 加入了你。",
            "A clawed lobster 加入了你。",
            "A spiny lobster 加入了你。",
            "A slipper lobster 加入了你。",
            "A hummer lobster 加入了你。",
            "A crawfish 加入了你。",
            "A rock lobster 加入了你。",
            "A langouste 加入了你。",
            "A shovel-nose lobster 加入了你。",
            "A crawdad 加入了你。"
        ],
        multiOutcomes: [
            "Lobsters lobsters lobsters lobsters.",
            "But they weren't rocks...",
            "The clam forecast is looking good!",
            "They're all about the clams!",
            "More lobsters, because why not?",
            "HEAVY LOBSTERS",
            "More lobsters for the snipping and the cutting and the clam grab!",
            "Clam patrol, here we go."
        ],
        helpText: "龙虾喜欢蚌，愿意为了蚌而工作。好好工作，就会有许多蚌"
    },

    'getDolphin': {
        name: "获取海豚",
        effect: {
            resource: {
                'dolphin': 1
            }
        },
        cost: [
            {resource: "fish", costFunction: "linear", priceIncrease: 10}
        ],
        max: "dolphin",
        prereq: {
            resource: {
                'fish': 10,
                'shark': 50
            },
            upgrade: [
                "cetaceanAwareness"
            ]
        },
        outcomes: [
            "A white beaked dolphin 加入了你。",
            "A short finned pilot whale 加入了你。",
            "A pantropical dolphin 加入了你。",
            "A long-finned pilot whale 加入了你。",
            "A hourglass dolphin 加入了你。",
            "A bottlenose dolphin 加入了你。",
            "A striped dolphin 加入了你。",
            "A pygmy killer whale 加入了你。",
            "A melon-headed whale 加入了你。",
            "An irrawaddy dolphin 加入了你。",
            "A dusky dolphin 加入了你。",
            "A clymene dolphin 加入了你。",
            "A black dolphin 加入了你。",
            "A southern right-whale dolphin 加入了你。",
            "A rough toothed dolphin 加入了你。",
            "A short beaked common dolphin 加入了你。",
            "A pacific white-sided dolphin 加入了你。",
            "A northern right-whale dolphin 加入了你。",
            "A long-snouted spinner dolphin 加入了你。",
            "A long-beaked common dolphin 加入了你。",
            "An 大西洋 white sided dolphin 加入了你。",
            "An 大西洋 hump-backed dolphin 加入了你。",
            "An 大西洋 spotted dolphin 加入了你。"
        ],
        multiOutcomes: [
            "A pod of dolphins!",
            "More of them. Hm.",
            "More of these squeaky chatterers.",
            "More whiners.",
            "Do we need these guys?",
            "They have to be good for something."
        ],
        helpText: "雇佣海豚帮我们抓鱼。 准备好忍受抱怨吧。"
    },

    'getWhale': {
        name: "说服鲸鱼",
        effect: {
            resource: {
                'whale': 1
            }
        },
        cost: [
            {resource: "fish", costFunction: "linear", priceIncrease: 1e5}
        ],
        max: "whale",
        prereq: {
            resource: {
                'fish': 1e5
            },
            upgrade: [
                "cetaceanAwareness"
            ]
        },
        outcomes: [
            "A blue whale 加入了你。",
            "A pygmy blue whale 加入了你。",
            "A bowhead whale 加入了你。",
            "A fin whale 加入了你。",
            "A gray whale 加入了你。",
            "A humpback whale 加入了你。",
            "A southern minke whale 加入了你。",
            "A common minke whale  加入了你。",
            "A dwarf minke whale 加入了你。",
            "A pygmy right whale 加入了你。",
            "A north right whale  加入了你。",
            "A southern right whale 加入了你。",
            "A sei whale 加入了你。",
            "A beluga whale 加入了你。",
            "A sperm whale 加入了你。",
            "A pygmy sperm whale 加入了你。",
            "A dwarf sperm whale 加入了你。"
        ],
        multiOutcomes: [
            "A pod of whales!",
            "Aloof, mysterious, big.",
            "So majestic. Wait, no, we're looking at a boulder formation.",
            "The songs are mesmerising.",
            "They might not all eat fish, but they're great at rounding them up."
        ],
        helpText: "说服一只巨大的鲸鱼帮助我们。它能集结整个种群。"
    },

    'getEel': {
        name: "雇佣鳗鱼",
        effect: {
            resource: {
                'eel': 1
            }
        },
        cost: [
            {resource: "fish", costFunction: "linear", priceIncrease: 15}
        ],
        max: "eel",
        prereq: {
            resource: {
                'fish': 50
            },
            upgrade: [
                "seabedGeology"
            ]
        },
        outcomes: [
            "A false moray 加入了你。",
            "A mud eel 加入了你。",
            "A spaghetti eel 加入了你。",
            "A moray eel 加入了你。",
            "A thin eel 加入了你。",
            "A worm eel 加入了你。",
            "A conger 加入了你。",
            "A longneck eel 加入了你。",
            "A pike conger 加入了你。",
            "A duckbill eel 加入了你。",
            "A snake eel 加入了你。",
            "A snipe eel 加入了你。",
            "A sawtooth eel 加入了你。",
            "A cutthroat eel 加入了你。",
            "An electric eel 加入了你。",
            "A bobtail snipe eel 加入了你。",
            "A silver eel 加入了你。",
            "A long finned eel 加入了你。",
            "A short finned eel 加入了你。"
        ],
        multiOutcomes: [
            "Eels combining elements of the sharks and the eels to create something not quite as good as either.",
            "The seabed sways with the arrival of new eels.",
            "Fish and sand go hand in hand with eels! Well, fin and fin.",
            "Don't mess with the creatures with jaws inside their jaws.",
            "Eel nation arise!",
            "That's a lot of eels.",
            "So there's more eels. Whee.",
            "The eels increase in number.",
            "More eels happened. Yay."
        ],
        helpText: "给鳗鱼提供新的住所和食物。它们可以把鱼和沙子围起来"
    },

    'getChimaera': {
        name: "寻找银鲛",
        effect: {
            resource: {
                'chimaera': 1
            }
        },
        cost: [
            {resource: "jellyfish", costFunction: "linear", priceIncrease: 20}
        ],
        max: "chimaera",
        prereq: {
            resource: {
                'jellyfish': 20
            },
            upgrade: [
                "exploration"
            ]
        },
        outcomes: [
            "A ploughnose chimaera 加入了你。",
            "A cape elephantfish 加入了你。",
            "An australian ghost 鲨鱼加入了你。",
            "A whitefin chimaera 加入了你。",
            "A bahamas ghost 鲨鱼加入了你。",
            "A southern chimaera 加入了你。",
            "A longspine chimaera 加入了你。",
            "A cape chimaera 加入了你。",
            "A shortspine chimaera 加入了你。",
            "A leopard chimaera 加入了你。",
            "A silver chimaera 加入了你。",
            "A pale ghost 鲨鱼加入了你。",
            "A spotted ratfish 加入了你。",
            "A philippine chimaera 加入了你。",
            "A black ghost鲨鱼加入了你。",
            "A blackfin ghost鲨鱼加入了你。",
            "A marbled ghost鲨鱼加入了你。",
            "A striped rabbitfish 加入了你。",
            "A large-eyed rabbitfish 加入了你。",
            "A spookfish 加入了你。",
            "A dark ghost鲨鱼加入了你。",
            "A purple chimaera 加入了你。",
            "A pointy-nosed blue chimaera 加入了你。",
            "A giant black chimaera 加入了你。",
            "A smallspine spookfish 加入了你。",
            "A pacific longnose chimaera 加入了你。",
            "A dwarf sicklefin chimaera 加入了你。",
            "A sicklefin chimaera 加入了你。",
            "A paddle-nose chimaera 加入了你。",
            "A straightnose rabbitfish 加入了你。"
        ],
        multiOutcomes: [
            "Many chimaeras come from the deep.",
            "Like ghosts, they come.",
            "The chimaeras avert your gaze, but set to work quickly.",
            "The jellyfish stocks shall climb ever higher!",
            "Well, it saves you the effort of braving the stinging tentacles.",
            "What have they seen, deep in the chasms?",
            "They aren't sharks, but they feel so familiar.",
            "The long-lost kindred return."
        ],
        helpText: "把银鲛训练成狩猎者，在这深邃黑暗的地方帮助我们。"
    },

    'getOctopus': {
        name: "雇佣章鱼",
        effect: {
            resource: {
                'octopus': 1
            }
        },
        cost: [
            {resource: "clam", costFunction: "linear", priceIncrease: 15}
        ],
        max: "octopus",
        prereq: {
            resource: {
                'clam': 20
            },
            upgrade: [
                "exploration"
            ]
        },
        outcomes: [
            "A capricorn night octopus 加入了你。",
            "A plain-body night octopus 加入了你。",
            "A hammer octopus 加入了你。",
            "A southern keeled octopus 加入了你。",
            "A two-spot octopus 加入了你。",
            "A caribbean reef octopus 加入了你。",
            "A southern white-spot octopus 加入了你。",
            "A bigeye octopus 加入了你。",
            "A carolinian octopus 加入了你。",
            "A lesser pacific striped octopus 加入了你。",
            "A chestnut octopus 加入了你。",
            "A big blue octopus 加入了你。",
            "A lilliput longarm octopus 加入了你。",
            "A red-spot night octopus 加入了你。",
            "A globe octopus 加入了你。",
            "A scribbled night octopus 加入了你。",
            "A bumblebee two-spot octopus 加入了你。",
            "A southern sand octopus 加入了你。",
            "A lobed octopus 加入了你。",
            "A starry night octopus 加入了你。",
            "A 大西洋 white-spotted octopus 加入了你。",
            "A maori octopus 加入了你。",
            "A mexican four-eyed octopus 加入了你。",
            "A galapagos reef octopus 加入了你。",
            "An ornate octopus 加入了你。",
            "A white-striped octopus 加入了你。",
            "A pale octopus 加入了你。",
            "A japanese pygmy octopus 加入了你。",
            "A east pacific red octopus 加入了你。",
            "A spider octopus 加入了你。",
            "A moon octopus 加入了你。",
            "A frilled pygmy octopus 加入了你。",
            "A tehuelche octopus 加入了你。",
            "A gloomy octopus 加入了你。",
            "A veiled octopus 加入了你。",
            "A bighead octopus 加入了你。",
            "A common octopus 加入了你。",
            "A club pygmy octopus 加入了你。",
            "A star-sucker pygmy octopus 加入了你。",
            "An 大西洋 banded octopus 加入了你。"
        ],
        multiOutcomes: [
            "Efficiency increases with limb count.",
            "Hard to understand, but hardworking nonetheless.",
            "The minds of the octopuses are a frontier unbraved by many sharks.",
            "They hardly seem to notice you. They take their payment and begin to harvest.",
            "They say something about the schedule being on target.",
            "One of the new batch tells you to find unity in efficiency.",
            "You could have sworn you saw an octopus among the crowd glinting like metal."
        ],
        helpText: "因为章鱼们高效地海蚌搜索工作，我们给它们一些回报。"
    },

    // SHARK JOBS ////////////////////////////////////////////////////////////////////////////////

    'getDiver': {
        name: "训练潜水员鲨鱼",
        effect: {
            resource: {
                'diver': 1
            }
        },
        cost: [
            {resource: "shark", costFunction: "constant", priceIncrease: 1},
            {resource: "fish", costFunction: "linear", priceIncrease: 30}
        ],
        max: "diver",
        prereq: {
            resource: {
                'shark': 1
            },
            world: "shrouded"
        },
        outcomes: [
            "Well, better you than me.",
            "Good luck down there!",
            "You're doing good work for us, diver shark.",
            "Fare well on your expeditions, shark!"
        ],
        multiOutcomes: [
            "Follow the crystals!",
            "We will find the secrets of the deep!",
            "Brave the deep!",
            "Find the crystals for science!",
            "Deep, dark, scary waters. Good luck, all of you."
        ],
        helpText: "让一条鲨鱼在黑暗中前往更深的海域，去寻找更多的水晶和其他一切能找到的东西。"
    },

    'getScientist': {
        name: "Train science shark",
        effect: {
            resource: {
                'scientist': 1
            }
        },
        cost: [
            {resource: "shark", costFunction: "constant", priceIncrease: 1},
            {resource: "crystal", costFunction: "linear", priceIncrease: 20}
        ],
        max: "scientist",
        prereq: {
            resource: {
                'crystal': 20,
                'shark': 1
            }
        },
        outcomes: [
            "鲨鱼博士, 马上就到!",
            "发现科学家鲨鱼！",
            "在多年的痛苦学习后, 这只鲨鱼终于培养出了出色的找借口的技能---呃，我是说科学技能!",
            "PhD approved!",
            "Graduation complete!",
            "A new insight drives a new shark to take up the cause of science!"
        ],
        multiOutcomes: [
            "The training program was a success!",
            "Look at all this science!",
            "Building a smarter, better shark!",
            "Beakers! Beakers underwater! It's madness!",
            "Let the science commence!",
            "Underwater clipboards! No I don't know how that works either!",
            "Careful teeth record the discoveries!"
        ],
        helpText: "在研究及科学的艺术中训练一条鲨鱼."
    },

    'getNurse': {
        name: "Train nurse shark",
        effect: {
            resource: {
                'nurse': 1
            }
        },
        cost: [
            {resource: "shark", costFunction: "constant", priceIncrease: 1},
            {resource: "fish", costFunction: "linear", priceIncrease: 100}
        ],
        max: "nurse",
        prereq: {
            resource: {
                'shark': 1
            },
            upgrade: [
                "biology"
            ]
        },
        outcomes: [
            "护士鲨已准备就绪!",
            "鲨鱼制造者向你报道。",
            "训练一只护士鲨。",
            "医学考试已通过! 护士鲨蓄势待发!"
        ],
        multiOutcomes: [
            "更多鲨鱼就要被生产出来了.",
            "鲨鱼群开始拥挤了!",
            "鲨鱼的数量不会有尽头!",
            "鲨鱼永远增长!",
            "鲨鱼不会停止. 鲨鱼是永恒的.",
            "更多的鲨鱼会去制造更多鲨鱼再去制造更多鲨鱼..."
        ],
        helpText: "将鲨鱼从捕鱼工作中转移出来，让他们去制造鲨鱼。"
    },

    // RAY JOBS ////////////////////////////////////////////////////////////////////////////////

    'getLaser': {
        name: "Equip laser ray",
        effect: {
            resource: {
                'laser': 1
            }
        },
        cost: [
            {resource: "ray", costFunction: "constant", priceIncrease: 1},
            {resource: "crystal", costFunction: "linear", priceIncrease: 50}
        ],
        max: "laser",
        prereq: {
            resource: {
                'ray': 1
            },
            upgrade: [
                "laserRays"
            ]
        },
        outcomes: [
            "Laser ray online!",
            "Laser ray! With a laser ray! It's laser ray, with a laaaaaser raaaay!",
            "Laser ray.",
            "Ray suited up with a laaaaaaser!",
            "Ray lasered. To use a laser. Not the subject of a laser."
        ],
        multiOutcomes: [
            "Boil the seabed!",
            "Churn the sand to crystal!",
            "Laser ray armada in position!",
            "Ray crystal processing initiative is growing stronger every day!",
            "Welcome to the future! The future is lasers!"
        ],
        helpText: "将鳐鱼从集沙工作中转移出来，让它们把沙子转化成水晶。"
    },

    'getMaker': {
        name: "Instruct a ray maker",
        effect: {
            resource: {
                'maker': 1
            }
        },
        cost: [
            {resource: "ray", costFunction: "constant", priceIncrease: 1},
            {resource: "fish", costFunction: "linear", priceIncrease: 300},
            {resource: "kelp", costFunction: "linear", priceIncrease: 15}
        ],
        max: "maker",
        prereq: {
            resource: {
                'ray': 1
            },
            upgrade: [
                "rayBiology"
            ]
        },
        outcomes: [
            "The application of kelp supplements has made a ray very productive.",
            "More rays lets you get more rays which you can then use to get more rays.",
            "The ray singularity begins!",
            "A ray maker is ready.",
            "Looks like you gave them quite the ray maker blow! 'Them' being the intangible enemy that is lacking in resources.",
            "The ray seems concerned, but obliges. The mission has been given."
        ],
        multiOutcomes: [
            "All these makers. What are they making? What is it for? Oh. It's rays, and it's probably for sand or something.",
            "More ray makers means more rays. Do you understand what that means?! Do you?! It means more rays. Good. On the same page, then.",
            "Rapidly breeding aquatic wildlife is probably a severe ecological hazard. Good thing this isn't Earth's oceans, probably!",
            "Have you ever thought about what the rays wanted? Because this might have been what they wanted after all.",
            "MORE LASER RAYS FOR THE LASER ARMY-- oh. Well, this is good too."
        ],
        helpText: "将鳐鱼从集沙工作中转移出来，让它们专注于制造更多鳐鱼。"
    },

    // CRAB JOBS ////////////////////////////////////////////////////////////////////////////////

    'getPlanter': {
        name: "训练种植蟹",
        effect: {
            resource: {
                'planter': 1
            }
        },
        cost: [
            {resource: "crab", costFunction: "constant", priceIncrease: 1},
            {resource: "sand", costFunction: "linear", priceIncrease: 200}
        ],
        max: "planter",
        prereq: {
            resource: {
                'crab': 1
            },
            upgrade: [
                "kelpHorticulture"
            ]
        },
        outcomes: [
            "Crab set up with seeds.",
            "Shell studded with kelp.",
            "Crab is going on a mission. A mission... to farm.",
            "Planter crab equipped and ready to move a few feet and start planting some things!",
            "Crab is ready to farm!"
        ],
        multiOutcomes: [
            "Carpet the seabed!",
            "Kelp kelp kelp kelp kelp kelp kelp kelp.",
            "Horticulturists unite!",
            "Strike the sand!",
            "Pat the sand very gently and put kelp in it!",
            "More kelp. The apples. They hunger. They hunger for kelp."
        ],
        helpText: "给螃蟹穿上设备，并训练它们在海底横向种植海带。"
    },

    'getBrood': {
        name: "形成蟹窝",
        effect: {
            resource: {
                'brood': 1
            }
        },
        cost: [
            {resource: "crab", costFunction: "constant", priceIncrease: 20},
            {resource: "fish", costFunction: "linear", priceIncrease: 200}
        ],
        max: "brood",
        prereq: {
            resource: {
                'crab': 1
            },
            upgrade: [
                "crabBiology"
            ]
        },
        outcomes: [
            "A bunch of crabs pile together into some sort of weird cluster.",
            "Crab team, assemble! FORM THE CRAB BROOD!",
            "[This message has been censored for reasons of being mostly really gross.]",
            "Eggs, eggs everywhere, but never stop and think.",
            "Writhing crab pile. Didn't expect those words next to each other today, did you.",
            "The crab brood is a rarely witnessed phenomenon, due to being some strange behaviour of crabs that have been driven to seek crystals for reasons only they understand."
        ],
        multiOutcomes: [
            "The broods grow. The swarm rises.",
            "All these crabs are probably a little excessive. ...is what I could say, but I'm going to say this instead. MORE CRABS.",
            "A sea of crabs on the bottom of the sea. Clickity clackity.",
            "Snip snap clack clack burble burble crabs crabs crabs crabs.",
            "More crabs are always a good idea. Crystals aren't cheap.",
            "The broods swell in number. The sharks are uneasy, but the concern soon passes.",
            "Yes. Feed the kelp. Feed it. Feeeeeed it."
        ],
        helpText: "将一些螃蟹结合成一个可怕的，难以理解的蟹巢，它能生产螃蟹。"
    },

    // SHRIMP JOBS ////////////////////////////////////////////////////////////////////////////////

    'getQueen': {
        name: "训练虾后",
        effect: {
            resource: {
                'queen': 1
            }
        },
        cost: [
            {resource: "shrimp", costFunction: "constant", priceIncrease: 1},
            {resource: "sponge", costFunction: "linear", priceIncrease: 50}
        ],
        max: "queen",
        prereq: {
            resource: {
                'shrimp': 1
            },
            upgrade: [
                "eusociality"
            ]
        },
        outcomes: [
            "Shrimp queen prepped for duty!",
            "A royal shrimp is she!",
            "More shrimp for the shrimp superorganism!",
            "Give it time before they start singing about wanting to break free.",
            "Long live the tiny tiny shrimp queen!"
        ],
        multiOutcomes: [
            "Okay, so it's not exactly a royal role, but hey, they're gonna be making eggs for a long time. Humour them.",
            "This is the weirdest monarchy in existence.",
            "Welcome to the superorganisation!",
            "They want to ride their bicycle.",
            "Give it time before they start singing about wanting to break free.",
            "Queens for the shrimp colony! Eggs for the egg throne!"
        ],
        helpText: "建立一只虾后来生产更多虾"
    },

    'getWorker': {
        name: "指派虾工",
        effect: {
            resource: {
                'worker': 1
            }
        },
        cost: [
            {resource: "shrimp", costFunction: "constant", priceIncrease: 1},
            {resource: "sponge", costFunction: "linear", priceIncrease: 20}
        ],
        max: "worker",
        prereq: {
            resource: {
                'shrimp': 1
            },
            upgrade: [
                "eusociality"
            ]
        },
        outcomes: [
            "No more work for this shrimp! Of their particular variety! Now slightly different work! Go!",
            "Consider this a promotion.",
            "This shrimp is going to have to come in on weekends now, I'm afraid.",
            "We sure love micromanaging these tiny guys on an individual basis, don't we.",
            "This little shrimp is so happy to be picked out of the crowd."
        ],
        multiOutcomes: [
            "These are some pretty fluid castes.",
            "Promotions for everybody!",
            "We're reorganising the superorganism.",
            "The sponge must grow.",
            "The sponge is the life.",
            "Glory to the sponge. Glory to the shrimp mass."
        ],
        helpText: "让一只虾去收集资源，不是海藻。"
    },

    // LOBSTER JOBS ////////////////////////////////////////////////////////////////////////////////

    'getBerrier': {
        name: "得到龙虾孵卵者",
        effect: {
            resource: {
                'berrier': 1
            }
        },
        cost: [
            {resource: "lobster", costFunction: "constant", priceIncrease: 1},
            {resource: "clam", costFunction: "linear", priceIncrease: 30}
        ],
        max: "berrier",
        prereq: {
            resource: {
                'lobster': 1
            },
            upgrade: [
                "crustaceanBiology"
            ]
        },
        outcomes: [
            "We didn't need to see the process behind this.",
            "One lobster brimming with eggs to go.",
            "It's like some weird counterpart to the planter crab. But with eggs.",
            "Lobster with rocks ready to make a move. Oh, okay, eggs, whatever, see, they look like shiny pebbles from a distance and... oh, forget it."
        ],
        multiOutcomes: [
            "Berrier isn't even a word!",
            "Berries and eggs aren't even the same thing!",
            "How do these things swim with this much weighing them down?",
            "We aren't running out of volunteers any time soon.",
            "Did you see them fight for this job? Claws everywhere, I tell you!"
        ],
        helpText: "让龙虾专注于产卵。我们不知道他们是怎么做到的，要问就去问龙虾吧。"
    },

    'getHarvester': {
        name: "得到龙虾收割者",
        effect: {
            resource: {
                'harvester': 1
            }
        },
        cost: [
            {resource: "lobster", costFunction: "constant", priceIncrease: 1},
            {resource: "clam", costFunction: "linear", priceIncrease: 25},
            {resource: "sponge", costFunction: "linear", priceIncrease: 5}
        ],
        max: "harvester",
        prereq: {
            resource: {
                'lobster': 1
            },
            upgrade: [
                "crustaceanBiology"
            ]
        },
        outcomes: [
            "Yes, lobster, put these claws to better use.",
            "It is time for this one to seek more interesting prey. Wait. Wait, no, it's just as stationary. Never mind. False alarm.",
            "Lobster sticks to seabed!"
        ],
        multiOutcomes: [
            "Cut down the kelp forests!",
            "Rip the sponge and tear the kelp!",
            "Harvest the seafloor!",
            "The lobster tide shall claim the-- wait no you said harvesters. Okay. Adjusting that, then.",
            "These guys are pretty unenthusiastic about everything they do, aren't they."
        ],
        helpText: "训练龙虾比任何生物种植的速度还要快地切割海带。可持续发展！"
    },

    // DOLPHIN JOBS ////////////////////////////////////////////////////////////////////////////////

    'getPhilosopher': {
        name: "任命海豚哲学家",
        effect: {
            resource: {
                'philosopher': 1
            }
        },
        cost: [
            {resource: "dolphin", costFunction: "constant", priceIncrease: 1},
            {resource: "fish", costFunction: "linear", priceIncrease: 30},
            {resource: "coral", costFunction: "linear", priceIncrease: 10}
        ],
        max: "philosopher",
        prereq: {
            resource: {
                'dolphin': 1
            },
            upgrade: [
                "delphinePhilosophy"
            ]
        },
        outcomes: [
            "We've given a dolphin free opportunity to ramble. WHY?!",
            "Let's humour this dolphin's rambling.",
            "This philosopher might have some insight.",
            "Maybe this dolphin can answer the question of why we're even working with dolphins."
        ],
        multiOutcomes: [
            "We begrudgingly acknowledge that working together is providing us with new insights.",
            "It's time to wax poetic and ponder.",
            "These pretentious clicking jerks can sometimes raise a good point.",
            "Oh joy. We're encouraging them to talk more.",
            "What's wrong with shark science?!"
        ],
        helpText: "确定哪些是聪明的海豚，而不是整天重复那些无意义的句子的蠢海豚。"
    },

    'getTreasurer': {
        name: "训练海豚会计",
        effect: {
            resource: {
                'treasurer': 1
            }
        },
        cost: [
            {resource: "dolphin", costFunction: "constant", priceIncrease: 1},
            {resource: "fish", costFunction: "linear", priceIncrease: 20},
            {resource: "crystal", costFunction: "linear", priceIncrease: 20}
        ],
        max: "treasurer",
        prereq: {
            resource: {
                'dolphin': 1
            },
            upgrade: [
                "delphinePhilosophy"
            ]
        },
        outcomes: [
            "Treasurer of the dolphin treasures, go!",
            "We are trusting this dolphin with a lot. Is that wise?",
            "A dolphin is promoted to where it can do slightly more damage!",
            "Dolphin treasurer ready to do... whatever it is they do."
        ],
        multiOutcomes: [
            "Do we need this many treasurers?",
            "Should we be encouraging this?",
            "We require more crystals.",
            "You're might be playing a dangerous game trusting these guys.",
            "The treasury grows!"
        ],
        helpText: "让海豚去做一项更难的工作，涉及到珊瑚和水晶或其他东西的利息问题。"
    },

    'getBiologist': {
        name: "训练海豚生物学家",
        effect: {
            resource: {
                'biologist': 1
            }
        },
        cost: [
            {resource: "dolphin", costFunction: "constant", priceIncrease: 1},
            {resource: "fish", costFunction: "linear", priceIncrease: 10},
            {resource: "science", costFunction: "linear", priceIncrease: 20}
        ],
        max: "biologist",
        prereq: {
            resource: {
                'dolphin': 1
            },
            upgrade: [
                "dolphinBiology"
            ]
        },
        outcomes: [
            "Dolphin biologist graduated!",
            "Biologist trained.",
            "Dolphin dedicated to dolphin duty.",
            "Specialist dolphin ready for dolphin."
        ],
        multiOutcomes: [
            "More of them. Eesh.",
            "Dolphins proliferate.",
            "Dolphin biologists ready for whatever passes for their 'research'.",
            "Smug hedonists, the lot of them!",
            "The dolphin population regretfully grows."
        ],
        helpText: "训练海豚专攻于生物学。海豚生物学，很显然，会生产许多海豚。"
    },

    // WHALE JOBS ////////////////////////////////////////////////////////////////////////////////

    'getChorus': {
        name: "建立鲸鱼合唱团",
        effect: {
            resource: {
                'chorus': 1
            }
        },
        cost: [
            {resource: "whale", costFunction: "unique", priceIncrease: 1000}
        ],
        max: "chorus",
        prereq: {
            resource: {
                'whale': 1
            },
            upgrade: [
                "eternalSong"
            ]
        },
        outcomes: [
            "The chorus is made.",
            "The singers sing an immortal tune.",
            "The song is indescribable.",
            "Serenity, eternity.",
            "What purpose does the song have?",
            "Liquid infinity swirls around the grand chorus."
        ],
        helpText: "成为永恒之歌的演唱者。让歌声流过整个世界。"
    },

    // EEL JOBS ////////////////////////////////////////////////////////////////////////////////

    'getPit': {
        name: "挖鳗鱼坑",
        effect: {
            resource: {
                'pit': 1
            }
        },
        cost: [
            {resource: "eel", costFunction: "constant", priceIncrease: 3},
            {resource: "fish", costFunction: "linear", priceIncrease: 50},
            {resource: "sand", costFunction: "linear", priceIncrease: 20}
        ],
        max: "pit",
        prereq: {
            resource: {
                'eel': 1
            },
            upgrade: [
                "eelHabitats"
            ]
        },
        outcomes: [
            "Why does it take three eels? Oh well. We don't really need to know.",
            "Dig that pit. We can dig it.",
            "Let's get digging.",
            "Oh, hey, this hole's already empty. Well, isn't that something."
        ],
        multiOutcomes: [
            "Let's get digging.",
            "Eel tide rises.",
            "More eels! They're handy to have.",
            "Many eyes from the caves.",
            "Secret homes!",
            "The eels are content."
        ],
        helpText: "给鳗鱼做一个舒适的坑来生产更多鳗鱼。"
    },

    'getTechnician': {
        name: "训练鳗鱼科学家",
        effect: {
            resource: {
                'technician': 1
            }
        },
        cost: [
            {resource: "eel", costFunction: "constant", priceIncrease: 1},
            {resource: "fish", costFunction: "linear", priceIncrease: 30},
            {resource: "crystal", costFunction: "linear", priceIncrease: 5}
        ],
        max: "technician",
        prereq: {
            resource: {
                'eel': 1
            },
            upgrade: [
                "eelHabitats"
            ]
        },
        outcomes: [
            "We have a technician!",
            "Technical problems no more!",
            "No, the eel won't fix your computer.",
            "Eel technician!"
        ],
        multiOutcomes: [
            "Let's get technical!",
            "Qualified and certified!",
            "Support squad on the rise!",
            "Let us not question the nature of eel technical training.",
            "Science progresses!"
        ],
        helpText: "指导鳗鱼去研究鲨鱼科学。"
    },

    'getSifter': {
        name: "训练鳗鱼探索者",
        effect: {
            resource: {
                'sifter': 1
            }
        },
        cost: [
            {resource: "eel", costFunction: "constant", priceIncrease: 1},
            {resource: "fish", costFunction: "linear", priceIncrease: 30}
        ],
        max: "sifter",
        prereq: {
            resource: {
                'eel': 1
            },
            upgrade: [
                "eelHabitats"
            ]
        },
        outcomes: [
            "Eel sifter ready to find things!",
            "Eel ready to sift through the sands!",
            "Time to sift, eel. Time to seek, search and sift.",
            "Time for this little guy to find some goodies."
        ],
        multiOutcomes: [
            "Time to find the things!",
            "Sift. It's a fun word. Siiiiffft.",
            "Sifters scouring the seabed for some special stuff.",
            "Shifters ready to shift! Wait. No. Hang on.",
            "Sifting the seabed for scores of surprises!"
        ],
        helpText: "让鳗鱼专门去寻找海底有意思的事物。"
    },

    // CHIMAERA JOBS ////////////////////////////////////////////////////////////////////////////////

    'getTransmuter': {
        name: "引导银鲛转化者",
        effect: {
            resource: {
                'transmuter': 1
            }
        },
        cost: [
            {resource: "chimaera", costFunction: "constant", priceIncrease: 1},
            {resource: "jellyfish", costFunction: "linear", priceIncrease: 10},
            {resource: "sharkonium", costFunction: "linear", priceIncrease: 10}
        ],
        max: "transmuter",
        prereq: {
            resource: {
                'chimaera': 1
            },
            upgrade: [
                "chimaeraMysticism"
            ]
        },
        outcomes: [
            "Transmuter taught.",
            "The chimaera's eyes flicker with power.",
            "The water glows around the chimaera.",
            "The chimaera forms the material of progress."
        ],
        multiOutcomes: [
            "The chimaeras are now masters of matter.",
            "The transmuters revel in our revealed secrets.",
            "The process continues.",
            "The matter matters.",
            "The immaterial made material."
        ],
        helpText: "向银鲛展示转化的奥秘。"
    },

    'getExplorer': {
        name: "训练银鲛探索者",
        effect: {
            resource: {
                'explorer': 1
            }
        },
        cost: [
            {resource: "chimaera", costFunction: "constant", priceIncrease: 1},
            {resource: "jellyfish", costFunction: "linear", priceIncrease: 30},
            {resource: "crystal", costFunction: "linear", priceIncrease: 30}
        ],
        max: "explorer",
        prereq: {
            resource: {
                'chimaera': 1
            },
            upgrade: [
                "chimaeraMysticism"
            ]
        },
        outcomes: [
            "A seeker of mysteries is prepared.",
            "The chimaera explorer is ready for their journey.",
            "Explorer ready for some answers!",
            "The chimaera swims down to the ocean below."
        ],
        multiOutcomes: [
            "The exploration party is ready.",
            "Learn the secrets of the deeps!",
            "More mysteries to uncover.",
            "Ancient riddles for ancient creatures.",
            "Find the truth beneath the waves!"
        ],
        helpText: "帮助银鲛了解探索所需的知识。它们所做的努力会对科学有很大的帮助。"
    },

    // OCTOPUS JOBS ////////////////////////////////////////////////////////////////////////////////

    'getCollector': {
        name: "将章鱼专职成收集者",
        effect: {
            resource: {
                'collector': 1
            }
        },
        cost: [
            {resource: "octopus", costFunction: "constant", priceIncrease: 1},
            {resource: "clam", costFunction: "linear", priceIncrease: 50}
        ],
        max: "collector",
        prereq: {
            resource: {
                'octopus': 1
            },
            upgrade: [
                "octopusMethodology"
            ]
        },
        outcomes: [
            "An octopus is a collector now.",
            "Octopus, collector.",
            "The role has been assigned. Collector.",
            "The delegation has been made. Collector.",
            "This individual now collects."
        ],
        multiOutcomes: [
            "Collectors will retrieve that which has value to others.",
            "Collectors will collect what they feel is required.",
            "Collectors will begin their thankless harvest.",
            "Collectors will act as instructed."
        ],
        helpText: "委托章鱼收集水晶和珊瑚."
    },

    'getScavenger': {
        name: "将章鱼专职成拾荒者",
        effect: {
            resource: {
                'scavenger': 1
            }
        },
        cost: [
            {resource: "octopus", costFunction: "constant", priceIncrease: 1},
            {resource: "clam", costFunction: "linear", priceIncrease: 30}
        ],
        max: "scavenger",
        prereq: {
            resource: {
                'octopus': 1
            },
            upgrade: [
                "octopusMethodology"
            ]
        },
        outcomes: [
            "An octopus is a scavenger now.",
            "Octopus, scavenger.",
            "The role has been assigned. Scavenger.",
            "The delegation has been made. Scavenger.",
            "This individual now scavenges."
        ],
        multiOutcomes: [
            "Scavengers will retrieve that which has value to their kind.",
            "Scavengers will scavenge what they can from below.",
            "Scavengers will pry the substrate of future progress from the ocean floor.",
            "Scavengers will act as instructed."
        ],
        helpText: "委托章鱼去外面捡取海绵和沙子。"
    },

    // SHARK MACHINES ////////////////////////////////////////////////////////////////////////////////

    'getCrystalMiner': {
        name: "建造水晶矿机",
        effect: {
            resource: {
                'crystalMiner': 1
            }
        },
        cost: [
            {resource: "crystal", costFunction: "linear", priceIncrease: 100},
            {resource: "sand", costFunction: "linear", priceIncrease: 200},
            {resource: "sharkonium", costFunction: "linear", priceIncrease: 20}
        ],
        max: "crystalMiner",
        prereq: {
            resource: {
                'sharkonium': 20
            },
            upgrade: [
                "automation"
            ]
        },
        outcomes: [
            "Crystal miner activated.",
            "Crystal miner constructed.",
            "Mining machine online.",
            "Construction complete.",
            "Carve rock. Remove sand. Retrieve target."
        ],
        multiOutcomes: [
            "The machines rise.",
            "The miners dig.",
            "The crystal shall be harvested.",
            "Crystal miners are complete."
        ],
        helpText: "建造一台机器，来自动而高效地获取水晶。"
    },

    'getSandDigger': {
        name: "建造沙子挖掘机",
        effect: {
            resource: {
                'sandDigger': 1
            }
        },
        cost: [
            {resource: "sand", costFunction: "linear", priceIncrease: 500},
            {resource: "sharkonium", costFunction: "linear", priceIncrease: 150}
        ],
        max: "sandDigger",
        prereq: {
            resource: {
                'sharkonium': 150
            },
            upgrade: [
                "automation"
            ]
        },
        outcomes: [
            "Sand digger constructed.",
            "Sand digger reaches into the seabed.",
            "The digger begins to shuffle sand into its machine maw. Rays dart away.",
            "The machine is online.",
            "The machine acts immediately, shovelling sand."
        ],
        multiOutcomes: [
            "The machines increase in number.",
            "The diggers devour.",
            "All sand must be gathered.",
            "The rays are concerned.",
            "Devour the sands. Consume.",
            "Giant machines blot out our sun."
        ],
        helpText: "建造一台机器，来自动而高效地挖掘沙子。"
    },

    'getFishMachine': {
        name: "建造捕鱼机",
        effect: {
            resource: {
                fishMachine: 1
            }
        },
        cost: [
            {resource: "sharkonium", costFunction: "linear", priceIncrease: 100}
        ],
        max: "fishMachine",
        prereq: {
            resource: {
                'sharkonium': 100
            },
            upgrade: [
                "automation"
            ]
        },
        outcomes: [
            "Fish machine activated.",
            "Fish machine constructed.",
            "Fishing machine online.",
            "Construction complete.",
            "The quarry moves. But the machine is faster."
        ],
        multiOutcomes: [
            "One day there will be no fish left. Only the machines.",
            "Today the shark is flesh. Tomorrow, machine.",
            "Your metal servants can sate the hunger. The hunger for fish.",
            "The fishing machines are more efficient than the sharks. But they aren't very smart.",
            "Automated fishing.",
            "The power of many, many sharks, in many, many devices."
        ],
        helpText: "建造一台机器，来自动而高效地捕鱼。"
    },

    'getAutoTransmuter': {
        name: "建造自动转化机",
        effect: {
            resource: {
                'autoTransmuter': 1
            }
        },
        cost: [
            {resource: "crystal", costFunction: "linear", priceIncrease: 100},
            {resource: "sharkonium", costFunction: "linear", priceIncrease: 200}
        ],
        max: "autoTransmuter",
        prereq: {
            resource: {
                'sharkonium': 200
            },
            upgrade: [
                "engineering"
            ]
        },
        outcomes: [
            "Auto-transmuter activated.",
            "Auto-transmuter constructed.",
            "Transmutation machine online.",
            "Construction complete.",
            "Provide inputs. Only the output matters."
        ],
        multiOutcomes: [
            "Auto-transmuters are prepared.",
            "The difference between science and magic is reliable application.",
            "All is change.",
            "Change is all.",
            "The machines know many secrets, yet cannot speak of them."
        ],
        helpText: "建造一台机器，自动把沙子和水晶转化成鲨素。"
    },

    'getSkimmer': {
        name: "建造粉碎机",
        effect: {
            resource: {
                'skimmer': 1
            }
        },
        cost: [
            {resource: "junk", costFunction: "linear", priceIncrease: 300},
            {resource: "sharkonium", costFunction: "linear", priceIncrease: 200}
        ],
        max: "skimmer",
        prereq: {
            resource: {
                'junk': 100
            },
            upgrade: [
                "engineering"
            ]
        },
        outcomes: [
            "Skimmer activated.",
            "Skimmer constructed.",
            "Residue producer online.",
            "Construction complete.",
            "Sacrifices must be made for progress."
        ],
        multiOutcomes: [
            "The lesser resource becomes the greatest of all.",
            "Transmutation is limited. The recycler is greater.",
            "Consumption and production are two halves of the greater whole.",
            "The creations of sharks emerge from a pattern as old as their species."
        ],
        helpText: "建造一个机器，自动把资源回收成废料。"
    },

    'getPurifier': {
        name: "建造净水器",
        effect: {
            resource: {
                'purifier': 1
            }
        },
        cost: [
            {resource: "sharkonium", costFunction: "linear", priceIncrease: 500}
        ],
        max: "purifier",
        prereq: {
            resource: {
                'sharkonium': 500
            },
            upgrade: [
                "environmentalism"
            ]
        },
        outcomes: [
            "Purifier activated.",
            "Purifier constructed.",
            "Machine gills online.",
            "Construction complete.",
            "Not all machines carry such weight."
        ],
        multiOutcomes: [
            "We can almost hear these machines as they start. We can hear them speak. \"We will save you from your mistakes.\" No, I'm just, must be hearing things, ignore me.",
            "The problems of old will be solved by the new.",
            "The waters will return to clarity.",
            "The machines may destroy, but so too can they heal and repair.",
            "The end is not nearly so soon.",
            "Hope."
        ],
        helpText: "建造一台机器来恢复我们日益浑浊的水质。"
    },

    'getHeater': {
        name: "建造加热器",
        effect: {
            resource: {
                'heater': 1
            }
        },
        cost: [
            {resource: "sharkonium", costFunction: "linear", priceIncrease: 300}
        ],
        max: "heater",
        prereq: {
            resource: {
                'ice': 1,
                'sharkonium': 300
            },
            upgrade: [
                "thermalConditioning"
            ]
        },
        outcomes: [
            "Heater activated.",
            "Heater constructed.",
            "Climate control online.",
            "Construction complete.",
            "The end of ice."
        ],
        multiOutcomes: [
            "The ice age comes to a close.",
            "Is this replacing one form of destruction for another?",
            "Life becomes easier.",
            "The warmth. The warmth we desired so much.",
            "Life returns to the frozen sea.",
            "This world awakens."
        ],
        helpText: "建造一种能抵御寒冰的机器。"
    },

    // CRUSTACEAN MACHINES /////////////////////////////////////////////////////////

    'getSpongeFarmer': {
        name: "建造海绵种植机",
        effect: {
            resource: {
                'spongeFarmer': 1
            }
        },
        cost: [
            {resource: "coralglass", costFunction: "linear", priceIncrease: 200}
        ],
        max: "spongeFarmer",
        prereq: {
            resource: {
                'coralglass': 200
            },
            upgrade: [
                "coralCircuitry"
            ]
        },
        outcomes: [
            "Sponge farmer is active.",
            "Sponge farmer capable.",
            "This sponge farming machine clatters to life.",
            "This automated caretaker gets to work."
        ],
        multiOutcomes: [
            "Sponges are not hard to domesticate. It's harder to make them wild.",
            "The shrimp will be happier.",
            "There is something missing compared to our machines. Ours are slightly more menacing, but also more effective.",
            "Who needs this much sponge?"
        ],
        helpText: "这种甲壳类机器自动种植和收获海绵。"
    },

    'getBerrySprayer': {
        name: "建造龙虾孵卵机",
        effect: {
            resource: {
                'berrySprayer': 1
            }
        },
        cost: [
            {resource: "coralglass", costFunction: "linear", priceIncrease: 500}
        ],
        max: "berrySprayer",
        prereq: {
            resource: {
                'coralglass': 500,
                'lobster': 2
            },
            upgrade: [
                "coralCircuitry"
            ]
        },
        outcomes: [
            "Berry sprayer is active.",
            "Berry sprayer capable.",
            "This egg spraying machine clatters to life.",
            "This automated caretaker gets to work." // yeah, it's lazy, I know, but still just as appropriate
        ],
        multiOutcomes: [
            "Automation of population? What a terrifying concept.",
            "The machine rears lobster eggs. Wouldn't the shrimp want something like this too?",
            "There is an uneasiness about these machines that fills the sharks with concern.",
            "Why was this machine invented? Are we helping to prepare an army?"
        ],
        helpText: "这种甲壳机器给龙虾的卵分配最佳的孵化条件。"
    },

    'getGlassMaker': {
        name: "建造珊瑚晶制造机",
        effect: {
            resource: {
                'glassMaker': 1
            }
        },
        cost: [
            {resource: "coralglass", costFunction: "linear", priceIncrease: 400},
            {resource: "sand", costFunction: "linear", priceIncrease: 200},
            {resource: "coral", costFunction: "linear", priceIncrease: 200}
        ],
        max: "glassMaker",
        prereq: {
            resource: {
                'coralglass': 400
            },
            upgrade: [
                "coralCircuitry"
            ]
        },
        outcomes: [
            "Glass maker is active.",
            "Glass maker capable.",
            "This glass forging machine clatters to life.",
            "The coralglass factory whirrs and boils."
        ],
        multiOutcomes: [
            "Coralglass. The sharkonium of the shelled kind.",
            "The raw heat from these things could boil the ocean dry. How they do it, we don't know.",
            "Coralglass. So fragile, so beautiful, yet so durable. They make the machines in their own image.",
            "The fine intricacies of these machines are lost on us, given how much of our technological development involves our mouths."
        ],
        helpText: "这种甲壳机器自动制造珊瑚晶。"
    },

    // DOLPHIN MACHINES /////////////////////////////////////////////////////////

    'getSilentArchivist': {
        name: "建造档案管理机",
        effect: {
            resource: {
                'silentArchivist': 1
            }
        },
        cost: [
            {resource: "delphinium", costFunction: "linear", priceIncrease: 300},
            {resource: "science", costFunction: "linear", priceIncrease: 200}
        ],
        max: "silentArchivist",
        prereq: {
            resource: {
                'delphinium': 300
            },
            upgrade: [
                "dolphinTechnology"
            ]
        },
        outcomes: [
            "Silent archivist watches on.",
            "Silent archivist shows no bias.",
            "Silent archivist makes a note.",
            "Silent archivist views us with disdain."
        ],
        multiOutcomes: [
            "More archivers of our grand works as a collective.",
            "These machines share the same insights as their creators, but are much less painful to deal with.",
            "The design for these machines seems strangely familiar.",
            "These things are too silent. We aren't sure if they're even on.",
            "Science is nothing without review."
        ],
        helpText: "这种海豚的档案管理机，评论我们的科研成果，并将其分类写出目录。"
    },

    'getTirelessCrafter': {
        name: "建造豚素制造器",
        effect: {
            resource: {
                'tirelessCrafter': 1
            }
        },
        cost: [
            {resource: "delphinium", costFunction: "linear", priceIncrease: 200},
            {resource: "crystal", costFunction: "linear", priceIncrease: 200},
            {resource: "coral", costFunction: "linear", priceIncrease: 200}
        ],
        max: "tirelessCrafter",
        prereq: {
            resource: {
                'delphinium': 200
            },
            upgrade: [
                "dolphinTechnology"
            ]
        },
        outcomes: [
            "Tireless crafter fuses the matter.",
            "Tireless crafter never ceases.",
            "Tireless crafter lays foundation for a future.",
            "Tireless crafter is an accident waiting to happen."
        ],
        multiOutcomes: [
            "Delphinium. The warped counterpart to sharkonium.",
            "A silent, heatless process, much like the auto-transmuter's method of operation.",
            "Delphinium. We don't understand it. It feels a lot like sharkonium, but warmer.",
            "The complexity of these machines is unwarranted. The dolphins think themselves smarter, but we have simpler, more effective solutions."
        ],
        helpText: "这种海豚机器能制造豚素。不过对于我们它能做什么？这是一个谜。我猜，可能是用它来制造海豚的那些无用的机器？"
    },

    // OCTOPUS MACHINES /////////////////////////////////////////////////////////

    'getClamCollector': {
        name: "制造采蚌机",
        effect: {
            resource: {
                'clamCollector': 1
            }
        },
        cost: [
            {resource: "spronge", costFunction: "linear", priceIncrease: 50}
        ],
        max: "clamCollector",
        prereq: {
            resource: {
                'spronge': 50
            },
            upgrade: [
                "sprongeBiomimicry"
            ]
        },
        outcomes: [
            "Machine: clam collector. Operation: in progress.",
            "Machine: clam collector. Operation: beginning.",
            "Machine: clam collector. Result: clam collection.",
            "Machine: clam collector. Result: food for the masses."
        ],
        multiOutcomes: [
            "These machines feel strangely alive. They pulse and throb.",
            "There exist more clam collectors now.",
            "The biomachine expands.",
            "The octopuses tell me, find unity in efficiency. Find peace in automation."
        ],
        helpText: "这种章鱼机器收集蚌。有着简单的目的，一个简单的机器。"
    },

    'getEggBrooder': {
        name: "建造章鱼孵卵机",
        effect: {
            resource: {
                'eggBrooder': 1
            }
        },
        cost: [
            {resource: "spronge", costFunction: "linear", priceIncrease: 150},
            {resource: "octopus", costFunction: "constant", priceIncrease: 1}
        ],
        max: "eggBrooder",
        prereq: {
            resource: {
                'spronge': 150,
                'octopus': 10
            },
            upgrade: [
                "sprongeBiomimicry"
            ]
        },
        outcomes: [
            "Machine: egg brooder. Operation: in progress.",
            "Machine: egg brooder. Operation: beginning.",
            "Machine: egg brooder. Result: egg maintenance.",
            "Machine: egg brooder. Result: population rises.",
            "Machine: egg brooder. Cost: within acceptable parameters."
        ],
        multiOutcomes: [
            "These machines feel strangely alive. They pulse and throb.",
            "There exist more egg brooders now.",
            "The biomachine expands.",
            "The octopuses tell me, find unity in efficiency. Find peace in an optimised generation."
        ],
        helpText: "这种章鱼机器可以孵出章鱼卵。"
    },

    'getSprongeSmelter': {
        name: "建造棉素冶炼机",
        effect: {
            resource: {
                'sprongeSmelter': 1
            }
        },
        cost: [
            {resource: "spronge", costFunction: "linear", priceIncrease: 100}
        ],
        max: "sprongeSmelter",
        prereq: {
            resource: {
                'spronge': 100
            },
            upgrade: [
                "sprongeBiomimicry"
            ]
        },
        outcomes: [
            "Machine: spronge smelter. Operation: in progress.",
            "Machine: spronge smelter. Operation: beginning.",
            "Machine: spronge smelter. Result: spronge smelting.",
            "Machine: spronge smelter. Result: further development."
        ],
        multiOutcomes: [
            "These machines feel strangely alive. They pulse and throb.",
            "There exist more spronge smelters now.",
            "The biomachine expands.",
            "The octopuses tell me, find unity in efficiency. Find peace in an assured future."
        ],
        helpText: "这种章鱼机器将海绵变得具有工业性。当然需要废料作添加剂。"
    },

    'getSeaScourer': {
        name: "建造污染转化机",
        effect: {
            resource: {
                'seaScourer': 1
            }
        },
        cost: [
            {resource: "spronge", costFunction: "linear", priceIncrease: 100},
            {resource: "junk", costFunction: "linear", priceIncrease: 50}
        ],
        max: "seaScourer",
        prereq: {
            resource: {
                'spronge': 100,
                'tar': 1
            },
            upgrade: [
                "sprongeBiomimicry"
            ]
        },
        outcomes: [
            "Machine: sea scourer. Operation: in progress.",
            "Machine: sea scourer. Operation: beginning.",
            "Machine: sea scourer. Result: pollution conversion.",
            "Machine: sea scourer. Result: appropriating inefficiency."
        ],
        multiOutcomes: [
            "These machines feel strangely alive. They pulse and throb.",
            "There exist more sea scourers now.",
            "The biomachine expands.",
            "The octopuses tell me, find unity in efficiency. Find peace in the impermanence of mistakes."
        ],
        helpText: "这种章鱼机器将污染转化为有价值的资源。"
    },

    'getProstheticPolyp': {
        name: "建造珊瑚制造机",
        effect: {
            resource: {
                'prostheticPolyp': 1
            }
        },
        cost: [
            {resource: "spronge", costFunction: "linear", priceIncrease: 100},
            {resource: "coral", costFunction: "linear", priceIncrease: 50}
        ],
        max: "prostheticPolyp",
        prereq: {
            resource: {
                'spronge': 100,
                'coral': 50
            },
            upgrade: [
                "sprongeBiomimicry"
            ]
        },
        outcomes: [
            "Machine: prosthetic polyp. Operation: in progress.",
            "Machine: prosthetic polyp. Operation: beginning.",
            "Machine: prosthetic polyp. Result: coral generation.",
            "Machine: prosthetic polyp. Result: ecosystem restabilisation."
        ],
        multiOutcomes: [
            "These machines feel strangely alive. They pulse and throb.",
            "There exist more prosthetic polyps now.",
            "The biomachine expands.",
            "The octopuses tell me, find unity in efficiency. Find peace in creation."
        ],
        helpText: "这种章鱼机器合成珊瑚的速度比任何一群珊瑚虫都快"
    }

};

SharkGame.HomeActionCategories = {

    all: { // This category should be handled specially.
        name: "All",
        actions: []
    },

    basic: {
        name: "Basic",
        actions: [
            "catchFish",
            "prySponge",
            "getClam",
            "getJellyfish"
        ]
    },

    frenzy: {
        name: "Frenzy",
        actions: [
            "getShark",
            "getManta",
            "getCrab",
            "getShrimp",
            "getLobster",
            "getDolphin",
            "getWhale",
            "getEel",
            "getChimaera",
            "getOctopus"
        ]
    },

    professions: {
        name: "Jobs",
        actions: [
            "getDiver",
            "getScientist",
            "getLaser",
            "getPlanter",
            "getWorker",
            "getHarvester",
            "getPhilosopher",
            "getTreasurer",
            "getTechnician",
            "getSifter",
            "getTransmuter",
            "getExplorer",
            "getCollector",
            "getScavenger"
        ]
    },

    breeders: {
        name: "Producers",
        actions: [
            "getNurse",
            "getMaker",
            "getBrood",
            "getQueen",
            "getBerrier",
            "getBiologist",
            "getPit"
        ]
    },

    processing: {
        name: "Processing",
        actions: [
            "seaApplesToScience",
            "spongeToScience",
            "jellyfishToScience",
            "pearlConversion",
            "transmuteSharkonium",
            "smeltCoralglass",
            "fuseDelphinium",
            "forgeSpronge"
        ]
    },

    machines: {
        name: "Shark Machines",
        actions: [
            "getCrystalMiner",
            "getSandDigger",
            "getAutoTransmuter",
            "getFishMachine",
            "getSkimmer",
            "getPurifier",
            "getHeater"
        ]
    },

    otherMachines: {
        name: "Other Machines",
        actions: [
            "getSpongeFarmer",
            "getBerrySprayer",
            "getGlassMaker",
            "getSilentArchivist",
            "getTirelessCrafter",
            "getClamCollector",
            "getEggBrooder",
            "getSprongeSmelter",
            "getSeaScourer",
            "getProstheticPolyp"
        ]
    },

    unique: {
        name: "Unique",
        actions: [
            "getChorus"
        ]
    }
};