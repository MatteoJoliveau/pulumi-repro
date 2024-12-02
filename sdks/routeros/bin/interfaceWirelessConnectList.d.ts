import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceWirelessConnectList extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceWirelessConnectList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceWirelessConnectListState, opts?: pulumi.CustomResourceOptions): InterfaceWirelessConnectList;
    /**
     * Returns true if the given object is an instance of InterfaceWirelessConnectList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceWirelessConnectList;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___ts_: pulumi.Output<string | undefined>;
    readonly allowSignalOutOfRange: pulumi.Output<string | undefined>;
    /**
     * Rule matches if area value of AP (a proprietary extension) begins with specified value.area value is a proprietary
     * extension.
     */
    readonly areaPrefix: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Available options: yes - Connect to access point that matches this rule. no - Do not connect to any access point that
     * matches this rule.
     */
    readonly connect: pulumi.Output<boolean | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Name of the interface.
     */
    readonly interface: pulumi.Output<string>;
    readonly interfaceWirelessConnectListId: pulumi.Output<string>;
    readonly interworking: pulumi.Output<string | undefined>;
    /**
     * Rule matches only AP with the specified MAC address.
     */
    readonly macAddress: pulumi.Output<string | undefined>;
    /**
     * Name of security profile that is used when connecting to matching access points, If value of this property is none, then
     * security profile specified in the interface configuration will be used. In station mode, rule will match only access
     * points that can support specified security profile. Value none will match access point that supports security profile
     * that is specified in the interface configuration. In access point mode value of this property will not be used to match
     * remote devices.
     */
    readonly securityProfile: pulumi.Output<string | undefined>;
    /**
     * Rule matches if signal strength of the access point is within the range. If station establishes connection to access
     * point that is matched by this rule, it will disconnect from that access point when signal strength goes out of the
     * specified range.
     */
    readonly signalRange: pulumi.Output<string | undefined>;
    /**
     * Rule matches access points that have this SSID. Empty value matches any SSID. This property has effect only when station
     * mode interface ssid is empty, or when access point mode interface has wds-ignore-ssid=yes.
     */
    readonly ssid: pulumi.Output<string | undefined>;
    readonly threeGpp: pulumi.Output<string | undefined>;
    readonly wirelessProtocol: pulumi.Output<string | undefined>;
    /**
     * Create a InterfaceWirelessConnectList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceWirelessConnectListArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceWirelessConnectList resources.
 */
export interface InterfaceWirelessConnectListState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    ___ts_?: pulumi.Input<string>;
    allowSignalOutOfRange?: pulumi.Input<string>;
    /**
     * Rule matches if area value of AP (a proprietary extension) begins with specified value.area value is a proprietary
     * extension.
     */
    areaPrefix?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Available options: yes - Connect to access point that matches this rule. no - Do not connect to any access point that
     * matches this rule.
     */
    connect?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
    interfaceWirelessConnectListId?: pulumi.Input<string>;
    interworking?: pulumi.Input<string>;
    /**
     * Rule matches only AP with the specified MAC address.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Name of security profile that is used when connecting to matching access points, If value of this property is none, then
     * security profile specified in the interface configuration will be used. In station mode, rule will match only access
     * points that can support specified security profile. Value none will match access point that supports security profile
     * that is specified in the interface configuration. In access point mode value of this property will not be used to match
     * remote devices.
     */
    securityProfile?: pulumi.Input<string>;
    /**
     * Rule matches if signal strength of the access point is within the range. If station establishes connection to access
     * point that is matched by this rule, it will disconnect from that access point when signal strength goes out of the
     * specified range.
     */
    signalRange?: pulumi.Input<string>;
    /**
     * Rule matches access points that have this SSID. Empty value matches any SSID. This property has effect only when station
     * mode interface ssid is empty, or when access point mode interface has wds-ignore-ssid=yes.
     */
    ssid?: pulumi.Input<string>;
    threeGpp?: pulumi.Input<string>;
    wirelessProtocol?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InterfaceWirelessConnectList resource.
 */
export interface InterfaceWirelessConnectListArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    ___ts_?: pulumi.Input<string>;
    allowSignalOutOfRange?: pulumi.Input<string>;
    /**
     * Rule matches if area value of AP (a proprietary extension) begins with specified value.area value is a proprietary
     * extension.
     */
    areaPrefix?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Available options: yes - Connect to access point that matches this rule. no - Do not connect to any access point that
     * matches this rule.
     */
    connect?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
    interfaceWirelessConnectListId?: pulumi.Input<string>;
    interworking?: pulumi.Input<string>;
    /**
     * Rule matches only AP with the specified MAC address.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Name of security profile that is used when connecting to matching access points, If value of this property is none, then
     * security profile specified in the interface configuration will be used. In station mode, rule will match only access
     * points that can support specified security profile. Value none will match access point that supports security profile
     * that is specified in the interface configuration. In access point mode value of this property will not be used to match
     * remote devices.
     */
    securityProfile?: pulumi.Input<string>;
    /**
     * Rule matches if signal strength of the access point is within the range. If station establishes connection to access
     * point that is matched by this rule, it will disconnect from that access point when signal strength goes out of the
     * specified range.
     */
    signalRange?: pulumi.Input<string>;
    /**
     * Rule matches access points that have this SSID. Empty value matches any SSID. This property has effect only when station
     * mode interface ssid is empty, or when access point mode interface has wds-ignore-ssid=yes.
     */
    ssid?: pulumi.Input<string>;
    threeGpp?: pulumi.Input<string>;
    wirelessProtocol?: pulumi.Input<string>;
}
