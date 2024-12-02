import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class RoutingBgpTemplate extends pulumi.CustomResource {
    /**
     * Get an existing RoutingBgpTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoutingBgpTemplateState, opts?: pulumi.CustomResourceOptions): RoutingBgpTemplate;
    /**
     * Returns true if the given object is an instance of RoutingBgpTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RoutingBgpTemplate;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly addPathOut: pulumi.Output<string | undefined>;
    /**
     * List of address families about which this peer will exchange routing information. The remote peer must support (they
     * usually do) BGP capabilities optional parameter to negotiate any other families than IP.
     */
    readonly addressFamilies: pulumi.Output<string | undefined>;
    /**
     * 32-bit BGP autonomous system number. Value can be entered in AS-Plain and AS-Dot formats. The parameter is also used to
     * set up the BGP confederation, in the following format: confederation_as/as . For example, if your AS is 34 and your
     * confederation AS is 43, then as configuration should be as =43/34.
     */
    readonly as: pulumi.Output<string>;
    /**
     * If set, then all instances of the remote peer's AS number in the BGP AS-PATH attribute are replaced with the local AS
     * number before sending a route update to that peer. Happens before routing filters and prepending.
     */
    readonly asOverride: pulumi.Output<boolean | undefined>;
    /**
     * VPLS NLRI length format type. Used for compatibility with Cisco VPLS.
     */
    readonly ciscoVplsNlriLenFmt: pulumi.Output<string | undefined>;
    /**
     * In case this instance is a route reflector: the cluster ID of the router reflector cluster to this instance belongs.
     * This attribute helps to recognize routing updates that come from another route reflector in this cluster and avoid
     * routing information looping. Note that normally there is only one route reflector in a cluster; in this case,
     * 'cluster-id' does not need to be configured and BGP router ID is used instead.
     */
    readonly clusterId: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * It's the default item.
     */
    readonly default: pulumi.Output<boolean>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the BGP Hold Time value to use when negotiating with peers. According to the BGP specification, if the router
     * does not receive successive KEEPALIVE and/or UPDATE and/or NOTIFICATION messages within the period specified in the Hold
     * Time field of the OPEN message, then the BGP connection to the peer will be closed. The minimal hold-time value of both
     * peers will be actually used (note that the special value 0 or 'infinity' is lower than any other value) infinity - never
     * expire the connection and never send keepalive messages.
     */
    readonly holdTime: pulumi.Output<string>;
    /**
     * A group of parameters associated with BGP input.
     */
    readonly input: pulumi.Output<outputs.RoutingBgpTemplateInput | undefined>;
    /**
     * How long to keep the BGP session open after the last received 'keepalive' message.
     */
    readonly keepaliveTime: pulumi.Output<string | undefined>;
    /**
     * Specifies whether the remote peer is more than one hop away. This option affects outgoing next-hop selection as
     * described in RFC 4271 (for EBGP only, excluding EBGP peers local to the confederation). It also affects: whether to
     * accept connections from peers that are not in the same network (the remote address of the connection is used for this
     * check); whether to accept incoming routes with NEXT_HOP attribute that is not in the same network as the address used to
     * establish the connection; the target-scope of the routes installed from this peer; routes from multi-hop or IBGP peers
     * resolve their next-hops through IGP routes by default.
     */
    readonly multihop: pulumi.Output<boolean | undefined>;
    /**
     * Name of the BGP template.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Affects the outgoing NEXT_HOP attribute selection. Note that next-hops set in filters always take precedence. Also note
     * that the next-hop is not changed on route reflection, except when it's set in the filter. default - select the next-hop
     * as described in RFC 4271 force-self - always use a local address of the interface that is used to connect to the peer as
     * the next-hop; propagate - try to propagate further the next-hop received; i.e. if the route has BGP NEXT_HOP attribute,
     * then use it as the next-hop, otherwise, fall back to the default case.
     */
    readonly nexthopChoice: pulumi.Output<string | undefined>;
    /**
     * A group of parameters associated with BGP output.
     */
    readonly output: pulumi.Output<outputs.RoutingBgpTemplateOutput | undefined>;
    /**
     * If set, then the BGP AS-PATH attribute is removed before sending out route updates if the attribute contains only
     * private AS numbers. The removal process happens before routing filters are applied and before the local, AS number is
     * prepended to the AS path.
     */
    readonly removePrivateAs: pulumi.Output<boolean | undefined>;
    /**
     * BGP Router ID to be used. Use the ID from the /routing/router-id configuration by specifying the reference name, or set
     * the ID directly by specifying IP. Equal router-ids are also used to group peers into one instance.
     */
    readonly routerId: pulumi.Output<string | undefined>;
    readonly routingBgpTemplateId: pulumi.Output<string>;
    /**
     * Name of the routing table, to install routes in.
     */
    readonly routingTable: pulumi.Output<string>;
    /**
     * Filename to be used to save BGP protocol-specific packet content (Exported PDU) into pcap file. This method allows much
     * simpler peer-specific packet capturing for debugging purposes. Pcap files in this format can also be loaded to create
     * virtual BGP peers to recreate conditions that happened at the time when packet capture was running.
     */
    readonly saveTo: pulumi.Output<string | undefined>;
    /**
     * List of template names from which to inherit parameters. Useful feature, to easily configure groups with overlapping
     * configuration options.
     */
    readonly templates: pulumi.Output<string[] | undefined>;
    /**
     * Whether to use the BFD protocol for faster connection state detection.
     */
    readonly useBfd: pulumi.Output<boolean | undefined>;
    /**
     * The VRF table this resource operates on.
     */
    readonly vrf: pulumi.Output<string | undefined>;
    /**
     * Create a RoutingBgpTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoutingBgpTemplateArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RoutingBgpTemplate resources.
 */
export interface RoutingBgpTemplateState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    addPathOut?: pulumi.Input<string>;
    /**
     * List of address families about which this peer will exchange routing information. The remote peer must support (they
     * usually do) BGP capabilities optional parameter to negotiate any other families than IP.
     */
    addressFamilies?: pulumi.Input<string>;
    /**
     * 32-bit BGP autonomous system number. Value can be entered in AS-Plain and AS-Dot formats. The parameter is also used to
     * set up the BGP confederation, in the following format: confederation_as/as . For example, if your AS is 34 and your
     * confederation AS is 43, then as configuration should be as =43/34.
     */
    as?: pulumi.Input<string>;
    /**
     * If set, then all instances of the remote peer's AS number in the BGP AS-PATH attribute are replaced with the local AS
     * number before sending a route update to that peer. Happens before routing filters and prepending.
     */
    asOverride?: pulumi.Input<boolean>;
    /**
     * VPLS NLRI length format type. Used for compatibility with Cisco VPLS.
     */
    ciscoVplsNlriLenFmt?: pulumi.Input<string>;
    /**
     * In case this instance is a route reflector: the cluster ID of the router reflector cluster to this instance belongs.
     * This attribute helps to recognize routing updates that come from another route reflector in this cluster and avoid
     * routing information looping. Note that normally there is only one route reflector in a cluster; in this case,
     * 'cluster-id' does not need to be configured and BGP router ID is used instead.
     */
    clusterId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Specifies the BGP Hold Time value to use when negotiating with peers. According to the BGP specification, if the router
     * does not receive successive KEEPALIVE and/or UPDATE and/or NOTIFICATION messages within the period specified in the Hold
     * Time field of the OPEN message, then the BGP connection to the peer will be closed. The minimal hold-time value of both
     * peers will be actually used (note that the special value 0 or 'infinity' is lower than any other value) infinity - never
     * expire the connection and never send keepalive messages.
     */
    holdTime?: pulumi.Input<string>;
    /**
     * A group of parameters associated with BGP input.
     */
    input?: pulumi.Input<inputs.RoutingBgpTemplateInput>;
    /**
     * How long to keep the BGP session open after the last received 'keepalive' message.
     */
    keepaliveTime?: pulumi.Input<string>;
    /**
     * Specifies whether the remote peer is more than one hop away. This option affects outgoing next-hop selection as
     * described in RFC 4271 (for EBGP only, excluding EBGP peers local to the confederation). It also affects: whether to
     * accept connections from peers that are not in the same network (the remote address of the connection is used for this
     * check); whether to accept incoming routes with NEXT_HOP attribute that is not in the same network as the address used to
     * establish the connection; the target-scope of the routes installed from this peer; routes from multi-hop or IBGP peers
     * resolve their next-hops through IGP routes by default.
     */
    multihop?: pulumi.Input<boolean>;
    /**
     * Name of the BGP template.
     */
    name?: pulumi.Input<string>;
    /**
     * Affects the outgoing NEXT_HOP attribute selection. Note that next-hops set in filters always take precedence. Also note
     * that the next-hop is not changed on route reflection, except when it's set in the filter. default - select the next-hop
     * as described in RFC 4271 force-self - always use a local address of the interface that is used to connect to the peer as
     * the next-hop; propagate - try to propagate further the next-hop received; i.e. if the route has BGP NEXT_HOP attribute,
     * then use it as the next-hop, otherwise, fall back to the default case.
     */
    nexthopChoice?: pulumi.Input<string>;
    /**
     * A group of parameters associated with BGP output.
     */
    output?: pulumi.Input<inputs.RoutingBgpTemplateOutput>;
    /**
     * If set, then the BGP AS-PATH attribute is removed before sending out route updates if the attribute contains only
     * private AS numbers. The removal process happens before routing filters are applied and before the local, AS number is
     * prepended to the AS path.
     */
    removePrivateAs?: pulumi.Input<boolean>;
    /**
     * BGP Router ID to be used. Use the ID from the /routing/router-id configuration by specifying the reference name, or set
     * the ID directly by specifying IP. Equal router-ids are also used to group peers into one instance.
     */
    routerId?: pulumi.Input<string>;
    routingBgpTemplateId?: pulumi.Input<string>;
    /**
     * Name of the routing table, to install routes in.
     */
    routingTable?: pulumi.Input<string>;
    /**
     * Filename to be used to save BGP protocol-specific packet content (Exported PDU) into pcap file. This method allows much
     * simpler peer-specific packet capturing for debugging purposes. Pcap files in this format can also be loaded to create
     * virtual BGP peers to recreate conditions that happened at the time when packet capture was running.
     */
    saveTo?: pulumi.Input<string>;
    /**
     * List of template names from which to inherit parameters. Useful feature, to easily configure groups with overlapping
     * configuration options.
     */
    templates?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to use the BFD protocol for faster connection state detection.
     */
    useBfd?: pulumi.Input<boolean>;
    /**
     * The VRF table this resource operates on.
     */
    vrf?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a RoutingBgpTemplate resource.
 */
export interface RoutingBgpTemplateArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    addPathOut?: pulumi.Input<string>;
    /**
     * List of address families about which this peer will exchange routing information. The remote peer must support (they
     * usually do) BGP capabilities optional parameter to negotiate any other families than IP.
     */
    addressFamilies?: pulumi.Input<string>;
    /**
     * 32-bit BGP autonomous system number. Value can be entered in AS-Plain and AS-Dot formats. The parameter is also used to
     * set up the BGP confederation, in the following format: confederation_as/as . For example, if your AS is 34 and your
     * confederation AS is 43, then as configuration should be as =43/34.
     */
    as: pulumi.Input<string>;
    /**
     * If set, then all instances of the remote peer's AS number in the BGP AS-PATH attribute are replaced with the local AS
     * number before sending a route update to that peer. Happens before routing filters and prepending.
     */
    asOverride?: pulumi.Input<boolean>;
    /**
     * VPLS NLRI length format type. Used for compatibility with Cisco VPLS.
     */
    ciscoVplsNlriLenFmt?: pulumi.Input<string>;
    /**
     * In case this instance is a route reflector: the cluster ID of the router reflector cluster to this instance belongs.
     * This attribute helps to recognize routing updates that come from another route reflector in this cluster and avoid
     * routing information looping. Note that normally there is only one route reflector in a cluster; in this case,
     * 'cluster-id' does not need to be configured and BGP router ID is used instead.
     */
    clusterId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Specifies the BGP Hold Time value to use when negotiating with peers. According to the BGP specification, if the router
     * does not receive successive KEEPALIVE and/or UPDATE and/or NOTIFICATION messages within the period specified in the Hold
     * Time field of the OPEN message, then the BGP connection to the peer will be closed. The minimal hold-time value of both
     * peers will be actually used (note that the special value 0 or 'infinity' is lower than any other value) infinity - never
     * expire the connection and never send keepalive messages.
     */
    holdTime?: pulumi.Input<string>;
    /**
     * A group of parameters associated with BGP input.
     */
    input?: pulumi.Input<inputs.RoutingBgpTemplateInput>;
    /**
     * How long to keep the BGP session open after the last received 'keepalive' message.
     */
    keepaliveTime?: pulumi.Input<string>;
    /**
     * Specifies whether the remote peer is more than one hop away. This option affects outgoing next-hop selection as
     * described in RFC 4271 (for EBGP only, excluding EBGP peers local to the confederation). It also affects: whether to
     * accept connections from peers that are not in the same network (the remote address of the connection is used for this
     * check); whether to accept incoming routes with NEXT_HOP attribute that is not in the same network as the address used to
     * establish the connection; the target-scope of the routes installed from this peer; routes from multi-hop or IBGP peers
     * resolve their next-hops through IGP routes by default.
     */
    multihop?: pulumi.Input<boolean>;
    /**
     * Name of the BGP template.
     */
    name?: pulumi.Input<string>;
    /**
     * Affects the outgoing NEXT_HOP attribute selection. Note that next-hops set in filters always take precedence. Also note
     * that the next-hop is not changed on route reflection, except when it's set in the filter. default - select the next-hop
     * as described in RFC 4271 force-self - always use a local address of the interface that is used to connect to the peer as
     * the next-hop; propagate - try to propagate further the next-hop received; i.e. if the route has BGP NEXT_HOP attribute,
     * then use it as the next-hop, otherwise, fall back to the default case.
     */
    nexthopChoice?: pulumi.Input<string>;
    /**
     * A group of parameters associated with BGP output.
     */
    output?: pulumi.Input<inputs.RoutingBgpTemplateOutput>;
    /**
     * If set, then the BGP AS-PATH attribute is removed before sending out route updates if the attribute contains only
     * private AS numbers. The removal process happens before routing filters are applied and before the local, AS number is
     * prepended to the AS path.
     */
    removePrivateAs?: pulumi.Input<boolean>;
    /**
     * BGP Router ID to be used. Use the ID from the /routing/router-id configuration by specifying the reference name, or set
     * the ID directly by specifying IP. Equal router-ids are also used to group peers into one instance.
     */
    routerId?: pulumi.Input<string>;
    routingBgpTemplateId?: pulumi.Input<string>;
    /**
     * Name of the routing table, to install routes in.
     */
    routingTable?: pulumi.Input<string>;
    /**
     * Filename to be used to save BGP protocol-specific packet content (Exported PDU) into pcap file. This method allows much
     * simpler peer-specific packet capturing for debugging purposes. Pcap files in this format can also be loaded to create
     * virtual BGP peers to recreate conditions that happened at the time when packet capture was running.
     */
    saveTo?: pulumi.Input<string>;
    /**
     * List of template names from which to inherit parameters. Useful feature, to easily configure groups with overlapping
     * configuration options.
     */
    templates?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to use the BFD protocol for faster connection state detection.
     */
    useBfd?: pulumi.Input<boolean>;
    /**
     * The VRF table this resource operates on.
     */
    vrf?: pulumi.Input<string>;
}
