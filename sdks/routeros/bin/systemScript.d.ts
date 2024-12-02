import * as pulumi from "@pulumi/pulumi";
export declare class SystemScript extends pulumi.CustomResource {
    /**
     * Get an existing SystemScript resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemScriptState, opts?: pulumi.CustomResourceOptions): SystemScript;
    /**
     * Returns true if the given object is an instance of SystemScript.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemScript;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Bypass permissions check when the script is being executed, useful when scripts are being executed from services that
     * have limited permissions, such as Netwatch.
     */
    readonly dontRequirePermissions: pulumi.Output<boolean | undefined>;
    readonly invalid: pulumi.Output<boolean>;
    /**
     * Date and time when the script was last invoked.
     */
    readonly lastStarted: pulumi.Output<string>;
    /**
     * Name of the script.
     */
    readonly name: pulumi.Output<string>;
    readonly owner: pulumi.Output<string>;
    /**
     * List of applicable policies: * ftp - Policy that grants full rights to log in remotely via FTP, to read/write/erase
     * files and to transfer files from/to the router. Should be used together with read/write policies. * password - Policy
     * that grants rights to change the password. * policy - Policy that grants user management rights. Should be used together
     * with the write policy. Allows also to see global variables created by other users (requires also 'test' policy). * read
     * - Policy that grants read access to the router's configuration. All console commands that do not alter router's
     * configuration are allowed. Doesn't affect FTP. * reboot - Policy that allows rebooting the router. * sensitive - Policy
     * that grants rights to change "hide sensitive" option, if this policy is disabled sensitive information is not displayed.
     * * sniff - Policy that grants rights to use packet sniffer tool. * test - Policy that grants rights to run ping,
     * traceroute, bandwidth-test, wireless scan, snooper, and other test commands. * write - Policy that grants write access
     * to the router's configuration, except for user management. This policy does not allow to read the configuration, so make
     * sure to enable read policy as well. policy = ["ftp", "read", "write"]
     */
    readonly policies: pulumi.Output<string[]>;
    /**
     * This counter is incremented each time the script is executed.
     */
    readonly runCount: pulumi.Output<string>;
    /**
     * Script source code.
     */
    readonly source: pulumi.Output<string>;
    readonly systemScriptId: pulumi.Output<string>;
    /**
     * Create a SystemScript resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemScriptArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemScript resources.
 */
export interface SystemScriptState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Bypass permissions check when the script is being executed, useful when scripts are being executed from services that
     * have limited permissions, such as Netwatch.
     */
    dontRequirePermissions?: pulumi.Input<boolean>;
    invalid?: pulumi.Input<boolean>;
    /**
     * Date and time when the script was last invoked.
     */
    lastStarted?: pulumi.Input<string>;
    /**
     * Name of the script.
     */
    name?: pulumi.Input<string>;
    owner?: pulumi.Input<string>;
    /**
     * List of applicable policies: * ftp - Policy that grants full rights to log in remotely via FTP, to read/write/erase
     * files and to transfer files from/to the router. Should be used together with read/write policies. * password - Policy
     * that grants rights to change the password. * policy - Policy that grants user management rights. Should be used together
     * with the write policy. Allows also to see global variables created by other users (requires also 'test' policy). * read
     * - Policy that grants read access to the router's configuration. All console commands that do not alter router's
     * configuration are allowed. Doesn't affect FTP. * reboot - Policy that allows rebooting the router. * sensitive - Policy
     * that grants rights to change "hide sensitive" option, if this policy is disabled sensitive information is not displayed.
     * * sniff - Policy that grants rights to use packet sniffer tool. * test - Policy that grants rights to run ping,
     * traceroute, bandwidth-test, wireless scan, snooper, and other test commands. * write - Policy that grants write access
     * to the router's configuration, except for user management. This policy does not allow to read the configuration, so make
     * sure to enable read policy as well. policy = ["ftp", "read", "write"]
     */
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * This counter is incremented each time the script is executed.
     */
    runCount?: pulumi.Input<string>;
    /**
     * Script source code.
     */
    source?: pulumi.Input<string>;
    systemScriptId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemScript resource.
 */
export interface SystemScriptArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Bypass permissions check when the script is being executed, useful when scripts are being executed from services that
     * have limited permissions, such as Netwatch.
     */
    dontRequirePermissions?: pulumi.Input<boolean>;
    /**
     * Name of the script.
     */
    name?: pulumi.Input<string>;
    /**
     * List of applicable policies: * ftp - Policy that grants full rights to log in remotely via FTP, to read/write/erase
     * files and to transfer files from/to the router. Should be used together with read/write policies. * password - Policy
     * that grants rights to change the password. * policy - Policy that grants user management rights. Should be used together
     * with the write policy. Allows also to see global variables created by other users (requires also 'test' policy). * read
     * - Policy that grants read access to the router's configuration. All console commands that do not alter router's
     * configuration are allowed. Doesn't affect FTP. * reboot - Policy that allows rebooting the router. * sensitive - Policy
     * that grants rights to change "hide sensitive" option, if this policy is disabled sensitive information is not displayed.
     * * sniff - Policy that grants rights to use packet sniffer tool. * test - Policy that grants rights to run ping,
     * traceroute, bandwidth-test, wireless scan, snooper, and other test commands. * write - Policy that grants write access
     * to the router's configuration, except for user management. This policy does not allow to read the configuration, so make
     * sure to enable read policy as well. policy = ["ftp", "read", "write"]
     */
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Script source code.
     */
    source: pulumi.Input<string>;
    systemScriptId?: pulumi.Input<string>;
}
