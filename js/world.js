SharkGame.WorldModifiers = {
    planetaryIncome: {
        name: "行星内资源变化（每秒变化量，受时间海葵影响）",
        apply: function(level, resourceName, amount) {
            var wr = SharkGame.World.worldResources;
            wr[resourceName].income = level * amount;
        }
    },
    planetaryIncomeMultiplier: {
        name: "行星收入增益（乘级别乘气候等级倍数）",
        apply: function(level, resourceName, amount) {
            var wr = SharkGame.World.worldResources;
            wr[resourceName].incomeMultiplier = level * amount;
        }
    },
    planetaryIncomeReciprocalMultiplier: {
        name: "行星收入减损（除以级别乘气候等级倍数）",
        apply: function(level, resourceName, amount) {
            var wr = SharkGame.World.worldResources;
            wr[resourceName].incomeMultiplier = (1 / (level * amount));
        }
    },
    planetaryResourceBoost: {
        name: "行星收入增益（乘级别乘气候等级倍数）",
        apply: function(level, resourceName, amount) {
            var wr = SharkGame.World.worldResources;
            wr[resourceName].boostMultiplier = level * amount;
        }
    },
    planetaryResourceReciprocalBoost: {
        name: "行星收入增益（乘级别乘气候等级倍数）",
        apply: function(level, resourceName, amount) {
            var wr = SharkGame.World.worldResources;
            wr[resourceName].boostMultiplier = level * amount;
        }
    },
    planetaryStartingResources: {
        name: "行星内初始资源",
        apply: function(level, resourceName, amount) {
            var bonus = level * amount;
            var res = SharkGame.Resources.getTotalResource(resourceName);
            if(res < bonus) {
                SharkGame.Resources.changeResource(resourceName, bonus);
            }
        }
    }
};

SharkGame.World = {

    worldType: "start",
    worldResources: {},
    planetLevel: 1,

    init: function() {
        var w = SharkGame.World;
        //w.worldType = "start";
        //w.planetLevel = 1;
        //w.worldResources = {};
        w.resetWorldProperties();
    },

    apply: function() {
        var w = SharkGame.World;
        w.applyWorldProperties(w.planetLevel);
        w.applyGateCosts(w.planetLevel);
    },

    resetWorldProperties: function() {
        var w = SharkGame.World;
        var wr = w.worldResources;
        var rt = SharkGame.ResourceTable;

        // set up defaults
        $.each(rt, function(k, v) {
            wr[k] = {};
            wr[k].exists = true;
            wr[k].income = 0;
            wr[k].incomeMultiplier = 1;
            wr[k].boostMultiplier = 1;
            wr[k].artifactMultiplier = 1;
        });
    },

    applyWorldProperties: function(level) {
        var w = SharkGame.World;
        var wr = w.worldResources;
        var worldInfo = SharkGame.WorldTypes[w.worldType];

        // get multiplier
        var terraformMultiplier = w.getTerraformMultiplier();
        var effectiveLevel = Math.max(Math.floor(level * terraformMultiplier), 1);

        // disable resources not allowed on planet
        $.each(worldInfo.absentResources, function(i, v) {
            wr[v].exists = false;
        });

        // apply world modifiers
        _.each(worldInfo.modifiers, function(modifierData) {
            if(SharkGame.Resources.isCategory(modifierData.resource)) {
                var resourceList = SharkGame.Resources.getResourcesInCategory(modifierData.resource);
                _.each(resourceList, function(resourceName) {
                    SharkGame.WorldModifiers[modifierData.modifier].apply(effectiveLevel, resourceName, modifierData.amount);
                });
            } else {
                SharkGame.WorldModifiers[modifierData.modifier].apply(effectiveLevel, modifierData.resource, modifierData.amount);
            }
        });
    },

    applyGateCosts: function(level) {
        var w = SharkGame.World;
        var g = SharkGame.Gate;
        var worldInfo = SharkGame.WorldTypes[w.worldType];

        // get multiplier
        var gateCostMultiplier = w.getGateCostMultiplier();

        SharkGame.Gate.createSlots(worldInfo.gateCosts, w.planetLevel, gateCostMultiplier);
    },

    getWorldEntryMessage: function() {
        var w = SharkGame.World;
        return SharkGame.WorldTypes[w.worldType].entry;
    },

    // does this resource exist on this planet?
    doesResourceExist: function(resourceName) {
        var info = SharkGame.World.worldResources[resourceName];
        return info.exists;
    },

    forceExistence: function(resourceName) {
        SharkGame.World.worldResources[resourceName].exists = true;
    },

    getWorldIncomeMultiplier: function(resourceName) {
        return SharkGame.World.worldResources[resourceName].incomeMultiplier;
    },

    getWorldBoostMultiplier: function(resourceName) {
        return SharkGame.World.worldResources[resourceName].boostMultiplier;
    },

    getArtifactMultiplier: function(resourceName) {
        var artifactMultiplier = SharkGame.World.worldResources[resourceName].artifactMultiplier;
        return artifactMultiplier;
    },

    // these things are only impacted by artifacts so far

    getTerraformMultiplier: function() {
        var ptLevel = SharkGame.Artifacts.planetTerraformer.level;
        return (ptLevel > 0) ? Math.pow(0.9, ptLevel) : 1;
    },

    getGateCostMultiplier: function() {
        var gcrLevel = SharkGame.Artifacts.gateCostReducer.level;
        return (gcrLevel > 0) ? Math.pow(0.9, gcrLevel) : 1;
    }
};