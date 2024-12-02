import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceEthernetSwitchPort extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceEthernetSwitchPort resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceEthernetSwitchPortState, opts?: pulumi.CustomResourceOptions): InterfaceEthernetSwitchPort;
    /**
     * Returns true if the given object is an instance of InterfaceEthernetSwitchPort.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceEthernetSwitchPort;
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
     * Adds a VLAN tag with the specified VLAN ID on all untagged ingress traffic on a port, should be used with
     * ```vlan-header``` set to ```always-strip``` on a port to configure the port to be the access port. For hybrid ports
     * ```default-vlan-id``` is used to tag untagged traffic. If two ports have the same ```default-vlan-id```, then VLAN tag
     * is not added since the switch chip assumes that traffic is being forwarded between access ports.
     */
    readonly defaultVlanId: pulumi.Output<string | undefined>;
    readonly interfaceEthernetSwitchPortId: pulumi.Output<string>;
    readonly invalid: pulumi.Output<boolean>;
    /**
     * Whether to send egress packet copy to the `mirror-egress-target` port, only available on 88E6393X, 88E6191X and 88E6190
     * switch chips.
     */
    readonly mirrorEgress: pulumi.Output<boolean | undefined>;
    /**
     * Whether to send ingress packet copy to the `mirror-ingress-target` port, only available on 88E6393X, 88E6191X and
     * 88E6190 switch chips.
     */
    readonly mirrorIngress: pulumi.Output<boolean | undefined>;
    /**
     * Selects a single mirroring ingress target port, only available on 88E6393X, 88E6191X and 88E6190 switch chips. Mirrored
     * packets from `mirror-ingress` will be sent to the selected port.
     */
    readonly mirrorIngressTarget: pulumi.Output<string | undefined>;
    /**
     * Port name.
     */
    readonly name: pulumi.Output<string>;
    readonly running: pulumi.Output<boolean>;
    /**
     * Name of the switch.
     */
    readonly switch: pulumi.Output<string>;
    /**
     * Sets action which is performed on the port for egress traffic.
     */
    readonly vlanHeader: pulumi.Output<string | undefined>;
    /**
     * Changes the VLAN lookup mechanism against the VLAN Table for ingress traffic.
     */
    readonly vlanMode: pulumi.Output<string | undefined>;
    /**
     * Create a InterfaceEthernetSwitchPort resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceEthernetSwitchPortArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceEthernetSwitchPort resources.
 */
export interface InterfaceEthernetSwitchPortState {
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
     * Adds a VLAN tag with the specified VLAN ID on all untagged ingress traffic on a port, should be used with
     * ```vlan-header``` set to ```always-strip``` on a port to configure the port to be the access port. For hybrid ports
     * ```default-vlan-id``` is used to tag untagged traffic. If two ports have the same ```default-vlan-id```, then VLAN tag
     * is not added since the switch chip assumes that traffic is being forwarded between access ports.
     */
    defaultVlanId?: pulumi.Input<string>;
    interfaceEthernetSwitchPortId?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    /**
     * Whether to send egress packet copy to the `mirror-egress-target` port, only available on 88E6393X, 88E6191X and 88E6190
     * switch chips.
     */
    mirrorEgress?: pulumi.Input<boolean>;
    /**
     * Whether to send ingress packet copy to the `mirror-ingress-target` port, only available on 88E6393X, 88E6191X and
     * 88E6190 switch chips.
     */
    mirrorIngress?: pulumi.Input<boolean>;
    /**
     * Selects a single mirroring ingress target port, only available on 88E6393X, 88E6191X and 88E6190 switch chips. Mirrored
     * packets from `mirror-ingress` will be sent to the selected port.
     */
    mirrorIngressTarget?: pulumi.Input<string>;
    /**
     * Port name.
     */
    name?: pulumi.Input<string>;
    running?: pulumi.Input<boolean>;
    /**
     * Name of the switch.
     */
    switch?: pulumi.Input<string>;
    /**
     * Sets action which is performed on the port for egress traffic.
     */
    vlanHeader?: pulumi.Input<string>;
    /**
     * Changes the VLAN lookup mechanism against the VLAN Table for ingress traffic.
     */
    vlanMode?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InterfaceEthernetSwitchPort resource.
 */
export interface InterfaceEthernetSwitchPortArgs {
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
     * Adds a VLAN tag with the specified VLAN ID on all untagged ingress traffic on a port, should be used with
     * ```vlan-header``` set to ```always-strip``` on a port to configure the port to be the access port. For hybrid ports
     * ```default-vlan-id``` is used to tag untagged traffic. If two ports have the same ```default-vlan-id```, then VLAN tag
     * is not added since the switch chip assumes that traffic is being forwarded between access ports.
     */
    defaultVlanId?: pulumi.Input<string>;
    interfaceEthernetSwitchPortId?: pulumi.Input<string>;
    /**
     * Whether to send egress packet copy to the `mirror-egress-target` port, only available on 88E6393X, 88E6191X and 88E6190
     * switch chips.
     */
    mirrorEgress?: pulumi.Input<boolean>;
    /**
     * Whether to send ingress packet copy to the `mirror-ingress-target` port, only available on 88E6393X, 88E6191X and
     * 88E6190 switch chips.
     */
    mirrorIngress?: pulumi.Input<boolean>;
    /**
     * Selects a single mirroring ingress target port, only available on 88E6393X, 88E6191X and 88E6190 switch chips. Mirrored
     * packets from `mirror-ingress` will be sent to the selected port.
     */
    mirrorIngressTarget?: pulumi.Input<string>;
    /**
     * Port name.
     */
    name?: pulumi.Input<string>;
    /**
     * Sets action which is performed on the port for egress traffic.
     */
    vlanHeader?: pulumi.Input<string>;
    /**
     * Changes the VLAN lookup mechanism against the VLAN Table for ingress traffic.
     */
    vlanMode?: pulumi.Input<string>;
}
