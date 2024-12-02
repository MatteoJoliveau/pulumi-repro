// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DhcpClientOption extends pulumi.CustomResource {
    /**
     * Get an existing DhcpClientOption resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DhcpClientOptionState, opts?: pulumi.CustomResourceOptions): DhcpClientOption {
        return new DhcpClientOption(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/dhcpClientOption:DhcpClientOption';

    /**
     * Returns true if the given object is an instance of DhcpClientOption.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DhcpClientOption {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DhcpClientOption.__pulumiType;
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
     * The dhcp-client option code.
     */
    public readonly code!: pulumi.Output<number>;
    public readonly dhcpClientOptionId!: pulumi.Output<string>;
    /**
     * The name that will be used in dhcp-client.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * raw_value is computed from value.
     */
    public readonly rawValue!: pulumi.Output<string>;
    /**
     * The dhcp-client option
     */
    public readonly value!: pulumi.Output<string | undefined>;

    /**
     * Create a DhcpClientOption resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DhcpClientOptionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DhcpClientOptionArgs | DhcpClientOptionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DhcpClientOptionState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["code"] = state ? state.code : undefined;
            resourceInputs["dhcpClientOptionId"] = state ? state.dhcpClientOptionId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rawValue"] = state ? state.rawValue : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as DhcpClientOptionArgs | undefined;
            if ((!args || args.code === undefined) && !opts.urn) {
                throw new Error("Missing required property 'code'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["code"] = args ? args.code : undefined;
            resourceInputs["dhcpClientOptionId"] = args ? args.dhcpClientOptionId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rawValue"] = args ? args.rawValue : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DhcpClientOption.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DhcpClientOption resources.
 */
export interface DhcpClientOptionState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The dhcp-client option code.
     */
    code?: pulumi.Input<number>;
    dhcpClientOptionId?: pulumi.Input<string>;
    /**
     * The name that will be used in dhcp-client.
     */
    name?: pulumi.Input<string>;
    /**
     * raw_value is computed from value.
     */
    rawValue?: pulumi.Input<string>;
    /**
     * The dhcp-client option
     */
    value?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DhcpClientOption resource.
 */
export interface DhcpClientOptionArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The dhcp-client option code.
     */
    code: pulumi.Input<number>;
    dhcpClientOptionId?: pulumi.Input<string>;
    /**
     * The name that will be used in dhcp-client.
     */
    name?: pulumi.Input<string>;
    /**
     * raw_value is computed from value.
     */
    rawValue?: pulumi.Input<string>;
    /**
     * The dhcp-client option
     */
    value?: pulumi.Input<string>;
}