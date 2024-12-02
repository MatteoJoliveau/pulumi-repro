import * as pulumi from "@pulumi/pulumi";
export declare class WifiAaa extends pulumi.CustomResource {
    /**
     * Get an existing WifiAaa resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WifiAaaState, opts?: pulumi.CustomResourceOptions): WifiAaa;
    /**
     * Returns true if the given object is an instance of WifiAaa.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WifiAaa;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Format of the `Called-Station-Id` RADIUS attribute.
     */
    readonly calledFormat: pulumi.Output<string | undefined>;
    /**
     * Format of the `Calling-Station-Id` RADIUS attribute.
     */
    readonly callingFormat: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Interval at which to send interim updates about traffic accounting to the RADIUS server.
     */
    readonly interimUpdate: pulumi.Output<string | undefined>;
    /**
     * Time to cache RADIUS server replies when MAC address authentication is enabled.
     */
    readonly macCaching: pulumi.Output<string | undefined>;
    /**
     * Name of the AAA profile.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Value of the `NAS-Identifier` RADIUS attribute.
     */
    readonly nasIdentifier: pulumi.Output<string | undefined>;
    /**
     * Format of the `User-Password` RADIUS attribute.
     */
    readonly passwordFormat: pulumi.Output<string | undefined>;
    /**
     * Format of the `User-Name` RADIUS attribute.
     */
    readonly usernameFormat: pulumi.Output<string | undefined>;
    readonly wifiAaaId: pulumi.Output<string>;
    /**
     * Create a WifiAaa resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WifiAaaArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WifiAaa resources.
 */
export interface WifiAaaState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Format of the `Called-Station-Id` RADIUS attribute.
     */
    calledFormat?: pulumi.Input<string>;
    /**
     * Format of the `Calling-Station-Id` RADIUS attribute.
     */
    callingFormat?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Interval at which to send interim updates about traffic accounting to the RADIUS server.
     */
    interimUpdate?: pulumi.Input<string>;
    /**
     * Time to cache RADIUS server replies when MAC address authentication is enabled.
     */
    macCaching?: pulumi.Input<string>;
    /**
     * Name of the AAA profile.
     */
    name?: pulumi.Input<string>;
    /**
     * Value of the `NAS-Identifier` RADIUS attribute.
     */
    nasIdentifier?: pulumi.Input<string>;
    /**
     * Format of the `User-Password` RADIUS attribute.
     */
    passwordFormat?: pulumi.Input<string>;
    /**
     * Format of the `User-Name` RADIUS attribute.
     */
    usernameFormat?: pulumi.Input<string>;
    wifiAaaId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WifiAaa resource.
 */
export interface WifiAaaArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Format of the `Called-Station-Id` RADIUS attribute.
     */
    calledFormat?: pulumi.Input<string>;
    /**
     * Format of the `Calling-Station-Id` RADIUS attribute.
     */
    callingFormat?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Interval at which to send interim updates about traffic accounting to the RADIUS server.
     */
    interimUpdate?: pulumi.Input<string>;
    /**
     * Time to cache RADIUS server replies when MAC address authentication is enabled.
     */
    macCaching?: pulumi.Input<string>;
    /**
     * Name of the AAA profile.
     */
    name?: pulumi.Input<string>;
    /**
     * Value of the `NAS-Identifier` RADIUS attribute.
     */
    nasIdentifier?: pulumi.Input<string>;
    /**
     * Format of the `User-Password` RADIUS attribute.
     */
    passwordFormat?: pulumi.Input<string>;
    /**
     * Format of the `User-Name` RADIUS attribute.
     */
    usernameFormat?: pulumi.Input<string>;
    wifiAaaId?: pulumi.Input<string>;
}
