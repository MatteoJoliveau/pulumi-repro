import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceBridgeSettings extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceBridgeSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceBridgeSettingsState, opts?: pulumi.CustomResourceOptions): InterfaceBridgeSettings;
    /**
     * Returns true if the given object is an instance of InterfaceBridgeSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceBridgeSettings;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Whether to enable a bridge FastPath globally.
     */
    readonly allowFastPath: pulumi.Output<boolean | undefined>;
    /**
     * Shows byte count forwarded by Bridge Fast Forward.
     */
    readonly bridgeFastForwardBytes: pulumi.Output<number>;
    /**
     * Shows packet count forwarded by Bridge Fast Forward.
     */
    readonly bridgeFastForwardPackets: pulumi.Output<number>;
    /**
     * Shows whether a bridge FastPath is active globally, FastPatch status per bridge interface is not displayed.
     */
    readonly bridgeFastPathActive: pulumi.Output<boolean>;
    /**
     * Shows byte count forwarded by Bridge Fast Path.
     */
    readonly bridgeFastPathBytes: pulumi.Output<number>;
    /**
     * Shows packet count forwarded by Bridge FastPath.
     */
    readonly bridgeFastPathPackets: pulumi.Output<number>;
    readonly interfaceBridgeSettingsId: pulumi.Output<string>;
    /**
     * Force bridged traffic to also be processed by prerouting, forward and postrouting sections of IP routing ( Packet Flow).
     * This does not apply to routed traffic. This property is required in case you want to assign Simple Queues or global
     * Queue Tree to traffic in a bridge. Property use-ip-firewall-for-vlan is required in case bridge vlan-filtering is used.
     */
    readonly useIpFirewall: pulumi.Output<boolean | undefined>;
    /**
     * Send bridged un-encrypted PPPoE traffic to also be processed by IP/Firewall. This property only has effect when
     * use-ip-firewall is set to yes. This property is required in case you want to assign Simple Queues or global Queue Tree
     * to PPPoE traffic in a bridge.
     */
    readonly useIpFirewallForPppoe: pulumi.Output<boolean | undefined>;
    /**
     * Send bridged VLAN traffic to also be processed by IP/Firewall. This property only has effect when use-ip-firewall is set
     * to yes. This property is required in case you want to assign Simple Queues or global Queue Tree to VLAN traffic in a
     * bridge.
     */
    readonly useIpFirewallForVlan: pulumi.Output<boolean | undefined>;
    /**
     * Create a InterfaceBridgeSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceBridgeSettingsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceBridgeSettings resources.
 */
export interface InterfaceBridgeSettingsState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to enable a bridge FastPath globally.
     */
    allowFastPath?: pulumi.Input<boolean>;
    /**
     * Shows byte count forwarded by Bridge Fast Forward.
     */
    bridgeFastForwardBytes?: pulumi.Input<number>;
    /**
     * Shows packet count forwarded by Bridge Fast Forward.
     */
    bridgeFastForwardPackets?: pulumi.Input<number>;
    /**
     * Shows whether a bridge FastPath is active globally, FastPatch status per bridge interface is not displayed.
     */
    bridgeFastPathActive?: pulumi.Input<boolean>;
    /**
     * Shows byte count forwarded by Bridge Fast Path.
     */
    bridgeFastPathBytes?: pulumi.Input<number>;
    /**
     * Shows packet count forwarded by Bridge FastPath.
     */
    bridgeFastPathPackets?: pulumi.Input<number>;
    interfaceBridgeSettingsId?: pulumi.Input<string>;
    /**
     * Force bridged traffic to also be processed by prerouting, forward and postrouting sections of IP routing ( Packet Flow).
     * This does not apply to routed traffic. This property is required in case you want to assign Simple Queues or global
     * Queue Tree to traffic in a bridge. Property use-ip-firewall-for-vlan is required in case bridge vlan-filtering is used.
     */
    useIpFirewall?: pulumi.Input<boolean>;
    /**
     * Send bridged un-encrypted PPPoE traffic to also be processed by IP/Firewall. This property only has effect when
     * use-ip-firewall is set to yes. This property is required in case you want to assign Simple Queues or global Queue Tree
     * to PPPoE traffic in a bridge.
     */
    useIpFirewallForPppoe?: pulumi.Input<boolean>;
    /**
     * Send bridged VLAN traffic to also be processed by IP/Firewall. This property only has effect when use-ip-firewall is set
     * to yes. This property is required in case you want to assign Simple Queues or global Queue Tree to VLAN traffic in a
     * bridge.
     */
    useIpFirewallForVlan?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a InterfaceBridgeSettings resource.
 */
export interface InterfaceBridgeSettingsArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to enable a bridge FastPath globally.
     */
    allowFastPath?: pulumi.Input<boolean>;
    interfaceBridgeSettingsId?: pulumi.Input<string>;
    /**
     * Force bridged traffic to also be processed by prerouting, forward and postrouting sections of IP routing ( Packet Flow).
     * This does not apply to routed traffic. This property is required in case you want to assign Simple Queues or global
     * Queue Tree to traffic in a bridge. Property use-ip-firewall-for-vlan is required in case bridge vlan-filtering is used.
     */
    useIpFirewall?: pulumi.Input<boolean>;
    /**
     * Send bridged un-encrypted PPPoE traffic to also be processed by IP/Firewall. This property only has effect when
     * use-ip-firewall is set to yes. This property is required in case you want to assign Simple Queues or global Queue Tree
     * to PPPoE traffic in a bridge.
     */
    useIpFirewallForPppoe?: pulumi.Input<boolean>;
    /**
     * Send bridged VLAN traffic to also be processed by IP/Firewall. This property only has effect when use-ip-firewall is set
     * to yes. This property is required in case you want to assign Simple Queues or global Queue Tree to VLAN traffic in a
     * bridge.
     */
    useIpFirewallForVlan?: pulumi.Input<boolean>;
}
