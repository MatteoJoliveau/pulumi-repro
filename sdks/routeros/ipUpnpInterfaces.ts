// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IpUpnpInterfaces extends pulumi.CustomResource {
    /**
     * Get an existing IpUpnpInterfaces resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpUpnpInterfacesState, opts?: pulumi.CustomResourceOptions): IpUpnpInterfaces {
        return new IpUpnpInterfaces(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/ipUpnpInterfaces:IpUpnpInterfaces';

    /**
     * Returns true if the given object is an instance of IpUpnpInterfaces.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpUpnpInterfaces {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpUpnpInterfaces.__pulumiType;
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
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    public /*out*/ readonly dynamic!: pulumi.Output<boolean>;
    /**
     * Allow specifying what public IP to use if the external interface has more than one IP available.
     */
    public readonly forcedIp!: pulumi.Output<string | undefined>;
    /**
     * Interface name on which uPnP will be running.
     */
    public readonly interface!: pulumi.Output<string>;
    public readonly ipUpnpInterfacesId!: pulumi.Output<string>;
    /**
     * UPnP interface type: external - the interface a global IP address is assigned to internal - router's local interface the
     * clients are connected to
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a IpUpnpInterfaces resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpUpnpInterfacesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpUpnpInterfacesArgs | IpUpnpInterfacesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpUpnpInterfacesState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___unset_"] = state ? state.___unset_ : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["dynamic"] = state ? state.dynamic : undefined;
            resourceInputs["forcedIp"] = state ? state.forcedIp : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["ipUpnpInterfacesId"] = state ? state.ipUpnpInterfacesId : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as IpUpnpInterfacesArgs | undefined;
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___unset_"] = args ? args.___unset_ : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["forcedIp"] = args ? args.forcedIp : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["ipUpnpInterfacesId"] = args ? args.ipUpnpInterfacesId : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["dynamic"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpUpnpInterfaces.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IpUpnpInterfaces resources.
 */
export interface IpUpnpInterfacesState {
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
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * Allow specifying what public IP to use if the external interface has more than one IP available.
     */
    forcedIp?: pulumi.Input<string>;
    /**
     * Interface name on which uPnP will be running.
     */
    interface?: pulumi.Input<string>;
    ipUpnpInterfacesId?: pulumi.Input<string>;
    /**
     * UPnP interface type: external - the interface a global IP address is assigned to internal - router's local interface the
     * clients are connected to
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IpUpnpInterfaces resource.
 */
export interface IpUpnpInterfacesArgs {
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
    disabled?: pulumi.Input<boolean>;
    /**
     * Allow specifying what public IP to use if the external interface has more than one IP available.
     */
    forcedIp?: pulumi.Input<string>;
    /**
     * Interface name on which uPnP will be running.
     */
    interface: pulumi.Input<string>;
    ipUpnpInterfacesId?: pulumi.Input<string>;
    /**
     * UPnP interface type: external - the interface a global IP address is assigned to internal - router's local interface the
     * clients are connected to
     */
    type?: pulumi.Input<string>;
}
