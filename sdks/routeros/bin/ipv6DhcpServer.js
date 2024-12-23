"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ipv6DhcpServer = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class Ipv6DhcpServer extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6DhcpServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new Ipv6DhcpServer(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of Ipv6DhcpServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ipv6DhcpServer.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["addressPool"] = state ? state.addressPool : undefined;
            resourceInputs["allowDualStackQueue"] = state ? state.allowDualStackQueue : undefined;
            resourceInputs["bindingScript"] = state ? state.bindingScript : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["dhcpOptions"] = state ? state.dhcpOptions : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["duid"] = state ? state.duid : undefined;
            resourceInputs["dynamic"] = state ? state.dynamic : undefined;
            resourceInputs["insertQueueBefore"] = state ? state.insertQueueBefore : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["invalid"] = state ? state.invalid : undefined;
            resourceInputs["ipv6DhcpServerId"] = state ? state.ipv6DhcpServerId : undefined;
            resourceInputs["leaseTime"] = state ? state.leaseTime : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentQueue"] = state ? state.parentQueue : undefined;
            resourceInputs["preference"] = state ? state.preference : undefined;
            resourceInputs["rapidCommit"] = state ? state.rapidCommit : undefined;
            resourceInputs["routeDistance"] = state ? state.routeDistance : undefined;
            resourceInputs["useRadius"] = state ? state.useRadius : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.addressPool === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addressPool'");
            }
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["addressPool"] = args ? args.addressPool : undefined;
            resourceInputs["allowDualStackQueue"] = args ? args.allowDualStackQueue : undefined;
            resourceInputs["bindingScript"] = args ? args.bindingScript : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["dhcpOptions"] = args ? args.dhcpOptions : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["insertQueueBefore"] = args ? args.insertQueueBefore : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["ipv6DhcpServerId"] = args ? args.ipv6DhcpServerId : undefined;
            resourceInputs["leaseTime"] = args ? args.leaseTime : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentQueue"] = args ? args.parentQueue : undefined;
            resourceInputs["preference"] = args ? args.preference : undefined;
            resourceInputs["rapidCommit"] = args ? args.rapidCommit : undefined;
            resourceInputs["routeDistance"] = args ? args.routeDistance : undefined;
            resourceInputs["useRadius"] = args ? args.useRadius : undefined;
            resourceInputs["duid"] = undefined /*out*/;
            resourceInputs["dynamic"] = undefined /*out*/;
            resourceInputs["invalid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ipv6DhcpServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.Ipv6DhcpServer = Ipv6DhcpServer;
/** @internal */
Ipv6DhcpServer.__pulumiType = 'routeros:index/ipv6DhcpServer:Ipv6DhcpServer';
//# sourceMappingURL=ipv6DhcpServer.js.map