// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DhcpServer extends pulumi.CustomResource {
    /**
     * Get an existing DhcpServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DhcpServerState, opts?: pulumi.CustomResourceOptions): DhcpServer {
        return new DhcpServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/dhcpServer:DhcpServer';

    /**
     * Returns true if the given object is an instance of DhcpServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DhcpServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DhcpServer.__pulumiType;
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
     * Whether to add dynamic ARP entry.
     */
    public readonly addArp!: pulumi.Output<boolean | undefined>;
    /**
     * IP pool, from which to take IP addresses for the clients. If set to static-only, then only the clients that have a
     * static lease (added in lease submenu) will be allowed.
     */
    public readonly addressPool!: pulumi.Output<string | undefined>;
    /**
     * Creates a single simple queue entry for both IPv4 and IPv6 addresses, uses the MAC address and DUID for identification.
     * Requires IPv6 DHCP Server to have this option enabled as well to work properly.
     */
    public readonly allowDualStackQueue!: pulumi.Output<boolean | undefined>;
    /**
     * Always send replies as broadcasts even if destination IP is known.
     */
    public readonly alwaysBroadcast!: pulumi.Output<boolean | undefined>;
    /**
     * Option changes the way how a server responds to DHCP requests.
     */
    public readonly authoritative!: pulumi.Output<string | undefined>;
    /**
     * Accepts two predefined options or time value: * forever - lease never expires * lease-time - use time from lease-time
     * parameter
     */
    public readonly bootpLeaseTime!: pulumi.Output<string | undefined>;
    /**
     * Support for BOOTP clients.
     */
    public readonly bootpSupport!: pulumi.Output<string | undefined>;
    /**
     * Specifies whether to limit specific number of clients per single MAC address.
     */
    public readonly clientMacLimit!: pulumi.Output<number | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Allows to disable/enable conflict detection. If option is enabled, then whenever server tries to assign a lease it will
     * send ICMP and ARP messages to detect whether such address in the network already exist. If any of above get reply
     * address is considered already used. Conflict detection must be disabled when any kind of DHCP client limitation per port
     * or per mac is used.
     */
    public readonly conflictDetection!: pulumi.Output<boolean | undefined>;
    /**
     * If secs field in DHCP packet is smaller than delay-threshold, then this packet is ignored. If set to none - there is no
     * threshold (all DHCP packets are processed).
     */
    public readonly delayThreshold!: pulumi.Output<string | undefined>;
    /**
     * Use custom set of DHCP options defined in option sets menu.
     */
    public readonly dhcpOptionSet!: pulumi.Output<string | undefined>;
    public readonly dhcpServerId!: pulumi.Output<string>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    public /*out*/ readonly dynamic!: pulumi.Output<boolean>;
    /**
     * Specify where to place dynamic simple queue entries for static DCHP leases with rate-limit parameter set.
     */
    public readonly insertQueueBefore!: pulumi.Output<string | undefined>;
    /**
     * Name of the interface.
     */
    public readonly interface!: pulumi.Output<string>;
    public /*out*/ readonly invalid!: pulumi.Output<boolean>;
    /**
     * A script that will be executed after a lease is assigned or de-assigned.
     */
    public readonly leaseScript!: pulumi.Output<string | undefined>;
    /**
     * The time that a client may use the assigned address. The client will try to renew this address after half of this time
     * and will request a new address after the time limit expires.
     */
    public readonly leaseTime!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly parentQueue!: pulumi.Output<string | undefined>;
    /**
     * The IP address of the relay this DHCP server.
     */
    public readonly relay!: pulumi.Output<string | undefined>;
    /**
     * The address which the DHCP client must send requests to in order to renew an IP address lease.
     */
    public readonly srcAddress!: pulumi.Output<string | undefined>;
    /**
     * Forward RADIUS Framed-Route as a DHCP Classless-Static-Route to DHCP-client.
     */
    public readonly useFramedAsClassless!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to use RADIUS server.
     */
    public readonly useRadius!: pulumi.Output<string | undefined>;

    /**
     * Create a DhcpServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DhcpServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DhcpServerArgs | DhcpServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DhcpServerState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["addArp"] = state ? state.addArp : undefined;
            resourceInputs["addressPool"] = state ? state.addressPool : undefined;
            resourceInputs["allowDualStackQueue"] = state ? state.allowDualStackQueue : undefined;
            resourceInputs["alwaysBroadcast"] = state ? state.alwaysBroadcast : undefined;
            resourceInputs["authoritative"] = state ? state.authoritative : undefined;
            resourceInputs["bootpLeaseTime"] = state ? state.bootpLeaseTime : undefined;
            resourceInputs["bootpSupport"] = state ? state.bootpSupport : undefined;
            resourceInputs["clientMacLimit"] = state ? state.clientMacLimit : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["conflictDetection"] = state ? state.conflictDetection : undefined;
            resourceInputs["delayThreshold"] = state ? state.delayThreshold : undefined;
            resourceInputs["dhcpOptionSet"] = state ? state.dhcpOptionSet : undefined;
            resourceInputs["dhcpServerId"] = state ? state.dhcpServerId : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["dynamic"] = state ? state.dynamic : undefined;
            resourceInputs["insertQueueBefore"] = state ? state.insertQueueBefore : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["invalid"] = state ? state.invalid : undefined;
            resourceInputs["leaseScript"] = state ? state.leaseScript : undefined;
            resourceInputs["leaseTime"] = state ? state.leaseTime : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentQueue"] = state ? state.parentQueue : undefined;
            resourceInputs["relay"] = state ? state.relay : undefined;
            resourceInputs["srcAddress"] = state ? state.srcAddress : undefined;
            resourceInputs["useFramedAsClassless"] = state ? state.useFramedAsClassless : undefined;
            resourceInputs["useRadius"] = state ? state.useRadius : undefined;
        } else {
            const args = argsOrState as DhcpServerArgs | undefined;
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["addArp"] = args ? args.addArp : undefined;
            resourceInputs["addressPool"] = args ? args.addressPool : undefined;
            resourceInputs["allowDualStackQueue"] = args ? args.allowDualStackQueue : undefined;
            resourceInputs["alwaysBroadcast"] = args ? args.alwaysBroadcast : undefined;
            resourceInputs["authoritative"] = args ? args.authoritative : undefined;
            resourceInputs["bootpLeaseTime"] = args ? args.bootpLeaseTime : undefined;
            resourceInputs["bootpSupport"] = args ? args.bootpSupport : undefined;
            resourceInputs["clientMacLimit"] = args ? args.clientMacLimit : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["conflictDetection"] = args ? args.conflictDetection : undefined;
            resourceInputs["delayThreshold"] = args ? args.delayThreshold : undefined;
            resourceInputs["dhcpOptionSet"] = args ? args.dhcpOptionSet : undefined;
            resourceInputs["dhcpServerId"] = args ? args.dhcpServerId : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["insertQueueBefore"] = args ? args.insertQueueBefore : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["leaseScript"] = args ? args.leaseScript : undefined;
            resourceInputs["leaseTime"] = args ? args.leaseTime : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentQueue"] = args ? args.parentQueue : undefined;
            resourceInputs["relay"] = args ? args.relay : undefined;
            resourceInputs["srcAddress"] = args ? args.srcAddress : undefined;
            resourceInputs["useFramedAsClassless"] = args ? args.useFramedAsClassless : undefined;
            resourceInputs["useRadius"] = args ? args.useRadius : undefined;
            resourceInputs["dynamic"] = undefined /*out*/;
            resourceInputs["invalid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DhcpServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DhcpServer resources.
 */
export interface DhcpServerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to add dynamic ARP entry.
     */
    addArp?: pulumi.Input<boolean>;
    /**
     * IP pool, from which to take IP addresses for the clients. If set to static-only, then only the clients that have a
     * static lease (added in lease submenu) will be allowed.
     */
    addressPool?: pulumi.Input<string>;
    /**
     * Creates a single simple queue entry for both IPv4 and IPv6 addresses, uses the MAC address and DUID for identification.
     * Requires IPv6 DHCP Server to have this option enabled as well to work properly.
     */
    allowDualStackQueue?: pulumi.Input<boolean>;
    /**
     * Always send replies as broadcasts even if destination IP is known.
     */
    alwaysBroadcast?: pulumi.Input<boolean>;
    /**
     * Option changes the way how a server responds to DHCP requests.
     */
    authoritative?: pulumi.Input<string>;
    /**
     * Accepts two predefined options or time value: * forever - lease never expires * lease-time - use time from lease-time
     * parameter
     */
    bootpLeaseTime?: pulumi.Input<string>;
    /**
     * Support for BOOTP clients.
     */
    bootpSupport?: pulumi.Input<string>;
    /**
     * Specifies whether to limit specific number of clients per single MAC address.
     */
    clientMacLimit?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    /**
     * Allows to disable/enable conflict detection. If option is enabled, then whenever server tries to assign a lease it will
     * send ICMP and ARP messages to detect whether such address in the network already exist. If any of above get reply
     * address is considered already used. Conflict detection must be disabled when any kind of DHCP client limitation per port
     * or per mac is used.
     */
    conflictDetection?: pulumi.Input<boolean>;
    /**
     * If secs field in DHCP packet is smaller than delay-threshold, then this packet is ignored. If set to none - there is no
     * threshold (all DHCP packets are processed).
     */
    delayThreshold?: pulumi.Input<string>;
    /**
     * Use custom set of DHCP options defined in option sets menu.
     */
    dhcpOptionSet?: pulumi.Input<string>;
    dhcpServerId?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * Specify where to place dynamic simple queue entries for static DCHP leases with rate-limit parameter set.
     */
    insertQueueBefore?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    /**
     * A script that will be executed after a lease is assigned or de-assigned.
     */
    leaseScript?: pulumi.Input<string>;
    /**
     * The time that a client may use the assigned address. The client will try to renew this address after half of this time
     * and will request a new address after the time limit expires.
     */
    leaseTime?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parentQueue?: pulumi.Input<string>;
    /**
     * The IP address of the relay this DHCP server.
     */
    relay?: pulumi.Input<string>;
    /**
     * The address which the DHCP client must send requests to in order to renew an IP address lease.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Forward RADIUS Framed-Route as a DHCP Classless-Static-Route to DHCP-client.
     */
    useFramedAsClassless?: pulumi.Input<boolean>;
    /**
     * Whether to use RADIUS server.
     */
    useRadius?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DhcpServer resource.
 */
export interface DhcpServerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to add dynamic ARP entry.
     */
    addArp?: pulumi.Input<boolean>;
    /**
     * IP pool, from which to take IP addresses for the clients. If set to static-only, then only the clients that have a
     * static lease (added in lease submenu) will be allowed.
     */
    addressPool?: pulumi.Input<string>;
    /**
     * Creates a single simple queue entry for both IPv4 and IPv6 addresses, uses the MAC address and DUID for identification.
     * Requires IPv6 DHCP Server to have this option enabled as well to work properly.
     */
    allowDualStackQueue?: pulumi.Input<boolean>;
    /**
     * Always send replies as broadcasts even if destination IP is known.
     */
    alwaysBroadcast?: pulumi.Input<boolean>;
    /**
     * Option changes the way how a server responds to DHCP requests.
     */
    authoritative?: pulumi.Input<string>;
    /**
     * Accepts two predefined options or time value: * forever - lease never expires * lease-time - use time from lease-time
     * parameter
     */
    bootpLeaseTime?: pulumi.Input<string>;
    /**
     * Support for BOOTP clients.
     */
    bootpSupport?: pulumi.Input<string>;
    /**
     * Specifies whether to limit specific number of clients per single MAC address.
     */
    clientMacLimit?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    /**
     * Allows to disable/enable conflict detection. If option is enabled, then whenever server tries to assign a lease it will
     * send ICMP and ARP messages to detect whether such address in the network already exist. If any of above get reply
     * address is considered already used. Conflict detection must be disabled when any kind of DHCP client limitation per port
     * or per mac is used.
     */
    conflictDetection?: pulumi.Input<boolean>;
    /**
     * If secs field in DHCP packet is smaller than delay-threshold, then this packet is ignored. If set to none - there is no
     * threshold (all DHCP packets are processed).
     */
    delayThreshold?: pulumi.Input<string>;
    /**
     * Use custom set of DHCP options defined in option sets menu.
     */
    dhcpOptionSet?: pulumi.Input<string>;
    dhcpServerId?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Specify where to place dynamic simple queue entries for static DCHP leases with rate-limit parameter set.
     */
    insertQueueBefore?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
    /**
     * A script that will be executed after a lease is assigned or de-assigned.
     */
    leaseScript?: pulumi.Input<string>;
    /**
     * The time that a client may use the assigned address. The client will try to renew this address after half of this time
     * and will request a new address after the time limit expires.
     */
    leaseTime?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parentQueue?: pulumi.Input<string>;
    /**
     * The IP address of the relay this DHCP server.
     */
    relay?: pulumi.Input<string>;
    /**
     * The address which the DHCP client must send requests to in order to renew an IP address lease.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Forward RADIUS Framed-Route as a DHCP Classless-Static-Route to DHCP-client.
     */
    useFramedAsClassless?: pulumi.Input<boolean>;
    /**
     * Whether to use RADIUS server.
     */
    useRadius?: pulumi.Input<string>;
}
