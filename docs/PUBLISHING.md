# Publishing `@motion-pricing/free`

`@motion-pricing/free` depends on the framework-neutral `@motion-pricing/core` workspace. Both packages must be public so a normal npm installation can resolve the dependency. Consumers still install only `@motion-pricing/free`; npm installs Core transitively. This repository contains no Pro source.

## Before the first release

1. Confirm that the `@motion-pricing` npm organization exists and that your npm account can publish public packages in that scope.
2. Sign in with `npm login` and enable publishing 2FA on the npm account.
3. Verify the versions in `packages/core/package.json` and `packages/free/package.json` have never been published.
4. Run `npm run release:check` from the repository root and inspect the printed file list.
5. Publish Core first with `npm run publish:core`.
6. Publish Free with `npm run publish:free`.

Publishing is never performed by `build`, `validate`, or `release:check`.

## Later releases

1. Update the changelog and bump `packages/free/package.json` using semantic versioning.
2. Run `npm install --package-lock-only` so the lockfile records the new workspace version.
3. Run `npm run release:check`.
4. Create and publish the matching GitHub release.

The included `publish.yml` workflow can publish GitHub releases through npm trusted publishing. After the first manual release, configure the same trusted publisher for both npm packages with:

- GitHub owner: `s-icc`
- Repository: `motion-pricing-free`
- Workflow filename: `publish.yml`

Do not add an npm write token to the repository. The workflow uses short-lived OIDC credentials.
