import * as pulumi from "@pulumi/pulumi";
export declare class Ipv6Settings extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6Settings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv6SettingsState, opts?: pulumi.CustomResourceOptions): Ipv6Settings;
    /**
     * Returns true if the given object is an instance of Ipv6Settings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Ipv6Settings;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Whether to accept ICMP redirect messages. Typically should be enabled on the host and disabled on routers.
     */
    readonly acceptRedirects: pulumi.Output<string | undefined>;
    /**
     * Accept router advertisement (RA) messages. If enabled, the router will be able to get the address using stateless
     * address configuration.
     */
    readonly acceptRouterAdvertisements: pulumi.Output<string | undefined>;
    /**
     * Enable/disable system wide IPv6 settings (prevents LL address generation).
     */
    readonly disableIpv6: pulumi.Output<boolean | undefined>;
    /**
     * Enable/disable packet forwarding between interfaces.
     */
    readonly forward: pulumi.Output<boolean | undefined>;
    readonly ipv6SettingsId: pulumi.Output<string>;
    /**
     * A maximum number or IPv6 neighbors. Since RouterOS version 7.1, the default value depends on the installed amount of
     * RAM. It is possible to set a higher value than the default, but it increases the risk of out-of-memory condition. The
     * default values for certain RAM sizes: * 1024 for 64 MB, * 2048 for 128 MB, * 4096 for 256 MB, * 8192 for 512 MB, * 16384
     * for 1024 MB or higher.
     */
    readonly maxNeighborEntries: pulumi.Output<number | undefined>;
    /**
     * IPv6 Hash policy used for ECMP routing in `/ipv6/settings` menu * l3 -- layer-3 hashing of src IP, dst IP, flow label,
     * IP protocol * l3-inner -- layer-3 hashing or inner layer-3 hashing if available * l4 -- layer-4 hashing of src IP, dst
     * IP, IP protocol, src port, dst port.
     */
    readonly multipathHashPolicy: pulumi.Output<string | undefined>;
    /**
     * Create a Ipv6Settings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Ipv6SettingsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Ipv6Settings resources.
 */
export interface Ipv6SettingsState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to accept ICMP redirect messages. Typically should be enabled on the host and disabled on routers.
     */
    acceptRedirects?: pulumi.Input<string>;
    /**
     * Accept router advertisement (RA) messages. If enabled, the router will be able to get the address using stateless
     * address configuration.
     */
    acceptRouterAdvertisements?: pulumi.Input<string>;
    /**
     * Enable/disable system wide IPv6 settings (prevents LL address generation).
     */
    disableIpv6?: pulumi.Input<boolean>;
    /**
     * Enable/disable packet forwarding between interfaces.
     */
    forward?: pulumi.Input<boolean>;
    ipv6SettingsId?: pulumi.Input<string>;
    /**
     * A maximum number or IPv6 neighbors. Since RouterOS version 7.1, the default value depends on the installed amount of
     * RAM. It is possible to set a higher value than the default, but it increases the risk of out-of-memory condition. The
     * default values for certain RAM sizes: * 1024 for 64 MB, * 2048 for 128 MB, * 4096 for 256 MB, * 8192 for 512 MB, * 16384
     * for 1024 MB or higher.
     */
    maxNeighborEntries?: pulumi.Input<number>;
    /**
     * IPv6 Hash policy used for ECMP routing in `/ipv6/settings` menu * l3 -- layer-3 hashing of src IP, dst IP, flow label,
     * IP protocol * l3-inner -- layer-3 hashing or inner layer-3 hashing if available * l4 -- layer-4 hashing of src IP, dst
     * IP, IP protocol, src port, dst port.
     */
    multipathHashPolicy?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Ipv6Settings resource.
 */
export interface Ipv6SettingsArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to accept ICMP redirect messages. Typically should be enabled on the host and disabled on routers.
     */
    acceptRedirects?: pulumi.Input<string>;
    /**
     * Accept router advertisement (RA) messages. If enabled, the router will be able to get the address using stateless
     * address configuration.
     */
    acceptRouterAdvertisements?: pulumi.Input<string>;
    /**
     * Enable/disable system wide IPv6 settings (prevents LL address generation).
     */
    disableIpv6?: pulumi.Input<boolean>;
    /**
     * Enable/disable packet forwarding between interfaces.
     */
    forward?: pulumi.Input<boolean>;
    ipv6SettingsId?: pulumi.Input<string>;
    /**
     * A maximum number or IPv6 neighbors. Since RouterOS version 7.1, the default value depends on the installed amount of
     * RAM. It is possible to set a higher value than the default, but it increases the risk of out-of-memory condition. The
     * default values for certain RAM sizes: * 1024 for 64 MB, * 2048 for 128 MB, * 4096 for 256 MB, * 8192 for 512 MB, * 16384
     * for 1024 MB or higher.
     */
    maxNeighborEntries?: pulumi.Input<number>;
    /**
     * IPv6 Hash policy used for ECMP routing in `/ipv6/settings` menu * l3 -- layer-3 hashing of src IP, dst IP, flow label,
     * IP protocol * l3-inner -- layer-3 hashing or inner layer-3 hashing if available * l4 -- layer-4 hashing of src IP, dst
     * IP, IP protocol, src port, dst port.
     */
    multipathHashPolicy?: pulumi.Input<string>;
}
