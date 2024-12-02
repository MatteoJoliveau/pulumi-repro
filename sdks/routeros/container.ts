// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Container extends pulumi.CustomResource {
    /**
     * Get an existing Container resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerState, opts?: pulumi.CustomResourceOptions): Container {
        return new Container(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/container:Container';

    /**
     * Returns true if the given object is an instance of Container.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Container {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Container.__pulumiType;
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
     * The architecture of the container image
     */
    public /*out*/ readonly arch!: pulumi.Output<string>;
    /**
     * The main purpose of a CMD is to provide defaults for an executing container. These defaults can include an executable,
     * or they can omit the executable, in which case you must specify an ENTRYPOINT instruction as well.
     */
    public readonly cmd!: pulumi.Output<string | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly containerId!: pulumi.Output<string>;
    /**
     * Set custom DNS servers
     */
    public readonly dns!: pulumi.Output<string | undefined>;
    /**
     * Container NIS domain name
     */
    public readonly domainName!: pulumi.Output<string | undefined>;
    /**
     * An ENTRYPOINT allows to specify executable to run when starting container. Example: /bin/sh
     */
    public readonly entrypoint!: pulumi.Output<string | undefined>;
    /**
     * list of environmental variables (configured under /container envs ) to be used with container
     */
    public readonly envlist!: pulumi.Output<string | undefined>;
    /**
     * container *tar.gz tarball if the container is imported from a file
     */
    public readonly file!: pulumi.Output<string | undefined>;
    /**
     * Container host name
     */
    public readonly hostname!: pulumi.Output<string | undefined>;
    /**
     * veth interface to be used with the container
     */
    public readonly interface!: pulumi.Output<string>;
    /**
     * if set to yes, all container-generated output will be shown in the RouterOS log
     */
    public readonly logging!: pulumi.Output<boolean | undefined>;
    /**
     * Mounts from /container/mounts/ sub-menu to be used with this container
     */
    public readonly mounts!: pulumi.Output<string[] | undefined>;
    /**
     * Assign a name to the container
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The OS of the container image
     */
    public /*out*/ readonly os!: pulumi.Output<string>;
    /**
     * The container image name to be installed if an external registry is used (configured under /container/config set
     * registry-url=...)
     */
    public readonly remoteImage!: pulumi.Output<string | undefined>;
    /**
     * Used to save container store outside main memory
     */
    public readonly rootDir!: pulumi.Output<string | undefined>;
    /**
     * Start the container on boot
     */
    public readonly startOnBoot!: pulumi.Output<boolean | undefined>;
    /**
     * The status of the container
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Signal to stop the container.
     */
    public readonly stopSignal!: pulumi.Output<string | undefined>;
    /**
     * The tag of the container image
     */
    public /*out*/ readonly tag!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ContainerTimeouts | undefined>;
    /**
     * Sets the username used
     */
    public readonly user!: pulumi.Output<string | undefined>;
    /**
     * The working directory for cmd entrypoint
     */
    public readonly workdir!: pulumi.Output<string>;

    /**
     * Create a Container resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContainerArgs | ContainerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ContainerState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["arch"] = state ? state.arch : undefined;
            resourceInputs["cmd"] = state ? state.cmd : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["containerId"] = state ? state.containerId : undefined;
            resourceInputs["dns"] = state ? state.dns : undefined;
            resourceInputs["domainName"] = state ? state.domainName : undefined;
            resourceInputs["entrypoint"] = state ? state.entrypoint : undefined;
            resourceInputs["envlist"] = state ? state.envlist : undefined;
            resourceInputs["file"] = state ? state.file : undefined;
            resourceInputs["hostname"] = state ? state.hostname : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["logging"] = state ? state.logging : undefined;
            resourceInputs["mounts"] = state ? state.mounts : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["os"] = state ? state.os : undefined;
            resourceInputs["remoteImage"] = state ? state.remoteImage : undefined;
            resourceInputs["rootDir"] = state ? state.rootDir : undefined;
            resourceInputs["startOnBoot"] = state ? state.startOnBoot : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["stopSignal"] = state ? state.stopSignal : undefined;
            resourceInputs["tag"] = state ? state.tag : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
            resourceInputs["workdir"] = state ? state.workdir : undefined;
        } else {
            const args = argsOrState as ContainerArgs | undefined;
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["cmd"] = args ? args.cmd : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["containerId"] = args ? args.containerId : undefined;
            resourceInputs["dns"] = args ? args.dns : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["entrypoint"] = args ? args.entrypoint : undefined;
            resourceInputs["envlist"] = args ? args.envlist : undefined;
            resourceInputs["file"] = args ? args.file : undefined;
            resourceInputs["hostname"] = args ? args.hostname : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["logging"] = args ? args.logging : undefined;
            resourceInputs["mounts"] = args ? args.mounts : undefined;
            resourceInputs["remoteImage"] = args ? args.remoteImage : undefined;
            resourceInputs["rootDir"] = args ? args.rootDir : undefined;
            resourceInputs["startOnBoot"] = args ? args.startOnBoot : undefined;
            resourceInputs["stopSignal"] = args ? args.stopSignal : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["workdir"] = args ? args.workdir : undefined;
            resourceInputs["arch"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["os"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["tag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Container.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Container resources.
 */
export interface ContainerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The architecture of the container image
     */
    arch?: pulumi.Input<string>;
    /**
     * The main purpose of a CMD is to provide defaults for an executing container. These defaults can include an executable,
     * or they can omit the executable, in which case you must specify an ENTRYPOINT instruction as well.
     */
    cmd?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    containerId?: pulumi.Input<string>;
    /**
     * Set custom DNS servers
     */
    dns?: pulumi.Input<string>;
    /**
     * Container NIS domain name
     */
    domainName?: pulumi.Input<string>;
    /**
     * An ENTRYPOINT allows to specify executable to run when starting container. Example: /bin/sh
     */
    entrypoint?: pulumi.Input<string>;
    /**
     * list of environmental variables (configured under /container envs ) to be used with container
     */
    envlist?: pulumi.Input<string>;
    /**
     * container *tar.gz tarball if the container is imported from a file
     */
    file?: pulumi.Input<string>;
    /**
     * Container host name
     */
    hostname?: pulumi.Input<string>;
    /**
     * veth interface to be used with the container
     */
    interface?: pulumi.Input<string>;
    /**
     * if set to yes, all container-generated output will be shown in the RouterOS log
     */
    logging?: pulumi.Input<boolean>;
    /**
     * Mounts from /container/mounts/ sub-menu to be used with this container
     */
    mounts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Assign a name to the container
     */
    name?: pulumi.Input<string>;
    /**
     * The OS of the container image
     */
    os?: pulumi.Input<string>;
    /**
     * The container image name to be installed if an external registry is used (configured under /container/config set
     * registry-url=...)
     */
    remoteImage?: pulumi.Input<string>;
    /**
     * Used to save container store outside main memory
     */
    rootDir?: pulumi.Input<string>;
    /**
     * Start the container on boot
     */
    startOnBoot?: pulumi.Input<boolean>;
    /**
     * The status of the container
     */
    status?: pulumi.Input<string>;
    /**
     * Signal to stop the container.
     */
    stopSignal?: pulumi.Input<string>;
    /**
     * The tag of the container image
     */
    tag?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ContainerTimeouts>;
    /**
     * Sets the username used
     */
    user?: pulumi.Input<string>;
    /**
     * The working directory for cmd entrypoint
     */
    workdir?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Container resource.
 */
export interface ContainerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The main purpose of a CMD is to provide defaults for an executing container. These defaults can include an executable,
     * or they can omit the executable, in which case you must specify an ENTRYPOINT instruction as well.
     */
    cmd?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    containerId?: pulumi.Input<string>;
    /**
     * Set custom DNS servers
     */
    dns?: pulumi.Input<string>;
    /**
     * Container NIS domain name
     */
    domainName?: pulumi.Input<string>;
    /**
     * An ENTRYPOINT allows to specify executable to run when starting container. Example: /bin/sh
     */
    entrypoint?: pulumi.Input<string>;
    /**
     * list of environmental variables (configured under /container envs ) to be used with container
     */
    envlist?: pulumi.Input<string>;
    /**
     * container *tar.gz tarball if the container is imported from a file
     */
    file?: pulumi.Input<string>;
    /**
     * Container host name
     */
    hostname?: pulumi.Input<string>;
    /**
     * veth interface to be used with the container
     */
    interface: pulumi.Input<string>;
    /**
     * if set to yes, all container-generated output will be shown in the RouterOS log
     */
    logging?: pulumi.Input<boolean>;
    /**
     * Mounts from /container/mounts/ sub-menu to be used with this container
     */
    mounts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The container image name to be installed if an external registry is used (configured under /container/config set
     * registry-url=...)
     */
    remoteImage?: pulumi.Input<string>;
    /**
     * Used to save container store outside main memory
     */
    rootDir?: pulumi.Input<string>;
    /**
     * Start the container on boot
     */
    startOnBoot?: pulumi.Input<boolean>;
    /**
     * Signal to stop the container.
     */
    stopSignal?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ContainerTimeouts>;
    /**
     * Sets the username used
     */
    user?: pulumi.Input<string>;
    /**
     * The working directory for cmd entrypoint
     */
    workdir?: pulumi.Input<string>;
}