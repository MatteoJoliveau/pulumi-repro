// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IpDhcpServerConfig extends pulumi.CustomResource {
    /**
     * Get an existing IpDhcpServerConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpDhcpServerConfigState, opts?: pulumi.CustomResourceOptions): IpDhcpServerConfig {
        return new IpDhcpServerConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/ipDhcpServerConfig:IpDhcpServerConfig';

    /**
     * Returns true if the given object is an instance of IpDhcpServerConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpDhcpServerConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpDhcpServerConfig.__pulumiType;
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
     * An option that enables accounting for DHCP leases.
     */
    public readonly accounting!: pulumi.Output<boolean | undefined>;
    /**
     * An option determining whether the DHCP server sends periodic updates to the accounting server during a lease.
     */
    public readonly interimUpdate!: pulumi.Output<string | undefined>;
    public readonly ipDhcpServerConfigId!: pulumi.Output<string>;
    /**
     * An option to set the password parameter for the RADIUS server. This option is available in RouterOS starting from
     * version 7.0.
     */
    public readonly radiusPassword!: pulumi.Output<string | undefined>;
    /**
     * An option of how often the DHCP leases will be stored on disk.
     */
    public readonly storeLeasesDisk!: pulumi.Output<string | undefined>;

    /**
     * Create a IpDhcpServerConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpDhcpServerConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpDhcpServerConfigArgs | IpDhcpServerConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpDhcpServerConfigState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["accounting"] = state ? state.accounting : undefined;
            resourceInputs["interimUpdate"] = state ? state.interimUpdate : undefined;
            resourceInputs["ipDhcpServerConfigId"] = state ? state.ipDhcpServerConfigId : undefined;
            resourceInputs["radiusPassword"] = state ? state.radiusPassword : undefined;
            resourceInputs["storeLeasesDisk"] = state ? state.storeLeasesDisk : undefined;
        } else {
            const args = argsOrState as IpDhcpServerConfigArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["accounting"] = args ? args.accounting : undefined;
            resourceInputs["interimUpdate"] = args ? args.interimUpdate : undefined;
            resourceInputs["ipDhcpServerConfigId"] = args ? args.ipDhcpServerConfigId : undefined;
            resourceInputs["radiusPassword"] = args ? args.radiusPassword : undefined;
            resourceInputs["storeLeasesDisk"] = args ? args.storeLeasesDisk : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpDhcpServerConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IpDhcpServerConfig resources.
 */
export interface IpDhcpServerConfigState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option that enables accounting for DHCP leases.
     */
    accounting?: pulumi.Input<boolean>;
    /**
     * An option determining whether the DHCP server sends periodic updates to the accounting server during a lease.
     */
    interimUpdate?: pulumi.Input<string>;
    ipDhcpServerConfigId?: pulumi.Input<string>;
    /**
     * An option to set the password parameter for the RADIUS server. This option is available in RouterOS starting from
     * version 7.0.
     */
    radiusPassword?: pulumi.Input<string>;
    /**
     * An option of how often the DHCP leases will be stored on disk.
     */
    storeLeasesDisk?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IpDhcpServerConfig resource.
 */
export interface IpDhcpServerConfigArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option that enables accounting for DHCP leases.
     */
    accounting?: pulumi.Input<boolean>;
    /**
     * An option determining whether the DHCP server sends periodic updates to the accounting server during a lease.
     */
    interimUpdate?: pulumi.Input<string>;
    ipDhcpServerConfigId?: pulumi.Input<string>;
    /**
     * An option to set the password parameter for the RADIUS server. This option is available in RouterOS starting from
     * version 7.0.
     */
    radiusPassword?: pulumi.Input<string>;
    /**
     * An option of how often the DHCP leases will be stored on disk.
     */
    storeLeasesDisk?: pulumi.Input<string>;
}