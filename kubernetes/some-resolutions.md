
# Errors/Decisions
---

- error
    ```
        Error from server (Forbidden): services is forbidden: User "system:serviceaccount:default:default" cannot list services in the namespace "kube-system"
    ```
- decision
    try:
        ```
        https://gist.github.com/ivaravko/b2739203f1201c450b5c96ae398d21e3
        ```
    if not work, change next one:
    ```
        - ci-robot-role-binding.yaml:
            kind: RoleBinding -> kind: ClusterRoleBinding
            roleRef.kind: Role -> roleRef.kind: ClusterRole
        - ci-robot-role.yaml:
            kind: Role -> kind: ClusterRole
    ```
