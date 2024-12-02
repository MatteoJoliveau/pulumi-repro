// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ToolMacServer extends pulumi.CustomResource {
    /**
     * Get an existing ToolMacServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ToolMacServerState, opts?: pulumi.CustomResourceOptions): ToolMacServer {
        return new ToolMacServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/toolMacServer:ToolMacServer';

    /**
     * Returns true if the given object is an instance of ToolMacServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ToolMacServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ToolMacServer.__pulumiType;
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
     * List of interfaces for MAC Telnet access.
     */
    public readonly allowedInterfaceList!: pulumi.Output<string>;
    public readonly toolMacServerId!: pulumi.Output<string>;

    /**
     * Create a ToolMacServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ToolMacServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ToolMacServerArgs | ToolMacServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ToolMacServerState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["allowedInterfaceList"] = state ? state.allowedInterfaceList : undefined;
            resourceInputs["toolMacServerId"] = state ? state.toolMacServerId : undefined;
        } else {
            const args = argsOrState as ToolMacServerArgs | undefined;
            if ((!args || args.allowedInterfaceList === undefined) && !opts.urn) {
                throw new Error("Missing required property 'allowedInterfaceList'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["allowedInterfaceList"] = args ? args.allowedInterfaceList : undefined;
            resourceInputs["toolMacServerId"] = args ? args.toolMacServerId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ToolMacServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ToolMacServer resources.
 */
export interface ToolMacServerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * List of interfaces for MAC Telnet access.
     */
    allowedInterfaceList?: pulumi.Input<string>;
    toolMacServerId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ToolMacServer resource.
 */
export interface ToolMacServerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * List of interfaces for MAC Telnet access.
     */
    allowedInterfaceList: pulumi.Input<string>;
    toolMacServerId?: pulumi.Input<string>;
}