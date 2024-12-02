import * as pulumi from "@pulumi/pulumi";
export declare class ContainerEnvs extends pulumi.CustomResource {
    /**
     * Get an existing ContainerEnvs resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerEnvsState, opts?: pulumi.CustomResourceOptions): ContainerEnvs;
    /**
     * Returns true if the given object is an instance of ContainerEnvs.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ContainerEnvs;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly containerEnvsId: pulumi.Output<string>;
    /**
     * Key of the environment variable.
     */
    readonly key: pulumi.Output<string>;
    /**
     * Name of the environment variables list.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Value of the environment variable.
     */
    readonly value: pulumi.Output<string>;
    /**
     * Create a ContainerEnvs resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerEnvsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ContainerEnvs resources.
 */
export interface ContainerEnvsState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    containerEnvsId?: pulumi.Input<string>;
    /**
     * Key of the environment variable.
     */
    key?: pulumi.Input<string>;
    /**
     * Name of the environment variables list.
     */
    name?: pulumi.Input<string>;
    /**
     * Value of the environment variable.
     */
    value?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ContainerEnvs resource.
 */
export interface ContainerEnvsArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    containerEnvsId?: pulumi.Input<string>;
    /**
     * Key of the environment variable.
     */
    key: pulumi.Input<string>;
    /**
     * Name of the environment variables list.
     */
    name?: pulumi.Input<string>;
    /**
     * Value of the environment variable.
     */
    value: pulumi.Input<string>;
}