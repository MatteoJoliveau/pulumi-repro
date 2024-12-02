import * as pulumi from "@pulumi/pulumi";
export declare class UserManagerLimitation extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerLimitation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserManagerLimitationState, opts?: pulumi.CustomResourceOptions): UserManagerLimitation;
    /**
     * Returns true if the given object is an instance of UserManagerLimitation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is UserManagerLimitation;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * The total amount of traffic a user can download in bytes.
     */
    readonly downloadLimit: pulumi.Output<number | undefined>;
    /**
     * Unique name of the limitation.
     */
    readonly name: pulumi.Output<string>;
    readonly rateLimitBurstRx: pulumi.Output<number | undefined>;
    readonly rateLimitBurstThresholdRx: pulumi.Output<number | undefined>;
    readonly rateLimitBurstThresholdTx: pulumi.Output<number | undefined>;
    readonly rateLimitBurstTimeRx: pulumi.Output<string | undefined>;
    readonly rateLimitBurstTimeTx: pulumi.Output<string | undefined>;
    readonly rateLimitBurstTx: pulumi.Output<number | undefined>;
    readonly rateLimitMinRx: pulumi.Output<number | undefined>;
    readonly rateLimitMinTx: pulumi.Output<number | undefined>;
    readonly rateLimitPriority: pulumi.Output<number | undefined>;
    readonly rateLimitRx: pulumi.Output<number | undefined>;
    readonly rateLimitTx: pulumi.Output<number | undefined>;
    /**
     * The interval from `reset_counters_start_time` when all associated user statistics are cleared.
     */
    readonly resetCountersInterval: pulumi.Output<string | undefined>;
    /**
     * Static date and time value from which `reset_counters_interval` is calculated.
     */
    readonly resetCountersStartTime: pulumi.Output<string | undefined>;
    /**
     * The total amount of aggregated (download+upload) traffic in bytes.
     */
    readonly transferLimit: pulumi.Output<number | undefined>;
    /**
     * The total amount of traffic a user can upload in bytes.
     */
    readonly uploadLimit: pulumi.Output<number | undefined>;
    /**
     * The total amount of uptime a user can stay active.
     */
    readonly uptimeLimit: pulumi.Output<string | undefined>;
    readonly userManagerLimitationId: pulumi.Output<string>;
    /**
     * Create a UserManagerLimitation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UserManagerLimitationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering UserManagerLimitation resources.
 */
export interface UserManagerLimitationState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The total amount of traffic a user can download in bytes.
     */
    downloadLimit?: pulumi.Input<number>;
    /**
     * Unique name of the limitation.
     */
    name?: pulumi.Input<string>;
    rateLimitBurstRx?: pulumi.Input<number>;
    rateLimitBurstThresholdRx?: pulumi.Input<number>;
    rateLimitBurstThresholdTx?: pulumi.Input<number>;
    rateLimitBurstTimeRx?: pulumi.Input<string>;
    rateLimitBurstTimeTx?: pulumi.Input<string>;
    rateLimitBurstTx?: pulumi.Input<number>;
    rateLimitMinRx?: pulumi.Input<number>;
    rateLimitMinTx?: pulumi.Input<number>;
    rateLimitPriority?: pulumi.Input<number>;
    rateLimitRx?: pulumi.Input<number>;
    rateLimitTx?: pulumi.Input<number>;
    /**
     * The interval from `reset_counters_start_time` when all associated user statistics are cleared.
     */
    resetCountersInterval?: pulumi.Input<string>;
    /**
     * Static date and time value from which `reset_counters_interval` is calculated.
     */
    resetCountersStartTime?: pulumi.Input<string>;
    /**
     * The total amount of aggregated (download+upload) traffic in bytes.
     */
    transferLimit?: pulumi.Input<number>;
    /**
     * The total amount of traffic a user can upload in bytes.
     */
    uploadLimit?: pulumi.Input<number>;
    /**
     * The total amount of uptime a user can stay active.
     */
    uptimeLimit?: pulumi.Input<string>;
    userManagerLimitationId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a UserManagerLimitation resource.
 */
export interface UserManagerLimitationArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The total amount of traffic a user can download in bytes.
     */
    downloadLimit?: pulumi.Input<number>;
    /**
     * Unique name of the limitation.
     */
    name?: pulumi.Input<string>;
    rateLimitBurstRx?: pulumi.Input<number>;
    rateLimitBurstThresholdRx?: pulumi.Input<number>;
    rateLimitBurstThresholdTx?: pulumi.Input<number>;
    rateLimitBurstTimeRx?: pulumi.Input<string>;
    rateLimitBurstTimeTx?: pulumi.Input<string>;
    rateLimitBurstTx?: pulumi.Input<number>;
    rateLimitMinRx?: pulumi.Input<number>;
    rateLimitMinTx?: pulumi.Input<number>;
    rateLimitPriority?: pulumi.Input<number>;
    rateLimitRx?: pulumi.Input<number>;
    rateLimitTx?: pulumi.Input<number>;
    /**
     * The interval from `reset_counters_start_time` when all associated user statistics are cleared.
     */
    resetCountersInterval?: pulumi.Input<string>;
    /**
     * Static date and time value from which `reset_counters_interval` is calculated.
     */
    resetCountersStartTime?: pulumi.Input<string>;
    /**
     * The total amount of aggregated (download+upload) traffic in bytes.
     */
    transferLimit?: pulumi.Input<number>;
    /**
     * The total amount of traffic a user can upload in bytes.
     */
    uploadLimit?: pulumi.Input<number>;
    /**
     * The total amount of uptime a user can stay active.
     */
    uptimeLimit?: pulumi.Input<string>;
    userManagerLimitationId?: pulumi.Input<string>;
}
