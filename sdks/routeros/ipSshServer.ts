// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IpSshServer extends pulumi.CustomResource {
    /**
     * Get an existing IpSshServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpSshServerState, opts?: pulumi.CustomResourceOptions): IpSshServer {
        return new IpSshServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/ipSshServer:IpSshServer';

    /**
     * Returns true if the given object is an instance of IpSshServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpSshServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpSshServer.__pulumiType;
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
     * Whether to allow connection if cryptographic algorithms are set to none.
     */
    public readonly allowNoneCrypto!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to allow password login at the same time when public key authorization is configured for a user.
     */
    public readonly alwaysAllowPasswordLogin!: pulumi.Output<boolean | undefined>;
    /**
     * Allows to control which SSH forwarding method to allow: * no - SSH forwarding is disabled; * local - Allow SSH clients
     * to originate connections from the server(router), this setting controls also dynamic forwarding; * remote - Allow SSH
     * clients to listen on the server(router) and forward incoming connections; * both - Allow both local and remote
     * forwarding methods.
     */
    public readonly forwardingEnabled!: pulumi.Output<string | undefined>;
    /**
     * RSA key size when host key is being regenerated.
     */
    public readonly hostKeySize!: pulumi.Output<number | undefined>;
    /**
     * Select host key type.
     */
    public readonly hostKeyType!: pulumi.Output<string | undefined>;
    public readonly ipSshServerId!: pulumi.Output<string>;
    /**
     * Use stronger encryption.
     */
    public readonly strongCrypto!: pulumi.Output<boolean | undefined>;

    /**
     * Create a IpSshServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpSshServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpSshServerArgs | IpSshServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpSshServerState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["allowNoneCrypto"] = state ? state.allowNoneCrypto : undefined;
            resourceInputs["alwaysAllowPasswordLogin"] = state ? state.alwaysAllowPasswordLogin : undefined;
            resourceInputs["forwardingEnabled"] = state ? state.forwardingEnabled : undefined;
            resourceInputs["hostKeySize"] = state ? state.hostKeySize : undefined;
            resourceInputs["hostKeyType"] = state ? state.hostKeyType : undefined;
            resourceInputs["ipSshServerId"] = state ? state.ipSshServerId : undefined;
            resourceInputs["strongCrypto"] = state ? state.strongCrypto : undefined;
        } else {
            const args = argsOrState as IpSshServerArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["allowNoneCrypto"] = args ? args.allowNoneCrypto : undefined;
            resourceInputs["alwaysAllowPasswordLogin"] = args ? args.alwaysAllowPasswordLogin : undefined;
            resourceInputs["forwardingEnabled"] = args ? args.forwardingEnabled : undefined;
            resourceInputs["hostKeySize"] = args ? args.hostKeySize : undefined;
            resourceInputs["hostKeyType"] = args ? args.hostKeyType : undefined;
            resourceInputs["ipSshServerId"] = args ? args.ipSshServerId : undefined;
            resourceInputs["strongCrypto"] = args ? args.strongCrypto : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpSshServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IpSshServer resources.
 */
export interface IpSshServerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to allow connection if cryptographic algorithms are set to none.
     */
    allowNoneCrypto?: pulumi.Input<boolean>;
    /**
     * Whether to allow password login at the same time when public key authorization is configured for a user.
     */
    alwaysAllowPasswordLogin?: pulumi.Input<boolean>;
    /**
     * Allows to control which SSH forwarding method to allow: * no - SSH forwarding is disabled; * local - Allow SSH clients
     * to originate connections from the server(router), this setting controls also dynamic forwarding; * remote - Allow SSH
     * clients to listen on the server(router) and forward incoming connections; * both - Allow both local and remote
     * forwarding methods.
     */
    forwardingEnabled?: pulumi.Input<string>;
    /**
     * RSA key size when host key is being regenerated.
     */
    hostKeySize?: pulumi.Input<number>;
    /**
     * Select host key type.
     */
    hostKeyType?: pulumi.Input<string>;
    ipSshServerId?: pulumi.Input<string>;
    /**
     * Use stronger encryption.
     */
    strongCrypto?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a IpSshServer resource.
 */
export interface IpSshServerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to allow connection if cryptographic algorithms are set to none.
     */
    allowNoneCrypto?: pulumi.Input<boolean>;
    /**
     * Whether to allow password login at the same time when public key authorization is configured for a user.
     */
    alwaysAllowPasswordLogin?: pulumi.Input<boolean>;
    /**
     * Allows to control which SSH forwarding method to allow: * no - SSH forwarding is disabled; * local - Allow SSH clients
     * to originate connections from the server(router), this setting controls also dynamic forwarding; * remote - Allow SSH
     * clients to listen on the server(router) and forward incoming connections; * both - Allow both local and remote
     * forwarding methods.
     */
    forwardingEnabled?: pulumi.Input<string>;
    /**
     * RSA key size when host key is being regenerated.
     */
    hostKeySize?: pulumi.Input<number>;
    /**
     * Select host key type.
     */
    hostKeyType?: pulumi.Input<string>;
    ipSshServerId?: pulumi.Input<string>;
    /**
     * Use stronger encryption.
     */
    strongCrypto?: pulumi.Input<boolean>;
}
