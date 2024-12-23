"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interface6to4 = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class Interface6to4 extends pulumi.CustomResource {
    /**
     * Get an existing Interface6to4 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new Interface6to4(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of Interface6to4.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Interface6to4.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["actualMtu"] = state ? state.actualMtu : undefined;
            resourceInputs["clampTcpMss"] = state ? state.clampTcpMss : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["dontFragment"] = state ? state.dontFragment : undefined;
            resourceInputs["dscp"] = state ? state.dscp : undefined;
            resourceInputs["interface6to4Id"] = state ? state.interface6to4Id : undefined;
            resourceInputs["ipsecSecret"] = state ? state.ipsecSecret : undefined;
            resourceInputs["keepalive"] = state ? state.keepalive : undefined;
            resourceInputs["localAddress"] = state ? state.localAddress : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["remoteAddress"] = state ? state.remoteAddress : undefined;
            resourceInputs["running"] = state ? state.running : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["clampTcpMss"] = args ? args.clampTcpMss : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["dontFragment"] = args ? args.dontFragment : undefined;
            resourceInputs["dscp"] = args ? args.dscp : undefined;
            resourceInputs["interface6to4Id"] = args ? args.interface6to4Id : undefined;
            resourceInputs["ipsecSecret"] = (args === null || args === void 0 ? void 0 : args.ipsecSecret) ? pulumi.secret(args.ipsecSecret) : undefined;
            resourceInputs["keepalive"] = args ? args.keepalive : undefined;
            resourceInputs["localAddress"] = args ? args.localAddress : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["remoteAddress"] = args ? args.remoteAddress : undefined;
            resourceInputs["actualMtu"] = undefined /*out*/;
            resourceInputs["running"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["ipsecSecret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Interface6to4.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.Interface6to4 = Interface6to4;
/** @internal */
Interface6to4.__pulumiType = 'routeros:index/interface6to4:Interface6to4';
//# sourceMappingURL=interface6to4.js.map