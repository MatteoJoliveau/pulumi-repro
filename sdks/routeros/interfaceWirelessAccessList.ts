// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class InterfaceWirelessAccessList extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceWirelessAccessList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceWirelessAccessListState, opts?: pulumi.CustomResourceOptions): InterfaceWirelessAccessList {
        return new InterfaceWirelessAccessList(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/interfaceWirelessAccessList:InterfaceWirelessAccessList';

    /**
     * Returns true if the given object is an instance of InterfaceWirelessAccessList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InterfaceWirelessAccessList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceWirelessAccessList.__pulumiType;
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
     * Option which permits client's signal to be out of the range always or for some time interval.
     */
    public readonly allowSignalOutOfRange!: pulumi.Output<string | undefined>;
    /**
     * Limit rate of data transmission to this client. Value 0 means no limit. Value is in bits per second.
     */
    public readonly apTxLimit!: pulumi.Output<number | undefined>;
    /**
     * No - Client association will always fail.yes - Use authentication procedure that is specified in the security-profile of
     * the interface.
     */
    public readonly authentication!: pulumi.Output<boolean | undefined>;
    /**
     * Ask client to limit rate of data transmission. Value 0 means no limit.This is a proprietary extension that is supported
     * by RouterOS clients.Value is in bits per second.
     */
    public readonly clientTxLimit!: pulumi.Output<number | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * `No` - Client cannot send frames to other station that are connected to same access point.yes - Client can send frames
     * to other stations on the same access point.
     */
    public readonly forwarding!: pulumi.Output<boolean | undefined>;
    /**
     * Rules with interface=any are used for any wireless interface and the interface=all defines interface-list `all` name. To
     * make rule that applies only to one wireless interface, specify that interface as a value of this property.
     */
    public readonly interface!: pulumi.Output<string | undefined>;
    public readonly interfaceWirelessAccessListId!: pulumi.Output<string>;
    /**
     * Rule matches client with the specified MAC address. Value 00:00:00:00:00:00 matches always.
     */
    public readonly macAddress!: pulumi.Output<string | undefined>;
    /**
     * Management protection shared secret.
     */
    public readonly managementProtectionKey!: pulumi.Output<string | undefined>;
    /**
     * Only for `WEP` modes.
     */
    public readonly privateAlgo!: pulumi.Output<string | undefined>;
    /**
     * Only for `WEP` modes (HEX).
     */
    public readonly privateKey!: pulumi.Output<string | undefined>;
    /**
     * Used in `WPA PSK` mode.
     */
    public readonly privatePreSharedKey!: pulumi.Output<string | undefined>;
    /**
     * Rule matches if signal strength of the station is within the range.If signal strength of the station will go out of the
     * range that is specified in the rule, access point will disconnect that station.
     */
    public readonly signalRange!: pulumi.Output<string | undefined>;
    /**
     * Rule will match only during specified time.Station will be disconnected after specified time ends. Both start and end
     * time is expressed as time since midnight, 00:00. Rule will match only during specified days of the week. Ex:
     * "3h3m-5h,mon,tue,wed,thu,fri"
     */
    public readonly time!: pulumi.Output<string | undefined>;
    /**
     * VLAN ID to use if doing VLAN tagging.
     */
    public readonly vlanId!: pulumi.Output<number | undefined>;
    /**
     * VLAN tagging mode specifies if traffic coming from client should get tagged (and untagged when going to client).
     */
    public readonly vlanMode!: pulumi.Output<string | undefined>;

    /**
     * Create a InterfaceWirelessAccessList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceWirelessAccessListArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InterfaceWirelessAccessListArgs | InterfaceWirelessAccessListState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InterfaceWirelessAccessListState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["allowSignalOutOfRange"] = state ? state.allowSignalOutOfRange : undefined;
            resourceInputs["apTxLimit"] = state ? state.apTxLimit : undefined;
            resourceInputs["authentication"] = state ? state.authentication : undefined;
            resourceInputs["clientTxLimit"] = state ? state.clientTxLimit : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["forwarding"] = state ? state.forwarding : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["interfaceWirelessAccessListId"] = state ? state.interfaceWirelessAccessListId : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["managementProtectionKey"] = state ? state.managementProtectionKey : undefined;
            resourceInputs["privateAlgo"] = state ? state.privateAlgo : undefined;
            resourceInputs["privateKey"] = state ? state.privateKey : undefined;
            resourceInputs["privatePreSharedKey"] = state ? state.privatePreSharedKey : undefined;
            resourceInputs["signalRange"] = state ? state.signalRange : undefined;
            resourceInputs["time"] = state ? state.time : undefined;
            resourceInputs["vlanId"] = state ? state.vlanId : undefined;
            resourceInputs["vlanMode"] = state ? state.vlanMode : undefined;
        } else {
            const args = argsOrState as InterfaceWirelessAccessListArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["allowSignalOutOfRange"] = args ? args.allowSignalOutOfRange : undefined;
            resourceInputs["apTxLimit"] = args ? args.apTxLimit : undefined;
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["clientTxLimit"] = args ? args.clientTxLimit : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["forwarding"] = args ? args.forwarding : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["interfaceWirelessAccessListId"] = args ? args.interfaceWirelessAccessListId : undefined;
            resourceInputs["macAddress"] = args ? args.macAddress : undefined;
            resourceInputs["managementProtectionKey"] = args ? args.managementProtectionKey : undefined;
            resourceInputs["privateAlgo"] = args ? args.privateAlgo : undefined;
            resourceInputs["privateKey"] = args ? args.privateKey : undefined;
            resourceInputs["privatePreSharedKey"] = args ? args.privatePreSharedKey : undefined;
            resourceInputs["signalRange"] = args ? args.signalRange : undefined;
            resourceInputs["time"] = args ? args.time : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["vlanMode"] = args ? args.vlanMode : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InterfaceWirelessAccessList.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
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
