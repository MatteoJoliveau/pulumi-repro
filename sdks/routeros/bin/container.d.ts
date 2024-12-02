import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Container extends pulumi.CustomResource {
    /**
     * Get an existing Container resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerState, opts?: pulumi.CustomResourceOptions): Container;
    /**
     * Returns true if the given object is an instance of Container.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Container;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * The architecture of the container image
     */
    readonly arch: pulumi.Output<string>;
    /**
     * The main purpose of a CMD is to provide defaults for an executing container. These defaults can include an executable,
     * or they can omit the executable, in which case you must specify an ENTRYPOINT instruction as well.
     */
    readonly cmd: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly containerId: pulumi.Output<string>;
    /**
     * Set custom DNS servers
     */
    readonly dns: pulumi.Output<string | undefined>;
    /**
     * Container NIS domain name
     */
    readonly domainName: pulumi.Output<string | undefined>;
    /**
     * An ENTRYPOINT allows to specify executable to run when starting container. Example: /bin/sh
     */
    readonly entrypoint: pulumi.Output<string | undefined>;
    /**
     * list of environmental variables (configured under /container envs ) to be used with container
     */
    readonly envlist: pulumi.Output<string | undefined>;
    /**
     * container *tar.gz tarball if the container is imported from a file
     */
    readonly file: pulumi.Output<string | undefined>;
    /**
     * Container host name
     */
    readonly hostname: pulumi.Output<string | undefined>;
    /**
     * veth interface to be used with the container
     */
    readonly interface: pulumi.Output<string>;
    /**
     * if set to yes, all container-generated output will be shown in the RouterOS log
     */
    readonly logging: pulumi.Output<boolean | undefined>;
    /**
     * Mounts from /container/mounts/ sub-menu to be used with this container
     */
    readonly mounts: pulumi.Output<string[] | undefined>;
    /**
     * Assign a name to the container
     */
    readonly name: pulumi.Output<string>;
    /**
     * The OS of the container image
     */
    readonly os: pulumi.Output<string>;
    /**
     * The container image name to be installed if an external registry is used (configured under /container/config set
     * registry-url=...)
     */
    readonly remoteImage: pulumi.Output<string | undefined>;
    /**
     * Used to save container store outside main memory
     */
    readonly rootDir: pulumi.Output<string | undefined>;
    /**
     * Start the container on boot
     */
    readonly startOnBoot: pulumi.Output<boolean | undefined>;
    /**
     * The status of the container
     */
    readonly status: pulumi.Output<string>;
    /**
     * Signal to stop the container.
     */
    readonly stopSignal: pulumi.Output<string | undefined>;
    /**
     * The tag of the container image
     */
    readonly tag: pulumi.Output<string>;
    readonly timeouts: pulumi.Output<outputs.ContainerTimeouts | undefined>;
    /**
     * Sets the username used
     */
    readonly user: pulumi.Output<string | undefined>;
    /**
     * The working directory for cmd entrypoint
     */
    readonly workdir: pulumi.Output<string>;
    /**
     * Create a Container resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerArgs, opts?: pulumi.CustomResourceOptions);
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
