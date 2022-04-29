SharkGame.Gate = {

    tabId: "gate",
    tabDiscovered: false,
    tabName: "奇怪的门",
    tabBg: "img/bg/bg-gate.png",

    discoverReq: {
        upgrade: [
            "gateDiscovery"
        ]
    },

    message: "一种不祥的圆形结构，紧紧地关闭着.<br/>上面有许多插槽，并在传达一种让你往上面放东西的信号.",
    messageOneSlot: "一种不祥的圆形结构，紧紧地关闭着.<br/>只剩下一个插槽了.",
    messageOpened: "一种不祥的圆形结构，打开着.<br/>门里的水闪闪发光，你感到从门里传来微弱的吸力。",
    messagePaid: "插槽接受了你的给予，并停止运转。",
    messageCantPay: "插槽把你放进去的东西吐了出来。同时你感到一种“它们想要更多”的信息.",
    messageAllPaid: "最后一个插槽关闭了。门打开了。门里的水闪闪发光.<br/>你感到从门里传来微弱的吸力",
    messageEnter: "你游过了这扇门...",

    sceneClosedImage: "img/events/misc/scene-gate-closed.png",
    sceneAlmostOpenImage: "img/events/misc/scene-gate-one-slot.png",
    sceneOpenImage: "img/events/misc/scene-gate-open.png",

    costsMet: null,
    costs: null,

    init: function() {
        var g = SharkGame.Gate;
        // register tab
        SharkGame.Tabs[g.tabId] = {
            id: g.tabId,
            name: g.tabName,
            discovered: g.tabDiscovered,
            discoverReq: g.discoverReq,
            code: g
        };
        g.opened = false;
    },

    createSlots: function(gateSlots, planetLevel, gateCostMultiplier) {
        var g = SharkGame.Gate;
        // create costs
        g.costs = {};
        $.each(gateSlots, function(k, v) {
            g.costs[k] = Math.floor(v * planetLevel * gateCostMultiplier);
        });

        // create costsMet
        g.costsMet = {};
        $.each(g.costs, function(k, v) {
            g.costsMet[k] = false;
        });
    },

    switchTo: function() {
        var g = SharkGame.Gate;
        var content = $('#content');
        content.append($('<div>').attr("id", "tabMessage"));
        content.append($('<div>').attr("id", "buttonList"));

        if(!g.shouldBeOpen()) {
            var amountOfSlots = 0;
            var buttonList = $('#buttonList');
            $.each(g.costs, function(k, v) {
                if(!g.costsMet[k]) {
                    var resourceName = SharkGame.Resources.getResourceName(k);
                    SharkGame.Button.makeButton("gateCost-" + k, "把 " + resourceName + " 放入 " + resourceName + " 插槽", buttonList, SharkGame.Gate.onGateButton);
                    amountOfSlots++;
                }
            });
        } else {
            SharkGame.Button.makeButton("gateEnter", "进入传送门", $('#buttonList'), g.onEnterButton);
        }

        var message = g.shouldBeOpen() ? g.messageOpened : (amountOfSlots > 1 ? g.message : g.messageOneSlot);
        var tabMessageSel = $('#tabMessage');
        if(SharkGame.Settings.current.showTabImages) {
            message = "<img width=400 height=200 src='" + g.getSceneImagePath() + "' id='tabSceneImageEssence'>" + message;
            tabMessageSel.css("background-image", "url('" + g.tabBg + "')");
        }
        tabMessageSel.html(message);
    },

    update: function() {
    },

    onGateButton: function() {
        var g = SharkGame.Gate;
        var r= SharkGame.Resources;
        var resourceId = ($(this).attr("id")).split("-")[1];

        var message = "";
        var cost = g.costs[resourceId] * (SharkGame.Resources.getResource("numen") + 1);
        if(r.getResource(resourceId) >= cost) {
            SharkGame.Gate.costsMet[resourceId] = true;
            SharkGame.Resources.changeResource(resourceId, -cost);
            $(this).remove();
            if(g.shouldBeOpen()) {
                message = g.messageAllPaid;
                // add enter gate button
                SharkGame.Button.makeButton("gateEnter", "进入传送门", $('#buttonList'), g.onEnterButton);
            } else {
                message = g.messagePaid;
            }
        } else {
            message = g.messageCantPay + "<br/>";
            var diff = cost - r.getResource(resourceId);
            message += SharkGame.Main.beautify(diff) + " more.";
        }
        if(SharkGame.Settings.current.showTabImages) {
            message = "<img width=400 height=200 src='" + g.getSceneImagePath() + "' id='tabSceneImageEssence'>" + message;
        }
        $('#tabMessage').html(message);
    },

    onEnterButton: function() {
        $('#tabMessage').html(SharkGame.Gate.messageEnter);
        $(this).remove();
        SharkGame.wonGame = true;
        SharkGame.Main.endGame();
    },

    shouldBeOpen: function() {
        var g = SharkGame.Gate;
        var won = true;
        $.each(g.costsMet, function(_, v) {
            won = won && v;
        });
        return won;
    },

    getSceneImagePath: function() {
        var g = SharkGame.Gate;
        var amountOfSlots = 0;
        $.each(g.costsMet, function(k, v) {
            if(v) amountOfSlots++;
        });
        amountOfSlots = _.size(g.costs) - amountOfSlots;
        var sceneImagePath = g.shouldBeOpen() ? g.sceneOpenImage : (amountOfSlots > 1 ? g.sceneClosedImage : g.sceneAlmostOpenImage);
        return sceneImagePath;
    }
};