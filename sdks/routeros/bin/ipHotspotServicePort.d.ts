import * as pulumi from "@pulumi/pulumi";
export declare class IpHotspotServicePort extends pulumi.CustomResource {
    /**
     * Get an existing IpHotspotServicePort resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpHotspotServicePortState, opts?: pulumi.CustomResourceOptions): IpHotspotServicePort;
    /**
     * Returns true if the given object is an instance of IpHotspotServicePort.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpHotspotServicePort;
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
    readonly disabled: pulumi.Output<boolean | undefined>;
    readonly ipHotspotServicePortId: pulumi.Output<string>;
    /**
     * Service name.
     */
    readonly name: pulumi.Output<string>;
    readonly ports: pulumi.Output<string>;
    /**
     * Create a IpHotspotServicePort resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpHotspotServicePortArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpHotspotServicePort resources.
 */
export interface IpHotspotServicePortState {
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
    disabled?: pulumi.Input<boolean>;
    ipHotspotServicePortId?: pulumi.Input<string>;
    /**
     * Service name.
     */
    name?: pulumi.Input<string>;
    ports?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpHotspotServicePort resource.
 */
export interface IpHotspotServicePortArgs {
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
    disabled?: pulumi.Input<boolean>;
    ipHotspotServicePortId?: pulumi.Input<string>;
    /**
     * Service name.
     */
    name?: pulumi.Input<string>;
}
