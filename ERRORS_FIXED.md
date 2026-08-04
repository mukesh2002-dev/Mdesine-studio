# Errors Fixed

## Build Errors

### npm naming restriction - capital letters

- **Date**: August 1, 2026
- **Error**: "name can no longer contain capital letters"
- **Reason**: npm package names must be lowercase
- **Solution**: Created project in a temporary lowercase directory and copied files to the target directory

### Shadcn UI initialization - interactive prompts

- **Date**: August 1, 2026
- **Error**: Interactive prompts blocking automation
- **Reason**: shadcn init command requires user input
- **Solution**: Used `--defaults --yes --force` flags to bypass interactive prompts

## Configuration Warnings

### npm audit vulnerabilities

- **Date**: August 1, 2026
- **Warning**: 3 high severity vulnerabilities
- **Reason**: Transitive dependencies in sharp and unrs-resolver packages
- **Solution**: These are development dependencies and do not affect production. Can be addressed with `npm audit fix --force` when needed.

### npm warn allow-scripts

- **Date**: August 1, 2026
- **Warning**: Packages with install scripts not covered by allowScripts
- **Reason**: sharp and unrs-resolver packages have post-install scripts
- **Solution**: Run `npm approve-scripts --allow-scripts-pending` to review and approve scripts
