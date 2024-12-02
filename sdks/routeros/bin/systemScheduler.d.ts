import * as pulumi from "@pulumi/pulumi";
export declare class SystemScheduler extends pulumi.CustomResource {
    /**
     * Get an existing SystemScheduler resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemSchedulerState, opts?: pulumi.CustomResourceOptions): SystemScheduler;
    /**
     * Returns true if the given object is an instance of SystemScheduler.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemScheduler;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Interval between two script executions, if time interval is set to zero, the script is only executed at its start time,
     * otherwise it is executed repeatedly at the time interval is specified.
     */
    readonly interval: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    readonly nextRun: pulumi.Output<string>;
    /**
     * Name of the script to execute. It must be presented at /system script.
     */
    readonly onEvent: pulumi.Output<string>;
    readonly owner: pulumi.Output<string>;
    /**
     * List of applicable policies: * dude - Policy that grants rights to log in to dude server. * ftp - Policy that grants
     * full rights to log in remotely via FTP, to read/write/erase files and to transfer files from/to the router. Should be
     * used together with read/write policies. * password - Policy that grants rights to change the password. * policy - Policy
     * that grants user management rights. Should be used together with the write policy. Allows also to see global variables
     * created by other users (requires also 'test' policy). * read - Policy that grants read access to the router's
     * configuration. All console commands that do not alter router's configuration are allowed. Doesn't affect FTP. * reboot -
     * Policy that allows rebooting the router. * romon - Policy that grants rights to connect to RoMon server. * sensitive -
     * Policy that grants rights to change "hide sensitive" option, if this policy is disabled sensitive information is not
     * displayed. * sniff - Policy that grants rights to use packet sniffer tool. * test - Policy that grants rights to run
     * ping, traceroute, bandwidth-test, wireless scan, snooper, and other test commands. * write - Policy that grants write
     * access to the router's configuration, except for user management. This policy does not allow to read the configuration,
     * so make sure to enable read policy as well. policy = ["ftp", "read", "write"]
     */
    readonly policies: pulumi.Output<string[]>;
    /**
     * This counter is incremented each time the script is executed.
     */
    readonly runCount: pulumi.Output<string>;
    /**
     * Date of the first script execution.
     */
    readonly startDate: pulumi.Output<string>;
    /**
     * Time of the first script execution. If scheduler item has start-time set to startup, it behaves as if start-time and
     * start-date were set to time 3 seconds after console starts up. It means that all scripts having start-time is startup
     * and interval is 0 will be executed once each time router boots. If the interval is set to value other than 0 scheduler
     * will not run at startup.
     */
    readonly startTime: pulumi.Output<string>;
    readonly systemSchedulerId: pulumi.Output<string>;
    /**
     * Create a SystemScheduler resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemSchedulerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemScheduler resources.
 */
export interface SystemSchedulerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Interval between two script executions, if time interval is set to zero, the script is only executed at its start time,
     * otherwise it is executed repeatedly at the time interval is specified.
     */
    interval?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nextRun?: pulumi.Input<string>;
    /**
     * Name of the script to execute. It must be presented at /system script.
     */
    onEvent?: pulumi.Input<string>;
    owner?: pulumi.Input<string>;
    /**
     * List of applicable policies: * dude - Policy that grants rights to log in to dude server. * ftp - Policy that grants
     * full rights to log in remotely via FTP, to read/write/erase files and to transfer files from/to the router. Should be
     * used together with read/write policies. * password - Policy that grants rights to change the password. * policy - Policy
     * that grants user management rights. Should be used together with the write policy. Allows also to see global variables
     * created by other users (requires also 'test' policy). * read - Policy that grants read access to the router's
     * configuration. All console commands that do not alter router's configuration are allowed. Doesn't affect FTP. * reboot -
     * Policy that allows rebooting the router. * romon - Policy that grants rights to connect to RoMon server. * sensitive -
     * Policy that grants rights to change "hide sensitive" option, if this policy is disabled sensitive information is not
     * displayed. * sniff - Policy that grants rights to use packet sniffer tool. * test - Policy that grants rights to run
     * ping, traceroute, bandwidth-test, wireless scan, snooper, and other test commands. * write - Policy that grants write
     * access to the router's configuration, except for user management. This policy does not allow to read the configuration,
     * so make sure to enable read policy as well. policy = ["ftp", "read", "write"]
     */
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * This counter is incremented each time the script is executed.
     */
    runCount?: pulumi.Input<string>;
    /**
     * Date of the first script execution.
     */
    startDate?: pulumi.Input<string>;
    /**
     * Time of the first script execution. If scheduler item has start-time set to startup, it behaves as if start-time and
     * start-date were set to time 3 seconds after console starts up. It means that all scripts having start-time is startup
     * and interval is 0 will be executed once each time router boots. If the interval is set to value other than 0 scheduler
     * will not run at startup.
     */
    startTime?: pulumi.Input<string>;
    systemSchedulerId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemScheduler resource.
 */
export interface SystemSchedulerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Interval between two script executions, if time interval is set to zero, the script is only executed at its start time,
     * otherwise it is executed repeatedly at the time interval is specified.
     */
    interval?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Name of the script to execute. It must be presented at /system script.
     */
    onEvent: pulumi.Input<string>;
    /**
     * List of applicable policies: * dude - Policy that grants rights to log in to dude server. * ftp - Policy that grants
     * full rights to log in remotely via FTP, to read/write/erase files and to transfer files from/to the router. Should be
     * used together with read/write policies. * password - Policy that grants rights to change the password. * policy - Policy
     * that grants user management rights. Should be used together with the write policy. Allows also to see global variables
     * created by other users (requires also 'test' policy). * read - Policy that grants read access to the router's
     * configuration. All console commands that do not alter router's configuration are allowed. Doesn't affect FTP. * reboot -
     * Policy that allows rebooting the router. * romon - Policy that grants rights to connect to RoMon server. * sensitive -
     * Policy that grants rights to change "hide sensitive" option, if this policy is disabled sensitive information is not
     * displayed. * sniff - Policy that grants rights to use packet sniffer tool. * test - Policy that grants rights to run
     * ping, traceroute, bandwidth-test, wireless scan, snooper, and other test commands. * write - Policy that grants write
     * access to the router's configuration, except for user management. This policy does not allow to read the configuration,
     * so make sure to enable read policy as well. policy = ["ftp", "read", "write"]
     */
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Date of the first script execution.
     */
    startDate?: pulumi.Input<string>;
    /**
     * Time of the first script execution. If scheduler item has start-time set to startup, it behaves as if start-time and
     * start-date were set to time 3 seconds after console starts up. It means that all scripts having start-time is startup
     * and interval is 0 will be executed once each time router boots. If the interval is set to value other than 0 scheduler
     * will not run at startup.
     */
    startTime?: pulumi.Input<string>;
    systemSchedulerId?: pulumi.Input<string>;
}
