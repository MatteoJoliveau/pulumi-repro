"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpPool = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class IpPool extends pulumi.CustomResource {
    /**
     * Get an existing IpPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new IpPool(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of IpPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpPool.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["ipPoolId"] = state ? state.ipPoolId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nextPool"] = state ? state.nextPool : undefined;
            resourceInputs["ranges"] = state ? state.ranges : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.ranges === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ranges'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["ipPoolId"] = args ? args.ipPoolId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nextPool"] = args ? args.nextPool : undefined;
            resourceInputs["ranges"] = args ? args.ranges : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpPool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.IpPool = IpPool;
/** @internal */
IpPool.__pulumiType = 'routeros:index/ipPool:IpPool';
//# sourceMappingURL=ipPool.js.map