import * as pulumi from "@pulumi/pulumi";
export declare class UserManagerSettings extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserManagerSettingsState, opts?: pulumi.CustomResourceOptions): UserManagerSettings;
    /**
     * Returns true if the given object is an instance of UserManagerSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is UserManagerSettings;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Port to listen for RADIUS accounting requests.
     */
    readonly accountingPort: pulumi.Output<number | undefined>;
    /**
     * Port to listen for RADIUS authentication requests.
     */
    readonly authenticationPort: pulumi.Output<number | undefined>;
    /**
     * Certificate for use in EAP TLS-type authentication methods.
     */
    readonly certificate: pulumi.Output<string | undefined>;
    /**
     * An option whether the User Manager functionality is enabled.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * An option whether to require `Message-Authenticator` in received Access-Accept/Challenge/Reject messages.
     */
    readonly requireMessageAuth: pulumi.Output<string | undefined>;
    /**
     * An option whether to use Profiles and Limitations. When set to `false`, only User configuration is required to run User
     * Manager.
     */
    readonly useProfiles: pulumi.Output<boolean | undefined>;
    readonly userManagerSettingsId: pulumi.Output<string>;
    /**
     * Create a UserManagerSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UserManagerSettingsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering UserManagerSettings resources.
 */
export interface UserManagerSettingsState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Port to listen for RADIUS accounting requests.
     */
    accountingPort?: pulumi.Input<number>;
    /**
     * Port to listen for RADIUS authentication requests.
     */
    authenticationPort?: pulumi.Input<number>;
    /**
     * Certificate for use in EAP TLS-type authentication methods.
     */
    certificate?: pulumi.Input<string>;
    /**
     * An option whether the User Manager functionality is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * An option whether to require `Message-Authenticator` in received Access-Accept/Challenge/Reject messages.
     */
    requireMessageAuth?: pulumi.Input<string>;
    /**
     * An option whether to use Profiles and Limitations. When set to `false`, only User configuration is required to run User
     * Manager.
     */
    useProfiles?: pulumi.Input<boolean>;
    userManagerSettingsId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a UserManagerSettings resource.
 */
export interface UserManagerSettingsArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Port to listen for RADIUS accounting requests.
     */
    accountingPort?: pulumi.Input<number>;
    /**
     * Port to listen for RADIUS authentication requests.
     */
    authenticationPort?: pulumi.Input<number>;
    /**
     * Certificate for use in EAP TLS-type authentication methods.
     */
    certificate?: pulumi.Input<string>;
    /**
     * An option whether the User Manager functionality is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * An option whether to require `Message-Authenticator` in received Access-Accept/Challenge/Reject messages.
     */
    requireMessageAuth?: pulumi.Input<string>;
    /**
     * An option whether to use Profiles and Limitations. When set to `false`, only User configuration is required to run User
     * Manager.
     */
    useProfiles?: pulumi.Input<boolean>;
    userManagerSettingsId?: pulumi.Input<string>;
}
