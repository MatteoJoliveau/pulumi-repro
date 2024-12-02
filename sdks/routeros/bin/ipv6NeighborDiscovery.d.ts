import * as pulumi from "@pulumi/pulumi";
export declare class Ipv6NeighborDiscovery extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6NeighborDiscovery resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv6NeighborDiscoveryState, opts?: pulumi.CustomResourceOptions): Ipv6NeighborDiscovery;
    /**
     * Returns true if the given object is an instance of Ipv6NeighborDiscovery.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Ipv6NeighborDiscovery;
    /**
     * <em>A list of values when generated by RouterOs will be dropped, useful to default values as 'unspecified' for null</em>
     */
    readonly ___dropVal_: pulumi.Output<string | undefined>;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Option to redistribute DNS server information using RADVD. You will need a running client-side software with Router
     * Advertisement DNS support to take advantage of the advertised DNS information.
     */
    readonly advertiseDns: pulumi.Output<boolean | undefined>;
    /**
     * When set, the link-layer address of the outgoing interface is included in the RA.
     */
    readonly advertiseMacAddress: pulumi.Output<boolean | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * It's the default item.
     */
    readonly default: pulumi.Output<boolean>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Specify a single IPv6 address or comma separated list of addresses that will be provided to hosts for DNS server
     * configuration.
     */
    readonly dns: pulumi.Output<string | undefined>;
    /**
     * Specify a single IPv6 address or list of addresses that will be provided to hosts for DNS server configuration.
     */
    readonly dnsServers: pulumi.Output<string | undefined>;
    /**
     * The default value that should be placed in the Hop Count field of the IP header for outgoing (unicast) IP packets.
     */
    readonly hopLimit: pulumi.Output<number | undefined>;
    /**
     * The interface on which to run neighbor discovery.all - run ND on all running interfaces.
     */
    readonly interface: pulumi.Output<string>;
    readonly invalid: pulumi.Output<boolean>;
    readonly ipv6NeighborDiscoveryId: pulumi.Output<string>;
    /**
     * Name of the IPv6 pool in which received IPv6 prefix will be added
     */
    readonly managedAddressConfiguration: pulumi.Output<boolean | undefined>;
    /**
     * The flag indicates whether hosts should use stateful autoconfiguration (DHCPv6) to obtain addresses
     */
    readonly mtu: pulumi.Output<number | undefined>;
    /**
     * The flag indicates whether hosts should use stateful autoconfiguration to obtain additional information (excluding
     * addresses).
     */
    readonly otherConfiguration: pulumi.Output<boolean | undefined>;
    /**
     * Specify IPv6 prefix or list of prefixes within /32, /40. /48, /56, /64, or /96 subnet that will be provided to hosts as
     * NAT64 prefixes.
     */
    readonly pref64s: pulumi.Output<string[] | undefined>;
    /**
     * The minimum time allowed between sending multicast router advertisements from the interface.
     */
    readonly raDelay: pulumi.Output<string | undefined>;
    /**
     * The min-max interval allowed between sending unsolicited multicast router advertisements from the interface.
     */
    readonly raInterval: pulumi.Output<string | undefined>;
    /**
     * Specify the router preference that is communicated to IPv6 hosts through router advertisements.The preference value in
     * the router advertisements enables IPv6 hosts to select a default router to reach a remote destination
     */
    readonly raLifetime: pulumi.Output<string | undefined>;
    /**
     * Specify the router preference that is communicated to IPv6 hosts through router advertisements.The preference value in
     * the router advertisements enables IPv6 hosts to select a default router to reach a remote destination
     */
    readonly raPreference: pulumi.Output<string | undefined>;
    /**
     * Specify the router preference that is communicated to IPv6 hosts through router advertisements.The preference value in
     * the router advertisements enables IPv6 hosts to select a default router to reach a remote destination
     */
    readonly reachableTime: pulumi.Output<string | undefined>;
    /**
     * The time between retransmitted Neighbor Solicitation messages.Used by address resolution and the Neighbor Unreachability
     * Detection algorithm (see Sections 7.2 and 7.3 of RFC 2461)
     */
    readonly retransmitInterval: pulumi.Output<string | undefined>;
    /**
     * Create a Ipv6NeighborDiscovery resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ipv6NeighborDiscoveryArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Ipv6NeighborDiscovery resources.
 */
export interface Ipv6NeighborDiscoveryState {
    /**
     * <em>A list of values when generated by RouterOs will be dropped, useful to default values as 'unspecified' for null</em>
     */
    ___dropVal_?: pulumi.Input<string>;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Option to redistribute DNS server information using RADVD. You will need a running client-side software with Router
     * Advertisement DNS support to take advantage of the advertised DNS information.
     */
    advertiseDns?: pulumi.Input<boolean>;
    /**
     * When set, the link-layer address of the outgoing interface is included in the RA.
     */
    advertiseMacAddress?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Specify a single IPv6 address or comma separated list of addresses that will be provided to hosts for DNS server
     * configuration.
     */
    dns?: pulumi.Input<string>;
    /**
     * Specify a single IPv6 address or list of addresses that will be provided to hosts for DNS server configuration.
     */
    dnsServers?: pulumi.Input<string>;
    /**
     * The default value that should be placed in the Hop Count field of the IP header for outgoing (unicast) IP packets.
     */
    hopLimit?: pulumi.Input<number>;
    /**
     * The interface on which to run neighbor discovery.all - run ND on all running interfaces.
     */
    interface?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    ipv6NeighborDiscoveryId?: pulumi.Input<string>;
    /**
     * Name of the IPv6 pool in which received IPv6 prefix will be added
     */
    managedAddressConfiguration?: pulumi.Input<boolean>;
    /**
     * The flag indicates whether hosts should use stateful autoconfiguration (DHCPv6) to obtain addresses
     */
    mtu?: pulumi.Input<number>;
    /**
     * The flag indicates whether hosts should use stateful autoconfiguration to obtain additional information (excluding
     * addresses).
     */
    otherConfiguration?: pulumi.Input<boolean>;
    /**
     * Specify IPv6 prefix or list of prefixes within /32, /40. /48, /56, /64, or /96 subnet that will be provided to hosts as
     * NAT64 prefixes.
     */
    pref64s?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The minimum time allowed between sending multicast router advertisements from the interface.
     */
    raDelay?: pulumi.Input<string>;
    /**
     * The min-max interval allowed between sending unsolicited multicast router advertisements from the interface.
     */
    raInterval?: pulumi.Input<string>;
    /**
     * Specify the router preference that is communicated to IPv6 hosts through router advertisements.The preference value in
     * the router advertisements enables IPv6 hosts to select a default router to reach a remote destination
     */
    raLifetime?: pulumi.Input<string>;
    /**
     * Specify the router preference that is communicated to IPv6 hosts through router advertisements.The preference value in
     * the router advertisements enables IPv6 hosts to select a default router to reach a remote destination
     */
    raPreference?: pulumi.Input<string>;
    /**
     * Specify the router preference that is communicated to IPv6 hosts through router advertisements.The preference value in
     * the router advertisements enables IPv6 hosts to select a default router to reach a remote destination
     */
    reachableTime?: pulumi.Input<string>;
    /**
     * The time between retransmitted Neighbor Solicitation messages.Used by address resolution and the Neighbor Unreachability
     * Detection algorithm (see Sections 7.2 and 7.3 of RFC 2461)
     */
    retransmitInterval?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Ipv6NeighborDiscovery resource.
 */
export interface Ipv6NeighborDiscoveryArgs {
    /**
     * <em>A list of values when generated by RouterOs will be dropped, useful to default values as 'unspecified' for null</em>
     */
    ___dropVal_?: pulumi.Input<string>;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Option to redistribute DNS server information using RADVD. You will need a running client-side software with Router
     * Advertisement DNS support to take advantage of the advertised DNS information.
     */
    advertiseDns?: pulumi.Input<boolean>;
    /**
     * When set, the link-layer address of the outgoing interface is included in the RA.
     */
    advertiseMacAddress?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Specify a single IPv6 address or comma separated list of addresses that will be provided to hosts for DNS server
     * configuration.
     */
    dns?: pulumi.Input<string>;
    /**
     * Specify a single IPv6 address or list of addresses that will be provided to hosts for DNS server configuration.
     */
    dnsServers?: pulumi.Input<string>;
    /**
     * The default value that should be placed in the Hop Count field of the IP header for outgoing (unicast) IP packets.
     */
    hopLimit?: pulumi.Input<number>;
    /**
     * The interface on which to run neighbor discovery.all - run ND on all running interfaces.
     */
    interface: pulumi.Input<string>;
    ipv6NeighborDiscoveryId?: pulumi.Input<string>;
    /**
     * Name of the IPv6 pool in which received IPv6 prefix will be added
     */
    managedAddressConfiguration?: pulumi.Input<boolean>;
    /**
     * The flag indicates whether hosts should use stateful autoconfiguration (DHCPv6) to obtain addresses
     */
    mtu?: pulumi.Input<number>;
    /**
     * The flag indicates whether hosts should use stateful autoconfiguration to obtain additional information (excluding
     * addresses).
     */
    otherConfiguration?: pulumi.Input<boolean>;
    /**
     * Specify IPv6 prefix or list of prefixes within /32, /40. /48, /56, /64, or /96 subnet that will be provided to hosts as
     * NAT64 prefixes.
     */
    pref64s?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The minimum time allowed between sending multicast router advertisements from the interface.
     */
    raDelay?: pulumi.Input<string>;
    /**
     * The min-max interval allowed between sending unsolicited multicast router advertisements from the interface.
     */
    raInterval?: pulumi.Input<string>;
    /**
     * Specify the router preference that is communicated to IPv6 hosts through router advertisements.The preference value in
     * the router advertisements enables IPv6 hosts to select a default router to reach a remote destination
     */
    raLifetime?: pulumi.Input<string>;
    /**
     * Specify the router preference that is communicated to IPv6 hosts through router advertisements.The preference value in
     * the router advertisements enables IPv6 hosts to select a default router to reach a remote destination
     */
    raPreference?: pulumi.Input<string>;
    /**
     * Specify the router preference that is communicated to IPv6 hosts through router advertisements.The preference value in
     * the router advertisements enables IPv6 hosts to select a default router to reach a remote destination
     */
    reachableTime?: pulumi.Input<string>;
    /**
     * The time between retransmitted Neighbor Solicitation messages.Used by address resolution and the Neighbor Unreachability
     * Detection algorithm (see Sections 7.2 and 7.3 of RFC 2461)
     */
    retransmitInterval?: pulumi.Input<string>;
}