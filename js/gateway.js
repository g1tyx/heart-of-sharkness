SharkGame.Gateway = {

    NUM_ARTIFACTS_TO_SHOW: 3,
    NUM_PLANETS_TO_SHOW: 3,
    transitioning: false,
    selectedWorld: "",

    allowedWorlds: [
        "marine",
        "chaotic",
        "haven",
        "tempestuous",
        "violent",
        "abandoned",
        "shrouded",
        "frigid"
    ],

    artifactPool: [],
    planetPool: [],

    init: function() {
        // initialise artifact levels to 0 if they don't have a level
        // OTHERWISE KEEP THE EXISTING LEVEL
        _.each(SharkGame.Artifacts, function(artifactData) {
            if(!artifactData.level) {
                artifactData.level = 0;
            }
            artifactData.alreadyApplied = false;
        });
    },

    update: function() {
        var g = SharkGame.Gateway;
        g.updateArtifactButtons();

        var overlay = $('#overlay');
        var docHeight = $(window).height();
        overlay.height(docHeight);
    },

    enterGate: function(loadingFromSave) {
        var m = SharkGame.Main;
        var g = SharkGame.Gateway;

        // AWARD ESSENCE
        var essenceReward = 0;
        if(!loadingFromSave) {
            if(SharkGame.wonGame) {
                essenceReward = 1 + Math.floor(SharkGame.World.planetLevel / 5);
            } else {
                essenceReward = 0;
            }
            SharkGame.Resources.changeResource("essence", essenceReward);
        }

        // PREPARE ARTIFACTS
        g.prepareArtifactSelection(g.NUM_ARTIFACTS_TO_SHOW);

        // PREPARE PLANETS
        g.preparePlanetSelection(g.NUM_PLANETS_TO_SHOW);

        // SAVE
        SharkGame.Save.saveGame();

        // PREPARE GATEWAY PANE
        // set up classes
        var pane;
        if(!SharkGame.paneGenerated) {
            pane = SharkGame.Main.buildPane();
        } else {
            pane = $('#pane');
        }
        pane.addClass("gateway");

        var overlay = $('#overlay');
        overlay.addClass("gateway");
        var docHeight = $(document).height();

        // make overlay opaque
        overlay.height(docHeight);
        if(SharkGame.Settings.current.showAnimations) {
            overlay.show()
                .css("opacity", 0)
                .animate({opacity: 1.0}, 1000, "swing", function() {  // put back to 4000
                    g.cleanUp();
                    g.showGateway(essenceReward);
                });
        } else {
            overlay.show()
                .css("opacity", 1.0);
            g.cleanUp();
            g.showGateway(essenceReward);
        }
    },


    cleanUp: function() {
        var m = SharkGame.Main;
        // empty out the game stuff behind
        m.purgeGame();
        // resize overlay
        var docHeight = $(window).height();
        $('#overlay').height(docHeight);
    },

    showGateway: function(essenceRewarded) {
        var m = SharkGame.Main;
        var r = SharkGame.Resources;
        var g = SharkGame.Gateway;

        // get some useful numbers
        var essenceHeld = r.getResource("essence");
        var numenHeld = r.getResource("numen");

        // construct the gateway content
        var gatewayContent = $('<div>');
        gatewayContent.append($('<p>').html("你是一个在世界之间的空间里的鲨鱼。"));
        if(!SharkGame.wonGame) {
            gatewayContent.append($('<p>').html("现在还不清楚你是怎么来到这里的，但你记得那次惨败。").addClass("medDesc"));
        }
        gatewayContent.append($('<p>').html("一些看不见的东西说,").addClass("medDesc"));
        gatewayContent.append($('<em>').attr("id", "gatewayVoiceMessage").html(g.getVoiceMessage()));
        if(essenceRewarded > 0) {
            gatewayContent.append($('<p>').html("进入这个地方将会改变你，给你 <span class='essenceCount'>" + m.beautify(essenceRewarded) + "</span> 精髓."));
        }
        gatewayContent.append($('<p>').html("你拥有 <span id='essenceHeldDisplay' class='essenceCount'>" + m.beautify(essenceHeld) + "</span> 精髓."));
        if(numenHeld > 0) {
            var numenName = (numenHeld > 1) ? "numina" : "numen";
            gatewayContent.append($('<p>').html("You also have <span class='numenCount'>" + m.beautify(numenHeld) + "</span> " + numenName + ", 你散发出神性。"));
        }
        gatewayContent.append($('<p>').attr("id", "gatewayStatusMessage").addClass("medDesc"));

        // show end time
        var endRunInfoDiv = $('<div>');
        g.showRunEndInfo(endRunInfoDiv);
        gatewayContent.append(endRunInfoDiv);

        // add navigation buttons
        var navButtons = $('<div>').addClass("gatewayButtonList");
        SharkGame.Button.makeButton("backToGateway", "遗物", navButtons, function() {
            g.switchViews(g.showArtifacts);
        });
        SharkGame.Button.makeButton("backToGateway", "世界", navButtons, function() {
            g.switchViews(g.showPlanets);
        });
        gatewayContent.append(navButtons);

        m.showPane("世界通道", gatewayContent, true, 500, true);
        g.transitioning = false;
    },

    showRunEndInfo: function(containerDiv) {
        var m = SharkGame.Main;
        containerDiv.append($('<p>').html("<em>在最后的海洋里度过的时光:</em><br/>").append(m.formatTime(SharkGame.timestampRunEnd - SharkGame.timestampRunStart)));
    },

    showArtifacts: function() {
        var m = SharkGame.Main;
        var r = SharkGame.Resources;
        var g = SharkGame.Gateway;

        var essenceHeld = r.getResource("essence");

        // construct the gateway content
        var gatewayContent = $('<div>');
        gatewayContent.append($('<p>').html("你的意志会流进你无法控制的固体形态。<br>集中精神."));
        gatewayContent.append($('<p>').html("你拥有 <span id='essenceHeldDisplay' class='essenceCount'>" + m.beautify(essenceHeld) + "</span> 精髓."));
        gatewayContent.append($('<p>').attr("id", "gatewayStatusMessage").addClass("medDesc"));

        // show artifact pool
        if(_.size(g.artifactPool) === 0) {
            // we exhausted the pool (!!!)
            gatewayContent.append($('<p>').append($('<em>').html("\"You may not have achieved perfection, but it would take a deity to improve your capabilities further.\"")));
        } else {
            // there's something to show
            var artifactPool = $('<div>').addClass("gatewayButtonList");
            _.each(g.artifactPool, function(artifactName) {
                SharkGame.Button.makeButton("artifact-" + artifactName, artifactName, artifactPool, g.onArtifactButton);
            });
            gatewayContent.append(artifactPool);
            g.updateArtifactButtons();
        }

        // add return to gateway button
        var returnButtonDiv = $('<div>');
        SharkGame.Button.makeButton("backToGateway", "返回传送门", returnButtonDiv, function() {
            g.switchViews(g.showGateway);
        });
        gatewayContent.append(returnButtonDiv);

        m.showPane("遗物", gatewayContent, true, 500, true);
        g.transitioning = false;
    },

    showPlanets: function() {
        var m = SharkGame.Main;
        var r = SharkGame.Resources;
        var g = SharkGame.Gateway;

        // construct the gateway content
        var gatewayContent = $('<div>');
        gatewayContent.append($('<p>').html("其他世界在等待着。"));

        // show planet pool
        var planetPool = $('<div>').addClass("gatewayButtonList");
        _.each(g.planetPool, function(planetInfo) {
            SharkGame.Button.makeButton("planet-" + planetInfo.type, planetInfo.type + " " + planetInfo.level, planetPool, function() {
                g.selectedWorld = $(this).attr("id").split("-")[1];
                g.switchViews(g.confirmWorld);
            }).addClass("planetButton");
        });
        gatewayContent.append(planetPool);

        // add return to gateway button
        var returnButtonDiv = $('<div>');
        SharkGame.Button.makeButton("backToGateway", "返回传送门", returnButtonDiv, function() {
            g.switchViews(g.showGateway);
        });
        gatewayContent.append(returnButtonDiv);

        m.showPane("WORLDS", gatewayContent, true, 500, true);
        g.transitioning = false;
        g.updatePlanetButtons();
    },

    confirmWorld: function() {
        var m = SharkGame.Main;
        var r = SharkGame.Resources;
        var g = SharkGame.Gateway;

        var selectedWorldData = SharkGame.WorldTypes[g.selectedWorld];
        var planetLevel = 1;
        _.each(g.planetPool, function(generatedWorld) {
            if(generatedWorld.type === g.selectedWorld) {
                planetLevel = generatedWorld.level;
            }
        });

        // construct the gateway content
        var gatewayContent = $('<div>');
        gatewayContent.append($('<p>').html("旅行到 " + selectedWorldData.name + " 世界?"));

        // add world image
        var spritename = "planets/" + g.selectedWorld;
        var iconDiv = SharkGame.changeSprite(SharkGame.spriteIconPath, spritename, null, "planets/missing");
        if(iconDiv) {
            iconDiv.addClass("planetDisplay");
            var containerDiv = $('<div>').attr("id", "planetContainer");
            containerDiv.append(iconDiv);
            gatewayContent.append(containerDiv);
        }

        var attributeDiv = $('<div>');
        g.showPlanetAttributes(selectedWorldData, planetLevel, attributeDiv);
        gatewayContent.append(attributeDiv);

        // add confirm button
        var confirmButtonDiv = $('<div>');
        SharkGame.Button.makeButton("progress", "继续", confirmButtonDiv, function() {
            // kick back to main to start up the game again
            SharkGame.World.worldType = g.selectedWorld;
            SharkGame.World.planetLevel = planetLevel;
            SharkGame.Main.loopGame();
        });
        gatewayContent.append(confirmButtonDiv);


        // add return to planets button
        var returnButtonDiv = $('<div>');
        SharkGame.Button.makeButton("backToGateway", "重新考虑", returnButtonDiv, function() {
            g.switchViews(g.showPlanets);
        });
        gatewayContent.append(returnButtonDiv);

        m.showPane("确认", gatewayContent, true, 500, true);
        g.transitioning = false;
    },

    switchViews: function(callback) {
        var g = SharkGame.Gateway;
        if(!g.transitioning) {
            g.transitioning = true;
            if(SharkGame.Settings.current.showAnimations) {
                $('#pane').animate({opacity: 0.0}, 500, "swing", function() {
                    callback();
                });
            } else {
                callback();
            }
        }
    },

    prepareArtifactSelection: function(numArtifacts) {
        var g = SharkGame.Gateway;
        // empty existing pool
        g.artifactPool = [];

        // create pool of qualified artifacts
        var qualifiedArtifactPool = [];
        $.each(SharkGame.Artifacts, function(artifactName, artifactData) {
            var qualified = false;
            if(artifactData.required) {
                _.each(artifactData.required, function(resourceName) {
                    qualified = qualified || SharkGame.World.doesResourceExist(resourceName);
                })
            } else {
                qualified = true;
            }

            // check max level
            if(artifactData.max) {
                if(artifactData.level >= artifactData.max) {
                    qualified = false;
                }
            }

            if(qualified) {
                qualifiedArtifactPool.push(artifactName);
            }
        });

        // Reduce number of artifacts added to pool to however many we can actually have
        numArtifacts = Math.min(numArtifacts, qualifiedArtifactPool.length);
        // pull random items from the pool
        for(var i = 0; i < numArtifacts; i++) {
            var choice = SharkGame.choose(qualifiedArtifactPool);
            var index = qualifiedArtifactPool.indexOf(choice);
            // take it out of the qualified pool (avoid duplicates)
            qualifiedArtifactPool.splice(index, 1);
            // add choice to pool
            g.artifactPool.push(choice);
        }
    },

    onArtifactButton: function() {
        var button = $(this);
        var buttonName = button.attr("id");
        var artifactName = buttonName.split("-")[1];
        var artifactData = SharkGame.Artifacts[artifactName];
        var cost = artifactData.cost(artifactData.level);
        var essence = SharkGame.Resources.getResource("essence");
        if(essence >= cost) {
            SharkGame.Resources.changeResource("essence", -cost);
            artifactData.level++;
            var gatewayStatusMessageSel = $('#gatewayStatusMessage');
            if(artifactData.level >= artifactData.max) {
                gatewayStatusMessageSel.html("你到达了 " + artifactData.name + ". 的上限，不能再升级了.");
            } else {
                gatewayStatusMessageSel.html("你将精髓投入 " + artifactData.name + ", 升至级别 " + artifactData.level + ".");
            }
            $('#essenceHeldDisplay').html(SharkGame.Main.beautify(SharkGame.Resources.getResource("essence")));
        }
        // disable button until next frame
        button.prop("disabled", true);
    },

    updateArtifactButtons: function() {
        var g = SharkGame.Gateway;
        var r = SharkGame.Resources;
        var m = SharkGame.Main;
        var essenceHeld = r.getResource("essence");
        _.each(g.artifactPool, function(artifactName) {
            var button = $('#artifact-' + artifactName);
            if(button.length > 0) {
                var artifactData = SharkGame.Artifacts[artifactName];
                var cost = artifactData.cost(artifactData.level);
                var maxedOut = (artifactData.level >= artifactData.max);
                var enableButton = true;
                if(essenceHeld < cost || maxedOut) {
                    enableButton = false;
                }
                var purchaseLevel = maxedOut ? "Max" : (artifactData.level + 1);
                var label = artifactData.name +
                    "<br><span class='medDesc'>( Pwr <span class='essenceCountBrighter'>" + purchaseLevel + "</span> )</span>" +
                    "<br>" + artifactData.desc +
                    "<br><br><span class='medDesc'>" + artifactData.flavour + "</span><br>";
                if(!maxedOut) {
                    label += "</span><br>消耗: <span class='essenceCountBrighter'>" + m.beautify(cost) + "</span> 精髓";
                }
                button.prop("disabled", !enableButton).html(label);

                var spritename = "artifacts/" + artifactName;
                if(SharkGame.Settings.current.iconPositions !== "off") {
                    var iconDiv = SharkGame.changeSprite(SharkGame.spriteIconPath, spritename, null, "general/missing-artifact");
                    if(iconDiv) {
                        iconDiv.addClass("button-icon-" + SharkGame.Settings.current.iconPositions);
                        if(!enableButton) {
                            button.prepend($('<div>').append(iconDiv).addClass("tint"));
                        } else {
                            button.prepend(iconDiv);
                        }
                    }
                }
            }
        });
    },

    preparePlanetSelection: function(numPlanets) {
        var g = SharkGame.Gateway;
        // empty existing pool
        g.planetPool = [];

        // create pool of qualified types
        var qualifiedPlanetTypes = g.allowedWorlds.slice(0);

        // pull random types from the pool
        // for each type pulled, generated a random level for the planet
        // then add to the planet pool
        for(var i = 0; i < numPlanets; i++) {
            var choice = SharkGame.choose(qualifiedPlanetTypes);
            var index = qualifiedPlanetTypes.indexOf(choice);
            // take it out of the qualified pool (avoid duplicates)
            qualifiedPlanetTypes.splice(index, 1);

            // generate random level
            var newLevel = Math.floor(Math.max(SharkGame.World.planetLevel + (Math.random() * 10 - 5), 1));

            // add choice to pool
            g.planetPool.push({
                type: choice,
                level: newLevel
            });
        }
    },

    updatePlanetButtons: function() {
        var g = SharkGame.Gateway;
        var r = SharkGame.Resources;
        var m = SharkGame.Main;
        _.each(g.planetPool, function(planetData) {
            var buttonSel = $('#planet-' + planetData.type);
            if(buttonSel.length > 0) {
                var planetLevel = 1;
                _.each(g.planetPool, function(generatedWorld) {
                    if(generatedWorld.type === planetData.type) {
                        planetLevel = generatedWorld.level;
                    }
                });
                var deeperPlanetData = SharkGame.WorldTypes[planetData.type];
                var label = deeperPlanetData.name +
                    "<br><span class='medDesc'>( 气候等级 " + m.beautify(planetLevel) + " )</span>" +
                    "<br>" + deeperPlanetData.desc;

                buttonSel.html(label);

                var spritename = "planets/" + planetData.type;
                if(SharkGame.Settings.current.iconPositions !== "off") {
                    var iconDiv = SharkGame.changeSprite(SharkGame.spriteIconPath, spritename, null, "planets/missing");
                    if(iconDiv) {
                        iconDiv.addClass("button-icon-" + SharkGame.Settings.current.iconPositions);
                        buttonSel.prepend(iconDiv);
                    }
                }
            }
        });
    },

    applyArtifacts: function(force) {
        // handle general effects
        // special effects are handled by horrible spaghetti code sprinkled between this, World, and Resources
        $.each(SharkGame.Artifacts, function(artifactName, artifactData) {
            if(artifactData.effect && (!artifactData.alreadyApplied || force)) {
                artifactData.effect(artifactData.level);
                artifactData.alreadyApplied = true;
            }
        });
    },

    getVoiceMessage: function() {
        var message = "";
        var messagePool = [];
        var allMessages = SharkGame.Gateway.Messages;
        // the point of this function is to add to the message pool all available qualifying messages and then pick one
        var totalEssence = SharkGame.Resources.getTotalResource("essence");
        var lastPlanet = SharkGame.World.worldType;

        // if the game wasn't won, add loss messages
        if(!SharkGame.wonGame) {
            _.each(allMessages.loss, function(message) {
                messagePool.push(message);
            });
        } else {
            // determine which essence based messages should go into the pool
            _.each(allMessages.essenceBased, function(v) {
                var min = 0;
                if(v.min) {
                    min = v.min;
                }
                var max = Number.MAX_VALUE;
                if(v.max) {
                    max = v.max;
                }
                if(totalEssence >= min && totalEssence <= max) {
                    _.each(v.messages, function(message) {
                        messagePool.push(message);
                    });
                }
            });

            // determine which planet based messages should go into the pool
            var planetPool = allMessages.lastPlanetBased[lastPlanet];
            if(planetPool) {
                _.each(planetPool, function(message) {
                    messagePool.push(message);
                });
            }

            // finally just add all the generics into the pool
            _.each(allMessages.generic, function(message) {
                messagePool.push(message);
            });
        }

        message = SharkGame.choose(messagePool);
        return "\"" + message + "\"";
    },


    // GOD THIS IS A MESS
    // I'M SO SORRY FUTURE ME AND ANYONE ELSE READING THIS
    showPlanetAttributes: function(worldData, planetLevel, contentDiv) {
        // add known attributes
        var knownAttributeMax = SharkGame.Gateway.getMaxWorldQualitiesToShow();
        if(knownAttributeMax > 0) {
            var totalAttributes = _.size(worldData.modifiers);
            var ratio = (totalAttributes === 0) ? 1 : Math.min(1, knownAttributeMax / totalAttributes);
            contentDiv.append($('<p>').html("已知世界类型 (" + (Math.floor(ratio * 100)) + "%):"));
            var modifierList = $('<ul>').addClass("gatewayPropertyList");
            var upperLimit = Math.min(knownAttributeMax, totalAttributes);
            for(var i = 0; i < upperLimit; i++) {
                var modifier = worldData.modifiers[i];
                var modifierDescription = SharkGame.WorldModifiers[modifier.modifier].name;
                var target = modifier.resource;
                var resourceName = "";
                if(SharkGame.Resources.isCategory(target)) {
                    resourceName = SharkGame.ResourceCategories[target].name;
                } else {
                    resourceName = SharkGame.Main.toTitleCase(SharkGame.ResourceTable[target].name);
                }
                modifierList.append($('<li>').html(modifierDescription + " - " + resourceName + " (" + modifier.amount + ")").addClass("medDesc"));
            }
            contentDiv.append(modifierList);

            // if all modifiers are revealed, carry over to the gate requirements and abandoned resources
            var bonusPoints = knownAttributeMax - totalAttributes;
            if(bonusPoints > 0) {
                var gateSlots = _.size(worldData.gateCosts);
                var gateRatio = Math.min(1, bonusPoints / gateSlots);
                contentDiv.append($('<p>').html("已知世界门需求 (" + (Math.floor(gateRatio * 100)) + "%):"));
                var slotLimit = Math.min(bonusPoints, gateSlots);
                var gateList = $('<ul>').addClass("gatewayPropertyList");
                var gateKeySet = _.keys(worldData.gateCosts);
                for(var i = 0; i < slotLimit; i++) {
                    var gateSlot = gateKeySet[i];
                    var gateCost = Math.floor(worldData.gateCosts[gateSlot] * planetLevel * SharkGame.World.getGateCostMultiplier());
                    var resourceName = SharkGame.Main.toTitleCase(SharkGame.ResourceTable[gateSlot].singleName);
                    gateList.append($('<li>').html(resourceName + ": " + SharkGame.Main.beautify(gateCost)).addClass("medDesc"));
                }
                contentDiv.append(gateList);
                var totalBannedResources = _.size(worldData.absentResources);
                var bannedRatio = Math.min(1, bonusPoints / totalBannedResources);
                contentDiv.append($('<p>').html("已知缺少 (" + (Math.floor(bannedRatio * 100)) + "%):"));
                var bannedLimit = Math.min(bonusPoints, totalBannedResources);
                var bannedList = $('<ul>').addClass("gatewayPropertyList");
                for(var i = 0; i < bannedLimit; i++) {
                    var bannedResource = worldData.absentResources[i];
                    var resourceName = SharkGame.ResourceTable[bannedResource].singleName;
                    bannedList.append($('<li>').html(resourceName).addClass("smallDesc"));
                }
                contentDiv.append(bannedList);
            }
        }
    },

    getMaxWorldQualitiesToShow: function() {
        var psLevel = SharkGame.Artifacts.planetScanner.level;
        return (psLevel > 0) ? psLevel + 1 : 0;
    },

    deleteArtifacts: function() {
        _.each(SharkGame.Artifacts, function(artifactData) {
            artifactData.level = 0;
        });
    }

};


SharkGame.Gateway.Messages = {
    essenceBased: [
        {
            max: 1, messages: [
            "你好啊，新人.",
            "啊. 欢迎你, 新人.",
            "你的旅途才刚刚开始。",
            "欢迎来到你初始阶段的末尾之处。"
        ]
        },
        {
            min: 2, max: 10, messages: [
            "我看到了，你的才能正在增长",
            "你现在还很弱小，但正在慢慢变强。",
            "你在这次旅途中看到什么新东西了吗?",
            "你在旅程中发现了什么?",
            "你有注意到只有很少生物能跟着你穿过大门吗?"
        ]
        },
        {
            min: 11, max: 30, messages: [
            "How quickly do you travel through worlds?",
            "You are becoming familiar with this.",
            "Back so soon?",
            "Welcome back, to the space between spaces."
        ]
        },
        {
            min: 31, max: 50, messages: [
            "You are a traveller like any other.",
            "I see you here more than ever. Can you see me?",
            "Well met, shark friend.",
            "You remind me of myself, from a long, long time ago.",
            "Welcome back to irregular irreality."
        ]
        },
        {
            min: 51, max: 200, messages: [
            "What do you seek?",
            "Have you found your home yet?",
            "Surely your home lies but a jump or two away?",
            "Have you ever returned to one of the worlds you've been before?",
            "Can you find anyone else that journeys so frequently as you?",
            "You have become so strong. So powerful.",
            "I remember when you first arrived here, with confusion and terror in your mind."
        ]
        },
        {
            min: 201, messages: [
            "Your devotion to the journey is alarming.",
            "You exceed anything I've ever known.",
            "You are a force of will within the shell of a shark.",
            "It surprises me how much focus and dedication you show. Perhaps you may settle in your next world?",
            "Does your home exist?",
            "Is there an end to your quest?",
            "Why are you still searching? Many others would have surrendered to the odds by this point."
        ]
        }
    ],
    lastPlanetBased: {
        start: [
            "No other world you find will be as forgiving, newcomer.",
            "You have left the best of all possible worlds.",
            "It's all more difficult from here."
        ],
        marine: [
            "Did your last ocean feel all too familiar?",
            "Like your origins, but too different still.",
            "Was that world not your home?",
            "A blue world. A dream of a former life, perhaps."
        ],
        chaotic: [
            "You have survived the stranger world.",
            "A world on the brink of existence. Halfway between here and oblivion.",
            "You were given allies, yes, but at what cost?",
            "What a strange demand for the gate to possess.",
            "You are relieved the chaos is over, correct?"
        ],
        haven: [
            "A beautiful paradise. It may be a while before you find a world so peaceful.",
            "Did you ruin the world that fed you? There is no judgement here, only curiosity.",
            "A rare gem of a world. You will miss it, before long.",
            "What shining atoll do you leave behind? Those who could not follow you will surely live happily."
        ],
        tempestuous: [
            "You braved the maelstrom and came from it unscathed.",
            "A surprising victory from a veteran of the seas.",
            "Charge through the whirlpool. Give no quarter to the storm.",
            "The turbulent seas were no match for your prowess."
        ],
        violent: [
            "The boiling ocean only stirred you on.",
            "So hard to survive, yet so lucrative. A deadly balance.",
            "This is not the harshest world you will endure, surely.",
            "You are forged from the geothermal vents."
        ],
        abandoned: [
            "Do your previous worlds resemble this?",
            "Was that your first or second visit to that world?",
            "Do you wonder who abandoned the machines?",
            "What thoughts lie within your mind?",
            "Did you ever know this world before its death?"
        ],
        shrouded: [
            "The veil of mystery has yet to be pierced.",
            "Did the chimaeras recognise who you were?",
            "What did you learn from the dark world?",
            "Would you know your home if you found it?"
        ],
        frigid: [
            "Congratulations. Nature cannot touch you.",
            "Did you prefer arctic waters?",
            "Few worlds are so harsh. Fewer survive.",
            "You are a worthy traveller."
        ]
    },
    loss: [
        "No matter. You will succeed in future, no doubt.",
        "Never give in. Never surrender. Empty platitudes, perhaps, but sound advice nonetheless.",
        "Mistakes are filled with lessons. Learn never to repeat them.",
        "How does it feel to know that everyone who trusted you has perished?",
        "Another world dies. Was this one significant to you?",
        "A sad event. There is plenty of time to redeem yourself.",
        "What a pity. What a shame. I hear the mournful cries of a dying ocean.",
        "You can do better. You will do better. Believe.",
        "You wish to get back here so quickly?",
        "You and everything you knew has died. Perhaps not you. Perhaps not.",
        "One more try, perhaps?"
    ],
    generic: [
        "这里没有温暖与寒冷。只有麻木。",
        "你在寻找着什么?",
        "We are on the edge of infinity, peering into a boundless sea of potential.",
        "你可能看不见我. 不过不要担心. 我是可以看见你的.",
        "我是谁? 噢，这并不重要.不要这么着急.",
        "这是世界上鲨鱼的梦想？还是这是世界的梦想，反映在鲨鱼的身上？",
        "你位于一个十字路口. 做出抉择吧. 做出不能被轻易动摇的抉择.",
        "There are such sights to behold for the ones who can see here.",
        "你所面对的大海是我们前方的一条小径。",
        "You swim through liquid eternity. You are now, always, and forever.",
        "慷慨的鲨鱼回来了.",
        "你不断前进来提高你克服困难的能力。",
        "这个宇宙中没有什么你不能解决."
    ]
};