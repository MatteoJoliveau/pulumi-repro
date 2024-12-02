"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.DhcpServerLease = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class DhcpServerLease extends pulumi.CustomResource {
    /**
     * Get an existing DhcpServerLease resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new DhcpServerLease(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of DhcpServerLease.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DhcpServerLease.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["activeAddress"] = state ? state.activeAddress : undefined;
            resourceInputs["activeClientId"] = state ? state.activeClientId : undefined;
            resourceInputs["activeHostname"] = state ? state.activeHostname : undefined;
            resourceInputs["activeMacAddress"] = state ? state.activeMacAddress : undefined;
            resourceInputs["activeServer"] = state ? state.activeServer : undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["addressLists"] = state ? state.addressLists : undefined;
            resourceInputs["agentCircuitId"] = state ? state.agentCircuitId : undefined;
            resourceInputs["agentRemoteId"] = state ? state.agentRemoteId : undefined;
            resourceInputs["allowDualStackQueue"] = state ? state.allowDualStackQueue : undefined;
            resourceInputs["alwaysBroadcast"] = state ? state.alwaysBroadcast : undefined;
            resourceInputs["blockAccess"] = state ? state.blockAccess : undefined;
            resourceInputs["blocked"] = state ? state.blocked : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["clientId"] = state ? state.clientId : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["dhcpOption"] = state ? state.dhcpOption : undefined;
            resourceInputs["dhcpOptionSet"] = state ? state.dhcpOptionSet : undefined;
            resourceInputs["dhcpServerLeaseId"] = state ? state.dhcpServerLeaseId : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["dynamic"] = state ? state.dynamic : undefined;
            resourceInputs["expiresAfter"] = state ? state.expiresAfter : undefined;
            resourceInputs["hostName"] = state ? state.hostName : undefined;
            resourceInputs["insertQueueBefore"] = state ? state.insertQueueBefore : undefined;
            resourceInputs["lastSeen"] = state ? state.lastSeen : undefined;
            resourceInputs["leaseTime"] = state ? state.leaseTime : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["radius"] = state ? state.radius : undefined;
            resourceInputs["rateLimit"] = state ? state.rateLimit : undefined;
            resourceInputs["server"] = state ? state.server : undefined;
            resourceInputs["srcMacAddress"] = state ? state.srcMacAddress : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["useSrcMac"] = state ? state.useSrcMac : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.address === undefined) && !opts.urn) {
                throw new Error("Missing required property 'address'");
            }
            if ((!args || args.macAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'macAddress'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["addressLists"] = args ? args.addressLists : undefined;
            resourceInputs["allowDualStackQueue"] = args ? args.allowDualStackQueue : undefined;
            resourceInputs["alwaysBroadcast"] = args ? args.alwaysBroadcast : undefined;
            resourceInputs["blockAccess"] = args ? args.blockAccess : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["clientId"] = args ? args.clientId : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["dhcpOption"] = args ? args.dhcpOption : undefined;
            resourceInputs["dhcpOptionSet"] = args ? args.dhcpOptionSet : undefined;
            resourceInputs["dhcpServerLeaseId"] = args ? args.dhcpServerLeaseId : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["insertQueueBefore"] = args ? args.insertQueueBefore : undefined;
            resourceInputs["leaseTime"] = args ? args.leaseTime : undefined;
            resourceInputs["macAddress"] = args ? args.macAddress : undefined;
            resourceInputs["rateLimit"] = args ? args.rateLimit : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["useSrcMac"] = args ? args.useSrcMac : undefined;
            resourceInputs["activeAddress"] = undefined /*out*/;
            resourceInputs["activeClientId"] = undefined /*out*/;
            resourceInputs["activeHostname"] = undefined /*out*/;
            resourceInputs["activeMacAddress"] = undefined /*out*/;
            resourceInputs["activeServer"] = undefined /*out*/;
            resourceInputs["agentCircuitId"] = undefined /*out*/;
            resourceInputs["agentRemoteId"] = undefined /*out*/;
            resourceInputs["blocked"] = undefined /*out*/;
            resourceInputs["dynamic"] = undefined /*out*/;
            resourceInputs["expiresAfter"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["lastSeen"] = undefined /*out*/;
            resourceInputs["radius"] = undefined /*out*/;
            resourceInputs["srcMacAddress"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DhcpServerLease.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.DhcpServerLease = DhcpServerLease;
/** @internal */
DhcpServerLease.__pulumiType = 'routeros:index/dhcpServerLease:DhcpServerLease';
//# sourceMappingURL=dhcpServerLease.js.map