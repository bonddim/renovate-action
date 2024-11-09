module.exports = {
  branchPrefix: "renovate-action/",
  platform: "github",
  dryRun: "full",
  onboarding: false,
  requireConfig: "optional",
  allowedPostUpgradeCommands: [".*"],
  repositories: ["bonddim/renovate-action", "bonddim/monitoring-mixin"],
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
