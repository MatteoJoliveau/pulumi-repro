import * as pulumi from "@pulumi/pulumi";
export declare class RoutingOspfArea extends pulumi.CustomResource {
    /**
     * Get an existing RoutingOspfArea resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoutingOspfAreaState, opts?: pulumi.CustomResourceOptions): RoutingOspfArea;
    /**
     * Returns true if the given object is an instance of RoutingOspfArea.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RoutingOspfArea;
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
     * OSPF area identifier.
     */
    readonly areaId: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Default cost of injected LSAs into the area.
     */
    readonly defaultCost: pulumi.Output<number | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    readonly inactive: pulumi.Output<boolean>;
    /**
     * Name of the OSPF instance this area belongs to.
     */
    readonly instance: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    /**
     * If set then the area will not flood summary LSAs in the stub area. <em>The correct value of this attribute may not be
     * displayed in Winbox. Please check the parameters in the console!</em>
     */
    readonly noSummaries: pulumi.Output<boolean | undefined>;
    /**
     * The parameter indicates which ABR will be used as a translator from type7 to type5 LSA.
     */
    readonly nssaTranslate: pulumi.Output<string | undefined>;
    readonly routingOspfAreaId: pulumi.Output<string>;
    /**
     * The area type.
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a RoutingOspfArea resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoutingOspfAreaArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RoutingOspfArea resources.
 */
export interface RoutingOspfAreaState {
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
     * OSPF area identifier.
     */
    areaId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Default cost of injected LSAs into the area.
     */
    defaultCost?: pulumi.Input<number>;
    disabled?: pulumi.Input<boolean>;
    inactive?: pulumi.Input<boolean>;
    /**
     * Name of the OSPF instance this area belongs to.
     */
    instance?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * If set then the area will not flood summary LSAs in the stub area. <em>The correct value of this attribute may not be
     * displayed in Winbox. Please check the parameters in the console!</em>
     */
    noSummaries?: pulumi.Input<boolean>;
    /**
     * The parameter indicates which ABR will be used as a translator from type7 to type5 LSA.
     */
    nssaTranslate?: pulumi.Input<string>;
    routingOspfAreaId?: pulumi.Input<string>;
    /**
     * The area type.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a RoutingOspfArea resource.
 */
export interface RoutingOspfAreaArgs {
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
     * OSPF area identifier.
     */
    areaId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Default cost of injected LSAs into the area.
     */
    defaultCost?: pulumi.Input<number>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Name of the OSPF instance this area belongs to.
     */
    instance: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * If set then the area will not flood summary LSAs in the stub area. <em>The correct value of this attribute may not be
     * displayed in Winbox. Please check the parameters in the console!</em>
     */
    noSummaries?: pulumi.Input<boolean>;
    /**
     * The parameter indicates which ABR will be used as a translator from type7 to type5 LSA.
     */
    nssaTranslate?: pulumi.Input<string>;
    routingOspfAreaId?: pulumi.Input<string>;
    /**
     * The area type.
     */
    type?: pulumi.Input<string>;
}
