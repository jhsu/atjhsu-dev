export async function buildPullRequestPayload({ issue, draftPath, branchName }) {
  return {
    issue,
    branchName,
    draftPath,
    title: `Draft blog post for #${issue.number}: ${issue.title}`,
  };
}
