import * as pulumi from "@pulumi/pulumi";
export declare class CapsmanAccessList extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanAccessList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CapsmanAccessListState, opts?: pulumi.CustomResourceOptions): CapsmanAccessList;
    /**
     * Returns true if the given object is an instance of CapsmanAccessList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CapsmanAccessList;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * An action to take when a client matches.
     */
    readonly action: pulumi.Output<string | undefined>;
    /**
     * An option that permits the client's signal to be out of the range always or for some time interval.
     */
    readonly allowSignalOutOfRange: pulumi.Output<string | undefined>;
    /**
     * Transmission speed limit in the direction of the client..
     */
    readonly apTxLimit: pulumi.Output<number | undefined>;
    readonly capsmanAccessListId: pulumi.Output<string>;
    /**
     * An option that specifies whether to allow forwarding data between clients connected to the same interface.
     */
    readonly clientToClientForwarding: pulumi.Output<boolean | undefined>;
    /**
     * Transmission speed limit in the direction of the access point.
     */
    readonly clientTxLimit: pulumi.Output<number | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Interface name to compare with an interface to which the client actually connects to.
     */
    readonly interface: pulumi.Output<string | undefined>;
    /**
     * MAC address of the client.
     */
    readonly macAddress: pulumi.Output<string | undefined>;
    /**
     * MAC address mask to apply when comparing clients' addresses.
     */
    readonly macMask: pulumi.Output<string | undefined>;
    /**
     * Before which position the rule will be inserted. > Please check the effect of this option, as it does not work as you
     * think! > Best way to use in conjunction with a data source. See example.
     */
    readonly placeBefore: pulumi.Output<string | undefined>;
    /**
     * PSK passphrase for the client if some PSK authentication algorithm is used.
     */
    readonly privatePassphrase: pulumi.Output<string | undefined>;
    /**
     * An option that specifies if RADIUS traffic accounting should be used in case of RADIUS authentication of the client.
     */
    readonly radiusAccounting: pulumi.Output<boolean | undefined>;
    /**
     * The range in which the client signal must fall.
     */
    readonly signalRange: pulumi.Output<string | undefined>;
    /**
     * The regular expression to compare the actual SSID the client connects to.
     */
    readonly ssidRegexp: pulumi.Output<string | undefined>;
    /**
     * Time of the day and days of the week when the rule is applicable.
     */
    readonly time: pulumi.Output<string | undefined>;
    /**
     * VLAN ID to use if vlan-mode enables use of VLAN tagging.
     */
    readonly vlanId: pulumi.Output<number | undefined>;
    /**
     * VLAN tagging mode specifies if traffic coming from a client should get tagged and untagged when it goes back to the
     * client.
     */
    readonly vlanMode: pulumi.Output<string | undefined>;
    /**
     * Create a CapsmanAccessList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CapsmanAccessListArgs, opts?: pulumi.CustomResourceOptions);
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
