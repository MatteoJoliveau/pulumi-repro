"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheduler = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class Scheduler extends pulumi.CustomResource {
    /**
     * Get an existing Scheduler resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new Scheduler(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of Scheduler.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Scheduler.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nextRun"] = state ? state.nextRun : undefined;
            resourceInputs["onEvent"] = state ? state.onEvent : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["policies"] = state ? state.policies : undefined;
            resourceInputs["runCount"] = state ? state.runCount : undefined;
            resourceInputs["schedulerId"] = state ? state.schedulerId : undefined;
            resourceInputs["startDate"] = state ? state.startDate : undefined;
            resourceInputs["startTime"] = state ? state.startTime : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.onEvent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'onEvent'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onEvent"] = args ? args.onEvent : undefined;
            resourceInputs["policies"] = args ? args.policies : undefined;
            resourceInputs["schedulerId"] = args ? args.schedulerId : undefined;
            resourceInputs["startDate"] = args ? args.startDate : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["nextRun"] = undefined /*out*/;
            resourceInputs["owner"] = undefined /*out*/;
            resourceInputs["runCount"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Scheduler.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.Scheduler = Scheduler;
/** @internal */
Scheduler.__pulumiType = 'routeros:index/scheduler:Scheduler';
//# sourceMappingURL=scheduler.js.map