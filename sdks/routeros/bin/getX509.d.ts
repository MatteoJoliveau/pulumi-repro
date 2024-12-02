import * as pulumi from "@pulumi/pulumi";
export declare function getX509(args: GetX509Args, opts?: pulumi.InvokeOptions): Promise<GetX509Result>;
/**
 * A collection of arguments for invoking getX509.
 */
export interface GetX509Args {
    data: string;
}
/**
 * A collection of values returned by getX509.
 */
export interface GetX509Result {
    readonly akid: string;
    readonly authority: boolean;
    readonly commonName: string;
    readonly data: string;
    readonly digestAlgorithm: string;
    readonly fingerprint: string;
    readonly id: string;
    readonly invalidAfter: string;
    readonly invalidBefore: string;
    readonly issuer: string;
    readonly keyType: string;
    readonly pem: string;
    readonly serialNumber: string;
    readonly signatureAlgorithm: string;
    readonly skid: string;
    readonly subject: string;
    readonly subjectAltName: string;
    readonly version: number;
}
export declare function getX509Output(args: GetX509OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetX509Result>;
/**
 * A collection of arguments for invoking getX509.
 */
export interface GetX509OutputArgs {
    data: pulumi.Input<string>;
}
