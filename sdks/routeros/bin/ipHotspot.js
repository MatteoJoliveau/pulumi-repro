"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpHotspot = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class IpHotspot extends pulumi.CustomResource {
    /**
     * Get an existing IpHotspot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new IpHotspot(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of IpHotspot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpHotspot.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___skip_"] = state ? state.___skip_ : undefined;
            resourceInputs["addressPool"] = state ? state.addressPool : undefined;
            resourceInputs["addressesPerMac"] = state ? state.addressesPerMac : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["idleTimeout"] = state ? state.idleTimeout : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["invalid"] = state ? state.invalid : undefined;
            resourceInputs["ipHotspotId"] = state ? state.ipHotspotId : undefined;
            resourceInputs["keepaliveTimeout"] = state ? state.keepaliveTimeout : undefined;
            resourceInputs["loginTimeout"] = state ? state.loginTimeout : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___skip_"] = args ? args.___skip_ : undefined;
            resourceInputs["addressPool"] = args ? args.addressPool : undefined;
            resourceInputs["addressesPerMac"] = args ? args.addressesPerMac : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["idleTimeout"] = args ? args.idleTimeout : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["ipHotspotId"] = args ? args.ipHotspotId : undefined;
            resourceInputs["keepaliveTimeout"] = args ? args.keepaliveTimeout : undefined;
            resourceInputs["loginTimeout"] = args ? args.loginTimeout : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["invalid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpHotspot.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.IpHotspot = IpHotspot;
/** @internal */
IpHotspot.__pulumiType = 'routeros:index/ipHotspot:IpHotspot';
//# sourceMappingURL=ipHotspot.js.map