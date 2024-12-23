// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IpHotspotIpBinding extends pulumi.CustomResource {
    /**
     * Get an existing IpHotspotIpBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpHotspotIpBindingState, opts?: pulumi.CustomResourceOptions): IpHotspotIpBinding {
        return new IpHotspotIpBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/ipHotspotIpBinding:IpHotspotIpBinding';

    /**
     * Returns true if the given object is an instance of IpHotspotIpBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpHotspotIpBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpHotspotIpBinding.__pulumiType;
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
     * The original IP address of the client.
     */
    public readonly address!: pulumi.Output<string | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    public readonly ipHotspotIpBindingId!: pulumi.Output<string>;
    /**
     * MAC address of the client.
     */
    public readonly macAddress!: pulumi.Output<string | undefined>;
    /**
     * Name of the HotSpot server. `all` - will be applied to all hotspot servers.
     */
    public readonly server!: pulumi.Output<string | undefined>;
    /**
     * New IP address of the client, translation occurs on the router (client does not know anything about the translation).
     */
    public readonly toAddress!: pulumi.Output<string | undefined>;
    /**
     * Type of the IP-binding action `regular` - performs One-to-One NAT according to the rule, translates the address to
     * to-address; `bypassed` - performs the translation, but excludes client from login to the HotSpot; `blocked` -
     * translation is not performed and packets from a host are dropped.
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a IpHotspotIpBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpHotspotIpBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpHotspotIpBindingArgs | IpHotspotIpBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpHotspotIpBindingState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["ipHotspotIpBindingId"] = state ? state.ipHotspotIpBindingId : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["server"] = state ? state.server : undefined;
            resourceInputs["toAddress"] = state ? state.toAddress : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as IpHotspotIpBindingArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["ipHotspotIpBindingId"] = args ? args.ipHotspotIpBindingId : undefined;
            resourceInputs["macAddress"] = args ? args.macAddress : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["toAddress"] = args ? args.toAddress : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpHotspotIpBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IpHotspotIpBinding resources.
 */
export interface IpHotspotIpBindingState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The original IP address of the client.
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    ipHotspotIpBindingId?: pulumi.Input<string>;
    /**
     * MAC address of the client.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Name of the HotSpot server. `all` - will be applied to all hotspot servers.
     */
    server?: pulumi.Input<string>;
    /**
     * New IP address of the client, translation occurs on the router (client does not know anything about the translation).
     */
    toAddress?: pulumi.Input<string>;
    /**
     * Type of the IP-binding action `regular` - performs One-to-One NAT according to the rule, translates the address to
     * to-address; `bypassed` - performs the translation, but excludes client from login to the HotSpot; `blocked` -
     * translation is not performed and packets from a host are dropped.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IpHotspotIpBinding resource.
 */
export interface IpHotspotIpBindingArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The original IP address of the client.
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    ipHotspotIpBindingId?: pulumi.Input<string>;
    /**
     * MAC address of the client.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Name of the HotSpot server. `all` - will be applied to all hotspot servers.
     */
    server?: pulumi.Input<string>;
    /**
     * New IP address of the client, translation occurs on the router (client does not know anything about the translation).
     */
    toAddress?: pulumi.Input<string>;
    /**
     * Type of the IP-binding action `regular` - performs One-to-One NAT according to the rule, translates the address to
     * to-address; `bypassed` - performs the translation, but excludes client from login to the HotSpot; `blocked` -
     * translation is not performed and packets from a host are dropped.
     */
    type?: pulumi.Input<string>;
}
