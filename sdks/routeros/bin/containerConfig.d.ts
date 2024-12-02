import * as pulumi from "@pulumi/pulumi";
export declare class ContainerConfig extends pulumi.CustomResource {
    /**
     * Get an existing ContainerConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerConfigState, opts?: pulumi.CustomResourceOptions): ContainerConfig;
    /**
     * Returns true if the given object is an instance of ContainerConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ContainerConfig;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly containerConfigId: pulumi.Output<string>;
    /**
     * Container layers directory.
     */
    readonly layerDir: pulumi.Output<string | undefined>;
    /**
     * Specifies the password for authentication (starting from ROS 7.8)
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * RAM usage limit. (0 for unlimited)
     */
    readonly ramHigh: pulumi.Output<string | undefined>;
    /**
     * External registry url from where the container will be downloaded.
     */
    readonly registryUrl: pulumi.Output<string | undefined>;
    /**
     * Container extraction directory.
     */
    readonly tmpdir: pulumi.Output<string | undefined>;
    /**
     * Specifies the username for authentication (starting from ROS 7.8)
     */
    readonly username: pulumi.Output<string | undefined>;
    /**
     * Create a ContainerConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ContainerConfigArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ContainerConfig resources.
 */
export interface ContainerConfigState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    containerConfigId?: pulumi.Input<string>;
    /**
     * Container layers directory.
     */
    layerDir?: pulumi.Input<string>;
    /**
     * Specifies the password for authentication (starting from ROS 7.8)
     */
    password?: pulumi.Input<string>;
    /**
     * RAM usage limit. (0 for unlimited)
     */
    ramHigh?: pulumi.Input<string>;
    /**
     * External registry url from where the container will be downloaded.
     */
    registryUrl?: pulumi.Input<string>;
    /**
     * Container extraction directory.
     */
    tmpdir?: pulumi.Input<string>;
    /**
     * Specifies the username for authentication (starting from ROS 7.8)
     */
    username?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ContainerConfig resource.
 */
export interface ContainerConfigArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    containerConfigId?: pulumi.Input<string>;
    /**
     * Container layers directory.
     */
    layerDir?: pulumi.Input<string>;
    /**
     * Specifies the password for authentication (starting from ROS 7.8)
     */
    password?: pulumi.Input<string>;
    /**
     * RAM usage limit. (0 for unlimited)
     */
    ramHigh?: pulumi.Input<string>;
    /**
     * External registry url from where the container will be downloaded.
     */
    registryUrl?: pulumi.Input<string>;
    /**
     * Container extraction directory.
     */
    tmpdir?: pulumi.Input<string>;
    /**
     * Specifies the username for authentication (starting from ROS 7.8)
     */
    username?: pulumi.Input<string>;
}
