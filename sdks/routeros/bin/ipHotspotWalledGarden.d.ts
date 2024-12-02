import * as pulumi from "@pulumi/pulumi";
export declare class IpHotspotWalledGarden extends pulumi.CustomResource {
    /**
     * Get an existing IpHotspotWalledGarden resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpHotspotWalledGardenState, opts?: pulumi.CustomResourceOptions): IpHotspotWalledGarden;
    /**
     * Returns true if the given object is an instance of IpHotspotWalledGarden.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpHotspotWalledGarden;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___skip_: pulumi.Output<string | undefined>;
    /**
     * Action to perform, when packet matches the rule `allow` - allow access to the web-page without authorization, `deny` -
     * the authorization is required to access the web-page.
     */
    readonly action: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Domain name of the destination web-server.
     */
    readonly dstHost: pulumi.Output<string | undefined>;
    /**
     * TCP port number, client sends request to.
     */
    readonly dstPort: pulumi.Output<string | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    readonly ipHotspotWalledGardenId: pulumi.Output<string>;
    /**
     * HTTP method of the request.
     */
    readonly method: pulumi.Output<string | undefined>;
    /**
     * The path of the request, path comes after `http://dst_host/`.
     */
    readonly path: pulumi.Output<string | undefined>;
    /**
     * Name of the HotSpot server, rule is applied to.
     */
    readonly server: pulumi.Output<string | undefined>;
    /**
     * Source address of the user, usually IP address of the HotSpot client.
     */
    readonly srcAddress: pulumi.Output<string | undefined>;
    /**
     * Create a IpHotspotWalledGarden resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpHotspotWalledGardenArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpHotspotWalledGarden resources.
 */
export interface IpHotspotWalledGardenState {
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
     * Action to perform, when packet matches the rule `allow` - allow access to the web-page without authorization, `deny` -
     * the authorization is required to access the web-page.
     */
    action?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Domain name of the destination web-server.
     */
    dstHost?: pulumi.Input<string>;
    /**
     * TCP port number, client sends request to.
     */
    dstPort?: pulumi.Input<string>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    ipHotspotWalledGardenId?: pulumi.Input<string>;
    /**
     * HTTP method of the request.
     */
    method?: pulumi.Input<string>;
    /**
     * The path of the request, path comes after `http://dst_host/`.
     */
    path?: pulumi.Input<string>;
    /**
     * Name of the HotSpot server, rule is applied to.
     */
    server?: pulumi.Input<string>;
    /**
     * Source address of the user, usually IP address of the HotSpot client.
     */
    srcAddress?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpHotspotWalledGarden resource.
 */
export interface IpHotspotWalledGardenArgs {
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
     * Action to perform, when packet matches the rule `allow` - allow access to the web-page without authorization, `deny` -
     * the authorization is required to access the web-page.
     */
    action?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Domain name of the destination web-server.
     */
    dstHost?: pulumi.Input<string>;
    /**
     * TCP port number, client sends request to.
     */
    dstPort?: pulumi.Input<string>;
    ipHotspotWalledGardenId?: pulumi.Input<string>;
    /**
     * HTTP method of the request.
     */
    method?: pulumi.Input<string>;
    /**
     * The path of the request, path comes after `http://dst_host/`.
     */
    path?: pulumi.Input<string>;
    /**
     * Name of the HotSpot server, rule is applied to.
     */
    server?: pulumi.Input<string>;
    /**
     * Source address of the user, usually IP address of the HotSpot client.
     */
    srcAddress?: pulumi.Input<string>;
}
