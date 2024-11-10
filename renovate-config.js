module.exports = {
  branchPrefix: "renovate-action/",
  platform: "github",
  onboarding: false,
  requireConfig: "optional",
  allowedPostUpgradeCommands: [".*"],
  repositories: ["bonddim/monitoring-mixin"],
  packageRules: [
    {
      description: "lockFileMaintenance",
      matchUpdateTypes: [
        "pin",
        "digest",
        "patch",
        "minor",
        "major",
        "lockFileMaintenance",
      ],
      dependencyDashboardApproval: false,
      minimumReleaseAge: "0",
    },
  ],
};
