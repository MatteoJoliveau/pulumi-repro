import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceEthernetSwitch extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceEthernetSwitch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceEthernetSwitchState, opts?: pulumi.CustomResourceOptions): InterfaceEthernetSwitch;
    /**
     * Returns true if the given object is an instance of InterfaceEthernetSwitch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceEthernetSwitch;
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
     * All switch chips have a special port that is called switchX-cpu, this is the CPU port for a switch chip, it is meant to
     * forward traffic from a switch chip to the CPU, such a port is required for management traffic and for routing features.
     * By default the switch chip ensures that this special CPU port is not congested and sends out Pause Frames when link
     * capacity is exceeded to make sure the port is not oversaturated, this feature is called CPU Flow Control. Without this
     * feature packets that might be crucial for routing or management purposes might get dropped.
     */
    readonly cpuFlowControl: pulumi.Output<boolean | undefined>;
    readonly interfaceEthernetSwitchId: pulumi.Output<string>;
    readonly invalid: pulumi.Output<boolean>;
    /**
     * Layer 3 Hardware Offloading (L3HW, otherwise known as IP switching or HW routing) allows to offload some router features
     * onto the switch chip. This allows reaching wire speeds when routing packets, which simply would not be possible with the
     * CPU.
     */
    readonly l3HwOffloading: pulumi.Output<boolean | undefined>;
    /**
     * Selects a single mirroring egress target port, only available on 88E6393X, 88E6191X and 88E6190 switch chips. Mirrored
     * packets from `mirror-egress` (see the property in port menu) will be sent to the selected port.
     */
    readonly mirrorEgressTarget: pulumi.Output<string | undefined>;
    /**
     * Selects a single mirroring source port. Ingress and egress traffic will be sent to the mirror-target port. Note that
     * mirror-target port has to belong to the same switch (see which port belongs to which switch in /interface ethernet
     * menu).
     */
    readonly mirrorSource: pulumi.Output<string | undefined>;
    /**
     * Selects a single mirroring target port. Mirrored packets from mirror-source and mirror (see the property in rule and
     * host table) will be sent to the selected port.
     */
    readonly mirrorTarget: pulumi.Output<string | undefined>;
    /**
     * Name of the switch.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Switch-chip id. Default .id = *0
     */
    readonly switchId: pulumi.Output<string | undefined>;
    /**
     * Switch-chip type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a InterfaceEthernetSwitch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceEthernetSwitchArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceEthernetSwitch resources.
 */
export interface InterfaceEthernetSwitchState {
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
     * All switch chips have a special port that is called switchX-cpu, this is the CPU port for a switch chip, it is meant to
     * forward traffic from a switch chip to the CPU, such a port is required for management traffic and for routing features.
     * By default the switch chip ensures that this special CPU port is not congested and sends out Pause Frames when link
     * capacity is exceeded to make sure the port is not oversaturated, this feature is called CPU Flow Control. Without this
     * feature packets that might be crucial for routing or management purposes might get dropped.
     */
    cpuFlowControl?: pulumi.Input<boolean>;
    interfaceEthernetSwitchId?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    /**
     * Layer 3 Hardware Offloading (L3HW, otherwise known as IP switching or HW routing) allows to offload some router features
     * onto the switch chip. This allows reaching wire speeds when routing packets, which simply would not be possible with the
     * CPU.
     */
    l3HwOffloading?: pulumi.Input<boolean>;
    /**
     * Selects a single mirroring egress target port, only available on 88E6393X, 88E6191X and 88E6190 switch chips. Mirrored
     * packets from `mirror-egress` (see the property in port menu) will be sent to the selected port.
     */
    mirrorEgressTarget?: pulumi.Input<string>;
    /**
     * Selects a single mirroring source port. Ingress and egress traffic will be sent to the mirror-target port. Note that
     * mirror-target port has to belong to the same switch (see which port belongs to which switch in /interface ethernet
     * menu).
     */
    mirrorSource?: pulumi.Input<string>;
    /**
     * Selects a single mirroring target port. Mirrored packets from mirror-source and mirror (see the property in rule and
     * host table) will be sent to the selected port.
     */
    mirrorTarget?: pulumi.Input<string>;
    /**
     * Name of the switch.
     */
    name?: pulumi.Input<string>;
    /**
     * Switch-chip id. Default .id = *0
     */
    switchId?: pulumi.Input<string>;
    /**
     * Switch-chip type.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InterfaceEthernetSwitch resource.
 */
export interface InterfaceEthernetSwitchArgs {
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
     * All switch chips have a special port that is called switchX-cpu, this is the CPU port for a switch chip, it is meant to
     * forward traffic from a switch chip to the CPU, such a port is required for management traffic and for routing features.
     * By default the switch chip ensures that this special CPU port is not congested and sends out Pause Frames when link
     * capacity is exceeded to make sure the port is not oversaturated, this feature is called CPU Flow Control. Without this
     * feature packets that might be crucial for routing or management purposes might get dropped.
     */
    cpuFlowControl?: pulumi.Input<boolean>;
    interfaceEthernetSwitchId?: pulumi.Input<string>;
    /**
     * Layer 3 Hardware Offloading (L3HW, otherwise known as IP switching or HW routing) allows to offload some router features
     * onto the switch chip. This allows reaching wire speeds when routing packets, which simply would not be possible with the
     * CPU.
     */
    l3HwOffloading?: pulumi.Input<boolean>;
    /**
     * Selects a single mirroring egress target port, only available on 88E6393X, 88E6191X and 88E6190 switch chips. Mirrored
     * packets from `mirror-egress` (see the property in port menu) will be sent to the selected port.
     */
    mirrorEgressTarget?: pulumi.Input<string>;
    /**
     * Selects a single mirroring source port. Ingress and egress traffic will be sent to the mirror-target port. Note that
     * mirror-target port has to belong to the same switch (see which port belongs to which switch in /interface ethernet
     * menu).
     */
    mirrorSource?: pulumi.Input<string>;
    /**
     * Selects a single mirroring target port. Mirrored packets from mirror-source and mirror (see the property in rule and
     * host table) will be sent to the selected port.
     */
    mirrorTarget?: pulumi.Input<string>;
    /**
     * Name of the switch.
     */
    name?: pulumi.Input<string>;
    /**
     * Switch-chip id. Default .id = *0
     */
    switchId?: pulumi.Input<string>;
}
