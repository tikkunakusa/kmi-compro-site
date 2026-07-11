module.exports = {
    apps: [
        {
            name: "kmi-compro-site",
            script: ".next/standalone/server.js",
            cwd: "/root/kmi-compro-site",
            instances: 1,
            exec_mode: "fork",
            env: {
                NODE_ENV: "production",
                PORT: 3434
            }
        }
    ]
}