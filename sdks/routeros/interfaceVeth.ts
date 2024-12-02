// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class InterfaceVeth extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceVeth resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceVethState, opts?: pulumi.CustomResourceOptions): InterfaceVeth {
        return new InterfaceVeth(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/interfaceVeth:InterfaceVeth';

    /**
     * Returns true if the given object is an instance of InterfaceVeth.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InterfaceVeth {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceVeth.__pulumiType;
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
     * IP address.
     */
    public readonly address!: pulumi.Output<string | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Gateway IP address.
     */
    public readonly gateway!: pulumi.Output<string | undefined>;
    /**
     * Gateway IPv6 address.
     */
    public readonly gateway6!: pulumi.Output<string | undefined>;
    public readonly interfaceVethId!: pulumi.Output<string>;
    /**
     * Interface name.
     */
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly running!: pulumi.Output<boolean>;

    /**
     * Create a InterfaceVeth resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceVethArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InterfaceVethArgs | InterfaceVethState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InterfaceVethState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["gateway"] = state ? state.gateway : undefined;
            resourceInputs["gateway6"] = state ? state.gateway6 : undefined;
            resourceInputs["interfaceVethId"] = state ? state.interfaceVethId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["running"] = state ? state.running : undefined;
        } else {
            const args = argsOrState as InterfaceVethArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["gateway"] = args ? args.gateway : undefined;
            resourceInputs["gateway6"] = args ? args.gateway6 : undefined;
            resourceInputs["interfaceVethId"] = args ? args.interfaceVethId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["running"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InterfaceVeth.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InterfaceVeth resources.
 */
export interface InterfaceVethState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * IP address.
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Gateway IP address.
     */
    gateway?: pulumi.Input<string>;
    /**
     * Gateway IPv6 address.
     */
    gateway6?: pulumi.Input<string>;
    interfaceVethId?: pulumi.Input<string>;
    /**
     * Interface name.
     */
    name?: pulumi.Input<string>;
    running?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a InterfaceVeth resource.
 */
export interface InterfaceVethArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * IP address.
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Gateway IP address.
     */
    gateway?: pulumi.Input<string>;
    /**
     * Gateway IPv6 address.
     */
    gateway6?: pulumi.Input<string>;
    interfaceVethId?: pulumi.Input<string>;
    /**
     * Interface name.
     */
    name?: pulumi.Input<string>;
}