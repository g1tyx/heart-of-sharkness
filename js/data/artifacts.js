SharkGame.ArtifactUtil = {
    migratorCost: function(level) {
        return Math.floor(Math.pow(2, level + 1));
    },
    migratorEffect: function(level, resourceName) {
        if(level < 1) {
            return;
        }
        var amount = Math.pow(5, level);
        // force existence
        SharkGame.World.forceExistence(resourceName);
        var res = SharkGame.Resources.getTotalResource(resourceName);
        if(res < amount) {
            SharkGame.Resources.changeResource(resourceName, amount);
        }
    },
    totemCost: function(level) {
        return Math.floor(Math.pow(2.5, level + 1));
    },
    totemEffect: function(level, resourceList) {
        if(level < 1) {
            return;
        }
        var wr = SharkGame.World.worldResources;
        var multiplier = level + 1;
        _.each(resourceList, function(resourceName) {
            if(wr[resourceName].artifactMultiplier) {
                wr[resourceName].artifactMultiplier *= multiplier;
            } else {
                wr[resourceName].artifactMultiplier = multiplier;
            }
        });
    }
};

SharkGame.Artifacts = {
    permanentMultiplier: {
        name: "时间海葵",
        desc: "所有资源产量翻倍",
        flavour: "生物居住在海洋中，它们也居住在因果当中。",
        max: 5,
        cost: function(level) {
            return Math.floor(Math.pow(10, level + 1));
        },
        effect: function(level) {
            SharkGame.Resources.specialMultiplier = Math.max((2 * level), 1);
        }
    },
    planetTerraformer: {
        name: "行星塑造",
        desc: "减弱行星气候的危害性",
        flavour: "智慧不仅仅是改变自身来适应环境，能也改变环境来适应你。",
        max: 10,
        cost: function(level) {
            return Math.floor(Math.pow(4, level + 1));
        }
        // effect is handled specially
        // check SharkGame.World.getTerraformMultiplier
    },
    gateCostReducer: {
        name: "世界门控制者",
        desc: "减少世界门的需求.",
        flavour: "对未知的力量只能到达这么远。",
        max: 10,
        cost: function(level) {
            return Math.floor(Math.pow(3, level + 1));
        }
        // effect is handled specially
        // check SharkGame.World.getGateCostMultiplier
    },
    planetScanner: {
        name: "远见",
        desc: "在世界旅行前揭示其他世界的特性。",
        flavour: "知识可能不会改变命运，但却能转移命运。",
        max: 15,
        cost: function(level) {
            return Math.floor(Math.pow(1.5, level + 1));
        }
        // effect is handled specially
        // check SharkGame.Gateway.getMaxWorldQualitiesToShow
    },
    sharkMigrator: {
        name: "鲨鱼迁移",
        desc: "当你去下一个世界的时候，带走一些鲨鱼。",
        flavour: "精髓制造了一个屏障。鲨鱼在世界之间是脆弱的。",
        max: 10,
        required: ["shark"],
        cost: SharkGame.ArtifactUtil.migratorCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.migratorEffect(level, "shark");
        }
    },
    rayMigrator: {
        name: "鳐鱼迁移",
        desc: "当你去下一个世界的时候，带走一些鳐鱼。",
        flavour: "世界之门无法掩藏沙子",
        max: 10,
        required: ["ray"],
        cost: SharkGame.ArtifactUtil.migratorCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.migratorEffect(level, "ray");
        }
    },
    crabMigrator: {
        name: "螃蟹移居",
        desc: "当你去下一个世界的时候，带走一些螃蟹。",
        flavour: "用精练的壳来保持螃蟹的活力。",
        max: 10,
        required: ["crab"],
        cost: SharkGame.ArtifactUtil.migratorCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.migratorEffect(level, "crab");
        }
    },
    shrimpMigrator: {
        name: "虾移居",
        desc: "当你去下一个世界的时候，带走一些虾。",
        flavour: "虾产生新的虾。",
        max: 10,
        required: ["shrimp"],
        cost: SharkGame.ArtifactUtil.migratorCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.migratorEffect(level, "shrimp");
        }
    },
    lobsterMigrator: {
        name: "龙虾移居",
        desc: "当你去下一个世界的时候，带走一些龙虾。",
        flavour: "在星海中放松",
        max: 10,
        required: ["lobster"],
        cost: SharkGame.ArtifactUtil.migratorCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.migratorEffect(level, "lobster");
        }
    },
    dolphinMigrator: {
        name: "海豚移居",
        desc: "当你去下一个世界的时候，带走一些海豚。",
        flavour: "他们会发现这种通行方式非常熟悉。",
        max: 10,
        required: ["dolphin"],
        cost: SharkGame.ArtifactUtil.migratorCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.migratorEffect(level, "dolphin");
        }
    },
    whaleMigrator: {
        name: "鲸鱼移居",
        desc: "当你去下一个世界的时候，带走一些鲸鱼。",
        flavour: "They need no protection, only persuasion.",
        max: 10,
        required: ["whale"],
        cost: SharkGame.ArtifactUtil.migratorCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.migratorEffect(level, "whale");
        }
    },
    eelMigrator: {
        name: "鳗鱼移居",
        desc: "当你去下一个世界的时候，带走一些鳗鱼。",
        flavour: "精髓打开的隧道让他们进入一个新的领域。",
        max: 10,
        required: ["eel"],
        cost: SharkGame.ArtifactUtil.migratorCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.migratorEffect(level, "eel");
        }
    },
    chimaeraMigrator: {
        name: "银鲛移居",
        desc: "当你去下一个世界的时候，带走一些银鲛。",
        flavour: "光线是难以忍受的。精髓的亮度都变弱了。",
        max: 10,
        required: ["chimaera"],
        cost: SharkGame.ArtifactUtil.migratorCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.migratorEffect(level, "chimaera");
        }
    },
    octopusMigrator: {
        name: "章鱼移居",
        desc: "当你去下一个世界的时候，带走一些章鱼。",
        flavour: "世界之门挑战了理性，这对理性的头脑来说是不舒服的。",
        max: 10,
        required: ["octopus"],
        cost: SharkGame.ArtifactUtil.migratorCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.migratorEffect(level, "octopus");
        }
    },
    sharkTotem: {
        name: "鲨鱼图腾",
        desc: "增加所有种类鲨鱼的效率。",
        flavour: "去狩猎. 去捕捉. 去赢.",
        max: 10,
        required: ["shark"],
        cost: SharkGame.ArtifactUtil.totemCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.totemEffect(level, ["shark", "scientist", "nurse", "diver"]);
        }
    },
    rayTotem: {
        name: "鳐鱼图腾",
        desc: "增加所有种类鳐鱼的效率。",
        flavour: "在优雅和宁静中跨越海洋。",
        max: 10,
        required: ["ray"],
        cost: SharkGame.ArtifactUtil.totemCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.totemEffect(level, ["ray", "laser", "maker"]);
        }
    },
    crabTotem: {
        name: "螃蟹图腾",
        desc: "增加所有种类螃蟹的效率。",
        flavour: "没有不被转化的石头",
        max: 10,
        required: ["crab"],
        cost: SharkGame.ArtifactUtil.totemCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.totemEffect(level, ["crab", "planter", "brood"]);
        }
    },
    shrimpTotem: {
        name: "虾图腾",
        desc: "增加所有种类虾的效率。",
        flavour: "蜂群思维唤醒。",
        max: 10,
        required: ["shrimp"],
        cost: SharkGame.ArtifactUtil.totemCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.totemEffect(level, ["shrimp", "worker", "queen"]);
        }
    },
    lobsterTotem: {
        name: "龙虾图腾",
        desc: "增加所有种类龙虾的效率。",
        flavour: "海床就是无价之宝。",
        max: 10,
        required: ["lobster"],
        cost: SharkGame.ArtifactUtil.totemCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.totemEffect(level, ["lobster", "berrier", "harvester"]);
        }
    },
    dolphinTotem: {
        name: "海豚图腾",
        desc: "增加所有种类海豚的效率。",
        flavour: "有巨大威胁的被流放者",
        max: 10,
        required: ["dolphin"],
        cost: SharkGame.ArtifactUtil.totemCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.totemEffect(level, ["dolphin", "philosopher", "biologist", "treasurer"]);
        }
    },
    whaleTotem: {
        name: "鲸鱼图腾",
        desc: "增加鲸鱼的效率。",
        flavour: "歌谣和秘密的守护者",
        max: 10,
        required: ["whale"],
        cost: SharkGame.ArtifactUtil.totemCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.totemEffect(level, ["whale"]);
        }
    },
    eelTotem: {
        name: "鳗鱼图腾",
        desc: "增加所有种类鳗鱼的效率。",
        flavour: "典雅蛇形, 才华横溢.",
        max: 10,
        required: ["eel"],
        cost: SharkGame.ArtifactUtil.totemCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.totemEffect(level, ["eel", "sifter", "pit", "technician"]);
        }
    },
    chimaeraTotem: {
        name: "银鲛图腾",
        desc: "增加所有种类银鲛的效率。",
        flavour: "浪子的后代返回了。",
        max: 10,
        required: ["chimaera"],
        cost: SharkGame.ArtifactUtil.totemCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.totemEffect(level, ["chimaera", "transmuter", "explorer"]);
        }
    },
    octopusTotem: {
        name: "章鱼图腾",
        desc: "增加所有种类章鱼的效率。",
        flavour: "冷静、理性的回应直达最大化回报。",
        max: 10,
        required: ["octopus"],
        cost: SharkGame.ArtifactUtil.totemCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.totemEffect(level, ["octopus", "collector", "scavenger"]);
        }
    },
    progressTotem: {
        name: "发展图腾",
        desc: "增加鲨鱼机器的效率。",
        flavour: "进步可以放缓，但绝不能停止。",
        max: 10,
        cost: SharkGame.ArtifactUtil.totemCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.totemEffect(level, ["fishMachine", "sandDigger", "autoTransmuter", "crystalMiner", "skimmer", "purifier", "heater"]);
        }
    },
    carapaceTotem: {
        name: "甲壳图腾",
        desc: "提高甲壳机器的效率",
        flavour: "甲壳机器生产较慢，但胜在清洁。",
        max: 10,
        required: ["shrimp", "lobster"],
        cost: SharkGame.ArtifactUtil.totemCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.totemEffect(level, ["spongeFarmer", "berrySprayer", "glassMaker"]);
        }
    },
    inspirationTotem: {
        name: "灵感图腾",
        desc: "增加海豚机器的效率",
        flavour: "昔日辉煌的梦想。",
        max: 10,
        required: ["dolphin"],
        cost: SharkGame.ArtifactUtil.totemCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.totemEffect(level, ["silentArchivist", "tirelessCrafter"]);
        }
    },
    industryTotem: {
        name: "工业图腾",
        desc: "增加章鱼机器的效率",
        flavour: "找到效率上的统一性。寻求八进制合理性。",
        max: 10,
        required: ["octopus"],
        cost: SharkGame.ArtifactUtil.totemCost,
        effect: function(level) {
            SharkGame.ArtifactUtil.totemEffect(level, ["clamCollector", "sprongeSmelter", "seaScourer", "prostheticPolyp"]);
        }
    },
    wardingTotem: {
        name: "守护图腾",
        desc: "减少有害物质的不良影响",
        flavour: "结束是不可避免的，但等待可以延长。",
        max: 10,
        required: ["tar", "ice"],
        cost: SharkGame.ArtifactUtil.totemCost,
        effect: function(level) {
            if(level < 1) {
                return;
            }
            var resourceList = ["tar", "ice"];
            var wr = SharkGame.World.worldResources;
            var multiplier = 1 / (level + 1);
            _.each(resourceList, function(resourceName) {
                if(wr[resourceName].artifactMultiplier) {
                    wr[resourceName].artifactMultiplier *= multiplier;
                } else {
                    wr[resourceName].artifactMultiplier = multiplier;
                }
            });
        }
    }
};