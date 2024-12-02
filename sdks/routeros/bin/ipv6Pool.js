"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ipv6Pool = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class Ipv6Pool extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6Pool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new Ipv6Pool(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of Ipv6Pool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ipv6Pool.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___skip_"] = state ? state.___skip_ : undefined;
            resourceInputs["dynamic"] = state ? state.dynamic : undefined;
            resourceInputs["ipv6PoolId"] = state ? state.ipv6PoolId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["prefix"] = state ? state.prefix : undefined;
            resourceInputs["prefixLength"] = state ? state.prefixLength : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.prefixLength === undefined) && !opts.urn) {
                throw new Error("Missing required property 'prefixLength'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___skip_"] = args ? args.___skip_ : undefined;
            resourceInputs["ipv6PoolId"] = args ? args.ipv6PoolId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["prefix"] = args ? args.prefix : undefined;
            resourceInputs["prefixLength"] = args ? args.prefixLength : undefined;
            resourceInputs["dynamic"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ipv6Pool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.Ipv6Pool = Ipv6Pool;
/** @internal */
Ipv6Pool.__pulumiType = 'routeros:index/ipv6Pool:Ipv6Pool';
//# sourceMappingURL=ipv6Pool.js.map