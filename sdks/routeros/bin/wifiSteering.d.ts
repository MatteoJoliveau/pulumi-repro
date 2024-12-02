import * as pulumi from "@pulumi/pulumi";
export declare class WifiSteering extends pulumi.CustomResource {
    /**
     * Get an existing WifiSteering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WifiSteeringState, opts?: pulumi.CustomResourceOptions): WifiSteering;
    /**
     * Returns true if the given object is an instance of WifiSteering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WifiSteering;
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
     * Name of the steering profile.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Neighbor group of potential roaming candidates.
     */
    readonly neighborGroups: pulumi.Output<string[] | undefined>;
    /**
     * An option to enable sending 802.11k neighbor reports.
     */
    readonly rrm: pulumi.Output<boolean | undefined>;
    readonly wifiSteeringId: pulumi.Output<string>;
    /**
     * An option to enable sending 802.11v BSS transition management requests.
     */
    readonly wnm: pulumi.Output<boolean | undefined>;
    /**
     * Create a WifiSteering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WifiSteeringArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WifiSteering resources.
 */
export interface WifiSteeringState {
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
     * Name of the steering profile.
     */
    name?: pulumi.Input<string>;
    /**
     * Neighbor group of potential roaming candidates.
     */
    neighborGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An option to enable sending 802.11k neighbor reports.
     */
    rrm?: pulumi.Input<boolean>;
    wifiSteeringId?: pulumi.Input<string>;
    /**
     * An option to enable sending 802.11v BSS transition management requests.
     */
    wnm?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a WifiSteering resource.
 */
export interface WifiSteeringArgs {
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
     * Name of the steering profile.
     */
    name?: pulumi.Input<string>;
    /**
     * Neighbor group of potential roaming candidates.
     */
    neighborGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An option to enable sending 802.11k neighbor reports.
     */
    rrm?: pulumi.Input<boolean>;
    wifiSteeringId?: pulumi.Input<string>;
    /**
     * An option to enable sending 802.11v BSS transition management requests.
     */
    wnm?: pulumi.Input<boolean>;
}
