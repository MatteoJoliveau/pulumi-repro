import * as pulumi from "@pulumi/pulumi";
export declare class IpDhcpServerOptionSet extends pulumi.CustomResource {
    /**
     * Get an existing IpDhcpServerOptionSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpDhcpServerOptionSetState, opts?: pulumi.CustomResourceOptions): IpDhcpServerOptionSet;
    /**
     * Returns true if the given object is an instance of IpDhcpServerOptionSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpDhcpServerOptionSet;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly ipDhcpServerOptionSetId: pulumi.Output<string>;
    /**
     * The name of the DHCP option
     */
    readonly name: pulumi.Output<string>;
    /**
     * The comma sepparated list of options
     */
    readonly options: pulumi.Output<string>;
    /**
     * Create a IpDhcpServerOptionSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpDhcpServerOptionSetArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpDhcpServerOptionSet resources.
 */
export interface IpDhcpServerOptionSetState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    ipDhcpServerOptionSetId?: pulumi.Input<string>;
    /**
     * The name of the DHCP option
     */
    name?: pulumi.Input<string>;
    /**
     * The comma sepparated list of options
     */
    options?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpDhcpServerOptionSet resource.
 */
export interface IpDhcpServerOptionSetArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    ipDhcpServerOptionSetId?: pulumi.Input<string>;
    /**
     * The name of the DHCP option
     */
    name?: pulumi.Input<string>;
    /**
     * The comma sepparated list of options
     */
    options: pulumi.Input<string>;
}
