import * as pulumi from "@pulumi/pulumi";
export declare class SystemRouterboardButtonWps extends pulumi.CustomResource {
    /**
     * Get an existing SystemRouterboardButtonWps resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemRouterboardButtonWpsState, opts?: pulumi.CustomResourceOptions): SystemRouterboardButtonWps;
    /**
     * Returns true if the given object is an instance of SystemRouterboardButtonWps.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemRouterboardButtonWps;
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
    readonly systemRouterboardButtonWpsId: pulumi.Output<string>;
    /**
     * Create a SystemRouterboardButtonWps resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemRouterboardButtonWpsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemRouterboardButtonWps resources.
 */
export interface SystemRouterboardButtonWpsState {
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
    systemRouterboardButtonWpsId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemRouterboardButtonWps resource.
 */
export interface SystemRouterboardButtonWpsArgs {
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
    systemRouterboardButtonWpsId?: pulumi.Input<string>;
}
