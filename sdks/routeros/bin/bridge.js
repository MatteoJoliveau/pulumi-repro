"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bridge = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class Bridge extends pulumi.CustomResource {
    /**
     * Get an existing Bridge resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new Bridge(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of Bridge.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Bridge.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["actualMtu"] = state ? state.actualMtu : undefined;
            resourceInputs["addDhcpOption82"] = state ? state.addDhcpOption82 : undefined;
            resourceInputs["adminMac"] = state ? state.adminMac : undefined;
            resourceInputs["ageingTime"] = state ? state.ageingTime : undefined;
            resourceInputs["arp"] = state ? state.arp : undefined;
            resourceInputs["arpTimeout"] = state ? state.arpTimeout : undefined;
            resourceInputs["autoMac"] = state ? state.autoMac : undefined;
            resourceInputs["bridgeId"] = state ? state.bridgeId : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["dhcpSnooping"] = state ? state.dhcpSnooping : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["etherType"] = state ? state.etherType : undefined;
            resourceInputs["fastForward"] = state ? state.fastForward : undefined;
            resourceInputs["forwardDelay"] = state ? state.forwardDelay : undefined;
            resourceInputs["forwardReservedAddresses"] = state ? state.forwardReservedAddresses : undefined;
            resourceInputs["frameTypes"] = state ? state.frameTypes : undefined;
            resourceInputs["igmpSnooping"] = state ? state.igmpSnooping : undefined;
            resourceInputs["igmpVersion"] = state ? state.igmpVersion : undefined;
            resourceInputs["ingressFiltering"] = state ? state.ingressFiltering : undefined;
            resourceInputs["l2mtu"] = state ? state.l2mtu : undefined;
            resourceInputs["lastMemberInterval"] = state ? state.lastMemberInterval : undefined;
            resourceInputs["lastMemberQueryCount"] = state ? state.lastMemberQueryCount : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["maxHops"] = state ? state.maxHops : undefined;
            resourceInputs["maxLearnedEntries"] = state ? state.maxLearnedEntries : undefined;
            resourceInputs["maxMessageAge"] = state ? state.maxMessageAge : undefined;
            resourceInputs["membershipInterval"] = state ? state.membershipInterval : undefined;
            resourceInputs["mldVersion"] = state ? state.mldVersion : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["multicastQuerier"] = state ? state.multicastQuerier : undefined;
            resourceInputs["multicastRouter"] = state ? state.multicastRouter : undefined;
            resourceInputs["mvrp"] = state ? state.mvrp : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["portCostMode"] = state ? state.portCostMode : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["protocolMode"] = state ? state.protocolMode : undefined;
            resourceInputs["pvid"] = state ? state.pvid : undefined;
            resourceInputs["querierInterval"] = state ? state.querierInterval : undefined;
            resourceInputs["queryInterval"] = state ? state.queryInterval : undefined;
            resourceInputs["queryResponseInterval"] = state ? state.queryResponseInterval : undefined;
            resourceInputs["regionName"] = state ? state.regionName : undefined;
            resourceInputs["regionRevision"] = state ? state.regionRevision : undefined;
            resourceInputs["running"] = state ? state.running : undefined;
            resourceInputs["startupQueryCount"] = state ? state.startupQueryCount : undefined;
            resourceInputs["startupQueryInterval"] = state ? state.startupQueryInterval : undefined;
            resourceInputs["transmitHoldCount"] = state ? state.transmitHoldCount : undefined;
            resourceInputs["vlanFiltering"] = state ? state.vlanFiltering : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["addDhcpOption82"] = args ? args.addDhcpOption82 : undefined;
            resourceInputs["adminMac"] = args ? args.adminMac : undefined;
            resourceInputs["ageingTime"] = args ? args.ageingTime : undefined;
            resourceInputs["arp"] = args ? args.arp : undefined;
            resourceInputs["arpTimeout"] = args ? args.arpTimeout : undefined;
            resourceInputs["autoMac"] = args ? args.autoMac : undefined;
            resourceInputs["bridgeId"] = args ? args.bridgeId : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["dhcpSnooping"] = args ? args.dhcpSnooping : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["etherType"] = args ? args.etherType : undefined;
            resourceInputs["fastForward"] = args ? args.fastForward : undefined;
            resourceInputs["forwardDelay"] = args ? args.forwardDelay : undefined;
            resourceInputs["forwardReservedAddresses"] = args ? args.forwardReservedAddresses : undefined;
            resourceInputs["frameTypes"] = args ? args.frameTypes : undefined;
            resourceInputs["igmpSnooping"] = args ? args.igmpSnooping : undefined;
            resourceInputs["igmpVersion"] = args ? args.igmpVersion : undefined;
            resourceInputs["ingressFiltering"] = args ? args.ingressFiltering : undefined;
            resourceInputs["lastMemberInterval"] = args ? args.lastMemberInterval : undefined;
            resourceInputs["lastMemberQueryCount"] = args ? args.lastMemberQueryCount : undefined;
            resourceInputs["maxHops"] = args ? args.maxHops : undefined;
            resourceInputs["maxLearnedEntries"] = args ? args.maxLearnedEntries : undefined;
            resourceInputs["maxMessageAge"] = args ? args.maxMessageAge : undefined;
            resourceInputs["membershipInterval"] = args ? args.membershipInterval : undefined;
            resourceInputs["mldVersion"] = args ? args.mldVersion : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["multicastQuerier"] = args ? args.multicastQuerier : undefined;
            resourceInputs["multicastRouter"] = args ? args.multicastRouter : undefined;
            resourceInputs["mvrp"] = args ? args.mvrp : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["portCostMode"] = args ? args.portCostMode : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["protocolMode"] = args ? args.protocolMode : undefined;
            resourceInputs["pvid"] = args ? args.pvid : undefined;
            resourceInputs["querierInterval"] = args ? args.querierInterval : undefined;
            resourceInputs["queryInterval"] = args ? args.queryInterval : undefined;
            resourceInputs["queryResponseInterval"] = args ? args.queryResponseInterval : undefined;
            resourceInputs["regionName"] = args ? args.regionName : undefined;
            resourceInputs["regionRevision"] = args ? args.regionRevision : undefined;
            resourceInputs["startupQueryCount"] = args ? args.startupQueryCount : undefined;
            resourceInputs["startupQueryInterval"] = args ? args.startupQueryInterval : undefined;
            resourceInputs["transmitHoldCount"] = args ? args.transmitHoldCount : undefined;
            resourceInputs["vlanFiltering"] = args ? args.vlanFiltering : undefined;
            resourceInputs["actualMtu"] = undefined /*out*/;
            resourceInputs["l2mtu"] = undefined /*out*/;
            resourceInputs["macAddress"] = undefined /*out*/;
            resourceInputs["running"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Bridge.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.Bridge = Bridge;
/** @internal */
Bridge.__pulumiType = 'routeros:index/bridge:Bridge';
//# sourceMappingURL=bridge.js.map