"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeMlag = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class BridgeMlag extends pulumi.CustomResource {
    /**
     * Get an existing BridgeMlag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new BridgeMlag(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of BridgeMlag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BridgeMlag.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["bridge"] = state ? state.bridge : undefined;
            resourceInputs["bridgeMlagId"] = state ? state.bridgeMlagId : undefined;
            resourceInputs["peerPort"] = state ? state.peerPort : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.bridge === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bridge'");
            }
            if ((!args || args.peerPort === undefined) && !opts.urn) {
                throw new Error("Missing required property 'peerPort'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["bridge"] = args ? args.bridge : undefined;
            resourceInputs["bridgeMlagId"] = args ? args.bridgeMlagId : undefined;
            resourceInputs["peerPort"] = args ? args.peerPort : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BridgeMlag.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.BridgeMlag = BridgeMlag;
/** @internal */
BridgeMlag.__pulumiType = 'routeros:index/bridgeMlag:BridgeMlag';
//# sourceMappingURL=bridgeMlag.js.map