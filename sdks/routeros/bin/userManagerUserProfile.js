"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagerUserProfile = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class UserManagerUserProfile extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerUserProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new UserManagerUserProfile(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of UserManagerUserProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserManagerUserProfile.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___skip_"] = state ? state.___skip_ : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
            resourceInputs["userManagerUserProfileId"] = state ? state.userManagerUserProfileId : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.profile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profile'");
            }
            if ((!args || args.user === undefined) && !opts.urn) {
                throw new Error("Missing required property 'user'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___skip_"] = args ? args.___skip_ : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["userManagerUserProfileId"] = args ? args.userManagerUserProfileId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserManagerUserProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.UserManagerUserProfile = UserManagerUserProfile;
/** @internal */
UserManagerUserProfile.__pulumiType = 'routeros:index/userManagerUserProfile:UserManagerUserProfile';
//# sourceMappingURL=userManagerUserProfile.js.map