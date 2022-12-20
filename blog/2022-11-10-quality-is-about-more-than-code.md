---
slug: quality-is-about-more-than-code
title: Quality is about more than code
authors: jordan
tags: [testing, quality, shift-left]
---

When you think about the role of someone in Quality Assurance / Quality Analysis, what do you think of? An individual responsible for testing features? An engineer responsible for writing end-to-end automation tests for web or native mobile apps? Perhaps even a coach whose responsibilities surround ensuring good test coverage for the product. The purpose of this article is to give you two examples that a Quality Analyst can use to think outside the box in terms of possible improvements that can be made.

<!-- truncate -->

> Quality coaching as a practice is about more than just focusing on the code of a product.

Quality coaching involves identifying areas of improvement in everything from the ways of working of a team, to the CI/CD pipelines configured for releasing changes, to the way boards are configured on change management tools.

I am about to pass my fifth anniversary of my quality career. Over the years I have taken on additional responsibilities like release management, out of hours incident response and some amount of business analysis. I have recently been working in a role that looks at the function of a QA as more of quality analysis over assurance. As an analyst, I am expected to be available for my teams, to pair with developers on tasks and even be available to perform code reviews or discuss testing strategies when needed. Outside of those activities, I am also looking at broader changes that could be implemented, be they technical or not, that could either improve the overall way of working for my teams or to improve output.

Ways of working
===============

One of my recent small wins was utilising [Jira’s Automation feature](https://www.atlassian.com/software/jira/features/automation) to essentially remove a manual step for our developers as they progress their changes through the system. While the step itself may only take seconds to action, it is still a pain point, and one that I was keen to address. In a nutshell, our Kanban board uses ‘In Progress’, ‘In Review’ and ‘Done’ statuses. A card is moved from ‘In Progress’ into ‘In Review’, and this is the time when the developers would perform a code review with the card being moved into ‘Done’ upon approval. The pain point was raised between this ‘In Review’ and ‘Done’ transition and two questions were asked:

*   Who is responsible for transitioning this card, is it the developer assigned or is it the person who just moments ago merged the Pull Request?
*   What happens if I forget to move my card? Does this affect our monthly statistics on the team’s output (It does)

With some of my Jira JQL experience I had picked up from a previous role, I was able to quickly throw together an Automation rule that would perform the following steps:

1.  When a pull request for a given card is merged
2.  Check to ensure there are no other open PRs on the card, and the status is in ‘In Review’
3.  Progress the card to the next status

Now here we ask ourselves: is this part of the remit of a QA? Is this something that someone in the role of a Delivery Lead or Scrum Master might do? It is entirely possible that Jira is simply the dominion of Delivery, but I submit that when applying a Quality lens to the aforementioned pain point, we see a simple issue that, when resolved, raises the quality of the ways of working of a team.

Deployment pipelines
====================

In my current workplace we use BuildKite for our CI/CD pipelines. This advice will apply to other platforms I am sure, but I wanted to mention it in case I happen to use any BuildKite specific terminology.

I was recently building out the framework for our end-to-end automation tests for a new product I was working on, and part of this involves taking a look at our pre-existing pipelines and adding steps into our build process to add my test framework as a required step. During the trial and error, a whole lot of jobs were created, some working and some not. Eventually something different began happening. None of my jobs were passing anymore, and checking the logs led me to identify that our build agents were running out of disk space.

Discussing with our Systems Engineers who hold custodianship of that platform within our org, they recommended I review the pipelines just to ensure there’s no unnecessary downloading of files. The review was interesting to say the least. The following issues were identified:

*   Downloading Cypress’ docker image and then proceeding to `npm install cypress` on top of it
*   Recording video with Cypress (on by default) despite us never using or reviewing the videos
*   Building the web application on each step of the build pipeline as opposed to building once, publishing somewhere (e.g. as an artifact) and re-using that image throughout the pipeline

Now to me, this was a quality issue. Our pipelines were not built well enough to run as efficiently as they could. Once this problem had been identified and communicated, fixing it was simply a matter of pairing with our developers to make the necessary changes, but even a simple thing like an improved pipeline had huge impacts on delivery, allowing us to get feedback on changes and make deployments faster, overall improving the experience for our development and delivery teams.
