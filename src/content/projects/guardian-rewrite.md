---
title: Guardian Web App Rewrite
date: Summer 2024
summary: Continuing my Summer of Web Programming, I rewrote a small web app that I built many years ago for a pharmacy in South Florida. The app was originally built with PHP and MySQL, and it was showing its age. I decided to rewrite it with a modern tech stack to make it more correct and maintainable.
linktext: Read more about the new site
published: true
---

## Summary

In the early 2010s, I built a web app for a local pharmacy in South Florida. The app has been used hundreds of times per month since at least 2016, saving thousands of tedious human-hours and improving accuracy.

The app, which was one of the first pieces of software I ever wrote, was originally built with PHP and MySQL, and it was showing its age! In the summer of 2024, I rewrote it with a modern tech stack to make it more correct, more secure, and more maintanable moving forward.

## Background

My mother was a pharmacist. After many years in retail, she started working in management roles. Towards the end of her career, she was Operations Manager at [Guardian Pharmacy Southest Florida](https://www.guardianpharmse.com/), in charge of streamlining the pharmacy's processes. She would often discuss her work and the operational bottlenecks with my father, who was a computer programmer for many years. And occasionally, a bottleneck would be well-suited to letting a computer do the work!

My father's go-to programming language was Perl ([requisite xkcd](https://xkcd.com/519/)), so when they identified a bottleneck that could be scripted away, he would write a little Perl script to solve the problem. He wrote a few of these scripts, and though they were well-received, they were hard to maintain on the pharmacy's Windows machines. The obvious solution was to put the scripts online, so that they could be accessed from anywhere and maintained remotely. But my father was getting ready to retire at this point and didn't want to maintain a web application indefinitely.

I had recently left Berkeley and was starting to self-study Computer Science, so I rolled up my sleeves and translated the Perl scripts into PHP. I also added an SQL database to store usage statistics and built a simple web interface for the pharmacy staff to use. [Heroku](https://www.heroku.com/) made it easy to get it online, connect the database, and view the logs.

This was my first real experience doing web programming, and it was a great starter project! I learned about PHP, MySQL, HTML, CSS, and JavaScript, and I even had a chance to think about data structures and algorithms as I upgraded my dad's "build up one huge string!" approach to something more efficient involving associative arrays.

**These web apps have been used hundreds of times per month since at least 2016, saving thousands of human-hours and improving accuracy.**

## So Why Rewrite Them?

Aside from one regex bug that I remember tracking down, these scripts have been seemingly running smoothly for years. So why rewrite them from scratch? (After all, "Engineers are hired to create business value, not to program things" - [patio11](https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/))

- **More bugs than I thought.** After rewriting the app in a modern tech stack (details below), I wrote tests to compare the output of the current version with the new version to make sure that they agreed. They usually did, but this process revealed a few bugs in the old scripts that had been there for years.

- **No communication channels.** Why didn't someone tell me about those bugs? Well, my mom hasn't worked at Guardian Pharmacy for a long time, so it probably wasn't obvious to the current staff how they could reach out to improve the software.

  At the bottom of every page on the new site, there's a link that tells users how to report a problem, request a feature, or even suggest a whole new app! Automating tedious work is a great way to improve a business, and I want to make it as easy as possible for the pharmacy staff to make that happen.

- **Maintainability.** Even if someone had reached out to report a bug or request a new feature, it might have been tough for me to help. The old scripts were poorly designed and hard to understand - they were basically my first programming project, after all! The new scripts are organized, documented, and follow software "best practices" much more closely than the old version. And since it's all much fresher in my head, I can help out much more easily.

- **Performance and Security.** The old version did its crunching on the server side; the new version computes on the client. This means that the server doesn't have to do as much work, and the client can see results faster - think milliseconds instead of seconds. The new version also uses modern security practices to protect the data and users.

## The New Tech Stack

So what technologies did I use to rewrite the app, to make it more correct, more secure, and more maintainable moving forward?

Given that the app is essentially a collection of static pages with forms to upload data, I used [Astro](https://astro.build/) as my foundation. This means that the site is fast to load and secure to run, since there's no server-side code to exploit. I used vanilla CSS and [Tailwind CSS](https://tailwindcss.com/) (including some great defaults from [`prose` mode](https://github.com/tailwindlabs/tailwindcss-typography)) to style the site.

Astro plays nicely with [React](https://reactjs.org/), which I used for the interactive parts of the site: uploading data files, displaying the results, and so on. I used [Typescript](https://www.typescriptlang.org/) to write the React components, so that static typing would catch bugs during development.

I also used [Jest](https://jestjs.io/) for unit testing and [Playwright](https://playwright.dev/) for end-to-end testing, including those tests I mentioned above that compare the current version with my new version. The [VS Code](https://code.visualstudio.com/) integration made it easy to run tests and see results.

I used [git](https://git-scm.com/) for version control and [GitHub](https://www.github.com/) to host the repository. GitHub's integration with [Netlify](https://www.netlify.com/) made it easy to deploy Staging and Production versions of the site and see the results of my changes in real-time. Netlify Functions provided a serverless backend for the site, which made it easy to send usage statistics to my [Supabase](https://supabase.io/) database. And GitHub Actions automated the process of compiling monthly usage data into monthly summaries, which are available on the website.

It was essentially a slightly more complicated version of my personal site -- a few more moving parts and a few more opportunities to learn new things. I'm excited to see how it helps the pharmacy staff and what I can learn from their feedback!
