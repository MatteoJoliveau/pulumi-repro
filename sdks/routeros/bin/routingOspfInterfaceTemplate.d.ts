import * as pulumi from "@pulumi/pulumi";
export declare class RoutingOspfInterfaceTemplate extends pulumi.CustomResource {
    /**
     * Get an existing RoutingOspfInterfaceTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoutingOspfInterfaceTemplateState, opts?: pulumi.CustomResourceOptions): RoutingOspfInterfaceTemplate;
    /**
     * Returns true if the given object is an instance of RoutingOspfInterfaceTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RoutingOspfInterfaceTemplate;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    readonly ___unset_: pulumi.Output<string | undefined>;
    /**
     * The OSPF area to which the matching interface will be associated.
     */
    readonly area: pulumi.Output<string>;
    /**
     * Specifies authentication method for OSPF protocol messages.
     */
    readonly auth: pulumi.Output<string | undefined>;
    /**
     * The key id is used to calculate message digest (used when MD5 or SHA authentication is enabled).
     */
    readonly authId: pulumi.Output<number | undefined>;
    /**
     * The authentication key to be used, should match on all the neighbors of the network segment (available since RouterOS
     * 7.x).
     */
    readonly authKey: pulumi.Output<string | undefined>;
    /**
     * The authentication key to be used, should match on all the neighbors of the network segment (for versions before
     * RouterOS 7.x).
     */
    readonly authenticationKey: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Interface cost expressed as link state metric.
     */
    readonly cost: pulumi.Output<number | undefined>;
    /**
     * Specifies the interval after which a neighbor is declared dead.
     */
    readonly deadInterval: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * The interval between HELLO packets that the router sends out this interface.
     */
    readonly helloInterval: pulumi.Output<string | undefined>;
    readonly inactive: pulumi.Output<boolean>;
    /**
     * Interface cost expressed as link state metric.
     */
    readonly instanceId: pulumi.Output<number | undefined>;
    /**
     * Interfaces to match.
     */
    readonly interfaces: pulumi.Output<string[] | undefined>;
    /**
     * The network prefixes associated with the area.
     */
    readonly networks: pulumi.Output<string[] | undefined>;
    /**
     * If enabled, then do not send or receive OSPF traffic on the matching interfaces. <em>The correct value of this attribute
     * may not be displayed in Winbox. Please check the parameters in the console!</em>
     */
    readonly passive: pulumi.Output<boolean | undefined>;
    /**
     * Name of the address list containing networks that should be advertised to the v3 interface.
     */
    readonly prefixList: pulumi.Output<string | undefined>;
    /**
     * Router's priority. Used to determine the designated router in a broadcast network.
     */
    readonly priority: pulumi.Output<number | undefined>;
    /**
     * Time interval the lost link state advertisement will be resent.
     */
    readonly retransmitInterval: pulumi.Output<string | undefined>;
    readonly routingOspfInterfaceTemplateId: pulumi.Output<string>;
    /**
     * Link-state transmit delay is the estimated time it takes to transmit a link-state update packet on the interface.
     */
    readonly transmitDelay: pulumi.Output<string | undefined>;
    /**
     * The OSPF network type on this interface.
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Specifies the router-id of the neighbor which should be connected over the virtual link.
     */
    readonly vlinkNeighborId: pulumi.Output<string | undefined>;
    /**
     * A non-backbone area the two routers have in common over which the virtual link will be established.
     */
    readonly vlinkTransitArea: pulumi.Output<string | undefined>;
    /**
     * Create a RoutingOspfInterfaceTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoutingOspfInterfaceTemplateArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RoutingOspfInterfaceTemplate resources.
 */
export interface RoutingOspfInterfaceTemplateState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    ___unset_?: pulumi.Input<string>;
    /**
     * The OSPF area to which the matching interface will be associated.
     */
    area?: pulumi.Input<string>;
    /**
     * Specifies authentication method for OSPF protocol messages.
     */
    auth?: pulumi.Input<string>;
    /**
     * The key id is used to calculate message digest (used when MD5 or SHA authentication is enabled).
     */
    authId?: pulumi.Input<number>;
    /**
     * The authentication key to be used, should match on all the neighbors of the network segment (available since RouterOS
     * 7.x).
     */
    authKey?: pulumi.Input<string>;
    /**
     * The authentication key to be used, should match on all the neighbors of the network segment (for versions before
     * RouterOS 7.x).
     */
    authenticationKey?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Interface cost expressed as link state metric.
     */
    cost?: pulumi.Input<number>;
    /**
     * Specifies the interval after which a neighbor is declared dead.
     */
    deadInterval?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The interval between HELLO packets that the router sends out this interface.
     */
    helloInterval?: pulumi.Input<string>;
    inactive?: pulumi.Input<boolean>;
    /**
     * Interface cost expressed as link state metric.
     */
    instanceId?: pulumi.Input<number>;
    /**
     * Interfaces to match.
     */
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The network prefixes associated with the area.
     */
    networks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If enabled, then do not send or receive OSPF traffic on the matching interfaces. <em>The correct value of this attribute
     * may not be displayed in Winbox. Please check the parameters in the console!</em>
     */
    passive?: pulumi.Input<boolean>;
    /**
     * Name of the address list containing networks that should be advertised to the v3 interface.
     */
    prefixList?: pulumi.Input<string>;
    /**
     * Router's priority. Used to determine the designated router in a broadcast network.
     */
    priority?: pulumi.Input<number>;
    /**
     * Time interval the lost link state advertisement will be resent.
     */
    retransmitInterval?: pulumi.Input<string>;
    routingOspfInterfaceTemplateId?: pulumi.Input<string>;
    /**
     * Link-state transmit delay is the estimated time it takes to transmit a link-state update packet on the interface.
     */
    transmitDelay?: pulumi.Input<string>;
    /**
     * The OSPF network type on this interface.
     */
    type?: pulumi.Input<string>;
    /**
     * Specifies the router-id of the neighbor which should be connected over the virtual link.
     */
    vlinkNeighborId?: pulumi.Input<string>;
    /**
     * A non-backbone area the two routers have in common over which the virtual link will be established.
     */
    vlinkTransitArea?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a RoutingOspfInterfaceTemplate resource.
 */
export interface RoutingOspfInterfaceTemplateArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    ___unset_?: pulumi.Input<string>;
    /**
     * The OSPF area to which the matching interface will be associated.
     */
    area: pulumi.Input<string>;
    /**
     * Specifies authentication method for OSPF protocol messages.
     */
    auth?: pulumi.Input<string>;
    /**
     * The key id is used to calculate message digest (used when MD5 or SHA authentication is enabled).
     */
    authId?: pulumi.Input<number>;
    /**
     * The authentication key to be used, should match on all the neighbors of the network segment (available since RouterOS
     * 7.x).
     */
    authKey?: pulumi.Input<string>;
    /**
     * The authentication key to be used, should match on all the neighbors of the network segment (for versions before
     * RouterOS 7.x).
     */
    authenticationKey?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Interface cost expressed as link state metric.
     */
    cost?: pulumi.Input<number>;
    /**
     * Specifies the interval after which a neighbor is declared dead.
     */
    deadInterval?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The interval between HELLO packets that the router sends out this interface.
     */
    helloInterval?: pulumi.Input<string>;
    /**
     * Interface cost expressed as link state metric.
     */
    instanceId?: pulumi.Input<number>;
    /**
     * Interfaces to match.
     */
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The network prefixes associated with the area.
     */
    networks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If enabled, then do not send or receive OSPF traffic on the matching interfaces. <em>The correct value of this attribute
     * may not be displayed in Winbox. Please check the parameters in the console!</em>
     */
    passive?: pulumi.Input<boolean>;
    /**
     * Name of the address list containing networks that should be advertised to the v3 interface.
     */
    prefixList?: pulumi.Input<string>;
    /**
     * Router's priority. Used to determine the designated router in a broadcast network.
     */
    priority?: pulumi.Input<number>;
    /**
     * Time interval the lost link state advertisement will be resent.
     */
    retransmitInterval?: pulumi.Input<string>;
    routingOspfInterfaceTemplateId?: pulumi.Input<string>;
    /**
     * Link-state transmit delay is the estimated time it takes to transmit a link-state update packet on the interface.
     */
    transmitDelay?: pulumi.Input<string>;
    /**
     * The OSPF network type on this interface.
     */
    type?: pulumi.Input<string>;
    /**
     * Specifies the router-id of the neighbor which should be connected over the virtual link.
     */
    vlinkNeighborId?: pulumi.Input<string>;
    /**
     * A non-backbone area the two routers have in common over which the virtual link will be established.
     */
    vlinkTransitArea?: pulumi.Input<string>;
}
