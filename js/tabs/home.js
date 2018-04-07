SharkGame.Home = {

    tabId: "home",
    tabDiscovered: true,
    tabName: "家",
    tabBg: "img/bg/bg-homesea.png",

    currentButtonTab: null,
    currentExtraMessageIndex: null,

    // Priority: later messages display if available, otherwise earlier ones.
    extraMessages: [
        // FIRST RUN
        {
            message: "&nbsp<br>&nbsp"
        },
        {
            unlock: {resource: {fish: 5}},
            message: "你吸引了鲨鱼的注意。也许他们可以帮你抓鱼!<br>&nbsp"
        },
        {
            unlock: {resource: {shark: 1}},
            message: "更多的鲨鱼游过去，充满好奇和警惕。<br>&nbsp"
        },
        {
            unlock: {resource: {fish: 15}},
            message: "有些鳐鱼飘过去了。<br>&nbsp"
        },
        {
            unlock: {resource: {shark: 1, ray: 1}},
            message: "你们现在有点团队的样子了.<br>&nbsp"
        },
        {
            unlock: {resource: {shark: 4, ray: 4}},
            message: "一些好奇的螃蟹过来了.<br>&nbsp"
        },
        {
            unlock: {resource: {shark: 1, ray: 1, crab: 1}},
            message: "你新组建的部落由你来领导!<br>&nbsp"
        },
        {
            unlock: {resource: {shark: 1, crystal: 10}},
            message: "这些水晶很耀眼. 一些鲨鱼好奇地盯着它们.<br>&nbsp"
        },
        {
            unlock: {resource: {scientist: 1}},
            message: "科学家鲨鱼在它们的学校中游动着.<br>&nbsp"
        },
        {
            unlock: {upgrade: ["crystalContainer"]},
            message: "需要更多的发现.<br>&nbsp"
        },
        {
            unlock: {resource: {nurse: 1}},
            message: "鲨鱼的数量正在随着时间流逝而增长.<br>&nbsp"
        },
        {
            unlock: {upgrade: ["exploration"]},
            message: "从遥远的地方，传来一阵阵微弱的歌声和哭泣.<br>&nbsp"
        },
        {
            unlock: {upgrade: ["automation"]},
            message: "机器正在为你工作.<br>机器比你和其他任何鲨鱼生产得都快."
        },
        {
            unlock: {upgrade: ["farExploration"]},
            message: "这个地方不是你的家. 你记忆中的是如水晶般湛蓝的海洋.<br>来自深渊的召唤."
        },
        {
            unlock: {upgrade: ["gateDiscovery"]},
            message: "这奇怪的门进入了我们的视线。一定要解开它的秘密。<br>&nbsp"
        },
        // LATER RUNS
        // INITIAL WORLD STATUSES
        {
            unlock: {world: "chaotic"},
            message: "压倒性的增援部队。压倒性的一切。所以很难集中注意。<br>&nbsp"
        },
        {
            unlock: {world: "haven"},
            message: "海洋中有丰富的生物，但是它不是我的家乡。<br>&nbsp"
        },
        {
            unlock: {world: "marine"},
            message: "这里的鱼永远不会抓完。这个地方让我感到很亲切。<br>&nbsp"
        },
        {
            unlock: {world: "tempestuous"},
            message: "风暴不会停止, 许多鱼都迷失在剧烈的痛苦当中.<br>&nbsp"
        },
        {
            unlock: {world: "violent"},
            message: "海底灼热的裂口中喷出大量高温的水。<br>年幼的生命无处容身。"
        },
        {
            unlock: {world: "abandoned"},
            message: "海中的焦油堵塞了所有鱼的腮。<br>这个即将毁灭的世界想把所有生命都拉入地狱。"
        },
        {
            unlock: {world: "shrouded"},
            message: "更容易能找到水晶，但是黑暗使得其他资源更难被收集。<br>&nbsp"
        },
        {
            unlock: {world: "frigid"},
            message: "如此寒冷. 储备的食物很快就被冻结了.非常难以咀嚼.<br>&nbsp"
        },
        // BANKED ESSENCE
        {
            unlock: {resource: {essence: 10}},
            message: "其他鲨鱼服从你，尊敬你，但是它们似乎也惧怕着你。<br>现在不清楚你真的是一只鲨鱼，还是别的……什么东西。"
        },
        // NEW ANIMALS
        {
            unlock: {resource: {shrimp: 50}},
            message: "这些虾很小，但很勤劳。<br>它们靠海绵来生存。（它们生存是为了海绵）"
        },
        {
            unlock: {resource: {lobster: 20}},
            message: "龙虾在工作，他们看起来无忧无虑。<br>什么都不担心。"
        },
        {
            unlock: {resource: {eel: 10}},
            message: "鳗鱼在他们的藏身之处低声交流。<br>他们喜欢鲨鱼。"
        },
        {
            unlock: {resource: {dolphin: 5}},
            message: "和我们一起工作的海豚善意地向我们讲述了它们跨越行星的帝国<br>他们微笑着询问我们的帝国在哪里。"
        },
        {
            unlock: {resource: {octopus: 8}},
            message: "章鱼总是在谈论生产和正确的行动。他们说通过团结来达到高效。<br>它们用一种冷漠而中立的眼光来看我们。"
        },
        {
            unlock: {resource: {whale: 1}},
            message: "鲸鱼很少和我们说话。它只是默默地工作，有时在海中唱歌。<br>它们为什么要唱歌?"
        },
        {
            unlock: {resource: {chimaera: 5}},
            message: "银鲛在古代是鲨鱼的近亲，如今因为这巧合重聚。<br>在黑暗中它们发现了怎样无与伦比的奇迹?"
        },
        // UNIQUE STATUSES
        {
            unlock: {resource: {chorus: 1}},
            message: "鲸鱼的歌让你有和在世界大门中同样的感觉。只是感觉更弱一些。<br>&nbsp"
        },
        // DANGER STATUSES
        {
            unlock: {world: "abandoned", resource: {tar: 20}},
            message: "焦油让所有生物都在死去!<br>或许机器能够拯救我们?"
        },
        {
            unlock: {world: "abandoned", resource: {tar: 200}},
            message: "只有机械才能保留下来. 其他的终会失去.<br><span class='smallDesc'>都失去了.</span>"
        },
        {
            unlock: {world: "frigid", resource: {ice: 50}},
            message: "在冰雪把我们都杀死前必须要做点什么!<br>或许机器能拯救我们?"
        },
        {
            unlock: {world: "frigid", resource: {ice: 200}},
            message: "太冷了. 好饿.<br><span class='smallDesc'>如此绝望.</span>"
        }
    ],

    init: function() {
        var h = SharkGame.Home;

        // rename home tab
        var tabName = SharkGame.WorldTypes[SharkGame.World.worldType].name + " Ocean";
        SharkGame.Home.tabName = tabName;

        // register tab
        SharkGame.Tabs[h.tabId] = {
            id: h.tabId,
            name: h.tabName,
            discovered: h.tabDiscovered,
            code: h
        };
        // populate action discoveries
        $.each(SharkGame.HomeActions, function(actionName, actionData) {
            actionData.discovered = false;
            actionData.newlyDiscovered = false;
        });

        h.currentExtraMessageIndex = -1;
        h.currentButtonTab = "all";
    },

    switchTo: function() {
        var h = SharkGame.Home;
        var content = $('#content');
        var tabMessage = $('<div>').attr("id", "tabMessage");
        content.append(tabMessage);
        h.currentExtraMessageIndex = -1;
        h.updateMessage(true);
        // button tabs
        var buttonTabDiv = $('<div>').attr("id", "homeTabs");
        content.append(buttonTabDiv);
        h.createButtonTabs();
        // help button
        var helpButtonDiv = $('<div>');
        helpButtonDiv.css({margin: "auto", clear: "both"});
        SharkGame.Button.makeButton("helpButton", "&nbsp 隐藏/显示描述 &nbsp", helpButtonDiv, h.toggleHelp).addClass("min-block");
        content.append(helpButtonDiv);
        // button list
        var buttonList = $('<div>').attr("id", "buttonList");
        content.append(buttonList);
        if(SharkGame.Settings.current.buttonDisplayType === "pile") {
            buttonList.addClass("pileArrangement");
        } else {
            buttonList.removeClass("pileArrangement");
        }
        // background art!
        if(SharkGame.Settings.current.showTabImages) {
            tabMessage.css("background-image", "url('" + h.tabBg + "')");
        }
    },

    discoverActions: function() {
        var h = SharkGame.Home;
        $.each(SharkGame.HomeActions, function(actionName, actionData) {
            actionData.discovered = h.areActionPrereqsMet(actionName);
            actionData.newlyDiscovered = false;
        });
    },

    createButtonTabs: function() {
        var buttonTabDiv = $('#homeTabs');
        var buttonTabList = $('<ul>').attr("id", "homeTabsList");
        buttonTabDiv.empty();
        var tabAmount = 0;

        // add a header for each discovered category
        // make it a link if it's not the current tab
        $.each(SharkGame.HomeActionCategories, function(k, v) {
            var onThisTab = (SharkGame.Home.currentButtonTab === k);

            var categoryDiscovered = false;
            if(k === "all") {
                categoryDiscovered = true;
            } else {
                $.each(v.actions, function(_, actionName) {
                    categoryDiscovered = categoryDiscovered || SharkGame.HomeActions[actionName].discovered;
                });
            }

            if(categoryDiscovered) {
                var tabListItem = $('<li>');
                if(onThisTab) {
                    tabListItem.html(cnname(v.name));
                } else {
                    tabListItem.append($('<a>')
                            .attr("id", "buttonTab-" + k)
                            .attr("href", "javascript:;")
                            .html(cnname(v.name))
                            .click(function() {
                                var tab = ($(this).attr("id")).split("-")[1];
                                SharkGame.Home.changeButtonTab(tab);
                            })
                    );
                    if(v.hasNewItem) {
                        tabListItem.addClass("newItemAdded");
                    }
                }
                buttonTabList.append(tabListItem);
                tabAmount++;
            }
        });
        // finally at the very end just throw the damn list away if it only has two options
        // "all" + another category is completely pointless
        if(tabAmount > 2) {
            buttonTabDiv.append(buttonTabList);
        }
    },

    updateTab: function(tabToUpdate) {
        // return if we're looking at all buttons, no change there
        if(SharkGame.Home.currentButtonTab === "all") {
            return;
        }
        SharkGame.HomeActionCategories[tabToUpdate].hasNewItem = true;
        var tabItem = $('#buttonTab-' + tabToUpdate);
        if(tabItem.length > 0) {
            tabItem.parent().addClass("newItemAdded");
        } else {
            SharkGame.Home.createButtonTabs();
        }
    },

    changeButtonTab: function(tabToChangeTo) {
        var h = SharkGame.Home;
        SharkGame.HomeActionCategories[tabToChangeTo].hasNewItem = false;
        if(tabToChangeTo === "all") {
            $.each(SharkGame.HomeActionCategories, function(k, v) {
                v.hasNewItem = false;
            })
        }
        h.currentButtonTab = tabToChangeTo;
        $('#buttonList').empty();
        h.createButtonTabs();
    },

    updateMessage: function(suppressAnimation) {
        var h = SharkGame.Home;
        var r = SharkGame.Resources;
        var u = SharkGame.Upgrades;
        var wi = SharkGame.WorldTypes[SharkGame.World.worldType];
        var selectedIndex = h.currentExtraMessageIndex;
        $.each(h.extraMessages, function(i, v) {
            var showThisMessage = true;
            // check if should show this message
            if(v.unlock) {
                if(v.unlock.resource) {
                    $.each(v.unlock.resource, function(k, v) {
                        showThisMessage = showThisMessage && (r.getResource(k) >= v);
                    });
                }
                if(v.unlock.upgrade) {
                    $.each(v.unlock.upgrade, function(i, v) {
                        showThisMessage = showThisMessage && u[v].purchased;
                    });
                }
                if(v.unlock.world) {
                    showThisMessage = showThisMessage && SharkGame.World.worldType === v.unlock.world;
                }
            }
            if(showThisMessage) {
                selectedIndex = i;
            }
        });
        // only edit DOM if necessary
        if(h.currentExtraMessageIndex !== selectedIndex) {
            h.currentExtraMessageIndex = selectedIndex;
            var tabMessage = $('#tabMessage');
            if(SharkGame.Settings.current.showTabImages) {
                var sceneDiv = $('#tabSceneImage');
                if(sceneDiv.size() === 0) {
                    sceneDiv = $('<div>').attr("id", "tabSceneImage");
                }
            }
            var message = "你是一条生活在 " + wi.shortDesc + " 海洋的鲨鱼。";
            message += "<br><span id='extraMessage' class='medDesc'>&nbsp<br>&nbsp</span>";
            tabMessage.html(message).prepend(sceneDiv);

            var extraMessageSel = $('#extraMessage');
            if(!suppressAnimation && SharkGame.Settings.current.showAnimations) {
                extraMessageSel.animate({opacity: 0}, 200, function() {
                    var thisSel = $(this);
                    thisSel.animate({opacity: 1}, 200).html(h.extraMessages[selectedIndex].message);
                });
                sceneDiv.animate({opacity: 0}, 500, function() {
                    var thisSel = $(this);
                    if(SharkGame.Settings.current.showTabImages) {
                        SharkGame.changeSprite(SharkGame.spriteHomeEventPath, "homesea-" + (selectedIndex + 1), sceneDiv, "homesea-missing");
                    }
                    thisSel.animate({opacity: 1}, 500);
                });
            } else {
                extraMessageSel.html(h.extraMessages[selectedIndex].message);
                if(SharkGame.Settings.current.showTabImages) {
                    SharkGame.changeSprite(SharkGame.spriteHomeEventPath, "homesea-" + (selectedIndex + 1), sceneDiv, "homesea-missing");
                }
            }
        }
    },

    update: function() {
        var h = SharkGame.Home;
        var r = SharkGame.Resources;
        var w = SharkGame.World;


        // for each button entry in the home tab,
        $.each(SharkGame.HomeActions, function(actionName, actionData) {
            var actionTab = h.getActionCategory(actionName);
            var onTab = (actionTab === h.currentButtonTab) || (h.currentButtonTab === "all");
            if(onTab) {
                var button = $('#' + actionName);
                if(button.length === 0) {
                    if(actionData.discovered || h.areActionPrereqsMet(actionName)) {
                        if(!actionData.discovered) {
                            actionData.discovered = true;
                            actionData.newlyDiscovered = true;
                        }
                        h.addButton(actionName);
                    }
                } else {
                    // button exists
                    h.updateButton(actionName);
                }
            } else {
                if(!actionData.discovered) {
                    if(h.areActionPrereqsMet(actionName)) {
                        actionData.discovered = true;
                        actionData.newlyDiscovered = true;
                        h.updateTab(actionTab);
                    }
                }
            }
        });

        // update home message
        h.updateMessage();
    },

    updateButton: function(actionName) {
        var h = SharkGame.Home;
        var r = SharkGame.Resources;
        var amountToBuy = SharkGame.Settings.current.buyAmount;

        var button = $('#' + actionName);
        var actionData = SharkGame.HomeActions[actionName];

        var amount = amountToBuy;
        var actionCost;
        if(amountToBuy < 0) {
            var max = Math.floor(h.getMax(actionData));
            // convert divisor from a negative number to a positive fraction
            var divisor = 1 / (Math.floor((amountToBuy)) * -1);
            amount = max * divisor;
            amount = Math.floor(amount);
            if(amount < 1) amount = 1;
            actionCost = h.getCost(actionData, amount);
        } else {
            actionCost = h.getCost(actionData, amountToBuy);
        }
        // disable button if resources can't be met
        var enableButton;
        if($.isEmptyObject(actionCost)) {
            enableButton = true; // always enable free buttons
        } else {
            enableButton = r.checkResources(actionCost);
        }

        var label = cnname(actionData.name);
        if(!$.isEmptyObject(actionCost) && amount > 1) {
            label += " (" + SharkGame.Main.beautify(amount) + ")";
        }

        // check for any infinite quantities
        var infinitePrice = false;
        _.each(actionCost, function(num) {
            if(num === Number.POSITIVE_INFINITY) {
                infinitePrice = true;
            }
        });
        if(infinitePrice) {
            label += "<br>刷爆了";
        } else {
            var costText = r.resourceListToString(actionCost, !enableButton);
            if(costText != "") {
                label += "<br>成本: " + costText;
            }
        }

        if(SharkGame.Settings.current.showTabHelp) {
            if(actionData.helpText) {
                label += "<br><span class='medDesc'>" + actionData.helpText + "</span>";
            }
        }
        button.prop("disabled", !enableButton)
        button.html(label);


        var spritename = "actions/" + actionName;
        if(SharkGame.Settings.current.iconPositions !== "off") {
            var iconDiv = SharkGame.changeSprite(SharkGame.spriteIconPath, spritename, null, "general/missing-action");
            if(iconDiv) {
                iconDiv.addClass("button-icon-" + SharkGame.Settings.current.iconPositions);
                if(!enableButton) {
                    button.prepend($('<div>').append(iconDiv).addClass("tint"));
                } else {
                    button.prepend(iconDiv);
                }
            }
        }
    },

    areActionPrereqsMet: function(actionName) {
        var r = SharkGame.Resources;
        var w = SharkGame.World;
        var prereqsMet = true; // assume true until proven false
        var action = SharkGame.HomeActions[actionName];
        // check resource prerequisites
        if(action.prereq.resource) {
            prereqsMet = prereqsMet && r.checkResources(action.prereq.resource, true);
        }
        // check if resource cost exists
        if(action.cost) {
            $.each(action.cost, function(i, v) {
                var costResource = v.resource;
                prereqsMet = prereqsMet && w.doesResourceExist(costResource);
            })
        }
        // check special worldtype prereqs
        if(action.prereq.world) {
            prereqsMet = prereqsMet && w.worldType === action.prereq.world;
        }
        // check upgrade prerequisites
        if(action.prereq.upgrade) {
            $.each(action.prereq.upgrade, function(_, v) {
                prereqsMet = prereqsMet && SharkGame.Upgrades[v].purchased;
            });
        }
        // check if resulting resource exists
        if(action.effect.resource) {
            $.each(action.effect.resource, function(k, v) {
                prereqsMet = prereqsMet && w.doesResourceExist(k);
            })
        }
        return prereqsMet;
    },

    addButton: function(actionName) {
        var h = SharkGame.Home;
        var buttonListSel = $('#buttonList');
        var actionData = SharkGame.HomeActions[actionName];

        var buttonSelector = SharkGame.Button.makeButton(actionName, actionData.name, buttonListSel, h.onHomeButton);
        h.updateButton(actionName);
        if(SharkGame.Settings.current.showAnimations) {
            buttonSelector.hide()
                .css("opacity", 0)
                .slideDown(50)
                .animate({opacity: 1.0}, 50);
        }
        if(actionData.newlyDiscovered) {
            buttonSelector.addClass("newlyDiscovered");
        }
    },

    getActionCategory: function(actionName) {
        var categoryName = "";
        $.each(SharkGame.HomeActionCategories, function(categoryKey, categoryValue) {
            if(categoryName !== "") {
                return;
            }
            $.each(categoryValue.actions, function(k, v) {
                if(categoryName !== "") {
                    return;
                }
                if(actionName == v) {
                    categoryName = categoryKey;
                }
            });
        });
        return categoryName;
    },

    onHomeButton: function() {
        var h = SharkGame.Home;
        var r = SharkGame.Resources;
        var amountToBuy = SharkGame.Settings.current.buyAmount;
        // get related entry in home button table
        var button = $(this);
        var buttonName = button.attr("id");
        var action = SharkGame.HomeActions[buttonName];
        var actionCost = {};
        var amount = 0;
        if(amountToBuy < 0) {
            // unlimited mode, calculate the highest we can go
            var max = h.getMax(action);
            // floor max
            max = Math.floor(max);
            if(max > 0) {
                // convert divisor from a negative number to a positive fraction
                var divisor = 1 / (Math.floor((amountToBuy)) * -1);
                amount = max * divisor;
                // floor amount
                amount = Math.floor(amount);
                // make it worth entering this function
                if(amount < 1) amount = 1;
                actionCost = h.getCost(action, amount);
            }
        } else {
            actionCost = h.getCost(action, amountToBuy);
            amount = amountToBuy;
        }

        if($.isEmptyObject(actionCost)) {
            // free action
            // do not repeat or check for costs
            if(action.effect.resource) {
                r.changeManyResources(action.effect.resource);
            }
            SharkGame.Log.addMessage(SharkGame.choose(action.outcomes));
        } else if(amount > 0) {
            // cost action
            // check cost, only proceed if sufficient resources (prevention against lazy cheating, god, at least cheat in the right resources)
            if(r.checkResources(actionCost)) {
                // take cost
                r.changeManyResources(actionCost, true);
                // execute effects
                if(action.effect.resource) {
                    var resourceChange;
                    if(amount !== 1) {
                        resourceChange = r.scaleResourceList(action.effect.resource, amount);
                    } else {
                        resourceChange = action.effect.resource;
                    }
                    r.changeManyResources(resourceChange);
                }
                // print outcome to log
                if(!(action.multiOutcomes) || (amount == 1)) {
                    SharkGame.Log.addMessage(SharkGame.choose(action.outcomes));
                } else {
                    SharkGame.Log.addMessage(SharkGame.choose(action.multiOutcomes));
                }
            } else {
                SharkGame.Log.addMessage("You can't afford that!");
            }
        }
        if(button.hasClass("newlyDiscovered")) {
            action.newlyDiscovered = false;
            button.removeClass("newlyDiscovered");
        }
        // disable button until next frame
        button.prop("disabled", true);
    },

    getCost: function(action, amount) {
        var calcCost = {};
        var rawCost = action.cost;

        $.each(rawCost, function(i, v) {
            var resource = SharkGame.PlayerResources[action.max];
            var currAmount = resource.amount;
            if(resource.jobs) {
                $.each(resource.jobs, function(_, v) {
                    currAmount += SharkGame.Resources.getResource(v);
                });
            }
            var costFunction = v.costFunction;
            var k = v.priceIncrease;
            var cost = 0;
            switch(costFunction) {
                case "constant":
                    cost = SharkGame.MathUtil.constantCost(currAmount, currAmount + amount, k);
                    break;
                case "linear":
                    cost = SharkGame.MathUtil.linearCost(currAmount, currAmount + amount, k);
                    break;
                case "unique":
                    cost = SharkGame.MathUtil.uniqueCost(currAmount, currAmount + amount, k);
                    break;
            }
            calcCost[v.resource] = cost;
        });
        return calcCost;
    },


    getMax: function(action) {
        var max = 1;
        if(action.max) {
            var resource = SharkGame.PlayerResources[action.max];
            var currAmount = resource.amount;
            if(resource.jobs) {
                $.each(resource.jobs, function(_, v) {
                    currAmount += SharkGame.Resources.getResource(v);
                });
            }
            max = Number.MAX_VALUE;
            var rawCost = action.cost;
            $.each(rawCost, function(_, v) {
                var costResource = SharkGame.PlayerResources[v.resource];

                var costFunction = v.costFunction;
                var k = v.priceIncrease;
                var subMax = -1;
                switch(costFunction) {
                    case "constant":
                        subMax = SharkGame.MathUtil.constantMax(currAmount, costResource.amount, k) - currAmount;
                        break;
                    case "linear":
                        subMax = SharkGame.MathUtil.linearMax(currAmount, costResource.amount, k) - currAmount;
                        break;
                    case "unique":
                        subMax = SharkGame.MathUtil.uniqueMax(currAmount, costResource.amount, k) - currAmount;
                        break;
                }
                max = Math.min(max, subMax);
            });
        }
        return Math.floor(max);
    },

    toggleHelp: function() {
        SharkGame.Settings.current.showTabHelp = !SharkGame.Settings.current.showTabHelp;
    }
};

function cnname(name){
     var cnname="";
    var temp=name;
    if(temp=="All"){
        cnname="全部"
    }else if(temp=="Basic"){
        cnname="基本"
    }else if(temp=="Frenzy"){
        cnname="招募"
    }else if(temp=="Jobs"){
        cnname="工作"
    }else if(temp=="Producers"){
        cnname="生产者"
    }else if(temp=="Processing"){
        cnname="加工"
    }else if(temp=="Shark Machines"){
        cnname="鲨鱼机器"
    }else if(temp=="Other Machines"){
        cnname="其它机器"
    }else if(temp=="Unique"){
        cnname="特殊"
    }else if(temp=="Recruit shark"){
        //鱼名称
        cnname="招募鲨鱼"
    }else if(temp=="Hire ray"){
        cnname="雇佣鳐鱼"
    }else if(temp=="Acquire crab"){
        cnname="捕蟹"
    }else if(temp=="Train science shark"){
        cnname="训练科学鲨鱼"
    }else if(temp=="Train nurse shark"){
        cnname="训练护士鲨"
    }else if(temp=="Equip laser ray"){
        cnname="训练激光鳐鱼"
    }else if(temp=="Instruct a ray maker"){
        cnname="任命鳐鱼制造者"
    }else if(temp==""){
        cnname=""
    }else if(temp==""){
        cnname=""
    }else if(temp==""){
        cnname=""
    }else if(temp==""){
        cnname=""
    }else if(temp==""){
        cnname=""
    }else if(temp==""){
        cnname=""
    }else if(temp=="science"){
        //资源名称
        cnname="科学"
    }else if(temp==""){
        cnname=""
    }else{
        return name;
    }
    return cnname;
}