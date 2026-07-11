module.exports = {
    apps: [
        {
            name: "kmi-compro-site",
            script: ".next/standalone/server.js",
            cwd: "/root/kmi-compro-site",
            instances: 1,
            autorestart: true,
            watch: false,
            exec_mode: "fork",
            max_memory_restart: "512M",
            env: {
                NODE_ENV: "production",
                PORT: 3434,
                HOSTNAME: "0.0.0.0"
            }
        }
    ]
}