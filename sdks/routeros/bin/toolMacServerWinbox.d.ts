import * as pulumi from "@pulumi/pulumi";
export declare class ToolMacServerWinbox extends pulumi.CustomResource {
    /**
     * Get an existing ToolMacServerWinbox resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ToolMacServerWinboxState, opts?: pulumi.CustomResourceOptions): ToolMacServerWinbox;
    /**
     * Returns true if the given object is an instance of ToolMacServerWinbox.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ToolMacServerWinbox;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * List of interfaces for MAC WinBox access.
     */
    readonly allowedInterfaceList: pulumi.Output<string>;
    readonly toolMacServerWinboxId: pulumi.Output<string>;
    /**
     * Create a ToolMacServerWinbox resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ToolMacServerWinboxArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ToolMacServerWinbox resources.
 */
export interface ToolMacServerWinboxState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * List of interfaces for MAC WinBox access.
     */
    allowedInterfaceList?: pulumi.Input<string>;
    toolMacServerWinboxId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ToolMacServerWinbox resource.
 */
export interface ToolMacServerWinboxArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * List of interfaces for MAC WinBox access.
     */
    allowedInterfaceList: pulumi.Input<string>;
    toolMacServerWinboxId?: pulumi.Input<string>;
}
