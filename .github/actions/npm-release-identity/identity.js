"use strict";

const publicRepositories = new Set(["fulcrumapp/fulcrum-js", "fulcrumapp/fulcrum-core"]);
const publicBotId = 350331494;
const sharedBotId = 278782705;
const query = `
  query($owner: String!, $name: String!, $oid: GitObjectID!) {
    repository(owner: $owner, name: $name) {
      object(oid: $oid) {
        ... on Commit {
          oid
          author { user { databaseId login } }
          signature { isValid wasSignedByGitHub }
        }
      }
    }
  }
`;

function verifyIdentity(commit, repository, sha) {
  if (!/^fulcrumapp\/[A-Za-z0-9_.-]+$/i.test(repository || "")) {
    throw new Error("Release identity requires a Fulcrum repository");
  }
  const expected = publicRepositories.has(repository.toLowerCase()) ? publicBotId : sharedBotId;
  if (commit?.oid !== sha || commit.author?.user?.databaseId !== expected ||
      commit.signature?.isValid !== true || commit.signature?.wasSignedByGitHub !== true) {
    throw new Error("Release commit must be GitHub-signed and authored by the configured Fulcrum release App");
  }
}

function verifyRemoteIdentity(gh, repository, sha) {
  if (!/^[0-9a-f]{40}$/i.test(sha || "") ||
      !/^fulcrumapp\/[A-Za-z0-9_.-]+$/i.test(repository || "")) {
    throw new Error("Invalid release commit identity lookup");
  }
  const [owner, name] = repository.split("/");
  const result = JSON.parse(gh(["api", "graphql", "--input", "-"],
    JSON.stringify({ query, variables: { owner, name, oid: sha } })));
  if (result.errors?.length) throw new Error("GitHub could not verify the release commit identity");
  verifyIdentity(result.data?.repository?.object, repository, sha);
}

module.exports = { verifyIdentity, verifyRemoteIdentity };
