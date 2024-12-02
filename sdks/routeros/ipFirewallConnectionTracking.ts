// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IpFirewallConnectionTracking extends pulumi.CustomResource {
    /**
     * Get an existing IpFirewallConnectionTracking resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpFirewallConnectionTrackingState, opts?: pulumi.CustomResourceOptions): IpFirewallConnectionTracking {
        return new IpFirewallConnectionTracking(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/ipFirewallConnectionTracking:IpFirewallConnectionTracking';

    /**
     * Returns true if the given object is an instance of IpFirewallConnectionTracking.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpFirewallConnectionTracking {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpFirewallConnectionTracking.__pulumiType;
    }

    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___id_!: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___path_!: pulumi.Output<string | undefined>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___skip_!: pulumi.Output<string | undefined>;
    /**
     * documentation is missing
     */
    public /*out*/ readonly activeIpv4!: pulumi.Output<boolean>;
    /**
     * documentation is missing
     */
    public /*out*/ readonly activeIpv6!: pulumi.Output<boolean>;
    /**
     * Allows to disable or enable connection tracking. Disabling connection tracking will cause several firewall features to
     * stop working. See the list of affected features. Starting from v6.0rc2 default value is auto. This means that connection
     * tracing is disabled until at least one firewall rule is added.
     */
    public readonly enabled!: pulumi.Output<string | undefined>;
    /**
     * Timeout for all other connection entries
     */
    public readonly genericTimeout!: pulumi.Output<string | undefined>;
    /**
     * ICMP connection timeout
     */
    public readonly icmpTimeout!: pulumi.Output<string | undefined>;
    public readonly ipFirewallConnectionTrackingId!: pulumi.Output<string>;
    /**
     * Disable picking up already established connections
     */
    public readonly looseTcpTracking!: pulumi.Output<string | undefined>;
    /**
     * Max amount of entries that the connection tracking table can hold. This value depends on the installed amount of RAM.
     * Note that the system does not create a maximum_size connection tracking table when it starts, it may increase if the
     * situation demands it and the system still has free ram, but size will not exceed 1048576
     */
    public /*out*/ readonly maxEntries!: pulumi.Output<string>;
    /**
     * No documentation
     */
    public readonly tcpCloseTimeout!: pulumi.Output<string | undefined>;
    /**
     * No documentation
     */
    public readonly tcpCloseWaitTimeout!: pulumi.Output<string | undefined>;
    /**
     * Time when established TCP connection times out.
     */
    public readonly tcpEstablishedTimeout!: pulumi.Output<string | undefined>;
    /**
     * No documentation
     */
    public readonly tcpFinWaitTimeout!: pulumi.Output<string | undefined>;
    /**
     * No documentation
     */
    public readonly tcpLastAckTimeout!: pulumi.Output<string | undefined>;
    /**
     * No documentation
     */
    public readonly tcpMaxRetransTimeout!: pulumi.Output<string | undefined>;
    /**
     * TCP SYN timeout.
     */
    public readonly tcpSynReceivedTimeout!: pulumi.Output<string | undefined>;
    /**
     * TCP SYN timeout.
     */
    public readonly tcpSynSentTimeout!: pulumi.Output<string | undefined>;
    /**
     * No documentation
     */
    public readonly tcpTimeWaitTimeout!: pulumi.Output<string | undefined>;
    /**
     * No documentation
     */
    public readonly tcpUnackedTimeout!: pulumi.Output<string | undefined>;
    /**
     * Specifies the timeout of UDP connections that has seen packets in both directions
     */
    public readonly udpStreamTimeout!: pulumi.Output<string | undefined>;
    /**
     * Specifies the timeout for UDP connections that have seen packets in one direction
     */
    public readonly udpTimeout!: pulumi.Output<string | undefined>;

    /**
     * Create a IpFirewallConnectionTracking resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpFirewallConnectionTrackingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpFirewallConnectionTrackingArgs | IpFirewallConnectionTrackingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpFirewallConnectionTrackingState | undefined;
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
        } else {
            const args = argsOrState as IpFirewallConnectionTrackingArgs | undefined;
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

/**
 * Input properties used for looking up and filtering IpFirewallConnectionTracking resources.
 */
export interface IpFirewallConnectionTrackingState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    ___skip_?: pulumi.Input<string>;
    /**
     * documentation is missing
     */
    activeIpv4?: pulumi.Input<boolean>;
    /**
     * documentation is missing
     */
    activeIpv6?: pulumi.Input<boolean>;
    /**
     * Allows to disable or enable connection tracking. Disabling connection tracking will cause several firewall features to
     * stop working. See the list of affected features. Starting from v6.0rc2 default value is auto. This means that connection
     * tracing is disabled until at least one firewall rule is added.
     */
    enabled?: pulumi.Input<string>;
    /**
     * Timeout for all other connection entries
     */
    genericTimeout?: pulumi.Input<string>;
    /**
     * ICMP connection timeout
     */
    icmpTimeout?: pulumi.Input<string>;
    ipFirewallConnectionTrackingId?: pulumi.Input<string>;
    /**
     * Disable picking up already established connections
     */
    looseTcpTracking?: pulumi.Input<string>;
    /**
     * Max amount of entries that the connection tracking table can hold. This value depends on the installed amount of RAM.
     * Note that the system does not create a maximum_size connection tracking table when it starts, it may increase if the
     * situation demands it and the system still has free ram, but size will not exceed 1048576
     */
    maxEntries?: pulumi.Input<string>;
    /**
     * No documentation
     */
    tcpCloseTimeout?: pulumi.Input<string>;
    /**
     * No documentation
     */
    tcpCloseWaitTimeout?: pulumi.Input<string>;
    /**
     * Time when established TCP connection times out.
     */
    tcpEstablishedTimeout?: pulumi.Input<string>;
    /**
     * No documentation
     */
    tcpFinWaitTimeout?: pulumi.Input<string>;
    /**
     * No documentation
     */
    tcpLastAckTimeout?: pulumi.Input<string>;
    /**
     * No documentation
     */
    tcpMaxRetransTimeout?: pulumi.Input<string>;
    /**
     * TCP SYN timeout.
     */
    tcpSynReceivedTimeout?: pulumi.Input<string>;
    /**
     * TCP SYN timeout.
     */
    tcpSynSentTimeout?: pulumi.Input<string>;
    /**
     * No documentation
     */
    tcpTimeWaitTimeout?: pulumi.Input<string>;
    /**
     * No documentation
     */
    tcpUnackedTimeout?: pulumi.Input<string>;
    /**
     * Specifies the timeout of UDP connections that has seen packets in both directions
     */
    udpStreamTimeout?: pulumi.Input<string>;
    /**
     * Specifies the timeout for UDP connections that have seen packets in one direction
     */
    udpTimeout?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IpFirewallConnectionTracking resource.
 */
export interface IpFirewallConnectionTrackingArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    ___skip_?: pulumi.Input<string>;
    /**
     * Allows to disable or enable connection tracking. Disabling connection tracking will cause several firewall features to
     * stop working. See the list of affected features. Starting from v6.0rc2 default value is auto. This means that connection
     * tracing is disabled until at least one firewall rule is added.
     */
    enabled?: pulumi.Input<string>;
    /**
     * Timeout for all other connection entries
     */
    genericTimeout?: pulumi.Input<string>;
    /**
     * ICMP connection timeout
     */
    icmpTimeout?: pulumi.Input<string>;
    ipFirewallConnectionTrackingId?: pulumi.Input<string>;
    /**
     * Disable picking up already established connections
     */
    looseTcpTracking?: pulumi.Input<string>;
    /**
     * No documentation
     */
    tcpCloseTimeout?: pulumi.Input<string>;
    /**
     * No documentation
     */
    tcpCloseWaitTimeout?: pulumi.Input<string>;
    /**
     * Time when established TCP connection times out.
     */
    tcpEstablishedTimeout?: pulumi.Input<string>;
    /**
     * No documentation
     */
    tcpFinWaitTimeout?: pulumi.Input<string>;
    /**
     * No documentation
     */
    tcpLastAckTimeout?: pulumi.Input<string>;
    /**
     * No documentation
     */
    tcpMaxRetransTimeout?: pulumi.Input<string>;
    /**
     * TCP SYN timeout.
     */
    tcpSynReceivedTimeout?: pulumi.Input<string>;
    /**
     * TCP SYN timeout.
     */
    tcpSynSentTimeout?: pulumi.Input<string>;
    /**
     * No documentation
     */
    tcpTimeWaitTimeout?: pulumi.Input<string>;
    /**
     * No documentation
     */
    tcpUnackedTimeout?: pulumi.Input<string>;
    /**
     * Specifies the timeout of UDP connections that has seen packets in both directions
     */
    udpStreamTimeout?: pulumi.Input<string>;
    /**
     * Specifies the timeout for UDP connections that have seen packets in one direction
     */
    udpTimeout?: pulumi.Input<string>;
}