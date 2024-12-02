import * as pulumi from "@pulumi/pulumi";
export declare class IpUpnpInterfaces extends pulumi.CustomResource {
    /**
     * Get an existing IpUpnpInterfaces resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpUpnpInterfacesState, opts?: pulumi.CustomResourceOptions): IpUpnpInterfaces;
    /**
     * Returns true if the given object is an instance of IpUpnpInterfaces.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpUpnpInterfaces;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    readonly ___unset_: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * Allow specifying what public IP to use if the external interface has more than one IP available.
     */
    readonly forcedIp: pulumi.Output<string | undefined>;
    /**
     * Interface name on which uPnP will be running.
     */
    readonly interface: pulumi.Output<string>;
    readonly ipUpnpInterfacesId: pulumi.Output<string>;
    /**
     * UPnP interface type: external - the interface a global IP address is assigned to internal - router's local interface the
     * clients are connected to
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a IpUpnpInterfaces resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpUpnpInterfacesArgs, opts?: pulumi.CustomResourceOptions);
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
