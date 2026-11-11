# Spécification Lab 4 - TokTickt

## 1. Sprint Goal
Ajouter la gestion des "Actions Taken" aux tickets et créer des dashboards pour les requérants et le staff IT.

## 2. Business Rules (BR)
- **BR-01** : Une Action Taken appartient à exactement un Ticket.
- **BR-02** : La note de suivi (Follow-up Note) est obligatoire si "Follow-up Required" est coché.
- **BR-03** : Seuls les IT Staff et Administrateurs peuvent créer une action. Le Requester peut seulement voir.
- **BR-04** : Le champ "Performed by" est rempli automatiquement par le backend avec l'utilisateur authentifié.

## 3. Acceptance Criteria (AC)
- **AC-01** : L'IT Staff peut créer une action avec succès sur un ticket valide.
- **AC-02** : Le système rejette la création d'une action (HTTP 400) si la note de suivi manque alors qu'elle est requise.
- **AC-03** : Le dashboard Requester n'affiche que les tickets appartenant au Requester connecté.
