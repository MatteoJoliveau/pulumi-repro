"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.WifiDatapath = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class WifiDatapath extends pulumi.CustomResource {
    /**
     * Get an existing WifiDatapath resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new WifiDatapath(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of WifiDatapath.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WifiDatapath.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["bridge"] = state ? state.bridge : undefined;
            resourceInputs["bridgeCost"] = state ? state.bridgeCost : undefined;
            resourceInputs["bridgeHorizon"] = state ? state.bridgeHorizon : undefined;
            resourceInputs["clientIsolation"] = state ? state.clientIsolation : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["interfaceList"] = state ? state.interfaceList : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["vlanId"] = state ? state.vlanId : undefined;
            resourceInputs["wifiDatapathId"] = state ? state.wifiDatapathId : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["bridge"] = args ? args.bridge : undefined;
            resourceInputs["bridgeCost"] = args ? args.bridgeCost : undefined;
            resourceInputs["bridgeHorizon"] = args ? args.bridgeHorizon : undefined;
            resourceInputs["clientIsolation"] = args ? args.clientIsolation : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["interfaceList"] = args ? args.interfaceList : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["wifiDatapathId"] = args ? args.wifiDatapathId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WifiDatapath.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.WifiDatapath = WifiDatapath;
/** @internal */
WifiDatapath.__pulumiType = 'routeros:index/wifiDatapath:WifiDatapath';
//# sourceMappingURL=wifiDatapath.js.map