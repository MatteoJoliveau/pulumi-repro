import * as pulumi from "@pulumi/pulumi";
export declare class IpDhcpServerConfig extends pulumi.CustomResource {
    /**
     * Get an existing IpDhcpServerConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpDhcpServerConfigState, opts?: pulumi.CustomResourceOptions): IpDhcpServerConfig;
    /**
     * Returns true if the given object is an instance of IpDhcpServerConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpDhcpServerConfig;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * An option that enables accounting for DHCP leases.
     */
    readonly accounting: pulumi.Output<boolean | undefined>;
    /**
     * An option determining whether the DHCP server sends periodic updates to the accounting server during a lease.
     */
    readonly interimUpdate: pulumi.Output<string | undefined>;
    readonly ipDhcpServerConfigId: pulumi.Output<string>;
    /**
     * An option to set the password parameter for the RADIUS server. This option is available in RouterOS starting from
     * version 7.0.
     */
    readonly radiusPassword: pulumi.Output<string | undefined>;
    /**
     * An option of how often the DHCP leases will be stored on disk.
     */
    readonly storeLeasesDisk: pulumi.Output<string | undefined>;
    /**
     * Create a IpDhcpServerConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpDhcpServerConfigArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpDhcpServerConfig resources.
 */
export interface IpDhcpServerConfigState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option that enables accounting for DHCP leases.
     */
    accounting?: pulumi.Input<boolean>;
    /**
     * An option determining whether the DHCP server sends periodic updates to the accounting server during a lease.
     */
    interimUpdate?: pulumi.Input<string>;
    ipDhcpServerConfigId?: pulumi.Input<string>;
    /**
     * An option to set the password parameter for the RADIUS server. This option is available in RouterOS starting from
     * version 7.0.
     */
    radiusPassword?: pulumi.Input<string>;
    /**
     * An option of how often the DHCP leases will be stored on disk.
     */
    storeLeasesDisk?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpDhcpServerConfig resource.
 */
export interface IpDhcpServerConfigArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option that enables accounting for DHCP leases.
     */
    accounting?: pulumi.Input<boolean>;
    /**
     * An option determining whether the DHCP server sends periodic updates to the accounting server during a lease.
     */
    interimUpdate?: pulumi.Input<string>;
    ipDhcpServerConfigId?: pulumi.Input<string>;
    /**
     * An option to set the password parameter for the RADIUS server. This option is available in RouterOS starting from
     * version 7.0.
     */
    radiusPassword?: pulumi.Input<string>;
    /**
     * An option of how often the DHCP leases will be stored on disk.
     */
    storeLeasesDisk?: pulumi.Input<string>;
}
