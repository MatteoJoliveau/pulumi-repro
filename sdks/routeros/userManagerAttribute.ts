// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UserManagerAttribute extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerAttribute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserManagerAttributeState, opts?: pulumi.CustomResourceOptions): UserManagerAttribute {
        return new UserManagerAttribute(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/userManagerAttribute:UserManagerAttribute';

    /**
     * Returns true if the given object is an instance of UserManagerAttribute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserManagerAttribute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserManagerAttribute.__pulumiType;
    }

    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___id_!: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___path_!: pulumi.Output<string | undefined>;
    /**
     * It's the default item.
     */
    public /*out*/ readonly default!: pulumi.Output<boolean>;
    /**
     * The attribute's default name.
     */
    public /*out*/ readonly defaultName!: pulumi.Output<string>;
    /**
     * The attribute's name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A set of `access-accept` and `access-challenge`.
     */
    public readonly packetTypes!: pulumi.Output<string[] | undefined>;
    public /*out*/ readonly standardName!: pulumi.Output<string>;
    /**
     * Attribute identification number from the specific vendor's attribute database.
     */
    public readonly typeId!: pulumi.Output<number>;
    public readonly userManagerAttributeId!: pulumi.Output<string>;
    /**
     * The attribute's value type.
     */
    public readonly valueType!: pulumi.Output<string | undefined>;
    /**
     * IANA allocated a specific enterprise identification number.
     */
    public readonly vendorId!: pulumi.Output<string | undefined>;

    /**
     * Create a UserManagerAttribute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserManagerAttributeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserManagerAttributeArgs | UserManagerAttributeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserManagerAttributeState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["default"] = state ? state.default : undefined;
            resourceInputs["defaultName"] = state ? state.defaultName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["packetTypes"] = state ? state.packetTypes : undefined;
            resourceInputs["standardName"] = state ? state.standardName : undefined;
            resourceInputs["typeId"] = state ? state.typeId : undefined;
            resourceInputs["userManagerAttributeId"] = state ? state.userManagerAttributeId : undefined;
            resourceInputs["valueType"] = state ? state.valueType : undefined;
            resourceInputs["vendorId"] = state ? state.vendorId : undefined;
        } else {
            const args = argsOrState as UserManagerAttributeArgs | undefined;
            if ((!args || args.typeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'typeId'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["packetTypes"] = args ? args.packetTypes : undefined;
            resourceInputs["typeId"] = args ? args.typeId : undefined;
            resourceInputs["userManagerAttributeId"] = args ? args.userManagerAttributeId : undefined;
            resourceInputs["valueType"] = args ? args.valueType : undefined;
            resourceInputs["vendorId"] = args ? args.vendorId : undefined;
            resourceInputs["default"] = undefined /*out*/;
            resourceInputs["defaultName"] = undefined /*out*/;
            resourceInputs["standardName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserManagerAttribute.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
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
