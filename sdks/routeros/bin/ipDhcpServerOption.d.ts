import * as pulumi from "@pulumi/pulumi";
export declare class IpDhcpServerOption extends pulumi.CustomResource {
    /**
     * Get an existing IpDhcpServerOption resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpDhcpServerOptionState, opts?: pulumi.CustomResourceOptions): IpDhcpServerOption;
    /**
     * Returns true if the given object is an instance of IpDhcpServerOption.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpDhcpServerOption;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * The number of the DHCP option
     */
    readonly code: pulumi.Output<number>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Force the DHCP option from the server-side even if the DHCP-client does not request such parameter.
     */
    readonly force: pulumi.Output<boolean | undefined>;
    readonly ipDhcpServerOptionId: pulumi.Output<string>;
    /**
     * The name of the DHCP option
     */
    readonly name: pulumi.Output<string>;
    /**
     * The computed value of the option as an hex value
     */
    readonly rawValue: pulumi.Output<string>;
    /**
     * The value with formatting using Mikrotik settings https://wiki.mikrotik.com/wiki/Manual:IP/DHCP_Server#DHCP_Options
     */
    readonly value: pulumi.Output<string>;
    /**
     * Create a IpDhcpServerOption resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpDhcpServerOptionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpDhcpServerOption resources.
 */
export interface IpDhcpServerOptionState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The number of the DHCP option
     */
    code?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    /**
     * Force the DHCP option from the server-side even if the DHCP-client does not request such parameter.
     */
    force?: pulumi.Input<boolean>;
    ipDhcpServerOptionId?: pulumi.Input<string>;
    /**
     * The name of the DHCP option
     */
    name?: pulumi.Input<string>;
    /**
     * The computed value of the option as an hex value
     */
    rawValue?: pulumi.Input<string>;
    /**
     * The value with formatting using Mikrotik settings https://wiki.mikrotik.com/wiki/Manual:IP/DHCP_Server#DHCP_Options
     */
    value?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpDhcpServerOption resource.
 */
export interface IpDhcpServerOptionArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The number of the DHCP option
     */
    code: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    /**
     * Force the DHCP option from the server-side even if the DHCP-client does not request such parameter.
     */
    force?: pulumi.Input<boolean>;
    ipDhcpServerOptionId?: pulumi.Input<string>;
    /**
     * The name of the DHCP option
     */
    name?: pulumi.Input<string>;
    /**
     * The value with formatting using Mikrotik settings https://wiki.mikrotik.com/wiki/Manual:IP/DHCP_Server#DHCP_Options
     */
    value: pulumi.Input<string>;
}
