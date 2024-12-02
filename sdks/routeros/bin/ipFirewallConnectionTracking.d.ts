import * as pulumi from "@pulumi/pulumi";
export declare class IpFirewallConnectionTracking extends pulumi.CustomResource {
    /**
     * Get an existing IpFirewallConnectionTracking resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpFirewallConnectionTrackingState, opts?: pulumi.CustomResourceOptions): IpFirewallConnectionTracking;
    /**
     * Returns true if the given object is an instance of IpFirewallConnectionTracking.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpFirewallConnectionTracking;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___skip_: pulumi.Output<string | undefined>;
    /**
     * documentation is missing
     */
    readonly activeIpv4: pulumi.Output<boolean>;
    /**
     * documentation is missing
     */
    readonly activeIpv6: pulumi.Output<boolean>;
    /**
     * Allows to disable or enable connection tracking. Disabling connection tracking will cause several firewall features to
     * stop working. See the list of affected features. Starting from v6.0rc2 default value is auto. This means that connection
     * tracing is disabled until at least one firewall rule is added.
     */
    readonly enabled: pulumi.Output<string | undefined>;
    /**
     * Timeout for all other connection entries
     */
    readonly genericTimeout: pulumi.Output<string | undefined>;
    /**
     * ICMP connection timeout
     */
    readonly icmpTimeout: pulumi.Output<string | undefined>;
    readonly ipFirewallConnectionTrackingId: pulumi.Output<string>;
    /**
     * Disable picking up already established connections
     */
    readonly looseTcpTracking: pulumi.Output<string | undefined>;
    /**
     * Max amount of entries that the connection tracking table can hold. This value depends on the installed amount of RAM.
     * Note that the system does not create a maximum_size connection tracking table when it starts, it may increase if the
     * situation demands it and the system still has free ram, but size will not exceed 1048576
     */
    readonly maxEntries: pulumi.Output<string>;
    /**
     * No documentation
     */
    readonly tcpCloseTimeout: pulumi.Output<string | undefined>;
    /**
     * No documentation
     */
    readonly tcpCloseWaitTimeout: pulumi.Output<string | undefined>;
    /**
     * Time when established TCP connection times out.
     */
    readonly tcpEstablishedTimeout: pulumi.Output<string | undefined>;
    /**
     * No documentation
     */
    readonly tcpFinWaitTimeout: pulumi.Output<string | undefined>;
    /**
     * No documentation
     */
    readonly tcpLastAckTimeout: pulumi.Output<string | undefined>;
    /**
     * No documentation
     */
    readonly tcpMaxRetransTimeout: pulumi.Output<string | undefined>;
    /**
     * TCP SYN timeout.
     */
    readonly tcpSynReceivedTimeout: pulumi.Output<string | undefined>;
    /**
     * TCP SYN timeout.
     */
    readonly tcpSynSentTimeout: pulumi.Output<string | undefined>;
    /**
     * No documentation
     */
    readonly tcpTimeWaitTimeout: pulumi.Output<string | undefined>;
    /**
     * No documentation
     */
    readonly tcpUnackedTimeout: pulumi.Output<string | undefined>;
    /**
     * Specifies the timeout of UDP connections that has seen packets in both directions
     */
    readonly udpStreamTimeout: pulumi.Output<string | undefined>;
    /**
     * Specifies the timeout for UDP connections that have seen packets in one direction
     */
    readonly udpTimeout: pulumi.Output<string | undefined>;
    /**
     * Create a IpFirewallConnectionTracking resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpFirewallConnectionTrackingArgs, opts?: pulumi.CustomResourceOptions);
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
