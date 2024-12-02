import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class WireguardKeys extends pulumi.CustomResource {
    /**
     * Get an existing WireguardKeys resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WireguardKeysState, opts?: pulumi.CustomResourceOptions): WireguardKeys;
    /**
     * Returns true if the given object is an instance of WireguardKeys.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WireguardKeys;
    readonly ___id_: pulumi.Output<number | undefined>;
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly keys: pulumi.Output<outputs.WireguardKeysKey[]>;
    /**
     * The number of key sets.
     */
    readonly number: pulumi.Output<number | undefined>;
    readonly wireguardKeysId: pulumi.Output<string>;
    /**
     * Create a WireguardKeys resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WireguardKeysArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WireguardKeys resources.
 */
export interface WireguardKeysState {
    ___id_?: pulumi.Input<number>;
    ___path_?: pulumi.Input<string>;
    keys?: pulumi.Input<pulumi.Input<inputs.WireguardKeysKey>[]>;
    /**
     * The number of key sets.
     */
    number?: pulumi.Input<number>;
    wireguardKeysId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WireguardKeys resource.
 */
export interface WireguardKeysArgs {
    ___id_?: pulumi.Input<number>;
    ___path_?: pulumi.Input<string>;
    /**
     * The number of key sets.
     */
    number?: pulumi.Input<number>;
    wireguardKeysId?: pulumi.Input<string>;
}
