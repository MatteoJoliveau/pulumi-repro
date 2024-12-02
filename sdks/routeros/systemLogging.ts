// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemLogging extends pulumi.CustomResource {
    /**
     * Get an existing SystemLogging resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemLoggingState, opts?: pulumi.CustomResourceOptions): SystemLogging {
        return new SystemLogging(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/systemLogging:SystemLogging';

    /**
     * Returns true if the given object is an instance of SystemLogging.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemLogging {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemLogging.__pulumiType;
    }

    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___id_!: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___path_!: pulumi.Output<string | undefined>;
    /**
     * specifies one of the system default actions or user specified action listed in actions menu
     */
    public readonly action!: pulumi.Output<string>;
    /**
     * It's the default item.
     */
    public /*out*/ readonly default!: pulumi.Output<boolean>;
    /**
     * Whether or not this logging should be disabled
     */
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly invalid!: pulumi.Output<boolean>;
    /**
     * prefix added at the beginning of log messages
     */
    public readonly prefix!: pulumi.Output<string | undefined>;
    public readonly systemLoggingId!: pulumi.Output<string>;
    /**
     * log all messages that falls into specified topic or list of topics. '!' character can be used before topic to exclude
     * messages falling under this topic. For example, we want to log NTP debug info without too much details: /system logging
     * add topics=ntp,debug,!packet
     */
    public readonly topics!: pulumi.Output<string[] | undefined>;

    /**
     * Create a SystemLogging resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemLoggingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemLoggingArgs | SystemLoggingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemLoggingState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["default"] = state ? state.default : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["invalid"] = state ? state.invalid : undefined;
            resourceInputs["prefix"] = state ? state.prefix : undefined;
            resourceInputs["systemLoggingId"] = state ? state.systemLoggingId : undefined;
            resourceInputs["topics"] = state ? state.topics : undefined;
        } else {
            const args = argsOrState as SystemLoggingArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["prefix"] = args ? args.prefix : undefined;
            resourceInputs["systemLoggingId"] = args ? args.systemLoggingId : undefined;
            resourceInputs["topics"] = args ? args.topics : undefined;
            resourceInputs["default"] = undefined /*out*/;
            resourceInputs["invalid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemLogging.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemLogging resources.
 */
export interface SystemLoggingState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * specifies one of the system default actions or user specified action listed in actions menu
     */
    action?: pulumi.Input<string>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    /**
     * Whether or not this logging should be disabled
     */
    disabled?: pulumi.Input<boolean>;
    invalid?: pulumi.Input<boolean>;
    /**
     * prefix added at the beginning of log messages
     */
    prefix?: pulumi.Input<string>;
    systemLoggingId?: pulumi.Input<string>;
    /**
     * log all messages that falls into specified topic or list of topics. '!' character can be used before topic to exclude
     * messages falling under this topic. For example, we want to log NTP debug info without too much details: /system logging
     * add topics=ntp,debug,!packet
     */
    topics?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SystemLogging resource.
 */
export interface SystemLoggingArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * specifies one of the system default actions or user specified action listed in actions menu
     */
    action: pulumi.Input<string>;
    /**
     * Whether or not this logging should be disabled
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * prefix added at the beginning of log messages
     */
    prefix?: pulumi.Input<string>;
    systemLoggingId?: pulumi.Input<string>;
    /**
     * log all messages that falls into specified topic or list of topics. '!' character can be used before topic to exclude
     * messages falling under this topic. For example, we want to log NTP debug info without too much details: /system logging
     * add topics=ntp,debug,!packet
     */
    topics?: pulumi.Input<pulumi.Input<string>[]>;
}
