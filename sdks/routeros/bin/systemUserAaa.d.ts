import * as pulumi from "@pulumi/pulumi";
export declare class SystemUserAaa extends pulumi.CustomResource {
    /**
     * Get an existing SystemUserAaa resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemUserAaaState, opts?: pulumi.CustomResourceOptions): SystemUserAaa;
    /**
     * Returns true if the given object is an instance of SystemUserAaa.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemUserAaa;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * An option that enables accounting for users.
     */
    readonly accounting: pulumi.Output<boolean | undefined>;
    /**
     * The user group that is used by default for users authenticated via a RADIUS server.
     */
    readonly defaultGroup: pulumi.Output<string | undefined>;
    /**
     * A set of groups that are not allowed for users authenticated by RADIUS.
     */
    readonly excludeGroups: pulumi.Output<string[] | undefined>;
    /**
     * Interval between scheduled RADIUS Interim-Update messages.
     */
    readonly interimUpdate: pulumi.Output<string | undefined>;
    readonly systemUserAaaId: pulumi.Output<string>;
    /**
     * An option whether to use RADIUS server.
     */
    readonly useRadius: pulumi.Output<boolean | undefined>;
    /**
     * Create a SystemUserAaa resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemUserAaaArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemUserAaa resources.
 */
export interface SystemUserAaaState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option that enables accounting for users.
     */
    accounting?: pulumi.Input<boolean>;
    /**
     * The user group that is used by default for users authenticated via a RADIUS server.
     */
    defaultGroup?: pulumi.Input<string>;
    /**
     * A set of groups that are not allowed for users authenticated by RADIUS.
     */
    excludeGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Interval between scheduled RADIUS Interim-Update messages.
     */
    interimUpdate?: pulumi.Input<string>;
    systemUserAaaId?: pulumi.Input<string>;
    /**
     * An option whether to use RADIUS server.
     */
    useRadius?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a SystemUserAaa resource.
 */
export interface SystemUserAaaArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option that enables accounting for users.
     */
    accounting?: pulumi.Input<boolean>;
    /**
     * The user group that is used by default for users authenticated via a RADIUS server.
     */
    defaultGroup?: pulumi.Input<string>;
    /**
     * A set of groups that are not allowed for users authenticated by RADIUS.
     */
    excludeGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Interval between scheduled RADIUS Interim-Update messages.
     */
    interimUpdate?: pulumi.Input<string>;
    systemUserAaaId?: pulumi.Input<string>;
    /**
     * An option whether to use RADIUS server.
     */
    useRadius?: pulumi.Input<boolean>;
}
