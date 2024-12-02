import * as pulumi from "@pulumi/pulumi";
export declare class SystemLed extends pulumi.CustomResource {
    /**
     * Get an existing SystemLed resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemLedState, opts?: pulumi.CustomResourceOptions): SystemLed;
    /**
     * Returns true if the given object is an instance of SystemLed.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemLed;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * It's the default item.
     */
    readonly default: pulumi.Output<boolean>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * An option to set the interface to which the LED is connected.
     */
    readonly interface: pulumi.Output<string | undefined>;
    /**
     * An option to set the LED name.
     */
    readonly leds: pulumi.Output<string[] | undefined>;
    /**
     * An option to set the signal strength threshold for the modem LED.
     */
    readonly modemSignalTreshold: pulumi.Output<number | undefined>;
    readonly systemLedId: pulumi.Output<string>;
    /**
     * An option to set the LED type.
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a SystemLed resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemLedArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemLed resources.
 */
export interface SystemLedState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * An option to set the interface to which the LED is connected.
     */
    interface?: pulumi.Input<string>;
    /**
     * An option to set the LED name.
     */
    leds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An option to set the signal strength threshold for the modem LED.
     */
    modemSignalTreshold?: pulumi.Input<number>;
    systemLedId?: pulumi.Input<string>;
    /**
     * An option to set the LED type.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemLed resource.
 */
export interface SystemLedArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * An option to set the interface to which the LED is connected.
     */
    interface?: pulumi.Input<string>;
    /**
     * An option to set the LED name.
     */
    leds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An option to set the signal strength threshold for the modem LED.
     */
    modemSignalTreshold?: pulumi.Input<number>;
    systemLedId?: pulumi.Input<string>;
    /**
     * An option to set the LED type.
     */
    type?: pulumi.Input<string>;
}
