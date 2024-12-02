import * as pulumi from "@pulumi/pulumi";
export declare class UserManagerRouter extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerRouter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserManagerRouterState, opts?: pulumi.CustomResourceOptions): UserManagerRouter;
    /**
     * Returns true if the given object is an instance of UserManagerRouter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is UserManagerRouter;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * IP address of the RADIUS client.
     */
    readonly address: pulumi.Output<string>;
    /**
     * Port number of CoA (Change of Authorization) communication.
     */
    readonly coaPort: pulumi.Output<number | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Unique name of the RADIUS client.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The shared secret to secure communication.
     */
    readonly sharedSecret: pulumi.Output<string | undefined>;
    readonly userManagerRouterId: pulumi.Output<string>;
    /**
     * Create a UserManagerRouter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserManagerRouterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering UserManagerRouter resources.
 */
export interface UserManagerRouterState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * IP address of the RADIUS client.
     */
    address?: pulumi.Input<string>;
    /**
     * Port number of CoA (Change of Authorization) communication.
     */
    coaPort?: pulumi.Input<number>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Unique name of the RADIUS client.
     */
    name?: pulumi.Input<string>;
    /**
     * The shared secret to secure communication.
     */
    sharedSecret?: pulumi.Input<string>;
    userManagerRouterId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a UserManagerRouter resource.
 */
export interface UserManagerRouterArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * IP address of the RADIUS client.
     */
    address: pulumi.Input<string>;
    /**
     * Port number of CoA (Change of Authorization) communication.
     */
    coaPort?: pulumi.Input<number>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Unique name of the RADIUS client.
     */
    name?: pulumi.Input<string>;
    /**
     * The shared secret to secure communication.
     */
    sharedSecret?: pulumi.Input<string>;
    userManagerRouterId?: pulumi.Input<string>;
}
