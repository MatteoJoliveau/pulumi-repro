/**
 * Path to MikroTik's certificate authority file.
 */
export declare const caCertificate: string | undefined;
/**
 * URL of the MikroTik router, default is TLS connection to REST. * API: api[s]://host[:port] * api://router.local *
 * apis://router.local:8729 * REST: http[s]://host * http://router.local * https://router.local * router.local * 127.0.0.1
 * export ROS_HOSTURL=router.local or export MIKROTIK_HOST=router.local
 */
export declare const hosturl: string | undefined;
/**
 * Whether to verify the SSL certificate or not.
 */
export declare const insecure: boolean | undefined;
/**
 * Password for the MikroTik user.
 */
export declare const password: string | undefined;
/**
 * Suppress the system object deletion warning.
 */
export declare const suppressSysoDelWarn: boolean | undefined;
/**
 * Username for the MikroTik WEB/Winbox. export ROS_USERNAME=admin or export MIKROTIK_USER=admin
 */
export declare const username: string | undefined;
