import * as pulumi from "@pulumi/pulumi";
export declare class File extends pulumi.CustomResource {
    /**
     * Get an existing File resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FileState, opts?: pulumi.CustomResourceOptions): File;
    /**
     * Returns true if the given object is an instance of File.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is File;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * The actual content of the file
     */
    readonly contents: pulumi.Output<string | undefined>;
    /**
     * A time when the file was created
     */
    readonly creationTime: pulumi.Output<string>;
    readonly fileId: pulumi.Output<string>;
    /**
     * A time when the file was modified
     */
    readonly lastModified: pulumi.Output<string>;
    /**
     * Name of the file
     */
    readonly name: pulumi.Output<string>;
    /**
     * Architecture that package is built for. Applies only to RouterOS ".npk" files
     */
    readonly packageArchitecture: pulumi.Output<string>;
    /**
     * A time when the package was built. Applies only to RouterOS ".npk" files
     */
    readonly packageBuiltTime: pulumi.Output<string>;
    /**
     * Name of the installable package. Applies only to RouterOS ".npk" files
     */
    readonly packageName: pulumi.Output<string>;
    /**
     * A version of the installable package. Applies only to RouterOS ".npk" files
     */
    readonly packageVersion: pulumi.Output<string>;
    /**
     * File size in bytes
     */
    readonly size: pulumi.Output<number>;
    /**
     * Type of the file. For folders, the file type is the directory
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a File resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FileArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering File resources.
 */
export interface FileState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The actual content of the file
     */
    contents?: pulumi.Input<string>;
    /**
     * A time when the file was created
     */
    creationTime?: pulumi.Input<string>;
    fileId?: pulumi.Input<string>;
    /**
     * A time when the file was modified
     */
    lastModified?: pulumi.Input<string>;
    /**
     * Name of the file
     */
    name?: pulumi.Input<string>;
    /**
     * Architecture that package is built for. Applies only to RouterOS ".npk" files
     */
    packageArchitecture?: pulumi.Input<string>;
    /**
     * A time when the package was built. Applies only to RouterOS ".npk" files
     */
    packageBuiltTime?: pulumi.Input<string>;
    /**
     * Name of the installable package. Applies only to RouterOS ".npk" files
     */
    packageName?: pulumi.Input<string>;
    /**
     * A version of the installable package. Applies only to RouterOS ".npk" files
     */
    packageVersion?: pulumi.Input<string>;
    /**
     * File size in bytes
     */
    size?: pulumi.Input<number>;
    /**
     * Type of the file. For folders, the file type is the directory
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a File resource.
 */
export interface FileArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The actual content of the file
     */
    contents?: pulumi.Input<string>;
    fileId?: pulumi.Input<string>;
    /**
     * Name of the file
     */
    name?: pulumi.Input<string>;
}
