import * as pulumi from "@pulumi/pulumi";
export declare class SystemRouterboardUsb extends pulumi.CustomResource {
    /**
     * Get an existing SystemRouterboardUsb resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemRouterboardUsbState, opts?: pulumi.CustomResourceOptions): SystemRouterboardUsb;
    /**
     * Returns true if the given object is an instance of SystemRouterboardUsb.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemRouterboardUsb;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly systemRouterboardUsbId: pulumi.Output<string>;
    /**
     * An option to set the type of the USB port. Possible value: `auto`, `mini-PCIe`, `USB-type-A`.
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * An option to set the USB port mode. Possible values: `automatic`, `force-host`.
     */
    readonly usbMode: pulumi.Output<string | undefined>;
    /**
     * Create a SystemRouterboardUsb resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemRouterboardUsbArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemRouterboardUsb resources.
 */
export interface SystemRouterboardUsbState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    systemRouterboardUsbId?: pulumi.Input<string>;
    /**
     * An option to set the type of the USB port. Possible value: `auto`, `mini-PCIe`, `USB-type-A`.
     */
    type?: pulumi.Input<string>;
    /**
     * An option to set the USB port mode. Possible values: `automatic`, `force-host`.
     */
    usbMode?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemRouterboardUsb resource.
 */
export interface SystemRouterboardUsbArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    systemRouterboardUsbId?: pulumi.Input<string>;
    /**
     * An option to set the type of the USB port. Possible value: `auto`, `mini-PCIe`, `USB-type-A`.
     */
    type?: pulumi.Input<string>;
    /**
     * An option to set the USB port mode. Possible values: `automatic`, `force-host`.
     */
    usbMode?: pulumi.Input<string>;
}
