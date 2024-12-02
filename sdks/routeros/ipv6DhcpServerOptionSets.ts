// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Ipv6DhcpServerOptionSets extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6DhcpServerOptionSets resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv6DhcpServerOptionSetsState, opts?: pulumi.CustomResourceOptions): Ipv6DhcpServerOptionSets {
        return new Ipv6DhcpServerOptionSets(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/ipv6DhcpServerOptionSets:Ipv6DhcpServerOptionSets';

    /**
     * Returns true if the given object is an instance of Ipv6DhcpServerOptionSets.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ipv6DhcpServerOptionSets {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ipv6DhcpServerOptionSets.__pulumiType;
    }

    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___id_!: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___path_!: pulumi.Output<string | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly ipv6DhcpServerOptionSetsId!: pulumi.Output<string>;
    /**
     * The name of the DHCPv6 option.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The list of options.
     */
    public readonly options!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Ipv6DhcpServerOptionSets resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Ipv6DhcpServerOptionSetsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ipv6DhcpServerOptionSetsArgs | Ipv6DhcpServerOptionSetsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ipv6DhcpServerOptionSetsState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["ipv6DhcpServerOptionSetsId"] = state ? state.ipv6DhcpServerOptionSetsId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["options"] = state ? state.options : undefined;
        } else {
            const args = argsOrState as Ipv6DhcpServerOptionSetsArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["ipv6DhcpServerOptionSetsId"] = args ? args.ipv6DhcpServerOptionSetsId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ipv6DhcpServerOptionSets.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ipv6DhcpServerOptionSets resources.
 */
export interface Ipv6DhcpServerOptionSetsState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    ipv6DhcpServerOptionSetsId?: pulumi.Input<string>;
    /**
     * The name of the DHCPv6 option.
     */
    name?: pulumi.Input<string>;
    /**
     * The list of options.
     */
    options?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Ipv6DhcpServerOptionSets resource.
 */
export interface Ipv6DhcpServerOptionSetsArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    ipv6DhcpServerOptionSetsId?: pulumi.Input<string>;
    /**
     * The name of the DHCPv6 option.
     */
    name?: pulumi.Input<string>;
    /**
     * The list of options.
     */
    options?: pulumi.Input<pulumi.Input<string>[]>;
}
