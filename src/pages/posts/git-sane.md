---
title: Better git command names
pubDate: 2022-05-17
excerpt: Getting comfortable with git is famously challenging, and I do believe part of this is that git commands are named very poorly.
layout: ../../layouts/BlogPost.astro
---

## Presentation

I presented this content in a light-hearted lightning talk at Prezi's Draft Conference in 2022:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/91J19QG5pzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Introduction

Getting comfortable with git is famously challenging, and I do believe part of this is that git commands are named very
poorly. The documentation often only manages to increase confusion — see the [git-man-page-generator](https://git-man-page-generator.lokaltog.net/) for a hilarious
demonstration of what most of us feel like while trying to make sense of git docs.

Is it `reset`, `revert`, or `restore`? Is it `--cached` or `--staged`? If adding something to the staging area is called `add`, why
is removing it from the staging area not called `remove`? What the hell is `rev-parse --abbrev-ref` supposed to mean? After
years on years of working with git on a daily basis, the frustration never really went away. So, in true Naming Things
is Hard fashion, here are my git aliases that make it ever so slightly easier to make sense of the workflow.

You can import them from the related [git repository](https://github.com/endreymarcell/git-sane).

## Navigation

- `info` (`i`) = `status --short` (mostly because st is taken by stage)
- `list-branches` (`lb`) = `branch`
- `select-branch` (`sb`) = `switch`
- `new-branch` (`nb`) = `switch -c`
- `jump-to` (`j`) = `checkout` (used for commits)

## Staging

- `stage` (`st`) = `add` (requires path)
- `stage-all` (`sa`) = `add :/` (stage all files in the repo starting from the root)
- `stage-some` (`ss`) = `add -a` (interactively select files to stage)
- `stage-lines` (`sl`) = `add -p`
- `unstage` (`us`) = `restore` (requires path)
- `unstage-all` (`usa`) = `restore :/`
- `diff-staged` (`ds`) = `diff --staged` (I never understood why people use 'cached', not 'staged' for this command)

## Committing

- `commit` (`cm`) = `commit` (included here for completeness)
- `commit-all` (`cma`) = `stage-all && commit` (let's avoid having to introduce the concept of 'tracked' and 'untracked' files - if I ask git to commit all, I really meant all).
- `uncommit` (`unc`) = `reset @^` (do the opposite of what commit did)
- `drop-commit` (`drop`) = `reset --hard @^` (get rid of it altogether)
- `undo-unstaged` (`u`) = `restore :/` (as if you had pressed undo in your editor)
- `rewrite-history` (`rh`) = `rebase -i` (interactive rebasing hasn't much to do with rebasing, and 'rebasing' is a hard concept to work with anyway, so let's just name this the way people think of it)

## Other

- `name-for` = `rev-parse --abbrev-ref`
- `last` = `show @`
- `append` = `commit --amend --no-edit`
- `wip` = `commit -am WIP --no-verify`

## Abbreviations

On top of these git aliases, I have a handful of super-short versions too. I use fish abbreviations for this, but based
on which shell you use, these might also be aliases or shortcuts.

- `gsm` = `git select-branch master` (actually, mine is a function that auto-detects if the repo uses master or main and switches to the right one)
- `gpl` = `git pull`
- `gps` = `git push`
- `gpf` = `git push --force` (also `--no-shame`)
- `gup` = `gsm && gpl`
- `gs` = `git stage-all`
- `gic` = `git commit -a`
- `gica` = `git commit -am`
- `gapp` = `git append`
- `gh` = open the repository's URL in the default browser at the currently active branch
