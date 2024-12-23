// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DhcpServerNetwork extends pulumi.CustomResource {
    /**
     * Get an existing DhcpServerNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DhcpServerNetworkState, opts?: pulumi.CustomResourceOptions): DhcpServerNetwork {
        return new DhcpServerNetwork(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/dhcpServerNetwork:DhcpServerNetwork';

    /**
     * Returns true if the given object is an instance of DhcpServerNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DhcpServerNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DhcpServerNetwork.__pulumiType;
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
     * The network DHCP server(s) will lease addresses from.
     */
    public readonly address!: pulumi.Output<string>;
    /**
     * Boot filename.
     */
    public readonly bootFileName!: pulumi.Output<string | undefined>;
    /**
     * A list of IP addresses for one or more CAPsMAN system managers. DHCP Option 138 (capwap) will be used.
     */
    public readonly capsManagers!: pulumi.Output<string[] | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Add an additional set of DHCP options.
     */
    public readonly dhcpOptionSet!: pulumi.Output<string | undefined>;
    /**
     * Add additional DHCP options from the option list.
     */
    public readonly dhcpOptions!: pulumi.Output<string[] | undefined>;
    public readonly dhcpServerNetworkId!: pulumi.Output<string>;
    /**
     * If set, then DHCP Server will not pass dynamic DNS servers configured on the router to the DHCP clients if no DNS Server
     * in DNS-server is set.
     */
    public readonly dnsNone!: pulumi.Output<boolean | undefined>;
    /**
     * The DHCP client will use these as the default DNS servers. Two DNS servers can be specified to be used by the DHCP
     * client as primary and secondary DNS servers.
     */
    public readonly dnsServers!: pulumi.Output<string[] | undefined>;
    /**
     * The DHCP client will use this as the 'DNS domain' setting for the network adapter.
     */
    public readonly domain!: pulumi.Output<string | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    public /*out*/ readonly dynamic!: pulumi.Output<boolean>;
    /**
     * The default gateway to be used by DHCP Client.
     */
    public readonly gateway!: pulumi.Output<string | undefined>;
    /**
     * The actual network mask is to be used by the DHCP client. If set to '0' - netmask from network address will be used.
     */
    public readonly netmask!: pulumi.Output<number | undefined>;
    /**
     * The IP address of the next server to use in bootstrap.
     */
    public readonly nextServer!: pulumi.Output<string | undefined>;
    /**
     * The DHCP client will use these as the default NTP servers. Two NTP servers can be specified to be used by the DHCP
     * client as primary and secondary NTP servers
     */
    public readonly ntpServers!: pulumi.Output<string[] | undefined>;
    /**
     * The Windows DHCP client will use these as the default WINS servers. Two WINS servers can be specified to be used by the
     * DHCP client as primary and secondary WINS servers
     */
    public readonly winsServers!: pulumi.Output<string[] | undefined>;

    /**
     * Create a DhcpServerNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DhcpServerNetworkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DhcpServerNetworkArgs | DhcpServerNetworkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DhcpServerNetworkState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["bootFileName"] = state ? state.bootFileName : undefined;
            resourceInputs["capsManagers"] = state ? state.capsManagers : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["dhcpOptionSet"] = state ? state.dhcpOptionSet : undefined;
            resourceInputs["dhcpOptions"] = state ? state.dhcpOptions : undefined;
            resourceInputs["dhcpServerNetworkId"] = state ? state.dhcpServerNetworkId : undefined;
            resourceInputs["dnsNone"] = state ? state.dnsNone : undefined;
            resourceInputs["dnsServers"] = state ? state.dnsServers : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["dynamic"] = state ? state.dynamic : undefined;
            resourceInputs["gateway"] = state ? state.gateway : undefined;
            resourceInputs["netmask"] = state ? state.netmask : undefined;
            resourceInputs["nextServer"] = state ? state.nextServer : undefined;
            resourceInputs["ntpServers"] = state ? state.ntpServers : undefined;
            resourceInputs["winsServers"] = state ? state.winsServers : undefined;
        } else {
            const args = argsOrState as DhcpServerNetworkArgs | undefined;
            if ((!args || args.address === undefined) && !opts.urn) {
                throw new Error("Missing required property 'address'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["bootFileName"] = args ? args.bootFileName : undefined;
            resourceInputs["capsManagers"] = args ? args.capsManagers : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["dhcpOptionSet"] = args ? args.dhcpOptionSet : undefined;
            resourceInputs["dhcpOptions"] = args ? args.dhcpOptions : undefined;
            resourceInputs["dhcpServerNetworkId"] = args ? args.dhcpServerNetworkId : undefined;
            resourceInputs["dnsNone"] = args ? args.dnsNone : undefined;
            resourceInputs["dnsServers"] = args ? args.dnsServers : undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["gateway"] = args ? args.gateway : undefined;
            resourceInputs["netmask"] = args ? args.netmask : undefined;
            resourceInputs["nextServer"] = args ? args.nextServer : undefined;
            resourceInputs["ntpServers"] = args ? args.ntpServers : undefined;
            resourceInputs["winsServers"] = args ? args.winsServers : undefined;
            resourceInputs["dynamic"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DhcpServerNetwork.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
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
