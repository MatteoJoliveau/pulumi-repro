import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceLteApn extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceLteApn resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceLteApnState, opts?: pulumi.CustomResourceOptions): InterfaceLteApn;
    /**
     * Returns true if the given object is an instance of InterfaceLteApn.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceLteApn;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Whether to add a default route to forward all traffic over the LTE interface.
     */
    readonly addDefaultRoute: pulumi.Output<boolean | undefined>;
    /**
     * Service Provider's Access Point Name.
     */
    readonly apn: pulumi.Output<string | undefined>;
    /**
     * Allowed protocol to use for authentication.
     */
    readonly authentication: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * It's the default item.
     */
    readonly default: pulumi.Output<boolean>;
    /**
     * Sets distance value applied to auto-created default route, if add-default-route is also selected. LTE route by default
     * is with distance 2 to prefer wired routes over LTE.
     */
    readonly defaultRouteDistance: pulumi.Output<number | undefined>;
    readonly interfaceLteApnId: pulumi.Output<string>;
    /**
     * Requested PDN type.
     */
    readonly ipType: pulumi.Output<string | undefined>;
    /**
     * Interface on which to advertise IPv6 prefix.
     */
    readonly ipv6Interface: pulumi.Output<string | undefined>;
    /**
     * APN profile name
     */
    readonly name: pulumi.Output<string>;
    /**
     * APN profile number.
     */
    readonly number: pulumi.Output<number | undefined>;
    /**
     * Interface to passthrough IP configuration (activates passthrough).
     */
    readonly passthroughInterface: pulumi.Output<string | undefined>;
    /**
     * If set to auto, then will learn MAC from the first packet.
     */
    readonly passthroughMac: pulumi.Output<string | undefined>;
    /**
     * `auto` selects the smallest possible subnet to be used for the passthrough interface. `p2p` sets the passthrough
     * interface subnet as `/32` and picks gateway address from `10.177.0.0/16` range. The gateway address stays the same until
     * the apn configuration is changed.
     */
    readonly passthroughSubnetSelection: pulumi.Output<string | undefined>;
    /**
     * Password used if any of the authentication protocols are active.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * Parameter is available starting from RouterOS v7 and used only for MBIM modems. If set to yes, uses network provided
     * APN.
     */
    readonly useNetworkApn: pulumi.Output<boolean | undefined>;
    /**
     * If set to yes, uses DNS received from LTE interface.
     */
    readonly usePeerDns: pulumi.Output<boolean | undefined>;
    /**
     * Username used if any of the authentication protocols are active.
     */
    readonly user: pulumi.Output<string | undefined>;
    /**
     * Create a InterfaceLteApn resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceLteApnArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceLteApn resources.
 */
export interface InterfaceLteApnState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to add a default route to forward all traffic over the LTE interface.
     */
    addDefaultRoute?: pulumi.Input<boolean>;
    /**
     * Service Provider's Access Point Name.
     */
    apn?: pulumi.Input<string>;
    /**
     * Allowed protocol to use for authentication.
     */
    authentication?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    /**
     * Sets distance value applied to auto-created default route, if add-default-route is also selected. LTE route by default
     * is with distance 2 to prefer wired routes over LTE.
     */
    defaultRouteDistance?: pulumi.Input<number>;
    interfaceLteApnId?: pulumi.Input<string>;
    /**
     * Requested PDN type.
     */
    ipType?: pulumi.Input<string>;
    /**
     * Interface on which to advertise IPv6 prefix.
     */
    ipv6Interface?: pulumi.Input<string>;
    /**
     * APN profile name
     */
    name?: pulumi.Input<string>;
    /**
     * APN profile number.
     */
    number?: pulumi.Input<number>;
    /**
     * Interface to passthrough IP configuration (activates passthrough).
     */
    passthroughInterface?: pulumi.Input<string>;
    /**
     * If set to auto, then will learn MAC from the first packet.
     */
    passthroughMac?: pulumi.Input<string>;
    /**
     * `auto` selects the smallest possible subnet to be used for the passthrough interface. `p2p` sets the passthrough
     * interface subnet as `/32` and picks gateway address from `10.177.0.0/16` range. The gateway address stays the same until
     * the apn configuration is changed.
     */
    passthroughSubnetSelection?: pulumi.Input<string>;
    /**
     * Password used if any of the authentication protocols are active.
     */
    password?: pulumi.Input<string>;
    /**
     * Parameter is available starting from RouterOS v7 and used only for MBIM modems. If set to yes, uses network provided
     * APN.
     */
    useNetworkApn?: pulumi.Input<boolean>;
    /**
     * If set to yes, uses DNS received from LTE interface.
     */
    usePeerDns?: pulumi.Input<boolean>;
    /**
     * Username used if any of the authentication protocols are active.
     */
    user?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InterfaceLteApn resource.
 */
export interface InterfaceLteApnArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to add a default route to forward all traffic over the LTE interface.
     */
    addDefaultRoute?: pulumi.Input<boolean>;
    /**
     * Service Provider's Access Point Name.
     */
    apn?: pulumi.Input<string>;
    /**
     * Allowed protocol to use for authentication.
     */
    authentication?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Sets distance value applied to auto-created default route, if add-default-route is also selected. LTE route by default
     * is with distance 2 to prefer wired routes over LTE.
     */
    defaultRouteDistance?: pulumi.Input<number>;
    interfaceLteApnId?: pulumi.Input<string>;
    /**
     * Requested PDN type.
     */
    ipType?: pulumi.Input<string>;
    /**
     * Interface on which to advertise IPv6 prefix.
     */
    ipv6Interface?: pulumi.Input<string>;
    /**
     * APN profile name
     */
    name?: pulumi.Input<string>;
    /**
     * APN profile number.
     */
    number?: pulumi.Input<number>;
    /**
     * Interface to passthrough IP configuration (activates passthrough).
     */
    passthroughInterface?: pulumi.Input<string>;
    /**
     * If set to auto, then will learn MAC from the first packet.
     */
    passthroughMac?: pulumi.Input<string>;
    /**
     * `auto` selects the smallest possible subnet to be used for the passthrough interface. `p2p` sets the passthrough
     * interface subnet as `/32` and picks gateway address from `10.177.0.0/16` range. The gateway address stays the same until
     * the apn configuration is changed.
     */
    passthroughSubnetSelection?: pulumi.Input<string>;
    /**
     * Password used if any of the authentication protocols are active.
     */
    password?: pulumi.Input<string>;
    /**
     * Parameter is available starting from RouterOS v7 and used only for MBIM modems. If set to yes, uses network provided
     * APN.
     */
    useNetworkApn?: pulumi.Input<boolean>;
    /**
     * If set to yes, uses DNS received from LTE interface.
     */
    usePeerDns?: pulumi.Input<boolean>;
    /**
     * Username used if any of the authentication protocols are active.
     */
    user?: pulumi.Input<string>;
}
