import * as pulumi from "@pulumi/pulumi";
export declare class SystemLoggingAction extends pulumi.CustomResource {
    /**
     * Get an existing SystemLoggingAction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemLoggingActionState, opts?: pulumi.CustomResourceOptions): SystemLoggingAction;
    /**
     * Returns true if the given object is an instance of SystemLoggingAction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemLoggingAction;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Whether to use bsd-syslog as defined in RFC 3164.
     */
    readonly bsdSyslog: pulumi.Output<boolean | undefined>;
    /**
     * It's the default item.
     */
    readonly default: pulumi.Output<boolean>;
    /**
     * Specifies number of files used to store log messages, applicable only if `action=disk`.
     */
    readonly diskFileCount: pulumi.Output<number | undefined>;
    /**
     * Name of the file used to store log messages, applicable only if `action=disk`.
     */
    readonly diskFileName: pulumi.Output<string | undefined>;
    /**
     * Specifies maximum size of file in lines, applicable only if `action=disk`.
     */
    readonly diskLinesPerFile: pulumi.Output<number | undefined>;
    /**
     * Whether to stop to save log messages to disk after the specified disk-lines-per-file and disk-file-count number is
     * reached, applicable only if `action=disk`.
     */
    readonly diskStopOnFull: pulumi.Output<boolean | undefined>;
    /**
     * Whether to use tls when sending email, applicable only if `action=email`.
     */
    readonly emailStartTls: pulumi.Output<boolean | undefined>;
    /**
     * Email address where logs are sent, applicable only if `action=email`.
     */
    readonly emailTo: pulumi.Output<string | undefined>;
    /**
     * Number of records in local memory buffer, applicable only if `action=memory`.
     */
    readonly memoryLines: pulumi.Output<number | undefined>;
    /**
     * Whether to stop to save log messages in local buffer after the specified memory-lines number is reached.
     */
    readonly memoryStopOnFull: pulumi.Output<boolean | undefined>;
    /**
     * Name of an action.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Whether to keep log messages, which have not yet been displayed in console, applicable if `action=echo`.
     */
    readonly remember: pulumi.Output<boolean | undefined>;
    /**
     * Remote logging server's IP/IPv6 address, applicable if `action=remote`.
     */
    readonly remote: pulumi.Output<string | undefined>;
    /**
     * Remote logging server's UDP port, applicable if `action=remote`.
     */
    readonly remotePort: pulumi.Output<number | undefined>;
    /**
     * Source address used when sending packets to remote server, applicable if `action=remote`.
     */
    readonly srcAddress: pulumi.Output<string | undefined>;
    /**
     * SYSLOG facility, applicable if `action=remote`.
     */
    readonly syslogFacility: pulumi.Output<string | undefined>;
    /**
     * Severity level indicator defined in RFC 3164, applicable if `action=remote`.
     */
    readonly syslogSeverity: pulumi.Output<string | undefined>;
    /**
     * SYSLOG time format (`bsd-syslog` or `iso8601`).
     */
    readonly syslogTimeFormat: pulumi.Output<string | undefined>;
    readonly systemLoggingActionId: pulumi.Output<string>;
    /**
     * Storage facility or target of log messages.
     */
    readonly target: pulumi.Output<string>;
    /**
     * Create a SystemLoggingAction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemLoggingActionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemLoggingAction resources.
 */
export interface SystemLoggingActionState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to use bsd-syslog as defined in RFC 3164.
     */
    bsdSyslog?: pulumi.Input<boolean>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    /**
     * Specifies number of files used to store log messages, applicable only if `action=disk`.
     */
    diskFileCount?: pulumi.Input<number>;
    /**
     * Name of the file used to store log messages, applicable only if `action=disk`.
     */
    diskFileName?: pulumi.Input<string>;
    /**
     * Specifies maximum size of file in lines, applicable only if `action=disk`.
     */
    diskLinesPerFile?: pulumi.Input<number>;
    /**
     * Whether to stop to save log messages to disk after the specified disk-lines-per-file and disk-file-count number is
     * reached, applicable only if `action=disk`.
     */
    diskStopOnFull?: pulumi.Input<boolean>;
    /**
     * Whether to use tls when sending email, applicable only if `action=email`.
     */
    emailStartTls?: pulumi.Input<boolean>;
    /**
     * Email address where logs are sent, applicable only if `action=email`.
     */
    emailTo?: pulumi.Input<string>;
    /**
     * Number of records in local memory buffer, applicable only if `action=memory`.
     */
    memoryLines?: pulumi.Input<number>;
    /**
     * Whether to stop to save log messages in local buffer after the specified memory-lines number is reached.
     */
    memoryStopOnFull?: pulumi.Input<boolean>;
    /**
     * Name of an action.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether to keep log messages, which have not yet been displayed in console, applicable if `action=echo`.
     */
    remember?: pulumi.Input<boolean>;
    /**
     * Remote logging server's IP/IPv6 address, applicable if `action=remote`.
     */
    remote?: pulumi.Input<string>;
    /**
     * Remote logging server's UDP port, applicable if `action=remote`.
     */
    remotePort?: pulumi.Input<number>;
    /**
     * Source address used when sending packets to remote server, applicable if `action=remote`.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * SYSLOG facility, applicable if `action=remote`.
     */
    syslogFacility?: pulumi.Input<string>;
    /**
     * Severity level indicator defined in RFC 3164, applicable if `action=remote`.
     */
    syslogSeverity?: pulumi.Input<string>;
    /**
     * SYSLOG time format (`bsd-syslog` or `iso8601`).
     */
    syslogTimeFormat?: pulumi.Input<string>;
    systemLoggingActionId?: pulumi.Input<string>;
    /**
     * Storage facility or target of log messages.
     */
    target?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemLoggingAction resource.
 */
export interface SystemLoggingActionArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to use bsd-syslog as defined in RFC 3164.
     */
    bsdSyslog?: pulumi.Input<boolean>;
    /**
     * Specifies number of files used to store log messages, applicable only if `action=disk`.
     */
    diskFileCount?: pulumi.Input<number>;
    /**
     * Name of the file used to store log messages, applicable only if `action=disk`.
     */
    diskFileName?: pulumi.Input<string>;
    /**
     * Specifies maximum size of file in lines, applicable only if `action=disk`.
     */
    diskLinesPerFile?: pulumi.Input<number>;
    /**
     * Whether to stop to save log messages to disk after the specified disk-lines-per-file and disk-file-count number is
     * reached, applicable only if `action=disk`.
     */
    diskStopOnFull?: pulumi.Input<boolean>;
    /**
     * Whether to use tls when sending email, applicable only if `action=email`.
     */
    emailStartTls?: pulumi.Input<boolean>;
    /**
     * Email address where logs are sent, applicable only if `action=email`.
     */
    emailTo?: pulumi.Input<string>;
    /**
     * Number of records in local memory buffer, applicable only if `action=memory`.
     */
    memoryLines?: pulumi.Input<number>;
    /**
     * Whether to stop to save log messages in local buffer after the specified memory-lines number is reached.
     */
    memoryStopOnFull?: pulumi.Input<boolean>;
    /**
     * Name of an action.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether to keep log messages, which have not yet been displayed in console, applicable if `action=echo`.
     */
    remember?: pulumi.Input<boolean>;
    /**
     * Remote logging server's IP/IPv6 address, applicable if `action=remote`.
     */
    remote?: pulumi.Input<string>;
    /**
     * Remote logging server's UDP port, applicable if `action=remote`.
     */
    remotePort?: pulumi.Input<number>;
    /**
     * Source address used when sending packets to remote server, applicable if `action=remote`.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * SYSLOG facility, applicable if `action=remote`.
     */
    syslogFacility?: pulumi.Input<string>;
    /**
     * Severity level indicator defined in RFC 3164, applicable if `action=remote`.
     */
    syslogSeverity?: pulumi.Input<string>;
    /**
     * SYSLOG time format (`bsd-syslog` or `iso8601`).
     */
    syslogTimeFormat?: pulumi.Input<string>;
    systemLoggingActionId?: pulumi.Input<string>;
    /**
     * Storage facility or target of log messages.
     */
    target: pulumi.Input<string>;
}
