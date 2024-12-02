// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CapsmanAccessList extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanAccessList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CapsmanAccessListState, opts?: pulumi.CustomResourceOptions): CapsmanAccessList {
        return new CapsmanAccessList(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/capsmanAccessList:CapsmanAccessList';

    /**
     * Returns true if the given object is an instance of CapsmanAccessList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CapsmanAccessList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapsmanAccessList.__pulumiType;
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
     * An action to take when a client matches.
     */
    public readonly action!: pulumi.Output<string | undefined>;
    /**
     * An option that permits the client's signal to be out of the range always or for some time interval.
     */
    public readonly allowSignalOutOfRange!: pulumi.Output<string | undefined>;
    /**
     * Transmission speed limit in the direction of the client..
     */
    public readonly apTxLimit!: pulumi.Output<number | undefined>;
    public readonly capsmanAccessListId!: pulumi.Output<string>;
    /**
     * An option that specifies whether to allow forwarding data between clients connected to the same interface.
     */
    public readonly clientToClientForwarding!: pulumi.Output<boolean | undefined>;
    /**
     * Transmission speed limit in the direction of the access point.
     */
    public readonly clientTxLimit!: pulumi.Output<number | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Interface name to compare with an interface to which the client actually connects to.
     */
    public readonly interface!: pulumi.Output<string | undefined>;
    /**
     * MAC address of the client.
     */
    public readonly macAddress!: pulumi.Output<string | undefined>;
    /**
     * MAC address mask to apply when comparing clients' addresses.
     */
    public readonly macMask!: pulumi.Output<string | undefined>;
    /**
     * Before which position the rule will be inserted. > Please check the effect of this option, as it does not work as you
     * think! > Best way to use in conjunction with a data source. See example.
     */
    public readonly placeBefore!: pulumi.Output<string | undefined>;
    /**
     * PSK passphrase for the client if some PSK authentication algorithm is used.
     */
    public readonly privatePassphrase!: pulumi.Output<string | undefined>;
    /**
     * An option that specifies if RADIUS traffic accounting should be used in case of RADIUS authentication of the client.
     */
    public readonly radiusAccounting!: pulumi.Output<boolean | undefined>;
    /**
     * The range in which the client signal must fall.
     */
    public readonly signalRange!: pulumi.Output<string | undefined>;
    /**
     * The regular expression to compare the actual SSID the client connects to.
     */
    public readonly ssidRegexp!: pulumi.Output<string | undefined>;
    /**
     * Time of the day and days of the week when the rule is applicable.
     */
    public readonly time!: pulumi.Output<string | undefined>;
    /**
     * VLAN ID to use if vlan-mode enables use of VLAN tagging.
     */
    public readonly vlanId!: pulumi.Output<number | undefined>;
    /**
     * VLAN tagging mode specifies if traffic coming from a client should get tagged and untagged when it goes back to the
     * client.
     */
    public readonly vlanMode!: pulumi.Output<string | undefined>;

    /**
     * Create a CapsmanAccessList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CapsmanAccessListArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CapsmanAccessListArgs | CapsmanAccessListState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CapsmanAccessListState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["allowSignalOutOfRange"] = state ? state.allowSignalOutOfRange : undefined;
            resourceInputs["apTxLimit"] = state ? state.apTxLimit : undefined;
            resourceInputs["capsmanAccessListId"] = state ? state.capsmanAccessListId : undefined;
            resourceInputs["clientToClientForwarding"] = state ? state.clientToClientForwarding : undefined;
            resourceInputs["clientTxLimit"] = state ? state.clientTxLimit : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["macMask"] = state ? state.macMask : undefined;
            resourceInputs["placeBefore"] = state ? state.placeBefore : undefined;
            resourceInputs["privatePassphrase"] = state ? state.privatePassphrase : undefined;
            resourceInputs["radiusAccounting"] = state ? state.radiusAccounting : undefined;
            resourceInputs["signalRange"] = state ? state.signalRange : undefined;
            resourceInputs["ssidRegexp"] = state ? state.ssidRegexp : undefined;
            resourceInputs["time"] = state ? state.time : undefined;
            resourceInputs["vlanId"] = state ? state.vlanId : undefined;
            resourceInputs["vlanMode"] = state ? state.vlanMode : undefined;
        } else {
            const args = argsOrState as CapsmanAccessListArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["allowSignalOutOfRange"] = args ? args.allowSignalOutOfRange : undefined;
            resourceInputs["apTxLimit"] = args ? args.apTxLimit : undefined;
            resourceInputs["capsmanAccessListId"] = args ? args.capsmanAccessListId : undefined;
            resourceInputs["clientToClientForwarding"] = args ? args.clientToClientForwarding : undefined;
            resourceInputs["clientTxLimit"] = args ? args.clientTxLimit : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["macAddress"] = args ? args.macAddress : undefined;
            resourceInputs["macMask"] = args ? args.macMask : undefined;
            resourceInputs["placeBefore"] = args ? args.placeBefore : undefined;
            resourceInputs["privatePassphrase"] = args ? args.privatePassphrase : undefined;
            resourceInputs["radiusAccounting"] = args ? args.radiusAccounting : undefined;
            resourceInputs["signalRange"] = args ? args.signalRange : undefined;
            resourceInputs["ssidRegexp"] = args ? args.ssidRegexp : undefined;
            resourceInputs["time"] = args ? args.time : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["vlanMode"] = args ? args.vlanMode : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CapsmanAccessList.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CapsmanAccessList resources.
 */
export interface CapsmanAccessListState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An action to take when a client matches.
     */
    action?: pulumi.Input<string>;
    /**
     * An option that permits the client's signal to be out of the range always or for some time interval.
     */
    allowSignalOutOfRange?: pulumi.Input<string>;
    /**
     * Transmission speed limit in the direction of the client..
     */
    apTxLimit?: pulumi.Input<number>;
    capsmanAccessListId?: pulumi.Input<string>;
    /**
     * An option that specifies whether to allow forwarding data between clients connected to the same interface.
     */
    clientToClientForwarding?: pulumi.Input<boolean>;
    /**
     * Transmission speed limit in the direction of the access point.
     */
    clientTxLimit?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Interface name to compare with an interface to which the client actually connects to.
     */
    interface?: pulumi.Input<string>;
    /**
     * MAC address of the client.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * MAC address mask to apply when comparing clients' addresses.
     */
    macMask?: pulumi.Input<string>;
    /**
     * Before which position the rule will be inserted. > Please check the effect of this option, as it does not work as you
     * think! > Best way to use in conjunction with a data source. See example.
     */
    placeBefore?: pulumi.Input<string>;
    /**
     * PSK passphrase for the client if some PSK authentication algorithm is used.
     */
    privatePassphrase?: pulumi.Input<string>;
    /**
     * An option that specifies if RADIUS traffic accounting should be used in case of RADIUS authentication of the client.
     */
    radiusAccounting?: pulumi.Input<boolean>;
    /**
     * The range in which the client signal must fall.
     */
    signalRange?: pulumi.Input<string>;
    /**
     * The regular expression to compare the actual SSID the client connects to.
     */
    ssidRegexp?: pulumi.Input<string>;
    /**
     * Time of the day and days of the week when the rule is applicable.
     */
    time?: pulumi.Input<string>;
    /**
     * VLAN ID to use if vlan-mode enables use of VLAN tagging.
     */
    vlanId?: pulumi.Input<number>;
    /**
     * VLAN tagging mode specifies if traffic coming from a client should get tagged and untagged when it goes back to the
     * client.
     */
    vlanMode?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CapsmanAccessList resource.
 */
export interface CapsmanAccessListArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An action to take when a client matches.
     */
    action?: pulumi.Input<string>;
    /**
     * An option that permits the client's signal to be out of the range always or for some time interval.
     */
    allowSignalOutOfRange?: pulumi.Input<string>;
    /**
     * Transmission speed limit in the direction of the client..
     */
    apTxLimit?: pulumi.Input<number>;
    capsmanAccessListId?: pulumi.Input<string>;
    /**
     * An option that specifies whether to allow forwarding data between clients connected to the same interface.
     */
    clientToClientForwarding?: pulumi.Input<boolean>;
    /**
     * Transmission speed limit in the direction of the access point.
     */
    clientTxLimit?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Interface name to compare with an interface to which the client actually connects to.
     */
    interface?: pulumi.Input<string>;
    /**
     * MAC address of the client.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * MAC address mask to apply when comparing clients' addresses.
     */
    macMask?: pulumi.Input<string>;
    /**
     * Before which position the rule will be inserted. > Please check the effect of this option, as it does not work as you
     * think! > Best way to use in conjunction with a data source. See example.
     */
    placeBefore?: pulumi.Input<string>;
    /**
     * PSK passphrase for the client if some PSK authentication algorithm is used.
     */
    privatePassphrase?: pulumi.Input<string>;
    /**
     * An option that specifies if RADIUS traffic accounting should be used in case of RADIUS authentication of the client.
     */
    radiusAccounting?: pulumi.Input<boolean>;
    /**
     * The range in which the client signal must fall.
     */
    signalRange?: pulumi.Input<string>;
    /**
     * The regular expression to compare the actual SSID the client connects to.
     */
    ssidRegexp?: pulumi.Input<string>;
    /**
     * Time of the day and days of the week when the rule is applicable.
     */
    time?: pulumi.Input<string>;
    /**
     * VLAN ID to use if vlan-mode enables use of VLAN tagging.
     */
    vlanId?: pulumi.Input<number>;
    /**
     * VLAN tagging mode specifies if traffic coming from a client should get tagged and untagged when it goes back to the
     * client.
     */
    vlanMode?: pulumi.Input<string>;
}