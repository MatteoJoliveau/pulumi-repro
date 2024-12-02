"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpFirewallConnectionTracking = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class IpFirewallConnectionTracking extends pulumi.CustomResource {
    /**
     * Get an existing IpFirewallConnectionTracking resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new IpFirewallConnectionTracking(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of IpFirewallConnectionTracking.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpFirewallConnectionTracking.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___skip_"] = state ? state.___skip_ : undefined;
            resourceInputs["activeIpv4"] = state ? state.activeIpv4 : undefined;
            resourceInputs["activeIpv6"] = state ? state.activeIpv6 : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["genericTimeout"] = state ? state.genericTimeout : undefined;
            resourceInputs["icmpTimeout"] = state ? state.icmpTimeout : undefined;
            resourceInputs["ipFirewallConnectionTrackingId"] = state ? state.ipFirewallConnectionTrackingId : undefined;
            resourceInputs["looseTcpTracking"] = state ? state.looseTcpTracking : undefined;
            resourceInputs["maxEntries"] = state ? state.maxEntries : undefined;
            resourceInputs["tcpCloseTimeout"] = state ? state.tcpCloseTimeout : undefined;
            resourceInputs["tcpCloseWaitTimeout"] = state ? state.tcpCloseWaitTimeout : undefined;
            resourceInputs["tcpEstablishedTimeout"] = state ? state.tcpEstablishedTimeout : undefined;
            resourceInputs["tcpFinWaitTimeout"] = state ? state.tcpFinWaitTimeout : undefined;
            resourceInputs["tcpLastAckTimeout"] = state ? state.tcpLastAckTimeout : undefined;
            resourceInputs["tcpMaxRetransTimeout"] = state ? state.tcpMaxRetransTimeout : undefined;
            resourceInputs["tcpSynReceivedTimeout"] = state ? state.tcpSynReceivedTimeout : undefined;
            resourceInputs["tcpSynSentTimeout"] = state ? state.tcpSynSentTimeout : undefined;
            resourceInputs["tcpTimeWaitTimeout"] = state ? state.tcpTimeWaitTimeout : undefined;
            resourceInputs["tcpUnackedTimeout"] = state ? state.tcpUnackedTimeout : undefined;
            resourceInputs["udpStreamTimeout"] = state ? state.udpStreamTimeout : undefined;
            resourceInputs["udpTimeout"] = state ? state.udpTimeout : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___skip_"] = args ? args.___skip_ : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["genericTimeout"] = args ? args.genericTimeout : undefined;
            resourceInputs["icmpTimeout"] = args ? args.icmpTimeout : undefined;
            resourceInputs["ipFirewallConnectionTrackingId"] = args ? args.ipFirewallConnectionTrackingId : undefined;
            resourceInputs["looseTcpTracking"] = args ? args.looseTcpTracking : undefined;
            resourceInputs["tcpCloseTimeout"] = args ? args.tcpCloseTimeout : undefined;
            resourceInputs["tcpCloseWaitTimeout"] = args ? args.tcpCloseWaitTimeout : undefined;
            resourceInputs["tcpEstablishedTimeout"] = args ? args.tcpEstablishedTimeout : undefined;
            resourceInputs["tcpFinWaitTimeout"] = args ? args.tcpFinWaitTimeout : undefined;
            resourceInputs["tcpLastAckTimeout"] = args ? args.tcpLastAckTimeout : undefined;
            resourceInputs["tcpMaxRetransTimeout"] = args ? args.tcpMaxRetransTimeout : undefined;
            resourceInputs["tcpSynReceivedTimeout"] = args ? args.tcpSynReceivedTimeout : undefined;
            resourceInputs["tcpSynSentTimeout"] = args ? args.tcpSynSentTimeout : undefined;
            resourceInputs["tcpTimeWaitTimeout"] = args ? args.tcpTimeWaitTimeout : undefined;
            resourceInputs["tcpUnackedTimeout"] = args ? args.tcpUnackedTimeout : undefined;
            resourceInputs["udpStreamTimeout"] = args ? args.udpStreamTimeout : undefined;
            resourceInputs["udpTimeout"] = args ? args.udpTimeout : undefined;
            resourceInputs["activeIpv4"] = undefined /*out*/;
            resourceInputs["activeIpv6"] = undefined /*out*/;
            resourceInputs["maxEntries"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpFirewallConnectionTracking.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.IpFirewallConnectionTracking = IpFirewallConnectionTracking;
/** @internal */
IpFirewallConnectionTracking.__pulumiType = 'routeros:index/ipFirewallConnectionTracking:IpFirewallConnectionTracking';
//# sourceMappingURL=ipFirewallConnectionTracking.js.map