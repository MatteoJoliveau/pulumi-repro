import * as pulumi from "@pulumi/pulumi";
export declare class Ipv6Address extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6Address resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv6AddressState, opts?: pulumi.CustomResourceOptions): Ipv6Address;
    /**
     * Returns true if the given object is an instance of Ipv6Address.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Ipv6Address;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Name of the actual interface the logical one is bound to.
     */
    readonly actualInterface: pulumi.Output<string>;
    /**
     * IPv6 address. Using the eui_64 and from_pool options can transform the original address! [See
     * docs](https://wiki.mikrotik.com/wiki/Manual:IPv6/Address#Properties)
     */
    readonly address: pulumi.Output<string>;
    /**
     * Whether to enable stateless address configuration. The prefix of that address is automatically advertised to hosts using
     * ICMPv6 protocol. The option is set by default for addresses with prefix length 64.
     */
    readonly advertise: pulumi.Output<boolean | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Whether address is deprecated
     */
    readonly deprecated: pulumi.Output<boolean>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * Whether to calculate EUI-64 address and use it as last 64 bits of the IPv6 address.
     */
    readonly eui64: pulumi.Output<boolean | undefined>;
    /**
     * Name of the pool from which prefix will be taken to construct IPv6 address taking last part of the address from address
     * property.
     */
    readonly fromPool: pulumi.Output<string | undefined>;
    /**
     * Whether address is global.
     */
    readonly global: pulumi.Output<boolean>;
    /**
     * Name of the interface.
     */
    readonly interface: pulumi.Output<string>;
    readonly invalid: pulumi.Output<boolean>;
    readonly ipv6AddressId: pulumi.Output<string>;
    /**
     * Whether address is link local.
     */
    readonly linkLocal: pulumi.Output<boolean>;
    /**
     * If set indicates that address is anycast address and Duplicate Address Detection should not be performed.
     */
    readonly noDad: pulumi.Output<boolean | undefined>;
    /**
     * Whether address belongs to an interface which is a slave port to some other master interface
     */
    readonly slave: pulumi.Output<boolean>;
    /**
     * Create a Ipv6Address resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ipv6AddressArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Ipv6Address resources.
 */
export interface Ipv6AddressState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Name of the actual interface the logical one is bound to.
     */
    actualInterface?: pulumi.Input<string>;
    /**
     * IPv6 address. Using the eui_64 and from_pool options can transform the original address! [See
     * docs](https://wiki.mikrotik.com/wiki/Manual:IPv6/Address#Properties)
     */
    address?: pulumi.Input<string>;
    /**
     * Whether to enable stateless address configuration. The prefix of that address is automatically advertised to hosts using
     * ICMPv6 protocol. The option is set by default for addresses with prefix length 64.
     */
    advertise?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    /**
     * Whether address is deprecated
     */
    deprecated?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * Whether to calculate EUI-64 address and use it as last 64 bits of the IPv6 address.
     */
    eui64?: pulumi.Input<boolean>;
    /**
     * Name of the pool from which prefix will be taken to construct IPv6 address taking last part of the address from address
     * property.
     */
    fromPool?: pulumi.Input<string>;
    /**
     * Whether address is global.
     */
    global?: pulumi.Input<boolean>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    ipv6AddressId?: pulumi.Input<string>;
    /**
     * Whether address is link local.
     */
    linkLocal?: pulumi.Input<boolean>;
    /**
     * If set indicates that address is anycast address and Duplicate Address Detection should not be performed.
     */
    noDad?: pulumi.Input<boolean>;
    /**
     * Whether address belongs to an interface which is a slave port to some other master interface
     */
    slave?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a Ipv6Address resource.
 */
export interface Ipv6AddressArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * IPv6 address. Using the eui_64 and from_pool options can transform the original address! [See
     * docs](https://wiki.mikrotik.com/wiki/Manual:IPv6/Address#Properties)
     */
    address?: pulumi.Input<string>;
    /**
     * Whether to enable stateless address configuration. The prefix of that address is automatically advertised to hosts using
     * ICMPv6 protocol. The option is set by default for addresses with prefix length 64.
     */
    advertise?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Whether to calculate EUI-64 address and use it as last 64 bits of the IPv6 address.
     */
    eui64?: pulumi.Input<boolean>;
    /**
     * Name of the pool from which prefix will be taken to construct IPv6 address taking last part of the address from address
     * property.
     */
    fromPool?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
    ipv6AddressId?: pulumi.Input<string>;
    /**
     * If set indicates that address is anycast address and Duplicate Address Detection should not be performed.
     */
    noDad?: pulumi.Input<boolean>;
}
