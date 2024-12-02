import * as pulumi from "@pulumi/pulumi";
export declare class BridgePort extends pulumi.CustomResource {
    /**
     * Get an existing BridgePort resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BridgePortState, opts?: pulumi.CustomResourceOptions): BridgePort;
    /**
     * Returns true if the given object is an instance of BridgePort.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BridgePort;
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
    readonly ___skip_: pulumi.Output<string | undefined>;
    /**
     * When enabled, prevents a port moving from discarding into forwarding state if no BPDUs are received from the neighboring
     * bridge. The port will change into a forwarding state only when a BPDU is received. This property only has an effect when
     * protocol-mode is set to rstp or mstp and edge is set to no.
     */
    readonly autoIsolate: pulumi.Output<boolean | undefined>;
    /**
     * This property has no effect when protocol-mode is set to none.
     */
    readonly bpduGuard: pulumi.Output<boolean | undefined>;
    readonly bridge: pulumi.Output<string>;
    readonly bridgePortId: pulumi.Output<string>;
    /**
     * When enabled, bridge floods broadcast traffic to all bridge egress ports. When disabled, drops broadcast traffic on
     * egress ports.
     */
    readonly broadcastFlood: pulumi.Output<boolean | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Root bridge ID (bridge priority and the bridge MAC address).
     */
    readonly designatedBridge: pulumi.Output<string>;
    /**
     * Designated cost.
     */
    readonly designatedCost: pulumi.Output<string>;
    /**
     * Designated port number.
     */
    readonly designatedPortNumber: pulumi.Output<number>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * Set port as edge port or non-edge port, or enable edge discovery. Edge ports are connected to a LAN that has no other
     * bridges attached.
     */
    readonly edge: pulumi.Output<string | undefined>;
    /**
     * Whether port is an edge port or not.
     */
    readonly edgePort: pulumi.Output<boolean>;
    /**
     * Whether port is set to automatically detect edge ports.
     */
    readonly edgePortDiscovery: pulumi.Output<boolean>;
    /**
     * Whether registration table is used instead of forwarding data base.
     */
    readonly externalFdbStatus: pulumi.Output<boolean>;
    /**
     * Enables IGMP Fast leave feature on the port.
     */
    readonly fastLeave: pulumi.Output<boolean | undefined>;
    /**
     * Shows if the port is not blocked by (R/M)STP.
     */
    readonly forwarding: pulumi.Output<boolean>;
    /**
     * Specifies allowed ingress frame types on a bridge port. This property only has effect when vlan-filtering is set to yes.
     */
    readonly frameTypes: pulumi.Output<string | undefined>;
    /**
     * Use split horizon bridging to prevent bridging loops. Set the same value for group of ports, to prevent them from
     * sending data to ports with the same horizon value. Split horizon is a software feature that disables hardware
     * offloading. This value is integer '0'..'429496729' or 'none'.
     */
    readonly horizon: pulumi.Output<string | undefined>;
    /**
     * Enable or disable Hardware Offloading of the interface.
     */
    readonly hw: pulumi.Output<boolean>;
    /**
     * Hardware offloading state.
     */
    readonly hwOffload: pulumi.Output<boolean>;
    /**
     * Switch chip used by the port.
     */
    readonly hwOffloadGroup: pulumi.Output<string>;
    readonly inactive: pulumi.Output<boolean>;
    /**
     * Enables or disables VLAN ingress filtering, which checks if the ingress port is a member of the received VLAN ID in the
     * bridge VLAN table. Should be used with frame-types to specify if the ingress traffic should be tagged or untagged. This
     * property only has effect when vlan-filtering is set to yes.
     */
    readonly ingressFiltering: pulumi.Output<boolean>;
    /**
     * Name of the interface.
     */
    readonly interface: pulumi.Output<string>;
    /**
     * Path cost to the interface for MSTI0 inside a region. This property only has effect when protocol-mode is set to mstp.
     */
    readonly internalPathCost: pulumi.Output<number | undefined>;
    /**
     * Changes MAC learning behaviour on a bridge port
     */
    readonly learn: pulumi.Output<string | undefined>;
    /**
     * Shows whether the port is capable of learning MAC addresses.
     */
    readonly learning: pulumi.Output<boolean>;
    /**
     * Changes the state of a bridge port whether IGMP membership reports are going to be forwarded to this port.
     */
    readonly multicastRouter: pulumi.Output<string | undefined>;
    /**
     * MVRP applicant options (available since RouterOS 7.15): - non-participant - port does not send any MRP messages; -
     * normal-participant - port participates normally in MRP exchanges.
     */
    readonly mvrpApplicantState: pulumi.Output<string | undefined>;
    /**
     * MVRP registrar options (available since RouterOS 7.15): - fixed - port ignores all MRP messages, and remains Registered
     * (IN) in all configured vlans. - normal - port receives MRP messages and handles them according to the standard.
     */
    readonly mvrpRegistrarState: pulumi.Output<string | undefined>;
    readonly nextid: pulumi.Output<string>;
    /**
     * Path cost to the interface, used by STP to determine the "best" path, used by MSTP todetermine "best" path between
     * regions. This property has no effect when protocol-mode is set to none.
     */
    readonly pathCost: pulumi.Output<string | undefined>;
    /**
     * Specifies if a bridge port is connected to a bridge using a point-to-point link for faster convergence in case of
     * failure. This property has no effect when protocol-mode is set to none.
     */
    readonly pointToPoint: pulumi.Output<string | undefined>;
    /**
     * Whether the port is connected to a bridge port using full-duplex (true) or half-duplex (false).
     */
    readonly pointToPointPort: pulumi.Output<boolean>;
    /**
     * The priority of the interface, used by STP to determine the root port, used by MSTP to determine root port between
     * regions.
     */
    readonly priority: pulumi.Output<string | undefined>;
    /**
     * ort VLAN ID (pvid) specifies which VLAN the untagged ingress traffic is assigned to. This property only has effect when
     * vlan-filtering is set to yes.
     */
    readonly pvid: pulumi.Output<number | undefined>;
    /**
     * Enable the restricted role on a port, used by STP to forbid a port becoming a root port. This property only has effect
     * when protocol-mode is set to mstp.
     */
    readonly restrictedRole: pulumi.Output<boolean | undefined>;
    /**
     * Disable topology change notification (TCN) sending on a port, used by STP to forbid network topology changes to
     * propagate. This property only has effect when protocol-mode is set to mstp.
     */
    readonly restrictedTcn: pulumi.Output<boolean | undefined>;
    /**
     * (R/M)STP algorithm assigned role of the port
     */
    readonly role: pulumi.Output<string>;
    /**
     * The total cost of the path to the root-bridge.
     */
    readonly rootPathCost: pulumi.Output<number>;
    /**
     * Whether the port is sending RSTP or MSTP BPDU types. A port will transit to STP type when RSTP/MSTP enabled port
     * receives a STP BPDU
     */
    readonly sendingRstp: pulumi.Output<string>;
    /**
     * Port status ('in-bridge' - port is enabled).
     */
    readonly status: pulumi.Output<string>;
    /**
     * Forces all packets to be treated as untagged packets. Packets on ingress port will be tagged with another VLAN tag
     * regardless if a VLAN tag already exists, packets will be tagged with a VLAN ID that matches the pvid value and will use
     * EtherType that is specified in ether-type. This property only has effect when vlan-filtering is set to yes.
     */
    readonly tagStacking: pulumi.Output<boolean | undefined>;
    /**
     * When enabled, it allows to forward DHCP packets towards DHCP server through this port. Mainly used to limit unauthorized
     * servers to provide malicious information for users. This property only has effect when dhcp-snooping is set to yes.
     */
    readonly trusted: pulumi.Output<boolean | undefined>;
    /**
     * When enabled, bridge floods unknown multicast traffic to all bridge egress ports.
     */
    readonly unknownMulticastFlood: pulumi.Output<boolean | undefined>;
    /**
     * When enabled, bridge floods unknown unicast traffic to all bridge egress ports.
     */
    readonly unknownUnicastFlood: pulumi.Output<boolean | undefined>;
    /**
     * Create a BridgePort resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BridgePortArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BridgePort resources.
 */
export interface BridgePortState {
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
    ___skip_?: pulumi.Input<string>;
    /**
     * When enabled, prevents a port moving from discarding into forwarding state if no BPDUs are received from the neighboring
     * bridge. The port will change into a forwarding state only when a BPDU is received. This property only has an effect when
     * protocol-mode is set to rstp or mstp and edge is set to no.
     */
    autoIsolate?: pulumi.Input<boolean>;
    /**
     * This property has no effect when protocol-mode is set to none.
     */
    bpduGuard?: pulumi.Input<boolean>;
    bridge?: pulumi.Input<string>;
    bridgePortId?: pulumi.Input<string>;
    /**
     * When enabled, bridge floods broadcast traffic to all bridge egress ports. When disabled, drops broadcast traffic on
     * egress ports.
     */
    broadcastFlood?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    /**
     * Root bridge ID (bridge priority and the bridge MAC address).
     */
    designatedBridge?: pulumi.Input<string>;
    /**
     * Designated cost.
     */
    designatedCost?: pulumi.Input<string>;
    /**
     * Designated port number.
     */
    designatedPortNumber?: pulumi.Input<number>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * Set port as edge port or non-edge port, or enable edge discovery. Edge ports are connected to a LAN that has no other
     * bridges attached.
     */
    edge?: pulumi.Input<string>;
    /**
     * Whether port is an edge port or not.
     */
    edgePort?: pulumi.Input<boolean>;
    /**
     * Whether port is set to automatically detect edge ports.
     */
    edgePortDiscovery?: pulumi.Input<boolean>;
    /**
     * Whether registration table is used instead of forwarding data base.
     */
    externalFdbStatus?: pulumi.Input<boolean>;
    /**
     * Enables IGMP Fast leave feature on the port.
     */
    fastLeave?: pulumi.Input<boolean>;
    /**
     * Shows if the port is not blocked by (R/M)STP.
     */
    forwarding?: pulumi.Input<boolean>;
    /**
     * Specifies allowed ingress frame types on a bridge port. This property only has effect when vlan-filtering is set to yes.
     */
    frameTypes?: pulumi.Input<string>;
    /**
     * Use split horizon bridging to prevent bridging loops. Set the same value for group of ports, to prevent them from
     * sending data to ports with the same horizon value. Split horizon is a software feature that disables hardware
     * offloading. This value is integer '0'..'429496729' or 'none'.
     */
    horizon?: pulumi.Input<string>;
    /**
     * Enable or disable Hardware Offloading of the interface.
     */
    hw?: pulumi.Input<boolean>;
    /**
     * Hardware offloading state.
     */
    hwOffload?: pulumi.Input<boolean>;
    /**
     * Switch chip used by the port.
     */
    hwOffloadGroup?: pulumi.Input<string>;
    inactive?: pulumi.Input<boolean>;
    /**
     * Enables or disables VLAN ingress filtering, which checks if the ingress port is a member of the received VLAN ID in the
     * bridge VLAN table. Should be used with frame-types to specify if the ingress traffic should be tagged or untagged. This
     * property only has effect when vlan-filtering is set to yes.
     */
    ingressFiltering?: pulumi.Input<boolean>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
    /**
     * Path cost to the interface for MSTI0 inside a region. This property only has effect when protocol-mode is set to mstp.
     */
    internalPathCost?: pulumi.Input<number>;
    /**
     * Changes MAC learning behaviour on a bridge port
     */
    learn?: pulumi.Input<string>;
    /**
     * Shows whether the port is capable of learning MAC addresses.
     */
    learning?: pulumi.Input<boolean>;
    /**
     * Changes the state of a bridge port whether IGMP membership reports are going to be forwarded to this port.
     */
    multicastRouter?: pulumi.Input<string>;
    /**
     * MVRP applicant options (available since RouterOS 7.15): - non-participant - port does not send any MRP messages; -
     * normal-participant - port participates normally in MRP exchanges.
     */
    mvrpApplicantState?: pulumi.Input<string>;
    /**
     * MVRP registrar options (available since RouterOS 7.15): - fixed - port ignores all MRP messages, and remains Registered
     * (IN) in all configured vlans. - normal - port receives MRP messages and handles them according to the standard.
     */
    mvrpRegistrarState?: pulumi.Input<string>;
    nextid?: pulumi.Input<string>;
    /**
     * Path cost to the interface, used by STP to determine the "best" path, used by MSTP todetermine "best" path between
     * regions. This property has no effect when protocol-mode is set to none.
     */
    pathCost?: pulumi.Input<string>;
    /**
     * Specifies if a bridge port is connected to a bridge using a point-to-point link for faster convergence in case of
     * failure. This property has no effect when protocol-mode is set to none.
     */
    pointToPoint?: pulumi.Input<string>;
    /**
     * Whether the port is connected to a bridge port using full-duplex (true) or half-duplex (false).
     */
    pointToPointPort?: pulumi.Input<boolean>;
    /**
     * The priority of the interface, used by STP to determine the root port, used by MSTP to determine root port between
     * regions.
     */
    priority?: pulumi.Input<string>;
    /**
     * ort VLAN ID (pvid) specifies which VLAN the untagged ingress traffic is assigned to. This property only has effect when
     * vlan-filtering is set to yes.
     */
    pvid?: pulumi.Input<number>;
    /**
     * Enable the restricted role on a port, used by STP to forbid a port becoming a root port. This property only has effect
     * when protocol-mode is set to mstp.
     */
    restrictedRole?: pulumi.Input<boolean>;
    /**
     * Disable topology change notification (TCN) sending on a port, used by STP to forbid network topology changes to
     * propagate. This property only has effect when protocol-mode is set to mstp.
     */
    restrictedTcn?: pulumi.Input<boolean>;
    /**
     * (R/M)STP algorithm assigned role of the port
     */
    role?: pulumi.Input<string>;
    /**
     * The total cost of the path to the root-bridge.
     */
    rootPathCost?: pulumi.Input<number>;
    /**
     * Whether the port is sending RSTP or MSTP BPDU types. A port will transit to STP type when RSTP/MSTP enabled port
     * receives a STP BPDU
     */
    sendingRstp?: pulumi.Input<string>;
    /**
     * Port status ('in-bridge' - port is enabled).
     */
    status?: pulumi.Input<string>;
    /**
     * Forces all packets to be treated as untagged packets. Packets on ingress port will be tagged with another VLAN tag
     * regardless if a VLAN tag already exists, packets will be tagged with a VLAN ID that matches the pvid value and will use
     * EtherType that is specified in ether-type. This property only has effect when vlan-filtering is set to yes.
     */
    tagStacking?: pulumi.Input<boolean>;
    /**
     * When enabled, it allows to forward DHCP packets towards DHCP server through this port. Mainly used to limit unauthorized
     * servers to provide malicious information for users. This property only has effect when dhcp-snooping is set to yes.
     */
    trusted?: pulumi.Input<boolean>;
    /**
     * When enabled, bridge floods unknown multicast traffic to all bridge egress ports.
     */
    unknownMulticastFlood?: pulumi.Input<boolean>;
    /**
     * When enabled, bridge floods unknown unicast traffic to all bridge egress ports.
     */
    unknownUnicastFlood?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a BridgePort resource.
 */
export interface BridgePortArgs {
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
    ___skip_?: pulumi.Input<string>;
    /**
     * When enabled, prevents a port moving from discarding into forwarding state if no BPDUs are received from the neighboring
     * bridge. The port will change into a forwarding state only when a BPDU is received. This property only has an effect when
     * protocol-mode is set to rstp or mstp and edge is set to no.
     */
    autoIsolate?: pulumi.Input<boolean>;
    /**
     * This property has no effect when protocol-mode is set to none.
     */
    bpduGuard?: pulumi.Input<boolean>;
    bridge: pulumi.Input<string>;
    bridgePortId?: pulumi.Input<string>;
    /**
     * When enabled, bridge floods broadcast traffic to all bridge egress ports. When disabled, drops broadcast traffic on
     * egress ports.
     */
    broadcastFlood?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Set port as edge port or non-edge port, or enable edge discovery. Edge ports are connected to a LAN that has no other
     * bridges attached.
     */
    edge?: pulumi.Input<string>;
    /**
     * Enables IGMP Fast leave feature on the port.
     */
    fastLeave?: pulumi.Input<boolean>;
    /**
     * Specifies allowed ingress frame types on a bridge port. This property only has effect when vlan-filtering is set to yes.
     */
    frameTypes?: pulumi.Input<string>;
    /**
     * Use split horizon bridging to prevent bridging loops. Set the same value for group of ports, to prevent them from
     * sending data to ports with the same horizon value. Split horizon is a software feature that disables hardware
     * offloading. This value is integer '0'..'429496729' or 'none'.
     */
    horizon?: pulumi.Input<string>;
    /**
     * Enable or disable Hardware Offloading of the interface.
     */
    hw?: pulumi.Input<boolean>;
    /**
     * Enables or disables VLAN ingress filtering, which checks if the ingress port is a member of the received VLAN ID in the
     * bridge VLAN table. Should be used with frame-types to specify if the ingress traffic should be tagged or untagged. This
     * property only has effect when vlan-filtering is set to yes.
     */
    ingressFiltering?: pulumi.Input<boolean>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
    /**
     * Path cost to the interface for MSTI0 inside a region. This property only has effect when protocol-mode is set to mstp.
     */
    internalPathCost?: pulumi.Input<number>;
    /**
     * Changes MAC learning behaviour on a bridge port
     */
    learn?: pulumi.Input<string>;
    /**
     * Changes the state of a bridge port whether IGMP membership reports are going to be forwarded to this port.
     */
    multicastRouter?: pulumi.Input<string>;
    /**
     * MVRP applicant options (available since RouterOS 7.15): - non-participant - port does not send any MRP messages; -
     * normal-participant - port participates normally in MRP exchanges.
     */
    mvrpApplicantState?: pulumi.Input<string>;
    /**
     * MVRP registrar options (available since RouterOS 7.15): - fixed - port ignores all MRP messages, and remains Registered
     * (IN) in all configured vlans. - normal - port receives MRP messages and handles them according to the standard.
     */
    mvrpRegistrarState?: pulumi.Input<string>;
    /**
     * Path cost to the interface, used by STP to determine the "best" path, used by MSTP todetermine "best" path between
     * regions. This property has no effect when protocol-mode is set to none.
     */
    pathCost?: pulumi.Input<string>;
    /**
     * Specifies if a bridge port is connected to a bridge using a point-to-point link for faster convergence in case of
     * failure. This property has no effect when protocol-mode is set to none.
     */
    pointToPoint?: pulumi.Input<string>;
    /**
     * The priority of the interface, used by STP to determine the root port, used by MSTP to determine root port between
     * regions.
     */
    priority?: pulumi.Input<string>;
    /**
     * ort VLAN ID (pvid) specifies which VLAN the untagged ingress traffic is assigned to. This property only has effect when
     * vlan-filtering is set to yes.
     */
    pvid?: pulumi.Input<number>;
    /**
     * Enable the restricted role on a port, used by STP to forbid a port becoming a root port. This property only has effect
     * when protocol-mode is set to mstp.
     */
    restrictedRole?: pulumi.Input<boolean>;
    /**
     * Disable topology change notification (TCN) sending on a port, used by STP to forbid network topology changes to
     * propagate. This property only has effect when protocol-mode is set to mstp.
     */
    restrictedTcn?: pulumi.Input<boolean>;
    /**
     * Forces all packets to be treated as untagged packets. Packets on ingress port will be tagged with another VLAN tag
     * regardless if a VLAN tag already exists, packets will be tagged with a VLAN ID that matches the pvid value and will use
     * EtherType that is specified in ether-type. This property only has effect when vlan-filtering is set to yes.
     */
    tagStacking?: pulumi.Input<boolean>;
    /**
     * When enabled, it allows to forward DHCP packets towards DHCP server through this port. Mainly used to limit unauthorized
     * servers to provide malicious information for users. This property only has effect when dhcp-snooping is set to yes.
     */
    trusted?: pulumi.Input<boolean>;
    /**
     * When enabled, bridge floods unknown multicast traffic to all bridge egress ports.
     */
    unknownMulticastFlood?: pulumi.Input<boolean>;
    /**
     * When enabled, bridge floods unknown unicast traffic to all bridge egress ports.
     */
    unknownUnicastFlood?: pulumi.Input<boolean>;
}
