"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemRouterboardButtonWps = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class SystemRouterboardButtonWps extends pulumi.CustomResource {
    /**
     * Get an existing SystemRouterboardButtonWps resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new SystemRouterboardButtonWps(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of SystemRouterboardButtonWps.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemRouterboardButtonWps.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["holdTime"] = state ? state.holdTime : undefined;
            resourceInputs["onEvent"] = state ? state.onEvent : undefined;
            resourceInputs["systemRouterboardButtonWpsId"] = state ? state.systemRouterboardButtonWpsId : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["holdTime"] = args ? args.holdTime : undefined;
            resourceInputs["onEvent"] = args ? args.onEvent : undefined;
            resourceInputs["systemRouterboardButtonWpsId"] = args ? args.systemRouterboardButtonWpsId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemRouterboardButtonWps.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.SystemRouterboardButtonWps = SystemRouterboardButtonWps;
/** @internal */
SystemRouterboardButtonWps.__pulumiType = 'routeros:index/systemRouterboardButtonWps:SystemRouterboardButtonWps';
//# sourceMappingURL=systemRouterboardButtonWps.js.map