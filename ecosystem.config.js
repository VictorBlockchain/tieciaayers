module.exports = {
    apps: [
      {
        name: 'GirlWif',
        script: 'npm',
        args: 'run dev',
        exec_mode: 'fork',
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
      },
    ],
  };
