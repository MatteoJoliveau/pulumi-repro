// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IpHotspot extends pulumi.CustomResource {
    /**
     * Get an existing IpHotspot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpHotspotState, opts?: pulumi.CustomResourceOptions): IpHotspot {
        return new IpHotspot(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/ipHotspot:IpHotspot';

    /**
     * Returns true if the given object is an instance of IpHotspot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpHotspot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpHotspot.__pulumiType;
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
     * Address space used to change HotSpot client any IP address to a valid address. Useful for providing public network
     * access to mobile clients that are not willing to change their networking settings.
     */
    public readonly addressPool!: pulumi.Output<string | undefined>;
    /**
     * Number of IP addresses allowed to be bind with the MAC address, when multiple HotSpot clients connected with one
     * MAC-address.
     */
    public readonly addressesPerMac!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Period of inactivity for unauthorized clients. When there is no traffic from this client (literally client computer
     * should be switched off), once the timeout is reached, a user is dropped from the HotSpot host list, its used address
     * becomes available.
     */
    public readonly idleTimeout!: pulumi.Output<string | undefined>;
    /**
     * Interface to run HotSpot on.
     */
    public readonly interface!: pulumi.Output<string>;
    public /*out*/ readonly invalid!: pulumi.Output<boolean>;
    public readonly ipHotspotId!: pulumi.Output<string>;
    /**
     * The exact value of the keepalive-timeout, that is applied to the user. Value shows how long the host can stay out of
     * reach to be removed from the HotSpot.
     */
    public readonly keepaliveTimeout!: pulumi.Output<string | undefined>;
    /**
     * Period of time after which if a host hasn't been authorized itself with a system the host entry gets deleted from host
     * table. Loop repeats until the host logs in the system. Enable if there are situations where a host cannot log in after
     * being too long in the host table unauthorized.
     */
    public readonly loginTimeout!: pulumi.Output<string | undefined>;
    /**
     * HotSpot server's name or identifier.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * HotSpot server default HotSpot profile, which is located in `/ip/hotspot/profile`.
     */
    public readonly profile!: pulumi.Output<string | undefined>;

    /**
     * Create a IpHotspot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpHotspotArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpHotspotArgs | IpHotspotState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpHotspotState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___skip_"] = state ? state.___skip_ : undefined;
            resourceInputs["addressPool"] = state ? state.addressPool : undefined;
            resourceInputs["addressesPerMac"] = state ? state.addressesPerMac : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["idleTimeout"] = state ? state.idleTimeout : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["invalid"] = state ? state.invalid : undefined;
            resourceInputs["ipHotspotId"] = state ? state.ipHotspotId : undefined;
            resourceInputs["keepaliveTimeout"] = state ? state.keepaliveTimeout : undefined;
            resourceInputs["loginTimeout"] = state ? state.loginTimeout : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
        } else {
            const args = argsOrState as IpHotspotArgs | undefined;
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___skip_"] = args ? args.___skip_ : undefined;
            resourceInputs["addressPool"] = args ? args.addressPool : undefined;
            resourceInputs["addressesPerMac"] = args ? args.addressesPerMac : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["idleTimeout"] = args ? args.idleTimeout : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["ipHotspotId"] = args ? args.ipHotspotId : undefined;
            resourceInputs["keepaliveTimeout"] = args ? args.keepaliveTimeout : undefined;
            resourceInputs["loginTimeout"] = args ? args.loginTimeout : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["invalid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpHotspot.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IpHotspot resources.
 */
export interface IpHotspotState {
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
     * Address space used to change HotSpot client any IP address to a valid address. Useful for providing public network
     * access to mobile clients that are not willing to change their networking settings.
     */
    addressPool?: pulumi.Input<string>;
    /**
     * Number of IP addresses allowed to be bind with the MAC address, when multiple HotSpot clients connected with one
     * MAC-address.
     */
    addressesPerMac?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Period of inactivity for unauthorized clients. When there is no traffic from this client (literally client computer
     * should be switched off), once the timeout is reached, a user is dropped from the HotSpot host list, its used address
     * becomes available.
     */
    idleTimeout?: pulumi.Input<string>;
    /**
     * Interface to run HotSpot on.
     */
    interface?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    ipHotspotId?: pulumi.Input<string>;
    /**
     * The exact value of the keepalive-timeout, that is applied to the user. Value shows how long the host can stay out of
     * reach to be removed from the HotSpot.
     */
    keepaliveTimeout?: pulumi.Input<string>;
    /**
     * Period of time after which if a host hasn't been authorized itself with a system the host entry gets deleted from host
     * table. Loop repeats until the host logs in the system. Enable if there are situations where a host cannot log in after
     * being too long in the host table unauthorized.
     */
    loginTimeout?: pulumi.Input<string>;
    /**
     * HotSpot server's name or identifier.
     */
    name?: pulumi.Input<string>;
    /**
     * HotSpot server default HotSpot profile, which is located in `/ip/hotspot/profile`.
     */
    profile?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IpHotspot resource.
 */
export interface IpHotspotArgs {
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
     * Address space used to change HotSpot client any IP address to a valid address. Useful for providing public network
     * access to mobile clients that are not willing to change their networking settings.
     */
    addressPool?: pulumi.Input<string>;
    /**
     * Number of IP addresses allowed to be bind with the MAC address, when multiple HotSpot clients connected with one
     * MAC-address.
     */
    addressesPerMac?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Period of inactivity for unauthorized clients. When there is no traffic from this client (literally client computer
     * should be switched off), once the timeout is reached, a user is dropped from the HotSpot host list, its used address
     * becomes available.
     */
    idleTimeout?: pulumi.Input<string>;
    /**
     * Interface to run HotSpot on.
     */
    interface: pulumi.Input<string>;
    ipHotspotId?: pulumi.Input<string>;
    /**
     * The exact value of the keepalive-timeout, that is applied to the user. Value shows how long the host can stay out of
     * reach to be removed from the HotSpot.
     */
    keepaliveTimeout?: pulumi.Input<string>;
    /**
     * Period of time after which if a host hasn't been authorized itself with a system the host entry gets deleted from host
     * table. Loop repeats until the host logs in the system. Enable if there are situations where a host cannot log in after
     * being too long in the host table unauthorized.
     */
    loginTimeout?: pulumi.Input<string>;
    /**
     * HotSpot server's name or identifier.
     */
    name?: pulumi.Input<string>;
    /**
     * HotSpot server default HotSpot profile, which is located in `/ip/hotspot/profile`.
     */
    profile?: pulumi.Input<string>;
}