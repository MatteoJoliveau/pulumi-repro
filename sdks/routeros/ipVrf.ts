// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IpVrf extends pulumi.CustomResource {
    /**
     * Get an existing IpVrf resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpVrfState, opts?: pulumi.CustomResourceOptions): IpVrf {
        return new IpVrf(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/ipVrf:IpVrf';

    /**
     * Returns true if the given object is an instance of IpVrf.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpVrf {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpVrf.__pulumiType;
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
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * At least one interface must be added to the VRF.
     */
    public readonly interfaces!: pulumi.Output<string[]>;
    public readonly ipVrfId!: pulumi.Output<string>;
    /**
     * Unique name of the VRF.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a IpVrf resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpVrfArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpVrfArgs | IpVrfState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpVrfState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["interfaces"] = state ? state.interfaces : undefined;
            resourceInputs["ipVrfId"] = state ? state.ipVrfId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as IpVrfArgs | undefined;
            if ((!args || args.interfaces === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interfaces'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["interfaces"] = args ? args.interfaces : undefined;
            resourceInputs["ipVrfId"] = args ? args.ipVrfId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpVrf.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IpVrf resources.
 */
export interface IpVrfState {
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
     * At least one interface must be added to the VRF.
     */
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
    ipVrfId?: pulumi.Input<string>;
    /**
     * Unique name of the VRF.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IpVrf resource.
 */
export interface IpVrfArgs {
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
     * At least one interface must be added to the VRF.
     */
    interfaces: pulumi.Input<pulumi.Input<string>[]>;
    ipVrfId?: pulumi.Input<string>;
    /**
     * Unique name of the VRF.
     */
    name?: pulumi.Input<string>;
}