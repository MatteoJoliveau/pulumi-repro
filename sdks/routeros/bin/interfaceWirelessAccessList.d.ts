import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceWirelessAccessList extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceWirelessAccessList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceWirelessAccessListState, opts?: pulumi.CustomResourceOptions): InterfaceWirelessAccessList;
    /**
     * Returns true if the given object is an instance of InterfaceWirelessAccessList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceWirelessAccessList;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Option which permits client's signal to be out of the range always or for some time interval.
     */
    readonly allowSignalOutOfRange: pulumi.Output<string | undefined>;
    /**
     * Limit rate of data transmission to this client. Value 0 means no limit. Value is in bits per second.
     */
    readonly apTxLimit: pulumi.Output<number | undefined>;
    /**
     * No - Client association will always fail.yes - Use authentication procedure that is specified in the security-profile of
     * the interface.
     */
    readonly authentication: pulumi.Output<boolean | undefined>;
    /**
     * Ask client to limit rate of data transmission. Value 0 means no limit.This is a proprietary extension that is supported
     * by RouterOS clients.Value is in bits per second.
     */
    readonly clientTxLimit: pulumi.Output<number | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * `No` - Client cannot send frames to other station that are connected to same access point.yes - Client can send frames
     * to other stations on the same access point.
     */
    readonly forwarding: pulumi.Output<boolean | undefined>;
    /**
     * Rules with interface=any are used for any wireless interface and the interface=all defines interface-list `all` name. To
     * make rule that applies only to one wireless interface, specify that interface as a value of this property.
     */
    readonly interface: pulumi.Output<string | undefined>;
    readonly interfaceWirelessAccessListId: pulumi.Output<string>;
    /**
     * Rule matches client with the specified MAC address. Value 00:00:00:00:00:00 matches always.
     */
    readonly macAddress: pulumi.Output<string | undefined>;
    /**
     * Management protection shared secret.
     */
    readonly managementProtectionKey: pulumi.Output<string | undefined>;
    /**
     * Only for `WEP` modes.
     */
    readonly privateAlgo: pulumi.Output<string | undefined>;
    /**
     * Only for `WEP` modes (HEX).
     */
    readonly privateKey: pulumi.Output<string | undefined>;
    /**
     * Used in `WPA PSK` mode.
     */
    readonly privatePreSharedKey: pulumi.Output<string | undefined>;
    /**
     * Rule matches if signal strength of the station is within the range.If signal strength of the station will go out of the
     * range that is specified in the rule, access point will disconnect that station.
     */
    readonly signalRange: pulumi.Output<string | undefined>;
    /**
     * Rule will match only during specified time.Station will be disconnected after specified time ends. Both start and end
     * time is expressed as time since midnight, 00:00. Rule will match only during specified days of the week. Ex:
     * "3h3m-5h,mon,tue,wed,thu,fri"
     */
    readonly time: pulumi.Output<string | undefined>;
    /**
     * VLAN ID to use if doing VLAN tagging.
     */
    readonly vlanId: pulumi.Output<number | undefined>;
    /**
     * VLAN tagging mode specifies if traffic coming from client should get tagged (and untagged when going to client).
     */
    readonly vlanMode: pulumi.Output<string | undefined>;
    /**
     * Create a InterfaceWirelessAccessList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceWirelessAccessListArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceWirelessAccessList resources.
 */
export interface InterfaceWirelessAccessListState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Option which permits client's signal to be out of the range always or for some time interval.
     */
    allowSignalOutOfRange?: pulumi.Input<string>;
    /**
     * Limit rate of data transmission to this client. Value 0 means no limit. Value is in bits per second.
     */
    apTxLimit?: pulumi.Input<number>;
    /**
     * No - Client association will always fail.yes - Use authentication procedure that is specified in the security-profile of
     * the interface.
     */
    authentication?: pulumi.Input<boolean>;
    /**
     * Ask client to limit rate of data transmission. Value 0 means no limit.This is a proprietary extension that is supported
     * by RouterOS clients.Value is in bits per second.
     */
    clientTxLimit?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * `No` - Client cannot send frames to other station that are connected to same access point.yes - Client can send frames
     * to other stations on the same access point.
     */
    forwarding?: pulumi.Input<boolean>;
    /**
     * Rules with interface=any are used for any wireless interface and the interface=all defines interface-list `all` name. To
     * make rule that applies only to one wireless interface, specify that interface as a value of this property.
     */
    interface?: pulumi.Input<string>;
    interfaceWirelessAccessListId?: pulumi.Input<string>;
    /**
     * Rule matches client with the specified MAC address. Value 00:00:00:00:00:00 matches always.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Management protection shared secret.
     */
    managementProtectionKey?: pulumi.Input<string>;
    /**
     * Only for `WEP` modes.
     */
    privateAlgo?: pulumi.Input<string>;
    /**
     * Only for `WEP` modes (HEX).
     */
    privateKey?: pulumi.Input<string>;
    /**
     * Used in `WPA PSK` mode.
     */
    privatePreSharedKey?: pulumi.Input<string>;
    /**
     * Rule matches if signal strength of the station is within the range.If signal strength of the station will go out of the
     * range that is specified in the rule, access point will disconnect that station.
     */
    signalRange?: pulumi.Input<string>;
    /**
     * Rule will match only during specified time.Station will be disconnected after specified time ends. Both start and end
     * time is expressed as time since midnight, 00:00. Rule will match only during specified days of the week. Ex:
     * "3h3m-5h,mon,tue,wed,thu,fri"
     */
    time?: pulumi.Input<string>;
    /**
     * VLAN ID to use if doing VLAN tagging.
     */
    vlanId?: pulumi.Input<number>;
    /**
     * VLAN tagging mode specifies if traffic coming from client should get tagged (and untagged when going to client).
     */
    vlanMode?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InterfaceWirelessAccessList resource.
 */
export interface InterfaceWirelessAccessListArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Option which permits client's signal to be out of the range always or for some time interval.
     */
    allowSignalOutOfRange?: pulumi.Input<string>;
    /**
     * Limit rate of data transmission to this client. Value 0 means no limit. Value is in bits per second.
     */
    apTxLimit?: pulumi.Input<number>;
    /**
     * No - Client association will always fail.yes - Use authentication procedure that is specified in the security-profile of
     * the interface.
     */
    authentication?: pulumi.Input<boolean>;
    /**
     * Ask client to limit rate of data transmission. Value 0 means no limit.This is a proprietary extension that is supported
     * by RouterOS clients.Value is in bits per second.
     */
    clientTxLimit?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * `No` - Client cannot send frames to other station that are connected to same access point.yes - Client can send frames
     * to other stations on the same access point.
     */
    forwarding?: pulumi.Input<boolean>;
    /**
     * Rules with interface=any are used for any wireless interface and the interface=all defines interface-list `all` name. To
     * make rule that applies only to one wireless interface, specify that interface as a value of this property.
     */
    interface?: pulumi.Input<string>;
    interfaceWirelessAccessListId?: pulumi.Input<string>;
    /**
     * Rule matches client with the specified MAC address. Value 00:00:00:00:00:00 matches always.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Management protection shared secret.
     */
    managementProtectionKey?: pulumi.Input<string>;
    /**
     * Only for `WEP` modes.
     */
    privateAlgo?: pulumi.Input<string>;
    /**
     * Only for `WEP` modes (HEX).
     */
    privateKey?: pulumi.Input<string>;
    /**
     * Used in `WPA PSK` mode.
     */
    privatePreSharedKey?: pulumi.Input<string>;
    /**
     * Rule matches if signal strength of the station is within the range.If signal strength of the station will go out of the
     * range that is specified in the rule, access point will disconnect that station.
     */
    signalRange?: pulumi.Input<string>;
    /**
     * Rule will match only during specified time.Station will be disconnected after specified time ends. Both start and end
     * time is expressed as time since midnight, 00:00. Rule will match only during specified days of the week. Ex:
     * "3h3m-5h,mon,tue,wed,thu,fri"
     */
    time?: pulumi.Input<string>;
    /**
     * VLAN ID to use if doing VLAN tagging.
     */
    vlanId?: pulumi.Input<number>;
    /**
     * VLAN tagging mode specifies if traffic coming from client should get tagged (and untagged when going to client).
     */
    vlanMode?: pulumi.Input<string>;
}
