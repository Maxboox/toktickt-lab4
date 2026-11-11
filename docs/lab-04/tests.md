# Plan de Tests - Lab 4

| Test ID | Type | Requirement | What It Tests | Expected Result | Automated Test File |
|---|---|---|---|---|---|
| API-01 | API | AC-01 | Création d'une Action Taken valide | Status 201 | server/tests/lab-04/actions-taken.api.test.ts |
| API-02 | API | AC-02 | Création sans Follow-up Note | Status 400 | server/tests/lab-04/actions-taken.api.test.ts |
| API-03 | API | AC-03 | Dashboard Requester (sécurité) | Retourne seulement ses tickets | server/tests/lab-04/requester-dashboard.api.test.ts |
| E2E-01| E2E | Dashboard | Accès au dashboard IT Staff | Affiche les métriques | e2e/lab-04/staff-dashboard.spec.ts |
