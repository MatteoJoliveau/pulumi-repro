// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemUserSettings extends pulumi.CustomResource {
    /**
     * Get an existing SystemUserSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemUserSettingsState, opts?: pulumi.CustomResourceOptions): SystemUserSettings {
        return new SystemUserSettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/systemUserSettings:SystemUserSettings';

    /**
     * Returns true if the given object is an instance of SystemUserSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemUserSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemUserSettings.__pulumiType;
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
     * An option specifies the complexity requirements of the password, with categories being uppercase, lowercase, digit, and
     * symbol.
     */
    public readonly minimumCategories!: pulumi.Output<number | undefined>;
    /**
     * An option specifies the minimum length of the password.
     */
    public readonly minimumPasswordLength!: pulumi.Output<number | undefined>;
    public readonly systemUserSettingsId!: pulumi.Output<string>;

    /**
     * Create a SystemUserSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemUserSettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemUserSettingsArgs | SystemUserSettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemUserSettingsState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["minimumCategories"] = state ? state.minimumCategories : undefined;
            resourceInputs["minimumPasswordLength"] = state ? state.minimumPasswordLength : undefined;
            resourceInputs["systemUserSettingsId"] = state ? state.systemUserSettingsId : undefined;
        } else {
            const args = argsOrState as SystemUserSettingsArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["minimumCategories"] = args ? args.minimumCategories : undefined;
            resourceInputs["minimumPasswordLength"] = args ? args.minimumPasswordLength : undefined;
            resourceInputs["systemUserSettingsId"] = args ? args.systemUserSettingsId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemUserSettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemUserSettings resources.
 */
export interface SystemUserSettingsState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option specifies the complexity requirements of the password, with categories being uppercase, lowercase, digit, and
     * symbol.
     */
    minimumCategories?: pulumi.Input<number>;
    /**
     * An option specifies the minimum length of the password.
     */
    minimumPasswordLength?: pulumi.Input<number>;
    systemUserSettingsId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemUserSettings resource.
 */
export interface SystemUserSettingsArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option specifies the complexity requirements of the password, with categories being uppercase, lowercase, digit, and
     * symbol.
     */
    minimumCategories?: pulumi.Input<number>;
    /**
     * An option specifies the minimum length of the password.
     */
    minimumPasswordLength?: pulumi.Input<number>;
    systemUserSettingsId?: pulumi.Input<string>;
}
