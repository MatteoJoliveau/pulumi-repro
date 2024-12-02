import * as pulumi from "@pulumi/pulumi";
export declare class IpAddress extends pulumi.CustomResource {
    /**
     * Get an existing IpAddress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpAddressState, opts?: pulumi.CustomResourceOptions): IpAddress;
    /**
     * Returns true if the given object is an instance of IpAddress.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpAddress;
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
     * IP address.
     */
    readonly address: pulumi.Output<string>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * Name of the interface.
     */
    readonly interface: pulumi.Output<string>;
    readonly invalid: pulumi.Output<boolean>;
    readonly ipAddressId: pulumi.Output<string>;
    /**
     * IP address for the network. For point-to-point links it should be the address of the remote end. Starting from v5RC6
     * this parameter is configurable only for addresses with /32 netmask (point to point links)
     */
    readonly network: pulumi.Output<string>;
    /**
     * Whether address belongs to an interface which is a slave port to some other master interface
     */
    readonly slave: pulumi.Output<boolean>;
    /**
     * Create a IpAddress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpAddressArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpAddress resources.
 */
export interface IpAddressState {
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
     * IP address.
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    ipAddressId?: pulumi.Input<string>;
    /**
     * IP address for the network. For point-to-point links it should be the address of the remote end. Starting from v5RC6
     * this parameter is configurable only for addresses with /32 netmask (point to point links)
     */
    network?: pulumi.Input<string>;
    /**
     * Whether address belongs to an interface which is a slave port to some other master interface
     */
    slave?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a IpAddress resource.
 */
export interface IpAddressArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * IP address.
     */
    address: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
    ipAddressId?: pulumi.Input<string>;
    /**
     * IP address for the network. For point-to-point links it should be the address of the remote end. Starting from v5RC6
     * this parameter is configurable only for addresses with /32 netmask (point to point links)
     */
    network?: pulumi.Input<string>;
}
