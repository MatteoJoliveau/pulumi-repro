"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemCertificateScepServer = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class SystemCertificateScepServer extends pulumi.CustomResource {
    /**
     * Get an existing SystemCertificateScepServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new SystemCertificateScepServer(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of SystemCertificateScepServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemCertificateScepServer.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["caCert"] = state ? state.caCert : undefined;
            resourceInputs["daysValid"] = state ? state.daysValid : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["nextCaCert"] = state ? state.nextCaCert : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["requestLifetime"] = state ? state.requestLifetime : undefined;
            resourceInputs["systemCertificateScepServerId"] = state ? state.systemCertificateScepServerId : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.caCert === undefined) && !opts.urn) {
                throw new Error("Missing required property 'caCert'");
            }
            if ((!args || args.path === undefined) && !opts.urn) {
                throw new Error("Missing required property 'path'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["caCert"] = args ? args.caCert : undefined;
            resourceInputs["daysValid"] = args ? args.daysValid : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["nextCaCert"] = args ? args.nextCaCert : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["requestLifetime"] = args ? args.requestLifetime : undefined;
            resourceInputs["systemCertificateScepServerId"] = args ? args.systemCertificateScepServerId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemCertificateScepServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.SystemCertificateScepServer = SystemCertificateScepServer;
/** @internal */
SystemCertificateScepServer.__pulumiType = 'routeros:index/systemCertificateScepServer:SystemCertificateScepServer';
//# sourceMappingURL=systemCertificateScepServer.js.map