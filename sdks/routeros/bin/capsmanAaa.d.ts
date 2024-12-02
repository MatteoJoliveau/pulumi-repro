import * as pulumi from "@pulumi/pulumi";
export declare class CapsmanAaa extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanAaa resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CapsmanAaaState, opts?: pulumi.CustomResourceOptions): CapsmanAaa;
    /**
     * Returns true if the given object is an instance of CapsmanAaa.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CapsmanAaa;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Format of how the 'called-id' identifier will be passed to RADIUS. When configuring radius server clients, you can
     * specify 'called-id' in order to separate multiple entires.
     */
    readonly calledFormat: pulumi.Output<string | undefined>;
    readonly capsmanAaaId: pulumi.Output<string>;
    /**
     * When RADIUS accounting is used, Access Point periodically sends accounting information updates to the RADIUS server.
     * This property specifies the default update interval that can be overridden by the RADIUS server using the
     * Acct-Interim-Interval attribute.
     */
    readonly interimUpdate: pulumi.Output<string>;
    /**
     * If this value is set to a time interval, the Access Point will cache RADIUS MAC authentication responses for a specified
     * time, and will not contact the RADIUS server if matching cache entry already exists. The value disabled will disable the
     * cache, Access Point will always contact the RADIUS server.
     */
    readonly macCaching: pulumi.Output<string>;
    /**
     * Controls how the MAC address of the client is encoded by Access Point in the User-Name attribute of the MAC
     * authentication and MAC accounting RADIUS requests.
     */
    readonly macFormat: pulumi.Output<string | undefined>;
    /**
     * By default Access Point uses an empty password, when sending Access-Request during MAC authentication. When this
     * property is set to as-username-and-password, Access Point will use the same value for the User-Password attribute as for
     * the User-Name attribute.
     */
    readonly macMode: pulumi.Output<string | undefined>;
    /**
     * Create a CapsmanAaa resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CapsmanAaaArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CapsmanAaa resources.
 */
export interface CapsmanAaaState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Format of how the 'called-id' identifier will be passed to RADIUS. When configuring radius server clients, you can
     * specify 'called-id' in order to separate multiple entires.
     */
    calledFormat?: pulumi.Input<string>;
    capsmanAaaId?: pulumi.Input<string>;
    /**
     * When RADIUS accounting is used, Access Point periodically sends accounting information updates to the RADIUS server.
     * This property specifies the default update interval that can be overridden by the RADIUS server using the
     * Acct-Interim-Interval attribute.
     */
    interimUpdate?: pulumi.Input<string>;
    /**
     * If this value is set to a time interval, the Access Point will cache RADIUS MAC authentication responses for a specified
     * time, and will not contact the RADIUS server if matching cache entry already exists. The value disabled will disable the
     * cache, Access Point will always contact the RADIUS server.
     */
    macCaching?: pulumi.Input<string>;
    /**
     * Controls how the MAC address of the client is encoded by Access Point in the User-Name attribute of the MAC
     * authentication and MAC accounting RADIUS requests.
     */
    macFormat?: pulumi.Input<string>;
    /**
     * By default Access Point uses an empty password, when sending Access-Request during MAC authentication. When this
     * property is set to as-username-and-password, Access Point will use the same value for the User-Password attribute as for
     * the User-Name attribute.
     */
    macMode?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CapsmanAaa resource.
 */
export interface CapsmanAaaArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Format of how the 'called-id' identifier will be passed to RADIUS. When configuring radius server clients, you can
     * specify 'called-id' in order to separate multiple entires.
     */
    calledFormat?: pulumi.Input<string>;
    capsmanAaaId?: pulumi.Input<string>;
    /**
     * When RADIUS accounting is used, Access Point periodically sends accounting information updates to the RADIUS server.
     * This property specifies the default update interval that can be overridden by the RADIUS server using the
     * Acct-Interim-Interval attribute.
     */
    interimUpdate?: pulumi.Input<string>;
    /**
     * If this value is set to a time interval, the Access Point will cache RADIUS MAC authentication responses for a specified
     * time, and will not contact the RADIUS server if matching cache entry already exists. The value disabled will disable the
     * cache, Access Point will always contact the RADIUS server.
     */
    macCaching?: pulumi.Input<string>;
    /**
     * Controls how the MAC address of the client is encoded by Access Point in the User-Name attribute of the MAC
     * authentication and MAC accounting RADIUS requests.
     */
    macFormat?: pulumi.Input<string>;
    /**
     * By default Access Point uses an empty password, when sending Access-Request during MAC authentication. When this
     * property is set to as-username-and-password, Access Point will use the same value for the User-Password attribute as for
     * the User-Name attribute.
     */
    macMode?: pulumi.Input<string>;
}
