---
slug: incident-response-as-a-qa
title: Incident response as a QA
authors: jordan
tags: [quality, devops]
image: https://images.pexels.com/photos/280076/pexels-photo-280076.jpeg
---

This may surprise you, but I think Quality Analysts should be exposed to the incident response world at least once or twice every six months. Hear me out.

Incidents occur generally speaking as a result of some sort of failure in the process. In my experience, the majority of incidents I see are to do with broken deployments or bad code going into production. These are all examples of quality issues.

While I don't exactly love the idea of being on call 24/7, I do like having the ability to review the current documentation that teams have, to dive into the steps we have and the scenarios we cover (as well as the ones we don't) and look at what we have [playbooks](https://www.atlassian.com/incident-management/incident-response/how-to-create-an-incident-response-playbook) for. While QA's are often seen as being software testers, the role has more recently evolved into analysing process and implementing changes to make the SDLC itself more efficient, in other words to be of better quality. 

I've definitely said it before, but:

<!-- truncate -->

> Quality coaching as a practice is about more than just focusing on the code of a product.

Effective incident response requires a systematic and well-defined approach. Poorly documented incident response processes often lack clear guidelines, checklists, and workflows. As a result, when incidents occur, response efforts become ad hoc and prone to error. Engineers will often waste valuable time trying to piece together fragments of information, leading to delays in resolution and prolonged system downtime. Additionally, inconsistent response procedures across incidents can introduce variability and further complicate the recovery process.

I wanted to point out some areas that Quality Analysts can look at when reviewing incident response documentation.

## Lack of Scalability and Adaptability

Software systems evolve over time, and incident response processes must adapt accordingly. However, without proper documentation, incident response becomes a black box that inhibits scalability and adaptability. When new engineers join a team or when organizations undergo growth or restructuring, the absence of well-documented incident response procedures hinders the onboarding process and slows down the team's ability to respond effectively. Furthermore, changes in the software infrastructure or deployment practices can render outdated documentation useless, making it difficult to align incident response with the evolving system landscape.

## Knowledge Transfer and Continuous Improvement
Incidents provide invaluable opportunities for learning, knowledge transfer, and continuous improvement. Well-documented incident response processes facilitate post-incident reviews, enabling teams to identify root causes, implement preventive measures, and share lessons learned. Without comprehensive documentation (or even documentation of past incidents at all), these opportunities are lost. There is also the chance of the same mistakes happening again. The absence of a feedback loop hampers the growth of engineers and prevents the organization from building robust systems and resilient teams.

Ultimately, poorly documented incident response procedures are quality issues. Hindered knowledge transer, lack of scalability or adaptability, and stale, never improved upon standards are all things that don't seem like problems in the short term but hit hard much later. To mitigate these risks, QAs can review documentation, ask questions (especially if you don't even know what the incident response process is!)

Our role heavily relies upon us being curious and to be willing to think of the 'what ifs' which puts us in the perfect position to help shape incident response documentation.