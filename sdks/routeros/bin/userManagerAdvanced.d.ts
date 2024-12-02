import * as pulumi from "@pulumi/pulumi";
export declare class UserManagerAdvanced extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerAdvanced resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserManagerAdvancedState, opts?: pulumi.CustomResourceOptions): UserManagerAdvanced;
    /**
     * Returns true if the given object is an instance of UserManagerAdvanced.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is UserManagerAdvanced;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * An option whether to enable PayPal functionality for User Manager.
     */
    readonly paypalAllow: pulumi.Output<boolean | undefined>;
    /**
     * The currency related to price setting in which users will be billed.
     */
    readonly paypalCurrency: pulumi.Output<string | undefined>;
    /**
     * The password of the PayPal API account.
     */
    readonly paypalPassword: pulumi.Output<string | undefined>;
    /**
     * The signature of the PayPal API account.
     */
    readonly paypalSignature: pulumi.Output<string | undefined>;
    /**
     * An option whether to use PayPal's sandbox environment for testing purposes.
     */
    readonly paypalUseSandbox: pulumi.Output<boolean | undefined>;
    /**
     * The username of the PayPal API account.
     */
    readonly paypalUser: pulumi.Output<string | undefined>;
    readonly userManagerAdvancedId: pulumi.Output<string>;
    /**
     * The password for accessing `/um/PRIVATE/` section over HTTP.
     */
    readonly webPrivatePassword: pulumi.Output<string | undefined>;
    /**
     * The username for accessing `/um/PRIVATE/` section over HTTP.
     */
    readonly webPrivateUsername: pulumi.Output<string | undefined>;
    /**
     * Create a UserManagerAdvanced resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UserManagerAdvancedArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering UserManagerAdvanced resources.
 */
export interface UserManagerAdvancedState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option whether to enable PayPal functionality for User Manager.
     */
    paypalAllow?: pulumi.Input<boolean>;
    /**
     * The currency related to price setting in which users will be billed.
     */
    paypalCurrency?: pulumi.Input<string>;
    /**
     * The password of the PayPal API account.
     */
    paypalPassword?: pulumi.Input<string>;
    /**
     * The signature of the PayPal API account.
     */
    paypalSignature?: pulumi.Input<string>;
    /**
     * An option whether to use PayPal's sandbox environment for testing purposes.
     */
    paypalUseSandbox?: pulumi.Input<boolean>;
    /**
     * The username of the PayPal API account.
     */
    paypalUser?: pulumi.Input<string>;
    userManagerAdvancedId?: pulumi.Input<string>;
    /**
     * The password for accessing `/um/PRIVATE/` section over HTTP.
     */
    webPrivatePassword?: pulumi.Input<string>;
    /**
     * The username for accessing `/um/PRIVATE/` section over HTTP.
     */
    webPrivateUsername?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a UserManagerAdvanced resource.
 */
export interface UserManagerAdvancedArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option whether to enable PayPal functionality for User Manager.
     */
    paypalAllow?: pulumi.Input<boolean>;
    /**
     * The currency related to price setting in which users will be billed.
     */
    paypalCurrency?: pulumi.Input<string>;
    /**
     * The password of the PayPal API account.
     */
    paypalPassword?: pulumi.Input<string>;
    /**
     * The signature of the PayPal API account.
     */
    paypalSignature?: pulumi.Input<string>;
    /**
     * An option whether to use PayPal's sandbox environment for testing purposes.
     */
    paypalUseSandbox?: pulumi.Input<boolean>;
    /**
     * The username of the PayPal API account.
     */
    paypalUser?: pulumi.Input<string>;
    userManagerAdvancedId?: pulumi.Input<string>;
    /**
     * The password for accessing `/um/PRIVATE/` section over HTTP.
     */
    webPrivatePassword?: pulumi.Input<string>;
    /**
     * The username for accessing `/um/PRIVATE/` section over HTTP.
     */
    webPrivateUsername?: pulumi.Input<string>;
}
