import * as pulumi from "@pulumi/pulumi";
export declare class IpDhcpClientOption extends pulumi.CustomResource {
    /**
     * Get an existing IpDhcpClientOption resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpDhcpClientOptionState, opts?: pulumi.CustomResourceOptions): IpDhcpClientOption;
    /**
     * Returns true if the given object is an instance of IpDhcpClientOption.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpDhcpClientOption;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * The dhcp-client option code.
     */
    readonly code: pulumi.Output<number>;
    readonly ipDhcpClientOptionId: pulumi.Output<string>;
    /**
     * The name that will be used in dhcp-client.
     */
    readonly name: pulumi.Output<string>;
    /**
     * raw_value is computed from value.
     */
    readonly rawValue: pulumi.Output<string>;
    /**
     * The dhcp-client option
     */
    readonly value: pulumi.Output<string | undefined>;
    /**
     * Create a IpDhcpClientOption resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpDhcpClientOptionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpDhcpClientOption resources.
 */
export interface IpDhcpClientOptionState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The dhcp-client option code.
     */
    code?: pulumi.Input<number>;
    ipDhcpClientOptionId?: pulumi.Input<string>;
    /**
     * The name that will be used in dhcp-client.
     */
    name?: pulumi.Input<string>;
    /**
     * raw_value is computed from value.
     */
    rawValue?: pulumi.Input<string>;
    /**
     * The dhcp-client option
     */
    value?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpDhcpClientOption resource.
 */
export interface IpDhcpClientOptionArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The dhcp-client option code.
     */
    code: pulumi.Input<number>;
    ipDhcpClientOptionId?: pulumi.Input<string>;
    /**
     * The name that will be used in dhcp-client.
     */
    name?: pulumi.Input<string>;
    /**
     * raw_value is computed from value.
     */
    rawValue?: pulumi.Input<string>;
    /**
     * The dhcp-client option
     */
    value?: pulumi.Input<string>;
}
