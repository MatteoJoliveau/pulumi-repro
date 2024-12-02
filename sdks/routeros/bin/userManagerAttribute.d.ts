import * as pulumi from "@pulumi/pulumi";
export declare class UserManagerAttribute extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerAttribute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserManagerAttributeState, opts?: pulumi.CustomResourceOptions): UserManagerAttribute;
    /**
     * Returns true if the given object is an instance of UserManagerAttribute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is UserManagerAttribute;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * It's the default item.
     */
    readonly default: pulumi.Output<boolean>;
    /**
     * The attribute's default name.
     */
    readonly defaultName: pulumi.Output<string>;
    /**
     * The attribute's name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A set of `access-accept` and `access-challenge`.
     */
    readonly packetTypes: pulumi.Output<string[] | undefined>;
    readonly standardName: pulumi.Output<string>;
    /**
     * Attribute identification number from the specific vendor's attribute database.
     */
    readonly typeId: pulumi.Output<number>;
    readonly userManagerAttributeId: pulumi.Output<string>;
    /**
     * The attribute's value type.
     */
    readonly valueType: pulumi.Output<string | undefined>;
    /**
     * IANA allocated a specific enterprise identification number.
     */
    readonly vendorId: pulumi.Output<string | undefined>;
    /**
     * Create a UserManagerAttribute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserManagerAttributeArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering UserManagerAttribute resources.
 */
export interface UserManagerAttributeState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    /**
     * The attribute's default name.
     */
    defaultName?: pulumi.Input<string>;
    /**
     * The attribute's name.
     */
    name?: pulumi.Input<string>;
    /**
     * A set of `access-accept` and `access-challenge`.
     */
    packetTypes?: pulumi.Input<pulumi.Input<string>[]>;
    standardName?: pulumi.Input<string>;
    /**
     * Attribute identification number from the specific vendor's attribute database.
     */
    typeId?: pulumi.Input<number>;
    userManagerAttributeId?: pulumi.Input<string>;
    /**
     * The attribute's value type.
     */
    valueType?: pulumi.Input<string>;
    /**
     * IANA allocated a specific enterprise identification number.
     */
    vendorId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a UserManagerAttribute resource.
 */
export interface UserManagerAttributeArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The attribute's name.
     */
    name?: pulumi.Input<string>;
    /**
     * A set of `access-accept` and `access-challenge`.
     */
    packetTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Attribute identification number from the specific vendor's attribute database.
     */
    typeId: pulumi.Input<number>;
    userManagerAttributeId?: pulumi.Input<string>;
    /**
     * The attribute's value type.
     */
    valueType?: pulumi.Input<string>;
    /**
     * IANA allocated a specific enterprise identification number.
     */
    vendorId?: pulumi.Input<string>;
}
