"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ipv6Route = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class Ipv6Route extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6Route resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new Ipv6Route(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of Ipv6Route.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ipv6Route.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["active"] = state ? state.active : undefined;
            resourceInputs["blackhole"] = state ? state.blackhole : undefined;
            resourceInputs["checkGateway"] = state ? state.checkGateway : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["distance"] = state ? state.distance : undefined;
            resourceInputs["dstAddress"] = state ? state.dstAddress : undefined;
            resourceInputs["dynamic"] = state ? state.dynamic : undefined;
            resourceInputs["ecmp"] = state ? state.ecmp : undefined;
            resourceInputs["gateway"] = state ? state.gateway : undefined;
            resourceInputs["hwOffloaded"] = state ? state.hwOffloaded : undefined;
            resourceInputs["immediateGw"] = state ? state.immediateGw : undefined;
            resourceInputs["inactive"] = state ? state.inactive : undefined;
            resourceInputs["ipv6RouteId"] = state ? state.ipv6RouteId : undefined;
            resourceInputs["prefSrc"] = state ? state.prefSrc : undefined;
            resourceInputs["routingTable"] = state ? state.routingTable : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
            resourceInputs["static"] = state ? state.static : undefined;
            resourceInputs["suppressHwOffload"] = state ? state.suppressHwOffload : undefined;
            resourceInputs["targetScope"] = state ? state.targetScope : undefined;
            resourceInputs["vrfInterface"] = state ? state.vrfInterface : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.dstAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dstAddress'");
            }
            if ((!args || args.gateway === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gateway'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["blackhole"] = args ? args.blackhole : undefined;
            resourceInputs["checkGateway"] = args ? args.checkGateway : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["distance"] = args ? args.distance : undefined;
            resourceInputs["dstAddress"] = args ? args.dstAddress : undefined;
            resourceInputs["gateway"] = args ? args.gateway : undefined;
            resourceInputs["ipv6RouteId"] = args ? args.ipv6RouteId : undefined;
            resourceInputs["prefSrc"] = args ? args.prefSrc : undefined;
            resourceInputs["routingTable"] = args ? args.routingTable : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["suppressHwOffload"] = args ? args.suppressHwOffload : undefined;
            resourceInputs["targetScope"] = args ? args.targetScope : undefined;
            resourceInputs["vrfInterface"] = args ? args.vrfInterface : undefined;
            resourceInputs["active"] = undefined /*out*/;
            resourceInputs["dynamic"] = undefined /*out*/;
            resourceInputs["ecmp"] = undefined /*out*/;
            resourceInputs["hwOffloaded"] = undefined /*out*/;
            resourceInputs["immediateGw"] = undefined /*out*/;
            resourceInputs["inactive"] = undefined /*out*/;
            resourceInputs["static"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ipv6Route.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.Ipv6Route = Ipv6Route;
/** @internal */
Ipv6Route.__pulumiType = 'routeros:index/ipv6Route:Ipv6Route';
//# sourceMappingURL=ipv6Route.js.map