import * as pulumi from "@pulumi/pulumi";
export declare class RoutingTable extends pulumi.CustomResource {
    /**
     * Get an existing RoutingTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoutingTableState, opts?: pulumi.CustomResourceOptions): RoutingTable;
    /**
     * Returns true if the given object is an instance of RoutingTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RoutingTable;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * fib parameter should be specified if the routing table is intended to push routes to the FIB.
     */
    readonly fib: pulumi.Output<boolean | undefined>;
    readonly invalid: pulumi.Output<boolean>;
    /**
     * Routing table name.
     */
    readonly name: pulumi.Output<string>;
    readonly routingTableId: pulumi.Output<string>;
    /**
     * Create a RoutingTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RoutingTableArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RoutingTable resources.
 */
export interface RoutingTableState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * fib parameter should be specified if the routing table is intended to push routes to the FIB.
     */
    fib?: pulumi.Input<boolean>;
    invalid?: pulumi.Input<boolean>;
    /**
     * Routing table name.
     */
    name?: pulumi.Input<string>;
    routingTableId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a RoutingTable resource.
 */
export interface RoutingTableArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * fib parameter should be specified if the routing table is intended to push routes to the FIB.
     */
    fib?: pulumi.Input<boolean>;
    /**
     * Routing table name.
     */
    name?: pulumi.Input<string>;
    routingTableId?: pulumi.Input<string>;
}
