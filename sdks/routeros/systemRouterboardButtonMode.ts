// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemRouterboardButtonMode extends pulumi.CustomResource {
    /**
     * Get an existing SystemRouterboardButtonMode resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemRouterboardButtonModeState, opts?: pulumi.CustomResourceOptions): SystemRouterboardButtonMode {
        return new SystemRouterboardButtonMode(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/systemRouterboardButtonMode:SystemRouterboardButtonMode';

    /**
     * Returns true if the given object is an instance of SystemRouterboardButtonMode.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemRouterboardButtonMode {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemRouterboardButtonMode.__pulumiType;
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
     * An option to enable the operation of the button.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * An option to define the period within which the button should be pressed.
     */
    public readonly holdTime!: pulumi.Output<string | undefined>;
    /**
     * An option to set the script that will be run upon pressing the button.
     */
    public readonly onEvent!: pulumi.Output<string | undefined>;
    public readonly systemRouterboardButtonModeId!: pulumi.Output<string>;

    /**
     * Create a SystemRouterboardButtonMode resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemRouterboardButtonModeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemRouterboardButtonModeArgs | SystemRouterboardButtonModeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemRouterboardButtonModeState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["holdTime"] = state ? state.holdTime : undefined;
            resourceInputs["onEvent"] = state ? state.onEvent : undefined;
            resourceInputs["systemRouterboardButtonModeId"] = state ? state.systemRouterboardButtonModeId : undefined;
        } else {
            const args = argsOrState as SystemRouterboardButtonModeArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["holdTime"] = args ? args.holdTime : undefined;
            resourceInputs["onEvent"] = args ? args.onEvent : undefined;
            resourceInputs["systemRouterboardButtonModeId"] = args ? args.systemRouterboardButtonModeId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemRouterboardButtonMode.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemRouterboardButtonMode resources.
 */
export interface SystemRouterboardButtonModeState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option to enable the operation of the button.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * An option to define the period within which the button should be pressed.
     */
    holdTime?: pulumi.Input<string>;
    /**
     * An option to set the script that will be run upon pressing the button.
     */
    onEvent?: pulumi.Input<string>;
    systemRouterboardButtonModeId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemRouterboardButtonMode resource.
 */
export interface SystemRouterboardButtonModeArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option to enable the operation of the button.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * An option to define the period within which the button should be pressed.
     */
    holdTime?: pulumi.Input<string>;
    /**
     * An option to set the script that will be run upon pressing the button.
     */
    onEvent?: pulumi.Input<string>;
    systemRouterboardButtonModeId?: pulumi.Input<string>;
}
