// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemUser extends pulumi.CustomResource {
    /**
     * Get an existing SystemUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemUserState, opts?: pulumi.CustomResourceOptions): SystemUser {
        return new SystemUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/systemUser:SystemUser';

    /**
     * Returns true if the given object is an instance of SystemUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemUser.__pulumiType;
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
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___skip_!: pulumi.Output<string | undefined>;
    /**
     * Host or network address from which the user is allowed to log in.
     */
    public readonly address!: pulumi.Output<string | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Password expired.
     */
    public /*out*/ readonly expired!: pulumi.Output<boolean>;
    /**
     * Name of the group the user belongs to.
     */
    public readonly group!: pulumi.Output<string>;
    /**
     * Inactivity policy.
     */
    public readonly inactivityPolicy!: pulumi.Output<string | undefined>;
    /**
     * Inactivity timeout for non-GUI sessions.
     */
    public readonly inactivityTimeout!: pulumi.Output<string | undefined>;
    /**
     * User name. Although it must start with an alphanumeric character, it may contain '*', '_', '.' and '@' symbols.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * User password. If not specified, it is left blank (hit [Enter] when logging in). It conforms to standard Unix
     * characteristics of passwords and may contain letters, digits, '*' and '_' symbols.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    public readonly systemUserId!: pulumi.Output<string>;

    /**
     * Create a SystemUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemUserArgs | SystemUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemUserState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___skip_"] = state ? state.___skip_ : undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["expired"] = state ? state.expired : undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["inactivityPolicy"] = state ? state.inactivityPolicy : undefined;
            resourceInputs["inactivityTimeout"] = state ? state.inactivityTimeout : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["systemUserId"] = state ? state.systemUserId : undefined;
        } else {
            const args = argsOrState as SystemUserArgs | undefined;
            if ((!args || args.group === undefined) && !opts.urn) {
                throw new Error("Missing required property 'group'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___skip_"] = args ? args.___skip_ : undefined;
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["inactivityPolicy"] = args ? args.inactivityPolicy : undefined;
            resourceInputs["inactivityTimeout"] = args ? args.inactivityTimeout : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["systemUserId"] = args ? args.systemUserId : undefined;
            resourceInputs["expired"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SystemUser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemUser resources.
 */
export interface SystemUserState {
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
    /**
     * Host or network address from which the user is allowed to log in.
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Password expired.
     */
    expired?: pulumi.Input<boolean>;
    /**
     * Name of the group the user belongs to.
     */
    group?: pulumi.Input<string>;
    /**
     * Inactivity policy.
     */
    inactivityPolicy?: pulumi.Input<string>;
    /**
     * Inactivity timeout for non-GUI sessions.
     */
    inactivityTimeout?: pulumi.Input<string>;
    /**
     * User name. Although it must start with an alphanumeric character, it may contain '*', '_', '.' and '@' symbols.
     */
    name?: pulumi.Input<string>;
    /**
     * User password. If not specified, it is left blank (hit [Enter] when logging in). It conforms to standard Unix
     * characteristics of passwords and may contain letters, digits, '*' and '_' symbols.
     */
    password?: pulumi.Input<string>;
    systemUserId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemUser resource.
 */
export interface SystemUserArgs {
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
    /**
     * Host or network address from which the user is allowed to log in.
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Name of the group the user belongs to.
     */
    group: pulumi.Input<string>;
    /**
     * Inactivity policy.
     */
    inactivityPolicy?: pulumi.Input<string>;
    /**
     * Inactivity timeout for non-GUI sessions.
     */
    inactivityTimeout?: pulumi.Input<string>;
    /**
     * User name. Although it must start with an alphanumeric character, it may contain '*', '_', '.' and '@' symbols.
     */
    name?: pulumi.Input<string>;
    /**
     * User password. If not specified, it is left blank (hit [Enter] when logging in). It conforms to standard Unix
     * characteristics of passwords and may contain letters, digits, '*' and '_' symbols.
     */
    password?: pulumi.Input<string>;
    systemUserId?: pulumi.Input<string>;
}
