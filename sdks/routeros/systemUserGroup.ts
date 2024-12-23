// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemUserGroup extends pulumi.CustomResource {
    /**
     * Get an existing SystemUserGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemUserGroupState, opts?: pulumi.CustomResourceOptions): SystemUserGroup {
        return new SystemUserGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/systemUserGroup:SystemUserGroup';

    /**
     * Returns true if the given object is an instance of SystemUserGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemUserGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemUserGroup.__pulumiType;
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
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    public readonly ___unset_!: pulumi.Output<string | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * The name of the user group
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A set of allowed policies.
     */
    public readonly policies!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the skin that will be used for WebFig.
     */
    public readonly skin!: pulumi.Output<string | undefined>;
    public readonly systemUserGroupId!: pulumi.Output<string>;

    /**
     * Create a SystemUserGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemUserGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemUserGroupArgs | SystemUserGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemUserGroupState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___unset_"] = state ? state.___unset_ : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["policies"] = state ? state.policies : undefined;
            resourceInputs["skin"] = state ? state.skin : undefined;
            resourceInputs["systemUserGroupId"] = state ? state.systemUserGroupId : undefined;
        } else {
            const args = argsOrState as SystemUserGroupArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___unset_"] = args ? args.___unset_ : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["policies"] = args ? args.policies : undefined;
            resourceInputs["skin"] = args ? args.skin : undefined;
            resourceInputs["systemUserGroupId"] = args ? args.systemUserGroupId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemUserGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemUserGroup resources.
 */
export interface SystemUserGroupState {
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
    comment?: pulumi.Input<string>;
    /**
     * The name of the user group
     */
    name?: pulumi.Input<string>;
    /**
     * A set of allowed policies.
     */
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the skin that will be used for WebFig.
     */
    skin?: pulumi.Input<string>;
    systemUserGroupId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemUserGroup resource.
 */
export interface SystemUserGroupArgs {
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
    comment?: pulumi.Input<string>;
    /**
     * The name of the user group
     */
    name?: pulumi.Input<string>;
    /**
     * A set of allowed policies.
     */
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the skin that will be used for WebFig.
     */
    skin?: pulumi.Input<string>;
    systemUserGroupId?: pulumi.Input<string>;
}
