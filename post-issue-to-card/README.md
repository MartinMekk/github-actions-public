## Description

Uses a http POST to add PR to Kanbanize Card

## Inputs

| parameter | description | required | default |
| --- | --- | --- | --- |
| token | GitHub token. Defaults to `github.token`. | `true` | ${{ github.token }} |
| apikey | API key to Kanbanize. | `true` |  |
| cardIdRegex | Regular expresion for obtaining cardId from pull request description. | `false` | (KB|KBi)-[0-9]+ |
| kanbanizeSubdomain | Subdomain used for Kanbanize | `true` | norwegianpublicroadsadmin |


## Runs

This action is a `node16` action.


