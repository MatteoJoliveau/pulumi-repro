import * as pulumi from "@pulumi/pulumi";
export declare class MoveItems extends pulumi.CustomResource {
    /**
     * Get an existing MoveItems resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MoveItemsState, opts?: pulumi.CustomResourceOptions): MoveItems;
    /**
     * Returns true if the given object is an instance of MoveItems.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is MoveItems;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly moveItemsId: pulumi.Output<string>;
    /**
     * Resource name in the notation ```routeros.IpFirewallFilter```.
     */
    readonly resourceName: pulumi.Output<string | undefined>;
    /**
     * URL path of the resource in the notation ```/ip/firewall/filter```.
     */
    readonly resourcePath: pulumi.Output<string | undefined>;
    /**
     * List identifiers in the required sequence. To locate the ```sequence``` before an existing rule, add its ```id``` to the
     * last element of the ```sequence```.
     */
    readonly sequences: pulumi.Output<string[]>;
    /**
     * Create a MoveItems resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MoveItemsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering MoveItems resources.
 */
export interface MoveItemsState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    moveItemsId?: pulumi.Input<string>;
    /**
     * Resource name in the notation ```routeros.IpFirewallFilter```.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * URL path of the resource in the notation ```/ip/firewall/filter```.
     */
    resourcePath?: pulumi.Input<string>;
    /**
     * List identifiers in the required sequence. To locate the ```sequence``` before an existing rule, add its ```id``` to the
     * last element of the ```sequence```.
     */
    sequences?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a MoveItems resource.
 */
export interface MoveItemsArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    moveItemsId?: pulumi.Input<string>;
    /**
     * Resource name in the notation ```routeros.IpFirewallFilter```.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * URL path of the resource in the notation ```/ip/firewall/filter```.
     */
    resourcePath?: pulumi.Input<string>;
    /**
     * List identifiers in the required sequence. To locate the ```sequence``` before an existing rule, add its ```id``` to the
     * last element of the ```sequence```.
     */
    sequences: pulumi.Input<pulumi.Input<string>[]>;
}
