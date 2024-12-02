import * as pulumi from "@pulumi/pulumi";
export declare class SystemRouterboardButtonMode extends pulumi.CustomResource {
    /**
     * Get an existing SystemRouterboardButtonMode resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemRouterboardButtonModeState, opts?: pulumi.CustomResourceOptions): SystemRouterboardButtonMode;
    /**
     * Returns true if the given object is an instance of SystemRouterboardButtonMode.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemRouterboardButtonMode;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * An option to enable the operation of the button.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * An option to define the period within which the button should be pressed.
     */
    readonly holdTime: pulumi.Output<string | undefined>;
    /**
     * An option to set the script that will be run upon pressing the button.
     */
    readonly onEvent: pulumi.Output<string | undefined>;
    readonly systemRouterboardButtonModeId: pulumi.Output<string>;
    /**
     * Create a SystemRouterboardButtonMode resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemRouterboardButtonModeArgs, opts?: pulumi.CustomResourceOptions);
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
