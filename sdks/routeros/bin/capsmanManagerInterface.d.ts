import * as pulumi from "@pulumi/pulumi";
export declare class CapsmanManagerInterface extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanManagerInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CapsmanManagerInterfaceState, opts?: pulumi.CustomResourceOptions): CapsmanManagerInterface;
    /**
     * Returns true if the given object is an instance of CapsmanManagerInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CapsmanManagerInterface;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly capsmanManagerInterfaceId: pulumi.Output<string>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * It's the default item.
     */
    readonly default: pulumi.Output<boolean>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * Disable interface listening.
     */
    readonly forbid: pulumi.Output<boolean | undefined>;
    /**
     * Name of the interface.
     */
    readonly interface: pulumi.Output<string>;
    /**
     * Create a CapsmanManagerInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CapsmanManagerInterfaceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CapsmanManagerInterface resources.
 */
export interface CapsmanManagerInterfaceState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    capsmanManagerInterfaceId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * Disable interface listening.
     */
    forbid?: pulumi.Input<boolean>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CapsmanManagerInterface resource.
 */
export interface CapsmanManagerInterfaceArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    capsmanManagerInterfaceId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Disable interface listening.
     */
    forbid?: pulumi.Input<boolean>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
}
