import * as pulumi from "@pulumi/pulumi";
/**
 * The provider type for the routeros package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export declare class Provider extends pulumi.ProviderResource {
    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Provider;
    /**
     * Path to MikroTik's certificate authority file.
     */
    readonly caCertificate: pulumi.Output<string | undefined>;
    /**
     * URL of the MikroTik router, default is TLS connection to REST. * API: api[s]://host[:port] * api://router.local *
     * apis://router.local:8729 * REST: http[s]://host * http://router.local * https://router.local * router.local * 127.0.0.1
     * export ROS_HOSTURL=router.local or export MIKROTIK_HOST=router.local
     */
    readonly hosturl: pulumi.Output<string>;
    /**
     * Password for the MikroTik user.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * Username for the MikroTik WEB/Winbox. export ROS_USERNAME=admin or export MIKROTIK_USER=admin
     */
    readonly username: pulumi.Output<string>;
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProviderArgs, opts?: pulumi.ResourceOptions);
}
/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * Path to MikroTik's certificate authority file.
     */
    caCertificate?: pulumi.Input<string>;
    /**
     * URL of the MikroTik router, default is TLS connection to REST. * API: api[s]://host[:port] * api://router.local *
     * apis://router.local:8729 * REST: http[s]://host * http://router.local * https://router.local * router.local * 127.0.0.1
     * export ROS_HOSTURL=router.local or export MIKROTIK_HOST=router.local
     */
    hosturl: pulumi.Input<string>;
    /**
     * Whether to verify the SSL certificate or not.
     */
    insecure?: pulumi.Input<boolean>;
    /**
     * Password for the MikroTik user.
     */
    password?: pulumi.Input<string>;
    /**
     * Suppress the system object deletion warning.
     */
    suppressSysoDelWarn?: pulumi.Input<boolean>;
    /**
     * Username for the MikroTik WEB/Winbox. export ROS_USERNAME=admin or export MIKROTIK_USER=admin
     */
    username: pulumi.Input<string>;
}
