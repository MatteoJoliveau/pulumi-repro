import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceVeth extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceVeth resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceVethState, opts?: pulumi.CustomResourceOptions): InterfaceVeth;
    /**
     * Returns true if the given object is an instance of InterfaceVeth.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceVeth;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * IP address.
     */
    readonly address: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Gateway IP address.
     */
    readonly gateway: pulumi.Output<string | undefined>;
    /**
     * Gateway IPv6 address.
     */
    readonly gateway6: pulumi.Output<string | undefined>;
    readonly interfaceVethId: pulumi.Output<string>;
    /**
     * Interface name.
     */
    readonly name: pulumi.Output<string>;
    readonly running: pulumi.Output<boolean>;
    /**
     * Create a InterfaceVeth resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceVethArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceVeth resources.
 */
export interface InterfaceVethState {
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
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Gateway IP address.
     */
    gateway?: pulumi.Input<string>;
    /**
     * Gateway IPv6 address.
     */
    gateway6?: pulumi.Input<string>;
    interfaceVethId?: pulumi.Input<string>;
    /**
     * Interface name.
     */
    name?: pulumi.Input<string>;
    running?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a InterfaceVeth resource.
 */
export interface InterfaceVethArgs {
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
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Gateway IP address.
     */
    gateway?: pulumi.Input<string>;
    /**
     * Gateway IPv6 address.
     */
    gateway6?: pulumi.Input<string>;
    interfaceVethId?: pulumi.Input<string>;
    /**
     * Interface name.
     */
    name?: pulumi.Input<string>;
}
