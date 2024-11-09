module.exports = {
  branchPrefix: "renovate-action/",
  platform: "github",
  dryRun: "full",
  onboarding: false,
  requireConfig: false,
  allowedPostUpgradeCommands: [".*"],
  repositories: ["bonddim/github-action", "bonddim/monitoring-mixin"],
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
      minimumReleaseAge: 0,
    },
  ],
};
