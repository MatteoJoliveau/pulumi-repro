import * as pulumi from "@pulumi/pulumi";
export declare class IpUpnp extends pulumi.CustomResource {
    /**
     * Get an existing IpUpnp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpUpnpState, opts?: pulumi.CustomResourceOptions): IpUpnp;
    /**
     * Returns true if the given object is an instance of IpUpnp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpUpnp;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Whether or not should the users are allowed to disable the router's external interface. This functionality (for users to
     * be able to turn the router's external interface off without any authentication procedure) is required by the standard,
     * but as it is sometimes not expected or unwanted in UPnP deployments which the standard was not designed for (it was
     * designed mostly for home users to establish their own local networks), you can disable this behavior
     */
    readonly allowDisableExternalInterface: pulumi.Output<boolean | undefined>;
    /**
     * Enable UPnP service.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    readonly ipUpnpId: pulumi.Output<string>;
    /**
     * nable a workaround for some broken implementations, which are handling the absence of UPnP rules incorrectly (for
     * example, popping up error messages). This option will instruct the server to install a dummy (meaningless) UPnP rule
     * that can be observed by the clients, which refuse to work correctly otherwise
     */
    readonly showDummyRule: pulumi.Output<boolean | undefined>;
    /**
     * Create a IpUpnp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpUpnpArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpUpnp resources.
 */
export interface IpUpnpState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether or not should the users are allowed to disable the router's external interface. This functionality (for users to
     * be able to turn the router's external interface off without any authentication procedure) is required by the standard,
     * but as it is sometimes not expected or unwanted in UPnP deployments which the standard was not designed for (it was
     * designed mostly for home users to establish their own local networks), you can disable this behavior
     */
    allowDisableExternalInterface?: pulumi.Input<boolean>;
    /**
     * Enable UPnP service.
     */
    enabled?: pulumi.Input<boolean>;
    ipUpnpId?: pulumi.Input<string>;
    /**
     * nable a workaround for some broken implementations, which are handling the absence of UPnP rules incorrectly (for
     * example, popping up error messages). This option will instruct the server to install a dummy (meaningless) UPnP rule
     * that can be observed by the clients, which refuse to work correctly otherwise
     */
    showDummyRule?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a IpUpnp resource.
 */
export interface IpUpnpArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether or not should the users are allowed to disable the router's external interface. This functionality (for users to
     * be able to turn the router's external interface off without any authentication procedure) is required by the standard,
     * but as it is sometimes not expected or unwanted in UPnP deployments which the standard was not designed for (it was
     * designed mostly for home users to establish their own local networks), you can disable this behavior
     */
    allowDisableExternalInterface?: pulumi.Input<boolean>;
    /**
     * Enable UPnP service.
     */
    enabled?: pulumi.Input<boolean>;
    ipUpnpId?: pulumi.Input<string>;
    /**
     * nable a workaround for some broken implementations, which are handling the absence of UPnP rules incorrectly (for
     * example, popping up error messages). This option will instruct the server to install a dummy (meaningless) UPnP rule
     * that can be observed by the clients, which refuse to work correctly otherwise
     */
    showDummyRule?: pulumi.Input<boolean>;
}
