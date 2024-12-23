"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapsmanConfiguration = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class CapsmanConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new CapsmanConfiguration(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of CapsmanConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapsmanConfiguration.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___ts_"] = state ? state.___ts_ : undefined;
            resourceInputs["capsmanConfigurationId"] = state ? state.capsmanConfigurationId : undefined;
            resourceInputs["channel"] = state ? state.channel : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["country"] = state ? state.country : undefined;
            resourceInputs["datapath"] = state ? state.datapath : undefined;
            resourceInputs["disconnectTimeout"] = state ? state.disconnectTimeout : undefined;
            resourceInputs["distance"] = state ? state.distance : undefined;
            resourceInputs["frameLifetime"] = state ? state.frameLifetime : undefined;
            resourceInputs["guardInterval"] = state ? state.guardInterval : undefined;
            resourceInputs["hideSsid"] = state ? state.hideSsid : undefined;
            resourceInputs["hwProtectionMode"] = state ? state.hwProtectionMode : undefined;
            resourceInputs["hwRetries"] = state ? state.hwRetries : undefined;
            resourceInputs["installation"] = state ? state.installation : undefined;
            resourceInputs["keepaliveFrames"] = state ? state.keepaliveFrames : undefined;
            resourceInputs["loadBalancingGroup"] = state ? state.loadBalancingGroup : undefined;
            resourceInputs["maxStaCount"] = state ? state.maxStaCount : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["multicastHelper"] = state ? state.multicastHelper : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rates"] = state ? state.rates : undefined;
            resourceInputs["rxChains"] = state ? state.rxChains : undefined;
            resourceInputs["security"] = state ? state.security : undefined;
            resourceInputs["ssid"] = state ? state.ssid : undefined;
            resourceInputs["txChains"] = state ? state.txChains : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___ts_"] = args ? args.___ts_ : undefined;
            resourceInputs["capsmanConfigurationId"] = args ? args.capsmanConfigurationId : undefined;
            resourceInputs["channel"] = args ? args.channel : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["country"] = args ? args.country : undefined;
            resourceInputs["datapath"] = args ? args.datapath : undefined;
            resourceInputs["disconnectTimeout"] = args ? args.disconnectTimeout : undefined;
            resourceInputs["distance"] = args ? args.distance : undefined;
            resourceInputs["frameLifetime"] = args ? args.frameLifetime : undefined;
            resourceInputs["guardInterval"] = args ? args.guardInterval : undefined;
            resourceInputs["hideSsid"] = args ? args.hideSsid : undefined;
            resourceInputs["hwProtectionMode"] = args ? args.hwProtectionMode : undefined;
            resourceInputs["hwRetries"] = args ? args.hwRetries : undefined;
            resourceInputs["installation"] = args ? args.installation : undefined;
            resourceInputs["keepaliveFrames"] = args ? args.keepaliveFrames : undefined;
            resourceInputs["loadBalancingGroup"] = args ? args.loadBalancingGroup : undefined;
            resourceInputs["maxStaCount"] = args ? args.maxStaCount : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["multicastHelper"] = args ? args.multicastHelper : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rates"] = args ? args.rates : undefined;
            resourceInputs["rxChains"] = args ? args.rxChains : undefined;
            resourceInputs["security"] = args ? args.security : undefined;
            resourceInputs["ssid"] = args ? args.ssid : undefined;
            resourceInputs["txChains"] = args ? args.txChains : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CapsmanConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.CapsmanConfiguration = CapsmanConfiguration;
/** @internal */
CapsmanConfiguration.__pulumiType = 'routeros:index/capsmanConfiguration:CapsmanConfiguration';
//# sourceMappingURL=capsmanConfiguration.js.map