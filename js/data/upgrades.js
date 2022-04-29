SharkGame.Upgrades = {
    crystalBite: {
        name: "水晶咬合",
        desc: "使用晶体来辅助咬人!",
        researchedMessage: "奇异的牙齿打磨已经完成，鲨鱼现在可以更好地捕捉鱼了。",
        effectDesc: "鲨鱼的咬合效果x2。事实证明，他们在口腔外工作得更好!",
        cost: {
            science: 50,
            fish: 10
        },
        effect: {
            multiplier: {
                shark: 2
            }
        }
    },

    crystalSpade: {
        name: "水晶铲",
        desc: "在鳐鱼群中时尚而奇异的工具.",
        researchedMessage: "沙子现在更痛恨鳐鱼了,因为它们挖掘速度更快了!",
        effectDesc: "有了这些独特的挖掘工具，鳐鱼的效率x2。",
        cost: {
            science: 50,
            sand: 20
        },
        effect: {
            multiplier: {
                ray: 2
            }
        }
    },

    crystalContainer: {
        name: "水晶容器",
        desc: "用我们的水晶去做一些奇怪的瓶子。可能会有用？？？",
        researchedMessage: "好吧, 进入这个瓶子的不是水. 它让研究科学变得更容易!",
        effectDesc: "鲨鱼科学家生产科学的速度x2。",
        cost: {
            science: 100,
            crystal: 50
        },
        effect: {
            multiplier: {
                scientist: 2
            }
        }
    },

    statsDiscovery: {
        name: "存储洞穴",
        desc: "是时候把我们的资源转移到一个更好的地方了，我们找到了这样一个地方，但是需要装修一下。",
        researchedMessage: "我们获得的所有资源现在都储存在一个被淹没的洞穴系统中，希望不会再有水流把它们冲走了!",
        effectDesc: "在把东西存储在一个集中的位置后，我们现在终于知道我们在做什么了，有那么一点吧。",
        cost: {
            science: 150
        },
        required: {
            upgrades: [
                "crystalContainer"
            ]
        }
    },

    underwaterChemistry: {
        name: "水下化学",
        desc: "有了那个奇怪的瓶子, 我们现在可以把不同的东西放进去，看看会发生什么。",
        researchedMessage: "好吧, 并没有发现什么很有用的东西, 但是如果我们继续研究下去，我们肯定会在科学上有巨大的飞跃!",
        effectDesc: "有了对新发现化学的见解后，科学家的效果x2。",
        cost: {
            science: 200,
            crystal: 50
        },
        required: {
            upgrades: [
                "crystalContainer"
            ]
        },
        effect: {
            multiplier: {
                scientist: 2
            }
        }
    },

    seabedGeology: {
        name: "海底地质学",
        desc: "研究海洋的底部，来探究它丰富而深奥的秘密。",
        researchedMessage: "不只是我们发现了很多奇怪的东西，鳐鱼们也找到了更多的沙子!",
        effectDesc: "有了对海底及泥沙品种的了解，鳐鱼的效率x2。",
        cost: {
            science: 250,
            sand: 250
        },
        required: {
            upgrades: [
                "crystalContainer"
            ]
        },
        effect: {
            multiplier: {
                ray: 2
            }
        }
    },

    thermalVents: {
        name: "研究火山口",
        desc: "研究一下那些炽热的火山口，它们似乎在不断加热。",
        researchedMessage: "这是一个奇妙的，无尽的热源！它一定能为我们带来好东西！",
        effectDesc: "发现了未来科技的能量源。",
        cost: {
            science: 300,
            sand: 500
        },
        required: {
            upgrades: [
                "seabedGeology"
            ]
        }
    },

    spongeCollection: {
        name: "海绵收集",
        desc: "看这些东西散落在海底和礁石上，我们却不知道如何在不破坏它们的情况下收集它们。",
        researchedMessage: "在了解了海绵的脆弱和它们奇怪的多孔结构后，我们可以通过咬得轻点来收集它们。",
        effectDesc: "可以像收集鱼那样收集海绵了。",
        cost: {
            science: 400
        },
        required: {
            upgrades: [
                "seabedGeology"
            ],
            resources: [
                "sponge"
            ]
        }
    },

    clamScooping: {
        name: "挖蚌",
        desc: "这种生物在海底到处都是，但是无法分辨哪些是蚌，哪些是石块。",
        researchedMessage: "在耐心的研究下，我们发现蚌和石头有明显的区别。再也不会出现失误挖出石块的情况了。",
        effectDesc: "现在蚌能像鱼一样被收集，鳐鱼可以转职去挖蚌了。",
        cost: {
            science: 600
        },
        required: {
            upgrades: [
                "seabedGeology"
            ],
            resources: [
                "clam"
            ]
        }
    },

    pearlConversion: {
        name: "珍珠转化",
        desc: "蚌的内部有这些像水晶一样亮闪闪的珍珠。也许我们可以把它们转化成水晶？",
        researchedMessage: "很好, 我们现在可以把珍珠转化成水晶了, 但是我们需要更多蚌，大量的蚌，没错，要所有的蚌！",
        effectDesc: "现在可以把蚌内部的珍珠转化为水晶。也许有一天我们不需要所有的蚌。",
        cost: {
            science: 1500
        },
        required: {
            upgrades: [
                "clamScooping",
                "transmutation"
            ],
            resources: [
                "clam"
            ]
        }
    },

    jellyfishHunting: {
        name: "狩猎水母",
        desc: "在较远的水域中有许多水母，但是当尝试捕捉它们的时候，只会给我们带来疼痛。我们需要找到更好的方法。",
        researchedMessage: "捕捉水母的诀窍是要小心，回避它们的卷须.现在疼痛的是它们了.",
        effectDesc: "水母能像鱼一样被捕捉了. 嘿, 不管怎样它还是鱼, 对吗？",
        cost: {
            science: 800
        },
        required: {
            upgrades: [
                "seabedGeology"
            ],
            resources: [
                "jellyfish"
            ]
        }
    },

    laserRays: {
        name: "激光鳐鱼",
        desc: "使用神秘的鲨鱼科技，收集火山口的热量来供鳐鱼使用。",
        researchedMessage: "鳐鱼现在可以穿上装备，让它们把沙子变成水晶！未来就在前方！",
        effectDesc: "现在可以将鳐鱼转化为激光鳐鱼，来将沙子转化为水晶。",
        cost: {
            science: 100,
            sand: 2000,
            crystal: 100
        },
        required: {
            upgrades: [
                "thermalVents"
            ],
            resources: [
                "ray"
            ]
        }
    },

    automation: {
        name: "自动化",
        desc: "使用鲨素资源,我们可以让机械来生产，所以我们不需要去做所有事了。",
        researchedMessage: "现在我们不需做所有的事，因为机械帮我们都做了。未来就在前方！！",
        effectDesc: "可以制造机械来辅助生产。这对我们非常方便。",
        cost: {
            science: 1000,
            sharkonium: 100
        },
        required: {
            upgrades: [
                "thermalVents",
                "transmutation"
            ]
        }
    },

    environmentalism: {
        name: "环境保护论",
        desc: "大量使用机器可能会毁掉我们的大海，要找到解决这问题的方法。",
        researchedMessage: "我们确定通过技术产生的这些焦油能提炼成晶莹剔透的水!",
        effectDesc: "可以制造净化器来对抗其他机器产生的有害影响。可以叫它抗机器的机器？?",
        cost: {
            science: 500
        },
        required: {
            upgrades: [
                "automation"
            ],
            resources: [
                "tar"
            ]
        }
    },

    thermalConditioning: {
        name: "热调节",
        desc: "我们就要被冻死了！机器能产热，对吗？我们要快点研究这个！",
        researchedMessage: "大突破！如果我们把机器中有关安全保护的零件去除，它就会热的吓人！",
        effectDesc: "可以制造加热器来对抗寒冷。我们不想变成巨大的冰块!",
        cost: {
            science: 500
        },
        required: {
            upgrades: [
                "automation"
            ],
            resources: [
                "ice"
            ]
        }
    },

    engineering: {
        name: "工程学",
        desc: "现在的机器效率不够高。让我们学学如何把它做得更好！",
        researchedMessage: "机器现在比以前强多了！我们甚至在中途想出了新的设计！",
        effectDesc: "机器的效率x2（水晶机、捕鱼机、挖沙机）。现在可以制造粉碎机和自动转化机了。",
        cost: {
            science: 2000,
            sharkonium: 2000
        },
        required: {
            upgrades: [
                "automation"
            ]
        },
        effect: {
            multiplier: {
                crystalMiner: 2,
                fishMachine: 2,
                sandDigger: 2
            }
        }
    },

    recyclerDiscovery: {
        name: "回收利用",
        desc: "建立一个系统，把不需要的资源粉碎成基础单位，然后将其变成其他东西重新使用。",
        researchedMessage: "这东西真的很可怕，你可不要在输入口的地方游来游去。它应该能帮到我们!",
        effectDesc: "通过一个可怕的机械胃，能够把材料回收利用。但是它让我们不敢靠近。让我怀疑，这是通向未来的路吗？",
        cost: {
            science: 3000,
            sharkonium: 3000
        },
        required: {
            upgrades: [
                "automation"
            ]
        }
    },

    coralCircuitry: {
        name: "珊瑚晶电路",
        desc: "我们马上就能复制出甲壳生物的科技了。只差几个核心组件了。",
        researchedMessage: "我们解开了甲壳机器的秘密。它们的机器更环保，但是效率较低。",
        effectDesc: "我们可以建造一些安全但缓慢甲壳机器。",
        cost: {
            science: 3000,
            coralglass: 3000
        },
        required: {
            upgrades: [
                "automation",
                "coralglassSmelting"
            ],
            resources: [
                "coral",
                "sand"
            ]
        }
    },

    sprongeBiomimicry: {
        name: "棉素仿生学",
        desc: "章鱼学派认为仿生的机器才是最好的机器。我们现在对这种机器还不够了解。",
        researchedMessage: "通过让机器仿生，它们排放出了更多污染。这有些令人担忧，甚至是非常担忧。",
        effectDesc: "我们可以模仿章鱼使用的仿生技术，但它很快就把海洋弄得一团糟。所以非常危险。",
        cost: {
            science: 3000,
            spronge: 3000
        },
        required: {
            upgrades: [
                "automation",
                "industrialGradeSponge"
            ],
            resources: [
                "sponge",
                "junk"
            ]
        }
    },

    dolphinTechnology: {
        name: "海豚科技",
        desc: "这些温血而吱吱叫的生物可能有我们用得上的机器。让我们逆向工程，把它造出来吧。",
        researchedMessage: "海豚科技所建造的机器有复杂的晶体结构，不过这只是掩盖它功能有限的诡计罢了。它的内部和我们的机器没什么不同。",
        effectDesc: "我们反向建造出了一些海豚的机器。此外，我们也很遗憾地得知了这些设计的名称。",
        cost: {
            science: 3000,
            delphinium: 3000
        },
        required: {
            upgrades: [
                "automation",
                "aquamarineFusion"
            ],
            resources: [
                "coral",
                "crystal"
            ]
        }
    },

    agriculture: {
        name: "农业",
        desc: "狩猎-采集的生活方式已经逐渐的不适合我们了。也许我们应该把动物集中到一个地方，让他们生长。",
        researchedMessage: "当它们都在一个地方的时候，获得食物比以前容易多了。感觉整片海洋都是我们的储物洞了!",
        effectDesc: "由于有珊瑚和海绵的种植区，部分成员的效率x2（工人，种植者，会计，拾荒者）。",
        cost: {
            science: 500,
            sand: 1000
        },
        required: {
            upgrades: [
                "seabedGeology"
            ]
        },
        effect: {
            multiplier: {
                worker: 2,
                harvester: 2,
                treasurer: 2,
                scavenger: 2
            }
        }
    },

    kelpHorticulture: {
        name: "海带园艺",
        desc: "探究在海底种海带需要什么。或许这能帮到我们。",
        researchedMessage: "一种螃蟹专用的装置被研究出来，它能用来种植海带！这应该很有用。",
        effectDesc: "螃蟹现在可以成为海带种植蟹，然后就能够在海底种出一条有生命的绿色地毯。",
        cost: {
            science: 1000,
            sand: 2000
        },
        required: {
            upgrades: [
                "agriculture"
            ],
            resources: [
                "kelp"
            ]
        }
    },

    biology: {
        name: "生物学",
        desc: "什么是鲨鱼？除了许许多多的鱼，鲨鱼的体内还有什么？",
        researchedMessage: "随着对自身生物学知识的提高，鲨鱼现在可以专攻制造新鲨鱼品种。",
        effectDesc: "鲨鱼效率x2。你知道鲨鱼的卵不只会从鲨鱼中产生吗？",
        cost: {
            science: 400
        },
        required: {
            upgrades: [
                "underwaterChemistry",
                "agriculture"
            ]
        },
        effect: {
            multiplier: {
                shark: 2
            }
        }
    },

    xenobiology: {
        name: "异种生物学",
        desc: "我们找到一种奇怪的无脸生物，研究一下它是什么吧。",
        researchedMessage: "结果不确定!需要更多的研究。 这对科学肯定有好处!",
        effectDesc: "海带生产海苹果的速度x2。 海苹果可不是一种水果，而是一种生物。我们也可以解剖海苹果、水母和海绵来获得科学。",
        cost: {
            science: 600
        },
        required: {
            upgrades: [
                "agriculture"
            ],
            resources: [
                "seaApple",
                "jellyfish",
                "sponge"
            ]
        },
        effect: {
            multiplier: {
                kelp: 2
            }
        }
    },

    rayBiology: {
        name: "鳐鱼生物学",
        desc: "虽然鳐鱼和鲨鱼有着亲缘关系，我们却对它了解很少。如果我们能多了解它一些就好了。我们要做一个沙坑陷阱来抓住它。",
        researchedMessage: "很显然我们只需要问一下它们就好了。我们了解了鳐鱼是如何生产鳐鱼的。这个方式有点类似鲨鱼，但还是有着不同。",
        effectDesc: "鳐鱼和激光鳐鱼生产效率x2。在我们做了如此令人尴尬的事后，鲨鱼和鳐鱼的关系可能永远都无法恢复到像之前那样了。",
        cost: {
            science: 700,
            sand: 600
        },
        required: {
            upgrades: [
                "biology",
                "laserRays"
            ],
            resources: [
                "ray"
            ]
        },
        effect: {
            multiplier: {
                ray: 2,
                laser: 2
            }
        }
    },

    crabBiology: {
        name: "螃蟹生物学",
        desc: "螃蟹对于我们来说仍然有许多未知的谜团。他们会自我保护，挖出水晶，种下植物。他们为什么要这么做？螃蟹究竟是什么??",
        researchedMessage: "结果表明螃蟹是友好的甲壳类生物。他们向鲨鱼们展示了螃蟹一族的秘密。这秘密涉及到蛋，或者是什么其他的东西。我觉得这是蠕动着的蛋。",
        effectDesc: "螃蟹和种植蟹的效率x2。螃蟹一族都很不错，只是他们还是有些吓人，有些古怪。还好他们是我们的盟友!",
        cost: {
            science: 500,
            kelp: 100
        },
        required: {
            upgrades: [
                "biology",
                "sunObservation"
            ],
            resources: [
                "crab"
            ]
        },
        effect: {
            multiplier: {
                crab: 4,
                planter: 2
            }
        }
    },

    crustaceanBiology: {
        name: "甲壳生物学",
        desc: "这些与螃蟹有关的奇怪生物需要进一步研究。它们的外骨骼是什么?",
        researchedMessage: "我们已经知道了它们的甲壳的功能。它们的肢体太多了。",
        effectDesc: "虾和龙虾效率x2。龙虾现在可以去收集其他东西，或者盖在闪亮的蛋上，它们管这叫做“孵卵”，什么是孵卵？",
        cost: {
            science: 500,
            clam: 100
        },
        required: {
            upgrades: [
                "biology"
            ],
            resources: [
                "shrimp",
                "lobster"
            ]
        },
        effect: {
            multiplier: {
                shrimp: 2,
                lobster: 2
            }
        }
    },

    eusociality: {
        name: "真社会性",
        desc: "虾比我们想象的还要奇怪。他们有超出我们的理解力的先进社会制度。这是怎么回事?",
        researchedMessage: "我们学到了很多，比我们本要知道的的在居住地孵卵的虾后还要多。",
        effectDesc: "虾的生产效率x2。虾可以专职成虾后和虾工，我们再也不能睡得很香了。",
        cost: {
            science: 1000,
            sponge: 500
        },
        required: {
            upgrades: [
                "crustaceanBiology"
            ],
            resources: [
                "shrimp"
            ]
        },
        effect: {
            multiplier: {
                shrimp: 2
            }
        }
    },

    wormWarriors: {
        name: "战士虾",
        desc: "住在海绵孔里的虾经常受到外界不速之客的威胁。我们协作起来应该能帮到它们。",
        researchedMessage: "运用原初鲨鱼的自卫技术建立了一个新的虾种-战士虾。",
        effectDesc: "虾、虾后和虾工的效率x2，它们再也不用担心其他生物吃掉它们了。",
        cost: {
            science: 3000,
            shrimp: 300
        },
        required: {
            upgrades: [
                "eusociality"
            ],
            resources: [
                "shrimp"
            ]
        },
        effect: {
            multiplier: {
                shrimp: 2,
                queen: 2,
                worker: 2
            }
        }
    },

    cetaceanAwareness: {
        name: "认识鲸鱼",
        desc: "从远方观察这种生物，很难去分辨它是鲨鱼还是其他什么东西。我们要弄清楚这件事。",
        researchedMessage: "好吧, 我们发现, 海豚和鲸鱼的尾巴是水平的，而鲨鱼的尾巴是竖直的。此外，它们是温血动物，还有更大的脑子。这帮混蛋。",
        effectDesc: "鲸鱼和海豚效率x2，现在我们可以根据它们自称的“长处”来调整狩猎策略",
        cost: {
            science: 2000,
            fish: 500
        },
        required: {
            upgrades: [
                "biology"
            ],
            resources: [
                "dolphin",
                "whale"
            ]
        },
        effect: {
            multiplier: {
                dolphin: 2,
                whale: 2
            }
        }
    },

    dolphinBiology: {
        name: "海豚生物学",
        desc: "我们有好好研究过海豚吗？有过吗？好吧，我们马上就要去研究了",
        researchedMessage: "我们的提问让海豚感到烦躁，它们决定自己成立一个生物研究小组。",
        effectDesc: "海豚的效率x2，不过把一个很小的数字加倍后，它还是很小。此外，现在可以生产更多海豚了（开启海豚生物学家）。 <em>太棒了.</em>",
        cost: {
            science: 3000,
            fish: 1000
        },
        required: {
            upgrades: [
                "cetaceanAwareness"
            ],
            resources: [
                "dolphin"
            ]
        },
        effect: {
            multiplier: {
                dolphin: 2
            }
        }
    },

    delphinePhilosophy: {
        name: "海豚哲学",
        desc: "大家都知道鲸鱼是自然界中的哲学家。海豚则没有那么多。 即便如此，我们应该为它们对我们的关注而感激。",
        researchedMessage: "不要再总和海豚打交道了。它们有无数包含泡沫的比喻。那可是泡沫啊！再也不会像以前那样了。",
        effectDesc: "海豚生物学家效率x2，因为我们不再公开嘲笑它们了。此外，海豚对它们现在的工作感觉越来越舒适了（开启海豚哲学家、海豚会计）",
        cost: {
            science: 5000,
            fish: 1000
        },
        required: {
            upgrades: [
                "dolphinBiology"
            ],
            resources: [
                "dolphin"
            ]
        },
        effect: {
            multiplier: {
                biologist: 2
            }
        }
    },

    coralHalls: {
        name: "珊瑚屋",
        desc: "需求的增长永不会停止！它们现在想住在用珊瑚做成的房子里！这真的有必要吗？",
        researchedMessage: "我们不得不给他们建立了新的居住区。把房子建在较远的地方，气愤的我们不想看见它们。",
        effectDesc: "海豚更高兴了，所有种类海豚效率x2。这是双赢的局面，我们付出的则是自己的尊严和决心。唉。",
        cost: {
            science: 10000,
            coral: 2000
        },
        required: {
            upgrades: [
                "delphinePhilosophy"
            ],
            resources: [
                "dolphin"
            ]
        },
        effect: {
            multiplier: {
                dolphin: 2,
                philosopher: 2,
                treasurer: 2
            }
        }
    },

    eternalSong: {
        name: "永恒之歌",
        desc: "鲸鱼表示它们知道从上古传下来的一种歌谣的片段，这种歌谣能够连接世界。 我们可以收集它们知道的片段，然后再拼凑出完整的歌谣。",
        researchedMessage: "我们确定了整首永恒之歌和那扇大门有关。但我们现在还不知道它能做什么。",
        effectDesc: "现在可以组建鲸鱼合唱团来唱永恒之歌，不过我们不知道这会带来什么影响。",
        cost: {
            science: 1E9
        },
        required: {
            upgrades: [
                "cetaceanAwareness"
            ],
            resources: [
                "whale"
            ]
        }
    },

    eelHabitats: {
        name: "鳗鱼的栖息地",
        desc: "我们一直认为长在海底的这些生物是海带，但后来发现这不是海带。那么它们是什么呢?",
        researchedMessage: "在和鳗鱼讨论过它们居住的鳗鱼坑的安全性和海底洞的安全性后，我们对其有了一定了解，或许吧。",
        effectDesc: "鳗鱼的效率x2。我们知道了它们更喜欢居住什么样的环境。鳗鱼也能分配不同的工作。",
        cost: {
            science: 800,
            clam: 200
        },
        required: {
            upgrades: [
                "biology",
                "seabedGeology"
            ],
            resources: [
                "eel"
            ]
        },
        effect: {
            multiplier: {
                eel: 2
            }
        }
    },

    creviceCreches: {
        name: "提高鳗鱼坑质量",
        desc: "我们应该能找到让鳗鱼坑变得更舒适温暖的方法。",
        researchedMessage: "我们已经开发了一种设计来改善鳗鱼坑的质量，包括一个复杂的内部系统和地下空间。看，这里还有……这次我们不要在意那些细节了，好吗？",
        effectDesc: "鳗鱼、鳗鱼坑的生产效率x2，期待未来有更多小鳗鱼出生。",
        cost: {
            science: 800,
            clam: 200
        },
        required: {
            upgrades: [
                "eelHabitats"
            ],
            resources: [
                "eel"
            ]
        },
        effect: {
            multiplier: {
                eel: 2,
                pit: 2
            }
        }
    },

    bioelectricity: {
        name: "生物电",
        desc: "一定能找到控制某些鳗鱼身上能量的方法。我们都知道它有很大的能量。让鱼感觉很疼。",
        researchedMessage: "技术上说电鳗实际上是在与机器一起工作的时候从水中跳出来的。我们应该担心它吗?",
        effectDesc: "鳗鱼科学家效率x2，我们的机器效率x2（捕鱼、挖沙、转化、粉碎、净化、加热），太方便了!",
        cost: {
            science: 1600,
            clam: 400
        },
        required: {
            upgrades: [
                "eelHabitats",
                "engineering"
            ],
            resources: [
                "eel"
            ]
        },
        effect: {
            multiplier: {
                technician: 2,
                fishMachine: 2,
                sandDigger: 2,
                autoTransmuter: 2,
                skimmer: 2,
                purifier: 2,
                heater: 2
            }
        }
    },

    octopusMethodology: {
        name: "章鱼的方法论",
        desc: "章鱼表示它们知道如何去改善它们的机械和生活方式",
        researchedMessage: "我们不清楚是什么样的思维过程指导着这些多足的盟友，但是它们就是知道如何得到结果。",
        effectDesc: "章鱼可以专职成不同的工作，并且章鱼的机器效率x2",
        cost: {
            science: 8888,
            clam: 88
        },
        required: {
            upgrades: [
                "exploration"
            ],
            resources: [
                "octopus"
            ]
        },
        effect: {
            multiplier: {
                clamCollector: 2,
                eggBrooder: 2,
                sprongeSmelter: 2,
                seaScourer: 2,
                prostheticPolyp: 2
            }
        }
    },

    octalEfficiency: {
        name: "效率章鱼",
        desc: "章鱼希望进一步提高它们的生产力，从而提高集体利益。",
        researchedMessage: "由章鱼想出、传播的指令非常复杂，只有其他章鱼才能理解。这种情况令人头疼。",
        effectDesc: "所有类型章鱼效率x2，章鱼的机器效率x2。 在追寻效率中大家团结一致。",
        cost: {
            science: 88888,
            clam: 888
        },
        required: {
            upgrades: [
                "octopusMethodology"
            ],
            resources: [
                "octopus"
            ]
        },
        effect: {
            multiplier: {
                clamCollector: 2,
                eggBrooder: 2,
                sprongeSmelter: 2,
                seaScourer: 2,
                prostheticPolyp: 2,
                octopus: 2,
                collector: 2,
                scavenger: 2
            }
        }
    },

    chimaeraMysticism: {
        name: "神秘的银鲛",
        desc: "我们认识银鲛，但并不了解它们。我们需要调整思维来解开它们的谜。",
        researchedMessage: "在深思熟虑之后，银鲛对我们如此弱的理解力表示绝望，直接向我们分享它们的知识。",
        effectDesc: "银鲛现在可以专职成转化者或探索者，运用我们的知识来辅助生产或者在穿越深海后分享经验。。",
        cost: {
            science: 12000,
            jellyfish: 700
        },
        required: {
            upgrades: [
                "farExploration"
            ],
            resources: [
                "chimaera"
            ]
        }
    },

    abyssalEnigmas: {
        name: "深海之谜",
        desc: "银鲛从深海带回来了遗物，它们也无法解释这是什么东西。我们要一起研究一下这个东西。",
        researchedMessage: "好吧, 我们仍然不知道这是个什么东西，但是在这过程中部族之间建立了更牢固的关系。",
        effectDesc: "由于对大家更信任、更友好，所有种类银鲛的效率x2。此外我们依然不了解它们找到的东西是用来做什么的。",
        cost: {
            science: 40000,
            jellyfish: 2000
        },
        required: {
            upgrades: [
                "chimaeraMysticism"
            ],
            resources: [
                "chimaera"
            ]
        },
        effect: {
            multiplier: {
                chimaera: 2,
                transmuter: 2,
                explorer: 2
            }
        }
    },

    sunObservation: {
        name: "观测太阳",
        desc: "我们必须确认一下是什么使水面上传来奇怪而耀眼的光。",
        researchedMessage: "鲨鱼科学家发现了太阳! 同时他们也发现直接看太阳眼睛会痛。",
        effectDesc: "种植蟹效率x2, 虾的效率x4. 一个太阳值多少鱼? 我们可以看到太阳，但是它实际上在哪里呢？它是因为什么而出现的呢?",
        cost: {
            science: 5000
        },
        required: {
            upgrades: [
                "agriculture"
            ]
        },
        effect: {
            multiplier: {
                planter: 2,
                shrimp: 4
            }
        }
    },

    transmutation: {
        name: "转化",
        desc: "加热一些东西，再对它们进行科学研究，或许能做出一些新的东西。",
        researchedMessage: "发现了一种新的材料! 它被命名为鲨素。这也是它的发现者：鲨素博士的名字。",
        effectDesc: "可以将我们的一些资源转化成鲨素，这是通向未来的材料。",
        cost: {
            science: 1000,
            crystal: 2000,
            sand: 4000
        },
        required: {
            upgrades: [
                "thermalVents",
                "underwaterChemistry"
            ]
        }
    },

    coralglassSmelting: {
        name: "冶炼珊瑚晶",
        desc: "仔细观察甲壳生物冶炼的过程，学习它们的方法，用在制造珊瑚晶上面。",
        researchedMessage: "我们的甲壳盟友向我们展示了在水下制造玻璃的秘诀！这秘诀就是，阿……这很复杂。",
        effectDesc: "能够熔炼珊瑚晶，这是甲壳技术的关键性物质。",
        cost: {
            science: 1000,
            coral: 3000,
            sand: 3000
        },
        required: {
            upgrades: [
                "thermalVents",
                "crustaceanBiology"
            ],
            resources: [
                "coral",
                "sand"
            ]
        }
    },

    industrialGradeSponge: {
        name: "工业级海绵",
        desc: "我们的章鱼联系人告诉我们，向海绵中加入一些东西就能变得非常有用。我们来试试看吧。",
        researchedMessage: "通过向处理过的物质中注入海绵，我们就做出了棉素，这是一种通用的超级材料，它让我们为之疯狂！",
        effectDesc: "可以制造棉素, 它是章鱼科技的核心材料。",
        cost: {
            science: 1000,
            sponge: 2000,
            junk: 4000
        },
        required: {
            upgrades: [
                "thermalVents",
                "octopusMethodology"
            ],
            resources: [
                "sponge",
                "junk"
            ]
        }
    },

    aquamarineFusion: {
        name: "豚素转化",
        desc: "那些傲慢的海豚认为它们是唯一能制造出豚素的生物，豚素是他们的特有资源。是时候展示真正的技术了。",
        researchedMessage: "我们弄清楚了如何制造豚素。但看着转化过程中视野内那些奇怪的腐败物，让我们感觉很恶心。",
        effectDesc: "可以将一些资源转化成豚素。强调一下，豚素是本质上比鲨素次一等的物质。",
        cost: {
            science: 1000,
            coral: 4000,
            crystal: 4000
        },
        required: {
            upgrades: [
                "transmutation",
                "cetaceanAwareness"
            ],
            resources: [
                "coral",
                "crystal"
            ]
        }
    },

    exploration: {
        name: "探险",
        desc: "从我们生活的水域中游出来，看看我们能发现些什么!",
        researchedMessage: "发现了很多鱼群! 如此多不同种类的鱼! 除此以外，还有这么多未开发的沙子!",
        effectDesc: "鲨鱼和鳐鱼效率x2. 你知道大海是很广阔的吗？她太迷人了!",
        cost: {
            science: 5000,
            fish: 5000
        },
        required: {
            upgrades: [
                "seabedGeology",
                "sunObservation"
            ]
        },
        effect: {
            multiplier: {
                shark: 2,
                ray: 2
            }
        }
    },

    farExploration: {
        name: "更加遥远的探险",
        desc: "在距离家乡海域很远的地方探索。",
        researchedMessage: "发现一个水晶丰富的地方，这里还有着一个奇怪的，深邃的峡谷。",
        effectDesc: "螃蟹的效率x4。你知道大海比“广阔”还要更大吗？她太让人难以忘却了！",
        cost: {
            science: 8000,
            fish: 15000
        },
        required: {
            upgrades: [
                "exploration"
            ]
        },
        effect: {
            multiplier: {
                crab: 4
            }
        }
    },

    gateDiscovery: {
        name: "探索峡谷",
        desc: "这是一次危险而鲁莽的探险，去寻找一切能找到的东西。",
        researchedMessage: "在峡谷中发现了一种奇怪的构造体。这场探索的代价很大，但是收获更大!",
        effectDesc: "一些来自远古的设备潜伏在深处。",
        cost: {
            science: 1E6,
            shark: 1000,
            fish: 50000
        },
        required: {
            upgrades: [
                "farExploration"
            ]
        }
    },

    // SUPERSCIENCE

    ancestralRecall: {
        name: "对祖先的回忆",
        desc: "鲨鱼和鳐鱼都知道我们间有着共同的特征。用在朦胧的梦境中所看到的东西，把这个谜解开吧。",
        researchedMessage: "我们的祖先体型巨大，我们看到了它们和远古的生物，这些都激励我们变得更强！",
        effectDesc: "所有类型的鲨鱼、鳐鱼、鳗鱼效率x4。我们有着辉煌的过去。现在，正前往辉煌的未来。",
        cost: {
            science: 1E10
        },
        required: {
            upgrades: [
                "gateDiscovery"
            ],
            resources: [
                "shark",
                "ray",
                "chimaera"
            ]
        },
        effect: {
            multiplier: {
                shark: 4,
                diver: 4,
                science: 4,
                nurse: 4,
                ray: 4,
                maker: 4,
                laser: 4,
                chimaera: 4,
                transmuter: 4,
                explorer: 4
            }
        }
    },

    utilityCarapace: {
        name: "实用甲壳",
        desc: "有外骨骼已经很好了，但是如果调整一下的话，再加上珊瑚晶应该能把效果进一步提升。",
        researchedMessage: "甲壳中已经加入珊瑚晶了！甲壳生物现在去哪儿都带着它们的保护壳和工具。",
        effectDesc: "所有种类的螃蟹、虾和龙虾的效率x4。",
        cost: {
            science: 1E10
        },
        required: {
            upgrades: [
                "gateDiscovery",
                "coralglassSmelting"
            ],
            resources: [
                "crab",
                "shrimp",
                "lobster"
            ]
        },
        effect: {
            multiplier: {
                crab: 4,
                brood: 4,
                planter: 4,
                shrimp: 4,
                worker: 4,
                queen: 4,
                lobster: 4,
                berrier: 4,
                harvester: 4
            }
        }
    },

    primordialSong: {
        name: "初始之歌",
        desc: "甚至海豚都记得一首上古流传下来的歌曲。鲸鱼还记得的更多，不过很快就在两个种群间传播开了。",
        researchedMessage: "海豚被它们的集体意识所震撼和感动。它们一直安静着。鲸鱼似乎见惯了这种场面。",
        effectDesc: "所有鲸鱼和海豚的效率x4（不包括合唱团）。这首歌曲在生命出现前便存在了。",
        cost: {
            science: 1E10
        },
        required: {
            upgrades: [
                "gateDiscovery",
                "cetaceanAwareness"
            ],
            resources: [
                "dolphin",
                "whale"
            ]
        },
        effect: {
            multiplier: {
                dolphin: 4,
                biologist: 4,
                treasurer: 4,
                philosopher: 4,
                whale: 4
            }
        }
    },

    leviathanHeart: {
        name: "利维坦之心",
        desc: "鳗鱼温顺而谦逊，但在他们深处有着巨大的潜能。我们把这潜能释放出来吧。",
        researchedMessage: "我们发现了现在所熟知的鳗鱼和只在传说中看到过的远古巨蛇之间的联系。这项发现让所有鳗鱼都很兴奋，干活都变得有力起来。",
        effectDesc: "所有类型鳗鱼效率x4。 决心的力量能够克服许多困难。",
        cost: {
            science: 1E10
        },
        required: {
            upgrades: [
                "gateDiscovery",
                "bioelectricity"
            ],
            resources: [
                "eel"
            ]
        },
        effect: {
            multiplier: {
                eel: 4,
                pit: 4,
                sifter: 4,
                technician: 4
            }
        }
    },

    eightfoldOptimisation: {
        name: "八足优化",
        desc: "提高生产力。优化。 提升。变强。",
        researchedMessage: "生产力达到峰值。继续我们的路线，保持效率。",
        effectDesc: "所有种类的章鱼，以及它们的机械，效率x4.",
        cost: {
            science: 8E10
        },
        required: {
            upgrades: [
                "gateDiscovery",
                "octalEfficiency"
            ],
            resources: [
                "octopus"
            ]
        },
        effect: {
            multiplier: {
                octopus: 4,
                collector: 4,
                scavenger: 4,
                clamCollector: 4,
                eggBrooder: 4,
                sprongeSmelter: 4,
                seaScourer: 4,
                prostheticPolyp: 4
            }
        }
    },

    mechanisedAlchemy: {
        name: "机械炼金术",
        desc: "更多的工程学和转化学研究成果让我们可以改良我们的机械。",
        researchedMessage: "比起过去，我们现在模糊了科学和魔法的界限!",
        effectDesc: "所有鲨鱼机器效率x4。我们生产的快是因为利用机器，而不是在反对机器下出现的。",
        cost: {
            science: 1E10
        },
        required: {
            upgrades: [
                "gateDiscovery",
                "engineering"
            ],
            resources: [
                "sharkonium"
            ]
        },
        effect: {
            multiplier: {
                fishMachine: 4,
                crystalMiner: 4,
                sandDigger: 4,
                autoTransmuter: 4,
                skimmer: 4,
                purifier: 4,
                heater: 4
            }
        }
    },

    mobiusShells: {
        name: "莫比乌斯贝壳",
        desc: "甲壳技术复杂的晶体制品为了最大化的产量可以变得更好。",
        researchedMessage: "如此美丽。又如此不可实现,但是它又那么有效. 这是不可能实现的吗?那么我们正在看的又是什么呢?",
        effectDesc: "甲壳机器效率x4.它们的晶体贝壳不符合任何几何学，是无理由而存在的。",
        cost: {
            science: 1E9
        },
        required: {
            upgrades: [
                "gateDiscovery",
                "coralCircuitry"
            ],
            resources: [
                "coralglass"
            ]
        },
        effect: {
            multiplier: {
                spongeFarmer: 4,
                berrySprayer: 4,
                glassMaker: 4
            }
        }
    },

    imperialDesigns: {
        name: "帝国设计",
        desc: "一些海豚还记得来自它们家乡的机器，并有着备份的制造方案。",
        researchedMessage: "这些设计是不会成功的。来，我们来演示一下--噢，噢！它们居然成功了。好吧。",
        effectDesc: "海豚机器的效率x4。我们不得不承认，那些机器的质量没那么差。",
        cost: {
            science: 1E9
        },
        required: {
            upgrades: [
                "gateDiscovery",
                "dolphinTechnology"
            ],
            resources: [
                "delphinium"
            ]
        },
        effect: {
            multiplier: {
                tirelessCrafter: 4,
                silentArchivist: 4
            }
        }
    }

};