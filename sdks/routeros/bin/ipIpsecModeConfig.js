"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpIpsecModeConfig = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class IpIpsecModeConfig extends pulumi.CustomResource {
    /**
     * Get an existing IpIpsecModeConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new IpIpsecModeConfig(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of IpIpsecModeConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpIpsecModeConfig.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["addressPool"] = state ? state.addressPool : undefined;
            resourceInputs["addressPrefixLength"] = state ? state.addressPrefixLength : undefined;
            resourceInputs["connectionMark"] = state ? state.connectionMark : undefined;
            resourceInputs["ipIpsecModeConfigId"] = state ? state.ipIpsecModeConfigId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["responder"] = state ? state.responder : undefined;
            resourceInputs["splitDns"] = state ? state.splitDns : undefined;
            resourceInputs["splitIncludes"] = state ? state.splitIncludes : undefined;
            resourceInputs["srcAddressList"] = state ? state.srcAddressList : undefined;
            resourceInputs["staticDns"] = state ? state.staticDns : undefined;
            resourceInputs["systemDns"] = state ? state.systemDns : undefined;
            resourceInputs["useResponderDns"] = state ? state.useResponderDns : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["addressPool"] = args ? args.addressPool : undefined;
            resourceInputs["addressPrefixLength"] = args ? args.addressPrefixLength : undefined;
            resourceInputs["connectionMark"] = args ? args.connectionMark : undefined;
            resourceInputs["ipIpsecModeConfigId"] = args ? args.ipIpsecModeConfigId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["responder"] = args ? args.responder : undefined;
            resourceInputs["splitDns"] = args ? args.splitDns : undefined;
            resourceInputs["splitIncludes"] = args ? args.splitIncludes : undefined;
            resourceInputs["srcAddressList"] = args ? args.srcAddressList : undefined;
            resourceInputs["staticDns"] = args ? args.staticDns : undefined;
            resourceInputs["systemDns"] = args ? args.systemDns : undefined;
            resourceInputs["useResponderDns"] = args ? args.useResponderDns : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpIpsecModeConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.IpIpsecModeConfig = IpIpsecModeConfig;
/** @internal */
IpIpsecModeConfig.__pulumiType = 'routeros:index/ipIpsecModeConfig:IpIpsecModeConfig';
//# sourceMappingURL=ipIpsecModeConfig.js.map