import * as pulumi from "@pulumi/pulumi";
export declare class Ipv6DhcpClient extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6DhcpClient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv6DhcpClientState, opts?: pulumi.CustomResourceOptions): Ipv6DhcpClient;
    /**
     * Returns true if the given object is an instance of Ipv6DhcpClient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Ipv6DhcpClient;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Whether to add default IPv6 route after a client connects.
     */
    readonly addDefaultRoute: pulumi.Output<boolean | undefined>;
    /**
     * IPv6 address, which is assigned to DHCPv6 Client from the Server.
     */
    readonly address: pulumi.Output<string>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Distance of default route. Applicable if add-default-route is set to yes.
     */
    readonly defaultRouteDistance: pulumi.Output<number | undefined>;
    /**
     * Options that are sent to the DHCP server.
     */
    readonly dhcpOptions: pulumi.Output<string[] | undefined>;
    /**
     * The IPv6 address of the DHCP server
     */
    readonly dhcpServerV6: pulumi.Output<string>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Auto-generated DUID that is sent to the server. DUID is generated using one of the MAC addresses available on the
     * router.
     */
    readonly duid: pulumi.Output<string>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * A time when the IPv6 prefix expires (specified by the DHCPv6 server).
     */
    readonly expiresAfter: pulumi.Output<string>;
    /**
     * The IP address of the gateway which is assigned by DHCP server.
     */
    readonly gateway: pulumi.Output<string>;
    /**
     * Name of the interface.
     */
    readonly interface: pulumi.Output<string>;
    readonly invalid: pulumi.Output<boolean>;
    readonly ipv6DhcpClientId: pulumi.Output<string>;
    /**
     * Name of the IPv6 pool in which received IPv6 prefix will be added
     */
    readonly poolName: pulumi.Output<string | undefined>;
    /**
     * Prefix length parameter that will be set for IPv6 pool in which received IPv6 prefix is added. Prefix length must be
     * greater than the length of the received prefix, otherwise, prefix-length will be set to received prefix length + 8 bits.
     */
    readonly poolPrefixLength: pulumi.Output<number | undefined>;
    /**
     * Shows received IPv6 prefix from DHCPv6-PD server
     */
    readonly prefix: pulumi.Output<string>;
    /**
     * Include a preferred prefix length.
     */
    readonly prefixHint: pulumi.Output<string>;
    /**
     * Enable DHCP rapid commit (fast address assignment)
     */
    readonly rapidCommit: pulumi.Output<boolean | undefined>;
    /**
     * To choose if the DHCPv6 request will ask for the address, info or the IPv6 prefix.
     */
    readonly requests: pulumi.Output<string[]>;
    /**
     * Run this script on the DHCP-client status change. Available variables: - pd-valid - if the prefix is acquired by the
     * client; - pd-prefix - the prefix acquired by the client if any; - na-valid - if the address is acquired by the client; -
     * na-address - the address acquired by the client if any. - options - array of received options (only ROSv7)
     */
    readonly script: pulumi.Output<string | undefined>;
    /**
     * Shows the status of DHCPv6 Client: - stopped - dhcpv6 client is stopped - searching - sending "solicit" and trying to
     * get "advertise" Shows actual (resolved) gateway and interface that will be used for packet forwarding.requesting - sent
     * "request" waiting for "reply" - bound - received "reply". Prefix assigned. - renewing - sent "renew", waiting for
     * "reply" - rebinding - sent "rebind", waiting for "reply" - error - reply was not received in time or some other error
     * occurred. - stopping - sent "release"
     */
    readonly status: pulumi.Output<string>;
    /**
     * Specifies the MAC address of the specified interface as the DHCPv6 client DUID.
     */
    readonly useInterfaceDuid: pulumi.Output<boolean | undefined>;
    /**
     * Whether to accept the DNS settings advertised by the IPv6 DHCP Server.
     */
    readonly usePeerDns: pulumi.Output<boolean | undefined>;
    /**
     * Create a Ipv6DhcpClient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ipv6DhcpClientArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Ipv6DhcpClient resources.
 */
export interface Ipv6DhcpClientState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to add default IPv6 route after a client connects.
     */
    addDefaultRoute?: pulumi.Input<boolean>;
    /**
     * IPv6 address, which is assigned to DHCPv6 Client from the Server.
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Distance of default route. Applicable if add-default-route is set to yes.
     */
    defaultRouteDistance?: pulumi.Input<number>;
    /**
     * Options that are sent to the DHCP server.
     */
    dhcpOptions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The IPv6 address of the DHCP server
     */
    dhcpServerV6?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Auto-generated DUID that is sent to the server. DUID is generated using one of the MAC addresses available on the
     * router.
     */
    duid?: pulumi.Input<string>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * A time when the IPv6 prefix expires (specified by the DHCPv6 server).
     */
    expiresAfter?: pulumi.Input<string>;
    /**
     * The IP address of the gateway which is assigned by DHCP server.
     */
    gateway?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    ipv6DhcpClientId?: pulumi.Input<string>;
    /**
     * Name of the IPv6 pool in which received IPv6 prefix will be added
     */
    poolName?: pulumi.Input<string>;
    /**
     * Prefix length parameter that will be set for IPv6 pool in which received IPv6 prefix is added. Prefix length must be
     * greater than the length of the received prefix, otherwise, prefix-length will be set to received prefix length + 8 bits.
     */
    poolPrefixLength?: pulumi.Input<number>;
    /**
     * Shows received IPv6 prefix from DHCPv6-PD server
     */
    prefix?: pulumi.Input<string>;
    /**
     * Include a preferred prefix length.
     */
    prefixHint?: pulumi.Input<string>;
    /**
     * Enable DHCP rapid commit (fast address assignment)
     */
    rapidCommit?: pulumi.Input<boolean>;
    /**
     * To choose if the DHCPv6 request will ask for the address, info or the IPv6 prefix.
     */
    requests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Run this script on the DHCP-client status change. Available variables: - pd-valid - if the prefix is acquired by the
     * client; - pd-prefix - the prefix acquired by the client if any; - na-valid - if the address is acquired by the client; -
     * na-address - the address acquired by the client if any. - options - array of received options (only ROSv7)
     */
    script?: pulumi.Input<string>;
    /**
     * Shows the status of DHCPv6 Client: - stopped - dhcpv6 client is stopped - searching - sending "solicit" and trying to
     * get "advertise" Shows actual (resolved) gateway and interface that will be used for packet forwarding.requesting - sent
     * "request" waiting for "reply" - bound - received "reply". Prefix assigned. - renewing - sent "renew", waiting for
     * "reply" - rebinding - sent "rebind", waiting for "reply" - error - reply was not received in time or some other error
     * occurred. - stopping - sent "release"
     */
    status?: pulumi.Input<string>;
    /**
     * Specifies the MAC address of the specified interface as the DHCPv6 client DUID.
     */
    useInterfaceDuid?: pulumi.Input<boolean>;
    /**
     * Whether to accept the DNS settings advertised by the IPv6 DHCP Server.
     */
    usePeerDns?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a Ipv6DhcpClient resource.
 */
export interface Ipv6DhcpClientArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to add default IPv6 route after a client connects.
     */
    addDefaultRoute?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    /**
     * Distance of default route. Applicable if add-default-route is set to yes.
     */
    defaultRouteDistance?: pulumi.Input<number>;
    /**
     * Options that are sent to the DHCP server.
     */
    dhcpOptions?: pulumi.Input<pulumi.Input<string>[]>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
    ipv6DhcpClientId?: pulumi.Input<string>;
    /**
     * Name of the IPv6 pool in which received IPv6 prefix will be added
     */
    poolName?: pulumi.Input<string>;
    /**
     * Prefix length parameter that will be set for IPv6 pool in which received IPv6 prefix is added. Prefix length must be
     * greater than the length of the received prefix, otherwise, prefix-length will be set to received prefix length + 8 bits.
     */
    poolPrefixLength?: pulumi.Input<number>;
    /**
     * Include a preferred prefix length.
     */
    prefixHint?: pulumi.Input<string>;
    /**
     * Enable DHCP rapid commit (fast address assignment)
     */
    rapidCommit?: pulumi.Input<boolean>;
    /**
     * To choose if the DHCPv6 request will ask for the address, info or the IPv6 prefix.
     */
    requests: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Run this script on the DHCP-client status change. Available variables: - pd-valid - if the prefix is acquired by the
     * client; - pd-prefix - the prefix acquired by the client if any; - na-valid - if the address is acquired by the client; -
     * na-address - the address acquired by the client if any. - options - array of received options (only ROSv7)
     */
    script?: pulumi.Input<string>;
    /**
     * Specifies the MAC address of the specified interface as the DHCPv6 client DUID.
     */
    useInterfaceDuid?: pulumi.Input<boolean>;
    /**
     * Whether to accept the DNS settings advertised by the IPv6 DHCP Server.
     */
    usePeerDns?: pulumi.Input<boolean>;
}
