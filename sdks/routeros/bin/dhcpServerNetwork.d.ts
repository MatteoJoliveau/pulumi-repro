import * as pulumi from "@pulumi/pulumi";
export declare class DhcpServerNetwork extends pulumi.CustomResource {
    /**
     * Get an existing DhcpServerNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DhcpServerNetworkState, opts?: pulumi.CustomResourceOptions): DhcpServerNetwork;
    /**
     * Returns true if the given object is an instance of DhcpServerNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DhcpServerNetwork;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * The network DHCP server(s) will lease addresses from.
     */
    readonly address: pulumi.Output<string>;
    /**
     * Boot filename.
     */
    readonly bootFileName: pulumi.Output<string | undefined>;
    /**
     * A list of IP addresses for one or more CAPsMAN system managers. DHCP Option 138 (capwap) will be used.
     */
    readonly capsManagers: pulumi.Output<string[] | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Add an additional set of DHCP options.
     */
    readonly dhcpOptionSet: pulumi.Output<string | undefined>;
    /**
     * Add additional DHCP options from the option list.
     */
    readonly dhcpOptions: pulumi.Output<string[] | undefined>;
    readonly dhcpServerNetworkId: pulumi.Output<string>;
    /**
     * If set, then DHCP Server will not pass dynamic DNS servers configured on the router to the DHCP clients if no DNS Server
     * in DNS-server is set.
     */
    readonly dnsNone: pulumi.Output<boolean | undefined>;
    /**
     * The DHCP client will use these as the default DNS servers. Two DNS servers can be specified to be used by the DHCP
     * client as primary and secondary DNS servers.
     */
    readonly dnsServers: pulumi.Output<string[] | undefined>;
    /**
     * The DHCP client will use this as the 'DNS domain' setting for the network adapter.
     */
    readonly domain: pulumi.Output<string | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * The default gateway to be used by DHCP Client.
     */
    readonly gateway: pulumi.Output<string | undefined>;
    /**
     * The actual network mask is to be used by the DHCP client. If set to '0' - netmask from network address will be used.
     */
    readonly netmask: pulumi.Output<number | undefined>;
    /**
     * The IP address of the next server to use in bootstrap.
     */
    readonly nextServer: pulumi.Output<string | undefined>;
    /**
     * The DHCP client will use these as the default NTP servers. Two NTP servers can be specified to be used by the DHCP
     * client as primary and secondary NTP servers
     */
    readonly ntpServers: pulumi.Output<string[] | undefined>;
    /**
     * The Windows DHCP client will use these as the default WINS servers. Two WINS servers can be specified to be used by the
     * DHCP client as primary and secondary WINS servers
     */
    readonly winsServers: pulumi.Output<string[] | undefined>;
    /**
     * Create a DhcpServerNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DhcpServerNetworkArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DhcpServerNetwork resources.
 */
export interface DhcpServerNetworkState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The network DHCP server(s) will lease addresses from.
     */
    address?: pulumi.Input<string>;
    /**
     * Boot filename.
     */
    bootFileName?: pulumi.Input<string>;
    /**
     * A list of IP addresses for one or more CAPsMAN system managers. DHCP Option 138 (capwap) will be used.
     */
    capsManagers?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    /**
     * Add an additional set of DHCP options.
     */
    dhcpOptionSet?: pulumi.Input<string>;
    /**
     * Add additional DHCP options from the option list.
     */
    dhcpOptions?: pulumi.Input<pulumi.Input<string>[]>;
    dhcpServerNetworkId?: pulumi.Input<string>;
    /**
     * If set, then DHCP Server will not pass dynamic DNS servers configured on the router to the DHCP clients if no DNS Server
     * in DNS-server is set.
     */
    dnsNone?: pulumi.Input<boolean>;
    /**
     * The DHCP client will use these as the default DNS servers. Two DNS servers can be specified to be used by the DHCP
     * client as primary and secondary DNS servers.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The DHCP client will use this as the 'DNS domain' setting for the network adapter.
     */
    domain?: pulumi.Input<string>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * The default gateway to be used by DHCP Client.
     */
    gateway?: pulumi.Input<string>;
    /**
     * The actual network mask is to be used by the DHCP client. If set to '0' - netmask from network address will be used.
     */
    netmask?: pulumi.Input<number>;
    /**
     * The IP address of the next server to use in bootstrap.
     */
    nextServer?: pulumi.Input<string>;
    /**
     * The DHCP client will use these as the default NTP servers. Two NTP servers can be specified to be used by the DHCP
     * client as primary and secondary NTP servers
     */
    ntpServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Windows DHCP client will use these as the default WINS servers. Two WINS servers can be specified to be used by the
     * DHCP client as primary and secondary WINS servers
     */
    winsServers?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a DhcpServerNetwork resource.
 */
export interface DhcpServerNetworkArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The network DHCP server(s) will lease addresses from.
     */
    address: pulumi.Input<string>;
    /**
     * Boot filename.
     */
    bootFileName?: pulumi.Input<string>;
    /**
     * A list of IP addresses for one or more CAPsMAN system managers. DHCP Option 138 (capwap) will be used.
     */
    capsManagers?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    /**
     * Add an additional set of DHCP options.
     */
    dhcpOptionSet?: pulumi.Input<string>;
    /**
     * Add additional DHCP options from the option list.
     */
    dhcpOptions?: pulumi.Input<pulumi.Input<string>[]>;
    dhcpServerNetworkId?: pulumi.Input<string>;
    /**
     * If set, then DHCP Server will not pass dynamic DNS servers configured on the router to the DHCP clients if no DNS Server
     * in DNS-server is set.
     */
    dnsNone?: pulumi.Input<boolean>;
    /**
     * The DHCP client will use these as the default DNS servers. Two DNS servers can be specified to be used by the DHCP
     * client as primary and secondary DNS servers.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The DHCP client will use this as the 'DNS domain' setting for the network adapter.
     */
    domain?: pulumi.Input<string>;
    /**
     * The default gateway to be used by DHCP Client.
     */
    gateway?: pulumi.Input<string>;
    /**
     * The actual network mask is to be used by the DHCP client. If set to '0' - netmask from network address will be used.
     */
    netmask?: pulumi.Input<number>;
    /**
     * The IP address of the next server to use in bootstrap.
     */
    nextServer?: pulumi.Input<string>;
    /**
     * The DHCP client will use these as the default NTP servers. Two NTP servers can be specified to be used by the DHCP
     * client as primary and secondary NTP servers
     */
    ntpServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Windows DHCP client will use these as the default WINS servers. Two WINS servers can be specified to be used by the
     * DHCP client as primary and secondary WINS servers
     */
    winsServers?: pulumi.Input<pulumi.Input<string>[]>;
}
