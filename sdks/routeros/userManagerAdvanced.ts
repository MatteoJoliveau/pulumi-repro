// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UserManagerAdvanced extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerAdvanced resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserManagerAdvancedState, opts?: pulumi.CustomResourceOptions): UserManagerAdvanced {
        return new UserManagerAdvanced(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/userManagerAdvanced:UserManagerAdvanced';

    /**
     * Returns true if the given object is an instance of UserManagerAdvanced.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserManagerAdvanced {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserManagerAdvanced.__pulumiType;
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
     * An option whether to enable PayPal functionality for User Manager.
     */
    public readonly paypalAllow!: pulumi.Output<boolean | undefined>;
    /**
     * The currency related to price setting in which users will be billed.
     */
    public readonly paypalCurrency!: pulumi.Output<string | undefined>;
    /**
     * The password of the PayPal API account.
     */
    public readonly paypalPassword!: pulumi.Output<string | undefined>;
    /**
     * The signature of the PayPal API account.
     */
    public readonly paypalSignature!: pulumi.Output<string | undefined>;
    /**
     * An option whether to use PayPal's sandbox environment for testing purposes.
     */
    public readonly paypalUseSandbox!: pulumi.Output<boolean | undefined>;
    /**
     * The username of the PayPal API account.
     */
    public readonly paypalUser!: pulumi.Output<string | undefined>;
    public readonly userManagerAdvancedId!: pulumi.Output<string>;
    /**
     * The password for accessing `/um/PRIVATE/` section over HTTP.
     */
    public readonly webPrivatePassword!: pulumi.Output<string | undefined>;
    /**
     * The username for accessing `/um/PRIVATE/` section over HTTP.
     */
    public readonly webPrivateUsername!: pulumi.Output<string | undefined>;

    /**
     * Create a UserManagerAdvanced resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UserManagerAdvancedArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserManagerAdvancedArgs | UserManagerAdvancedState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserManagerAdvancedState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["paypalAllow"] = state ? state.paypalAllow : undefined;
            resourceInputs["paypalCurrency"] = state ? state.paypalCurrency : undefined;
            resourceInputs["paypalPassword"] = state ? state.paypalPassword : undefined;
            resourceInputs["paypalSignature"] = state ? state.paypalSignature : undefined;
            resourceInputs["paypalUseSandbox"] = state ? state.paypalUseSandbox : undefined;
            resourceInputs["paypalUser"] = state ? state.paypalUser : undefined;
            resourceInputs["userManagerAdvancedId"] = state ? state.userManagerAdvancedId : undefined;
            resourceInputs["webPrivatePassword"] = state ? state.webPrivatePassword : undefined;
            resourceInputs["webPrivateUsername"] = state ? state.webPrivateUsername : undefined;
        } else {
            const args = argsOrState as UserManagerAdvancedArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["paypalAllow"] = args ? args.paypalAllow : undefined;
            resourceInputs["paypalCurrency"] = args ? args.paypalCurrency : undefined;
            resourceInputs["paypalPassword"] = args ? args.paypalPassword : undefined;
            resourceInputs["paypalSignature"] = args ? args.paypalSignature : undefined;
            resourceInputs["paypalUseSandbox"] = args ? args.paypalUseSandbox : undefined;
            resourceInputs["paypalUser"] = args ? args.paypalUser : undefined;
            resourceInputs["userManagerAdvancedId"] = args ? args.userManagerAdvancedId : undefined;
            resourceInputs["webPrivatePassword"] = args ? args.webPrivatePassword : undefined;
            resourceInputs["webPrivateUsername"] = args ? args.webPrivateUsername : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserManagerAdvanced.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UserManagerAdvanced resources.
 */
export interface UserManagerAdvancedState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option whether to enable PayPal functionality for User Manager.
     */
    paypalAllow?: pulumi.Input<boolean>;
    /**
     * The currency related to price setting in which users will be billed.
     */
    paypalCurrency?: pulumi.Input<string>;
    /**
     * The password of the PayPal API account.
     */
    paypalPassword?: pulumi.Input<string>;
    /**
     * The signature of the PayPal API account.
     */
    paypalSignature?: pulumi.Input<string>;
    /**
     * An option whether to use PayPal's sandbox environment for testing purposes.
     */
    paypalUseSandbox?: pulumi.Input<boolean>;
    /**
     * The username of the PayPal API account.
     */
    paypalUser?: pulumi.Input<string>;
    userManagerAdvancedId?: pulumi.Input<string>;
    /**
     * The password for accessing `/um/PRIVATE/` section over HTTP.
     */
    webPrivatePassword?: pulumi.Input<string>;
    /**
     * The username for accessing `/um/PRIVATE/` section over HTTP.
     */
    webPrivateUsername?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UserManagerAdvanced resource.
 */
export interface UserManagerAdvancedArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option whether to enable PayPal functionality for User Manager.
     */
    paypalAllow?: pulumi.Input<boolean>;
    /**
     * The currency related to price setting in which users will be billed.
     */
    paypalCurrency?: pulumi.Input<string>;
    /**
     * The password of the PayPal API account.
     */
    paypalPassword?: pulumi.Input<string>;
    /**
     * The signature of the PayPal API account.
     */
    paypalSignature?: pulumi.Input<string>;
    /**
     * An option whether to use PayPal's sandbox environment for testing purposes.
     */
    paypalUseSandbox?: pulumi.Input<boolean>;
    /**
     * The username of the PayPal API account.
     */
    paypalUser?: pulumi.Input<string>;
    userManagerAdvancedId?: pulumi.Input<string>;
    /**
     * The password for accessing `/um/PRIVATE/` section over HTTP.
     */
    webPrivatePassword?: pulumi.Input<string>;
    /**
     * The username for accessing `/um/PRIVATE/` section over HTTP.
     */
    webPrivateUsername?: pulumi.Input<string>;
}